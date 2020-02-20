import { __decorate } from "tslib";
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
let ProductVariantsModule = class ProductVariantsModule {
};
ProductVariantsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductVariantSelectorComponent: {
                        component: ProductVariantsComponent,
                        guards: [ProductVariantGuard],
                    },
                },
            }),
            I18nModule,
            VariantStyleSelectorModule,
            VariantSizeSelectorModule,
            VariantColorSelectorModule,
            VariantStyleIconsModule,
        ],
        declarations: [ProductVariantsComponent],
        entryComponents: [ProductVariantsComponent],
        exports: [VariantStyleIconsComponent],
    })
], ProductVariantsModule);
export { ProductVariantsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFFTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQXlCakcsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7Q0FBRyxDQUFBO0FBQXhCLHFCQUFxQjtJQXZCakMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixTQUFTO1lBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLCtCQUErQixFQUFFO3dCQUMvQixTQUFTLEVBQUUsd0JBQXdCO3dCQUNuQyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDOUI7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsVUFBVTtZQUNWLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsMEJBQTBCO1lBQzFCLHVCQUF1QjtTQUN4QjtRQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ3hDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQzNDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQ3RDLENBQUM7R0FDVyxxQkFBcUIsQ0FBRztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBVcmxNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudHNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtdmFyaWFudHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWYXJpYW50U3R5bGVTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50U2l6ZVNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1jb2xvci1zZWxlY3Rvci92YXJpYW50LWNvbG9yLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50U3R5bGVJY29uc01vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvcHJvZHVjdC12YXJpYW50Lmd1YXJkJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50IH0gZnJvbSAnLi92YXJpYW50LXN0eWxlLWljb25zL3ZhcmlhbnQtc3R5bGUtaWNvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0VmFyaWFudHNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbUHJvZHVjdFZhcmlhbnRHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgVmFyaWFudFN0eWxlU2VsZWN0b3JNb2R1bGUsXG4gICAgVmFyaWFudFNpemVTZWxlY3Rvck1vZHVsZSxcbiAgICBWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSxcbiAgICBWYXJpYW50U3R5bGVJY29uc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFZhcmlhbnRzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFZhcmlhbnRzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1ZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZhcmlhbnRzTW9kdWxlIHt9XG4iXX0=