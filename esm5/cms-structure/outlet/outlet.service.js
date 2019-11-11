/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OutletPosition } from './outlet.model';
import * as i0 from "@angular/core";
var OutletService = /** @class */ (function () {
    function OutletService() {
        this.templatesRefs = new Map();
        this.templatesRefsBefore = new Map();
        this.templatesRefsAfter = new Map();
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    /**
     * @param {?} outlet
     * @param {?} templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     * @param {?=} position
     * @return {?}
     */
    OutletService.prototype.add = /**
     * @param {?} outlet
     * @param {?} templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     * @param {?=} position
     * @return {?}
     */
    function (outlet, templateOrFactory, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (position === OutletPosition.BEFORE) {
            this.templatesRefsBefore.set(outlet, templateOrFactory);
        }
        if (position === OutletPosition.REPLACE) {
            this.templatesRefs.set(outlet, templateOrFactory);
        }
        if (position === OutletPosition.AFTER) {
            this.templatesRefsAfter.set(outlet, templateOrFactory);
        }
    };
    /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    OutletService.prototype.get = /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    function (outlet, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        /** @type {?} */
        var templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore.get(outlet);
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter.get(outlet);
                break;
            default:
                templateRef = this.templatesRefs.get(outlet);
        }
        return templateRef;
    };
    OutletService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ OutletService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
    return OutletService;
}());
export { OutletService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefs;
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefsBefore;
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefsAfter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVoRDtJQUFBO1FBSVUsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFHNUIsQ0FBQztRQUNJLHdCQUFtQixHQUFHLElBQUksR0FBRyxFQUdsQyxDQUFDO1FBQ0ksdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBR2pDLENBQUM7S0E4REw7SUFwQ0M7O09BRUc7Ozs7Ozs7SUFDSCwyQkFBRzs7Ozs7O0lBQUgsVUFDRSxNQUFjLEVBQ2QsaUJBQTJELEVBQzNELFFBQWlEO1FBQWpELHlCQUFBLEVBQUEsV0FBMkIsY0FBYyxDQUFDLE9BQU87UUFFakQsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7OztJQUVELDJCQUFHOzs7OztJQUFILFVBQ0UsTUFBYyxFQUNkLFFBQWlEO1FBQWpELHlCQUFBLEVBQUEsV0FBMkIsY0FBYyxDQUFDLE9BQU87O1lBRTdDLFdBQVc7UUFDZixRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN4QixXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNSLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRCxNQUFNO1lBQ1I7Z0JBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0JBNUVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkFMRDtDQWdGQyxBQTdFRCxJQTZFQztTQTFFWSxhQUFhOzs7Ozs7SUFDeEIsc0NBR0k7Ozs7O0lBQ0osNENBR0k7Ozs7O0lBQ0osMkNBR0kiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5LCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgVGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55PlxuICA+KCk7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmc0JlZm9yZSA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT5cbiAgPigpO1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnNBZnRlciA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT5cbiAgPigpO1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGVtcGxhdGUgb3IgQ29tcG9uZW50RmFjdG9yeSwgc28gdGhhdCBVSSBvdXRsZXRzIGNhbiBiZSByZXBsYWNlZCBkeW5hbWljYWxseS5cbiAgICogVGhlIFVJIHBvc2l0aW9uIHdoZXJlIHRoaXMgdGVtcGxhdGUgb3IgQ29tcG9uZW50RmFjdG9yeSBpcyBpbnNlcnRlZCBpcyBnaXZlbiBieSBhXG4gICAqIHN0cmluZyByZWZlcmVuY2UgKGNhbGxlZCBgb3V0bGV0YCkgYW5kIG9wdGlvbmFsIGBPdXRsZXRQb3NpdGlvbmAuIFRoZSBgT3V0bGV0UG9zaXRpb25gXG4gICAqIGlzIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIsIG9yIHJlcGxhY2VzIHRoZSBlbnRpcmUgVUkuXG4gICAqXG4gICAqIEBwYXJhbSBvdXRsZXQgdGhlIFVJIGxvY2F0aW9uIHJlcHJlc2VudGVkIGJ5IGEgc3RyaW5nXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSB0aGUgYFRlbXBsYXRlUmVmYCB0aGF0IHdpbGwgYmUgdXNlZCB0byBpbnNlcnQgVUlcbiAgICogQHBhcmFtIHBvc2l0aW9uIHRoZSBgT3V0bGV0UG9zaXRpb25gIGluIHRoZSBVSVxuICAgKi9cbiAgYWRkKFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHBvc2l0aW9uPzogT3V0bGV0UG9zaXRpb25cbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCB3aWxsIGJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBvdXRsZXQgVUlcbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55PixcbiAgICBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVPckZhY3RvcnkgQSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCBpbnNlcnRzIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5LlxuICAgKi9cbiAgYWRkKFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHRlbXBsYXRlT3JGYWN0b3J5OiBUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+LFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0VcbiAgKTogdm9pZCB7XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVzUmVmc0JlZm9yZS5zZXQob3V0bGV0LCB0ZW1wbGF0ZU9yRmFjdG9yeSk7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzLnNldChvdXRsZXQsIHRlbXBsYXRlT3JGYWN0b3J5KTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5BRlRFUikge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXIuc2V0KG91dGxldCwgdGVtcGxhdGVPckZhY3RvcnkpO1xuICAgIH1cbiAgfVxuXG4gIGdldChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXG4gICk6IFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4ge1xuICAgIGxldCB0ZW1wbGF0ZVJlZjtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICBjYXNlIE91dGxldFBvc2l0aW9uLkJFRk9SRTpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNCZWZvcmUuZ2V0KG91dGxldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5BRlRFUjpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNBZnRlci5nZXQob3V0bGV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmcy5nZXQob3V0bGV0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=