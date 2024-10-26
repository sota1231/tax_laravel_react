<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Services;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Class Deduction
 * 
 * @property int $id
 * @property int $user_id
 *
 * @package App\Models
 */
class Deduction extends Model
{
	use HasFactory;

    public function alldata($id){
        return DB::table('deductions')
        ->select('*')
        ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
        ->where('user_id',$id)
        ->orderBy('day','DESC')
        ->paginate(10)
        ->withQueryString();
    }

    public function deduction_updata($id){
        return DB::table('deductions')
        ->select('*')
        ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
        ->where('id',$id)
        ->first();
    }

    // roleが0
    // 通常控除
    public function sumRole0($id){
        return DB::table('deductions')
        // ->select('sum')
        ->selectRaw('sum(price) as sum')
        ->where('user_id',$id,0)
        ->where('role',0)
        // ->groupBy('price')
        ->first();
    }

    // role1が１
    public function sumRole1($id){
        return DB::table('deductions')
        // ->select('sum')
        ->selectRaw('sum(price) as sum')
        ->where('user_id',$id,0)
        ->where('role',1)
        // ->groupBy('price')
        ->first();
    }

    // TODO:遷移先は？　控除
    public function register($request){
        $id = Auth::id();
        $param = [
            'name'=>$request->name,
            'price' => $request->price,
            'remarks'=>$request->remarks,
            'day'=>$request->day,
            'role'=>$request->role,
            'user_id'=>$id
        ];
        DB::insert('insert into deductions (name,price,remarks,day,role,user_id) 
                    values(:name,:price,:remarks,:day,:role,:user_id)',$param);
    }
}
