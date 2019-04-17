/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, Input } from '@angular/core';
import { OutletPosition } from '../outlet.model';
import { OutletService } from '../outlet.service';
var OutletRefDirective = /** @class */ (function () {
    function OutletRefDirective(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    /**
     * @return {?}
     */
    OutletRefDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    };
    OutletRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOutletRef]',
                },] }
    ];
    /** @nocollapse */
    OutletRefDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    OutletRefDirective.propDecorators = {
        cxOutletRef: [{ type: Input }],
        cxOutletPos: [{ type: Input }]
    };
    return OutletRefDirective;
}());
export { OutletRefDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxEO0lBU0UsNEJBQ1UsR0FBcUIsRUFDckIsYUFBNEI7UUFENUIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQzs7OztJQUVKLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBUG1CLFdBQVc7Z0JBR3RCLGFBQWE7Ozs4QkFNbkIsS0FBSzs4QkFFTCxLQUFLOztJQVdSLHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FkWSxrQkFBa0I7OztJQUM3Qix5Q0FDb0I7O0lBQ3BCLHlDQUM0Qjs7Ozs7SUFHMUIsaUNBQTZCOzs7OztJQUM3QiwyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldFJlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjeE91dGxldFJlZjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjeE91dGxldFBvczogT3V0bGV0UG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cGw6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm91dGxldFNlcnZpY2UuYWRkKHRoaXMuY3hPdXRsZXRSZWYsIHRoaXMudHBsLCB0aGlzLmN4T3V0bGV0UG9zKTtcbiAgfVxufVxuIl19