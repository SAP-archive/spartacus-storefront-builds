/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
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
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.preventDefault();
                _this.deferredEvent = event;
                _this.enableAddToHomeScreen();
            }));
            this.winRef.nativeWindow.addEventListener('appinstalled', (/**
             * @return {?}
             */
            function () {
                _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                _this.disableAddToHomeScreen();
                _this.deferredEvent = null;
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RDtJQVFFLGdDQUNVLE1BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxNQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQbkIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXhELGVBQVUsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU85RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDdkMscUJBQXFCOzs7O1lBQ3JCLFVBQUEsS0FBSztnQkFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixDQUFDLEVBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWM7OztZQUFFO2dCQUN4RCxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxFQUNoQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztnQkFFRixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxzREFBcUI7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCx1REFBc0I7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQXJERixVQUFVOzs7O2dCQUZGLGVBQWU7Z0JBTHRCLG9CQUFvQjtnQkFFcEIsU0FBUzs7SUEyRFgsNkJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXJEWSxzQkFBc0I7Ozs7OztJQUNqQywrQ0FBMkI7Ozs7O0lBRTNCLDJDQUF3RDs7SUFFeEQsNENBQWdFOzs7OztJQUc5RCx3Q0FBK0I7Ozs7O0lBQy9CLHNEQUFrRDs7Ozs7SUFDbEQsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3B3YS5tb2R1bGUtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZFRvSG9tZVNjcmVlblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmVycmVkRXZlbnQ6IGFueTtcblxuICBwcml2YXRlIGNhblByb21wdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNhblByb21wdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogUFdBTW9kdWxlQ29uZmlnLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnB3YS5hZGRUb0hvbWVTY3JlZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdiZWZvcmVpbnN0YWxscHJvbXB0JyxcbiAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgdGhpcy5lbmFibGVBZGRUb0hvbWVTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FwcGluc3RhbGxlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdwd2EuYWRkZWRUb0hvbWVTY3JlZW4nIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRFdmVudCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlbmFibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dChmYWxzZSk7XG4gIH1cblxuICBmaXJlUHJvbXB0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmVycmVkRXZlbnQpIHtcbiAgICAgIHRoaXMuZGVmZXJyZWRFdmVudC5wcm9tcHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==