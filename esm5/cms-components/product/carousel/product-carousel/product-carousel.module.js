/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, ProductService, UrlModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { MediaModule } from '../../../../shared/components/media/media.module';
import { SharedCarouselService } from '../shared-carousel.service';
import { ProductCarouselComponent } from './product-carousel.component';
import { ProductCarouselService } from './product-carousel.component.service';
var ProductCarouselModule = /** @class */ (function () {
    function ProductCarouselModule() {
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
                                        {
                                            provide: SharedCarouselService,
                                            useClass: SharedCarouselService,
                                            deps: [],
                                        },
                                    ],
                                },
                            },
                        }))),
                        UrlModule,
                    ],
                    declarations: [ProductCarouselComponent],
                    entryComponents: [ProductCarouselComponent],
                    exports: [ProductCarouselComponent],
                },] }
    ];
    return ProductCarouselModule;
}());
export { ProductCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLGNBQWMsRUFDZCxTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUU7SUFBQTtJQThCb0MsQ0FBQzs7Z0JBOUJwQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix3QkFBd0IsRUFBRTtvQ0FDeEIsUUFBUSxFQUFFLHFCQUFxQjtvQ0FDL0IsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSxzQkFBc0I7NENBQy9CLFFBQVEsRUFBRSxzQkFBc0I7NENBQ2hDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzt5Q0FDekM7d0NBQ0Q7NENBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0Q0FDOUIsUUFBUSxFQUFFLHFCQUFxQjs0Q0FDL0IsSUFBSSxFQUFFLEVBQUU7eUNBQ1Q7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFNBQVM7cUJBQ1Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDcEM7O0lBQ21DLDRCQUFDO0NBQUEsQUE5QnJDLElBOEJxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZENhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC1jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtY2Fyb3VzZWwnLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogUHJvZHVjdENhcm91c2VsU2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIFByb2R1Y3RTZXJ2aWNlXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IFNoYXJlZENhcm91c2VsU2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IFNoYXJlZENhcm91c2VsU2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFVybE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdENhcm91c2VsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdENhcm91c2VsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSB7fVxuIl19