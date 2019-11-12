/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component } from '@angular/core';
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
                    template: "<span class=\"session-label\"\n  >{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span\n>\n<span class=\"session-time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"session-btn\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n  <img\n    src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE3MWE1Njg2LTFjYjgtOWE0ZC04NjQ4LTRiZDA5MTE0YTRkNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZjA2OWI1Ny00N2ZjLTQ1YWYtYmRhNy1hMmE0MTVlNTgwNGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNTBCRTIzMjkyNkY1RTNERTEzQzU3RUY4QjA5M0I0OUEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjkwMCIgdGlmZjpJbWFnZUxlbmd0aD0iOTAwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOllSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iOTAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iOTAwIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMC0zMVQxNTo0NTowNC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTAtMzFUMTU6NTE6MTktMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTAtMzFUMTU6NTE6MTktMDQ6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODZmOTIxZi0yNjUzLTQ5NWItYmIzZS05MWMxNjUyYjM0ZGYiIHN0RXZ0OndoZW49IjIwMTktMTAtMzFUMTU6NDk6NTQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvanBlZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMzNhMjM5LWZkNjgtNDEyNS04OTg3LTVlNDE3MTA5NmRkNiIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo0OTo1NC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyZjExNzQ0LTljNmEtNDU0Zi1hMTU4LTlkYTBkZDQ4ZGNiNyIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo1MToxOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmMDY5YjU3LTQ3ZmMtNDVhZi1iZGE3LWEyYTQxNWU1ODA0ZCIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo1MToxOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyZjExNzQ0LTljNmEtNDU0Zi1hMTU4LTlkYTBkZDQ4ZGNiNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjMzYTIzOS1mZDY4LTQxMjUtODk4Ny01ZTQxNzEwOTZkZDYiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNTBCRTIzMjkyNkY1RTNERTEzQzU3RUY4QjA5M0I0OUEiLz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GWh9vQAAArZJREFUWMPF2E+IVVUcwPHPm0lRRpOQYWQck8goBh1GFEQromZhRfTPqIULN7pwcDUK6SJwFrbRKQhbhdCqYqhEpMRNEzLNIsigRvxTqZCTpiBjimUMjot+D06XN8O98+48f5vf7913zr1fzvmd8/tTmZyc9NMlZUovxvFJ3gldHf/pB5Qrj+PDsC9jqMjkppJhzuJ42N/g6SKTZ7Iyj6IH67ACrWjGTZzGKJ5CC06E/V3ZMG9gB56ZZsyaGs+G0YGxMmC6cRBPJs/G4iOj4RsTWBSrtgzPxe+qTJSxMr2JQ8IX+Cjxi1rSFpBi69biz3ph3sWesM8E2FAOf/o1AenG+XodeGcC8iU25Xzf3NA3sBoX6j1N63Eg7EG8VeB9p/Ew/gog9cIcDf1zQZCq/D7TSyp76e3C4rA3arCkMM14J+z348jeN5jX8GDY/e6DpDAvhz42E+crE2ZVxBA43KBv9+Icns3CdOGRsE81COYVPIbtWZj2ZNCVBsH8EHpRFqYlGfRPg2DGQ8/Pwvxd40qfbZmbjehNNbamtUEwS0Jfz8KMopqWdzYIZmWSqv4P5keMhP1SA0DmJ1fJcBbmLr4K+1XMm2WYNyP8TOLbWjfwIO5EJO+bZZjdoT9LD09T5ki/F/be9MiVLJvxRPKdKVOI/lidOUleU6Y8hI/D/jzCwZQwd5KEqgf7S4YZCTf4F1vyVJRHIp+pJlsDJUAswMlke3pwO29524dDiX0s6qGZyAv4JRL0qs8MF621tybb9DwuYh+W54TYECf067ht70aknrI7UcnREnkdH2Bp8ux4FPancDV8oCXGrIn8uTsZP4Rt+G26lkglZ39mDt6O3KO9YJowgE/z9GcqBZtFlQgXLyZdiIXJ/9eidjoRV8P3RZpFlTo6V52RqbVFOnALfwRModqpCnMPQUuWjaJfMG0AAAAASUVORK5CYII=\"\n    width=\"16\"\n    height=\"16\"\n    alt=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  />\n</a>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RTtJQVVFLGtDQUNVLE1BQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixjQUE4QixFQUM5QixpQkFBb0M7UUFKcEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnRDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQywyQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFTcEMsQ0FBQzs7OztJQUVKLDJDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVc7OztRQUFDO1lBQzFCLElBQUksS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxhQUFhLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsbUJBQW1CLENBQUMscUNBQXFDLEVBQUUsQ0FBQzthQUNsRTtZQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTyxrREFBZTs7OztJQUF2QjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsWUFBWTtZQUN2RCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sK0RBQTRCOzs7O0lBQXBDO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FDckMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVPLDhEQUEyQjs7OztJQUFuQztRQUNFLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCO1lBQ3hELElBQUksQ0FBQyxzQkFBc0IsRUFDM0I7WUFDQSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7SUFDRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxpaUxBQWlEO2lCQUNsRDs7OztnQkFSUSxTQUFTO2dCQUdULG1CQUFtQjtnQkFIUixXQUFXO2dCQUFFLGNBQWM7Z0JBRHRDLGlCQUFpQjs7SUFpRjFCLCtCQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0F2RVksd0JBQXdCOzs7Ozs7SUFDbkMsaURBQTJDOzs7OztJQUMzQyw0Q0FBc0I7Ozs7O0lBQ3RCLDBEQUF1Qzs7SUFDdkMsNENBQWlCOzs7OztJQUdmLDBDQUF5Qjs7Ozs7SUFDekIsdURBQWdEOzs7OztJQUNoRCwrQ0FBZ0M7Ozs7O0lBQ2hDLGtEQUFzQzs7Ozs7SUFDdEMscURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzbUNvbmZpZywgQXV0aFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBc21Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXNtLWNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYXNtLXNlc3Npb24tdGltZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21TZXNzaW9uVGltZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBpbnRlcnZhbDogYW55O1xuICBwcml2YXRlIG1heFN0YXJ0RGVsYXlJblNlY29uZHMgPSA2MDAwMDtcbiAgdGltZUxlZnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQXNtQ29uZmlnLFxuICAgIHByaXZhdGUgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lTGVmdCA9IHRoaXMuZ2V0VGltZXJTdGFydERlbGF5SW5TZWNvbmRzKCk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID4gMCkge1xuICAgICAgICB0aGlzLnRpbWVMZWZ0LS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmFzbUNvbXBvbmVudFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRBbmRDdXN0b21lcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMucmVzZXRPbk5hdmlnYXRlKCk7XG4gICAgdGhpcy5yZXNldE9uQ3VzdG9tZXJTZXNzaW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0T25OYXZpZ2F0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5pc05hdmlnYXRpbmcoKS5zdWJzY3JpYmUoaXNOYXZpZ2F0aW5nID0+IHtcbiAgICAgICAgaWYgKGlzTmF2aWdhdGluZykge1xuICAgICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0T25DdXN0b21lclNlc3Npb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoXyA9PiB0aGlzLnJlc2V0VGltZXIoKSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXRUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcbiAgICAgIHRoaXMudGltZUxlZnQgPSB0aGlzLmdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZXJTdGFydERlbGF5SW5TZWNvbmRzKCk6IG51bWJlciB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuYXNtLmFnZW50U2Vzc2lvblRpbWVyLnN0YXJ0aW5nRGVsYXlJblNlY29uZHMgPlxuICAgICAgdGhpcy5tYXhTdGFydERlbGF5SW5TZWNvbmRzXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhTdGFydERlbGF5SW5TZWNvbmRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXNtLmFnZW50U2Vzc2lvblRpbWVyLnN0YXJ0aW5nRGVsYXlJblNlY29uZHM7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxufVxuIl19