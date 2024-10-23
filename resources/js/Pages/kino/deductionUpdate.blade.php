@extends('layouts.layout-3')

@section('content')

<div class="container p-5 ">
<h2>控除編集画面</h2>

<!-- 給与所得を登録するDB処理 -->
    <form action="{{ route('deduction_update') }}" method="POST">
        @csrf

        <input type="hidden" name="id" value="{{ $deductions->id }}">
        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}"> 
        <div class="box py-2">
            <label for="name">取引日時</label><span class="required text-danger">*</span>
            @if ($errors->has('day'))
                    <dd class="error text-danger">{{ $errors->first('day') }}</dd>
            @endif
            <input type="date" name="day" value="{{$deductions->date }}">
        </div>

        <div class="box py-2">
            <label for="name">控除名</label><span class="text-danger required">*</span>
            @if ($errors->has('name'))
                    <dd class="error text-danger">{{ $errors->first('name') }}</dd>
            @endif
            <input type="text" name="name" value="{{$deductions->name }}">
        </div>

        <div class="box py-3">
            <label for="name">控除種類</label><span class="required text-danger">*</span>
            <select name="role">
                <option value="0">通常の控除（社会保険料控除や扶養控除）</option>
                <option value="1">事業所得控除（青色申告してる方）</option>
            </select>
        </div>

        <div class="box py-2">
            <label for="name">金額</label><span class="text-danger required">*</span>
            @if ($errors->has('price'))
                <dd class="error text-danger">{{ $errors->first('price') }}</dd>
            @endif
            <input type="number" name="price" value="{{$deductions->price}}">
        </div>

        <div class="box py-2">
            <label for="name">備考</label><span class="required text-danger">*</span>
            @if ($errors->has('remarks'))
                    <dd class="error text-danger">{{ $errors->first('remarks') }}</dd>
                @endif
            <input type="text" name="remarks" value="{{$deductions->remarks}}">
        </div>
        <button  class="btn btn-success  my-2">編集</button>
        <button class="btn btn-dark" type="button" onClick="history.back()">戻る</button>
    </form>    
</div>

@endsection