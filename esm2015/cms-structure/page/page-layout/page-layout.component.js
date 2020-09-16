import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
export class PageLayoutComponent {
    constructor(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap((section) => (section ? of(section) : this.templateName$)), tap((name) => {
            this.styleClass = name;
        }));
        this.slots$ = this.section$.pipe(switchMap((section) => this.pageLayoutService.getSlots(section)));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap((templateName) => this.pageLayoutService.getPageFoldSlot(templateName)), distinctUntilChanged());
    }
    set section(value) {
        this.section$.next(value);
    }
    set styleClass(cls) {
        if (this.currentClass) {
            this.renderer.removeClass(this.el.nativeElement, this.currentClass);
        }
        this.renderer.addClass(this.el.nativeElement, cls);
        this.currentClass = cls;
    }
}
PageLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-layout',
                template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
PageLayoutComponent.propDecorators = {
    section: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzFELE1BQU0sT0FBTyxtQkFBbUI7SUE0QjlCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLGlCQUFvQztRQUZwQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBM0JyQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxpQkFBaUI7YUFDaEUsYUFBYSxDQUFDO1FBRVIsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNELFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ3BFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVPLFdBQU0sR0FBeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hELFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNqRSxDQUFDO1FBRU8sa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2xFLFNBQVMsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQ3JELEVBQ0Qsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQVFDLENBQUM7SUEvQkosSUFBYSxPQUFPLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBK0JELElBQUksVUFBVSxDQUFDLEdBQVc7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsa1lBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWkMsVUFBVTtZQUVWLFNBQVM7WUFJRixpQkFBaUI7OztzQkFRdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc2V0IHNlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VjdGlvbiQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgcmVhZG9ubHkgc2VjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuICByZWFkb25seSB0ZW1wbGF0ZU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlXG4gICAgLnRlbXBsYXRlTmFtZSQ7XG5cbiAgcmVhZG9ubHkgbGF5b3V0TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHNlY3Rpb24pID0+IChzZWN0aW9uID8gb2Yoc2VjdGlvbikgOiB0aGlzLnRlbXBsYXRlTmFtZSQpKSxcbiAgICB0YXAoKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IG5hbWU7XG4gICAgfSlcbiAgKTtcblxuICByZWFkb25seSBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcCgoc2VjdGlvbikgPT4gdGhpcy5wYWdlTGF5b3V0U2VydmljZS5nZXRTbG90cyhzZWN0aW9uKSlcbiAgKTtcblxuICByZWFkb25seSBwYWdlRm9sZFNsb3QkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnRlbXBsYXRlTmFtZSQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHRlbXBsYXRlTmFtZSkgPT5cbiAgICAgIHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0UGFnZUZvbGRTbG90KHRlbXBsYXRlTmFtZSlcbiAgICApLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICBwcml2YXRlIGN1cnJlbnRDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZVxuICApIHt9XG5cbiAgc2V0IHN0eWxlQ2xhc3MoY2xzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIHRoaXMuY3VycmVudENsYXNzID0gY2xzO1xuICB9XG59XG4iXX0=