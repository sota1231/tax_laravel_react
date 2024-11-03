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
        Schema::create('sortings', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('balance'); // 簡易簿記　収入０　支出が１
            $table->integer('kari_name_id');
            $table->integer('kari_price');
            $table->integer('kashi_name_id');
            $table->integer('kashi_price');
            $table->text('remarks');
            $table->dateTime('day')->nullable();
            // $table->rememberToken();
            // $table->timestamps();
        });

        $qb = DB::table('sortings');
        $insert = [
           [
                'user_id'=>0,
                'balance'=>0,
                'kari_name_id'=>0,
                'kari_price'=>0,
                'kashi_name_id'=>0,
                'kashi_price'=>0,
                'remarks'=>'初期状態',
           ],
        ];
        $qb->insert($insert);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sortings');
    }
};
