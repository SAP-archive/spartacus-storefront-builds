import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
var AmendOrderActionsComponent = /** @class */ (function () {
    function AmendOrderActionsComponent(routingService) {
        this.routingService = routingService;
        this.styles = 'row';
    }
    AmendOrderActionsComponent.prototype.continue = function (event) {
        if (this.amendOrderForm.valid) {
            this.routingService.go({
                cxRoute: this.forwardRoute,
                params: { code: this.orderCode },
            });
        }
        else {
            this.amendOrderForm.markAllAsTouched();
            event.stopPropagation();
        }
    };
    AmendOrderActionsComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "orderCode", void 0);
    __decorate([
        Input()
    ], AmendOrderActionsComponent.prototype, "amendOrderForm", void 0);
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
            template: "<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    [routerLink]=\"\n      {\n        cxRoute: backRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n    class=\"btn btn-block btn-action\"\n  >\n    {{ 'common.back' | cxTranslate }}\n  </a>\n</div>\n<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <button\n    *ngIf=\"forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    (click)=\"continue($event)\"\n  >\n    {{ 'common.continue' | cxTranslate }}\n  </button>\n\n  <button *ngIf=\"!forwardRoute\" class=\"btn btn-block btn-primary\" type=\"submit\">\n    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n  </button>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AmendOrderActionsComponent);
    return AmendOrderActionsComponent;
}());
export { AmendOrderActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRakQ7SUFRRSxvQ0FBc0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjlCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFFa0IsQ0FBQztJQUV4RCw2Q0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzFCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO2FBQ2pDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Z0JBWnFDLGNBQWM7O0lBUDNDO1FBQVIsS0FBSyxFQUFFO2lFQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTtzRUFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7aUVBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO29FQUFzQjtJQUVSO1FBQXJCLFdBQVcsQ0FBQyxPQUFPLENBQUM7OERBQWdCO0lBTjFCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDRxQkFBbUQ7WUFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQXFCdEM7SUFBRCxpQ0FBQztDQUFBLEFBckJELElBcUJDO1NBckJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFtZW5kLW9yZGVyLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBbWVuZE9yZGVyQWN0aW9uc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9yZGVyQ29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBhbWVuZE9yZGVyRm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBiYWNrUm91dGU6IHN0cmluZztcbiAgQElucHV0KCkgZm9yd2FyZFJvdXRlOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHN0eWxlcyA9ICdyb3cnO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpIHt9XG5cbiAgY29udGludWUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW1lbmRPcmRlckZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICBjeFJvdXRlOiB0aGlzLmZvcndhcmRSb3V0ZSxcbiAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMub3JkZXJDb2RlIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbWVuZE9yZGVyRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==