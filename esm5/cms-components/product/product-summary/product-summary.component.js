import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentProductService } from '../current-product.service';
import { ProductDetailOutlets } from '../product-outlets.model';
var ProductSummaryComponent = /** @class */ (function () {
    function ProductSummaryComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.outlets = ProductDetailOutlets;
        this.product$ = this.currentProductService.getProduct();
    }
    ProductSummaryComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductSummaryComponent = __decorate([
        Component({
            selector: 'cx-product-summary',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-template\n    [cxOutlet]=\"outlets.PRICE\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <div class=\"price\" aria-label=\"new item price\">\n      {{ product?.price?.formattedValue }}\n    </div>\n  </ng-template>\n\n  <ng-template\n    [cxOutlet]=\"outlets.SUMMARY\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <p [innerHTML]=\"product?.summary\" class=\"summary\"></p>\n  </ng-template>\n\n  <!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n  <!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n        <div>\n          <a href=\"#\" class=\"share btn-link\">\n            {{ 'productSummary.share' | cxTranslate }}\n          </a>\n        </div>\n      </ng-container> -->\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductSummaryComponent);
    return ProductSummaryComponent;
}());
export { ProductSummaryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEU7SUFLRSxpQ0FBc0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFKbEUsWUFBTyxHQUFHLG9CQUFvQixDQUFDO1FBRS9CLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRUgsQ0FBQzs7Z0JBQXpCLHFCQUFxQjs7SUFMdkQsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsNHlCQUErQztZQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csdUJBQXVCLENBTW5DO0lBQUQsOEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCB7XG4gIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpIHt9XG59XG4iXX0=