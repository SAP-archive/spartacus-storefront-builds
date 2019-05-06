/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PWAModuleConfig } from '../pwa.module-config';
import { GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
var AddToHomeScreenService = /** @class */ (function () {
    function AddToHomeScreenService(config, globalMessageService, winRef) {
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
    AddToHomeScreenService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', function (event) {
                event.preventDefault();
                _this.deferredEvent = event;
                _this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', function () {
                _this.globalMessageService.add('SAP Storefront was added to your home screen', GlobalMessageType.MSG_TYPE_CONFIRMATION);
                _this.disableAddToHomeScreen();
                _this.deferredEvent = null;
            });
        }
    };
    /**
     * @return {?}
     */
    AddToHomeScreenService.prototype.enableAddToHomeScreen = /**
     * @return {?}
     */
    function () {
        this.canPrompt.next(true);
    };
    /**
     * @return {?}
     */
    AddToHomeScreenService.prototype.disableAddToHomeScreen = /**
     * @return {?}
     */
    function () {
        this.canPrompt.next(false);
    };
    /**
     * @return {?}
     */
    AddToHomeScreenService.prototype.firePrompt = /**
     * @return {?}
     */
    function () {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    };
    AddToHomeScreenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddToHomeScreenService.ctorParameters = function () { return [
        { type: PWAModuleConfig },
        { type: GlobalMessageService },
        { type: WindowRef }
    ]; };
    return AddToHomeScreenService;
}());
export { AddToHomeScreenService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQVFFLGdDQUNVLE1BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxNQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQbkIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXhELGVBQVUsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU85RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDdkMscUJBQXFCLEVBQ3JCLFVBQUEsS0FBSztnQkFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRTtnQkFDeEQsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsOENBQThDLEVBQzlDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2dCQUVGLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELHNEQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHVEQUFzQjs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBckRGLFVBQVU7Ozs7Z0JBVEYsZUFBZTtnQkFFdEIsb0JBQW9CO2dCQUVwQixTQUFTOztJQTJEWCw2QkFBQztDQUFBLEFBdERELElBc0RDO1NBckRZLHNCQUFzQjs7Ozs7O0lBQ2pDLCtDQUEyQjs7Ozs7SUFFM0IsMkNBQXdEOztJQUV4RCw0Q0FBZ0U7Ozs7O0lBRzlELHdDQUErQjs7Ozs7SUFDL0Isc0RBQWtEOzs7OztJQUNsRCx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQV0FNb2R1bGVDb25maWcgfSBmcm9tICcuLi9wd2EubW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB7XG4gIHByaXZhdGUgZGVmZXJyZWRFdmVudDogYW55O1xuXG4gIHByaXZhdGUgY2FuUHJvbXB0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgY2FuUHJvbXB0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2FuUHJvbXB0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBQV0FNb2R1bGVDb25maWcsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICBpZiAodGhpcy5jb25maWcucHdhLmFkZFRvSG9tZVNjcmVlbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2JlZm9yZWluc3RhbGxwcm9tcHQnLFxuICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmRlZmVycmVkRXZlbnQgPSBldmVudDtcbiAgICAgICAgICB0aGlzLmVuYWJsZUFkZFRvSG9tZVNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYXBwaW5zdGFsbGVkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAnU0FQIFN0b3JlZnJvbnQgd2FzIGFkZGVkIHRvIHlvdXIgaG9tZSBzY3JlZW4nLFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZUFkZFRvSG9tZVNjcmVlbigpO1xuICAgICAgICB0aGlzLmRlZmVycmVkRXZlbnQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuUHJvbXB0Lm5leHQodHJ1ZSk7XG4gIH1cblxuICBkaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuUHJvbXB0Lm5leHQoZmFsc2UpO1xuICB9XG5cbiAgZmlyZVByb21wdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWZlcnJlZEV2ZW50KSB7XG4gICAgICB0aGlzLmRlZmVycmVkRXZlbnQucHJvbXB0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=