<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
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

    public function alldata($id)
    {
        return DB::table('sortings')
            ->select('*')
            ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
            ->where('user_id', $id)
            ->orderBy('day', 'DESC')
            ->paginate(10)
            ->withQueryString();
    }

    public function sorting_updata($id)
    {
        return DB::table('sortings')
            ->select('*')
            ->selectRaw('DATE_FORMAT(day,"%Y-%m-%d") as date')
            ->where('id', $id)
            // ->orderBy('day','DESC')
            ->first();
    }

    // 複式簿記　TAX＝＝＝＝＝
    //（借方の売上げー貸方売上げ）ー（貸方の経費ー借方の経費）
    // 借方の売上げと貸方の売上げ
    // TODO:合計が合わない
    public function sumFukuSales($id)
    {
        return DB::table('sortings')
            ->selectRaw('sum(kari_price) as sumKari, sum(kashi_price) as sumKashi')
            ->join('kari_names','sortings.kari_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            // ->where('sortings.kari_name_id', 1)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 1)
            ->groupBy('sortings.kari_name_id')
            ->get();
    }

    public function sumKariSales($id)
    {
        return DB::table('sortings')
            ->selectRaw('COALESCE(sum(kari_price), 0) as sumKari')
            ->join('kari_names','sortings.kari_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            // ->where('sortings.kari_name_id', 1)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 1)
            ->groupBy('sortings.kari_name_id')
            ->first();
    }
    public function sumKashiSales($id)
    {
        return DB::table('sortings')
            ->selectRaw('COALESCE(sum(kashi_price), 0) as sumKashi')
            ->join('kari_names','sortings.kashi_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            // ->where('sortings.kari_name_id', 1)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 1)
            ->groupBy('sortings.kashi_name_id')
            ->first();
    }

    // 借方の経費と貸方の経費 
    // 使わない
    public function sumFukuCost($id)
    {
        return DB::table('sortings')
            ->selectRaw('sum(kari_price) as sumKari, sum(kashi_price) as sumKashi')
            ->join('kari_names','sortings.kari_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 0)
            ->first();
    }
    // 借方経費合計
    public function sumKariCost($id)
    {
        return DB::table('sortings')
            ->selectRaw('COALESCE(sum(kari_price), 0) as sumKari')
            ->join('kari_names','sortings.kari_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            // ->where('sortings.kari_name_id', 1)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 0)
            ->groupBy('sortings.kari_name_id')
            ->first();
    }
    public function sumKashiCost($id)
    {
        return DB::table('sortings')
            ->selectRaw('COALESCE(sum(kashi_price), 0) as sumKashi')
            ->join('kari_names','sortings.kashi_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            // ->where('sortings.kari_name_id', 1)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 0)
            ->groupBy('sortings.kashi_name_id')
            ->first();
    }


    // 簡易簿記＝＝＝＝＝＝＝＝＝＝＝＝＝
    // 簡易簿記の経費の合計
    // JOINせずbalance見てもOK　カラム消すのも検討
    public function sumCost($id)
    {
        return DB::table('sortings')
            ->selectRaw('sum(kari_price) as sum')
            ->join('kari_names','sortings.kari_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 0)
            ->first();
    }

    // 簡易簿記の売上げ合計
    public function sumSales($id)
    {
        return DB::table('sortings')
            ->selectRaw('sum(kari_price) as sum')
            ->join('kari_names','sortings.kari_name_id','kari_names.id')
            ->where('user_id', $id, 0)
            ->where('kari_names.kinds', 1)
            ->where('kari_names.left', 1)
            ->first();
    }
    

    // 貸方合計＝売上
    // 現金以外
    // public function sumKashiPrice($id)
    // {
    //     return DB::table('sortings')
    //         // ->select('sum')
    //         ->selectRaw('sum(kashi_price) as sum')
    //         ->where('user_id', $id, 0)
    //         ->where('kashi_name_id', '!=', '現金')
    //         // ->groupBy('kashi_price')
    //         ->first();
    // }

    public function register($request)
    {
        $user = Auth::user();
        if ($user->role == 1) {
            $param = [
                'kari_name_id' => $request->kari_name_id,
                'kari_price' => $request->kari_price,
                'kashi_name_id' => $request->kashi_name_id,
                'kashi_price' => $request->kashi_price,
                'remarks' => $request->remarks,
                'day' => $request->day,
                'balance'=>'3',
                'user_id' => $user->id,
            ];
            
        }else if ($user->role == 2) {
            $param = [
                'kari_name_id' => $request->name_id,
                'kari_price' => $request->price,
                'kashi_name_id' => $request->name_id,
                'kashi_price' => $request->price,
                'remarks' => $request->remarks,
                'day' => $request->day,
                'balance'=>$request->balance,
                'user_id' => $user->id,
            ];

        }else {
            // 404
        }
        DB::insert('insert into sortings (kari_name_id,kari_price,kashi_name_id,kashi_price,remarks,day,balance,user_id) 
                    values(:kari_name_id,:kari_price,:kashi_name_id,:kashi_price,:remarks,:day,:balance,:user_id)', $param);
    }
}
