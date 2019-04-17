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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtcmVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9vdXRsZXQvc3R5bGUtcmVmL3N0eWxlLXJlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RDtJQU1FLDJCQUNVLE9BQW1CLEVBQ25CLGdCQUFvQztRQURwQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7SUFDM0MsQ0FBQzs7OztJQUVKLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFOUSxVQUFVO2dCQUVWLGtCQUFrQjs7OzJCQU14QixLQUFLOztJQVVSLHdCQUFDO0NBQUEsQUFkRCxJQWNDO1NBWFksaUJBQWlCOzs7SUFDNUIscUNBQTBCOzs7OztJQUd4QixvQ0FBMkI7Ozs7O0lBQzNCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdXRsZXRTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi9vdXRsZXQtc3R5bGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeENzc1JlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVJlZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN4Q3NzUmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY3NzT3V0bGV0U2VydmljZTogT3V0bGV0U3R5bGVTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNzc091dGxldFNlcnZpY2UuYWRkKHRoaXMuY3hDc3NSZWYsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==