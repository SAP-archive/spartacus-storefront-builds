import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckoutStepService } from '../../services/checkout-step.service';
var CheckoutProgressComponent = /** @class */ (function () {
    function CheckoutProgressComponent(checkoutStepService, cdr) {
        var _this = this;
        this.checkoutStepService = checkoutStepService;
        this.cdr = cdr;
        this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap(function (index) { return (_this.activeStepIndex = index); }));
    }
    CheckoutProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.checkoutStepService.steps$.subscribe(function (steps) {
            _this.steps = steps;
            // TODO(#8879): Couldn't we use observables here instead?
            _this.cdr.detectChanges();
        });
    };
    CheckoutProgressComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CheckoutProgressComponent.prototype.getTabIndex = function (stepIndex) {
        return !this.isActive(stepIndex) && !this.isDisabled(stepIndex) ? 0 : -1;
    };
    CheckoutProgressComponent.prototype.isActive = function (index) {
        return index === this.activeStepIndex;
    };
    CheckoutProgressComponent.prototype.isDisabled = function (index) {
        return index > this.activeStepIndex;
    };
    CheckoutProgressComponent.ctorParameters = function () { return [
        { type: CheckoutStepService },
        { type: ChangeDetectorRef }
    ]; };
    CheckoutProgressComponent = __decorate([
        Component({
            selector: 'cx-checkout-progress',
            template: "<section *ngIf=\"(activeStepIndex$ | async) !== undefined\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <ng-container *ngFor=\"let step of steps; let i = index\">\n        <li\n          class=\"cx-item\"\n          [class.active]=\"isActive(i)\"\n          [class.disabled]=\"isDisabled(i)\"\n        >\n          <a\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n            class=\"cx-link\"\n            [class.active]=\"isActive(i)\"\n            [class.disabled]=\"isDisabled(i)\"\n            [tabindex]=\"getTabIndex(i)\"\n            [innerHTML]=\"step.name | cxTranslate | cxMultiLine\"\n          >\n          </a>\n        </li>\n      </ng-container>\n    </ul>\n  </div>\n</section>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CheckoutProgressComponent);
    return CheckoutProgressComponent;
}());
export { CheckoutProgressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRTtJQUNFLG1DQUNZLG1CQUF3QyxFQUN4QyxHQUFzQjtRQUZsQyxpQkFHSTtRQUZRLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFNbEMscUJBQWdCLEdBRVosSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQy9DLENBQUM7SUFUQyxDQUFDO0lBYUosNENBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDbEUsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIseURBQXlEO1lBQ3pELEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELCtDQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQztJQUVELDhDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3RCLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDdEMsQ0FBQzs7Z0JBdkNnQyxtQkFBbUI7Z0JBQ25DLGlCQUFpQjs7SUFIdkIseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMseXdCQUFpRDtZQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1cseUJBQXlCLENBMENyQztJQUFELGdDQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXTtcblxuICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlU3RlcEluZGV4JDogT2JzZXJ2YWJsZTxcbiAgICBudW1iZXJcbiAgPiA9IHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5hY3RpdmVTdGVwSW5kZXgkLnBpcGUoXG4gICAgdGFwKChpbmRleCkgPT4gKHRoaXMuYWN0aXZlU3RlcEluZGV4ID0gaW5kZXgpKVxuICApO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnN0ZXBzJC5zdWJzY3JpYmUoKHN0ZXBzKSA9PiB7XG4gICAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgICAvLyBUT0RPKCM4ODc5KTogQ291bGRuJ3Qgd2UgdXNlIG9ic2VydmFibGVzIGhlcmUgaW5zdGVhZD9cbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUYWJJbmRleChzdGVwSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuICF0aGlzLmlzQWN0aXZlKHN0ZXBJbmRleCkgJiYgIXRoaXMuaXNEaXNhYmxlZChzdGVwSW5kZXgpID8gMCA6IC0xO1xuICB9XG5cbiAgaXNBY3RpdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5hY3RpdmVTdGVwSW5kZXg7XG4gIH1cblxuICBpc0Rpc2FibGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5kZXggPiB0aGlzLmFjdGl2ZVN0ZXBJbmRleDtcbiAgfVxufVxuIl19