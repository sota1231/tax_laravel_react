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
            $table->string('kari_name');
            $table->integer('kari_price')->default(0);
            $table->string('kashi_name');
            $table->integer('kashi_price')->default(0);
            $table->text('remarks');
            $table->dateTime('day')->nullable();
            // $table->rememberToken();
            // $table->timestamps();
        });

        $qb = DB::table('sortings');
        $insert = [
           [
                'user_id'=>0,
                'kari_name'=>'初期状態',
                'kari_price'=>0,
                'kashi_name'=>'初期状態',
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
