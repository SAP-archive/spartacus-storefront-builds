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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<JsonLdDirective, "[cxJsonLd]", never, {
    "cxJsonLd": "cxJsonLd";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsianNvbi1sZC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuLyoqXG4gKiBMb3cgbGV2ZWwgZGlyZWN0aXZlIHRoYXQgYWRkcyBhIGpzb24tbGQgc2NyaXB0IHRhZyB0byB0aGUgY29tcG9uZW50LlxuICogVGhpcyBjb2RlIGJ5cGFzc2VzIHRoZSBzdHJpY3QgWFNTIHNlY3VyaXR5LCBhcyBvdGhlcndpc2Ugd2UncmUgbm90IGFibGVcbiAqIHRvIGFwcGVuZCBhIHNjcmlwdCB0YWcgd2l0aCBKUyBpbnNpZGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25MZERpcmVjdGl2ZSB7XG4gICAgcHJvdGVjdGVkIGpzb25MZFNjcmlwdEZhY3Rvcnk6IEpzb25MZFNjcmlwdEZhY3Rvcnk7XG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyO1xuICAgIHNldCBjeEpzb25MZChzY2hlbWE6IHN0cmluZyB8IG51bWJlcik7XG4gICAganNvbkxEOiBTYWZlSHRtbDtcbiAgICBjb25zdHJ1Y3Rvcihqc29uTGRTY3JpcHRGYWN0b3J5OiBKc29uTGRTY3JpcHRGYWN0b3J5LCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcik7XG4gICAgcHJpdmF0ZSB3cml0ZUpzb25MZDtcbn1cbiJdfQ==