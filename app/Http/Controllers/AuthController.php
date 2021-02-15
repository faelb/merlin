<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function register(Request $request)
    {

        $data = $request->validate([
            //unique:users gibt die tabelle an in der es unique sein soll
            'name' => 'required|unique:users',
            'email' => 'required',
            'password' => 'required|confirmed',
        ]);
        //TODO hash the password
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = bcrypt($data['password']);
        $user-> save();

        $accessToken = $user->createToken('authToken')->accessToken;
        $oauth = now()->addHours(6);

        return response(['user'=>$user,'access_token'=>$accessToken,'expire'=>$oauth],200);
        //return response(['user'=>auth()->user(),'access_token'=>$accessToken,'expire'=>$oauth],200);
        //$user = User::create($data);
        //TODO make this user the actual user and give him a Token

        //return response($user, 200);
    }

    public function login(Request $request)
    {
       /* $data = $request->validate([
            'name'=>'required',
            'password'=>'required',
        ]);*/
        $validator = Validator::make($request->all(), [
            'name'=>['required'],
            'password'=>['required'],
        ]);
        if($validator->fails()){
            return response('failed',422);
        }

        if(!auth()->attempt($validator->validated())) {
            return response(['message'=>'Invalid credentials','data'=>$validator->validated()],400);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $oauth = now()->addHours(6);

        return response(['user'=>auth()->user(),'access_token'=>$accessToken,'expire'=>$oauth]);

    }

    public function logout(Request $request)
    {


    }
}
