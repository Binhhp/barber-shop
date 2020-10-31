<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public function blog()
    {
        return $this->belongsToMany(Blog::class, 'tag_blogs', 'tag_id', 'blog_id')->withTimestamps();
    }
}
