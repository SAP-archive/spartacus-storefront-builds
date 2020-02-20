import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { CarouselModule, MediaModule } from '../../../shared/components/index';
import { BannerCarouselComponent } from './banner-carousel.component';
var BannerCarouselModule = /** @class */ (function () {
    function BannerCarouselModule() {
    }
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
    return BannerCarouselModule;
}());
export { BannerCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBb0J0RTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBbEJoQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDO29CQUN0QixhQUFhLEVBQUU7d0JBQ2IsdUJBQXVCLEVBQUU7NEJBQ3ZCLFNBQVMsRUFBRSx1QkFBdUI7eUJBQ25DO3FCQUNGO2lCQUNXLENBQUM7Z0JBQ2YsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLFdBQVc7YUFDWjtZQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9wYWdlLWNvbXBvbmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUsIE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKHtcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUm90YXRpbmdJbWFnZXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEJhbm5lckNhcm91c2VsQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9IGFzIENtc0NvbmZpZyksXG4gICAgUGFnZUNvbXBvbmVudE1vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQ2Fyb3VzZWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNhcm91c2VsTW9kdWxlIHt9XG4iXX0=