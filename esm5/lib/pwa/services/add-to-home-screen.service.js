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
                _this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                    text: 'SAP Storefront was added to your home screen',
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvcHdhL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDO0lBUUUsZ0NBQ1UsTUFBdUIsRUFDdkIsb0JBQTBDLEVBQzFDLE1BQWlCO1FBRmpCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVBuQixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFeEQsZUFBVSxHQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTzlELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVELHFDQUFJOzs7SUFBSjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUN2QyxxQkFBcUIsRUFDckIsVUFBQSxLQUFLO2dCQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FDRixDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFO2dCQUN4RCxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO29CQUM1QixJQUFJLEVBQUUsaUJBQWlCLENBQUMscUJBQXFCO29CQUM3QyxJQUFJLEVBQUUsOENBQThDO2lCQUNyRCxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsc0RBQXFCOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsdURBQXNCOzs7SUFBdEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkFyREYsVUFBVTs7OztnQkFURixlQUFlO2dCQUV0QixvQkFBb0I7Z0JBRXBCLFNBQVM7O0lBMkRYLDZCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksc0JBQXNCOzs7Ozs7SUFDakMsK0NBQTJCOzs7OztJQUUzQiwyQ0FBd0Q7O0lBRXhELDRDQUFnRTs7Ozs7SUFHOUQsd0NBQStCOzs7OztJQUMvQixzREFBa0Q7Ozs7O0lBQ2xELHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3B3YS5tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZlcnJlZEV2ZW50OiBhbnk7XG5cbiAgcHJpdmF0ZSBjYW5Qcm9tcHQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjYW5Qcm9tcHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jYW5Qcm9tcHQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFBXQU1vZHVsZUNvbmZpZyxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wd2EuYWRkVG9Ib21lU2NyZWVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnYmVmb3JlaW5zdGFsbHByb21wdCcsXG4gICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuZGVmZXJyZWRFdmVudCA9IGV2ZW50O1xuICAgICAgICAgIHRoaXMuZW5hYmxlQWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhcHBpbnN0YWxsZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04sXG4gICAgICAgICAgdGV4dDogJ1NBUCBTdG9yZWZyb250IHdhcyBhZGRlZCB0byB5b3VyIGhvbWUgc2NyZWVuJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRFdmVudCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlbmFibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dChmYWxzZSk7XG4gIH1cblxuICBmaXJlUHJvbXB0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmVycmVkRXZlbnQpIHtcbiAgICAgIHRoaXMuZGVmZXJyZWRFdmVudC5wcm9tcHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==