<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'phone_number', 'email', 'type'];

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'cus_id', 'id');
    }

    public function comments()
    {
        # code...
        return $this->hasMany(Comment::class, 'cus_id', 'id');
    }
}
