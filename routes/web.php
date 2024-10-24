<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\SortingContoroller;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\UpdateDeleteController;

// 登録画面・処理
// Route::get('/register', [RegisterController::class, 'create'])->name('register');
// Route::post('/register', [RegisterController::class, 'store'])->name('register');
// // ログイン画面・処理
// Route::get('/login',[RegisterController::class,'show'])->name('login');
// Route::post('/login',[RegisterController::class,'login'])->name('login');
// // ログアウト処理
// Route::get('/logout',[LogoutController::class,'destroy'])->name('logout')->middleware('auth');

Route::middleware('auth')->group(function () {
// トップ、仕分け画面
Route::get('/',[SortingContoroller::class,'index'])->name('index');
// 仕分け登録処理
Route::post('/sorting',[SortingContoroller::class,'store'])->name('sorting');
// 給料登録画面・登録処理
Route::get('/kyuyo',[SortingContoroller::class,'kyuyo'])->name('kyuyo');
Route::post('/kyuyo',[SortingContoroller::class,'kyuyo_register'])->name('kyuyo');
// 控除登録画面・登録処理
Route::get('/deduction',[SortingContoroller::class,'deduction'])->name('deduction');
Route::post('/deduction',[SortingContoroller::class,'deduction_register'])->name('deduction');
// 所得を確認画面
Route::get('/tax',[SortingContoroller::class,'tax'])->name('tax');

// 複式簿記更新画面・更新処理・削除処理
Route::get('/update', [UpdateDeleteController::class, 'edit'])->name('edit'); 
Route::post('/update', [UpdateDeleteController::class, 'update'])->name('update'); 
Route::get('/delete', [UpdateDeleteController::class, 'delete'])->name('delete'); 

// 給与更新画面・更新処理・削除処理
Route::get('/kyuyo_update', [UpdateDeleteController::class, 'kyuyo_edit'])->name('kyuyo_edit'); 
Route::post('/Kyuyo_update', [UpdateDeleteController::class, 'kyuyo_update'])->name('kyuyo_update'); 
Route::get('/kyuyo_delete', [UpdateDeleteController::class, 'kyuyo_delete'])->name('kyuyo_delete'); 

// 控除更新画面・更新処理・削除処理
Route::get('/deduction_update', [UpdateDeleteController::class, 'deduction_edit'])->name('deduction_edit'); 
Route::post('/deduction_update', [UpdateDeleteController::class, 'deduction_update'])->name('deduction_update'); 
Route::get('/deduction_delete', [UpdateDeleteController::class, 'deduction_delete'])->name('deduction_delete');

// 家事按分更新画面・更新処理
Route::get('/kaji_update', [UpdateDeleteController::class, 'kaji_edit'])->name('kaji'); 
Route::post('/kaji_update', [UpdateDeleteController::class, 'kaji_update'])->name('kaji'); 

// ユーザー削除
Route::get('/user_delete', [UpdateDeleteController::class, 'user_delete'])->name('user_delete');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
