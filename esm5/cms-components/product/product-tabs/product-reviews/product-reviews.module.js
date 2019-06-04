/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@spartacus/core';
import { FormComponentsModule, StarRatingModule, } from '../../../../shared/index';
import { ProductReviewsComponent } from './product-reviews.component';
var ProductReviewsModule = /** @class */ (function () {
    function ProductReviewsModule() {
    }
    ProductReviewsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        FormComponentsModule,
                        I18nModule,
                        StarRatingModule,
                    ],
                    declarations: [ProductReviewsComponent],
                    entryComponents: [ProductReviewsComponent],
                    exports: [ProductReviewsComponent],
                },] }
    ];
    return ProductReviewsModule;
}());
export { ProductReviewsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsZ0JBQWdCLEdBQ2pCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEU7SUFBQTtJQWFtQyxDQUFDOztnQkFibkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLFVBQVU7d0JBQ1YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNuQzs7SUFDa0MsMkJBQUM7Q0FBQSxBQWJwQyxJQWFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEZvcm1Db21wb25lbnRzTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3RhclJhdGluZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFJldmlld3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0UmV2aWV3c0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0UmV2aWV3c0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzTW9kdWxlIHt9XG4iXX0=