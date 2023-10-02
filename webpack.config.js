const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = function override(env, arg) {
    const isProduction = arg.mode === 'production'
    return {
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: "[name].[hash].js",
            clean: true,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            modules: [__dirname, "src", "node_modules"],
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 3000,
            historyApiFallback: true,
            open: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {loader: "css-loader", options: {modules: true}},
                        {
                            loader: 'sass-loader',
                            options: {
                                additionalData: '@import "src/assets/scss/_variables.scss";',
                            },
                        },
                    ]
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    loader: "file-loader"
                },
                {
                    test: /\.(png|jpg|gif|svg|webp)$/,
                    use: ["url-loader"]
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                minify: {
                    collapseWhitespace: isProduction,
                },
            }),
            new Dotenv(),
            new CompressionPlugin({
                test: /\.js(\?.*)?$/i,
            }),
            new MiniCssExtractPlugin()
        ],

        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendors: {
                        test: /node_modules\/(?!antd\/).*/,
                        name: "vendors",
                        chunks: "all",
                    },
                    antd: {
                        test: /node_modules\/(antd\/).*/,
                        name: "antd",
                        chunks: "all",
                    },
                },
                minSize: 10000,
                maxSize: 250000,
            },
            runtimeChunk: {
                name: "manifest",
            },
        },
        performance: {
            hints: false,
        }
    }
}
