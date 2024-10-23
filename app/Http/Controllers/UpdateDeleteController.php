<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeductionRequest;
use App\Http\Requests\KyuyoRequest;
use Illuminate\Http\Request;
use App\Models\Services\Sorting;
use App\Models\Services\KariName;
use App\Models\Services\Kyuyo;
use Illuminate\Support\Facades\DB;
use App\Models\Services\Deduction;
use App\Models\Services\Ratio;
use App\Http\Requests\SortingRequest;


class UpdateDeleteController extends Controller
{
    // 複式簿記編集画面
    public function edit(Request $request){
        $sorting = new Sorting();
        $sortings = $sorting->sorting_updata($request->id);

        $kari = new KariName();
        $kari_names=$kari->kari();
        return view('kino.update' , ['sortings'=>$sortings,'kari_names'=>$kari_names]);
    }
    public function update(SortingRequest $request){
        $param = [
            'id'=>$request->id,
            'kari_name' => $request->kari_name,
            'kari_price'=>$request->kari_price,
            'kashi_name'=>$request->kashi_name,
            'kashi_price'=>$request->kashi_price,
            'day'=>$request->day,
            'remarks'=>$request->remarks,
            'user_id'=>$request->user_id
        ];
        
        DB::update('update sortings set 
                kari_name =:kari_name, 
                kari_price =:kari_price, 
                kashi_name =:kashi_name,
                kashi_price=:kashi_price,
                day =:day,
                remarks =:remarks,
                user_id =:user_id 
                where id =:id',$param);

        return redirect()->route('index');

    }
    public function delete(Request $request){
        $param=['id'=>$request->id];
        DB::delete('delete from sortings where id=:id',$param);
        DB::delete('delete from deductions where user_id=:id',$param);
        DB::delete('delete from kyuyos where user_id=:id',$param);
        

        return redirect()->route('index');

    }

    // 給与更新・削除
    public function kyuyo_edit(Request $request){
        // $kyuyos = Kyuyo::find($request->id);
        $kyuyo = new Kyuyo();
        $kyuyos = $kyuyo->kyuyo_updata($request->id);
        return view('kino.kyuyoUpdate' , ['kyuyos'=>$kyuyos]);
    }
    public function kyuyo_update(KyuyoRequest $request){
        $param = [
            'id'=>$request->id,
            'name' => $request->name,
            'price'=>$request->price,
            'day'=>$request->day,
            'remarks'=>$request->remarks,
            'user_id'=>$request->user_id
        ];
        
        DB::update('update kyuyos set 
                name =:name, 
                price =:price, 
                day =:day,
                remarks =:remarks,
                user_id =:user_id 
                where id =:id',$param);

        return redirect()->route('kyuyo');
    }
    public function kyuyo_delete(Request $request){
        $param=['id'=>$request->id];
        DB::delete('delete from kyuyos where id=:id',$param);

        return redirect()->route('kyuyo');
    }

    // 控除更新・削除
    public function deduction_edit(Request $request){
        // $deductions = Deduction::find($request->id);
        $deduction = new Deduction();
        $deductions = $deduction->deduction_updata($request->id);
        return view('kino.deductionUpdate' , ['deductions'=>$deductions]);
    }
    public function deduction_update(DeductionRequest $request){
        $param = [
            'id'=>$request->id,
            'name' => $request->name,
            'price'=>$request->price,
            'day'=>$request->day,
            'remarks'=>$request->remarks,
            'user_id'=>$request->user_id
        ];
        
        DB::update('update deductions set 
                name =:name, 
                price =:price, 
                day =:day,
                remarks =:remarks,
                user_id =:user_id 
                where id =:id',$param);

        return redirect()->route('deduction');

    }
    public function deduction_delete(Request $request){
        $param=['id'=>$request->id];
        DB::delete('delete from deductions where id=:id',$param);

        return redirect()->route('deduction');
    }

    // 家事按分編集画面・更新処理
    public function kaji_edit(Request $request){
        $ratio = new Ratio(); 
        $ratios = $ratio->data($request->id);
        return view('kino.kajiUpdate' , ['ratios'=>$ratios]);
    }

    public function kaji_update(Request $request){
        $param = [
            'id'=>$request->id,
            'name' => $request->name,
            'ratio'=>$request->ratio,
            'user_id'=>$request->user_id
        ];
        
        DB::update('update deductions set 
                name =:name, 
                price =:price, 
                day =:day,
                remarks =:remarks,
                user_id =:user_id 
                where id =:id',$param);

        return redirect()->route('deduction');

    }

    // 管理者
    public function user_delete(Request $request){
        $param=['id'=>$request->id];
        DB::delete('delete from users where id=:id',$param);

        return redirect()->route('index');
    }
}