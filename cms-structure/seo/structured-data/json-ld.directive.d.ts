import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 *
 * This helper directive is actually not used in Spartacus, as Spartacus
 * appends json-ld the data to the document body.
 *
 * This directive can however be used by merchants to write static schema data
 * to the DOM in a save way.
 */
export declare class JsonLdDirective {
    protected jsonLdScriptFactory: JsonLdScriptFactory;
    protected sanitizer: DomSanitizer;
    /**
     * Writes the schema data to a json-ld script element.
     */
    set cxJsonLd(schema: string | {});
    jsonLD: SafeHtml;
    constructor(jsonLdScriptFactory: JsonLdScriptFactory, sanitizer: DomSanitizer);
    /**
     * Returns the json-ld script tag with the schema data. The script is
     * _bypassing_ sanitization explicitly.
     */
    protected generateJsonLdScript(schema: string | {}): SafeHtml;
}
