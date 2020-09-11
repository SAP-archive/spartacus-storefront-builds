import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckoutStepService } from '../../../services/checkout-step.service';
var CheckoutProgressMobileBottomComponent = /** @class */ (function () {
    function CheckoutProgressMobileBottomComponent(checkoutStepService, cdr) {
        var _this = this;
        this.checkoutStepService = checkoutStepService;
        this.cdr = cdr;
        this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap(function (index) { return (_this.activeStepIndex = index); }));
    }
    CheckoutProgressMobileBottomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.checkoutStepService.steps$.subscribe(function (steps) {
            _this.steps = steps;
            // TODO(#8879): Couldn't we use observables here instead?
            _this.cdr.detectChanges();
        });
    };
    CheckoutProgressMobileBottomComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CheckoutProgressMobileBottomComponent.ctorParameters = function () { return [
        { type: CheckoutStepService },
        { type: ChangeDetectorRef }
    ]; };
    CheckoutProgressMobileBottomComponent = __decorate([
        Component({
            selector: 'cx-checkout-progress-mobile-bottom',
            template: "<div *ngIf=\"(activeStepIndex$ | async) !== undefined\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CheckoutProgressMobileBottomComponent);
    return CheckoutProgressMobileBottomComponent;
}());
export { CheckoutProgressMobileBottomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU85RTtJQUVFLCtDQUNZLG1CQUF3QyxFQUN4QyxHQUFzQjtRQUZsQyxpQkFHSTtRQUZRLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFNbEMscUJBQWdCLEdBRVosSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQy9DLENBQUM7SUFUQyxDQUFDO0lBYUosd0RBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDbEUsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIseURBQXlEO1lBQ3pELEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkRBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBM0JnQyxtQkFBbUI7Z0JBQ25DLGlCQUFpQjs7SUFKdkIscUNBQXFDO1FBTGpELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsdVVBQStEO1lBQy9ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxxQ0FBcUMsQ0ErQmpEO0lBQUQsNENBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXTtcblxuICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlU3RlcEluZGV4JDogT2JzZXJ2YWJsZTxcbiAgICBudW1iZXJcbiAgPiA9IHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5hY3RpdmVTdGVwSW5kZXgkLnBpcGUoXG4gICAgdGFwKChpbmRleCkgPT4gKHRoaXMuYWN0aXZlU3RlcEluZGV4ID0gaW5kZXgpKVxuICApO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnN0ZXBzJC5zdWJzY3JpYmUoKHN0ZXBzKSA9PiB7XG4gICAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgICAvLyBUT0RPKCM4ODc5KTogQ291bGRuJ3Qgd2UgdXNlIG9ic2VydmFibGVzIGhlcmUgaW5zdGVhZD9cbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==