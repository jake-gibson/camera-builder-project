const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: process.env.NODE_ENV,
    // resolve: {fallback: {
    //     "path": require.resolve("path-browserify")
    // }},
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devtool: 'eval-source-map',
    module:{
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset',
            }
        ]
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 7300,
        open: true,
        hot: true,
        compress: true,
        proxy:{
            '/results': 'http://localhost:3000'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Dev',
            filename: 'index.html',
            template: 'src/template.html'
        }), 
        // new NodePolyfillPlugin()
    ],
    externals: {
        puppeteer: "require('puppeteer')", // use additional double quotes here to define valid external
    }
}