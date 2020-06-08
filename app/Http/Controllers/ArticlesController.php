<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{

    public function showArticles()
    {
        return response()->json(Content::select('title', 'created', 'introtext')->where('catid', 34)->orderBy('id', 'desc')->take(50)->get());
    }
}