import { __decorate } from "tslib";
import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckoutStepService } from '../../../services/checkout-step.service';
let CheckoutProgressMobileBottomComponent = class CheckoutProgressMobileBottomComponent {
    constructor(checkoutStepService, cdr) {
        this.checkoutStepService = checkoutStepService;
        this.cdr = cdr;
        this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => (this.activeStepIndex = index)));
    }
    ngOnInit() {
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
CheckoutProgressMobileBottomComponent.ctorParameters = () => [
    { type: CheckoutStepService },
    { type: ChangeDetectorRef }
];
CheckoutProgressMobileBottomComponent = __decorate([
    Component({
        selector: 'cx-checkout-progress-mobile-bottom',
        template: "<div *ngIf=\"(activeStepIndex$ | async) !== undefined\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CheckoutProgressMobileBottomComponent);
export { CheckoutProgressMobileBottomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQVE5RSxJQUFhLHFDQUFxQyxHQUFsRCxNQUFhLHFDQUFxQztJQUVoRCxZQUNZLG1CQUF3QyxFQUN4QyxHQUFzQjtRQUR0Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTWxDLHFCQUFnQixHQUVaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2hELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQy9DLENBQUM7SUFUQyxDQUFDO0lBYUosUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFBOztZQTNCa0MsbUJBQW1CO1lBQ25DLGlCQUFpQjs7QUFKdkIscUNBQXFDO0lBTGpELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQ0FBb0M7UUFDOUMsdVVBQStEO1FBQy9ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxxQ0FBcUMsQ0E4QmpEO1NBOUJZLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgc3RlcHM6IENoZWNrb3V0U3RlcFtdO1xuXG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBhY3RpdmVTdGVwSW5kZXgkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmFjdGl2ZVN0ZXBJbmRleCQucGlwZShcbiAgICB0YXAoKGluZGV4KSA9PiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleCkpXG4gICk7XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2Uuc3RlcHMkLnN1YnNjcmliZSgoc3RlcHMpID0+IHtcbiAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==