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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdScriptFactory>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5kLnRzIiwic291cmNlcyI6WyJqc29uLWxkLXNjcmlwdC5mYWN0b3J5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25MZFNjcmlwdEZhY3Rvcnkge1xuICAgIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTI7XG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyO1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQ6IHN0cmluZywgd2luUmVmOiBXaW5kb3dSZWYsIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Miwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpO1xuICAgIGJ1aWxkKHNjaGVtYToge31bXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogT25seSByZXR1cm4gc2NoZW1hIGRhdGEgaW4gY2FzZSBvZiBTU1Igb3IgZGV2ZWxvcG1lbnQgbW9kZSxcbiAgICAgKiB0byBub3Qgd2FzdGUgbWVtb3J5IHVubmVjZXNzYXJ5LlxuICAgICAqL1xuICAgIGlzSnNvbkxkUmVxdWlyZWQoKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGNyZWF0ZUpzb25MZFNjcmlwdEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogU2FuaXRpemVzIHRoZSBnaXZlbiBqc29uLWxkIHNjaGVtYSBieSBsZXZlcmFnaW5nIHRoZSBhbmd1bGFyIEhUTUwgc2FuaXRpemVyLlxuICAgICAqXG4gICAgICogVGhlIGdpdmVuIHNjaGVtYSBpcyBub3QgdHJ1c3RlZCwgYXMgbWFsaWNpb3VzIGNvZGUgY291bGQgYmUgaW5qZWN0ZWQgKFhTUylcbiAgICAgKiBpbnRvIHRoZSBqc29uLWxkIHNjcmlwdC5cbiAgICAgKi9cbiAgICBzYW5pdGl6ZShzY2hlbWE6IHt9KTogc3RyaW5nO1xufVxuIl19