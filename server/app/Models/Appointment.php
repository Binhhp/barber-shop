<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $fillable = ['date', 'time', 'ser_id', 'barber_id', 'cus_id'];

    public function services()
    {
        return $this->belongsTo(Service::class);
    }

    public function barbers()
    {
        return $this->belongsTo(Barber::class);
    }

    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }
}
