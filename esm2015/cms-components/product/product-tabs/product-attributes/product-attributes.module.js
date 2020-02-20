import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { ProductAttributesComponent } from './product-attributes.component';
let ProductAttributesModule = class ProductAttributesModule {
};
ProductAttributesModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductSpecsTabComponent: {
                        component: ProductAttributesComponent,
                    },
                },
            }),
        ],
        declarations: [ProductAttributesComponent],
        entryComponents: [ProductAttributesComponent],
        exports: [ProductAttributesComponent],
    })
], ProductAttributesModule);
export { ProductAttributesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBa0I1RSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtDQUFHLENBQUE7QUFBMUIsdUJBQXVCO0lBaEJuQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYix3QkFBd0IsRUFBRTt3QkFDeEIsU0FBUyxFQUFFLDBCQUEwQjtxQkFDdEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUM3QyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN0QyxDQUFDO0dBQ1csdUJBQXVCLENBQUc7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0U3BlY3NUYWJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdEF0dHJpYnV0ZXNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RBdHRyaWJ1dGVzTW9kdWxlIHt9XG4iXX0=