/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, ProductService, RoutingService, WindowRef, } from '@spartacus/core';
// guards
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { PageComponentModule } from '../../../../cms-structure/page/component/page-component.module';
import { CmsModule } from '../../../cms/cms.module'; // some slots are loaded inside components (i.e. tabs)
// some slots are loaded inside components (i.e. tabs)
import { OutletModule } from '../../../outlet/index';
import { ComponentsModule } from './../../../ui/components/components.module';
import { ProductTabsComponent } from './container/product-tabs.component';
import { ProductAttributesComponent } from './product-attributes/product-attributes.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';
var ProductTabsModule = /** @class */ (function () {
    function ProductTabsModule() {
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
    return ProductTabsModule;
}());
export { ProductTabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsY0FBYyxFQUNkLGNBQWMsRUFDZCxTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDLENBQUMsc0RBQXNEOztBQUMzRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEY7SUFBQTtJQThCZ0MsQ0FBQzs7Z0JBOUJoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHdCQUF3QixFQUFFO29DQUN4QixRQUFRLEVBQUUsaUJBQWlCO2lDQUM1Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDaEUsT0FBTyxFQUFFO3dCQUNQLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QixvQkFBb0I7cUJBQ3JCO29CQUNELGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQztpQkFDdkQ7O0lBQytCLHdCQUFDO0NBQUEsQUE5QmpDLElBOEJpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbi8vIGd1YXJkc1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMvY21zLm1vZHVsZSc7IC8vIHNvbWUgc2xvdHMgYXJlIGxvYWRlZCBpbnNpZGUgY29tcG9uZW50cyAoaS5lLiB0YWJzKVxuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuLy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFRhYnNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWF0dHJpYnV0ZXMvcHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21wb25lbnRzTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIE91dGxldE1vZHVsZSxcbiAgICBQcm9kdWN0UmV2aWV3c01vZHVsZSxcbiAgICBQYWdlQ29tcG9uZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdGFicycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50LCBQcm9kdWN0VGFic0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCxcbiAgICBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCxcbiAgICBQcm9kdWN0VGFic0NvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFRhYnNDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtQcm9kdWN0U2VydmljZSwgV2luZG93UmVmLCBSb3V0aW5nU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RUYWJzTW9kdWxlIHt9XG4iXX0=