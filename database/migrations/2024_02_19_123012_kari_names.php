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
        Schema::create('kari_names', function (Blueprint $table) {
            $table->id();
            $table->integer('kinds'); // 貸借対照表・・・０
            $table->integer('left'); // 左になると＋になる場合・・・０
            $table->string('name');
        });

        $qb = DB::table('kari_names');
        $insert = [
           [
                'kinds'=> 1,
                'left' => 1,
                'name' => '売上げ',
           ],
           [
                'kinds'=> 0,
                'left' => 0,
                'name' => '現金',
           ],
           [
                'kinds'=> 1,
                'left' => 0,
                'name' => '水道光熱費',
           
           ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name' => '消耗品費',
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'会議費'
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'接待交際費'
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'通信費'
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'広告宣伝費'
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'修繕費'
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'旅費交通費'
            ],
            [
                'kinds'=> 1,
                'left' => 0,
                'name'=>'車両費'
            ],

       ];
        
       $qb->insert($insert);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kari_names');
    }
};
