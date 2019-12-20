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
var JsonLdScriptFactory = /** @class */ (function () {
    function JsonLdScriptFactory(platformId, winRef, rendererFactory, sanitizer) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    JsonLdScriptFactory.prototype.build = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    };
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     * @return {?}
     */
    JsonLdScriptFactory.prototype.isJsonLdRequired = /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     * @return {?}
     */
    function () {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    };
    /**
     * @private
     * @return {?}
     */
    JsonLdScriptFactory.prototype.createJsonLdScriptElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var id = 'json-ld';
        /** @type {?} */
        var scriptElement = (/** @type {?} */ ((this.winRef.document.getElementById(id))));
        if (!scriptElement) {
            /** @type {?} */
            var renderer = this.rendererFactory.createRenderer(null, null);
            /** @type {?} */
            var script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    };
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     * @param {?} schema
     * @return {?}
     */
    JsonLdScriptFactory.prototype.sanitize = /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        var _this = this;
        return JSON.stringify(schema, (/**
         * @param {?} _key
         * @param {?} value
         * @return {?}
         */
        function (_key, value) {
            return typeof value === 'string'
                ? _this.sanitizer.sanitize(SecurityContext.HTML, value)
                : value;
        }));
    };
    JsonLdScriptFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    JsonLdScriptFactory.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: WindowRef },
        { type: RendererFactory2 },
        { type: DomSanitizer }
    ]; };
    /** @nocollapse */ JsonLdScriptFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DomSanitizer)); }, token: JsonLdScriptFactory, providedIn: "root" });
    return JsonLdScriptFactory;
}());
export { JsonLdScriptFactory };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFNUM7SUFJRSw2QkFDaUMsVUFBa0IsRUFDdkMsTUFBaUIsRUFDakIsZUFBaUMsRUFDakMsU0FBdUI7UUFIRixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDaEMsQ0FBQzs7Ozs7SUFFSixtQ0FBSzs7OztJQUFMLFVBQU0sTUFBWTtRQUNoQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDhDQUFnQjs7Ozs7SUFBaEI7UUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRU8sdURBQXlCOzs7O0lBQWpDOztZQUNRLEVBQUUsR0FBRyxTQUFTOztZQUNoQixhQUFhLEdBQXNCLG1CQUFtQixDQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQ3hDLEVBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFOztnQkFDWixRQUFRLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQzdELElBQUksRUFDSixJQUFJLENBQ0w7O2dCQUNLLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDbEUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELGFBQWEsR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILHNDQUFROzs7Ozs7OztJQUFSLFVBQVMsTUFBVTtRQUFuQixpQkFNQztRQUxDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7OztRQUFFLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDeEMsT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRO2dCQUN2QixDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxLQUFLO1FBRlQsQ0FFUyxFQUNWLENBQUM7SUFDSixDQUFDOztnQkF6REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs2Q0FHSSxNQUFNLFNBQUMsV0FBVztnQkFQZCxTQUFTO2dCQUpoQixnQkFBZ0I7Z0JBR1QsWUFBWTs7OzhCQVZyQjtDQXVFQyxBQTFERCxJQTBEQztTQXZEWSxtQkFBbUI7Ozs7OztJQUU1Qix5Q0FBaUQ7Ozs7O0lBQ2pELHFDQUEyQjs7Ozs7SUFDM0IsOENBQTJDOzs7OztJQUMzQyx3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MixcbiAgU2VjdXJpdHlDb250ZXh0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZFNjcmlwdEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgYnVpbGQoc2NoZW1hOiB7fVtdKTogdm9pZCB7XG4gICAgaWYgKHNjaGVtYSAmJiB0aGlzLmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgdGhpcy5jcmVhdGVKc29uTGRTY3JpcHRFbGVtZW50KCkuaW5uZXJIVE1MID0gdGhpcy5zYW5pdGl6ZShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHJldHVybiBzY2hlbWEgZGF0YSBpbiBjYXNlIG9mIFNTUiBvciBkZXZlbG9wbWVudCBtb2RlLFxuICAgKiB0byBub3Qgd2FzdGUgbWVtb3J5IHVubmVjZXNzYXJ5LlxuICAgKi9cbiAgaXNKc29uTGRSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgfHwgaXNEZXZNb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUpzb25MZFNjcmlwdEVsZW1lbnQoKTogSFRNTFNjcmlwdEVsZW1lbnQge1xuICAgIGNvbnN0IGlkID0gJ2pzb24tbGQnO1xuICAgIGxldCBzY3JpcHRFbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudCA9IDxIVE1MU2NyaXB0RWxlbWVudD4oXG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICApO1xuXG4gICAgaWYgKCFzY3JpcHRFbGVtZW50KSB7XG4gICAgICBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIoXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xuICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcbiAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XG4gICAgfVxuICAgIHJldHVybiBzY3JpcHRFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplcyB0aGUgZ2l2ZW4ganNvbi1sZCBzY2hlbWEgYnkgbGV2ZXJhZ2luZyB0aGUgYW5ndWxhciBIVE1MIHNhbml0aXplci5cbiAgICpcbiAgICogVGhlIGdpdmVuIHNjaGVtYSBpcyBub3QgdHJ1c3RlZCwgYXMgbWFsaWNpb3VzIGNvZGUgY291bGQgYmUgaW5qZWN0ZWQgKFhTUylcbiAgICogaW50byB0aGUganNvbi1sZCBzY3JpcHQuXG4gICAqL1xuICBzYW5pdGl6ZShzY2hlbWE6IHt9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLCAoX2tleSwgdmFsdWUpID0+XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIHZhbHVlKVxuICAgICAgICA6IHZhbHVlXG4gICAgKTtcbiAgfVxufVxuIl19