/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { tap } from 'rxjs/operators';
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.section) {
            this.styleClass = this.section;
        }
    }
    /**
     * @return {?}
     */
    get slots$() {
        return this.pageLayoutService.getSlots(this.section);
    }
    /**
     * @return {?}
     */
    get templateName$() {
        return this.pageLayoutService.templateName$.pipe(
        // intercept the observable to keep a clean DOM tree
        tap(name => {
            this.styleClass = name;
        }));
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
                template: "<ng-container *cxOutlet=\"section || (templateName$ | async)\">\n  <ng-content></ng-content>\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-container>\n",
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
    PageLayoutComponent.prototype.section;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzFELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUs5QixZQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixpQkFBb0M7UUFGcEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMzQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUk7UUFDOUMsb0RBQW9EO1FBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELElBQUksVUFBVSxDQUFDLEdBQVc7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsc09BQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWJDLFVBQVU7WUFHVixTQUFTO1lBSUYsaUJBQWlCOzs7c0JBUXZCLEtBQUs7Ozs7SUFBTixzQ0FBeUI7Ozs7O0lBRXpCLDJDQUFxQjs7Ozs7SUFHbkIsaUNBQXNCOzs7OztJQUN0Qix1Q0FBMkI7Ozs7O0lBQzNCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4vcGFnZS1sYXlvdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2UtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzZWN0aW9uOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlY3Rpb24pIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IHRoaXMuc2VjdGlvbjtcbiAgICB9XG4gIH1cblxuICBnZXQgc2xvdHMkKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTGF5b3V0U2VydmljZS5nZXRTbG90cyh0aGlzLnNlY3Rpb24pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkLnBpcGUoXG4gICAgICAvLyBpbnRlcmNlcHQgdGhlIG9ic2VydmFibGUgdG8ga2VlcCBhIGNsZWFuIERPTSB0cmVlXG4gICAgICB0YXAobmFtZSA9PiB7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IG5hbWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXQgc3R5bGVDbGFzcyhjbHM6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBjbHM7XG4gIH1cbn1cbiJdfQ==