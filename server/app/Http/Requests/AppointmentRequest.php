<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date' => 'required',
            'time' => 'required',
            'ser_id' => 'required',
            'barber_id' => 'required',
            'name' => 'required|string|max:50',
            'phone_number' => 'required',
            'email' => 'required|email',
        ];
    }

    public function getAttributes()
    {
        return array_merge([
            $this->only(['date', 'time', 'ser_id', 'barber_id', 'name', 'phone_number', 'email'])
        ]);
    }
}
