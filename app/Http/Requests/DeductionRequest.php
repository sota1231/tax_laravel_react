<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeductionRequest extends FormRequest
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
        return [
            'day'=>'required',
            'remarks'=>'required',
            // 'name'=>'required',
            'role'=>'required',
            'price' => 'required',
            // 'user_id'=>'required'
        ];
    }

    public function messages()
    {
        return[
            'day.required'=>'この項目は必須項目です。',
            'kari_name.required'=>'この項目は必須項目です。',
            'kari_price.required'=>'この項目は必須項目です。',
            'kashi_name.required'=>'この項目は必須項目です。',
            'kashi_price.required'=>'この項目は必須項目です。',
            'remarks.required'=>'この項目は必須項目です。',
            'price.required'=>'この項目は必須項目です。',
            'user_id.required'=>'この項目は必須項目です。',
            'name.required'=>'この項目は必須項目です。',
            'role.required'=>'この項目は必須項目です。',
            'password.required'=>'この項目は必須項目です。',
            'password.confirmed'=>'パスワードが確認用と一致しません。',
            'password.min'=>'パスワードは8文字以上で入力してください',
        ];
    }
}
