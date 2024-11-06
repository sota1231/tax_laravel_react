<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('deductions', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            // $table->string('name');
            $table->integer('price')->default(0);
            $table->text('remarks');
            $table->dateTime('day')->nullable();
            $table->integer('role')->default(0);
            // $table->rememberToken();
            // $table->timestamps();
        });

        $qb = DB::table('deductions');
        $insert = [
           [
                // 'name' => '初期状態',
                'price'=>0,
                'remarks'=>'初期状態',
                'user_id'=>0,
                'role'=>0,
           ],
           [
                // 'name' => '初期状態',
                'price'=>0,
                'remarks'=>'初期状態',
                'user_id'=>0,
                'role'=>1,
       ],
        ];
        $qb->insert($insert);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deductions');
    }
};
