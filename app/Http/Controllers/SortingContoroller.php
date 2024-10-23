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

class SortingContoroller extends Controller{

    // ログインユーザーのみ
    // public function __construct(){
    //     $this->middleware('auth');
    // }

    // top画面
    public function index(){
        // $user = Auth::user();
        // TODO:まだ認証機能ないため
        $user=1;
        if($user==1){
            // if($user->role==1){
                $kari = new KariName();
            $kari_names=$kari->kari();
            // 仕分けのデータを取得してtabelを作成する

            // TODO:まだ認証機能ないため
            // $id = Auth::id();
            $id =1;
            $sorting = new Sorting();
            $sortings =$sorting->alldata($id); 
            return Inertia::render('view/Index', ['kari_names'=>$kari_names,'sortings'=>$sortings]);
        
        //　roleが０なら管理者画面へ遷移 
        }else{
            $users = DB::table('users')->select('*')->selectRaw('DATE_FORMAT(created_at,"%Y-%m-%d") as day') ->paginate(20); 
            return Inertia::render('view.Kanri',['users'=>$users]);
        }
    }

    // TODO:バリデーションチェック
    public function store(sortingRequest $request){
        $sorting = new Sorting();
        $sortings =$sorting->register($request); 
        return Redirect::route('Index');
    }

    // 給料入力画面
    public function kyuyo(){
        // $id = Auth::id();
        // TODO:Authの機能を追加する
        $id =1;
        $kyuyo = new Kyuyo();
        $kyuyos = $kyuyo->alldata($id);
        return Inertia::render('kino/Kyuyo',['kyuyos'=>$kyuyos]);
    }

    // 給料登録画面
    public function kyuyo_register(KyuyoRequest $request){
        $kyuyo = new Kyuyo();
        $kyuyos =$kyuyo->register($request); 
        return Inertia::render('kino/Kyuyo');
    }


    // 控除登録画面
    public function deduction(){
        // TODO:Authの機能を追加する
        // $id = Auth::id();
        $id =1 ;
        $deduction = new Deduction();
        $deductions = $deduction->alldata($id);
        return Inertia::render('kino/Deduction',['deductions'=>$deductions]);
    }

    public function deduction_register(DeductionRequest $request){
        $deduction = new Deduction();
        $deductions =$deduction->register($request); 
        return Redirect::route('deduction');
    }

    public function tax(){
        // sortingのuser_idとnameが売上げのデータの合計
        // TODO:Authの機能を追加する
        // $id = Auth::id();
        $id =1 ;
        $sorting = new Sorting();
        $kari = $sorting->sumPrice($id);
        // sortingのuser_idとnameが消耗品、、、、のデータの合計
        $kashis = new Sorting();
        $kashi = $kashis->sumKashiPrice($id);

        // kyuyoのuser_idとnameがpriceの合計
        $kyuyos = new Kyuyo();
        $kyuyo = $kyuyos->sumKyuyo($id);

        // deductionのuser_idとroleが1のpriceの合計
        $deductions = new Deduction();
        $deduction = $deductions->sumRole0($id);

        // deductionのuser_idとroleが0のpriceの合計
        $deductions1 = new Deduction();
        $deduction1 = $deductions1->sumRole1($id);



        return Inertia::render('kino/Tax',['kashi'=>$kashi,'kari'=>$kari,'deduction'=>$deduction,'deduction1'=>$deduction1,'kyuyo'=>$kyuyo]);
    }
}
