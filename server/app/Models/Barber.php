<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barber extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'phone_number', 'address', 'email', 'imgPath', 'imgName'];
    public function positions()
    {
        return $this->belongsTo(Position::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
