/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Input, Directive } from '@angular/core';
import { OutletStyleService } from '../outlet-style.service';
var StyleRefDirective = /** @class */ (function () {
    function StyleRefDirective(element, cssOutletService) {
        this.element = element;
        this.cssOutletService = cssOutletService;
    }
    /**
     * @return {?}
     */
    StyleRefDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cssOutletService.add(this.cxCssRef, this.element);
    };
    StyleRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxCssRef]',
                },] }
    ];
    /** @nocollapse */
    StyleRefDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: OutletStyleService }
    ]; };
    StyleRefDirective.propDecorators = {
        cxCssRef: [{ type: Input }]
    };
    return StyleRefDirective;
}());
export { StyleRefDirective };
if (false) {
    /** @type {?} */
    StyleRefDirective.prototype.cxCssRef;
    /**
     * @type {?}
     * @private
     */
    StyleRefDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    StyleRefDirective.prototype.cssOutletService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtcmVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L3N0eWxlLXJlZi9zdHlsZS1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0Q7SUFNRSwyQkFDVSxPQUFtQixFQUNuQixnQkFBb0M7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO0lBQzNDLENBQUM7Ozs7SUFFSixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBTlEsVUFBVTtnQkFFVixrQkFBa0I7OzsyQkFNeEIsS0FBSzs7SUFVUix3QkFBQztDQUFBLEFBZEQsSUFjQztTQVhZLGlCQUFpQjs7O0lBQzVCLHFDQUEwQjs7Ozs7SUFHeEIsb0NBQTJCOzs7OztJQUMzQiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3V0bGV0U3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vb3V0bGV0LXN0eWxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hDc3NSZWZdJyxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeENzc1JlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNzc091dGxldFNlcnZpY2U6IE91dGxldFN0eWxlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jc3NPdXRsZXRTZXJ2aWNlLmFkZCh0aGlzLmN4Q3NzUmVmLCB0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iXX0=