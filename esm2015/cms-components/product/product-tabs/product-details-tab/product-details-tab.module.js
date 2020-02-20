import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { ProductDetailsTabComponent } from './product-details-tab.component';
let ProductDetailsTabModule = class ProductDetailsTabModule {
};
ProductDetailsTabModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
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
    })
], ProductDetailsTabModule);
export { ProductDetailsTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdGFicy9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFpQjdFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBQUcsQ0FBQTtBQUExQix1QkFBdUI7SUFmbkMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYiwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLDBCQUEwQjtxQkFDdEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUM3QyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN0QyxDQUFDO0dBQ1csdUJBQXVCLENBQUc7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtdGFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc1RhYk1vZHVsZSB7fVxuIl19