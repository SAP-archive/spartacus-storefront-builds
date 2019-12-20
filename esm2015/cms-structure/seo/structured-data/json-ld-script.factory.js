/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, RendererFactory2, SecurityContext, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/platform-browser";
export class JsonLdScriptFactory {
    /**
     * @param {?} platformId
     * @param {?} winRef
     * @param {?} rendererFactory
     * @param {?} sanitizer
     */
    constructor(platformId, winRef, rendererFactory, sanitizer) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    build(schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    }
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     * @return {?}
     */
    isJsonLdRequired() {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    }
    /**
     * @private
     * @return {?}
     */
    createJsonLdScriptElement() {
        /** @type {?} */
        const id = 'json-ld';
        /** @type {?} */
        let scriptElement = (/** @type {?} */ ((this.winRef.document.getElementById(id))));
        if (!scriptElement) {
            /** @type {?} */
            const renderer = this.rendererFactory.createRenderer(null, null);
            /** @type {?} */
            const script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    }
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     * @param {?} schema
     * @return {?}
     */
    sanitize(schema) {
        return JSON.stringify(schema, (/**
         * @param {?} _key
         * @param {?} value
         * @return {?}
         */
        (_key, value) => typeof value === 'string'
            ? this.sanitizer.sanitize(SecurityContext.HTML, value)
            : value));
    }
}
JsonLdScriptFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
JsonLdScriptFactory.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: RendererFactory2 },
    { type: DomSanitizer }
];
/** @nocollapse */ JsonLdScriptFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DomSanitizer)); }, token: JsonLdScriptFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLNUMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUM5QixZQUNpQyxVQUFrQixFQUN2QyxNQUFpQixFQUNqQixlQUFpQyxFQUNqQyxTQUF1QjtRQUhGLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUNoQyxDQUFDOzs7OztJQUVKLEtBQUssQ0FBQyxNQUFZO1FBQ2hCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2QsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVPLHlCQUF5Qjs7Y0FDekIsRUFBRSxHQUFHLFNBQVM7O1lBQ2hCLGFBQWEsR0FBc0IsbUJBQW1CLENBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FDeEMsRUFBQTtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUU7O2tCQUNaLFFBQVEsR0FBYyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FDN0QsSUFBSSxFQUNKLElBQUksQ0FDTDs7a0JBQ0ssTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNsRSxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7WUFDcEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEQsYUFBYSxHQUFHLE1BQU0sQ0FBQztTQUN4QjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7OztJQVFELFFBQVEsQ0FBQyxNQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7OztRQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQzVDLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxLQUFLLEVBQ1YsQ0FBQztJQUNKLENBQUM7OztZQXpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7eUNBR0ksTUFBTSxTQUFDLFdBQVc7WUFQZCxTQUFTO1lBSmhCLGdCQUFnQjtZQUdULFlBQVk7Ozs7Ozs7O0lBUWpCLHlDQUFpRDs7Ozs7SUFDakQscUNBQTJCOzs7OztJQUMzQiw4Q0FBMkM7Ozs7O0lBQzNDLHdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBTZWN1cml0eUNvbnRleHQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkU2NyaXB0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBidWlsZChzY2hlbWE6IHt9W10pOiB2b2lkIHtcbiAgICBpZiAoc2NoZW1hICYmIHRoaXMuaXNKc29uTGRSZXF1aXJlZCgpKSB7XG4gICAgICB0aGlzLmNyZWF0ZUpzb25MZFNjcmlwdEVsZW1lbnQoKS5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgcmV0dXJuIHNjaGVtYSBkYXRhIGluIGNhc2Ugb2YgU1NSIG9yIGRldmVsb3BtZW50IG1vZGUsXG4gICAqIHRvIG5vdCB3YXN0ZSBtZW1vcnkgdW5uZWNlc3NhcnkuXG4gICAqL1xuICBpc0pzb25MZFJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSB8fCBpc0Rldk1vZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSnNvbkxkU2NyaXB0RWxlbWVudCgpOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSAnanNvbi1sZCc7XG4gICAgbGV0IHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gPEhUTUxTY3JpcHRFbGVtZW50PihcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICk7XG5cbiAgICBpZiAoIXNjcmlwdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlcjIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNjcmlwdDogSFRNTFNjcmlwdEVsZW1lbnQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vbGQranNvbic7XG4gICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemVzIHRoZSBnaXZlbiBqc29uLWxkIHNjaGVtYSBieSBsZXZlcmFnaW5nIHRoZSBhbmd1bGFyIEhUTUwgc2FuaXRpemVyLlxuICAgKlxuICAgKiBUaGUgZ2l2ZW4gc2NoZW1hIGlzIG5vdCB0cnVzdGVkLCBhcyBtYWxpY2lvdXMgY29kZSBjb3VsZCBiZSBpbmplY3RlZCAoWFNTKVxuICAgKiBpbnRvIHRoZSBqc29uLWxkIHNjcmlwdC5cbiAgICovXG4gIHNhbml0aXplKHNjaGVtYToge30pOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzY2hlbWEsIChfa2V5LCB2YWx1ZSkgPT5cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgdmFsdWUpXG4gICAgICAgIDogdmFsdWVcbiAgICApO1xuICB9XG59XG4iXX0=