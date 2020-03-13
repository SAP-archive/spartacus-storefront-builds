import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { CarouselModule, MediaModule } from '../../../shared/components/index';
import { BannerCarouselComponent } from './banner-carousel.component';
let BannerCarouselModule = class BannerCarouselModule {
};
BannerCarouselModule = __decorate([
    NgModule({
        imports: [CommonModule, PageComponentModule, CarouselModule, MediaModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    RotatingImagesComponent: {
                        component: BannerCarouselComponent,
                    },
                },
            }),
        ],
        declarations: [BannerCarouselComponent],
        entryComponents: [BannerCarouselComponent],
        exports: [BannerCarouselComponent],
    })
], BannerCarouselModule);
export { BannerCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFpQnRFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFmaEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUM7UUFDekUsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUM7Z0JBQ25CLGFBQWEsRUFBRTtvQkFDYix1QkFBdUIsRUFBRTt3QkFDdkIsU0FBUyxFQUFFLHVCQUF1QjtxQkFDbkM7aUJBQ0Y7YUFDVyxDQUFDO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDdkMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDbkMsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9wYWdlLWNvbXBvbmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUsIE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQYWdlQ29tcG9uZW50TW9kdWxlLCBDYXJvdXNlbE1vZHVsZSwgTWVkaWFNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJvdGF0aW5nSW1hZ2VzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBCYW5uZXJDYXJvdXNlbENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSBhcyBDbXNDb25maWcpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Jhbm5lckNhcm91c2VsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Jhbm5lckNhcm91c2VsQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ2Fyb3VzZWxNb2R1bGUge31cbiJdfQ==