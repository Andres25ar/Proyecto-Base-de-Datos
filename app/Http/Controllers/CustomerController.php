<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Models\Country;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::orderBy('customerid')->paginate(10);
        return Inertia::render('Customers/Index', [
            'customers' => $customers
        ]);
    }

    public function create()
    {
        $countries = Country::orderBy('descripcountry')->get([
            'country',
            'descripcountry'
        ]);
    
        return Inertia::render('Customers/Create', [
            'countries' => $countries
        ]);
    }
    public function edit(Customer $customer)
    {
        $countries = Country::orderBy('descripcountry')->get([
            'country',
            'descripcountry'
        ]);

        return Inertia::render('Customers/Edit', [
            'customer' => $customer,
            'countries' => $countries
        ]);
    }

    public function update(Request $request, Customer $customer)
    {
        $request->validate([
            'customerid'    => 'required',
            'companyname'   => 'required',
            'contactname'   => 'nullable',
            'contacttitle'  => 'nullable',
            'address'       => 'nullable',
            'city'          => 'nullable',
            'region'        => 'nullable',
            'postalcode'    => 'nullable',
            'country'       => 'required',
            'phone'         => 'nullable',
            'fax'           => 'nullable',
        ]);

        $customer->update($request->all());

        return redirect()->route('customers.index')->with('success', 'Cliente actualizado correctamente');
    }

    
}
