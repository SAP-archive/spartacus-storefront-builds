import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule, } from '../../../../shared/components/index';
import { ProductCarouselComponent } from './product-carousel.component';
var ProductCarouselModule = /** @class */ (function () {
    function ProductCarouselModule() {
    }
    ProductCarouselModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CarouselModule,
                MediaModule,
                RouterModule,
                UrlModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductCarouselComponent: {
                            component: ProductCarouselComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductCarouselComponent],
            entryComponents: [ProductCarouselComponent],
            exports: [ProductCarouselComponent],
        })
    ], ProductCarouselModule);
    return ProductCarouselModule;
}());
export { ProductCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFxQnhFO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixxQkFBcUI7UUFuQmpDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLHdCQUF3QixFQUFFOzRCQUN4QixTQUFTLEVBQUUsd0JBQXdCO3lCQUNwQztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUMzQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1cscUJBQXFCLENBQUc7SUFBRCw0QkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBVcmxNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2Fyb3VzZWxNb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUge31cbiJdfQ==