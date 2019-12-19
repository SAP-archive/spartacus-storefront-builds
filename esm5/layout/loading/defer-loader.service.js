/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DeferLoadingStrategy } from '@spartacus/core';
import { of } from 'rxjs';
import { LayoutConfig } from '../config/layout-config';
import { IntersectionService } from './intersection.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/layout-config";
import * as i2 from "./intersection.service";
/**
 * The defer loading serivce is used to defer loading of DOM elements
 * until the elements are required for the user experience.
 */
var DeferLoaderService = /** @class */ (function () {
    function DeferLoaderService(platformId, config, intersectionService) {
        this.platformId = platformId;
        this.config = config;
        this.intersectionService = intersectionService;
        this.globalLoadStrategy = config.deferredLoading
            ? config.deferredLoading.strategy
            : DeferLoadingStrategy.INSTANT;
    }
    /**
     * Defer loading till the element intersects the viewport.
     *
     * We evalutes whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     */
    /**
     * Defer loading till the element intersects the viewport.
     *
     * We evalutes whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    DeferLoaderService.prototype.load = /**
     * Defer loading till the element intersects the viewport.
     *
     * We evalutes whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    function (element, options) {
        if (this.shouldLoadInstantly((options || {}).deferLoading)) {
            return of(true);
        }
        else {
            return this.intersectionService.isIntersected(element, options);
        }
    };
    /**
     * @private
     * @param {?} elementLoadingStrategy
     * @return {?}
     */
    DeferLoaderService.prototype.shouldLoadInstantly = /**
     * @private
     * @param {?} elementLoadingStrategy
     * @return {?}
     */
    function (elementLoadingStrategy) {
        return (isPlatformServer(this.platformId) ||
            elementLoadingStrategy === DeferLoadingStrategy.INSTANT ||
            (elementLoadingStrategy !== DeferLoadingStrategy.DEFER &&
                this.globalLoadStrategy === DeferLoadingStrategy.INSTANT));
    };
    DeferLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DeferLoaderService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LayoutConfig },
        { type: IntersectionService }
    ]; };
    /** @nocollapse */ DeferLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DeferLoaderService_Factory() { return new DeferLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.LayoutConfig), i0.ɵɵinject(i2.IntersectionService)); }, token: DeferLoaderService, providedIn: "root" });
    return DeferLoaderService;
}());
export { DeferLoaderService };
if (false) {
    /** @type {?} */
    DeferLoaderService.prototype.globalLoadStrategy;
    /**
     * @type {?}
     * @private
     */
    DeferLoaderService.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    DeferLoaderService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    DeferLoaderService.prototype.intersectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXItbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7OztBQU03RDtJQU1FLDRCQUMrQixVQUFrQixFQUNyQyxNQUFvQixFQUNwQixtQkFBd0M7UUFGckIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNyQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFFbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxlQUFlO1lBQzlDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVE7WUFDakMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7Ozs7OztJQUNILGlDQUFJOzs7Ozs7Ozs7Ozs7O0lBQUosVUFDRSxPQUFvQixFQUNwQixPQUE2QjtRQUU3QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMxRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7OztJQUVPLGdEQUFtQjs7Ozs7SUFBM0IsVUFDRSxzQkFBNEM7UUFFNUMsT0FBTyxDQUNMLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDakMsc0JBQXNCLEtBQUssb0JBQW9CLENBQUMsT0FBTztZQUN2RCxDQUFDLHNCQUFzQixLQUFLLG9CQUFvQixDQUFDLEtBQUs7Z0JBQ3BELElBQUksQ0FBQyxrQkFBa0IsS0FBSyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7O2dCQTlDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUs0QyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztnQkFmZCxZQUFZO2dCQUVaLG1CQUFtQjs7OzZCQU41QjtDQTJEQyxBQS9DRCxJQStDQztTQTVDWSxrQkFBa0I7OztJQUM3QixnREFBeUM7Ozs7O0lBR3ZDLHdDQUErQzs7Ozs7SUFDL0Msb0NBQThCOzs7OztJQUM5QixpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlZmVyTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uU2VydmljZSB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBkZWZlciBsb2FkaW5nIHNlcml2Y2UgaXMgdXNlZCB0byBkZWZlciBsb2FkaW5nIG9mIERPTSBlbGVtZW50c1xuICogdW50aWwgdGhlIGVsZW1lbnRzIGFyZSByZXF1aXJlZCBmb3IgdGhlIHVzZXIgZXhwZXJpZW5jZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERlZmVyTG9hZGVyU2VydmljZSB7XG4gIGdsb2JhbExvYWRTdHJhdGVneTogRGVmZXJMb2FkaW5nU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogTGF5b3V0Q29uZmlnLFxuICAgIHByb3RlY3RlZCBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBJbnRlcnNlY3Rpb25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZ2xvYmFsTG9hZFN0cmF0ZWd5ID0gY29uZmlnLmRlZmVycmVkTG9hZGluZ1xuICAgICAgPyBjb25maWcuZGVmZXJyZWRMb2FkaW5nLnN0cmF0ZWd5XG4gICAgICA6IERlZmVyTG9hZGluZ1N0cmF0ZWd5LklOU1RBTlQ7XG4gIH1cblxuICAvKipcbiAgICogRGVmZXIgbG9hZGluZyB0aWxsIHRoZSBlbGVtZW50IGludGVyc2VjdHMgdGhlIHZpZXdwb3J0LlxuICAgKlxuICAgKiBXZSBldmFsdXRlcyB3aGV0aGVyIHdlIGluc3RhbnRseSBsb2FkIHRoZSBlbGVtZW50IGZvciBkaWZmZXJlbnQgcmVhc29uczpcbiAgICogLSB3ZSBydW4gaW4gU1NSIG1vZGVcbiAgICogLSB0aGVyZSdzIG5vIGdsb2JhbCBzdHJhdGVneSBnaXZlblxuICAgKiAtIHRoZSBnbG9iYWwgbG9hZGluZyBzdHJhdGVneSBpcyBzZXQgdG8gSU5TVEFOVCBsb2FkaW5nLFxuICAgKiAgIGFuZCB0aGUgbG9hZGluZyBzdHJhdGVneSBpbiB0aGUgZ2l2ZW4gaXMgbm90IHNldCB0byBERUZFUlxuICAgKiAtIHRoZSBsb2FkaW5nIHN0cmF0ZWd5IGluIHRoZSBnaXZlbiBvcHRpb25zIGlzIHNldCB0byBJTlNUQU5UXG4gICAqL1xuICBsb2FkKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICh0aGlzLnNob3VsZExvYWRJbnN0YW50bHkoKG9wdGlvbnMgfHwge30pLmRlZmVyTG9hZGluZykpIHtcbiAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJzZWN0aW9uU2VydmljZS5pc0ludGVyc2VjdGVkKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkTG9hZEluc3RhbnRseShcbiAgICBlbGVtZW50TG9hZGluZ1N0cmF0ZWd5OiBEZWZlckxvYWRpbmdTdHJhdGVneVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpIHx8XG4gICAgICBlbGVtZW50TG9hZGluZ1N0cmF0ZWd5ID09PSBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5UIHx8XG4gICAgICAoZWxlbWVudExvYWRpbmdTdHJhdGVneSAhPT0gRGVmZXJMb2FkaW5nU3RyYXRlZ3kuREVGRVIgJiZcbiAgICAgICAgdGhpcy5nbG9iYWxMb2FkU3RyYXRlZ3kgPT09IERlZmVyTG9hZGluZ1N0cmF0ZWd5LklOU1RBTlQpXG4gICAgKTtcbiAgfVxufVxuIl19