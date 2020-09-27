/*
 * @Author: Arthur
 * @Date: 2020-09-27 16:41:54
 * @LastEditors: Arthur
 * @LastEditTime: 2020-09-27 17:45:02
 * @Description: file content
 */
const webpack = require("webpack");
// const CompressionPlugin = require('compression-webpack-plugin');//引入gzip压缩插件
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 9090,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {}
    },
    configureWebpack: {
        //删除打包后的console文件
        // optimization: {
        //     minimizer: [
        //         new UglifyJsPlugin({
        //             uglifyOptions: {
        //                 compress: {
        //                     warnings: false,
        //                     drop_console: true, //console
        //                     drop_debugger: false,
        //                     pure_funcs: ['console.log', 'console.warn'] //移除console
        //                 }
        //             }
        //         })
        //     ]
        // },
        //由于使用jquery ui 中的组件， 这里注册全局jquery对象
        resolve: {
            extensions: [".js"],
            alias: {
                jquery: "jquery/dist/jquery.min.js"
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            }),
            // new CompressionPlugin({//gzip压缩配置
            //     test:/\.js$|\.html$|\.css/,//匹配文件名
            //     threshold:10240,//对超过10kb的数据进行压缩
            //     deleteOriginalAssets:false,//是否删除原文件
            // })
            // ,
            // new BundleAnalyzerPlugin()
        ]
    },
    outputDir: './dist',
    css: {
        loaderOptions: {
            sass: {
                // sassOptions: {
                    additionalData: `@import "~@/assets/style/mixin.scss";`
                // }
            },
            postcss: {
                plugins: [
                    // require('postcss-import'),
                    require('postcss-px-to-viewport')({
                        'viewportWidth': 375, // (Number) The width of the viewport.
                        'viewportHeight': 667, // (Number) The height of the viewport.
                        'unitPrecision': 3, // (Number) The decimal numbers to allow the REM units to grow to.
                        'viewportUnit': 'vw', // (String) Expected units.
                        'selectorBlackList': ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
                        'minPixelValue': 1, // (Number) Set the minimum pixel value to replace.
                        'mediaQuery': false // (Boolean) Allow px to be converted in media queries.
                    })
                ]
            }
        }
    }
};
