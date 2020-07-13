<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    public function store()
    {
        $data = [];

        $data['name'] = request()->input('name');
        $data['email'] = request()->input('email');
        $data['message'] = request()->input('message');
        $data['home_address'] = request()->input('home_address');
        $data['phone_number'] = request()->input('phone_number');

        Mail::to('fpmoz@sum.ba')->send(new ContactFormMail($data));

    }
}


