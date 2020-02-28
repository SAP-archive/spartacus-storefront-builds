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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsianNvbi1sZC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBKc29uTGRTY3JpcHRGYWN0b3J5IH0gZnJvbSAnLi9qc29uLWxkLXNjcmlwdC5mYWN0b3J5Jztcbi8qKlxuICogTG93IGxldmVsIGRpcmVjdGl2ZSB0aGF0IGFkZHMgYSBqc29uLWxkIHNjcmlwdCB0YWcgdG8gdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgY29kZSBieXBhc3NlcyB0aGUgc3RyaWN0IFhTUyBzZWN1cml0eSwgYXMgb3RoZXJ3aXNlIHdlJ3JlIG5vdCBhYmxlXG4gKiB0byBhcHBlbmQgYSBzY3JpcHQgdGFnIHdpdGggSlMgaW5zaWRlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBKc29uTGREaXJlY3RpdmUge1xuICAgIHByb3RlY3RlZCBqc29uTGRTY3JpcHRGYWN0b3J5OiBKc29uTGRTY3JpcHRGYWN0b3J5O1xuICAgIHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcjtcbiAgICBzZXQgY3hKc29uTGQoc2NoZW1hOiBzdHJpbmcgfCBudW1iZXIpO1xuICAgIGpzb25MRDogU2FmZUh0bWw7XG4gICAgY29uc3RydWN0b3IoanNvbkxkU2NyaXB0RmFjdG9yeTogSnNvbkxkU2NyaXB0RmFjdG9yeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpO1xuICAgIHByaXZhdGUgd3JpdGVKc29uTGQ7XG59XG4iXX0=