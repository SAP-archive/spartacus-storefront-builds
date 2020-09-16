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
export class ProductVariantsModule {
}
ProductVariantsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBMkJqRyxNQUFNLE9BQU8scUJBQXFCOzs7WUF6QmpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsVUFBVTtvQkFDViwwQkFBMEI7b0JBQzFCLHlCQUF5QjtvQkFDekIsMEJBQTBCO29CQUMxQix1QkFBdUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBWTt3QkFDOUIsYUFBYSxFQUFFOzRCQUNiLCtCQUErQixFQUFFO2dDQUMvQixTQUFTLEVBQUUsd0JBQXdCO2dDQUNuQyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs2QkFDOUI7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsZUFBZSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudHNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtdmFyaWFudHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWYXJpYW50U3R5bGVTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50U2l6ZVNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1jb2xvci1zZWxlY3Rvci92YXJpYW50LWNvbG9yLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50U3R5bGVJY29uc01vZHVsZSB9IGZyb20gJy4vdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvcHJvZHVjdC12YXJpYW50Lmd1YXJkJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50IH0gZnJvbSAnLi92YXJpYW50LXN0eWxlLWljb25zL3ZhcmlhbnQtc3R5bGUtaWNvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgVmFyaWFudFN0eWxlU2VsZWN0b3JNb2R1bGUsXG4gICAgVmFyaWFudFNpemVTZWxlY3Rvck1vZHVsZSxcbiAgICBWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSxcbiAgICBWYXJpYW50U3R5bGVJY29uc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RWYXJpYW50c0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtQcm9kdWN0VmFyaWFudEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RWYXJpYW50c0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RWYXJpYW50c0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtWYXJpYW50U3R5bGVJY29uc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50c01vZHVsZSB7fVxuIl19