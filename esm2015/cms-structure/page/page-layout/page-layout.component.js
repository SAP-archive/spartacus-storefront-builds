/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
export class PageLayoutComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} pageLayoutService
     */
    constructor(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.layoutName$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        section => section ? of(section) : this.pageLayoutService.templateName$)), tap((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.styleClass = name;
        })));
        this.slots$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        section => this.pageLayoutService.getSlots(section))));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set section(value) {
        this.section$.next(value);
    }
    /**
     * @param {?} cls
     * @return {?}
     */
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
                template: "<!-- ???? {{ layoutName$ | async }} -->\n<ng-template [cxOutlet]=\"layoutName$ | async\" [cxOutletContext]=\"{}\">\n  <ng-content></ng-content>\n\n  <!-- {{ slots$ | async }} -->\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
PageLayoutComponent.propDecorators = {
    section: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PageLayoutComponent.prototype.section$;
    /** @type {?} */
    PageLayoutComponent.prototype.layoutName$;
    /** @type {?} */
    PageLayoutComponent.prototype.slots$;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.currentClass;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.pageLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFxQjlCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLGlCQUFvQztRQUZwQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBcEJyQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5FLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRCxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQzdELEVBQ0QsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUVPLFdBQU0sR0FBeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hELFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FDL0QsQ0FBQztJQVFDLENBQUM7Ozs7O0lBeEJKLElBQWEsT0FBTyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUF3QkQsSUFBSSxVQUFVLENBQUMsR0FBVztRQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwyVEFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWkMsVUFBVTtZQUVWLFNBQVM7WUFJRixpQkFBaUI7OztzQkFRdkIsS0FBSzs7OztJQUdOLHVDQUE0RTs7SUFFNUUsMENBT0U7O0lBRUYscUNBRUU7Ozs7O0lBRUYsMkNBQXFCOzs7OztJQUduQixpQ0FBc0I7Ozs7O0lBQ3RCLHVDQUEyQjs7Ozs7SUFDM0IsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNldCBzZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlY3Rpb24kLm5leHQodmFsdWUpO1xuICB9XG4gIHJlYWRvbmx5IHNlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICByZWFkb25seSBsYXlvdXROYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChzZWN0aW9uID0+XG4gICAgICBzZWN0aW9uID8gb2Yoc2VjdGlvbikgOiB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLnRlbXBsYXRlTmFtZSRcbiAgICApLFxuICAgIHRhcChuYW1lID0+IHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IG5hbWU7XG4gICAgfSlcbiAgKTtcblxuICByZWFkb25seSBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChzZWN0aW9uID0+IHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHMoc2VjdGlvbikpXG4gICk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHNldCBzdHlsZUNsYXNzKGNsczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB0aGlzLmN1cnJlbnRDbGFzcyA9IGNscztcbiAgfVxufVxuIl19