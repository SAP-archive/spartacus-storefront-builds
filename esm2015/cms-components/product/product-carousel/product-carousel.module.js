/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, ProductService, UrlTranslationModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { MediaModule } from '../../../shared/components/media/media.module';
import { ProductCarouselComponent } from './product-carousel.component';
import { ProductCarouselService } from './product-carousel.component.service';
export class ProductCarouselModule {
}
ProductCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MediaModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductCarouselComponent: {
                                selector: 'cx-product-carousel',
                                providers: [
                                    {
                                        provide: ProductCarouselService,
                                        useClass: ProductCarouselService,
                                        deps: [CmsComponentData, ProductService],
                                    },
                                ],
                            },
                        },
                    }))),
                    UrlTranslationModule,
                ],
                declarations: [ProductCarouselComponent],
                entryComponents: [ProductCarouselComponent],
                exports: [ProductCarouselComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLGNBQWMsRUFDZCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUEyQjlFLE1BQU0sT0FBTyxxQkFBcUI7OztZQXpCakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2Isd0JBQXdCLEVBQUU7Z0NBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7Z0NBQy9CLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsc0JBQXNCO3dDQUMvQixRQUFRLEVBQUUsc0JBQXNCO3dDQUNoQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7cUNBQ3pDO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1jYXJvdXNlbCcsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IFByb2R1Y3RDYXJvdXNlbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zQ29tcG9uZW50RGF0YSwgUHJvZHVjdFNlcnZpY2VdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdENhcm91c2VsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdENhcm91c2VsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSB7fVxuIl19