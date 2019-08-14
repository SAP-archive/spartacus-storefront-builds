/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { StarRatingModule } from '../../../shared/components/star-rating/star-rating.module';
import { ProductIntroComponent } from './product-intro.component';
export class ProductIntroModule {
}
ProductIntroModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    StarRatingModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductIntroComponent: {
                                component: ProductIntroComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductIntroComponent],
                exports: [ProductIntroComponent],
                entryComponents: [ProductIntroComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFtQmxFLE1BQU0sT0FBTyxrQkFBa0I7OztZQWpCOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFVBQVU7b0JBQ1YsZ0JBQWdCO29CQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IscUJBQXFCLEVBQUU7Z0NBQ3JCLFNBQVMsRUFBRSxxQkFBcUI7NkJBQ2pDO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdGFyUmF0aW5nTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RJbnRyb0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1pbnRyby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3RhclJhdGluZ01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdEludHJvQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0SW50cm9Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0SW50cm9Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdEludHJvQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdEludHJvQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEludHJvTW9kdWxlIHt9XG4iXX0=