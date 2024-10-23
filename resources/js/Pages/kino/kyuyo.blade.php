@extends('layouts.layout-1')

@section('content')

<div class="container p-5 ">

<h2>給与所得入力</h2>

<!-- 給与所得を登録するDB処理 -->
    <form action="{{ route('kyuyo') }}" method="POST">
        @csrf
    
        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}"> 
        <div class="box py-2">
            <label for="name">取引日時</label><span class="required">*</span>
            @if ($errors->has('day'))
                    <dd class="text-danger">{{ $errors->first('day') }}</dd>
            @endif
            <input type="date" name="day" value="{{ old('day')}}">
        </div>

        <div class="box py-2">
            <label for="name">勤め先</label><span class="required">*</span>
            @if ($errors->has('name'))
                    <dd class="text-danger">{{ $errors->first('name') }}</dd>
            @endif
            <input type="text" name="name" value="{{ old('name')}}">
            
        </div>

        <div class="box py-2">
            <label for="name">手取り金額</label><span class="required">*</span>
            @if ($errors->has('price'))
                    <dd class="text-danger">{{ $errors->first('price') }}</dd>
                @endif
            <input type="number" name="price" placeholder="1000" value="{{ old('price')}}">
        </div>

        <div class="box py-2">
            <label for="name">備考</label><span class="required">*</span>
            @if ($errors->has('remarks'))
                    <dd class="text-danger">{{ $errors->first('remarks') }}</dd>
                @endif
            <input type="text" name="remarks" placeholder="○○株式会社" value="{{ old('remarks')}}">
        </div>
        <button class="btn btn-primary  my-2">登録</button>
    </form>

    <!-- 登録済みの仕分けを表示 -->
    <div class="alldata py-4 my-4">
        <table class="table table-striped">
        <tr>
            <td>取引日</td>
            <th>勤め先</th>
            <th>金額</th>
            <th>備考</th>
            <th></th>
            <th></th>
        </tr>
        @foreach($kyuyos as $sorting)
            <tr>
                <th>{{$sorting->date}}</th>
                <th>{{$sorting->name}}</th>
                <th>{{$sorting->price}}</th>
                <th>{{$sorting->remarks}}</th>
                <th><a href="{{route('kyuyo_edit',['id'=>$sorting->id])}}"><buttun class="btn btn-success">編集</buttun></a></th>
                <th><a href="{{route('kyuyo_delete',['id'=>$sorting->id])}}" onClick ="return checkDelete()"><buttun class="btn btn-danger">削除</buttun></a></th>
                
            </tr>
        @endforeach

        </table>
        {{ $kyuyos->links() }}

    </div>
</div>
    

@endsection