<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SortingRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Services\KariName;
use App\Models\Services\Sorting;
use Illuminate\Support\Facades\Auth;
use App\Models\Services\Kyuyo;
use App\Models\Services\Deduction;
use App\Http\Requests\DeductionRequest;
use App\Http\Requests\KyuyoRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SortingContoroller extends Controller
{

    // ログインユーザーのみ
    // public function __construct(){
    //     $this->middleware('auth');
    // }

    // 仕分け登録画面 ==============================================
    public function index()
    {
        $user = Auth::user();
        $sorting = new Sorting();
        $kari = new KariName();
        // 複式簿記ユーザー
        if ($user->role == 1) {
            $kari_names = $kari->kari();
            $id = Auth::id();
            $sortings = $sorting->alldata($id);
            return Inertia::render('view/Index', [
                'kari_names' => $kari_names,
                'sortings' => $sortings,
                'flash' => [
                    'message' => session('message')
                ]
            ]);

            // 簡易簿記ユーザー
        } else if ($user->role == 2) {
            $id = Auth::id();
            $kari_names = $kari->kani_kari();

            $sorting = new Sorting();
            $sortings = $sorting->alldata($id);
            return Inertia::render('view/SimpleIndex', [
                'kari_names' => $kari_names,
                'sortings' => $sortings,
                'flash' => [
                    'message' => session('message')
                ]
            ]);

            //　roleが０なら管理者画面へ遷移 
        } else if ($user->role == 0) {
            $users = DB::table('users')->select('*')->selectRaw('DATE_FORMAT(created_at,"%Y-%m-%d") as day')->paginate(20);
            return Inertia::render('view/Manager', [
                'users' => $users,
                'flash' => [
                    'message' => session('message')
                ]
            ]);
        } else {

            // TODO:404を作成する
            return;
        }
    }
    public function store(SortingRequest $request)
    {
        $sorting = new Sorting();
        $sortings = $sorting->register($request);
        return Redirect::route('index')->with('message', '仕分けが正常に登録されました。');
    }

    // 控除登録画面 ====================================
    public function deduction()
    {
        $user = Auth::user();
        $deduction = new Deduction();
        $deductions = $deduction->alldata($user->id);
        return Inertia::render('kino/Deduction', [
            'deductions' => $deductions,
            'user' => $user,
            'flash' => [
                'message' => session('message')
            ]
        ]);
    }
    public function deduction_register(DeductionRequest $request)
    {
        $deduction = new Deduction();
        $deductions = $deduction->register($request);
        return Redirect::route('deduction')->with('message', '控除が正常に登録されました。');
    }

    // 給料入力画面 ======================================
    public function kyuyo()
    {
        $id = Auth::id();
        $kyuyo = new Kyuyo();
        $kyuyos = $kyuyo->alldata($id);
        return Inertia::render('kino/Kyuyo', [
            'kyuyos' => $kyuyos,
            'flash' => [
                'message' => session('message')
            ]
        ]);
    }
    public function kyuyo_register(KyuyoRequest $request)
    {
        $kyuyo = new Kyuyo();
        $kyuyos = $kyuyo->register($request);
        return Redirect::route('kyuyo')->with('message', '給与が正常に登録されました。');
    }

    //  
    public function tax()
    {
        $user = Auth::user();
        $id = $user->id;
        $sorting = new Sorting();

        // 複式簿記ユーザーの事業所得の計算
        if ($user->role == 1) {
            // 売上げ合計
            $sales_kari  = $sorting->sumKarisales($id);   // 借方の売上げ合計
            $sales_kashi = $sorting->sumKashiSales($id);  // 貸方の売上げ合計
            $sales = ($sales_kashi? $sales_kashi->sumKashi : 0) - ($sales_kari? $sales_kari->sumKari : 0);
            // 経費合計
            $cost_kari  = $sorting->sumKariCost($id);   // 借方の経費合計
            $cost_kashi = $sorting->sumKashiCost($id);  // 貸方の経費合計
            $cost = ($cost_kari? $cost_kari->sumKari : 0) - ($cost_kashi? $cost_kashi->sumKashi : 0);
        
        // 簡易簿記ユーザーの事業所得の計算
        } else if ($user->role == 2) {
            $sales_sum = $sorting->sumSales($id); // 売上げの合計
            $sales = $sales_sum->sum;
            $cost_sum = $sorting->sumCost($id); // 経費の合計
            $cost  = $cost_sum->sum;
        }
        // kyuyoのuser_idとnameがpriceの合計
        $kyuyos = new Kyuyo();
        $kyuyo = $kyuyos->sumKyuyo($id);

        // deductionのuser_idとroleが1のpriceの合計
        $deductions = new Deduction();
        $deduction = $deductions->sumRole0($id);

        // deductionのuser_idとroleが0のpriceの合計
        $deductions1 = new Deduction();
        $deduction1 = $deductions1->sumRole1($id);

        return Inertia::render('kino/Tax', ['sales' => $sales, 'cost' => $cost, 'deduction' => $deduction, 'deduction1' => $deduction1, 'kyuyo' => $kyuyo, 'user' => $user]);
    }
}
