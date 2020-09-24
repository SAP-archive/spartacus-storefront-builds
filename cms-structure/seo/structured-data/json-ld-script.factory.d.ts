import { RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class JsonLdScriptFactory {
    protected platformId: string;
    protected winRef: WindowRef;
    protected rendererFactory: RendererFactory2;
    protected sanitizer: DomSanitizer;
    constructor(platformId: string, winRef: WindowRef, rendererFactory: RendererFactory2, sanitizer: DomSanitizer);
    build(schema: {}[]): void;
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    isJsonLdRequired(): boolean;
    private createJsonLdScriptElement;
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    sanitize(schema: {}): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdScriptFactory, never>;
}

//# sourceMappingURL=json-ld-script.factory.d.ts.map