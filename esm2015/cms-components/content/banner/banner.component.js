import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class BannerComponent {
    constructor(component) {
        this.component = component;
        this.data$ = this.component.data$.pipe(tap((data) => (this.styleClasses = data.styleClasses)));
    }
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.external` flag is set to true.
     */
    getTarget(data) {
        return data.external === 'true' || data.external === true ? '_blank' : null;
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner',
                template: "<cx-generic-link\n  *ngIf=\"data$ | async as data\"\n  [url]=\"data.urlLink\"\n  [target]=\"getTarget(data)\"\n>\n  <p class=\"headline\" *ngIf=\"data.headline\" [innerHTML]=\"data.headline\"></p>\n  <cx-media [container]=\"data.media\"></cx-media>\n  <p class=\"content\" *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n</cx-generic-link>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
BannerComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
BannerComponent.propDecorators = {
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxlQUFlO0lBTzFCLFlBQXNCLFNBQStDO1FBQS9DLGNBQVMsR0FBVCxTQUFTLENBQXNDO1FBSnJFLFVBQUssR0FBbUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUMvRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDdkQsQ0FBQztJQUVzRSxDQUFDO0lBRXpFOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxJQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RSxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwyV0FBc0M7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOUSxnQkFBZ0I7OzsyQkFRdEIsV0FBVyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVDbGFzc2VzOiBzdHJpbmc7XG5cbiAgZGF0YSQ6IE9ic2VydmFibGU8Q21zQmFubmVyQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgdGFwKChkYXRhKSA9PiAodGhpcy5zdHlsZUNsYXNzZXMgPSBkYXRhLnN0eWxlQ2xhc3NlcykpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCYW5uZXJDb21wb25lbnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGBfYmxhbmtgIHRvIGZvcmNlIG9wZW5pbmcgdGhlIGxpbmsgaW4gYSBuZXcgd2luZG93IHdoZW5ldmVyIHRoZVxuICAgKiBgZGF0YS5leHRlcm5hbGAgZmxhZyBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGdldFRhcmdldChkYXRhOiBDbXNCYW5uZXJDb21wb25lbnQpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGF0YS5leHRlcm5hbCA9PT0gJ3RydWUnIHx8IGRhdGEuZXh0ZXJuYWwgPT09IHRydWUgPyAnX2JsYW5rJyA6IG51bGw7XG4gIH1cbn1cbiJdfQ==