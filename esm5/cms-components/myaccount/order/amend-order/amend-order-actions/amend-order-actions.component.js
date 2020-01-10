/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
var AmendOrderActionsComponent = /** @class */ (function () {
    function AmendOrderActionsComponent() {
        this.styles = 'row';
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
    return AmendOrderActionsComponent;
}());
export { AmendOrderActionsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO1FBV3dCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7Z0JBWkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLCswQkFBbUQ7b0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OzRCQUVFLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBRUwsV0FBVyxTQUFDLE9BQU87O0lBQ3RCLGlDQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksMEJBQTBCOzs7SUFDckMsK0NBQTJCOztJQUMzQiw2Q0FBeUI7O0lBQ3pCLCtDQUEyQjs7SUFDM0Isa0RBQThCOztJQUU5Qiw0Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hbWVuZC1vcmRlci1hY3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FtZW5kLW9yZGVyLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQW1lbmRPcmRlckFjdGlvbnNDb21wb25lbnQge1xuICBASW5wdXQoKSBvcmRlckNvZGU6IHN0cmluZztcbiAgQElucHV0KCkgaXNWYWxpZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrUm91dGU6IHN0cmluZztcbiAgQElucHV0KCkgZm9yd2FyZFJvdXRlOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHN0eWxlcyA9ICdyb3cnO1xufVxuIl19