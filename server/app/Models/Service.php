<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'time', 'description', 'price', 'imgPath', 'imgName'];

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'ser_id', 'id');
    }
}
