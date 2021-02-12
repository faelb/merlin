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
        //TODO return a Toke too
        $user = User::create($data);

        return response($user, 200);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'name'=>'required',
            'password'=>'required',
        ]);

        if(!auth()->attempt($data->validated())) {
            return response(['message'=>'Invalid credentials','data'=>$data->validated()],400);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $oauth = now()->addHours(6);

        return response(['user'=>auth()->user(),'access_token'=>$accessToken,'expire'=>$oauth])

    }

    public function logout(Request $request)
    {


    }
}
