<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Eloquent;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Sorting
 * 
 * @property int $id
 * @property int $user_id
 * @property string $kari_name
 * @property int $kari_price
 * @property string $kashi_name
 * @property int $kashi_price
 * @property string $remarks
 * @property Carbon|null $day
 *
 * @package App\Models
 */
class Sorting extends Model
{
	protected $table = 'sortings';
	public $timestamps = false;

	protected $casts = [
		'user_id' => 'int',
		'kari_price' => 'int',
		'kashi_price' => 'int',
		'day' => 'datetime'
	];

	protected $fillable = [
		'user_id',
		'kari_name',
		'kari_price',
		'kashi_name',
		'kashi_price',
		'remarks',
		'day'
	];
}
