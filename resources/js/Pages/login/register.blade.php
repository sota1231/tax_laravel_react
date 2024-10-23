@extends('layouts.layout')

@section('content')

<div class="container p-5 ">
<h2>新規登録画面</h2>

    <form action="{{ route('register') }}" method="POST">
        @csrf
        
        <input type="hidden" name="role" value="1">

        <div class="box py-2">
            <label for="name">名前</label><span class="required">*</span>
            @if ($errors->has('name'))
                    <dd class="text-danger">{{ $errors->first('name') }}</dd>
                @endif
            <input type="text" name="name" id="name" placeholder="山田太郎" value="{{ old('name')}}">
        </div>

        <div class="box py-2">
            <label for="email">メールアドレス</label><span class="required">*</span>
            @if ($errors->has('email'))
                    <dd class="text-danger">{{ $errors->first('email') }}</dd>
                @endif
            <input type="text" name="email" placeholder="aaaa@gmail" value="{{ old('email')}}">
        </div>

        <div class="box py-2">
            <label for="password">パスワード</label><span class="required">*</span>
            @if ($errors->has('password'))
                    <dd class="text-danger">{{ $errors->first('password') }}</dd>
                @endif
            <input type="password" name="password" value="" autocomplete="new-password">
        </div>

        <div class="box py-2">
            <label for="password">確認パスワード</label><span class="required">*</span>
            @if ($errors->has('password'))
                    <dd class="text-danger">{{ $errors->first('password') }}</dd>
                @endif
            <input type="password" name="password_confirmation" value="{{ old('name')}}">
        </div>   

        <button class="btn btn-primary  my-3">登録</button>
    </form>
    <a href="{{ route('login') }}">ログイン画面はこちら</a>
</div>
    

@endsection