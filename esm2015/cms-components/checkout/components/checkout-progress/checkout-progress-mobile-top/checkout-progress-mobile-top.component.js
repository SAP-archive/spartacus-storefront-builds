import { __decorate } from "tslib";
import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import { CheckoutStepService } from '../../../services/checkout-step.service';
let CheckoutProgressMobileTopComponent = class CheckoutProgressMobileTopComponent {
    constructor(checkoutStepService, activeCartService, cdr) {
        this.checkoutStepService = checkoutStepService;
        this.activeCartService = activeCartService;
        this.cdr = cdr;
        this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => (this.activeStepIndex = index)));
    }
    ngOnInit() {
        this.cart$ = this.activeCartService.getActive();
        this.subscription = this.checkoutStepService.steps$.subscribe((steps) => {
            this.steps = steps;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
CheckoutProgressMobileTopComponent.ctorParameters = () => [
    { type: CheckoutStepService },
    { type: ActiveCartService },
    { type: ChangeDetectorRef }
];
CheckoutProgressMobileTopComponent = __decorate([
    Component({
        selector: 'cx-checkout-progress-mobile-top',
        template: "<div *ngIf=\"(activeStepIndex$ | async) !== undefined\">\n  <div *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CheckoutProgressMobileTopComponent);
export { CheckoutProgressMobileTopComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFROUUsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUFDN0MsWUFDWSxtQkFBd0MsRUFDeEMsaUJBQW9DLEVBQ3BDLEdBQXNCO1FBRnRCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVFsQyxxQkFBZ0IsR0FFWixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUMvQyxDQUFDO0lBWEMsQ0FBQztJQWVKLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQ2tDLG1CQUFtQjtZQUNyQixpQkFBaUI7WUFDL0IsaUJBQWlCOztBQUp2QixrQ0FBa0M7SUFMOUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlDQUFpQztRQUMzQyxnOUJBQTREO1FBQzVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxrQ0FBa0MsQ0FrQzlDO1NBbENZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBzdGVwczogQ2hlY2tvdXRTdGVwW107XG5cbiAgYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZVN0ZXBJbmRleCQ6IE9ic2VydmFibGU8XG4gICAgbnVtYmVyXG4gID4gPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuYWN0aXZlU3RlcEluZGV4JC5waXBlKFxuICAgIHRhcCgoaW5kZXgpID0+ICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA9IGluZGV4KSlcbiAgKTtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnN0ZXBzJC5zdWJzY3JpYmUoKHN0ZXBzKSA9PiB7XG4gICAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=