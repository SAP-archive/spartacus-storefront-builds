import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
export declare class JsonLdDirective {
    protected jsonLdScriptFactory: JsonLdScriptFactory;
    protected sanitizer: DomSanitizer;
    cxJsonLd: string | number;
    jsonLD: SafeHtml;
    constructor(jsonLdScriptFactory: JsonLdScriptFactory, sanitizer: DomSanitizer);
    private writeJsonLd;
}
