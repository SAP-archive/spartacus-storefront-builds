/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, Input } from '@angular/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
export class OutletRefDirective {
    /**
     * @param {?} tpl
     * @param {?} outletService
     */
    constructor(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
}
OutletRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutletRef]',
            },] }
];
/** @nocollapse */
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService }
];
OutletRefDirective.propDecorators = {
    cxOutletRef: [{ type: Input }],
    cxOutletPos: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OutletRefDirective.prototype.cxOutletRef;
    /** @type {?} */
    OutletRefDirective.prototype.cxOutletPos;
    /**
     * @type {?}
     * @private
     */
    OutletRefDirective.prototype.tpl;
    /**
     * @type {?}
     * @private
     */
    OutletRefDirective.prototype.outletService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtsRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQU03QixZQUNVLEdBQXFCLEVBQ3JCLGFBQTRCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBUG1CLFdBQVc7WUFHdEIsYUFBYTs7OzBCQU1uQixLQUFLOzBCQUVMLEtBQUs7Ozs7SUFGTix5Q0FDb0I7O0lBQ3BCLHlDQUM0Qjs7Ozs7SUFHMUIsaUNBQTZCOzs7OztJQUM3QiwyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldFJlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjeE91dGxldFJlZjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjeE91dGxldFBvczogT3V0bGV0UG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cGw6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm91dGxldFNlcnZpY2UuYWRkKHRoaXMuY3hPdXRsZXRSZWYsIHRoaXMudHBsLCB0aGlzLmN4T3V0bGV0UG9zKTtcbiAgfVxufVxuIl19