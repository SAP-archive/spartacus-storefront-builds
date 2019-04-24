/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { AddToCartModule } from '../../../../cms-components/checkout/cart/add-to-cart/add-to-cart.module';
// guards
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { CmsModule } from '../../../cms/cms.module'; // some slots are loaded inside components (i.e. tabs)
// some slots are loaded inside components (i.e. tabs)
import { OutletModule } from '../../../outlet/index';
import { ComponentsModule } from './../../../ui/components/components.module';
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
                        ComponentsModule,
                        CartSharedModule,
                        CmsModule,
                        AddToCartModule,
                        OutletModule,
                        I18nModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7QUFFMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDLENBQUMsc0RBQXNEOztBQUMzRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFdEY7SUFBQTtJQXdCbUMsQ0FBQzs7Z0JBeEJuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2QixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3FCQUN2QjtpQkFDRjs7SUFDa0MsMkJBQUM7Q0FBQSxBQXhCcEMsSUF3Qm9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2FkZC10by1jYXJ0L2FkZC10by1jYXJ0Lm1vZHVsZSc7XG4vLyBndWFyZHNcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMvY21zLm1vZHVsZSc7IC8vIHNvbWUgc2xvdHMgYXJlIGxvYWRlZCBpbnNpZGUgY29tcG9uZW50cyAoaS5lLiB0YWJzKVxuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuLy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtaW1hZ2VzL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbXBvbmVudHNNb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIE91dGxldE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCxcbiAgICBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCxcbiAgICBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdERldGFpbHNDb21wb25lbnQsXG4gICAgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQsXG4gICAgUHJvZHVjdEltYWdlc0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNNb2R1bGUge31cbiJdfQ==