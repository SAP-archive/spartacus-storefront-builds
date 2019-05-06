/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CmsModule, I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/index';
import { FormComponentsModule, MediaModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule, CartSharedModule } from '../../checkout/index';
// guards
import { ProductDetailsComponent } from './container/product-details.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
var ProductDetailsModule = /** @class */ (function () {
    function ProductDetailsModule() {
    }
    ProductDetailsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CartSharedModule,
                        CmsModule,
                        AddToCartModule,
                        OutletModule,
                        I18nModule,
                        FormComponentsModule,
                        MediaModule,
                        StarRatingModule,
                    ],
                    declarations: [
                        ProductDetailsComponent,
                        ProductSummaryComponent,
                        ProductImagesComponent,
                    ],
                    exports: [
                        ProductDetailsComponent,
                        ProductSummaryComponent,
                        ProductImagesComponent,
                    ],
                },] }
    ];
    return ProductDetailsModule;
}());
export { ProductDetailsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV0RjtJQUFBO0lBMEJtQyxDQUFDOztnQkExQm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2QixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3FCQUN2QjtpQkFDRjs7SUFDa0MsMkJBQUM7Q0FBQSxBQTFCcEMsSUEwQm9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7XG4gIEZvcm1Db21wb25lbnRzTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSwgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2luZGV4Jztcbi8vIGd1YXJkc1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtaW1hZ2VzL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBPdXRsZXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCxcbiAgICBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCxcbiAgICBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdERldGFpbHNDb21wb25lbnQsXG4gICAgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQsXG4gICAgUHJvZHVjdEltYWdlc0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNNb2R1bGUge31cbiJdfQ==