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
let AsmEnablerService = class AsmEnablerService {
    constructor(location, winRef, componentFactoryResolver, outletService) {
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
    load() {
        if (this.isEnabled()) {
            this.addUi();
        }
    }
    /**
     * Indicates whether the ASM module is enabled.
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
     */
    isLaunched() {
        const params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    }
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    isUsedBefore() {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    }
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    addUi() {
        if (this.isUiAdded) {
            return;
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    }
};
AsmEnablerService.ctorParameters = () => [
    { type: Location },
    { type: WindowRef },
    { type: ComponentFactoryResolver },
    { type: OutletService }
];
AsmEnablerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(i0.ɵɵinject(i1.Location), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i3.OutletService)); }, token: AsmEnablerService, providedIn: "root" });
AsmEnablerService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmEnablerService);
export { AsmEnablerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUUxRTs7OztHQUlHO0FBSUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFJNUIsWUFDWSxRQUFrQixFQUNsQixNQUFpQixFQUNqQix3QkFBa0QsRUFDbEQsYUFBbUQ7UUFIbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQXNDO1FBUC9ELDBEQUEwRDtRQUNsRCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7SUFFSjs7O09BR0c7SUFDSCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxTQUFTO1FBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVU7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNsQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLE1BQU0sQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNuRSxrQkFBa0IsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBOztZQTVEdUIsUUFBUTtZQUNWLFNBQVM7WUFDUyx3QkFBd0I7WUFDbkMsYUFBYTs7O0FBUjdCLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csaUJBQWlCLENBaUU3QjtTQWpFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uLCBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2FzbS1jb25zdGFudHMnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgQXNtRW5hYmxlclNlcnZpY2UgaXMgdXNlZCB0byBlbmFibGUgQVNNIGZvciB0aG9zZSBzY2VuYXJpbydzXG4gKiB3aGVyZSBpdCdzIGFjdHVhbGx5IHVzZWQuIFRoaXMgc2VydmljZSBpcyBhZGRlZCB0byBhdm9pZCBhbnkgcG9sdXRpb25cbiAqIG9mIHRoZSBVSSBhbmQgcnVudGltZSBwZXJmb3JtYW5jZSBmb3IgdGhlIG9yZGluYXJ5IHByb2R1Y3Rpb24gdXNlci5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUVuYWJsZXJTZXJ2aWNlIHtcbiAgLyoqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gVUkgaGFzIGJlZW4gYWRkZWQgYWxyZWFkeSAqL1xuICBwcml2YXRlIGlzVWlBZGRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxDb21wb25lbnRGYWN0b3J5PGFueT4+XG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdGhlIEFTTSBVSSBpZiBuZWVkZWQuIFRoZSBBU00gVUkgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB0aGVcbiAgICogZXhpc3RlbmNlIG9mIGEgVVJMIHBhcmFtZXRlciBvciBwcmV2aW91cyB1c2FnZSBnaXZlbiBieSBsb2NhbCBzdG9yYWdlLlxuICAgKi9cbiAgbG9hZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdGhpcy5hZGRVaSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIG1vZHVsZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNMYXVuY2hlZCgpICYmICF0aGlzLmlzVXNlZEJlZm9yZSgpKSB7XG4gICAgICBpZiAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc0xhdW5jaGVkKCkgfHwgdGhpcy5pc1VzZWRCZWZvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBBU00gaXMgbGF1bmNoZWQgdGhyb3VnaCB0aGUgVVJMLFxuICAgKiB1c2luZyB0aGUgYXNtIGZsYWcgaW4gdGhlIFVSTC5cbiAgICovXG4gIHByaXZhdGUgaXNMYXVuY2hlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmxvY2F0aW9uLnBhdGgoKS5zcGxpdCgnPycpWzFdO1xuICAgIHJldHVybiBwYXJhbXMgJiYgcGFyYW1zLnNwbGl0KCcmJykuaW5jbHVkZXMoJ2FzbT10cnVlJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGVzIGxvY2FsIHN0b3JhZ2Ugd2hlcmUgd2UgcGVyc2lzdCB0aGUgdXNhZ2Ugb2YgQVNNLlxuICAgKi9cbiAgcHJpdmF0ZSBpc1VzZWRCZWZvcmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSAmJlxuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLmdldEl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkpID09PSAndHJ1ZSdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIEFTTSBVSSBieSB1c2luZyB0aGUgYGN4LXN0b3JlZnJvbnRgIG91dGxldC5cbiAgICovXG4gIHByaXZhdGUgYWRkVWkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNVaUFkZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIEFzbU1haW5VaUNvbXBvbmVudFxuICAgICk7XG4gICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmFkZCgnY3gtc3RvcmVmcm9udCcsIGZhY3RvcnksIE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gICAgdGhpcy5pc1VpQWRkZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=