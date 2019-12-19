/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.layoutName$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return (section ? of(section) : _this.templateName$); })), tap((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.styleClass = name;
        })));
        this.slots$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return _this.pageLayoutService.getSlots(section); })));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap((/**
         * @param {?} templateName
         * @return {?}
         */
        function (templateName) {
            return _this.pageLayoutService.getPageFoldSlot(templateName);
        })), distinctUntilChanged());
    }
    Object.defineProperty(PageLayoutComponent.prototype, "section", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.section$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
        set: /**
         * @param {?} cls
         * @return {?}
         */
        function (cls) {
            if (this.currentClass) {
                this.renderer.removeClass(this.el.nativeElement, this.currentClass);
            }
            this.renderer.addClass(this.el.nativeElement, cls);
            this.currentClass = cls;
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-page-layout',
                    template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: PageLayoutService }
    ]; };
    PageLayoutComponent.propDecorators = {
        section: [{ type: Input }]
    };
    return PageLayoutComponent;
}());
export { PageLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQWlDRSw2QkFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBSDlDLGlCQUlJO1FBSE0sT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNCckMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxrQkFBYSxHQUF1QixJQUFJLENBQUMsaUJBQWlCO2FBQ2hFLGFBQWEsQ0FBQztRQUVSLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsRUFDbEUsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7UUFFTyxXQUFNLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQy9ELENBQUM7UUFFTyxrQkFBYSxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbEUsU0FBUzs7OztRQUFDLFVBQUEsWUFBWTtZQUNwQixPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBQXBELENBQW9ELEVBQ3JELEVBQ0Qsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQVFDLENBQUM7SUEvQkosc0JBQWEsd0NBQU87Ozs7O1FBQXBCLFVBQXFCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUErQkQsc0JBQUksMkNBQVU7Ozs7O1FBQWQsVUFBZSxHQUFXO1lBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsa1lBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWkMsVUFBVTtnQkFFVixTQUFTO2dCQUlGLGlCQUFpQjs7OzBCQVF2QixLQUFLOztJQXdDUiwwQkFBQztDQUFBLEFBOUNELElBOENDO1NBekNZLG1CQUFtQjs7O0lBSTlCLHVDQUE0RTs7SUFDNUUsNENBQ2lCOztJQUVqQiwwQ0FLRTs7SUFFRixxQ0FFRTs7SUFFRiw0Q0FLRTs7Ozs7SUFFRiwyQ0FBcUI7Ozs7O0lBR25CLGlDQUFzQjs7Ozs7SUFDdEIsdUNBQTJCOzs7OztJQUMzQixnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNldCBzZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlY3Rpb24kLm5leHQodmFsdWUpO1xuICB9XG4gIHJlYWRvbmx5IHNlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgcmVhZG9ubHkgdGVtcGxhdGVOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5wYWdlTGF5b3V0U2VydmljZVxuICAgIC50ZW1wbGF0ZU5hbWUkO1xuXG4gIHJlYWRvbmx5IGxheW91dE5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnNlY3Rpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHNlY3Rpb24gPT4gKHNlY3Rpb24gPyBvZihzZWN0aW9uKSA6IHRoaXMudGVtcGxhdGVOYW1lJCkpLFxuICAgIHRhcChuYW1lID0+IHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IG5hbWU7XG4gICAgfSlcbiAgKTtcblxuICByZWFkb25seSBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChzZWN0aW9uID0+IHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHMoc2VjdGlvbikpXG4gICk7XG5cbiAgcmVhZG9ubHkgcGFnZUZvbGRTbG90JDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50ZW1wbGF0ZU5hbWUkLnBpcGUoXG4gICAgc3dpdGNoTWFwKHRlbXBsYXRlTmFtZSA9PlxuICAgICAgdGhpcy5wYWdlTGF5b3V0U2VydmljZS5nZXRQYWdlRm9sZFNsb3QodGVtcGxhdGVOYW1lKVxuICAgICksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICApO1xuXG4gIHByaXZhdGUgY3VycmVudENsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICBzZXQgc3R5bGVDbGFzcyhjbHM6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBjbHM7XG4gIH1cbn1cbiJdfQ==