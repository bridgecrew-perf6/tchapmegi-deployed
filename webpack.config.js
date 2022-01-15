var path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080
    },
    entry: [
        "@babel/polyfill",
        "./src/index.js"
    ],
    output: {
        path: path.join(__dirname+"/public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|html|png|jpg|gif|jpeg|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
};
