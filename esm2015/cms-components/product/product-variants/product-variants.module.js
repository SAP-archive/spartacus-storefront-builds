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
let ProductVariantsModule = class ProductVariantsModule {
};
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
export { ProductVariantsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFFTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQTJCakcsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7Q0FBRyxDQUFBO0FBQXhCLHFCQUFxQjtJQXpCakMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixTQUFTO1lBQ1QsVUFBVTtZQUNWLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsMEJBQTBCO1lBQzFCLHVCQUF1QjtTQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFZO2dCQUM5QixhQUFhLEVBQUU7b0JBQ2IsK0JBQStCLEVBQUU7d0JBQy9CLFNBQVMsRUFBRSx3QkFBd0I7d0JBQ25DLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO3FCQUM5QjtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ3hDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQzNDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQ3RDLENBQUM7R0FDVyxxQkFBcUIsQ0FBRztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZVNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LXN0eWxlLXNlbGVjdG9yL3ZhcmlhbnQtc3R5bGUtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRTaXplU2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL3ZhcmlhbnQtc2l6ZS1zZWxlY3Rvci92YXJpYW50LXNpemUtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRDb2xvclNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LWNvbG9yLXNlbGVjdG9yL3ZhcmlhbnQtY29sb3Itc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZUljb25zTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LXN0eWxlLWljb25zL3ZhcmlhbnQtc3R5bGUtaWNvbnMubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50R3VhcmQgfSBmcm9tICcuL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQnO1xuaW1wb3J0IHsgVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnQgfSBmcm9tICcuL3ZhcmlhbnQtc3R5bGUtaWNvbnMvdmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBWYXJpYW50U3R5bGVTZWxlY3Rvck1vZHVsZSxcbiAgICBWYXJpYW50U2l6ZVNlbGVjdG9yTW9kdWxlLFxuICAgIFZhcmlhbnRDb2xvclNlbGVjdG9yTW9kdWxlLFxuICAgIFZhcmlhbnRTdHlsZUljb25zTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdFZhcmlhbnRTZWxlY3RvckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdFZhcmlhbnRzQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW1Byb2R1Y3RWYXJpYW50R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFZhcmlhbnRzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFZhcmlhbnRzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1ZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZhcmlhbnRzTW9kdWxlIHt9XG4iXX0=