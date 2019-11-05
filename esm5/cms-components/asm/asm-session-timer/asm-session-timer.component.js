/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component } from '@angular/core';
import { AsmConfig, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { AsmComponentService } from '../asm-component.service';
var AsmSessionTimerComponent = /** @class */ (function () {
    function AsmSessionTimerComponent(config, asmComponentService, routingService, changeDetectorRef) {
        this.config = config;
        this.asmComponentService = asmComponentService;
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
    AsmSessionTimerComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EO0lBVUUsa0NBQ1UsTUFBaUIsRUFDakIsbUJBQXdDLEVBQ3hDLGNBQThCLEVBQzlCLGlCQUFvQztRQUhwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFUdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5DLDJCQUFzQixHQUFHLEtBQUssQ0FBQztJQVFwQyxDQUFDOzs7O0lBRUosMkNBQVE7OztJQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXOzs7UUFBQztZQUMxQixJQUFJLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLHFDQUFxQyxFQUFFLENBQUM7YUFDbEU7WUFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsWUFBWTtZQUN2RCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVPLDhEQUEyQjs7OztJQUFuQztRQUNFLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCO1lBQ3hELElBQUksQ0FBQyxzQkFBc0IsRUFDM0I7WUFDQSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7SUFDRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxpaUxBQWlEO2lCQUNsRDs7OztnQkFQUSxTQUFTO2dCQUVULG1CQUFtQjtnQkFGUixjQUFjO2dCQUR6QixpQkFBaUI7O0lBaUUxQiwrQkFBQztDQUFBLEFBNURELElBNERDO1NBeERZLHdCQUF3Qjs7Ozs7O0lBQ25DLGlEQUEyQzs7Ozs7SUFDM0MsNENBQXNCOzs7OztJQUN0QiwwREFBdUM7O0lBQ3ZDLDRDQUFpQjs7Ozs7SUFHZiwwQ0FBeUI7Ozs7O0lBQ3pCLHVEQUFnRDs7Ozs7SUFDaEQsa0RBQXNDOzs7OztJQUN0QyxxREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXNtQ29uZmlnLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hc20tc2Vzc2lvbi10aW1lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIGludGVydmFsOiBhbnk7XG4gIHByaXZhdGUgbWF4U3RhcnREZWxheUluU2Vjb25kcyA9IDYwMDAwO1xuICB0aW1lTGVmdDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBBc21Db25maWcsXG4gICAgcHJpdmF0ZSBhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpbWVMZWZ0ID0gdGhpcy5nZXRUaW1lclN0YXJ0RGVsYXlJblNlY29uZHMoKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGltZUxlZnQgPiAwKSB7XG4gICAgICAgIHRoaXMudGltZUxlZnQtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuYXNtQ29tcG9uZW50U2VydmljZS5sb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuaXNOYXZpZ2F0aW5nKCkuc3Vic2NyaWJlKGlzTmF2aWdhdGluZyA9PiB7XG4gICAgICAgIGlmIChpc05hdmlnYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcbiAgICAgIHRoaXMudGltZUxlZnQgPSB0aGlzLmdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZXJTdGFydERlbGF5SW5TZWNvbmRzKCk6IG51bWJlciB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuYXNtLmFnZW50U2Vzc2lvblRpbWVyLnN0YXJ0aW5nRGVsYXlJblNlY29uZHMgPlxuICAgICAgdGhpcy5tYXhTdGFydERlbGF5SW5TZWNvbmRzXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhTdGFydERlbGF5SW5TZWNvbmRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXNtLmFnZW50U2Vzc2lvblRpbWVyLnN0YXJ0aW5nRGVsYXlJblNlY29uZHM7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxufVxuIl19