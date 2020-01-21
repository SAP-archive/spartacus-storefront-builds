/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, UrlModule, I18nModule, } from '@spartacus/core';
import { ProductVariantsComponent } from './product-variants.component';
import { RouterModule } from '@angular/router';
import { VariantStyleSelectorModule } from './variant-style-selector/variant-style-selector.module';
import { VariantSizeSelectorModule } from './variant-size-selector/variant-size-selector.module';
import { VariantColorSelectorModule } from './variant-color-selector/variant-color-selector.module';
import { VariantStyleIconsModule } from './variant-style-icons/variant-style-icons.module';
import { ProductVariantGuard } from './guards/product-variant.guard';
import { VariantStyleIconsComponent } from './variant-style-icons/variant-style-icons.component';
export class ProductVariantsModule {
}
ProductVariantsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductVariantSelectorComponent: {
                                component: ProductVariantsComponent,
                                guards: [ProductVariantGuard],
                            },
                        },
                    }))),
                    I18nModule,
                    VariantStyleSelectorModule,
                    VariantSizeSelectorModule,
                    VariantColorSelectorModule,
                    VariantStyleIconsModule,
                ],
                declarations: [ProductVariantsComponent],
                entryComponents: [ProductVariantsComponent],
                exports: [VariantStyleIconsComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFFTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQXlCakcsTUFBTSxPQUFPLHFCQUFxQjs7O1lBdkJqQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixTQUFTO29CQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYiwrQkFBK0IsRUFBRTtnQ0FDL0IsU0FBUyxFQUFFLHdCQUF3QjtnQ0FDbkMsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUM7NkJBQzlCO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixVQUFVO29CQUNWLDBCQUEwQjtvQkFDMUIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFVybE1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZVNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LXN0eWxlLXNlbGVjdG9yL3ZhcmlhbnQtc3R5bGUtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRTaXplU2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL3ZhcmlhbnQtc2l6ZS1zZWxlY3Rvci92YXJpYW50LXNpemUtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRDb2xvclNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LWNvbG9yLXNlbGVjdG9yL3ZhcmlhbnQtY29sb3Itc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZUljb25zTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LXN0eWxlLWljb25zL3ZhcmlhbnQtc3R5bGUtaWNvbnMubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50R3VhcmQgfSBmcm9tICcuL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQnO1xuaW1wb3J0IHsgVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnQgfSBmcm9tICcuL3ZhcmlhbnQtc3R5bGUtaWNvbnMvdmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RWYXJpYW50c0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtQcm9kdWN0VmFyaWFudEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgICBWYXJpYW50U3R5bGVTZWxlY3Rvck1vZHVsZSxcbiAgICBWYXJpYW50U2l6ZVNlbGVjdG9yTW9kdWxlLFxuICAgIFZhcmlhbnRDb2xvclNlbGVjdG9yTW9kdWxlLFxuICAgIFZhcmlhbnRTdHlsZUljb25zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0VmFyaWFudHNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0VmFyaWFudHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudHNNb2R1bGUge31cbiJdfQ==