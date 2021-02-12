<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{

    public function register(Request $request)
    {

        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required|confirmed',
        ]);
        //TODO hash the password
        $user = User::create($data);

        return response($user,200);
    }

    public function login(Request $request)
    {


    }

    public function logout(Request $request)
    {


    }
}
