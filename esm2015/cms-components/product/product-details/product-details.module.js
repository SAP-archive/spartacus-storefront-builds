/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CmsModule, I18nModule, UrlModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/index';
import { FormComponentsModule, MediaModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule, CartSharedModule } from '../../checkout/index';
import { ProductDetailsComponent } from './container/product-details.component';
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
                    UrlModule,
                ],
                declarations: [ProductDetailsComponent, ProductSummaryComponent],
                exports: [ProductDetailsComponent, ProductSummaryComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQXFCdEYsTUFBTSxPQUFPLG9CQUFvQjs7O1lBbkJoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixVQUFVO29CQUNWLG9CQUFvQjtvQkFDcEIsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLFNBQVM7aUJBQ1Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLHVCQUF1QixDQUFDO2FBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNNb2R1bGUsIEkxOG5Nb2R1bGUsIFVybE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQge1xuICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgTWVkaWFNb2R1bGUsXG4gIFN0YXJSYXRpbmdNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUsIENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBBZGRUb0NhcnRNb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRm9ybUNvbXBvbmVudHNNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgU3RhclJhdGluZ01vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3REZXRhaWxzQ29tcG9uZW50LCBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCwgUHJvZHVjdFN1bW1hcnlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc01vZHVsZSB7fVxuIl19