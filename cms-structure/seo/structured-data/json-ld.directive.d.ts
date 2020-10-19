import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
import * as ɵngcc0 from '@angular/core';
export declare class JsonLdDirective {
    protected jsonLdScriptFactory: JsonLdScriptFactory;
    protected sanitizer: DomSanitizer;
    set cxJsonLd(schema: string | number);
    jsonLD: SafeHtml;
    constructor(jsonLdScriptFactory: JsonLdScriptFactory, sanitizer: DomSanitizer);
    private writeJsonLd;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<JsonLdDirective, "[cxJsonLd]", never, { "cxJsonLd": "cxJsonLd"; }, {}, never>;
}

//# sourceMappingURL=json-ld.directive.d.ts.map