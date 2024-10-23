@extends('layouts.layout-3')

@section('content')

<div class="container p-5 ">
<h2>帳簿編集画面</h2>

    <form action="{{ route('update') }}" method="POST">
        @csrf

        <input type="hidden" name="id" value="{{ $sortings->id }}">
        <input type="hidden" name="user_id" value="{{ $sortings->user_id }}"> 
        <div class="box py-2">
            <label for="name">取引日時</label><span class="required text-danger">*</span>
            @if ($errors->has('day'))
                    <dd class="text-danger error">{{ $errors->first('day') }}</dd>
            @endif
            <input type="date" name="day" id="name" value="{{ $sortings->date }}">
        </div>
<div class="row">
    <div class="kari col">
        <div class="box py-2">
            <label for="name">借方名</label><span class="required text-danger">*</span>
            @if ($errors->has('kari_name'))
                    <dd class="error text-danger">{{ $errors->first('kari_name') }}</dd>
                @endif
            <select name="kari_name">
                <option value="{{$sortings->kari_name}}">{{$sortings->kari_name}}</option>
            @foreach($kari_names as $name)
                <option value="{{$name -> name}}">{{ $name -> name}}</option>
            @endforeach
            </select>
        </div>

        <div class="box py-2">
            <label for="name">借方金額</label><span class="required text-danger">*</span>
            @if ($errors->has('kari_price'))
                    <dd class="error text-danger">{{ $errors->first('kari_price') }}</dd>
                @endif
            <input type="number" name="kari_price"  value="{{$sortings->kari_price}}">
        </div>
    </div>

    <div class="kashi col">
        <div class="box py-2">
            <label for="name">貸方名</label><span class="required text-danger">*</span>
            @if ($errors->has('kashi_name'))
                    <dd class="error text-danger">{{ $errors->first('kashi_name') }}</dd>
            @endif
            <select name="kashi_name">
                <option value="{{$sortings->kashi_name}}">{{$sortings->kashi_name}}</option>
            @foreach($kari_names as $name)
                <option value="{{$name -> name}}">{{ $name -> name}}</option>
            @endforeach
            </select>
        </div>

        <div class="box py-2">
            <label for="name">貸方金額</label><span class="text-danger required">*</span>
            @if ($errors->has('kashi_price'))
                    <dd class="error text-danger">{{ $errors->first('kashi_price') }}</dd>
                @endif
            <input type="number" name="kashi_price" value="{{ $sortings->kashi_price}}">
        </div>
    </div>
</div>

        <div class="box py-2">
            <label for="name">備考</label><span class="required text-danger">*</span>
            @if ($errors->has('remarks'))
                    <dd class="error text-danger">{{ $errors->first('remarks') }}</dd>
                @endif
            <input type="text" name="remarks" value="{{ $sortings->remarks}}">
        </div>
        <button class="btn btn-success my-2">変更</button>
        <button class="btn btn-dark my-2" type="button" onClick="history.back()">戻る</button>
    </form>
</div>
@endsection