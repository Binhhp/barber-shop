<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['content', 'cus_id', 'blog_id'];
    use HasFactory;
    public function blogs()
    {
        # code...
        return $this->belongsTo(Blog::class);
    }

    public function customers()
    {
        # code...
        return $this->belongsTo(Customer::class);
    }
}
