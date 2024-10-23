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
        Schema::create('kyuyos', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('name');
            $table->integer('price')->default(0);
            $table->text('remarks');
            $table->dateTime('day')->nullable();
            // $table->rememberToken();
            // $table->timestamps();
        });

        $qb = DB::table('kyuyos');
        $insert = [
           [
                'name' => '初期状態',
                'price'=>0,
                'remarks'=>'初期状態',
                'user_id'=>0,
           ],
        ];
        $qb->insert($insert);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kyuyos');
    }
};
