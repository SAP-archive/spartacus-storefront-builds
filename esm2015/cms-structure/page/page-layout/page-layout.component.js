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
        this.layoutName$ = this.section$.pipe(switchMap(section => (section ? of(section) : this.templateName$)), tap(name => {
            this.styleClass = name;
        }));
        this.slots$ = this.section$.pipe(switchMap(section => this.pageLayoutService.getSlots(section)));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap(templateName => this.pageLayoutService.getPageFoldSlot(templateName)), distinctUntilChanged());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTRCOUIsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRnBDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUEzQnJDLGFBQVEsR0FBNEIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkUsa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGlCQUFpQjthQUNoRSxhQUFhLENBQUM7UUFFUixnQkFBVyxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ2xFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFTyxXQUFNLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQy9ELENBQUM7UUFFTyxrQkFBYSxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbEUsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQ3JELEVBQ0Qsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQVFDLENBQUM7SUEvQkssSUFBSSxPQUFPLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBK0JELElBQUksVUFBVSxDQUFDLEdBQVc7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztZQVplLFVBQVU7WUFDSixTQUFTO1lBQ0EsaUJBQWlCOztBQTlCckM7SUFBUixLQUFLLEVBQUU7a0RBRVA7QUFIVSxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixrWUFBMkM7UUFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQXlDL0I7U0F6Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4vcGFnZS1sYXlvdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2UtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgc2VjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWN0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuICByZWFkb25seSBzZWN0aW9uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHJlYWRvbmx5IHRlbXBsYXRlTmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucGFnZUxheW91dFNlcnZpY2VcbiAgICAudGVtcGxhdGVOYW1lJDtcblxuICByZWFkb25seSBsYXlvdXROYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChzZWN0aW9uID0+IChzZWN0aW9uID8gb2Yoc2VjdGlvbikgOiB0aGlzLnRlbXBsYXRlTmFtZSQpKSxcbiAgICB0YXAobmFtZSA9PiB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoc2VjdGlvbiA9PiB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLmdldFNsb3RzKHNlY3Rpb24pKVxuICApO1xuXG4gIHJlYWRvbmx5IHBhZ2VGb2xkU2xvdCQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMudGVtcGxhdGVOYW1lJC5waXBlKFxuICAgIHN3aXRjaE1hcCh0ZW1wbGF0ZU5hbWUgPT5cbiAgICAgIHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0UGFnZUZvbGRTbG90KHRlbXBsYXRlTmFtZSlcbiAgICApLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICBwcml2YXRlIGN1cnJlbnRDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZVxuICApIHt9XG5cbiAgc2V0IHN0eWxlQ2xhc3MoY2xzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIHRoaXMuY3VycmVudENsYXNzID0gY2xzO1xuICB9XG59XG4iXX0=