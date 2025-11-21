<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'customerid';
    public $incrementing = false; // customerid es VARCHAR
    public $timestamps = false; 

    protected $fillable = [
        'customerid',
        'companyname',
        'contactname',
        'contacttitle',
        'address',
        'city',
        'region',
        'postalcode',
        'country',
        'phone',
        'fax',
        'status'
    ];
}
