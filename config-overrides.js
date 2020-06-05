const { override, addPostcssPlugins, overrideDevServer } = require('customize-cra');

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
      '/mobcommon/': {
          target: 'http://premob.tutorabc.com.cn',
          changeOrigin: true,
          // pathRewrite: { '^/mobcommon/': '/mobcommon/' },
      },
  };

  return configFunction;
}

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

  // devServer: overrideDevServer(
  //   addProxy()
  // )
};
