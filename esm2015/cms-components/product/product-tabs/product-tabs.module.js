/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CmsModule, ConfigModule, I18nModule, ProductService, RoutingService, WindowRef, } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/index';
import { PageComponentModule } from '../../../cms-structure/page/index';
import { CartSharedModule } from '../../cart/index';
// guards
import { ProductAttributesComponent } from './product-attributes/product-attributes.component';
import { ProductDetailsTabModule } from './product-details-tab/product-details-tab.module';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';
import { ProductDetailsTabComponent } from './product-details-tab/product-details-tab.component';
export class ProductTabsModule {
}
ProductTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CartSharedModule,
                    CmsModule,
                    OutletModule,
                    ProductReviewsModule,
                    ProductDetailsTabModule,
                    PageComponentModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductDetailsTabComponent: {
                                component: ProductDetailsTabComponent,
                            },
                            ProductSpecsTabComponent: {
                                component: ProductAttributesComponent,
                            },
                            ProductReviewsTabComponent: {
                                component: ProductReviewsComponent,
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [ProductAttributesComponent],
                exports: [ProductAttributesComponent, ProductReviewsComponent],
                entryComponents: [ProductAttributesComponent],
                providers: [ProductService, WindowRef, RoutingService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLGNBQWMsRUFDZCxjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVwRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQWtDakcsTUFBTSxPQUFPLGlCQUFpQjs7O1lBaEM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLDBCQUEwQixFQUFFO2dDQUMxQixTQUFTLEVBQUUsMEJBQTBCOzZCQUN0Qzs0QkFDRCx3QkFBd0IsRUFBRTtnQ0FDeEIsU0FBUyxFQUFFLDBCQUEwQjs2QkFDdEM7NEJBQ0QsMEJBQTBCLEVBQUU7Z0NBQzFCLFNBQVMsRUFBRSx1QkFBdUI7NkJBQ25DO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDOUQsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDO2FBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL2NhcnQvaW5kZXgnO1xuLy8gZ3VhcmRzXG5pbXBvcnQgeyBQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1hdHRyaWJ1dGVzL3Byb2R1Y3QtYXR0cmlidXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNUYWJNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy10YWIvcHJvZHVjdC1kZXRhaWxzLXRhYi5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MvcHJvZHVjdC1yZXZpZXdzLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLXRhYi9wcm9kdWN0LWRldGFpbHMtdGFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIFByb2R1Y3RSZXZpZXdzTW9kdWxlLFxuICAgIFByb2R1Y3REZXRhaWxzVGFiTW9kdWxlLFxuICAgIFBhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUHJvZHVjdFNwZWNzVGFiQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUHJvZHVjdFJldmlld3NUYWJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCwgUHJvZHVjdFJldmlld3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1Byb2R1Y3RTZXJ2aWNlLCBXaW5kb3dSZWYsIFJvdXRpbmdTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFRhYnNNb2R1bGUge31cbiJdfQ==