const { override, addPostcssPlugins, overrideDevServer, fix } = require('customize-cra');

// const addProxy = proxy => config => {
//   config.proxy = proxy
//   return config
// }

module.exports = {
  webpack: override(
    // fixBabelImports('import', {
    //   libraryName: 'antd-mobile',
    //   style: 'css',
    // }),
    
    addPostcssPlugins(
      [
        require('postcss-plugin-px2rem')({ // rem 配置
          rootValue: 37.5,
          unitPrecision: 3,
          propWhiteList: [],
          propBlackList: [],
          selectorBlackList: [],
          ignoreIdentifier: false,
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        }),
        require('autoprefixer'),
      ]
    )
  ),

  // devServer: overrideDevServer(addProxy({
  //   '/openapi': {
  //     target: 'http://openapi-mls.tutorabc.com.cn',
  //     changeOrigin: true,
  //     ws: false,
  //     pathRewrite: {
  //       '^/openapi': '',
  //     },
  //     secure: false,
  //   }
  // })),
};
