/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, UrlModule, I18nModule, } from '@spartacus/core';
import { ProductVariantSelectorComponent } from './product-variant-selector.component';
import { RouterModule } from '@angular/router';
import { VariantStyleSelectorModule } from './style-selector/style-selector.module';
import { VariantSizeSelectorModule } from './size-selector/size-selector.module';
import { VariantColorSelectorModule } from './color-selector/color-selector.module';
import { VariantStyleIconsModule } from './style-icons/style-icons.module';
import { ProductVariantGuard } from './guards/product-variant.guard';
import { VariantStyleIconsComponent } from './style-icons/style-icons.component';
var ProductVariantSelectorModule = /** @class */ (function () {
    function ProductVariantSelectorModule() {
    }
    ProductVariantSelectorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        UrlModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ProductVariantSelectorComponent: {
                                    component: ProductVariantSelectorComponent,
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
                    declarations: [ProductVariantSelectorComponent],
                    entryComponents: [ProductVariantSelectorComponent],
                    exports: [VariantStyleIconsComponent],
                },] }
    ];
    return ProductVariantSelectorModule;
}());
export { ProductVariantSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFFTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVqRjtJQUFBO0lBdUIyQyxDQUFDOztnQkF2QjNDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLCtCQUErQixFQUFFO29DQUMvQixTQUFTLEVBQUUsK0JBQStCO29DQUMxQyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQ0FDOUI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7d0JBQ1YsMEJBQTBCO3dCQUMxQix5QkFBeUI7d0JBQ3pCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztvQkFDL0MsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN0Qzs7SUFDMEMsbUNBQUM7Q0FBQSxBQXZCNUMsSUF1QjRDO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFVybE1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZVNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9zdHlsZS1zZWxlY3Rvci9zdHlsZS1zZWxlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgVmFyaWFudFNpemVTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vc2l6ZS1zZWxlY3Rvci9zaXplLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBWYXJpYW50Q29sb3JTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vY29sb3Itc2VsZWN0b3IvY29sb3Itc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFZhcmlhbnRTdHlsZUljb25zTW9kdWxlIH0gZnJvbSAnLi9zdHlsZS1pY29ucy9zdHlsZS1pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL3Byb2R1Y3QtdmFyaWFudC5ndWFyZCc7XG5pbXBvcnQgeyBWYXJpYW50U3R5bGVJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUtaWNvbnMvc3R5bGUtaWNvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW1Byb2R1Y3RWYXJpYW50R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFZhcmlhbnRTdHlsZVNlbGVjdG9yTW9kdWxlLFxuICAgIFZhcmlhbnRTaXplU2VsZWN0b3JNb2R1bGUsXG4gICAgVmFyaWFudENvbG9yU2VsZWN0b3JNb2R1bGUsXG4gICAgVmFyaWFudFN0eWxlSWNvbnNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1ZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZhcmlhbnRTZWxlY3Rvck1vZHVsZSB7fVxuIl19