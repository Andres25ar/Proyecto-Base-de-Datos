<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $searchCustomer = $request->input('customer');
        $searchEmployee = $request->input('employee');

        $orders = Order::query()
            ->selectRaw("
                orders.*,
                customers.companyname,
                employees.lastname || ' ' || employees.firstname AS employname
            ")
            ->join('customers', 'customers.customerid', '=', 'orders.customerid')
            ->join('employees', 'employees.employeeid', '=', 'orders.employeeid')

            ->when($searchCustomer, function ($q) use ($searchCustomer) {
                $q->where('customers.companyname', 'ILIKE', "%{$searchCustomer}%");
            })

            ->when($searchEmployee, function ($q) use ($searchEmployee) {
                $q->whereRaw("(employees.lastname || ' ' || employees.firstname) ILIKE ?", ["%{$searchEmployee}%"]);
            })

            ->orderBy('orders.orderid')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Ordenes/Index', [
            'orders' => $orders,
            'filters' => [
                'customer' => $searchCustomer,
                'employee' => $searchEmployee
            ]
        ]);
    }
}
