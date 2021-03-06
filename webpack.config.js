var path = require('path');
var phaserPath = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserPath, 'dist/phaser.js');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /phaser\.js$/,
                loader: 'expose-loader?Phaser'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/build/',
        host: '127.0.0.1',
        port: 8080,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            phaser: phaser
        }
    }
}