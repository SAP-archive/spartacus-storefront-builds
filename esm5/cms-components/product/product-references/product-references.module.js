/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductReferencesComponent } from './product-references.component';
// import { MediaModule } from '../../ui/components/media/media.module';
import { ProductCarouselModule } from '../product-carousel/product-carousel.module';
import { ConfigModule } from '@spartacus/core';
var ProductReferencesModule = /** @class */ (function () {
    function ProductReferencesModule() {
    }
    ProductReferencesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        // MediaModule,
                        ProductCarouselModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ProductReferencesComponent: { selector: 'cx-product-references' },
                            },
                        }))),
                    ],
                    declarations: [ProductReferencesComponent],
                    entryComponents: [ProductReferencesComponent],
                    exports: [ProductReferencesComponent],
                },] }
    ];
    return ProductReferencesModule;
}());
export { ProductReferencesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DO0lBQUE7SUFnQnNDLENBQUM7O2dCQWhCdEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiwwQkFBMEIsRUFBRSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTs2QkFDbEU7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDN0MsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQ3RDOztJQUNxQyw4QkFBQztDQUFBLEFBaEJ2QyxJQWdCdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL21lZGlhL21lZGlhLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuLi9wcm9kdWN0LWNhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICAvLyBNZWRpYU1vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZWZlcmVuY2VzJyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlIHt9XG4iXX0=