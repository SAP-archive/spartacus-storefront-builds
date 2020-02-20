import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
var AmendOrderActionsComponent = /** @class */ (function () {
    function AmendOrderActionsComponent() {
        this.styles = 'row';
    }
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "orderCode", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "isValid", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "backRoute", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "forwardRoute", void 0);
    __decorate([
        HostBinding('class')
    ], AmendOrderActionsComponent.prototype, "styles", void 0);
    AmendOrderActionsComponent = __decorate([
        Component({
            selector: 'cx-amend-order-actions',
            template: "<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    [routerLink]=\"\n      {\n        cxRoute: backRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n    class=\"btn btn-block btn-action\"\n  >\n    {{ 'common.back' | cxTranslate }}\n  </a>\n</div>\n<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    *ngIf=\"forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    [class.disabled]=\"!isValid\"\n    [routerLink]=\"\n      {\n        cxRoute: forwardRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n  >\n    {{ 'common.continue' | cxTranslate }}\n  </a>\n\n  <button\n    *ngIf=\"!forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    type=\"submit\"\n    [disabled]=\"!isValid\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n  </button>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AmendOrderActionsComponent);
    return AmendOrderActionsComponent;
}());
export { AmendOrderActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQU92QjtJQUFBO1FBTXdCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQU5VO1FBQVIsS0FBSyxFQUFFO2lFQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTsrREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7aUVBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO29FQUFzQjtJQUVSO1FBQXJCLFdBQVcsQ0FBQyxPQUFPLENBQUM7OERBQWdCO0lBTjFCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLCswQkFBbUQ7WUFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQU90QztJQUFELGlDQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW1lbmQtb3JkZXItYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFtZW5kT3JkZXJBY3Rpb25zQ29tcG9uZW50IHtcbiAgQElucHV0KCkgb3JkZXJDb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzVmFsaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYmFja1JvdXRlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcndhcmRSb3V0ZTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBzdHlsZXMgPSAncm93Jztcbn1cbiJdfQ==