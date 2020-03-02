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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUUxRTs7OztHQUlHO0FBSUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFJNUIsWUFDWSxRQUFrQixFQUNsQixNQUFpQixFQUNqQix3QkFBa0QsRUFDbEQsYUFBbUQ7UUFIbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQXNDO1FBUC9ELDBEQUEwRDtRQUNsRCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7SUFFSjs7O09BR0c7SUFDSCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVU7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNsQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLE1BQU0sQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNuRSxrQkFBa0IsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBOztZQTVEdUIsUUFBUTtZQUNWLFNBQVM7WUFDUyx3QkFBd0I7WUFDbkMsYUFBYTs7O0FBUjdCLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csaUJBQWlCLENBaUU3QjtTQWpFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uLCBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2FzbS1jb25zdGFudHMnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgQXNtRW5hYmxlclNlcnZpY2UgaXMgdXNlZCB0byBlbmFibGUgQVNNIGZvciB0aG9zZSBzY2VuYXJpbydzXG4gKiB3aGVyZSBpdCdzIGFjdHVhbGx5IHVzZWQuIFRoaXMgc2VydmljZSBpcyBhZGRlZCB0byBhdm9pZCBhbnkgcG9sdXRpb25cbiAqIG9mIHRoZSBVSSBhbmQgcnVudGltZSBwZXJmb3JtYW5jZSBmb3IgdGhlIG9yZGluYXJ5IHByb2R1Y3Rpb24gdXNlci5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUVuYWJsZXJTZXJ2aWNlIHtcbiAgLyoqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gVUkgaGFzIGJlZW4gYWRkZWQgYWxyZWFkeSAqL1xuICBwcml2YXRlIGlzVWlBZGRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxDb21wb25lbnRGYWN0b3J5PGFueT4+XG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdGhlIEFTTSBVSSBpZiBuZWVkZWQuIFRoZSBBU00gVUkgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB0aGVcbiAgICogZXhpc3RlbmNlIG9mIGEgVVJMIHBhcmFtZXRlciBvciBwcmV2aW91cyB1c2FnZSBnaXZlbiBieSBsb2NhbCBzdG9yYWdlLlxuICAgKi9cbiAgbG9hZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdGhpcy5hZGRVaSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIG1vZHVsZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzTGF1bmNoZWQoKSAmJiAhdGhpcy5pc1VzZWRCZWZvcmUoKSkge1xuICAgICAgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSwgJ3RydWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNMYXVuY2hlZCgpIHx8IHRoaXMuaXNVc2VkQmVmb3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgQVNNIGlzIGxhdW5jaGVkIHRocm91Z2ggdGhlIFVSTCxcbiAgICogdXNpbmcgdGhlIGFzbSBmbGFnIGluIHRoZSBVUkwuXG4gICAqL1xuICBwcml2YXRlIGlzTGF1bmNoZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJz8nKVsxXTtcbiAgICByZXR1cm4gcGFyYW1zICYmIHBhcmFtcy5zcGxpdCgnJicpLmluY2x1ZGVzKCdhc209dHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyBsb2NhbCBzdG9yYWdlIHdoZXJlIHdlIHBlcnNpc3QgdGhlIHVzYWdlIG9mIEFTTS5cbiAgICovXG4gIHByaXZhdGUgaXNVc2VkQmVmb3JlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZKSA9PT0gJ3RydWUnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBBU00gVUkgYnkgdXNpbmcgdGhlIGBjeC1zdG9yZWZyb250YCBvdXRsZXQuXG4gICAqL1xuICBwcml2YXRlIGFkZFVpKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVWlBZGRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBBc21NYWluVWlDb21wb25lbnRcbiAgICApO1xuICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCBmYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMuaXNVaUFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19