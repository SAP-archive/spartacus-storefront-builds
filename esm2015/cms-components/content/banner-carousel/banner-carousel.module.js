import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { CarouselModule, MediaModule } from '../../../shared/components/index';
import { BannerCarouselComponent } from './banner-carousel.component';
let BannerCarouselModule = class BannerCarouselModule {
};
BannerCarouselModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    RotatingImagesComponent: {
                        component: BannerCarouselComponent,
                    },
                },
            }),
            PageComponentModule,
            CarouselModule,
            MediaModule,
        ],
        declarations: [BannerCarouselComponent],
        entryComponents: [BannerCarouselComponent],
        exports: [BannerCarouselComponent],
    })
], BannerCarouselModule);
export { BannerCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBb0J0RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFHLENBQUE7QUFBdkIsb0JBQW9CO0lBbEJoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsYUFBYSxFQUFFO29CQUNiLHVCQUF1QixFQUFFO3dCQUN2QixTQUFTLEVBQUUsdUJBQXVCO3FCQUNuQztpQkFDRjthQUNXLENBQUM7WUFDZixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLFdBQVc7U0FDWjtRQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZDLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQzFDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ25DLENBQUM7R0FDVyxvQkFBb0IsQ0FBRztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSwgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBCYW5uZXJDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyLWNhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoe1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSb3RhdGluZ0ltYWdlc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0gYXMgQ21zQ29uZmlnKSxcbiAgICBQYWdlQ29tcG9uZW50TW9kdWxlLFxuICAgIENhcm91c2VsTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Jhbm5lckNhcm91c2VsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Jhbm5lckNhcm91c2VsQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ2Fyb3VzZWxNb2R1bGUge31cbiJdfQ==