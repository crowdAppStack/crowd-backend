<?php

namespace App\Http\Controllers;

use App\Events\EventTest;
use App\Jobs\JobTest;

class MainController extends Controller
{
    public function serveApp()
    {
        return view('main');
    }
}
