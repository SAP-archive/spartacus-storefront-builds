/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, ProductReferenceService, RoutingService, UrlModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { MediaModule } from '../../../../shared/components/media/media.module';
import { SharedCarouselService } from '../shared-carousel.service';
import { ProductReferencesComponent } from './product-references.component';
import { ProductReferencesService } from './product-references.component.service';
export class ProductReferencesModule {
}
ProductReferencesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MediaModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductReferencesComponent: {
                                selector: 'cx-product-references',
                                providers: [
                                    {
                                        provide: ProductReferencesService,
                                        useClass: ProductReferencesService,
                                        deps: [CmsComponentData, ProductReferenceService, RoutingService],
                                    },
                                    {
                                        provide: SharedCarouselService,
                                        useClass: SharedCarouselService,
                                        deps: [],
                                    },
                                ],
                            },
                        },
                    }))),
                ],
                declarations: [ProductReferencesComponent],
                entryComponents: [ProductReferencesComponent],
                exports: [ProductReferencesComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBZ0NsRixNQUFNLE9BQU8sdUJBQXVCOzs7WUE5Qm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsU0FBUztvQkFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsMEJBQTBCLEVBQUU7Z0NBQzFCLFFBQVEsRUFBRSx1QkFBdUI7Z0NBQ2pDLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsd0JBQXdCO3dDQUNqQyxRQUFRLEVBQUUsd0JBQXdCO3dDQUNsQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxjQUFjLENBQUM7cUNBQ2xFO29DQUNEO3dDQUNFLE9BQU8sRUFBRSxxQkFBcUI7d0NBQzlCLFFBQVEsRUFBRSxxQkFBcUI7d0NBQy9CLElBQUksRUFBRSxFQUFFO3FDQUNUO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDMUMsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkLWNhcm91c2VsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJlZmVyZW5jZXMnLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBQcm9kdWN0UmVmZXJlbmNlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBQcm9kdWN0UmVmZXJlbmNlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSwgUm91dGluZ1NlcnZpY2VdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogU2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogU2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSB7fVxuIl19