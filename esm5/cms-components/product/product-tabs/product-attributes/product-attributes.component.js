import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductScope } from '@spartacus/core';
import { CurrentProductService } from '../../current-product.service';
var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.product$ = this.currentProductService.getProduct(ProductScope.ATTRIBUTES);
    }
    // TODO deprecated since 1.4, remove
    ProductAttributesComponent.prototype.ngOnInit = function () { };
    ProductAttributesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductAttributesComponent = __decorate([
        Component({
            selector: 'cx-product-attributes',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductAttributesComponent);
    return ProductAttributesComponent;
}());
export { ProductAttributesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU90RTtJQUtFLG9DQUFzQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUpsRSxhQUFRLEdBQXdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQ25FLFlBQVksQ0FBQyxVQUFVLENBQ3hCLENBQUM7SUFFbUUsQ0FBQztJQUV0RSxvQ0FBb0M7SUFDcEMsNkNBQVEsR0FBUixjQUFZLENBQUM7O2dCQUhnQyxxQkFBcUI7O0lBTHZELDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLDRtQkFBa0Q7WUFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQVN0QztJQUFELGlDQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0U2NvcGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWF0dHJpYnV0ZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KFxuICAgIFByb2R1Y3RTY29wZS5BVFRSSUJVVEVTXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIC8vIFRPRE8gZGVwcmVjYXRlZCBzaW5jZSAxLjQsIHJlbW92ZVxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=