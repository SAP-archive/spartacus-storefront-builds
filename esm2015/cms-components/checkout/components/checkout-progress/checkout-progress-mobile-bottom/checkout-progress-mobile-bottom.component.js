import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckoutStepService } from '../../../services/checkout-step.service';
export class CheckoutProgressMobileBottomComponent {
    constructor(checkoutStepService) {
        this.checkoutStepService = checkoutStepService;
        this._steps$ = this.checkoutStepService
            .steps$;
        this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => (this.activeStepIndex = index)));
    }
    get steps$() {
        return this._steps$.asObservable();
    }
}
CheckoutProgressMobileBottomComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress-mobile-bottom',
                template: "<div *ngIf=\"(activeStepIndex$ | async) !== undefined\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps$ | async; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CheckoutProgressMobileBottomComponent.ctorParameters = () => [
    { type: CheckoutStepService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPOUUsTUFBTSxPQUFPLHFDQUFxQztJQUloRCxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUh0RCxZQUFPLEdBQW9DLElBQUksQ0FBQyxtQkFBbUI7YUFDeEUsTUFBTSxDQUFDO1FBS1YscUJBQWdCLEdBRVosSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQVArRCxDQUFDO0lBU2xFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLGdWQUErRDtnQkFDL0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Db21wb25lbnQge1xuICBwcml2YXRlIF9zdGVwcyQ6IEJlaGF2aW9yU3ViamVjdDxDaGVja291dFN0ZXBbXT4gPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2VcbiAgICAuc3RlcHMkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlKSB7fVxuXG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBhY3RpdmVTdGVwSW5kZXgkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmFjdGl2ZVN0ZXBJbmRleCQucGlwZShcbiAgICB0YXAoKGluZGV4KSA9PiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleCkpXG4gICk7XG5cbiAgZ2V0IHN0ZXBzJCgpOiBPYnNlcnZhYmxlPENoZWNrb3V0U3RlcFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzJC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19