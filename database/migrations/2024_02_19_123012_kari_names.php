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
            $table->string('name');
        });

        $qb = DB::table('kari_names');
        $insert = [
           [
                // 'id' => null,
                'name' => '売上げ',
           ],
           [
                // 'id' => null,
                'name' => '現金',
           ],
           [
                // 'id' => null,
                'name' => '水道光熱費',
           
           ],
            [
                // 'id' => null,
                'name' => '消耗品費',
            ],
            [
                'name'=>'会議費'
            ],
            [
                'name'=>'接待交際費'
            ],
            [
                'name'=>'通信費'
            ],
            [
                'name'=>'広告宣伝費'
            ],
            [
                'name'=>'修繕費'
            ],
            [
                'name'=>'旅費交通費'
            ],
            [
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
