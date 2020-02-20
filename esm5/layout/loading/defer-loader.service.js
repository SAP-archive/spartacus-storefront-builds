import { __decorate, __param } from "tslib";
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
    DeferLoaderService.prototype.load = function (element, options) {
        if (this.shouldLoadInstantly((options || {}).deferLoading)) {
            return of(true);
        }
        else {
            return this.intersectionService.isIntersected(element, options);
        }
    };
    DeferLoaderService.prototype.shouldLoadInstantly = function (elementLoadingStrategy) {
        return (isPlatformServer(this.platformId) ||
            elementLoadingStrategy === DeferLoadingStrategy.INSTANT ||
            (elementLoadingStrategy !== DeferLoadingStrategy.DEFER &&
                this.globalLoadStrategy === DeferLoadingStrategy.INSTANT));
    };
    DeferLoaderService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LayoutConfig },
        { type: IntersectionService }
    ]; };
    DeferLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DeferLoaderService_Factory() { return new DeferLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.LayoutConfig), i0.ɵɵinject(i2.IntersectionService)); }, token: DeferLoaderService, providedIn: "root" });
    DeferLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(PLATFORM_ID))
    ], DeferLoaderService);
    return DeferLoaderService;
}());
export { DeferLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXItbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRTdEOzs7R0FHRztBQUlIO0lBR0UsNEJBQytCLFVBQWtCLEVBQ3JDLE1BQW9CLEVBQ3BCLG1CQUF3QztRQUZyQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3JDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUVsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGVBQWU7WUFDOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUTtZQUNqQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxpQ0FBSSxHQUFKLFVBQ0UsT0FBb0IsRUFDcEIsT0FBNkI7UUFFN0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDMUQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBRU8sZ0RBQW1CLEdBQTNCLFVBQ0Usc0JBQTRDO1FBRTVDLE9BQU8sQ0FDTCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2pDLHNCQUFzQixLQUFLLG9CQUFvQixDQUFDLE9BQU87WUFDdkQsQ0FBQyxzQkFBc0IsS0FBSyxvQkFBb0IsQ0FBQyxLQUFLO2dCQUNwRCxJQUFJLENBQUMsa0JBQWtCLEtBQUssb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQzVELENBQUM7SUFDSixDQUFDOztnQkF2QzBDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO2dCQUNELFlBQVk7Z0JBQ0MsbUJBQW1COzs7SUFOekMsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFLRyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtPQUpYLGtCQUFrQixDQTRDOUI7NkJBM0REO0NBMkRDLEFBNUNELElBNENDO1NBNUNZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVmZXJMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcnNlY3Rpb24uc2VydmljZSc7XG5cbi8qKlxuICogVGhlIGRlZmVyIGxvYWRpbmcgc2VyaXZjZSBpcyB1c2VkIHRvIGRlZmVyIGxvYWRpbmcgb2YgRE9NIGVsZW1lbnRzXG4gKiB1bnRpbCB0aGUgZWxlbWVudHMgYXJlIHJlcXVpcmVkIGZvciB0aGUgdXNlciBleHBlcmllbmNlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmZXJMb2FkZXJTZXJ2aWNlIHtcbiAgZ2xvYmFsTG9hZFN0cmF0ZWd5OiBEZWZlckxvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBMYXlvdXRDb25maWcsXG4gICAgcHJvdGVjdGVkIGludGVyc2VjdGlvblNlcnZpY2U6IEludGVyc2VjdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5nbG9iYWxMb2FkU3RyYXRlZ3kgPSBjb25maWcuZGVmZXJyZWRMb2FkaW5nXG4gICAgICA/IGNvbmZpZy5kZWZlcnJlZExvYWRpbmcuc3RyYXRlZ3lcbiAgICAgIDogRGVmZXJMb2FkaW5nU3RyYXRlZ3kuSU5TVEFOVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZlciBsb2FkaW5nIHRpbGwgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cyB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIFdlIGV2YWx1dGVzIHdoZXRoZXIgd2UgaW5zdGFudGx5IGxvYWQgdGhlIGVsZW1lbnQgZm9yIGRpZmZlcmVudCByZWFzb25zOlxuICAgKiAtIHdlIHJ1biBpbiBTU1IgbW9kZVxuICAgKiAtIHRoZXJlJ3Mgbm8gZ2xvYmFsIHN0cmF0ZWd5IGdpdmVuXG4gICAqIC0gdGhlIGdsb2JhbCBsb2FkaW5nIHN0cmF0ZWd5IGlzIHNldCB0byBJTlNUQU5UIGxvYWRpbmcsXG4gICAqICAgYW5kIHRoZSBsb2FkaW5nIHN0cmF0ZWd5IGluIHRoZSBnaXZlbiBpcyBub3Qgc2V0IHRvIERFRkVSXG4gICAqIC0gdGhlIGxvYWRpbmcgc3RyYXRlZ3kgaW4gdGhlIGdpdmVuIG9wdGlvbnMgaXMgc2V0IHRvIElOU1RBTlRcbiAgICovXG4gIGxvYWQoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9hZEluc3RhbnRseSgob3B0aW9ucyB8fCB7fSkuZGVmZXJMb2FkaW5nKSkge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlLmlzSW50ZXJzZWN0ZWQoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRMb2FkSW5zdGFudGx5KFxuICAgIGVsZW1lbnRMb2FkaW5nU3RyYXRlZ3k6IERlZmVyTG9hZGluZ1N0cmF0ZWd5XG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkgfHxcbiAgICAgIGVsZW1lbnRMb2FkaW5nU3RyYXRlZ3kgPT09IERlZmVyTG9hZGluZ1N0cmF0ZWd5LklOU1RBTlQgfHxcbiAgICAgIChlbGVtZW50TG9hZGluZ1N0cmF0ZWd5ICE9PSBEZWZlckxvYWRpbmdTdHJhdGVneS5ERUZFUiAmJlxuICAgICAgICB0aGlzLmdsb2JhbExvYWRTdHJhdGVneSA9PT0gRGVmZXJMb2FkaW5nU3RyYXRlZ3kuSU5TVEFOVClcbiAgICApO1xuICB9XG59XG4iXX0=