/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
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
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        section => (section ? of(section) : this.templateName$))), tap((/**
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
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap((/**
         * @param {?} templateName
         * @return {?}
         */
        templateName => this.pageLayoutService.getPageFoldSlot(templateName))), distinctUntilChanged());
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
                template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
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
    PageLayoutComponent.prototype.templateName$;
    /** @type {?} */
    PageLayoutComponent.prototype.layoutName$;
    /** @type {?} */
    PageLayoutComponent.prototype.slots$;
    /** @type {?} */
    PageLayoutComponent.prototype.pageFoldSlot$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUE0QjlCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLGlCQUFvQztRQUZwQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBM0JyQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxpQkFBaUI7YUFDaEUsYUFBYSxDQUFDO1FBRVIsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNELFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUNsRSxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRU8sV0FBTSxHQUF5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEQsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUMvRCxDQUFDO1FBRU8sa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2xFLFNBQVM7Ozs7UUFBQyxZQUFZLENBQUMsRUFBRSxDQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUNyRCxFQUNELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFRQyxDQUFDOzs7OztJQS9CSixJQUFhLE9BQU8sQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBK0JELElBQUksVUFBVSxDQUFDLEdBQVc7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsa1lBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVpDLFVBQVU7WUFFVixTQUFTO1lBSUYsaUJBQWlCOzs7c0JBUXZCLEtBQUs7Ozs7SUFHTix1Q0FBNEU7O0lBQzVFLDRDQUNpQjs7SUFFakIsMENBS0U7O0lBRUYscUNBRUU7O0lBRUYsNENBS0U7Ozs7O0lBRUYsMkNBQXFCOzs7OztJQUduQixpQ0FBc0I7Ozs7O0lBQ3RCLHVDQUEyQjs7Ozs7SUFDM0IsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4vcGFnZS1sYXlvdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2UtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgc2VjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWN0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuICByZWFkb25seSBzZWN0aW9uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHJlYWRvbmx5IHRlbXBsYXRlTmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucGFnZUxheW91dFNlcnZpY2VcbiAgICAudGVtcGxhdGVOYW1lJDtcblxuICByZWFkb25seSBsYXlvdXROYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChzZWN0aW9uID0+IChzZWN0aW9uID8gb2Yoc2VjdGlvbikgOiB0aGlzLnRlbXBsYXRlTmFtZSQpKSxcbiAgICB0YXAobmFtZSA9PiB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoc2VjdGlvbiA9PiB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLmdldFNsb3RzKHNlY3Rpb24pKVxuICApO1xuXG4gIHJlYWRvbmx5IHBhZ2VGb2xkU2xvdCQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMudGVtcGxhdGVOYW1lJC5waXBlKFxuICAgIHN3aXRjaE1hcCh0ZW1wbGF0ZU5hbWUgPT5cbiAgICAgIHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0UGFnZUZvbGRTbG90KHRlbXBsYXRlTmFtZSlcbiAgICApLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICBwcml2YXRlIGN1cnJlbnRDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZVxuICApIHt9XG5cbiAgc2V0IHN0eWxlQ2xhc3MoY2xzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIHRoaXMuY3VycmVudENsYXNzID0gY2xzO1xuICB9XG59XG4iXX0=