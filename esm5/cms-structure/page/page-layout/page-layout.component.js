import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent(el, renderer, pageLayoutService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap(function (section) { return (section ? of(section) : _this.templateName$); }), tap(function (name) {
            _this.styleClass = name;
        }));
        this.slots$ = this.section$.pipe(switchMap(function (section) { return _this.pageLayoutService.getSlots(section); }));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap(function (templateName) {
            return _this.pageLayoutService.getPageFoldSlot(templateName);
        }), distinctUntilChanged());
    }
    Object.defineProperty(PageLayoutComponent.prototype, "section", {
        set: function (value) {
            this.section$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
        set: function (cls) {
            if (this.currentClass) {
                this.renderer.removeClass(this.el.nativeElement, this.currentClass);
            }
            this.renderer.addClass(this.el.nativeElement, cls);
            this.currentClass = cls;
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: PageLayoutService }
    ]; };
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
    return PageLayoutComponent;
}());
export { PageLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRDtJQTRCRSw2QkFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBSDlDLGlCQUlJO1FBSE0sT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNCckMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxrQkFBYSxHQUF1QixJQUFJLENBQUMsaUJBQWlCO2FBQ2hFLGFBQWEsQ0FBQztRQUVSLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRCxTQUFTLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQTVDLENBQTRDLENBQUMsRUFDcEUsR0FBRyxDQUFDLFVBQUMsSUFBSTtZQUNQLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFTyxXQUFNLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxTQUFTLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQ2pFLENBQUM7UUFFTyxrQkFBYSxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbEUsU0FBUyxDQUFDLFVBQUMsWUFBWTtZQUNyQixPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBQXBELENBQW9ELENBQ3JELEVBQ0Qsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQVFDLENBQUM7SUEvQkssc0JBQUksd0NBQU87YUFBWCxVQUFZLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUErQkQsc0JBQUksMkNBQVU7YUFBZCxVQUFlLEdBQVc7WUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckU7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7Z0JBWGEsVUFBVTtnQkFDSixTQUFTO2dCQUNBLGlCQUFpQjs7SUE5QnJDO1FBQVIsS0FBSyxFQUFFO3NEQUVQO0lBSFUsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsa1lBQTJDO1lBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxtQkFBbUIsQ0F5Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXpDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNldCBzZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlY3Rpb24kLm5leHQodmFsdWUpO1xuICB9XG4gIHJlYWRvbmx5IHNlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgcmVhZG9ubHkgdGVtcGxhdGVOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5wYWdlTGF5b3V0U2VydmljZVxuICAgIC50ZW1wbGF0ZU5hbWUkO1xuXG4gIHJlYWRvbmx5IGxheW91dE5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnNlY3Rpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKChzZWN0aW9uKSA9PiAoc2VjdGlvbiA/IG9mKHNlY3Rpb24pIDogdGhpcy50ZW1wbGF0ZU5hbWUkKSksXG4gICAgdGFwKChuYW1lKSA9PiB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHNlY3Rpb24pID0+IHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHMoc2VjdGlvbikpXG4gICk7XG5cbiAgcmVhZG9ubHkgcGFnZUZvbGRTbG90JDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50ZW1wbGF0ZU5hbWUkLnBpcGUoXG4gICAgc3dpdGNoTWFwKCh0ZW1wbGF0ZU5hbWUpID0+XG4gICAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLmdldFBhZ2VGb2xkU2xvdCh0ZW1wbGF0ZU5hbWUpXG4gICAgKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHNldCBzdHlsZUNsYXNzKGNsczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB0aGlzLmN1cnJlbnRDbGFzcyA9IGNscztcbiAgfVxufVxuIl19