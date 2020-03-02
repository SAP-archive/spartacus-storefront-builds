import { __decorate } from "tslib";
import { Location } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver, Injectable, } from '@angular/core';
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
        /** indicates whether the ASM UI has been added already */
        this.isUiAdded = false;
    }
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     */
    AsmEnablerService.prototype.load = function () {
        if (this.isEnabled()) {
            this.addUi();
        }
    };
    /**
     * Indicates whether the ASM module is enabled.
     */
    AsmEnablerService.prototype.isEnabled = function () {
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
    AsmEnablerService.prototype.isLaunched = function () {
        var params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    };
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    AsmEnablerService.prototype.isUsedBefore = function () {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    };
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    AsmEnablerService.prototype.addUi = function () {
        if (this.isUiAdded) {
            return;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    };
    AsmEnablerService.ctorParameters = function () { return [
        { type: Location },
        { type: WindowRef },
        { type: ComponentFactoryResolver },
        { type: OutletService }
    ]; };
    AsmEnablerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(i0.ɵɵinject(i1.Location), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i3.OutletService)); }, token: AsmEnablerService, providedIn: "root" });
    AsmEnablerService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmEnablerService);
    return AsmEnablerService;
}());
export { AsmEnablerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUUxRTs7OztHQUlHO0FBSUg7SUFJRSwyQkFDWSxRQUFrQixFQUNsQixNQUFpQixFQUNqQix3QkFBa0QsRUFDbEQsYUFBbUQ7UUFIbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQXNDO1FBUC9ELDBEQUEwRDtRQUNsRCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7SUFFSjs7O09BR0c7SUFDSCxnQ0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHNDQUFVLEdBQWxCO1FBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssd0NBQVksR0FBcEI7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLE1BQU0sQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLGlDQUFLLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNuRSxrQkFBa0IsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7O2dCQTNEcUIsUUFBUTtnQkFDVixTQUFTO2dCQUNTLHdCQUF3QjtnQkFDbkMsYUFBYTs7O0lBUjdCLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBaUU3Qjs0QkFwRkQ7Q0FvRkMsQUFqRUQsSUFpRUM7U0FqRVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkgfSBmcm9tICcuLi9hc20tY29uc3RhbnRzJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4uL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIEFzbUVuYWJsZXJTZXJ2aWNlIGlzIHVzZWQgdG8gZW5hYmxlIEFTTSBmb3IgdGhvc2Ugc2NlbmFyaW8nc1xuICogd2hlcmUgaXQncyBhY3R1YWxseSB1c2VkLiBUaGlzIHNlcnZpY2UgaXMgYWRkZWQgdG8gYXZvaWQgYW55IHBvbHV0aW9uXG4gKiBvZiB0aGUgVUkgYW5kIHJ1bnRpbWUgcGVyZm9ybWFuY2UgZm9yIHRoZSBvcmRpbmFyeSBwcm9kdWN0aW9uIHVzZXIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21FbmFibGVyU2VydmljZSB7XG4gIC8qKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIFVJIGhhcyBiZWVuIGFkZGVkIGFscmVhZHkgKi9cbiAgcHJpdmF0ZSBpc1VpQWRkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PlxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBBU00gVUkgaWYgbmVlZGVkLiBUaGUgQVNNIFVJIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gdGhlXG4gICAqIGV4aXN0ZW5jZSBvZiBhIFVSTCBwYXJhbWV0ZXIgb3IgcHJldmlvdXMgdXNhZ2UgZ2l2ZW4gYnkgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuYWRkVWkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIEFTTSBtb2R1bGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0xhdW5jaGVkKCkgJiYgIXRoaXMuaXNVc2VkQmVmb3JlKCkpIHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVksICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzTGF1bmNoZWQoKSB8fCB0aGlzLmlzVXNlZEJlZm9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIEFTTSBpcyBsYXVuY2hlZCB0aHJvdWdoIHRoZSBVUkwsXG4gICAqIHVzaW5nIHRoZSBhc20gZmxhZyBpbiB0aGUgVVJMLlxuICAgKi9cbiAgcHJpdmF0ZSBpc0xhdW5jaGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMubG9jYXRpb24ucGF0aCgpLnNwbGl0KCc/JylbMV07XG4gICAgcmV0dXJuIHBhcmFtcyAmJiBwYXJhbXMuc3BsaXQoJyYnKS5pbmNsdWRlcygnYXNtPXRydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZXMgbG9jYWwgc3RvcmFnZSB3aGVyZSB3ZSBwZXJzaXN0IHRoZSB1c2FnZSBvZiBBU00uXG4gICAqL1xuICBwcml2YXRlIGlzVXNlZEJlZm9yZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlICYmXG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSkgPT09ICd0cnVlJ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgQVNNIFVJIGJ5IHVzaW5nIHRoZSBgY3gtc3RvcmVmcm9udGAgb3V0bGV0LlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRVaSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1VpQWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgQXNtTWFpblVpQ29tcG9uZW50XG4gICAgKTtcbiAgICB0aGlzLm91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgZmFjdG9yeSwgT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLmlzVWlBZGRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==