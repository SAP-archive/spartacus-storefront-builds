/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Location } from '@angular/common';
import { ComponentFactoryResolver, Injectable, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { OutletPosition, OutletService } from '../../../cms-structure/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7QUFPMUU7SUFPRSwyQkFDWSxRQUFrQixFQUNsQixNQUFpQixFQUNqQix3QkFBa0QsRUFDbEQsYUFBbUQ7UUFIbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQXNDOzs7O1FBTnZELGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPdkIsQ0FBQztJQUVKOzs7T0FHRzs7Ozs7O0lBQ0gsZ0NBQUk7Ozs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0sscUNBQVM7Ozs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNLLHNDQUFVOzs7Ozs7SUFBbEI7O1lBQ1EsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLHdDQUFZOzs7OztJQUFwQjtRQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLEtBQUssTUFBTSxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyxpQ0FBSzs7Ozs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPO1NBQ1I7O1lBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDbkUsa0JBQWtCLENBQ25CO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbkVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbEJRLFFBQVE7Z0JBTVIsU0FBUztnQkFIaEIsd0JBQXdCO2dCQUlELGFBQWE7Ozs0QkFQdEM7Q0FvRkMsQUFwRUQsSUFvRUM7U0FqRVksaUJBQWlCOzs7Ozs7O0lBRTVCLHNDQUEwQjs7Ozs7SUFHeEIscUNBQTRCOzs7OztJQUM1QixtQ0FBMkI7Ozs7O0lBQzNCLHFEQUE0RDs7Ozs7SUFDNUQsMENBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkgfSBmcm9tICcuLi9hc20tY29uc3RhbnRzJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4uL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIEFzbUVuYWJsZXJTZXJ2aWNlIGlzIHVzZWQgdG8gZW5hYmxlIEFTTSBmb3IgdGhvc2Ugc2NlbmFyaW8nc1xuICogd2hlcmUgaXQncyBhY3R1YWxseSB1c2VkLiBUaGlzIHNlcnZpY2UgaXMgYWRkZWQgdG8gYXZvaWQgYW55IHBvbHV0aW9uXG4gKiBvZiB0aGUgVUkgYW5kIHJ1bnRpbWUgcGVyZm9ybWFuY2UgZm9yIHRoZSBvcmRpbmFyeSBwcm9kdWN0aW9uIHVzZXIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21FbmFibGVyU2VydmljZSB7XG4gIC8qKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIFVJIGhhcyBiZWVuIGFkZGVkIGFscmVhZHkgKi9cbiAgcHJpdmF0ZSBpc1VpQWRkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PlxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBBU00gVUkgaWYgbmVlZGVkLiBUaGUgQVNNIFVJIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gdGhlXG4gICAqIGV4aXN0ZW5jZSBvZiBhIFVSTCBwYXJhbWV0ZXIgb3IgcHJldmlvdXMgdXNhZ2UgZ2l2ZW4gYnkgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuYWRkVWkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIEFTTSBtb2R1bGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIHByaXZhdGUgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzTGF1bmNoZWQoKSAmJiAhdGhpcy5pc1VzZWRCZWZvcmUoKSkge1xuICAgICAgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSwgJ3RydWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNMYXVuY2hlZCgpIHx8IHRoaXMuaXNVc2VkQmVmb3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgQVNNIGlzIGxhdW5jaGVkIHRocm91Z2ggdGhlIFVSTCxcbiAgICogdXNpbmcgdGhlIGFzbSBmbGFnIGluIHRoZSBVUkwuXG4gICAqL1xuICBwcml2YXRlIGlzTGF1bmNoZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJz8nKVsxXTtcbiAgICByZXR1cm4gcGFyYW1zICYmIHBhcmFtcy5zcGxpdCgnJicpLmluY2x1ZGVzKCdhc209dHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyBsb2NhbCBzdG9yYWdlIHdoZXJlIHdlIHBlcnNpc3QgdGhlIHVzYWdlIG9mIEFTTS5cbiAgICovXG4gIHByaXZhdGUgaXNVc2VkQmVmb3JlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZKSA9PT0gJ3RydWUnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBBU00gVUkgYnkgdXNpbmcgdGhlIGBjeC1zdG9yZWZyb250YCBvdXRsZXQuXG4gICAqL1xuICBwcml2YXRlIGFkZFVpKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVWlBZGRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBBc21NYWluVWlDb21wb25lbnRcbiAgICApO1xuICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCBmYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMuaXNVaUFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19