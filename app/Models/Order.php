<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $primaryKey = 'orderid';
    public $timestamps = false; 

    protected $fillable = [
        'orderid',
        'customerid',
        'employeeid',
        'orderdate',
        'requireddate',
        'shippeddate',
        'shipvia',
        'freight',
        'shipname',
        'shipaddress',
        'shipcity',
        'shipregion',
        'shippostalcode',
        'shipcountry'
    ];


    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerid', 'customerid');
    }

    
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employeeid', 'employeeid');
    }

    public function details()
    {
        return $this->hasMany(OrderDetail::class, 'orderid', 'orderid');
    }
}
