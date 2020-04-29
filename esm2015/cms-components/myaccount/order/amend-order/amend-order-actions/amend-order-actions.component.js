import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import { RoutingService } from '@spartacus/core';
let AmendOrderActionsComponent = class AmendOrderActionsComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.styles = 'row';
    }
    continue(event) {
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
    }
};
AmendOrderActionsComponent.ctorParameters = () => [
    { type: RoutingService }
];
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
export { AmendOrderActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRakQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFRckMsWUFBc0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjlCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFFa0IsQ0FBQztJQUV4RCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzFCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO2FBQ2pDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBYnVDLGNBQWM7O0FBUDNDO0lBQVIsS0FBSyxFQUFFOzZEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtrRUFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7NkRBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO2dFQUFzQjtBQUVSO0lBQXJCLFdBQVcsQ0FBQyxPQUFPLENBQUM7MERBQWdCO0FBTjFCLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLDRxQkFBbUQ7UUFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLDBCQUEwQixDQXFCdEM7U0FyQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW1lbmQtb3JkZXItYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbWVuZC1vcmRlci1hY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFtZW5kT3JkZXJBY3Rpb25zQ29tcG9uZW50IHtcbiAgQElucHV0KCkgb3JkZXJDb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFtZW5kT3JkZXJGb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGJhY2tSb3V0ZTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3J3YXJkUm91dGU6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVzID0gJ3Jvdyc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSkge31cblxuICBjb250aW51ZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbWVuZE9yZGVyRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgIGN4Um91dGU6IHRoaXMuZm9yd2FyZFJvdXRlLFxuICAgICAgICBwYXJhbXM6IHsgY29kZTogdGhpcy5vcmRlckNvZGUgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFtZW5kT3JkZXJGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19