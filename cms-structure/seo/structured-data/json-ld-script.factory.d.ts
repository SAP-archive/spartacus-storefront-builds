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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5kLnRzIiwic291cmNlcyI6WyJqc29uLWxkLXNjcmlwdC5mYWN0b3J5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSnNvbkxkU2NyaXB0RmFjdG9yeSB7XG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MjtcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXI7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZDogc3RyaW5nLCB3aW5SZWY6IFdpbmRvd1JlZiwgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcik7XG4gICAgYnVpbGQoc2NoZW1hOiB7fVtdKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBPbmx5IHJldHVybiBzY2hlbWEgZGF0YSBpbiBjYXNlIG9mIFNTUiBvciBkZXZlbG9wbWVudCBtb2RlLFxuICAgICAqIHRvIG5vdCB3YXN0ZSBtZW1vcnkgdW5uZWNlc3NhcnkuXG4gICAgICovXG4gICAgaXNKc29uTGRSZXF1aXJlZCgpOiBib29sZWFuO1xuICAgIHByaXZhdGUgY3JlYXRlSnNvbkxkU2NyaXB0RWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBTYW5pdGl6ZXMgdGhlIGdpdmVuIGpzb24tbGQgc2NoZW1hIGJ5IGxldmVyYWdpbmcgdGhlIGFuZ3VsYXIgSFRNTCBzYW5pdGl6ZXIuXG4gICAgICpcbiAgICAgKiBUaGUgZ2l2ZW4gc2NoZW1hIGlzIG5vdCB0cnVzdGVkLCBhcyBtYWxpY2lvdXMgY29kZSBjb3VsZCBiZSBpbmplY3RlZCAoWFNTKVxuICAgICAqIGludG8gdGhlIGpzb24tbGQgc2NyaXB0LlxuICAgICAqL1xuICAgIHNhbml0aXplKHNjaGVtYToge30pOiBzdHJpbmc7XG59XG4iXX0=