/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Location } from '@angular/common';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { OutletPosition, OutletService } from '../../../cms-structure';
import { ASM_ENABLED_LOCAL_STORAGE_KEY } from '../asm-constants';
import { AsmMainUiComponent } from '../asm-main-ui/asm-main-ui.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/core";
import * as i3 from "../../../cms-structure/outlet/outlet.service";
/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
export class AsmEnablerService {
    /**
     * @param {?} location
     * @param {?} winRef
     * @param {?} componentFactoryResolver
     * @param {?} outletService
     */
    constructor(location, winRef, componentFactoryResolver, outletService) {
        this.location = location;
        this.winRef = winRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletService = outletService;
        /**
         * indicates whether the ASM UI has been added already
         */
        this.isUiAdded = false;
    }
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     * @return {?}
     */
    load() {
        if (this.isEnabled()) {
            this.addUi();
        }
    }
    /**
     * Indicates whether the ASM module is enabled.
     * @private
     * @return {?}
     */
    isEnabled() {
        if (this.isLaunched() && !this.isUsedBefore()) {
            if (this.winRef.localStorage) {
                this.winRef.localStorage.setItem(ASM_ENABLED_LOCAL_STORAGE_KEY, 'true');
            }
        }
        return this.isLaunched() || this.isUsedBefore();
    }
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     * @private
     * @return {?}
     */
    isLaunched() {
        /** @type {?} */
        const params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    }
    /**
     * Evaluates local storage where we persist the usage of ASM.
     * @private
     * @return {?}
     */
    isUsedBefore() {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    }
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     * @private
     * @return {?}
     */
    addUi() {
        if (this.isUiAdded) {
            return;
        }
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    }
}
AsmEnablerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmEnablerService.ctorParameters = () => [
    { type: Location },
    { type: WindowRef },
    { type: ComponentFactoryResolver },
    { type: OutletService }
];
/** @nocollapse */ AsmEnablerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(i0.ɵɵinject(i1.Location), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i3.OutletService)); }, token: AsmEnablerService, providedIn: "root" });
if (false) {
    /**
     * indicates whether the ASM UI has been added already
     * @type {?}
     * @private
     */
    AsmEnablerService.prototype.isUiAdded;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.outletService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7OztBQVUxRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBSTVCLFlBQ1ksUUFBa0IsRUFDbEIsTUFBaUIsRUFDakIsd0JBQWtELEVBQ2xELGFBQTRCO1FBSDVCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFlOzs7O1FBTmhDLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPdkIsQ0FBQzs7Ozs7O0lBTUosSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7O0lBS08sU0FBUztRQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6RTtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7SUFNTyxVQUFVOztjQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBS08sWUFBWTtRQUNsQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLE1BQU0sQ0FDM0UsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtPLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSOztjQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25FLGtCQUFrQixDQUNuQjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7OztZQW5FRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkUSxRQUFRO1lBRVIsU0FBUztZQURULHdCQUF3QjtZQUVSLGFBQWE7Ozs7Ozs7OztJQWNwQyxzQ0FBMEI7Ozs7O0lBR3hCLHFDQUE0Qjs7Ozs7SUFDNUIsbUNBQTJCOzs7OztJQUMzQixxREFBNEQ7Ozs7O0lBQzVELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uLCBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZSc7XG5pbXBvcnQgeyBBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2FzbS1jb25zdGFudHMnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgQXNtRW5hYmxlclNlcnZpY2UgaXMgdXNlZCB0byBlbmFibGUgQVNNIGZvciB0aG9zZSBzY2VuYXJpbydzXG4gKiB3aGVyZSBpdCdzIGFjdHVhbGx5IHVzZWQuIFRoaXMgc2VydmljZSBpcyBhZGRlZCB0byBhdm9pZCBhbnkgcG9sdXRpb25cbiAqIG9mIHRoZSBVSSBhbmQgcnVudGltZSBwZXJmb3JtYW5jZSBmb3IgdGhlIG9yZGluYXJ5IHByb2R1Y3Rpb24gdXNlci5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUVuYWJsZXJTZXJ2aWNlIHtcbiAgLyoqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gVUkgaGFzIGJlZW4gYWRkZWQgYWxyZWFkeSAqL1xuICBwcml2YXRlIGlzVWlBZGRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBBU00gVUkgaWYgbmVlZGVkLiBUaGUgQVNNIFVJIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gdGhlXG4gICAqIGV4aXN0ZW5jZSBvZiBhIFVSTCBwYXJhbWV0ZXIgb3IgcHJldmlvdXMgdXNhZ2UgZ2l2ZW4gYnkgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuYWRkVWkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIEFTTSBtb2R1bGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIHByaXZhdGUgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzTGF1bmNoZWQoKSAmJiAhdGhpcy5pc1VzZWRCZWZvcmUoKSkge1xuICAgICAgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSwgJ3RydWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNMYXVuY2hlZCgpIHx8IHRoaXMuaXNVc2VkQmVmb3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgQVNNIGlzIGxhdW5jaGVkIHRocm91Z2ggdGhlIFVSTCxcbiAgICogdXNpbmcgdGhlIGFzbSBmbGFnIGluIHRoZSBVUkwuXG4gICAqL1xuICBwcml2YXRlIGlzTGF1bmNoZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJz8nKVsxXTtcbiAgICByZXR1cm4gcGFyYW1zICYmIHBhcmFtcy5zcGxpdCgnJicpLmluY2x1ZGVzKCdhc209dHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyBsb2NhbCBzdG9yYWdlIHdoZXJlIHdlIHBlcnNpc3QgdGhlIHVzYWdlIG9mIEFTTS5cbiAgICovXG4gIHByaXZhdGUgaXNVc2VkQmVmb3JlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZKSA9PT0gJ3RydWUnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBBU00gVUkgYnkgdXNpbmcgdGhlIGBjeC1zdG9yZWZyb250YCBvdXRsZXQuXG4gICAqL1xuICBwcml2YXRlIGFkZFVpKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVWlBZGRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBBc21NYWluVWlDb21wb25lbnRcbiAgICApO1xuICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCBmYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMuaXNVaUFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19