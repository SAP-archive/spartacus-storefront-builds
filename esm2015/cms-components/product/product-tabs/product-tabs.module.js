import { NgModule } from '@angular/core';
import { ProductAttributesModule } from './product-attributes/product-attributes.module';
import { ProductDetailsTabModule } from './product-details-tab/product-details-tab.module';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';
export class ProductTabsModule {
}
ProductTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ProductAttributesModule,
                    ProductDetailsTabModule,
                    ProductReviewsModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVNoRixNQUFNLE9BQU8saUJBQWlCOzs7WUFQN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RBdHRyaWJ1dGVzTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0LWF0dHJpYnV0ZXMvcHJvZHVjdC1hdHRyaWJ1dGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc1RhYk1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLXRhYi9wcm9kdWN0LWRldGFpbHMtdGFiLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJvZHVjdEF0dHJpYnV0ZXNNb2R1bGUsXG4gICAgUHJvZHVjdERldGFpbHNUYWJNb2R1bGUsXG4gICAgUHJvZHVjdFJldmlld3NNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RUYWJzTW9kdWxlIHt9XG4iXX0=