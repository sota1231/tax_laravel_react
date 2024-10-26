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
 * Class Kyuyo
 * 
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property int $price
 * @property string $remarks
 * @property Carbon|null $day
 *
 * @package App\Models
 */
class Kyuyo extends Model
{
	use HasFactory;

    public function alldata($id){
        return DB::table('kyuyos')
        ->select('*')
        ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
        ->where('user_id',$id,0)
        ->orderBy('day','DESC')
        ->paginate(10)
        ->withQueryString();
    }

    public function kyuyo_updata($id){
        return DB::table('kyuyos')
        ->select('*')
        ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
        ->where('id',$id)
        ->first();
    }

    public function sumKyuyo($id){
        return DB::table('kyuyos')
        ->selectRaw('sum(price) as sum')
        ->where('user_id',$id,0)
        // ->groupBy('price')
        ->first();
    }

    public function register($request){
        $id = Auth::id();
        $param = [
            'name'=>$request->name,
            'price' => $request->price,
            'remarks'=>$request->remarks,
            'day'=>$request->day,
            'user_id'=>$id
        ];
        DB::insert('insert into kyuyos (name,price,remarks,day,user_id) 
                    values(:name,:price,:remarks,:day,:user_id)',$param);
    }
}
