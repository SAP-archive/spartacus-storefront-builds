import { __decorate, __param } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, Renderer2, RendererFactory2, SecurityContext, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/platform-browser";
let JsonLdScriptFactory = class JsonLdScriptFactory {
    constructor(platformId, winRef, rendererFactory, sanitizer) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
    }
    build(schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    }
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    isJsonLdRequired() {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    }
    createJsonLdScriptElement() {
        const id = 'json-ld';
        let scriptElement = (this.winRef.document.getElementById(id));
        if (!scriptElement) {
            const renderer = this.rendererFactory.createRenderer(null, null);
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
     */
    sanitize(schema) {
        return JSON.stringify(schema, (_key, value) => typeof value === 'string'
            ? this.sanitizer.sanitize(SecurityContext.HTML, value)
            : value);
    }
};
JsonLdScriptFactory.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: RendererFactory2 },
    { type: DomSanitizer }
];
JsonLdScriptFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DomSanitizer)); }, token: JsonLdScriptFactory, providedIn: "root" });
JsonLdScriptFactory = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(PLATFORM_ID))
], JsonLdScriptFactory);
export { JsonLdScriptFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSzVDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLFlBQ2lDLFVBQWtCLEVBQ3ZDLE1BQWlCLEVBQ2pCLGVBQWlDLEVBQ2pDLFNBQXVCO1FBSEYsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQ2hDLENBQUM7SUFFSixLQUFLLENBQUMsTUFBWTtRQUNoQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0I7UUFDZCxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFTyx5QkFBeUI7UUFDL0IsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLElBQUksYUFBYSxHQUF5QyxDQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQ3hDLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE1BQU0sUUFBUSxHQUFjLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUM3RCxJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7WUFDcEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEQsYUFBYSxHQUFHLE1BQU0sQ0FBQztTQUN4QjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFFBQVEsQ0FBQyxNQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDNUMsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7WUFDdEQsQ0FBQyxDQUFDLEtBQUssQ0FDVixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O3lDQXJESSxNQUFNLFNBQUMsV0FBVztZQUNELFNBQVM7WUFDQSxnQkFBZ0I7WUFDdEIsWUFBWTs7O0FBTHhCLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBR0csV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FGWCxtQkFBbUIsQ0F1RC9CO1NBdkRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBTZWN1cml0eUNvbnRleHQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkU2NyaXB0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBidWlsZChzY2hlbWE6IHt9W10pOiB2b2lkIHtcbiAgICBpZiAoc2NoZW1hICYmIHRoaXMuaXNKc29uTGRSZXF1aXJlZCgpKSB7XG4gICAgICB0aGlzLmNyZWF0ZUpzb25MZFNjcmlwdEVsZW1lbnQoKS5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgcmV0dXJuIHNjaGVtYSBkYXRhIGluIGNhc2Ugb2YgU1NSIG9yIGRldmVsb3BtZW50IG1vZGUsXG4gICAqIHRvIG5vdCB3YXN0ZSBtZW1vcnkgdW5uZWNlc3NhcnkuXG4gICAqL1xuICBpc0pzb25MZFJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSB8fCBpc0Rldk1vZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSnNvbkxkU2NyaXB0RWxlbWVudCgpOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSAnanNvbi1sZCc7XG4gICAgbGV0IHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gPEhUTUxTY3JpcHRFbGVtZW50PihcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICk7XG5cbiAgICBpZiAoIXNjcmlwdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlcjIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNjcmlwdDogSFRNTFNjcmlwdEVsZW1lbnQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vbGQranNvbic7XG4gICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemVzIHRoZSBnaXZlbiBqc29uLWxkIHNjaGVtYSBieSBsZXZlcmFnaW5nIHRoZSBhbmd1bGFyIEhUTUwgc2FuaXRpemVyLlxuICAgKlxuICAgKiBUaGUgZ2l2ZW4gc2NoZW1hIGlzIG5vdCB0cnVzdGVkLCBhcyBtYWxpY2lvdXMgY29kZSBjb3VsZCBiZSBpbmplY3RlZCAoWFNTKVxuICAgKiBpbnRvIHRoZSBqc29uLWxkIHNjcmlwdC5cbiAgICovXG4gIHNhbml0aXplKHNjaGVtYToge30pOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzY2hlbWEsIChfa2V5LCB2YWx1ZSkgPT5cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgdmFsdWUpXG4gICAgICAgIDogdmFsdWVcbiAgICApO1xuICB9XG59XG4iXX0=