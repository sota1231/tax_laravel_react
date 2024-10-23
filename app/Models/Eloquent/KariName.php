<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Eloquent;

use Illuminate\Database\Eloquent\Model;

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
	protected $table = 'kari_names';
	public $timestamps = false;

	protected $fillable = [
		'name'
	];
}
