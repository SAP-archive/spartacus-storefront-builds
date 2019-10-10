import { RendererFactory2 } from '@angular/core';
import { WindowRef } from '@spartacus/core';
export declare class JsonLdScriptFactory {
    protected platformId: string;
    protected winRef: WindowRef;
    protected rendererFactory: RendererFactory2;
    constructor(platformId: string, winRef: WindowRef, rendererFactory: RendererFactory2);
    build(schema: {}[]): void;
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    isJsonLdRequired(): boolean;
    private createJsonLdScriptElement;
}
