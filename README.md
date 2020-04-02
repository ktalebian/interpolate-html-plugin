# interpolate-html-plugin

Taken from [react-dev-utils](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/InterpolateHtmlPlugin.js).

## Installation

Install using 

```bash
npm install @k88/interpolate-html-plugin
```

This is intended to be used with []html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin), so you also need to install this dependency yourself.

## Usage

You can use `%VARIABLE_NAME%` within your template HTML file and then use this plugin to replace this variables:

```javascript
module.exports = {
  ...webpackConfig,
  plugins: [
    new InterpolateHtmlPlugin({
      'NODE_ENV': 'development',
      'VARIABLE_NAME': 'some-variable-value',
    }),
  ]
}
```