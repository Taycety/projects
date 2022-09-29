const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打包白屏
  publicPath: "./",
  devServer: {
    // 不开启https
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeorigin: true,
        pathRewirte: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
