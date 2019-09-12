/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
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
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                event.preventDefault();
                this.deferredEvent = event;
                this.enableAddToHomeScreen();
            }));
            this.winRef.nativeWindow.addEventListener('appinstalled', (/**
             * @return {?}
             */
            () => {
                this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.disableAddToHomeScreen();
                this.deferredEvent = null;
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd2RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFPakMsWUFDVSxNQUF1QixFQUN2QixvQkFBMEMsRUFDMUMsTUFBaUI7UUFGakIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUG5CLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUV4RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPOUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ3ZDLHFCQUFxQjs7OztZQUNyQixLQUFLLENBQUMsRUFBRTtnQkFDTixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixDQUFDLEVBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWM7OztZQUFFLEdBQUcsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsRUFDaEMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7OztZQXJERixVQUFVOzs7O1lBRkYsZUFBZTtZQUx0QixvQkFBb0I7WUFFcEIsU0FBUzs7Ozs7OztJQU9ULCtDQUEyQjs7Ozs7SUFFM0IsMkNBQXdEOztJQUV4RCw0Q0FBZ0U7Ozs7O0lBRzlELHdDQUErQjs7Ozs7SUFDL0Isc0RBQWtEOzs7OztJQUNsRCx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUFdBTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi4vcHdhLm1vZHVsZS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB7XG4gIHByaXZhdGUgZGVmZXJyZWRFdmVudDogYW55O1xuXG4gIHByaXZhdGUgY2FuUHJvbXB0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgY2FuUHJvbXB0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2FuUHJvbXB0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBQV0FNb2R1bGVDb25maWcsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICBpZiAodGhpcy5jb25maWcucHdhLmFkZFRvSG9tZVNjcmVlbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2JlZm9yZWluc3RhbGxwcm9tcHQnLFxuICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmRlZmVycmVkRXZlbnQgPSBldmVudDtcbiAgICAgICAgICB0aGlzLmVuYWJsZUFkZFRvSG9tZVNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYXBwaW5zdGFsbGVkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7IGtleTogJ3B3YS5hZGRlZFRvSG9tZVNjcmVlbicgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZUFkZFRvSG9tZVNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNhblByb21wdC5uZXh0KHRydWUpO1xuICB9XG5cbiAgZGlzYWJsZUFkZFRvSG9tZVNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNhblByb21wdC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIGZpcmVQcm9tcHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmZXJyZWRFdmVudCkge1xuICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50LnByb21wdCgpO1xuICAgIH1cbiAgfVxufVxuIl19