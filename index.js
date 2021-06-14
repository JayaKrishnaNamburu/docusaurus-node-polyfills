const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { ProvidePlugin } = require('webpack')

class ESMPolyfillWrapper {
  apply(compiler) {
    compiler.options.plugins.push(new ProvidePlugin({
      process: "process/browser.js"
    }))

    compiler.options.resolve.fallback = {
      ...compiler.options.resolve.fallback,
      os: "os-browserify/browser.js",
      process: "process/browser.js"
    }
  }
}


module.exports = function (context, options) {
  return {
    name: 'docusaurus-node-polyfills',
    configureWebpack(config, isServer) {
      return {
        plugins: [
          new ESMPolyfillWrapper(),
          new NodePolyfillPlugin({ excludeAliases: ['process', 'os']}),
        ]
      };
    }
  };
};