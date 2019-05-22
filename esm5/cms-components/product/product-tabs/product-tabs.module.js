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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLGNBQWMsRUFDZCxjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRjtJQUFBO0lBNkJnQyxDQUFDOztnQkE3QmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHdCQUF3QixFQUFFO29DQUN4QixRQUFRLEVBQUUsaUJBQWlCO2lDQUM1Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDaEUsT0FBTyxFQUFFO3dCQUNQLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QixvQkFBb0I7cUJBQ3JCO29CQUNELGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQztpQkFDdkQ7O0lBQytCLHdCQUFDO0NBQUEsQUE3QmpDLElBNkJpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvaW5kZXgnO1xuLy8gZ3VhcmRzXG5pbXBvcnQgeyBQcm9kdWN0VGFic0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3QtdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEF0dHJpYnV0ZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MvcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIE91dGxldE1vZHVsZSxcbiAgICBQcm9kdWN0UmV2aWV3c01vZHVsZSxcbiAgICBQYWdlQ29tcG9uZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdGFicycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50LCBQcm9kdWN0VGFic0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCxcbiAgICBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCxcbiAgICBQcm9kdWN0VGFic0NvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFRhYnNDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtQcm9kdWN0U2VydmljZSwgV2luZG93UmVmLCBSb3V0aW5nU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RUYWJzTW9kdWxlIHt9XG4iXX0=