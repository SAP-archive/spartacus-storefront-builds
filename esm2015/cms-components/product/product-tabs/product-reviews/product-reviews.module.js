import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { StarRatingModule } from '../../../../shared/components/star-rating/star-rating.module';
import { ProductReviewsComponent } from './product-reviews.component';
let ProductReviewsModule = class ProductReviewsModule {
};
ProductReviewsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            I18nModule,
            StarRatingModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductReviewsTabComponent: {
                        component: ProductReviewsComponent,
                    },
                },
            }),
        ],
        declarations: [ProductReviewsComponent],
        entryComponents: [ProductReviewsComponent],
        exports: [ProductReviewsComponent],
    })
], ProductReviewsModule);
export { ProductReviewsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFlBQVksRUFBYSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQXFCdEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRyxDQUFBO0FBQXZCLG9CQUFvQjtJQW5CaEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsMEJBQTBCLEVBQUU7d0JBQzFCLFNBQVMsRUFBRSx1QkFBdUI7cUJBQ25DO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDdkMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDbkMsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN0YXJSYXRpbmdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0UmV2aWV3c1RhYkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdFJldmlld3NDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0UmV2aWV3c0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RSZXZpZXdzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RSZXZpZXdzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NNb2R1bGUge31cbiJdfQ==