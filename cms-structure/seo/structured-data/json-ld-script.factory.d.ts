import { RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { SeoConfig } from '../config';
export declare class JsonLdScriptFactory {
    protected platformId: string;
    protected winRef: WindowRef;
    protected rendererFactory: RendererFactory2;
    protected sanitizer: DomSanitizer;
    protected config: SeoConfig;
    constructor(platformId: string, winRef: WindowRef, rendererFactory: RendererFactory2, sanitizer: DomSanitizer, config: SeoConfig);
    build(schema: {}[]): void;
    /**
     * Indicates whether json ld data should be generated.
     *
     * This is only required on the server, but can be enabled in dev mode.
     */
    isJsonLdRequired(): boolean;
    /**
     * Creates a json-ld script element. The element is created one, and appended
     * to the html body element.
     *
     * ```html
     * <script id="json-ld" type="application/ld+json">
     * </script>
     * ```
     */
    protected getJsonLdScriptElement(): HTMLScriptElement;
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    sanitize(schema: {}): string;
}
