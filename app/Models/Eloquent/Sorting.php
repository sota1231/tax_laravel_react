<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Eloquent;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

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
	use HasFactory, Notifiable;
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
		'kari_name_id',
		'kari_price',
		'kashi_name_id',
		'kashi_price',
		'remarks',
		'day'
	];
}
