/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component } from '@angular/core';
import { AsmConfig, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { AsmComponentService } from '../asm-component.service';
export class AsmSessionTimerComponent {
    /**
     * @param {?} config
     * @param {?} asmComponentService
     * @param {?} routingService
     * @param {?} changeDetectorRef
     */
    constructor(config, asmComponentService, routingService, changeDetectorRef) {
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
                template: "<span class=\"session-label\"\n  >{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span\n>\n<span class=\"session-time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"session-btn\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n  <img\n    src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE3MWE1Njg2LTFjYjgtOWE0ZC04NjQ4LTRiZDA5MTE0YTRkNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZjA2OWI1Ny00N2ZjLTQ1YWYtYmRhNy1hMmE0MTVlNTgwNGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNTBCRTIzMjkyNkY1RTNERTEzQzU3RUY4QjA5M0I0OUEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjkwMCIgdGlmZjpJbWFnZUxlbmd0aD0iOTAwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOllSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iOTAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iOTAwIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMC0zMVQxNTo0NTowNC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTAtMzFUMTU6NTE6MTktMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTAtMzFUMTU6NTE6MTktMDQ6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODZmOTIxZi0yNjUzLTQ5NWItYmIzZS05MWMxNjUyYjM0ZGYiIHN0RXZ0OndoZW49IjIwMTktMTAtMzFUMTU6NDk6NTQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvanBlZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMzNhMjM5LWZkNjgtNDEyNS04OTg3LTVlNDE3MTA5NmRkNiIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo0OTo1NC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyZjExNzQ0LTljNmEtNDU0Zi1hMTU4LTlkYTBkZDQ4ZGNiNyIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo1MToxOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmMDY5YjU3LTQ3ZmMtNDVhZi1iZGE3LWEyYTQxNWU1ODA0ZCIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo1MToxOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyZjExNzQ0LTljNmEtNDU0Zi1hMTU4LTlkYTBkZDQ4ZGNiNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjMzYTIzOS1mZDY4LTQxMjUtODk4Ny01ZTQxNzEwOTZkZDYiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNTBCRTIzMjkyNkY1RTNERTEzQzU3RUY4QjA5M0I0OUEiLz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GWh9vQAAArZJREFUWMPF2E+IVVUcwPHPm0lRRpOQYWQck8goBh1GFEQromZhRfTPqIULN7pwcDUK6SJwFrbRKQhbhdCqYqhEpMRNEzLNIsigRvxTqZCTpiBjimUMjot+D06XN8O98+48f5vf7913zr1fzvmd8/tTmZyc9NMlZUovxvFJ3gldHf/pB5Qrj+PDsC9jqMjkppJhzuJ42N/g6SKTZ7Iyj6IH67ACrWjGTZzGKJ5CC06E/V3ZMG9gB56ZZsyaGs+G0YGxMmC6cRBPJs/G4iOj4RsTWBSrtgzPxe+qTJSxMr2JQ8IX+Cjxi1rSFpBi69biz3ph3sWesM8E2FAOf/o1AenG+XodeGcC8iU25Xzf3NA3sBoX6j1N63Eg7EG8VeB9p/Ew/gog9cIcDf1zQZCq/D7TSyp76e3C4rA3arCkMM14J+z348jeN5jX8GDY/e6DpDAvhz42E+crE2ZVxBA43KBv9+Icns3CdOGRsE81COYVPIbtWZj2ZNCVBsH8EHpRFqYlGfRPg2DGQ8/Pwvxd40qfbZmbjehNNbamtUEwS0Jfz8KMopqWdzYIZmWSqv4P5keMhP1SA0DmJ1fJcBbmLr4K+1XMm2WYNyP8TOLbWjfwIO5EJO+bZZjdoT9LD09T5ki/F/be9MiVLJvxRPKdKVOI/lidOUleU6Y8hI/D/jzCwZQwd5KEqgf7S4YZCTf4F1vyVJRHIp+pJlsDJUAswMlke3pwO29524dDiX0s6qGZyAv4JRL0qs8MF621tybb9DwuYh+W54TYECf067ht70aknrI7UcnREnkdH2Bp8ux4FPancDV8oCXGrIn8uTsZP4Rt+G26lkglZ39mDt6O3KO9YJowgE/z9GcqBZtFlQgXLyZdiIXJ/9eidjoRV8P3RZpFlTo6V52RqbVFOnALfwRModqpCnMPQUuWjaJfMG0AAAAASUVORK5CYII=\"\n    width=\"16\"\n    height=\"16\"\n    alt=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  />\n</a>\n"
            }] }
];
/** @nocollapse */
AsmSessionTimerComponent.ctorParameters = () => [
    { type: AsmConfig },
    { type: AsmComponentService },
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
    AsmSessionTimerComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTS9ELE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFNbkMsWUFDVSxNQUFpQixFQUNqQixtQkFBd0MsRUFDeEMsY0FBOEIsRUFDOUIsaUJBQW9DO1FBSHBDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVR0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO0lBUXBDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVc7OztRQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFDQUFxQyxFQUFFLENBQUM7YUFDbEU7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzFELElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVPLDJCQUEyQjtRQUNqQyxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQjtZQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQzNCO1lBQ0EsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGlpTEFBaUQ7YUFDbEQ7Ozs7WUFQUSxTQUFTO1lBRVQsbUJBQW1CO1lBRlIsY0FBYztZQUR6QixpQkFBaUI7Ozs7Ozs7SUFVeEIsaURBQTJDOzs7OztJQUMzQyw0Q0FBc0I7Ozs7O0lBQ3RCLDBEQUF1Qzs7SUFDdkMsNENBQWlCOzs7OztJQUdmLDBDQUF5Qjs7Ozs7SUFDekIsdURBQWdEOzs7OztJQUNoRCxrREFBc0M7Ozs7O0lBQ3RDLHFEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21Db25maWcsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL2FzbS1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFzbS1zZXNzaW9uLXRpbWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgaW50ZXJ2YWw6IGFueTtcbiAgcHJpdmF0ZSBtYXhTdGFydERlbGF5SW5TZWNvbmRzID0gNjAwMDA7XG4gIHRpbWVMZWZ0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IEFzbUNvbmZpZyxcbiAgICBwcml2YXRlIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGltZUxlZnQgPSB0aGlzLmdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcbiAgICAgICAgdGhpcy50aW1lTGVmdC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5hc21Db21wb25lbnRTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50QW5kQ3VzdG9tZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5pc05hdmlnYXRpbmcoKS5zdWJzY3JpYmUoaXNOYXZpZ2F0aW5nID0+IHtcbiAgICAgICAgaWYgKGlzTmF2aWdhdGluZykge1xuICAgICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNldFRpbWVyKCkge1xuICAgIGlmICh0aGlzLnRpbWVMZWZ0ID4gMCkge1xuICAgICAgdGhpcy50aW1lTGVmdCA9IHRoaXMuZ2V0VGltZXJTdGFydERlbGF5SW5TZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaW1lclN0YXJ0RGVsYXlJblNlY29uZHMoKTogbnVtYmVyIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5hc20uYWdlbnRTZXNzaW9uVGltZXIuc3RhcnRpbmdEZWxheUluU2Vjb25kcyA+XG4gICAgICB0aGlzLm1heFN0YXJ0RGVsYXlJblNlY29uZHNcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLm1heFN0YXJ0RGVsYXlJblNlY29uZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hc20uYWdlbnRTZXNzaW9uVGltZXIuc3RhcnRpbmdEZWxheUluU2Vjb25kcztcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9XG59XG4iXX0=