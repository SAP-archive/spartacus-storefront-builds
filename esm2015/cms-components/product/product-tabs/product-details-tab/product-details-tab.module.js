import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideDefaultConfig } from '@spartacus/core';
import { ProductDetailsTabComponent } from './product-details-tab.component';
export class ProductDetailsTabModule {
}
ProductDetailsTabModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            ProductDetailsTabComponent: {
                                component: ProductDetailsTabComponent,
                            },
                        },
                    }),
                ],
                declarations: [ProductDetailsTabComponent],
                entryComponents: [ProductDetailsTabComponent],
                exports: [ProductDetailsTabComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdGFicy9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBaUI3RSxNQUFNLE9BQU8sdUJBQXVCOzs7WUFmbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2IsMEJBQTBCLEVBQUU7Z0NBQzFCLFNBQVMsRUFBRSwwQkFBMEI7NkJBQ3RDO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDbXNDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtdGFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzVGFiTW9kdWxlIHt9XG4iXX0=