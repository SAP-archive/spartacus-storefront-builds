import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
export class PageLayoutComponent {
    constructor(pageLayoutService) {
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap((section) => (section ? of(section) : this.templateName$)));
        this.slots$ = this.section$.pipe(switchMap((section) => this.pageLayoutService.getSlots(section)));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap((templateName) => this.pageLayoutService.getPageFoldSlot(templateName)), distinctUntilChanged());
    }
    set section(value) {
        this.section$.next(value);
    }
}
PageLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-layout',
                template: "<ng-template\n  [cxPageTemplateStyle]=\"layoutName$ | async\"\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PageLayoutComponent.ctorParameters = () => [
    { type: PageLayoutService }
];
PageLayoutComponent.propDecorators = {
    section: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsTUFBTSxPQUFPLG1CQUFtQjtJQXdCOUIsWUFBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFwQmpELGFBQVEsR0FBNEIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkUsa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGlCQUFpQjthQUNoRSxhQUFhLENBQUM7UUFFUixnQkFBVyxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0QsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDckUsQ0FBQztRQUVPLFdBQU0sR0FBeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hELFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNqRSxDQUFDO1FBRU8sa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2xFLFNBQVMsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQ3JELEVBQ0Qsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUUyRCxDQUFDO0lBdkI5RCxJQUFhLE9BQU8sQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQVJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtYkFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOUSxpQkFBaUI7OztzQkFRdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc2V0IHNlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VjdGlvbiQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcmVhZG9ubHkgc2VjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIHJlYWRvbmx5IHRlbXBsYXRlTmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucGFnZUxheW91dFNlcnZpY2VcbiAgICAudGVtcGxhdGVOYW1lJDtcblxuICByZWFkb25seSBsYXlvdXROYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcCgoc2VjdGlvbikgPT4gKHNlY3Rpb24gPyBvZihzZWN0aW9uKSA6IHRoaXMudGVtcGxhdGVOYW1lJCkpXG4gICk7XG5cbiAgcmVhZG9ubHkgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHNlY3Rpb24pID0+IHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHMoc2VjdGlvbikpXG4gICk7XG5cbiAgcmVhZG9ubHkgcGFnZUZvbGRTbG90JDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50ZW1wbGF0ZU5hbWUkLnBpcGUoXG4gICAgc3dpdGNoTWFwKCh0ZW1wbGF0ZU5hbWUpID0+XG4gICAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLmdldFBhZ2VGb2xkU2xvdCh0ZW1wbGF0ZU5hbWUpXG4gICAgKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSkge31cbn1cbiJdfQ==