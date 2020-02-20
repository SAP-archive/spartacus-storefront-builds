import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseOption, Product, RoutingService, VariantOptionQualifier, VariantQualifier, } from '@spartacus/core';
let VariantColorSelectorComponent = class VariantColorSelectorComponent {
    constructor(routingService) {
        this.routingService = routingService;
    }
    changeColor(code, name) {
        if (code) {
            this.routingService.go({
                cxRoute: 'product',
                params: { code, name },
            });
        }
        return null;
    }
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find(q => q.qualifier === VariantQualifier.COLOR);
        return obj ? obj.value : '';
    }
};
VariantColorSelectorComponent.ctorParameters = () => [
    { type: RoutingService }
];
__decorate([
    Input()
], VariantColorSelectorComponent.prototype, "product", void 0);
__decorate([
    Input()
], VariantColorSelectorComponent.prototype, "variants", void 0);
VariantColorSelectorComponent = __decorate([
    Component({
        selector: 'cx-variant-color-selector',
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.color' | cxTranslate }}:</div>\n\n    <select\n      (change)=\"changeColor($event.target.value, product?.name)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantColorSelectorComponent);
export { VariantColorSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1jb2xvci1zZWxlY3Rvci92YXJpYW50LWNvbG9yLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQU96QixJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtJQUN4QyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBUXRELFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTthQUN2QixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELHFCQUFxQixDQUFDLFVBQW9DO1FBQ3hELE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7O1lBckJxQyxjQUFjOztBQUdsRDtJQURDLEtBQUssRUFBRTs4REFDUztBQUdqQjtJQURDLEtBQUssRUFBRTsrREFDYTtBQVBWLDZCQUE2QjtJQUx6QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLDhoQkFBc0Q7UUFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLDZCQUE2QixDQXNCekM7U0F0QlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJhc2VPcHRpb24sXG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBWYXJpYW50UXVhbGlmaWVyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12YXJpYW50LWNvbG9yLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtY29sb3Itc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudENvbG9yU2VsZWN0b3JDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSkge31cblxuICBASW5wdXQoKVxuICBwcm9kdWN0OiBQcm9kdWN0O1xuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuXG4gIGNoYW5nZUNvbG9yKGNvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgIHBhcmFtczogeyBjb2RlLCBuYW1lIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSkge1xuICAgIGNvbnN0IG9iaiA9IHF1YWxpZmllcnMuZmluZChxID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLkNPTE9SKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cbn1cbiJdfQ==