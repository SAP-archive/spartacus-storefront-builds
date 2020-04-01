import { __decorate } from "tslib";
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { LAUNCH_CALLER } from '../../../layout/launch-dialog/config/index';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
import { ASM_ENABLED_LOCAL_STORAGE_KEY } from '../asm-constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/core";
import * as i3 from "../../../layout/launch-dialog/services/launch-dialog.service";
/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
var AsmEnablerService = /** @class */ (function () {
    function AsmEnablerService(location, winRef, launchDialogService) {
        this.location = location;
        this.winRef = winRef;
        this.launchDialogService = launchDialogService;
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
        this.launchDialogService.launch(LAUNCH_CALLER.ASM);
    };
    AsmEnablerService.ctorParameters = function () { return [
        { type: Location },
        { type: WindowRef },
        { type: LaunchDialogService }
    ]; };
    AsmEnablerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(i0.ɵɵinject(i1.Location), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i3.LaunchDialogService)); }, token: AsmEnablerService, providedIn: "root" });
    AsmEnablerService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmEnablerService);
    return AsmEnablerService;
}());
export { AsmEnablerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUVqRTs7OztHQUlHO0FBSUg7SUFDRSwyQkFDWSxRQUFrQixFQUNsQixNQUFpQixFQUNqQixtQkFBd0M7UUFGeEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVKOzs7T0FHRztJQUNILGdDQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILHFDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDekU7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sc0NBQVUsR0FBcEI7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDTyx3Q0FBWSxHQUF0QjtRQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLEtBQUssTUFBTSxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08saUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQW5EcUIsUUFBUTtnQkFDVixTQUFTO2dCQUNJLG1CQUFtQjs7O0lBSnpDLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBc0Q3Qjs0QkFyRUQ7Q0FxRUMsQUF0REQsSUFzREM7U0F0RFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbGF1bmNoLWRpYWxvZy9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgTGF1bmNoRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2FzbS1jb25zdGFudHMnO1xuXG4vKipcbiAqIFRoZSBBc21FbmFibGVyU2VydmljZSBpcyB1c2VkIHRvIGVuYWJsZSBBU00gZm9yIHRob3NlIHNjZW5hcmlvJ3NcbiAqIHdoZXJlIGl0J3MgYWN0dWFsbHkgdXNlZC4gVGhpcyBzZXJ2aWNlIGlzIGFkZGVkIHRvIGF2b2lkIGFueSBwb2x1dGlvblxuICogb2YgdGhlIFVJIGFuZCBydW50aW1lIHBlcmZvcm1hbmNlIGZvciB0aGUgb3JkaW5hcnkgcHJvZHVjdGlvbiB1c2VyLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtRW5hYmxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBBU00gVUkgaWYgbmVlZGVkLiBUaGUgQVNNIFVJIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gdGhlXG4gICAqIGV4aXN0ZW5jZSBvZiBhIFVSTCBwYXJhbWV0ZXIgb3IgcHJldmlvdXMgdXNhZ2UgZ2l2ZW4gYnkgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuYWRkVWkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIEFTTSBtb2R1bGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0xhdW5jaGVkKCkgJiYgIXRoaXMuaXNVc2VkQmVmb3JlKCkpIHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVksICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzTGF1bmNoZWQoKSB8fCB0aGlzLmlzVXNlZEJlZm9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIEFTTSBpcyBsYXVuY2hlZCB0aHJvdWdoIHRoZSBVUkwsXG4gICAqIHVzaW5nIHRoZSBhc20gZmxhZyBpbiB0aGUgVVJMLlxuICAgKi9cbiAgcHJvdGVjdGVkIGlzTGF1bmNoZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJz8nKVsxXTtcbiAgICByZXR1cm4gcGFyYW1zICYmIHBhcmFtcy5zcGxpdCgnJicpLmluY2x1ZGVzKCdhc209dHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyBsb2NhbCBzdG9yYWdlIHdoZXJlIHdlIHBlcnNpc3QgdGhlIHVzYWdlIG9mIEFTTS5cbiAgICovXG4gIHByb3RlY3RlZCBpc1VzZWRCZWZvcmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSAmJlxuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLmdldEl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkpID09PSAndHJ1ZSdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIEFTTSBVSSBieSB1c2luZyB0aGUgYGN4LXN0b3JlZnJvbnRgIG91dGxldC5cbiAgICovXG4gIHByb3RlY3RlZCBhZGRVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UubGF1bmNoKExBVU5DSF9DQUxMRVIuQVNNKTtcbiAgfVxufVxuIl19