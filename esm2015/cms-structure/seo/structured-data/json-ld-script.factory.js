/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, RendererFactory2, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class JsonLdScriptFactory {
    /**
     * @param {?} platformId
     * @param {?} winRef
     * @param {?} rendererFactory
     */
    constructor(platformId, winRef, rendererFactory) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    build(schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = JSON.stringify(schema);
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
    { type: RendererFactory2 }
];
/** @nocollapse */ JsonLdScriptFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2)); }, token: JsonLdScriptFactory, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUs1QyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFDaUMsVUFBa0IsRUFDdkMsTUFBaUIsRUFDakIsZUFBaUM7UUFGWixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWtCO0lBQzFDLENBQUM7Ozs7O0lBRUosS0FBSyxDQUFDLE1BQVk7UUFDaEIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7Ozs7SUFNRCxnQkFBZ0I7UUFDZCxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRU8seUJBQXlCOztjQUN6QixFQUFFLEdBQUcsU0FBUzs7WUFDaEIsYUFBYSxHQUFzQixtQkFBbUIsQ0FDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUN4QyxFQUFBO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRTs7a0JBQ1osUUFBUSxHQUFjLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUM3RCxJQUFJLEVBQ0osSUFBSSxDQUNMOztrQkFDSyxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztZQUNwQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RCxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7O1lBMUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt5Q0FHSSxNQUFNLFNBQUMsV0FBVztZQVBkLFNBQVM7WUFGaEIsZ0JBQWdCOzs7Ozs7OztJQVNkLHlDQUFpRDs7Ozs7SUFDakQscUNBQTJCOzs7OztJQUMzQiw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5Mixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkU2NyaXB0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7fVxuXG4gIGJ1aWxkKHNjaGVtYToge31bXSk6IHZvaWQge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5pc0pzb25MZFJlcXVpcmVkKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlSnNvbkxkU2NyaXB0RWxlbWVudCgpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgcmV0dXJuIHNjaGVtYSBkYXRhIGluIGNhc2Ugb2YgU1NSIG9yIGRldmVsb3BtZW50IG1vZGUsXG4gICAqIHRvIG5vdCB3YXN0ZSBtZW1vcnkgdW5uZWNlc3NhcnkuXG4gICAqL1xuICBpc0pzb25MZFJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSB8fCBpc0Rldk1vZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSnNvbkxkU2NyaXB0RWxlbWVudCgpOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSAnanNvbi1sZCc7XG4gICAgbGV0IHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gPEhUTUxTY3JpcHRFbGVtZW50PihcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICk7XG5cbiAgICBpZiAoIXNjcmlwdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlcjIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNjcmlwdDogSFRNTFNjcmlwdEVsZW1lbnQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vbGQranNvbic7XG4gICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==