/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/index';
import { MediaModule } from '../../../shared/components/media/media.module';
import { ProductImagesComponent } from './product-images.component';
var ProductImagesModule = /** @class */ (function () {
    function ProductImagesModule() {
    }
    ProductImagesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        MediaModule,
                        OutletModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CMSProductImages: {
                                    selector: 'cx-product-images',
                                },
                            },
                        }))),
                    ],
                    declarations: [ProductImagesComponent],
                    entryComponents: [ProductImagesComponent],
                },] }
    ];
    return ProductImagesModule;
}());
export { ProductImagesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRTtJQUFBO0lBaUJrQyxDQUFDOztnQkFqQmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsZ0JBQWdCLEVBQUU7b0NBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7aUNBQzlCOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQzFDOztJQUNpQywwQkFBQztDQUFBLEFBakJuQyxJQWlCbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQcm9kdWN0SW1hZ2VzOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWltYWdlcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0SW1hZ2VzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdEltYWdlc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZXNNb2R1bGUge31cbiJdfQ==