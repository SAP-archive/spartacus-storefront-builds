import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { ProductVariantsComponent } from './product-variants.component';
import { RouterModule } from '@angular/router';
import { VariantStyleSelectorModule } from './variant-style-selector/variant-style-selector.module';
import { VariantSizeSelectorModule } from './variant-size-selector/variant-size-selector.module';
import { VariantColorSelectorModule } from './variant-color-selector/variant-color-selector.module';
import { VariantStyleIconsModule } from './variant-style-icons/variant-style-icons.module';
import { ProductVariantGuard } from './guards/product-variant.guard';
import { VariantStyleIconsComponent } from './variant-style-icons/variant-style-icons.component';
var ProductVariantsModule = /** @class */ (function () {
    function ProductVariantsModule() {
    }
    ProductVariantsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                I18nModule,
                VariantStyleSelectorModule,
                VariantSizeSelectorModule,
                VariantColorSelectorModule,
                VariantStyleIconsModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        ProductVariantSelectorComponent: {
                            component: ProductVariantsComponent,
                            guards: [ProductVariantGuard],
                        },
                    },
                }),
            ],
            declarations: [ProductVariantsComponent],
            entryComponents: [ProductVariantsComponent],
            exports: [VariantStyleIconsComponent],
        })
    ], ProductVariantsModule);
    return ProductVariantsModule;
}());
export { ProductVariantsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFFTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQTJCakc7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLHFCQUFxQjtRQXpCakMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixTQUFTO2dCQUNULFVBQVU7Z0JBQ1YsMEJBQTBCO2dCQUMxQix5QkFBeUI7Z0JBQ3pCLDBCQUEwQjtnQkFDMUIsdUJBQXVCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2IsK0JBQStCLEVBQUU7NEJBQy9CLFNBQVMsRUFBRSx3QkFBd0I7NEJBQ25DLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO3lCQUM5QjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUMzQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUc7SUFBRCw0QkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXZhcmlhbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVmFyaWFudFN0eWxlU2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL3ZhcmlhbnQtc3R5bGUtc2VsZWN0b3IvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgVmFyaWFudFNpemVTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1zaXplLXNlbGVjdG9yL3ZhcmlhbnQtc2l6ZS1zZWxlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgVmFyaWFudENvbG9yU2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL3ZhcmlhbnQtY29sb3Itc2VsZWN0b3IvdmFyaWFudC1jb2xvci1zZWxlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgVmFyaWFudFN0eWxlSWNvbnNNb2R1bGUgfSBmcm9tICcuL3ZhcmlhbnQtc3R5bGUtaWNvbnMvdmFyaWFudC1zdHlsZS1pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL3Byb2R1Y3QtdmFyaWFudC5ndWFyZCc7XG5pbXBvcnQgeyBWYXJpYW50U3R5bGVJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFZhcmlhbnRTdHlsZVNlbGVjdG9yTW9kdWxlLFxuICAgIFZhcmlhbnRTaXplU2VsZWN0b3JNb2R1bGUsXG4gICAgVmFyaWFudENvbG9yU2VsZWN0b3JNb2R1bGUsXG4gICAgVmFyaWFudFN0eWxlSWNvbnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0VmFyaWFudHNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbUHJvZHVjdFZhcmlhbnRHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0VmFyaWFudHNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0VmFyaWFudHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudHNNb2R1bGUge31cbiJdfQ==