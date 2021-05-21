module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        port: 8081,
        noInfo: true,
        overlay: true
    }
}