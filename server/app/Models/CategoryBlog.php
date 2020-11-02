<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryBlog extends Model
{
    use HasFactory;
    
    protected $fillable = [ 'name', 'description', 'parent_id' ];
    public function blogs()
    {
        # code...
        return $this->hasMany(Blog::class);
    }
}
