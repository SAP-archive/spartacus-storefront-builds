/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PWAModuleConfig } from '../pwa.module-config';
import { GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
export class AddToHomeScreenService {
    /**
     * @param {?} config
     * @param {?} globalMessageService
     * @param {?} winRef
     */
    constructor(config, globalMessageService, winRef) {
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.winRef = winRef;
        this.canPrompt = new BehaviorSubject(false);
        this.canPrompt$ = this.canPrompt.asObservable();
        if (this.config.pwa.addToHomeScreen) {
            this.init();
        }
    }
    /**
     * @return {?}
     */
    init() {
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', event => {
                event.preventDefault();
                this.deferredEvent = event;
                this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', () => {
                this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.disableAddToHomeScreen();
                this.deferredEvent = null;
            });
        }
    }
    /**
     * @return {?}
     */
    enableAddToHomeScreen() {
        this.canPrompt.next(true);
    }
    /**
     * @return {?}
     */
    disableAddToHomeScreen() {
        this.canPrompt.next(false);
    }
    /**
     * @return {?}
     */
    firePrompt() {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    }
}
AddToHomeScreenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddToHomeScreenService.ctorParameters = () => [
    { type: PWAModuleConfig },
    { type: GlobalMessageService },
    { type: WindowRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.deferredEvent;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.canPrompt;
    /** @type {?} */
    AddToHomeScreenService.prototype.canPrompt$;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFPakMsWUFDVSxNQUF1QixFQUN2QixvQkFBMEMsRUFDMUMsTUFBaUI7UUFGakIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUG5CLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUV4RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPOUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ3ZDLHFCQUFxQixFQUNyQixLQUFLLENBQUMsRUFBRTtnQkFDTixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQ2hDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2dCQUVGLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUFyREYsVUFBVTs7OztZQVRGLGVBQWU7WUFFdEIsb0JBQW9CO1lBRXBCLFNBQVM7Ozs7Ozs7SUFPVCwrQ0FBMkI7Ozs7O0lBRTNCLDJDQUF3RDs7SUFFeEQsNENBQWdFOzs7OztJQUc5RCx3Q0FBK0I7Ozs7O0lBQy9CLHNEQUFrRDs7Ozs7SUFDbEQsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFdBTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi4vcHdhLm1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZFRvSG9tZVNjcmVlblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmVycmVkRXZlbnQ6IGFueTtcblxuICBwcml2YXRlIGNhblByb21wdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNhblByb21wdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogUFdBTW9kdWxlQ29uZmlnLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnB3YS5hZGRUb0hvbWVTY3JlZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdiZWZvcmVpbnN0YWxscHJvbXB0JyxcbiAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgdGhpcy5lbmFibGVBZGRUb0hvbWVTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FwcGluc3RhbGxlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdwd2EuYWRkZWRUb0hvbWVTY3JlZW4nIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRFdmVudCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlbmFibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dChmYWxzZSk7XG4gIH1cblxuICBmaXJlUHJvbXB0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmVycmVkRXZlbnQpIHtcbiAgICAgIHRoaXMuZGVmZXJyZWRFdmVudC5wcm9tcHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==