import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class LinkComponent {
    constructor(component) {
        this.component = component;
        this.data$ = this.component.data$.pipe(tap((data) => (this.styleClasses = data.styleClasses)));
    }
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.target` flag is set to `true`.
     */
    getTarget(data) {
        return data.target === 'true' || data.target === true ? '_blank' : null;
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-link',
                template: "<cx-generic-link\n  *ngIf=\"data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  [target]=\"getTarget(data)\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
LinkComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
LinkComponent.propDecorators = {
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jb250ZW50L2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxhQUFhO0lBT3hCLFlBQXNCLFNBQTZDO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1FBSm5FLFVBQUssR0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3RCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDdkQsQ0FBQztJQUVvRSxDQUFDO0lBRXZFOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix1TUFBb0M7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOUSxnQkFBZ0I7OzsyQkFRdEIsV0FBVyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGlua0NvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHN0eWxlQ2xhc3Nlczogc3RyaW5nO1xuXG4gIGRhdGEkOiBPYnNlcnZhYmxlPENtc0xpbmtDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShcbiAgICB0YXAoKGRhdGEpID0+ICh0aGlzLnN0eWxlQ2xhc3NlcyA9IGRhdGEuc3R5bGVDbGFzc2VzKSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0xpbmtDb21wb25lbnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGBfYmxhbmtgIHRvIGZvcmNlIG9wZW5pbmcgdGhlIGxpbmsgaW4gYSBuZXcgd2luZG93IHdoZW5ldmVyIHRoZVxuICAgKiBgZGF0YS50YXJnZXRgIGZsYWcgaXMgc2V0IHRvIGB0cnVlYC5cbiAgICovXG4gIGdldFRhcmdldChkYXRhOiBDbXNMaW5rQ29tcG9uZW50KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGRhdGEudGFyZ2V0ID09PSAndHJ1ZScgfHwgZGF0YS50YXJnZXQgPT09IHRydWUgPyAnX2JsYW5rJyA6IG51bGw7XG4gIH1cbn1cbiJdfQ==