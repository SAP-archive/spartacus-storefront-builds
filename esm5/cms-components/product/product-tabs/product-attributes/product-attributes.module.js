import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { ProductAttributesComponent } from './product-attributes.component';
var ProductAttributesModule = /** @class */ (function () {
    function ProductAttributesModule() {
    }
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
    return ProductAttributesModule;
}());
export { ProductAttributesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBa0I1RTtJQUFBO0lBQXNDLENBQUM7SUFBMUIsdUJBQXVCO1FBaEJuQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixVQUFVO2dCQUNWLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYix3QkFBd0IsRUFBRTs0QkFDeEIsU0FBUyxFQUFFLDBCQUEwQjt5QkFDdEM7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDMUMsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDN0MsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUFHO0lBQUQsOEJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDbXNDb25maWcsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdEF0dHJpYnV0ZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtYXR0cmlidXRlcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RTcGVjc1RhYkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdEF0dHJpYnV0ZXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEF0dHJpYnV0ZXNNb2R1bGUge31cbiJdfQ==