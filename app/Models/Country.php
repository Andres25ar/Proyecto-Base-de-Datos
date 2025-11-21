<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'countries'; 

    protected $primaryKey = 'country';
    public $incrementing = false;

    public $timestamps = false;

    protected $fillable = ['descripcountry','country'];
}
