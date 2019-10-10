/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, RendererFactory2, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var JsonLdScriptFactory = /** @class */ (function () {
    function JsonLdScriptFactory(platformId, winRef, rendererFactory) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
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
            this.createJsonLdScriptElement().innerHTML = JSON.stringify(schema);
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
    JsonLdScriptFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    JsonLdScriptFactory.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: WindowRef },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ JsonLdScriptFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2)); }, token: JsonLdScriptFactory, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUU1QztJQUlFLDZCQUNpQyxVQUFrQixFQUN2QyxNQUFpQixFQUNqQixlQUFpQztRQUZaLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFDMUMsQ0FBQzs7Ozs7SUFFSixtQ0FBSzs7OztJQUFMLFVBQU0sTUFBWTtRQUNoQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDhDQUFnQjs7Ozs7SUFBaEI7UUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRU8sdURBQXlCOzs7O0lBQWpDOztZQUNRLEVBQUUsR0FBRyxTQUFTOztZQUNoQixhQUFhLEdBQXNCLG1CQUFtQixDQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQ3hDLEVBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFOztnQkFDWixRQUFRLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQzdELElBQUksRUFDSixJQUFJLENBQ0w7O2dCQUNLLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDbEUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELGFBQWEsR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOztnQkExQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs2Q0FHSSxNQUFNLFNBQUMsV0FBVztnQkFQZCxTQUFTO2dCQUZoQixnQkFBZ0I7Ozs4QkFQbEI7Q0FzREMsQUEzQ0QsSUEyQ0M7U0F4Q1ksbUJBQW1COzs7Ozs7SUFFNUIseUNBQWlEOzs7OztJQUNqRCxxQ0FBMkI7Ozs7O0lBQzNCLDhDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGRTY3JpcHRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHt9XG5cbiAgYnVpbGQoc2NoZW1hOiB7fVtdKTogdm9pZCB7XG4gICAgaWYgKHNjaGVtYSAmJiB0aGlzLmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgdGhpcy5jcmVhdGVKc29uTGRTY3JpcHRFbGVtZW50KCkuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT25seSByZXR1cm4gc2NoZW1hIGRhdGEgaW4gY2FzZSBvZiBTU1Igb3IgZGV2ZWxvcG1lbnQgbW9kZSxcbiAgICogdG8gbm90IHdhc3RlIG1lbW9yeSB1bm5lY2Vzc2FyeS5cbiAgICovXG4gIGlzSnNvbkxkUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpIHx8IGlzRGV2TW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVKc29uTGRTY3JpcHRFbGVtZW50KCk6IEhUTUxTY3JpcHRFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9ICdqc29uLWxkJztcbiAgICBsZXQgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQgPSA8SFRNTFNjcmlwdEVsZW1lbnQ+KFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgKTtcblxuICAgIGlmICghc2NyaXB0RWxlbWVudCkge1xuICAgICAgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyMiA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsXG4gICAgICApO1xuICAgICAgY29uc3Qgc2NyaXB0OiBIVE1MU2NyaXB0RWxlbWVudCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xuICAgIH1cbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcbiAgfVxufVxuIl19