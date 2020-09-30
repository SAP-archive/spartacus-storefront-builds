import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckoutStepService } from '../../services/checkout-step.service';
export class CheckoutProgressComponent {
    constructor(checkoutStepService) {
        this.checkoutStepService = checkoutStepService;
        this._steps$ = this.checkoutStepService
            .steps$;
        this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => (this.activeStepIndex = index)));
    }
    get steps$() {
        return this._steps$.asObservable();
    }
    getTabIndex(stepIndex) {
        return !this.isActive(stepIndex) && !this.isDisabled(stepIndex) ? 0 : -1;
    }
    isActive(index) {
        return index === this.activeStepIndex;
    }
    isDisabled(index) {
        return index > this.activeStepIndex;
    }
}
CheckoutProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress',
                template: "<section *ngIf=\"(activeStepIndex$ | async) !== undefined\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <ng-container *ngFor=\"let step of steps$ | async; let i = index\">\n        <li\n          class=\"cx-item\"\n          [class.active]=\"isActive(i)\"\n          [class.disabled]=\"isDisabled(i)\"\n        >\n          <a\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n            class=\"cx-link\"\n            [class.active]=\"isActive(i)\"\n            [class.disabled]=\"isDisabled(i)\"\n            [tabindex]=\"getTabIndex(i)\"\n            [innerHTML]=\"step.name | cxTranslate | cxMultiLine\"\n          >\n          </a>\n        </li>\n      </ng-container>\n    </ul>\n  </div>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CheckoutProgressComponent.ctorParameters = () => [
    { type: CheckoutStepService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPM0UsTUFBTSxPQUFPLHlCQUF5QjtJQUlwQyxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUh0RCxZQUFPLEdBQW9DLElBQUksQ0FBQyxtQkFBbUI7YUFDeEUsTUFBTSxDQUFDO1FBS1YscUJBQWdCLEdBRVosSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQVArRCxDQUFDO0lBU2xFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQWlCO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN0QyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGt4QkFBaUQ7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOUSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCB9IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnQge1xuICBwcml2YXRlIF9zdGVwcyQ6IEJlaGF2aW9yU3ViamVjdDxDaGVja291dFN0ZXBbXT4gPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2VcbiAgICAuc3RlcHMkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlKSB7fVxuXG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBhY3RpdmVTdGVwSW5kZXgkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmFjdGl2ZVN0ZXBJbmRleCQucGlwZShcbiAgICB0YXAoKGluZGV4KSA9PiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleCkpXG4gICk7XG5cbiAgZ2V0IHN0ZXBzJCgpOiBPYnNlcnZhYmxlPENoZWNrb3V0U3RlcFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gIXRoaXMuaXNBY3RpdmUoc3RlcEluZGV4KSAmJiAhdGhpcy5pc0Rpc2FibGVkKHN0ZXBJbmRleCkgPyAwIDogLTE7XG4gIH1cblxuICBpc0FjdGl2ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluZGV4ID09PSB0aGlzLmFjdGl2ZVN0ZXBJbmRleDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCA+IHRoaXMuYWN0aXZlU3RlcEluZGV4O1xuICB9XG59XG4iXX0=