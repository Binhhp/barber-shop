<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public function cates()
    {
        # code...
        return $this->belongsTo(CategoryBlog::class);
    }

    public function comments()
    {
        # code...
        return $this->hasMany(Comment::class);
    }
    
    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag', 'tag_blogs', 'blog_id', 'tag_id')->withPivot('tag_id')->withTimestamps();
    }
}
