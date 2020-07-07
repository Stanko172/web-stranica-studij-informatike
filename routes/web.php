<?php

use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('articles',  ['uses' => 'ArticlesController@showArticles']);
    $router->post('contact',  ['uses' => 'ContactFormController@store']);
});

$router->get('/{route:.*}/', function ()  {
    return view('app');
});