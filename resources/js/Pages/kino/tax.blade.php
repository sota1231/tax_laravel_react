@extends('layouts.layout-1')

@section('content')

<div class="container p-5 ">
<h2>現在の課税所得を確認</h2>

    <div class="wrapper py-4">
        <h4 class="">事業所得</h4>
        <div class="box px-4">
            <label for="name">売上</label>
            <label for="name">@if(isset($kashi->sum)){{ $kashi->sum }} @else 0 @endif ー</label>
            <label for="name">経費</label>
            <label for="name">@if(isset($kari->sum)){{ $kari->sum }} @else 0 @endif ＝</label>
            <label for="name">売上</label>
            <label for="name"><?php echo $kashi->sum-$kari->sum  ?></label>
        <!-- </div>
        <div class="box">
            <label for="name">売上</label>
            <label for="name">8000  ―</label> -->
            <label for="name">   ー  青色申告特別控除</label>
            <label for="name">@if(isset($deduction1->sum)){{$deduction1->sum}}@else 0 @endif  ＝</label>
            <label for="name" class="fs-4 text-primary fw-bold">事業課税所得</label>
            <label for="name" class="fs-4">@if($kashi->sum-$kari->sum>$deduction1->sum)<?php echo $kashi->sum-$kari->sum-$deduction1->sum ?>@else 0 @endif</label>
        </div>
    </div>

    <div class="wrapper py-4">
        <h4>給与所得</h4>
        <div class="box px-4">
            <label for="name">給料</label>
            <label for="name">@if(isset($kyuyo->sum)) {{$kyuyo->sum}}  @else 0 @endif ー</label>
            <label for="name">  給料所得控除</label>
            <label for="name">650000  =</label>
            <label for="name" class="fs-4 text-success fw-bold">給与課税所得</label>
            <label for="name" class="fs-4">@if($kyuyo->sum>650000)<?php echo $kyuyo->sum-650000 ?> @else 0 @endif</label>
        </div>
    </div>

    <div class="wrapper py-4">
        <h4>合計課税所得の計算</h4>
        <div class="box px-4">
            <label for="name" class="text-primary fw-bold">事業課税所得</label>
            <label for="name" class="fs-4">@if($kashi->sum-$kari->sum>$deduction1->sum)<?php echo $kashi->sum-$kari->sum-$deduction1->sum ?>@else 0 @endif  ＋</label>
            <label for="name" class="text-success fw-bold">給与課税所得</label>
            <label for="name" class="fs-4">@if($kyuyo->sum>650000)<?php echo $kyuyo->sum-650000 ?> @else 0 @endif  ―</label>
            <label for="name">控除合計</label>
            <label for="name" class="fs-4">@if(isset($deduction->sum)){{$deduction->sum}} @else 0 @endif - 480000=</label>
            <label for="name" class="text-danger fw-bold">課税所得</label> 
            <label for="name" class="fw-bold fs-3">
                <!-- 　そのまま計算　　　　売上げ＋経費＞控除　　＆＆  給与＞控除    -->
            @if($kashi->sum - $kari->sum > $deduction1->sum && $kyuyo->sum > 650000)
                <?php echo $kashi->sum - $kari->sum - $deduction1->sum + $kyuyo->sum - 650000 - $deduction->sum - 480000 ?></label>
                <!-- 　給与所得を０に　　　売上げ＋経費＞控除 -->
            @elseif($kashi->sum - $kari->sum > $deduction1->sum)
                <?php echo $kashi->sum - $kari->sum - $deduction1->sum - $deduction->sum - 480000 ?></label>
                 <!--  事業所得を０に　　　給与＞控除 -->
            @elseif($kyuyo->sum > 650000)
                <?php echo $kyuyo->sum - 650000 - $deduction->sum - 480000 ?></label>
            @else
                <!-- 全体控除と４８万を足した数字を出力 -->
                <?php echo -$deduction->sum - 480000 ?></label>
            @endif
        </div>
        <div class="box px-4">＊合計課税所得がー（マイナス）の場合、課税されるまでの金額（余裕）を表す。</div>
        <div class="px-4">＊課税所得の合計控除４８万円は基礎控除である。</div>
        
    </div>

    <!-- <div class="wrapper">
        <h3>来年の所得税、住民税</h3>
        <div class="box">
            <label for="name">課税所得</label>
            <label for="name">＊20％  ＝</label>
            <label for="name">０　円</label>
        </div>
    </div> -->


        <button type="button" class="btn btn-dark my-4" onClick="history.back()">戻る</button>
</div>

@endsection