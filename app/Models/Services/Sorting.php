<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Services;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;

/**
 * Class Sorting
 * 
 * @property int $id
 * @property int $user_id
 *
 * @package App\Models
 */
class Sorting extends Model
{
	use HasFactory;

    public function alldata($id){
        return DB::table('sortings')
        ->select('*')
        ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
        ->where('user_id',$id)
        ->orderBy('day','DESC')
        // ->get();
        ->paginate(20);
    }

    public function sorting_updata($id){
        return DB::table('sortings')
        ->select('*')
        ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
        ->where('id',$id)
        // ->orderBy('day','DESC')
        ->first();
    }

    // 借方合計＝経費
    // 現金以外
    public function sumPrice($id){
        return DB::table('sortings')
        // ->select('sum')
        ->selectRaw('sum(kari_price) as sum')
        ->where('user_id',$id,0)
        ->where('kari_name','!=','現金')
        // ->groupBy('kari_price')
        ->first();
    }

    // 貸方合計＝売上
    // 現金以外
    public function sumKashiPrice($id){
        return DB::table('sortings')
        // ->select('sum')
        ->selectRaw('sum(kashi_price) as sum')
        ->where('user_id',$id,0)
        ->where('kashi_name','!=','現金')
        // ->groupBy('kashi_price')
        ->first();
    }

    public function register($request){
        $param = [
            'kari_name'=>$request->kari_name,
            'kari_price' => $request->kari_price,
            'kashi_name'=>$request->kashi_name,
            'kashi_price'=>$request->kashi_price,
            'remarks'=>$request->remarks,
            'day'=>$request->day,
            'user_id'=>$request->user_id
        ];
        DB::insert('insert into sortings (kari_name,kari_price,kashi_name,kashi_price,remarks,day,user_id) 
                    values(:kari_name,:kari_price,:kashi_name,:kashi_price,:remarks,:day,:user_id)',$param);
    }
}
