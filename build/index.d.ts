import { Compiler } from 'webpack';
export default class InterpolateHtmlPlugin {
    private readonly replacements;
    constructor(replacements: object);
    apply(compiler: Compiler): void;
}
