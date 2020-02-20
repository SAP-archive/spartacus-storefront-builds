import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { ProductDetailsTabComponent } from './product-details-tab.component';
var ProductDetailsTabModule = /** @class */ (function () {
    function ProductDetailsTabModule() {
    }
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
    return ProductDetailsTabModule;
}());
export { ProductDetailsTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdGFicy9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFpQjdFO0lBQUE7SUFBc0MsQ0FBQztJQUExQix1QkFBdUI7UUFmbkMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLDBCQUEwQixFQUFFOzRCQUMxQixTQUFTLEVBQUUsMEJBQTBCO3lCQUN0QztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUM3QyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBQUc7SUFBRCw4QkFBQztDQUFBLEFBQXZDLElBQXVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLXRhYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNUYWJNb2R1bGUge31cbiJdfQ==