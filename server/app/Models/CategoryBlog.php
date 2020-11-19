<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryBlog extends Model
{
    use HasFactory;
    
    protected $fillable = [ 'name', 'description' ];
    public function blogs()
    {
        return $this->hasMany(Blog::class, 'cate_id', 'id');
    }
}
