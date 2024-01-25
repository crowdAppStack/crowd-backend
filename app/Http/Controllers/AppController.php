<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
    public function serve()
    {
        return view('main');
    }
}
