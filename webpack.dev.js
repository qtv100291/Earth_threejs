const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './public',
        // watchContentBase: true,
        port: 3500,
        open: 'chrome',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use : {
                    loader: 'babel-loader',

                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties']
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    devtool: 'source-map'
})