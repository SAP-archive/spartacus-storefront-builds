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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUUxRTs7OztHQUlHO0FBSUg7SUFJRSwyQkFDWSxRQUFrQixFQUNsQixNQUFpQixFQUNqQix3QkFBa0QsRUFDbEQsYUFBbUQ7UUFIbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQXNDO1FBUC9ELDBEQUEwRDtRQUNsRCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7SUFFSjs7O09BR0c7SUFDSCxnQ0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxxQ0FBUyxHQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6RTtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7SUFDSyxzQ0FBVSxHQUFsQjtRQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7T0FFRztJQUNLLHdDQUFZLEdBQXBCO1FBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsS0FBSyxNQUFNLENBQzNFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxpQ0FBSyxHQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDbkUsa0JBQWtCLENBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOztnQkEzRHFCLFFBQVE7Z0JBQ1YsU0FBUztnQkFDUyx3QkFBd0I7Z0JBQ25DLGFBQWE7OztJQVI3QixpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQWlFN0I7NEJBcEZEO0NBb0ZDLEFBakVELElBaUVDO1NBakVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24sIE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZIH0gZnJvbSAnLi4vYXNtLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBBc21NYWluVWlDb21wb25lbnQgfSBmcm9tICcuLi9hc20tbWFpbi11aS9hc20tbWFpbi11aS5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBBc21FbmFibGVyU2VydmljZSBpcyB1c2VkIHRvIGVuYWJsZSBBU00gZm9yIHRob3NlIHNjZW5hcmlvJ3NcbiAqIHdoZXJlIGl0J3MgYWN0dWFsbHkgdXNlZC4gVGhpcyBzZXJ2aWNlIGlzIGFkZGVkIHRvIGF2b2lkIGFueSBwb2x1dGlvblxuICogb2YgdGhlIFVJIGFuZCBydW50aW1lIHBlcmZvcm1hbmNlIGZvciB0aGUgb3JkaW5hcnkgcHJvZHVjdGlvbiB1c2VyLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtRW5hYmxlclNlcnZpY2Uge1xuICAvKiogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIEFTTSBVSSBoYXMgYmVlbiBhZGRlZCBhbHJlYWR5ICovXG4gIHByaXZhdGUgaXNVaUFkZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPENvbXBvbmVudEZhY3Rvcnk8YW55Pj5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgQVNNIFVJIGlmIG5lZWRlZC4gVGhlIEFTTSBVSSB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHRoZVxuICAgKiBleGlzdGVuY2Ugb2YgYSBVUkwgcGFyYW1ldGVyIG9yIHByZXZpb3VzIHVzYWdlIGdpdmVuIGJ5IGxvY2FsIHN0b3JhZ2UuXG4gICAqL1xuICBsb2FkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB0aGlzLmFkZFVpKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gbW9kdWxlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBwcml2YXRlIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0xhdW5jaGVkKCkgJiYgIXRoaXMuaXNVc2VkQmVmb3JlKCkpIHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVksICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzTGF1bmNoZWQoKSB8fCB0aGlzLmlzVXNlZEJlZm9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIEFTTSBpcyBsYXVuY2hlZCB0aHJvdWdoIHRoZSBVUkwsXG4gICAqIHVzaW5nIHRoZSBhc20gZmxhZyBpbiB0aGUgVVJMLlxuICAgKi9cbiAgcHJpdmF0ZSBpc0xhdW5jaGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMubG9jYXRpb24ucGF0aCgpLnNwbGl0KCc/JylbMV07XG4gICAgcmV0dXJuIHBhcmFtcyAmJiBwYXJhbXMuc3BsaXQoJyYnKS5pbmNsdWRlcygnYXNtPXRydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZXMgbG9jYWwgc3RvcmFnZSB3aGVyZSB3ZSBwZXJzaXN0IHRoZSB1c2FnZSBvZiBBU00uXG4gICAqL1xuICBwcml2YXRlIGlzVXNlZEJlZm9yZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlICYmXG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSkgPT09ICd0cnVlJ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgQVNNIFVJIGJ5IHVzaW5nIHRoZSBgY3gtc3RvcmVmcm9udGAgb3V0bGV0LlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRVaSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1VpQWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgQXNtTWFpblVpQ29tcG9uZW50XG4gICAgKTtcbiAgICB0aGlzLm91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgZmFjdG9yeSwgT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLmlzVWlBZGRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==