<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;

/**
 * Class KariName
 * 
 * @property int $id
 * @property string $name
 *
 * @package App\Models
 */
class KariName extends Model
{
	use HasFactory;

    public function kari(){
        return DB::table('kari_names')
         ->select('id','name')
         ->get();
         
    }
}
