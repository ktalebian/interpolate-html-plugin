import escapeStringRegexp from 'escape-string-regexp';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Compiler } from 'webpack';

/**
 * Taken from https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/InterpolateHtmlPlugin.js
 * Intended to be used as a standalone plugin in webpack
 */

/*
 * This webpack plugin lets us interpolate custom variables into `index.html`.
 * Usage: `new InterpolateHtmlPlugin(HtmlWebpackPlugin, { 'MY_VARIABLE': 42 })`
 * Then, you can use %MY_VARIABLE% in your `index.html`.
 */

export default class InterpolateHtmlPlugin {
  private readonly replacements: Record<string, string>;

  constructor(replacements: Record<string, string>) {
    this.replacements = replacements;
  }

  apply(compiler: Compiler): void {
    compiler.hooks.compilation.tap('InterpolateHtmlPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tap('InterpolateHtmlPlugin', (data) => {
        // Run HTML through a series of user-specified string replacements.
        Object.keys(this.replacements).forEach((key) => {
          const value = this.replacements[key];
          data.html = data.html.replace(new RegExp(`%${escapeStringRegexp(key)}%`, 'g'), value);
        });

        return data;
      });
    });
  }
}
