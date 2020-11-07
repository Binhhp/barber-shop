<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'content', 'imgPath', 'imgName', 'view', 'like', 'status'];
    public function cates()
    {
        # code...
        return $this->belongsTo(CategoryBlog::class);
    }

    public function comments()
    {
        # code...
        return $this->hasMany(Comment::class, 'comments.blog_id', 'id');
    }
    
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'tag_blogs', 'blog_id', 'tag_id')->withPivot('tag_id')->withTimestamps();
    }
}
