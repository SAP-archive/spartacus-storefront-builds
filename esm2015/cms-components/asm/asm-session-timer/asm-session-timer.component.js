/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ViewEncapsulation, } from '@angular/core';
import { AsmConfig, AuthService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { AsmComponentService } from '../services/asm-component.service';
export class AsmSessionTimerComponent {
    /**
     * @param {?} config
     * @param {?} asmComponentService
     * @param {?} authService
     * @param {?} routingService
     * @param {?} changeDetectorRef
     */
    constructor(config, asmComponentService, authService, routingService, changeDetectorRef) {
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
    ngOnInit() {
        this.timeLeft = this.getTimerStartDelayInSeconds();
        this.interval = setInterval((/**
         * @return {?}
         */
        () => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                clearInterval(this.interval);
                this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
            }
            this.changeDetectorRef.markForCheck();
        }), 1000);
        this.resetOnNavigate();
        this.resetOnCustomerSessionChange();
    }
    /**
     * @private
     * @return {?}
     */
    resetOnNavigate() {
        this.subscriptions.add(this.routingService.isNavigating().subscribe((/**
         * @param {?} isNavigating
         * @return {?}
         */
        isNavigating => {
            if (isNavigating) {
                this.resetTimer();
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    resetOnCustomerSessionChange() {
        this.subscriptions.add(this.authService
            .getOccUserId()
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.resetTimer())));
    }
    /**
     * @return {?}
     */
    resetTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft = this.getTimerStartDelayInSeconds();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getTimerStartDelayInSeconds() {
        if (this.config.asm.agentSessionTimer.startingDelayInSeconds >
            this.maxStartDelayInSeconds) {
            return this.maxStartDelayInSeconds;
        }
        else {
            return this.config.asm.agentSessionTimer.startingDelayInSeconds;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}
AsmSessionTimerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-asm-session-timer',
                template: "<span class=\"label\">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>\n<span class=\"time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"reset\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n</a>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-asm-session-timer{display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-session-timer .label{margin:0 6px}@media (max-width:575px){cx-asm-session-timer .label{display:none}}cx-asm-session-timer .time{font-weight:600}cx-asm-session-timer .reset{margin:0 15px;cursor:pointer;width:16px;height:16px;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M14.9,7.5l-1,0.2c0.2,0.9,0.1,1.7-0.1,2.5c-0.3,1-0.8,2-1.5,2.7c-1.1,1.1-2.7,1.8-4.2,1.8 c-0.8,0-1.5-0.1-2.3-0.4c-1.5-0.6-2.7-1.8-3.3-3.3C2.1,10.2,2,9.5,2,8.7c0-1.6,0.7-3.1,1.8-4.3c0.7-0.8,1.7-1.3,2.7-1.5 c1-0.3,2-0.2,3,0l0,0v-1c-1-0.2-2.1-0.2-3.1,0C4.2,2.4,2.4,4,1.5,6.1C1.2,6.9,1,7.8,1,8.7c0,0.9,0.2,1.8,0.5,2.6 c0.4,0.9,0.9,1.7,1.5,2.3c0.7,0.7,1.4,1.2,2.3,1.5c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c2.1-0.9,3.7-2.7,4.2-5 C15,9.3,15,8.4,14.9,7.5z'/%3E%3Cpolygon fill='%23d1e3ff' points='11.5,2.8 9.2,4.5 9.7,0.5 '/%3E%3C/svg%3E%0A\") center center no-repeat}"]
            }] }
];
/** @nocollapse */
AsmSessionTimerComponent.ctorParameters = () => [
    { type: AsmConfig },
    { type: AsmComponentService },
    { type: AuthService },
    { type: RoutingService },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFReEUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7SUFNbkMsWUFDVSxNQUFpQixFQUNqQixtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsaUJBQW9DO1FBSnBDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZ0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO0lBU3BDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVc7OztRQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFDQUFxQyxFQUFFLENBQUM7YUFDbEU7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVPLDRCQUE0QjtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDckMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Ozs7SUFFTywyQkFBMkI7UUFDakMsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0I7WUFDeEQsSUFBSSxDQUFDLHNCQUFzQixFQUMzQjtZQUNBLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDO1NBQ2pFO0lBQ0gsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywrVUFBaUQ7Z0JBRWpELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVZRLFNBQVM7WUFHVCxtQkFBbUI7WUFIUixXQUFXO1lBQUUsY0FBYztZQU43QyxpQkFBaUI7Ozs7Ozs7SUFrQmpCLGlEQUEyQzs7Ozs7SUFDM0MsNENBQXNCOzs7OztJQUN0QiwwREFBdUM7O0lBQ3ZDLDRDQUFpQjs7Ozs7SUFHZiwwQ0FBeUI7Ozs7O0lBQ3pCLHVEQUFnRDs7Ozs7SUFDaEQsK0NBQWdDOzs7OztJQUNoQyxrREFBc0M7Ozs7O0lBQ3RDLHFEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21Db25maWcsIEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXNtQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFzbS1zZXNzaW9uLXRpbWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgaW50ZXJ2YWw6IGFueTtcbiAgcHJpdmF0ZSBtYXhTdGFydERlbGF5SW5TZWNvbmRzID0gNjAwMDA7XG4gIHRpbWVMZWZ0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IEFzbUNvbmZpZyxcbiAgICBwcml2YXRlIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGltZUxlZnQgPSB0aGlzLmdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcbiAgICAgICAgdGhpcy50aW1lTGVmdC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5hc21Db21wb25lbnRTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50QW5kQ3VzdG9tZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnJlc2V0T25OYXZpZ2F0ZSgpO1xuICAgIHRoaXMucmVzZXRPbkN1c3RvbWVyU2Vzc2lvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldE9uTmF2aWdhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuaXNOYXZpZ2F0aW5nKCkuc3Vic2NyaWJlKGlzTmF2aWdhdGluZyA9PiB7XG4gICAgICAgIGlmIChpc05hdmlnYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldE9uQ3VzdG9tZXJTZXNzaW9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKF8gPT4gdGhpcy5yZXNldFRpbWVyKCkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZUxlZnQgPiAwKSB7XG4gICAgICB0aGlzLnRpbWVMZWZ0ID0gdGhpcy5nZXRUaW1lclN0YXJ0RGVsYXlJblNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpOiBudW1iZXIge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmFzbS5hZ2VudFNlc3Npb25UaW1lci5zdGFydGluZ0RlbGF5SW5TZWNvbmRzID5cbiAgICAgIHRoaXMubWF4U3RhcnREZWxheUluU2Vjb25kc1xuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4U3RhcnREZWxheUluU2Vjb25kcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmFzbS5hZ2VudFNlc3Npb25UaW1lci5zdGFydGluZ0RlbGF5SW5TZWNvbmRzO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==