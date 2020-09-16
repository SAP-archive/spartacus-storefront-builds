import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { CarouselModule, MediaModule } from '../../../shared/components/index';
import { BannerCarouselComponent } from './banner-carousel.component';
export class BannerCarouselModule {
}
BannerCarouselModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWlCdEUsTUFBTSxPQUFPLG9CQUFvQjs7O1lBZmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQztnQkFDekUsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFDO3dCQUNuQixhQUFhLEVBQUU7NEJBQ2IsdUJBQXVCLEVBQUU7Z0NBQ3ZCLFNBQVMsRUFBRSx1QkFBdUI7NkJBQ25DO3lCQUNGO3FCQUNXLENBQUM7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvcGFnZS1jb21wb25lbnQubW9kdWxlJztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlLCBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEJhbm5lckNhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXItY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGFnZUNvbXBvbmVudE1vZHVsZSwgQ2Fyb3VzZWxNb2R1bGUsIE1lZGlhTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoe1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSb3RhdGluZ0ltYWdlc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0gYXMgQ21zQ29uZmlnKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQ2Fyb3VzZWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNhcm91c2VsTW9kdWxlIHt9XG4iXX0=