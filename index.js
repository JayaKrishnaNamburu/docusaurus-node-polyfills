const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-node-polyfills',

    configureWebpack(config, isServer) {
      return {
        plugins: [new NodePolyfillPlugin({
          excludeAliases: options && options.excludeAliases ? options.excludeAliases : []
        })]
      };
    }

  };
};