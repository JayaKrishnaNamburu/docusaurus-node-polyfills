
A tiny wrapper around node-polyfill-webpack-plugin to support `node-builtins` in docusaurus. Huge thanks for the webpack [plugin](https://github.com/Richienb/node-polyfill-webpack-plugin), which makes it easy here.

Install it from npm using
```
npm install docusaurus-node-polyfills --save-dev
```

In `docusaurus.config.json` add the polyfill in the plugins section

```js
plugins: ['docusaurus-node-polyfills']
```

You can exclude builtin to not be polyfilled. For more details visit [node-polyfill-webpack-plugin](https://github.com/Richienb/node-polyfill-webpack-plugin#excludealiases)

For passing, you need to setup the plugin in this way.

```js
plugins: [['docusaurus-node-polyfills', { excludeAliases: ['console']}]]
```