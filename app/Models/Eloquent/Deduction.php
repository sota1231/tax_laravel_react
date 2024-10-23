<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Eloquent;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Deduction
 * 
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property int $price
 * @property string $remarks
 * @property Carbon|null $day
 * @property int $role
 *
 * @package App\Models
 */
class Deduction extends Model
{
	protected $table = 'deductions';
	public $timestamps = false;

	protected $casts = [
		'user_id' => 'int',
		'price' => 'int',
		'day' => 'datetime',
		'role' => 'int'
	];

	protected $fillable = [
		'user_id',
		'name',
		'price',
		'remarks',
		'day',
		'role'
	];
}
