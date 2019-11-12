/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component } from '@angular/core';
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
                template: "<span class=\"session-label\"\n  >{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span\n>\n<span class=\"session-time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"session-btn\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n  <img\n    src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMB2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE3MWE1Njg2LTFjYjgtOWE0ZC04NjQ4LTRiZDA5MTE0YTRkNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZjA2OWI1Ny00N2ZjLTQ1YWYtYmRhNy1hMmE0MTVlNTgwNGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNTBCRTIzMjkyNkY1RTNERTEzQzU3RUY4QjA5M0I0OUEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjkwMCIgdGlmZjpJbWFnZUxlbmd0aD0iOTAwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOllSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iOTAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iOTAwIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMC0zMVQxNTo0NTowNC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTAtMzFUMTU6NTE6MTktMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTAtMzFUMTU6NTE6MTktMDQ6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODZmOTIxZi0yNjUzLTQ5NWItYmIzZS05MWMxNjUyYjM0ZGYiIHN0RXZ0OndoZW49IjIwMTktMTAtMzFUMTU6NDk6NTQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvanBlZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMzNhMjM5LWZkNjgtNDEyNS04OTg3LTVlNDE3MTA5NmRkNiIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo0OTo1NC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyZjExNzQ0LTljNmEtNDU0Zi1hMTU4LTlkYTBkZDQ4ZGNiNyIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo1MToxOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmMDY5YjU3LTQ3ZmMtNDVhZi1iZGE3LWEyYTQxNWU1ODA0ZCIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0zMVQxNTo1MToxOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyZjExNzQ0LTljNmEtNDU0Zi1hMTU4LTlkYTBkZDQ4ZGNiNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjMzYTIzOS1mZDY4LTQxMjUtODk4Ny01ZTQxNzEwOTZkZDYiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNTBCRTIzMjkyNkY1RTNERTEzQzU3RUY4QjA5M0I0OUEiLz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GWh9vQAAArZJREFUWMPF2E+IVVUcwPHPm0lRRpOQYWQck8goBh1GFEQromZhRfTPqIULN7pwcDUK6SJwFrbRKQhbhdCqYqhEpMRNEzLNIsigRvxTqZCTpiBjimUMjot+D06XN8O98+48f5vf7913zr1fzvmd8/tTmZyc9NMlZUovxvFJ3gldHf/pB5Qrj+PDsC9jqMjkppJhzuJ42N/g6SKTZ7Iyj6IH67ACrWjGTZzGKJ5CC06E/V3ZMG9gB56ZZsyaGs+G0YGxMmC6cRBPJs/G4iOj4RsTWBSrtgzPxe+qTJSxMr2JQ8IX+Cjxi1rSFpBi69biz3ph3sWesM8E2FAOf/o1AenG+XodeGcC8iU25Xzf3NA3sBoX6j1N63Eg7EG8VeB9p/Ew/gog9cIcDf1zQZCq/D7TSyp76e3C4rA3arCkMM14J+z348jeN5jX8GDY/e6DpDAvhz42E+crE2ZVxBA43KBv9+Icns3CdOGRsE81COYVPIbtWZj2ZNCVBsH8EHpRFqYlGfRPg2DGQ8/Pwvxd40qfbZmbjehNNbamtUEwS0Jfz8KMopqWdzYIZmWSqv4P5keMhP1SA0DmJ1fJcBbmLr4K+1XMm2WYNyP8TOLbWjfwIO5EJO+bZZjdoT9LD09T5ki/F/be9MiVLJvxRPKdKVOI/lidOUleU6Y8hI/D/jzCwZQwd5KEqgf7S4YZCTf4F1vyVJRHIp+pJlsDJUAswMlke3pwO29524dDiX0s6qGZyAv4JRL0qs8MF621tybb9DwuYh+W54TYECf067ht70aknrI7UcnREnkdH2Bp8ux4FPancDV8oCXGrIn8uTsZP4Rt+G26lkglZ39mDt6O3KO9YJowgE/z9GcqBZtFlQgXLyZdiIXJ/9eidjoRV8P3RZpFlTo6V52RqbVFOnALfwRModqpCnMPQUuWjaJfMG0AAAAASUVORK5CYII=\"\n    width=\"16\"\n    height=\"16\"\n    alt=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  />\n</a>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU14RSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7OztJQU1uQyxZQUNVLE1BQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixjQUE4QixFQUM5QixpQkFBb0M7UUFKcEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnRDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQywyQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFTcEMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVzs7O1FBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMscUNBQXFDLEVBQUUsQ0FBQzthQUNsRTtZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxZQUFZLENBQUMsRUFBRTtZQUMxRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sNEJBQTRCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVPLDJCQUEyQjtRQUNqQyxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQjtZQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQzNCO1lBQ0EsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGlpTEFBaUQ7YUFDbEQ7Ozs7WUFSUSxTQUFTO1lBR1QsbUJBQW1CO1lBSFIsV0FBVztZQUFFLGNBQWM7WUFEdEMsaUJBQWlCOzs7Ozs7O0lBV3hCLGlEQUEyQzs7Ozs7SUFDM0MsNENBQXNCOzs7OztJQUN0QiwwREFBdUM7O0lBQ3ZDLDRDQUFpQjs7Ozs7SUFHZiwwQ0FBeUI7Ozs7O0lBQ3pCLHVEQUFnRDs7Ozs7SUFDaEQsK0NBQWdDOzs7OztJQUNoQyxrREFBc0M7Ozs7O0lBQ3RDLHFEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21Db25maWcsIEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXNtQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFzbS1zZXNzaW9uLXRpbWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgaW50ZXJ2YWw6IGFueTtcbiAgcHJpdmF0ZSBtYXhTdGFydERlbGF5SW5TZWNvbmRzID0gNjAwMDA7XG4gIHRpbWVMZWZ0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IEFzbUNvbmZpZyxcbiAgICBwcml2YXRlIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGltZUxlZnQgPSB0aGlzLmdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aW1lTGVmdCA+IDApIHtcbiAgICAgICAgdGhpcy50aW1lTGVmdC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5hc21Db21wb25lbnRTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50QW5kQ3VzdG9tZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnJlc2V0T25OYXZpZ2F0ZSgpO1xuICAgIHRoaXMucmVzZXRPbkN1c3RvbWVyU2Vzc2lvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldE9uTmF2aWdhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuaXNOYXZpZ2F0aW5nKCkuc3Vic2NyaWJlKGlzTmF2aWdhdGluZyA9PiB7XG4gICAgICAgIGlmIChpc05hdmlnYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldE9uQ3VzdG9tZXJTZXNzaW9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKF8gPT4gdGhpcy5yZXNldFRpbWVyKCkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZUxlZnQgPiAwKSB7XG4gICAgICB0aGlzLnRpbWVMZWZ0ID0gdGhpcy5nZXRUaW1lclN0YXJ0RGVsYXlJblNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcygpOiBudW1iZXIge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmFzbS5hZ2VudFNlc3Npb25UaW1lci5zdGFydGluZ0RlbGF5SW5TZWNvbmRzID5cbiAgICAgIHRoaXMubWF4U3RhcnREZWxheUluU2Vjb25kc1xuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4U3RhcnREZWxheUluU2Vjb25kcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmFzbS5hZ2VudFNlc3Npb25UaW1lci5zdGFydGluZ0RlbGF5SW5TZWNvbmRzO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==