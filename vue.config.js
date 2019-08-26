const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    publicPath: isProduction ? '/' : '/',
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'why', // 静态资源目录 (js, css, img, fonts)
    indexPath: 'index.html',   //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    filenameHashing: true,  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    pages: {
        app: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
        }
    },
    lintOnSave: false, // 'error',// 是否开启eslint保存检测，有效值：ture | false | 'error'
    devServer: {
        disableHostCheck: true,
        open: true,
        host: '0.0.0.0',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: null,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    runtimeCompiler: !isProduction, // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    transpileDependencies: [], //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    crossorigin: undefined,
    integrity: false,//在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    //如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
    // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: (config) => {
        config.entry.app.unshift("babel-polyfill");
        if (isProduction) {
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                // test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 1024,
                minRatio: 0.8
            }));
        }
    },
    css: { // 配置高于chainWebpack中关于css loader的配置
        // modules: true, // 是否开启支持‘foo.module.css’样式
        extract: false, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: { // css预设器配置项
            sass: {
                data: ''//`@import "@/assets/scss/mixin.scss";`
            }
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: { // 第三方插件配置
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
};
