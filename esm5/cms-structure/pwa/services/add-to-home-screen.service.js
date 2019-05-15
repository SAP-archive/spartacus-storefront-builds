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
                _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQVFFLGdDQUNVLE1BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxNQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQbkIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXhELGVBQVUsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU85RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDdkMscUJBQXFCLEVBQ3JCLFVBQUEsS0FBSztnQkFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRTtnQkFDeEQsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsRUFDaEMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7Z0JBRUYsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsc0RBQXFCOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsdURBQXNCOzs7SUFBdEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkFyREYsVUFBVTs7OztnQkFURixlQUFlO2dCQUV0QixvQkFBb0I7Z0JBRXBCLFNBQVM7O0lBMkRYLDZCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksc0JBQXNCOzs7Ozs7SUFDakMsK0NBQTJCOzs7OztJQUUzQiwyQ0FBd0Q7O0lBRXhELDRDQUFnRTs7Ozs7SUFHOUQsd0NBQStCOzs7OztJQUMvQixzREFBa0Q7Ozs7O0lBQ2xELHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3B3YS5tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZlcnJlZEV2ZW50OiBhbnk7XG5cbiAgcHJpdmF0ZSBjYW5Qcm9tcHQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjYW5Qcm9tcHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jYW5Qcm9tcHQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFBXQU1vZHVsZUNvbmZpZyxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wd2EuYWRkVG9Ib21lU2NyZWVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnYmVmb3JlaW5zdGFsbHByb21wdCcsXG4gICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuZGVmZXJyZWRFdmVudCA9IGV2ZW50O1xuICAgICAgICAgIHRoaXMuZW5hYmxlQWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhcHBpbnN0YWxsZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHsga2V5OiAncHdhLmFkZGVkVG9Ib21lU2NyZWVuJyB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZUFkZFRvSG9tZVNjcmVlbigpO1xuICAgICAgICB0aGlzLmRlZmVycmVkRXZlbnQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuUHJvbXB0Lm5leHQodHJ1ZSk7XG4gIH1cblxuICBkaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuUHJvbXB0Lm5leHQoZmFsc2UpO1xuICB9XG5cbiAgZmlyZVByb21wdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWZlcnJlZEV2ZW50KSB7XG4gICAgICB0aGlzLmRlZmVycmVkRXZlbnQucHJvbXB0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=