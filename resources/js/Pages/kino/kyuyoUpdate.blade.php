@extends('layouts.layout-3')

@section('content')

<div class="container p-5 ">
<h2>給与所得編集画面</h2>

<!-- 給与所得を登録するDB処理 -->
    <form action="{{ route('kyuyo_update') }}" method="POST">
        @csrf

        <input type="hidden" name="id" value="{{ $kyuyos->id }}">
        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}"> 
        <div class="box py-2">
            <label for="name">取引日時</label><span class="required text-danger">*</span>
            @if ($errors->has('day'))
                    <dd class="error text-danger">{{ $errors->first('day') }}</dd>
            @endif
            <input type="date" name="day" value="{{ $kyuyos->date}}">
        </div>

        <div class="box">
            <label for="name">勤め先</label><span class="text-danger required">*</span>
            @if ($errors->has('name'))
                    <dd class="error text-danger">{{ $errors->first('name') }}</dd>
            @endif
            <input type="text" name="name" value="{{ $kyuyos->name}}">
            
        </div>
 
        <div class="box py-2">
            <label for="name">手取り金額</label><span class="text-danger required">*</span>
            @if ($errors->has('price'))
                    <dd class="error text-danger">{{ $errors->first('price') }}</dd>
                @endif
            <input type="number" name="price" placeholder="1000" value="{{ $kyuyos->price}}">
        </div>

        <div class="box py-2">
            <label for="name">備考</label><span class="text-danger required">*</span>
            @if ($errors->has('remarks'))
                    <dd class="error text-danger">{{ $errors->first('remarks') }}</dd>
                @endif
            <input type="text" name="remarks" value="{{ $kyuyos->remarks}}">
        </div>
        <button class="btn btn-success my-2">登録</button>
        <button class="btn btn-dark  my-2" type="button" onClick="history.back()">戻る</button>
    </form>

</div>

@endsection