<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $primaryKey = 'orderid';
    public $timestamps = false; // Northwind no usa created_at / updated_at

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

    // RELACIÓN: orden pertenece a un cliente
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerid', 'customerid');
    }

    // RELACIÓN: orden pertenece a un empleado
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employeeid', 'employeeid');
    }

    // DETALLES (si la tabla existe: order_details)
    public function details()
    {
        return $this->hasMany(OrderDetail::class, 'orderid', 'orderid');
    }
}
