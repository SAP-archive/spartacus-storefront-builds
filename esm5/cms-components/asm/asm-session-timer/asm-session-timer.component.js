/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ViewEncapsulation, } from '@angular/core';
import { AsmConfig, AuthService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { AsmComponentService } from '../services/asm-component.service';
var AsmSessionTimerComponent = /** @class */ (function () {
    function AsmSessionTimerComponent(config, asmComponentService, authService, routingService, changeDetectorRef) {
        this.config = config;
        this.asmComponentService = asmComponentService;
        this.authService = authService;
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = new Subscription();
        this.maxStartDelayInSeconds = 60000;
    }
    /**
     * @return {?}
     */
    AsmSessionTimerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timeLeft = this.getTimerStartDelayInSeconds();
        this.interval = setInterval((/**
         * @return {?}
         */
        function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                clearInterval(_this.interval);
                _this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
            }
            _this.changeDetectorRef.markForCheck();
        }), 1000);
        this.resetOnNavigate();
        this.resetOnCustomerSessionChange();
    };
    /**
     * @private
     * @return {?}
     */
    AsmSessionTimerComponent.prototype.resetOnNavigate = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.add(this.routingService.isNavigating().subscribe((/**
         * @param {?} isNavigating
         * @return {?}
         */
        function (isNavigating) {
            if (isNavigating) {
                _this.resetTimer();
            }
        })));
    };
    /**
     * @private
     * @return {?}
     */
    AsmSessionTimerComponent.prototype.resetOnCustomerSessionChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.add(this.authService
            .getOccUserId()
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.resetTimer(); })));
    };
    /**
     * @return {?}
     */
    AsmSessionTimerComponent.prototype.resetTimer = /**
     * @return {?}
     */
    function () {
        if (this.timeLeft > 0) {
            this.timeLeft = this.getTimerStartDelayInSeconds();
        }
    };
    /**
     * @private
     * @return {?}
     */
    AsmSessionTimerComponent.prototype.getTimerStartDelayInSeconds = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.config.asm.agentSessionTimer.startingDelayInSeconds >
            this.maxStartDelayInSeconds) {
            return this.maxStartDelayInSeconds;
        }
        else {
            return this.config.asm.agentSessionTimer.startingDelayInSeconds;
        }
    };
    /**
     * @return {?}
     */
    AsmSessionTimerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    AsmSessionTimerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-asm-session-timer',
                    template: "<span class=\"label\">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>\n<span class=\"time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"reset\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n</a>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["cx-asm-session-timer{display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-session-timer .label{margin:0 6px}@media (max-width:575px){cx-asm-session-timer .label{display:none}}cx-asm-session-timer .time{font-weight:600}cx-asm-session-timer .reset{margin:0 15px;cursor:pointer;width:16px;height:16px;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M14.9,7.5l-1,0.2c0.2,0.9,0.1,1.7-0.1,2.5c-0.3,1-0.8,2-1.5,2.7c-1.1,1.1-2.7,1.8-4.2,1.8 c-0.8,0-1.5-0.1-2.3-0.4c-1.5-0.6-2.7-1.8-3.3-3.3C2.1,10.2,2,9.5,2,8.7c0-1.6,0.7-3.1,1.8-4.3c0.7-0.8,1.7-1.3,2.7-1.5 c1-0.3,2-0.2,3,0l0,0v-1c-1-0.2-2.1-0.2-3.1,0C4.2,2.4,2.4,4,1.5,6.1C1.2,6.9,1,7.8,1,8.7c0,0.9,0.2,1.8,0.5,2.6 c0.4,0.9,0.9,1.7,1.5,2.3c0.7,0.7,1.4,1.2,2.3,1.5c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c2.1-0.9,3.7-2.7,4.2-5 C15,9.3,15,8.4,14.9,7.5z'/%3E%3Cpolygon fill='%23d1e3ff' points='11.5,2.8 9.2,4.5 9.7,0.5 '/%3E%3C/svg%3E%0A\") center center no-repeat}"]
                }] }
    ];
    /** @nocollapse */
    AsmSessionTimerComponent.ctorParameters = function () { return [
        { type: AsmConfig },
        { type: AsmComponentService },
        { type: AuthService },
        { type: RoutingService },
        { type: ChangeDetectorRef }
    ]; };
    return AsmSessionTimerComponent;
}());
export { AsmSessionTimerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.interval;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.maxStartDelayInSeconds;
    /** @type {?} */
    AsmSessionTimerComponent.prototype.timeLeft;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.asmComponentService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEU7SUFZRSxrQ0FDVSxNQUFpQixFQUNqQixtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsaUJBQW9DO1FBSnBDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZ0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO0lBU3BDLENBQUM7Ozs7SUFFSiwyQ0FBUTs7O0lBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXOzs7UUFBQztZQUMxQixJQUFJLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLHFDQUFxQyxFQUFFLENBQUM7YUFDbEU7WUFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU8sa0RBQWU7Ozs7SUFBdkI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFlBQVk7WUFDdkQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVPLCtEQUE0Qjs7OztJQUFwQztRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7YUFDNUIsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixFQUFDLENBQ3JDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Ozs7SUFFTyw4REFBMkI7Ozs7SUFBbkM7UUFDRSxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQjtZQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQzNCO1lBQ0EsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7O0lBQ0QsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7O2dCQTVFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsK1VBQWlEO29CQUVqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVZRLFNBQVM7Z0JBR1QsbUJBQW1CO2dCQUhSLFdBQVc7Z0JBQUUsY0FBYztnQkFON0MsaUJBQWlCOztJQXdGbkIsK0JBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQXZFWSx3QkFBd0I7Ozs7OztJQUNuQyxpREFBMkM7Ozs7O0lBQzNDLDRDQUFzQjs7Ozs7SUFDdEIsMERBQXVDOztJQUN2Qyw0Q0FBaUI7Ozs7O0lBR2YsMENBQXlCOzs7OztJQUN6Qix1REFBZ0Q7Ozs7O0lBQ2hELCtDQUFnQzs7Ozs7SUFDaEMsa0RBQXNDOzs7OztJQUN0QyxxREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXNtQ29uZmlnLCBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hc20tc2Vzc2lvbi10aW1lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIGludGVydmFsOiBhbnk7XG4gIHByaXZhdGUgbWF4U3RhcnREZWxheUluU2Vjb25kcyA9IDYwMDAwO1xuICB0aW1lTGVmdDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBBc21Db25maWcsXG4gICAgcHJpdmF0ZSBhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVMZWZ0ID0gdGhpcy5nZXRUaW1lclN0YXJ0RGVsYXlJblNlY29uZHMoKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGltZUxlZnQgPiAwKSB7XG4gICAgICAgIHRoaXMudGltZUxlZnQtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuYXNtQ29tcG9uZW50U2VydmljZS5sb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5yZXNldE9uTmF2aWdhdGUoKTtcbiAgICB0aGlzLnJlc2V0T25DdXN0b21lclNlc3Npb25DaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRPbk5hdmlnYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmlzTmF2aWdhdGluZygpLnN1YnNjcmliZShpc05hdmlnYXRpbmcgPT4ge1xuICAgICAgICBpZiAoaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRPbkN1c3RvbWVyU2Vzc2lvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgICAgLnN1YnNjcmliZShfID0+IHRoaXMucmVzZXRUaW1lcigpKVxuICAgICk7XG4gIH1cblxuICByZXNldFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVMZWZ0ID4gMCkge1xuICAgICAgdGhpcy50aW1lTGVmdCA9IHRoaXMuZ2V0VGltZXJTdGFydERlbGF5SW5TZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaW1lclN0YXJ0RGVsYXlJblNlY29uZHMoKTogbnVtYmVyIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5hc20uYWdlbnRTZXNzaW9uVGltZXIuc3RhcnRpbmdEZWxheUluU2Vjb25kcyA+XG4gICAgICB0aGlzLm1heFN0YXJ0RGVsYXlJblNlY29uZHNcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLm1heFN0YXJ0RGVsYXlJblNlY29uZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hc20uYWdlbnRTZXNzaW9uVGltZXIuc3RhcnRpbmdEZWxheUluU2Vjb25kcztcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9XG59XG4iXX0=