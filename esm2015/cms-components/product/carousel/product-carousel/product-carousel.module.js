import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule, } from '../../../../shared/components/index';
import { ProductCarouselComponent } from './product-carousel.component';
let ProductCarouselModule = class ProductCarouselModule {
};
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
export { ProductCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFxQnhFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0NBQUcsQ0FBQTtBQUF4QixxQkFBcUI7SUFuQmpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixjQUFjO1lBQ2QsV0FBVztZQUNYLFlBQVk7WUFDWixTQUFTO1lBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLHdCQUF3QixFQUFFO3dCQUN4QixTQUFTLEVBQUUsd0JBQXdCO3FCQUNwQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ3hDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQzNDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxxQkFBcUIsQ0FBRztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgVXJsTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENhcm91c2VsTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdENhcm91c2VsQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsTW9kdWxlIHt9XG4iXX0=