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
var AsmEnablerService = /** @class */ (function () {
    function AsmEnablerService(location, winRef, componentFactoryResolver, outletService) {
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
     */
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     * @return {?}
     */
    AsmEnablerService.prototype.load = /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     * @return {?}
     */
    function () {
        if (this.isEnabled()) {
            this.addUi();
        }
    };
    /**
     * Indicates whether the ASM module is enabled.
     */
    /**
     * Indicates whether the ASM module is enabled.
     * @private
     * @return {?}
     */
    AsmEnablerService.prototype.isEnabled = /**
     * Indicates whether the ASM module is enabled.
     * @private
     * @return {?}
     */
    function () {
        if (this.isLaunched() && !this.isUsedBefore()) {
            if (this.winRef.localStorage) {
                this.winRef.localStorage.setItem(ASM_ENABLED_LOCAL_STORAGE_KEY, 'true');
            }
        }
        return this.isLaunched() || this.isUsedBefore();
    };
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     */
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     * @private
     * @return {?}
     */
    AsmEnablerService.prototype.isLaunched = /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    };
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    /**
     * Evaluates local storage where we persist the usage of ASM.
     * @private
     * @return {?}
     */
    AsmEnablerService.prototype.isUsedBefore = /**
     * Evaluates local storage where we persist the usage of ASM.
     * @private
     * @return {?}
     */
    function () {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    };
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     * @private
     * @return {?}
     */
    AsmEnablerService.prototype.addUi = /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     * @private
     * @return {?}
     */
    function () {
        if (this.isUiAdded) {
            return;
        }
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    };
    AsmEnablerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AsmEnablerService.ctorParameters = function () { return [
        { type: Location },
        { type: WindowRef },
        { type: ComponentFactoryResolver },
        { type: OutletService }
    ]; };
    /** @nocollapse */ AsmEnablerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(i0.ɵɵinject(i1.Location), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i3.OutletService)); }, token: AsmEnablerService, providedIn: "root" });
    return AsmEnablerService;
}());
export { AsmEnablerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7OztBQU8xRTtJQU9FLDJCQUNZLFFBQWtCLEVBQ2xCLE1BQWlCLEVBQ2pCLHdCQUFrRCxFQUNsRCxhQUE0QjtRQUg1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTs7OztRQU5oQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7SUFFSjs7O09BR0c7Ozs7OztJQUNILGdDQUFJOzs7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLHFDQUFTOzs7OztJQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6RTtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSyxzQ0FBVTs7Ozs7O0lBQWxCOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyx3Q0FBWTs7Ozs7SUFBcEI7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLE1BQU0sQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ssaUNBQUs7Ozs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSOztZQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25FLGtCQUFrQixDQUNuQjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7O2dCQW5FRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWRRLFFBQVE7Z0JBRVIsU0FBUztnQkFEVCx3QkFBd0I7Z0JBRVIsYUFBYTs7OzRCQUh0QztDQWdGQyxBQXBFRCxJQW9FQztTQWpFWSxpQkFBaUI7Ozs7Ozs7SUFFNUIsc0NBQTBCOzs7OztJQUd4QixxQ0FBNEI7Ozs7O0lBQzVCLG1DQUEyQjs7Ozs7SUFDM0IscURBQTREOzs7OztJQUM1RCwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkgfSBmcm9tICcuLi9hc20tY29uc3RhbnRzJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4uL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIEFzbUVuYWJsZXJTZXJ2aWNlIGlzIHVzZWQgdG8gZW5hYmxlIEFTTSBmb3IgdGhvc2Ugc2NlbmFyaW8nc1xuICogd2hlcmUgaXQncyBhY3R1YWxseSB1c2VkLiBUaGlzIHNlcnZpY2UgaXMgYWRkZWQgdG8gYXZvaWQgYW55IHBvbHV0aW9uXG4gKiBvZiB0aGUgVUkgYW5kIHJ1bnRpbWUgcGVyZm9ybWFuY2UgZm9yIHRoZSBvcmRpbmFyeSBwcm9kdWN0aW9uIHVzZXIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21FbmFibGVyU2VydmljZSB7XG4gIC8qKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIFVJIGhhcyBiZWVuIGFkZGVkIGFscmVhZHkgKi9cbiAgcHJpdmF0ZSBpc1VpQWRkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgQVNNIFVJIGlmIG5lZWRlZC4gVGhlIEFTTSBVSSB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHRoZVxuICAgKiBleGlzdGVuY2Ugb2YgYSBVUkwgcGFyYW1ldGVyIG9yIHByZXZpb3VzIHVzYWdlIGdpdmVuIGJ5IGxvY2FsIHN0b3JhZ2UuXG4gICAqL1xuICBsb2FkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB0aGlzLmFkZFVpKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gbW9kdWxlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBwcml2YXRlIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0xhdW5jaGVkKCkgJiYgIXRoaXMuaXNVc2VkQmVmb3JlKCkpIHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVksICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzTGF1bmNoZWQoKSB8fCB0aGlzLmlzVXNlZEJlZm9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIEFTTSBpcyBsYXVuY2hlZCB0aHJvdWdoIHRoZSBVUkwsXG4gICAqIHVzaW5nIHRoZSBhc20gZmxhZyBpbiB0aGUgVVJMLlxuICAgKi9cbiAgcHJpdmF0ZSBpc0xhdW5jaGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMubG9jYXRpb24ucGF0aCgpLnNwbGl0KCc/JylbMV07XG4gICAgcmV0dXJuIHBhcmFtcyAmJiBwYXJhbXMuc3BsaXQoJyYnKS5pbmNsdWRlcygnYXNtPXRydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZXMgbG9jYWwgc3RvcmFnZSB3aGVyZSB3ZSBwZXJzaXN0IHRoZSB1c2FnZSBvZiBBU00uXG4gICAqL1xuICBwcml2YXRlIGlzVXNlZEJlZm9yZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlICYmXG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSkgPT09ICd0cnVlJ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgQVNNIFVJIGJ5IHVzaW5nIHRoZSBgY3gtc3RvcmVmcm9udGAgb3V0bGV0LlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRVaSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1VpQWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgQXNtTWFpblVpQ29tcG9uZW50XG4gICAgKTtcbiAgICB0aGlzLm91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgZmFjdG9yeSwgT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLmlzVWlBZGRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==