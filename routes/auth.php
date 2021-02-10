<?php
use App\Http\Controllers\Auth\RegisteredUserController;

Route::post('/register', RegisteredUserController::class, 'createUser');
