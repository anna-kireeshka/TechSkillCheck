const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "src/assets/scss/_variables.scss";',
                        },
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                'src/assets/scss/_variables.scss'
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.json', '.wasm', '.ts', '.tsx'],
    },
}
