"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var escape_string_regexp_1 = __importDefault(require("escape-string-regexp"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var InterpolateHtmlPlugin = (function () {
    function InterpolateHtmlPlugin(replacements) {
        this.replacements = replacements;
    }
    InterpolateHtmlPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.compilation.tap('InterpolateHtmlPlugin', function (compilation) {
            html_webpack_plugin_1.default
                .getHooks(compilation)
                .afterTemplateExecution.tap('InterpolateHtmlPlugin', function (data) {
                Object.keys(_this.replacements).forEach(function (key) {
                    var value = _this.replacements[key];
                    data.html = data.html.replace(new RegExp('%' + escape_string_regexp_1.default(key) + '%', 'g'), value);
                });
                return data;
            });
        });
    };
    return InterpolateHtmlPlugin;
}());
exports.default = InterpolateHtmlPlugin;
//# sourceMappingURL=index.js.map