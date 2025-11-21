<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;



use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//customers
Route::get('customers/index', [CustomerController::class, 'index'])->name('customers.index');
Route::get('customers/create', [CustomerController::class, 'create'])->name('customers.create');
Route::post('customers/store', [CustomerController::class, 'store'])->name('customers.store');
Route::get('customers/{customer}/edit', [CustomerController::class, 'edit'])->name('customers.edit');
Route::put('customers/{customer}', [CustomerController::class, 'update'])->name('customers.update');

//orders
Route::get('orders', [OrderController::class, 'index'])->name('orders.index');