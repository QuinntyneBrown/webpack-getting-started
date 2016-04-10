module.exports = {
    entry: {
        "main": "./main.ts",
        "main-other": "./main-other.ts",
    },
    output: {
        path:"/dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web,js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, loader: "ts-loader"
            },
            {
                test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
            }
        ]
    }

}