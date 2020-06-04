let mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
 
var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin(),
        new VuetifyLoaderPlugin()
    ]
    // other webpack config ...
}

mix.webpackConfig( webpackConfig );

mix.js('resources/js/app.js', 'dist/');
mix.sass('resources/scss/app.scss', 'dist/');