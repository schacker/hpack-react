const path = require('path')
module.exports = {
  // 标准的webpack4的配置，可以覆盖默认配置
  webpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, '../src/components'),
        pages: path.resolve(__dirname, '../src/pages')
      }
    },
    output: {
      publicPath: 'http://xxx.test.con:8017/'
    }
  },

  // 默认的启动端口是8018，这里可以切换
  port: 8017,

  // 默认设计图宽度是750，这里可以修改
  viewportWidth: 750,
  viewportHeight: 1334,

  // 生产环境sourcemap使用'source-map'固定不变，开发环境可以通过devtool去设置
  devtool: 'inline-source-map',

  // webpack-dev-server代理设置
  proxy: {},

  // eslint的规则
  rules: {},

  // postcss的插件，如果自行定制，本地也需安装一下相应node模块
  postcssPlugin: {},

  // .eslintrc的配置项，可以覆盖
  eslintConfig: {},

  // babel插件, 默认已经有transform-runtime与transform-decorators-legacy，请不要重复添加
  babelPlugins: [],

  // babel preset，默认已经有env与stage-2，请不要重复添加
  babelPresets: []
}
