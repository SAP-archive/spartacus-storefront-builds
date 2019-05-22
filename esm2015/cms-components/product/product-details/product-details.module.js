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
import { ProductDetailsComponent } from './container/product-details.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
export class ProductDetailsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBNEJ0RixNQUFNLE9BQU8sb0JBQW9COzs7WUExQmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1QsZUFBZTtvQkFDZixZQUFZO29CQUNaLFVBQVU7b0JBQ1Ysb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO2lCQUN2QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgRm9ybUNvbXBvbmVudHNNb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxuICBTdGFyUmF0aW5nTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlLCBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtaW1hZ2VzL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBPdXRsZXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCxcbiAgICBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCxcbiAgICBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdERldGFpbHNDb21wb25lbnQsXG4gICAgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQsXG4gICAgUHJvZHVjdEltYWdlc0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNNb2R1bGUge31cbiJdfQ==