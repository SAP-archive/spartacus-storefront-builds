/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Input, Directive } from '@angular/core';
import { OutletStyleService } from '../outlet-style.service';
export class StyleRefDirective {
    /**
     * @param {?} element
     * @param {?} cssOutletService
     */
    constructor(element, cssOutletService) {
        this.element = element;
        this.cssOutletService = cssOutletService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cssOutletService.add(this.cxCssRef, this.element);
    }
}
StyleRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxCssRef]',
            },] }
];
/** @nocollapse */
StyleRefDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: OutletStyleService }
];
StyleRefDirective.propDecorators = {
    cxCssRef: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtcmVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9vdXRsZXQvc3R5bGUtcmVmL3N0eWxlLXJlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUs3RCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUc1QixZQUNVLE9BQW1CLEVBQ25CLGdCQUFvQztRQURwQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7SUFDM0MsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQU5RLFVBQVU7WUFFVixrQkFBa0I7Ozt1QkFNeEIsS0FBSzs7OztJQUFOLHFDQUEwQjs7Ozs7SUFHeEIsb0NBQTJCOzs7OztJQUMzQiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3V0bGV0U3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vb3V0bGV0LXN0eWxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hDc3NSZWZdJyxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeENzc1JlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNzc091dGxldFNlcnZpY2U6IE91dGxldFN0eWxlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jc3NPdXRsZXRTZXJ2aWNlLmFkZCh0aGlzLmN4Q3NzUmVmLCB0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iXX0=