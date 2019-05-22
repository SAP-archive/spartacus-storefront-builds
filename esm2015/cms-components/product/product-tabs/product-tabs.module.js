/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CmsModule, ConfigModule, I18nModule, ProductService, RoutingService, WindowRef, } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/index';
import { PageComponentModule } from '../../../cms-structure/page/index';
import { CartSharedModule } from '../../checkout/index';
// guards
import { ProductAttributesComponent } from './product-attributes/product-attributes.component';
import { ProductDetailsTabModule } from './product-details-tab/product-details-tab.module';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';
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
                                selector: 'cx-product-details-tab',
                            },
                            ProductSpecsTabComponent: {
                                selector: 'cx-product-attributes',
                            },
                            ProductReviewsTabComponent: {
                                selector: 'cx-product-reviews',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLGNBQWMsRUFDZCxjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQWtDaEYsTUFBTSxPQUFPLGlCQUFpQjs7O1lBaEM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLDBCQUEwQixFQUFFO2dDQUMxQixRQUFRLEVBQUUsd0JBQXdCOzZCQUNuQzs0QkFDRCx3QkFBd0IsRUFBRTtnQ0FDeEIsUUFBUSxFQUFFLHVCQUF1Qjs2QkFDbEM7NEJBQ0QsMEJBQTBCLEVBQUU7Z0NBQzFCLFFBQVEsRUFBRSxvQkFBb0I7NkJBQy9CO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDOUQsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDO2FBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2luZGV4Jztcbi8vIGd1YXJkc1xuaW1wb3J0IHsgUHJvZHVjdEF0dHJpYnV0ZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzVGFiTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MvcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIE91dGxldE1vZHVsZSxcbiAgICBQcm9kdWN0UmV2aWV3c01vZHVsZSxcbiAgICBQcm9kdWN0RGV0YWlsc1RhYk1vZHVsZSxcbiAgICBQYWdlQ29tcG9uZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1kZXRhaWxzLXRhYicsXG4gICAgICAgIH0sXG4gICAgICAgIFByb2R1Y3RTcGVjc1RhYkNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1hdHRyaWJ1dGVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgUHJvZHVjdFJldmlld3NUYWJDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmV2aWV3cycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50LCBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbUHJvZHVjdFNlcnZpY2UsIFdpbmRvd1JlZiwgUm91dGluZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VGFic01vZHVsZSB7fVxuIl19