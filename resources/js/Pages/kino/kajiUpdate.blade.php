@extends('layouts.layout-1')

@section('content')
<h2>家事按分編集画面</h2>

    <form action="{{ route('kaji') }}" method="POST">
        @csrf
    
        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}"> 

        <div class="box">
            <label for="name">調整したい経費</label><span class="required">*</span>
            <select name="name">
                @foreach($ratios as $ratio)
                <option value="{{$ratio->name}}">{{$ratio->name}}</option>
                @endforeach
            </select>
        </div>

        <div class="box">
            <label for="name">事業割合</label><span class="required">*</span>
            @if ($errors->has('name'))
                <dd class="error">{{ $errors->first('name') }}</dd>
            @endif
            <input type="number" name="ratio" placeholder="100" value="">%
        </div>

        
        <button>登録</button>
        <button type="button" onClick="history.back()">戻る</button>
    </form>

    <!-- 登録済みの仕分けを表示 -->
    <div class="alldata">
        <table>
        <tr>
                <td>取引日</td>
                <th>借方</th>
                <th>金額</th>
                <th>貸方</th>
                <th>金額</th>
                <th>備考</th>
                <th></th>
                <th></th>
            </tr>
        @foreach($ratios as $ratio)
            <tr>
                <th>{{$ratio->name}}</th>
                <th>{{$ratio->ratio}}</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        @endforeach
        </table>

@endsection