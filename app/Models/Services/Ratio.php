<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Ratio extends Model
{
    use HasFactory;

    public function data($id){
        return DB::table('ratios')
        ->select('*')
        ->where('user_id',$id)
        ->orWhere('user_id',0)
        ->get();
    }
}
