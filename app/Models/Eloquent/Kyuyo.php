<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Eloquent;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

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
	protected $table = 'kyuyos';
	public $timestamps = false;

	protected $casts = [
		'user_id' => 'int',
		'price' => 'int',
		'day' => 'datetime'
	];

	protected $fillable = [
		'user_id',
		'name',
		'price',
		'remarks',
		'day'
	];
}
