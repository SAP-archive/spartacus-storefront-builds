/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, ProductService, RoutingService, WindowRef, I18nModule, } from '@spartacus/core';
import { CmsModule } from '../../../cms/cms.module'; // some slots are loaded inside components (i.e. tabs)
// some slots are loaded inside components (i.e. tabs)
// guards
import { CartSharedModule } from './../../../cart/cart-shared/cart-shared.module';
import { ComponentsModule } from './../../../ui/components/components.module';
import { AddToCartModule } from '../../../cart/add-to-cart/add-to-cart.module';
import { OutletModule } from '../../../outlet/index';
import { ProductTabsComponent } from './container/product-tabs.component';
import { ProductAttributesComponent } from './product-attributes/product-attributes.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';
import { PageComponentModule } from '../../../../cms-structure/page/component/page-component.module';
export class ProductTabsModule {
}
ProductTabsModule.decorators = [
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
                    ProductReviewsModule,
                    PageComponentModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSTabParagraphContainer: {
                                selector: 'cx-product-tabs',
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [ProductAttributesComponent, ProductTabsComponent],
                exports: [
                    ProductAttributesComponent,
                    ProductReviewsComponent,
                    ProductTabsComponent,
                ],
                entryComponents: [ProductTabsComponent],
                providers: [ProductService, WindowRef, RoutingService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUVMLFlBQVksRUFDWixjQUFjLEVBQ2QsY0FBYyxFQUNkLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxzREFBc0Q7OztBQUUzRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBaUNyRyxNQUFNLE9BQU8saUJBQWlCOzs7WUEvQjdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsU0FBUztvQkFDVCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix3QkFBd0IsRUFBRTtnQ0FDeEIsUUFBUSxFQUFFLGlCQUFpQjs2QkFDNUI7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsb0JBQW9CLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRTtvQkFDUCwwQkFBMEI7b0JBQzFCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDdkMsU0FBUyxFQUFFLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgV2luZG93UmVmLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Ntcy5tb2R1bGUnOyAvLyBzb21lIHNsb3RzIGFyZSBsb2FkZWQgaW5zaWRlIGNvbXBvbmVudHMgKGkuZS4gdGFicylcbi8vIGd1YXJkc1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2FkZC10by1jYXJ0L2FkZC10by1jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFRhYnNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWF0dHJpYnV0ZXMvcHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tcG9uZW50c01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBBZGRUb0NhcnRNb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIFByb2R1Y3RSZXZpZXdzTW9kdWxlLFxuICAgIFBhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcjoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC10YWJzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdEF0dHJpYnV0ZXNDb21wb25lbnQsIFByb2R1Y3RUYWJzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RUYWJzQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0VGFic0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1Byb2R1Y3RTZXJ2aWNlLCBXaW5kb3dSZWYsIFJvdXRpbmdTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFRhYnNNb2R1bGUge31cbiJdfQ==