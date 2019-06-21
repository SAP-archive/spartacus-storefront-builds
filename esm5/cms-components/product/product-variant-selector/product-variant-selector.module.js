/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { ProductVariantSelectorComponent } from './product-variant-selector.component';
import { RouterModule } from '@angular/router';
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
                                },
                            },
                        }))),
                    ],
                    declarations: [ProductVariantSelectorComponent],
                    entryComponents: [ProductVariantSelectorComponent],
                },] }
    ];
    return ProductVariantSelectorModule;
}());
export { ProductVariantSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBQUE7SUFnQjJDLENBQUM7O2dCQWhCM0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsK0JBQStCLEVBQUU7b0NBQy9CLFNBQVMsRUFBRSwrQkFBK0I7aUNBQzNDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztvQkFDL0MsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQ25EOztJQUMwQyxtQ0FBQztDQUFBLEFBaEI1QyxJQWdCNEM7U0FBL0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgVXJsTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFZhcmlhbnRTZWxlY3RvckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudFNlbGVjdG9yTW9kdWxlIHt9XG4iXX0=