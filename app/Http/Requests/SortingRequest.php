<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class SortingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $user = Auth::user();
            if($user->role == 1){
                return [
                    'day'=>'required',
                    'kari_name'=>'required',
                    'kari_price'=>'required',
                    'kashi_name'=>'required',
                    'kashi_price' => 'required',
                    'remarks'=>'required',
                ];

            } else if($user->role == 2){
                return [
                    'day'=>'required',
                    'name'=>'required',
                    'price'=>'required',
                    'remarks'=>'required',
                ];
                
            }else {
                // 404
            }

    
    }

    public function messages()
    {
        return[
            'day.required'=>'この項目は必須項目です。',
            'kari_name.required'=>'この項目は必須項目です。',
            'name.required'=>'この項目は必須項目です。',
            'kari_price.required'=>'この項目は必須項目です。',
            'price.required'=>'この項目は必須項目です。',
            'kashi_name.required'=>'この項目は必須項目です。',
            'kashi_price.required'=>'この項目は必須項目です。',
            'remarks.required'=>'この項目は必須項目です。',
            'price.required'=>'この項目は必須項目です。',
            'user_id.required'=>'この項目は必須項目です。',
            'name.required'=>'この項目は必須項目です。',

            'password.required'=>'この項目は必須項目です。',
            'password.confirmed'=>'パスワードが確認用と一致しません。',
            'password.min'=>'パスワードは8文字以上で入力してください',
        ];
    }
}
