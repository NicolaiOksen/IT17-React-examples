var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

// Required for proxying var target = 'https://qa2.champ.dk'
var target = 'http://champ.oxygen-nbo.oxygen.local/'

module.exports = {
    context: path.resolve('src'),
    entry: {
        main: './app/index.js'
    },
    output: {
        path: path.resolve('build/'),
        publicPath: '/',
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: 'public',
        inline: true,

        proxy: {
            '/api/dashboard/knowledge': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/api/dashboard/knowledge/*': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/dashboards/knowledgeareas': {
                target: target,
                secure: false,
                changeOrigin: false
            },
            '/dashboards/knowledgeareas/**': {
                target: target,
                secure: false,
                changeOrigin: false
            },

            '/auth/credentials': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/menu': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/api/**': {
                target: target,
                secure: true,
                changeOrigin: true
            },
            '/assets/**': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/organisation/*': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/systemsettings': {
                target: target,
                secure: false,
                changeOrigin: true
            },
            '/settings': {
                target: target,
                secure: false,
                changeOrigin: true
            }
        }
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-3']
            }
        }, {
            test: /\.scss/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style!', 'css?sourceMap!postcss?sourceMap!sass?sourceMap', { path: 'css/' })
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.(jpg|png|svg)/,
            loader: "file-loader"
        }]
    },
    plugins: [
        // new ExtractTextPlugin("css/styles.css"),
        // new CopyWebpackPlugin([{
        //     from: 'assets/icons',
        //     to: 'assets/icons'
        // }]),
        new webpack.DefinePlugin({
            'process.env': {
                DEV: JSON.stringify(JSON.parse(process.env.DEV || 'false'))
            }
        })
    ],
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx', '.es6']
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
};