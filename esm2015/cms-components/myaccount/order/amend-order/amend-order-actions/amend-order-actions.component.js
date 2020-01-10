/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
export class AmendOrderActionsComponent {
    constructor() {
        this.styles = 'row';
    }
}
AmendOrderActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-amend-order-actions',
                template: "<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    [routerLink]=\"\n      {\n        cxRoute: backRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n    class=\"btn btn-block btn-action\"\n  >\n    {{ 'common.back' | cxTranslate }}\n  </a>\n</div>\n<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    *ngIf=\"forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    [class.disabled]=\"!isValid\"\n    [routerLink]=\"\n      {\n        cxRoute: forwardRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n  >\n    {{ 'common.continue' | cxTranslate }}\n  </a>\n\n  <button\n    *ngIf=\"!forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    type=\"submit\"\n    [disabled]=\"!isValid\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n  </button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
AmendOrderActionsComponent.propDecorators = {
    orderCode: [{ type: Input }],
    isValid: [{ type: Input }],
    backRoute: [{ type: Input }],
    forwardRoute: [{ type: Input }],
    styles: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    AmendOrderActionsComponent.prototype.orderCode;
    /** @type {?} */
    AmendOrderActionsComponent.prototype.isValid;
    /** @type {?} */
    AmendOrderActionsComponent.prototype.backRoute;
    /** @type {?} */
    AmendOrderActionsComponent.prototype.forwardRoute;
    /** @type {?} */
    AmendOrderActionsComponent.prototype.styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBV3dCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7O1lBWkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLCswQkFBbUQ7Z0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7d0JBRUUsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztxQkFFTCxXQUFXLFNBQUMsT0FBTzs7OztJQUxwQiwrQ0FBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsK0NBQTJCOztJQUMzQixrREFBOEI7O0lBRTlCLDRDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFtZW5kLW9yZGVyLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBbWVuZE9yZGVyQWN0aW9uc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9yZGVyQ29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBpc1ZhbGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tSb3V0ZTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3J3YXJkUm91dGU6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVzID0gJ3Jvdyc7XG59XG4iXX0=