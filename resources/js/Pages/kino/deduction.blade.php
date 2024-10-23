@extends('layouts.layout-1')

@section('content')

<div class="container p-5 ">
<h2>控除登録画面</h2>

<!-- 給与所得を登録するDB処理 -->
    <form action="{{ route('deduction') }}" method="POST">
        @csrf

        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}"> 
        <div class="box py-2">
            <label for="name">取引日時</label><span class="required text-danger">*</span>
            @if ($errors->has('day'))
                    <dd class="text-danger">{{ $errors->first('day') }}</dd>
            @endif
            <input type="date" name="day" value="{{ old('name')}}">
        </div>

        <div class="box py-2">
            <label for="name">控除名</label><span class="required text-danger">*</span>
            @if ($errors->has('name'))
                    <dd class="text-danger">{{ $errors->first('name') }}</dd>
            @endif
            <input type="text" name="name" value="{{ old('name')}}">

        <div class="box py-3">
            <label for="name">控除種類</label><span class="required text-danger">*</span>
            <select name="role">
                <option value="0">通常の控除（社会保険料控除や扶養控除）</option>
                <option value="1">事業所得控除（青色申告してる方）</option>
            </select>
        </div>
            
        </div>
        <div class="box py-0">
            <label for="name">金額</label><span class="required text-danger">*</span>
            @if ($errors->has('price'))
                    <dd class="text-danger">{{ $errors->first('price') }}</dd>
                @endif
            <input type="number" name="price" placeholder="1000" value="{{ old('name')}}">
        </div>

        <div class="box py-3">
            <label for="name">備考</label><span class="required text-danger">*</span>
            @if ($errors->has('remarks'))
                    <dd class="error text-danger">{{ $errors->first('remarks') }}</dd>
                @endif
            <input type="text" name="remarks" placeholder="○○株式会社" value="{{ old('name')}}">
        </div>
        <button  class="btn btn-primary  my-2">登録</button>
    </form>


    <!-- 登録済みの仕分けを表示 -->
    <div class="alldata py-4 my-4">
        <table class="table table-striped">
        <tr>
            <td>取引日</td>
            <th>控除名</th>
            <th>金額</th>
            <th>備考</th>
            <th>通常控除：０<br>
                事業所得控除：１</th>
            <th></th>
            
            
        </tr>
        @foreach($deductions as $sorting)
            <tr>
                <th>{{$sorting->date}}</th>
                <th>{{$sorting->name}}</th>
                <th>{{$sorting->price}}</th>
                <th>{{$sorting->remarks}}</th>
                <th>{{$sorting->role}}</th>
                <th><a href="{{route('deduction_edit',['id'=>$sorting->id])}}"><buttun class="btn btn-success">編集</buttun></a></th>
                <th><a href="{{route('deduction_delete',['id'=>$sorting->id])}}" onClick ="return checkDelete()"><buttun class="btn btn-danger">削除</buttun></a></th>

            </tr>
        @endforeach
        </table>
        {{ $deductions->links() }}
    </div>
</div>
    

@endsection