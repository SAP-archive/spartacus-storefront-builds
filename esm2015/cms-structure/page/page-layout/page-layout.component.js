import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
let PageLayoutComponent = class PageLayoutComponent {
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
};
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
__decorate([
    Input()
], PageLayoutComponent.prototype, "section", null);
PageLayoutComponent = __decorate([
    Component({
        selector: 'cx-page-layout',
        template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PageLayoutComponent);
export { PageLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTRCOUIsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRnBDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUEzQnJDLGFBQVEsR0FBNEIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkUsa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGlCQUFpQjthQUNoRSxhQUFhLENBQUM7UUFFUixnQkFBVyxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0QsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFDcEUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRU8sV0FBTSxHQUF5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEQsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2pFLENBQUM7UUFFTyxrQkFBYSxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbEUsU0FBUyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FDckQsRUFDRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBUUMsQ0FBQztJQS9CSyxJQUFJLE9BQU8sQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUErQkQsSUFBSSxVQUFVLENBQUMsR0FBVztRQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7O1lBWmUsVUFBVTtZQUNKLFNBQVM7WUFDQSxpQkFBaUI7O0FBOUJyQztJQUFSLEtBQUssRUFBRTtrREFFUDtBQUhVLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLGtZQUEyQztRQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csbUJBQW1CLENBeUMvQjtTQXpDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNldCBzZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlY3Rpb24kLm5leHQodmFsdWUpO1xuICB9XG4gIHJlYWRvbmx5IHNlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgcmVhZG9ubHkgdGVtcGxhdGVOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5wYWdlTGF5b3V0U2VydmljZVxuICAgIC50ZW1wbGF0ZU5hbWUkO1xuXG4gIHJlYWRvbmx5IGxheW91dE5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnNlY3Rpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKChzZWN0aW9uKSA9PiAoc2VjdGlvbiA/IG9mKHNlY3Rpb24pIDogdGhpcy50ZW1wbGF0ZU5hbWUkKSksXG4gICAgdGFwKChuYW1lKSA9PiB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHNlY3Rpb24pID0+IHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHMoc2VjdGlvbikpXG4gICk7XG5cbiAgcmVhZG9ubHkgcGFnZUZvbGRTbG90JDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50ZW1wbGF0ZU5hbWUkLnBpcGUoXG4gICAgc3dpdGNoTWFwKCh0ZW1wbGF0ZU5hbWUpID0+XG4gICAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLmdldFBhZ2VGb2xkU2xvdCh0ZW1wbGF0ZU5hbWUpXG4gICAgKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHNldCBzdHlsZUNsYXNzKGNsczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB0aGlzLmN1cnJlbnRDbGFzcyA9IGNscztcbiAgfVxufVxuIl19