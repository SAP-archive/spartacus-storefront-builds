/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { PageComponentModule } from '../../../cms-structure/page/index';
import { CarouselModule, MediaModule } from '../../../shared/components/index';
import { BannerCarouselComponent } from './banner-carousel.component';
export class BannerCarouselModule {
}
BannerCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            RotatingImagesComponent: {
                                component: BannerCarouselComponent,
                            },
                        },
                    }))),
                    PageComponentModule,
                    CarouselModule,
                    MediaModule,
                ],
                declarations: [BannerCarouselComponent],
                entryComponents: [BannerCarouselComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBbUJ0RSxNQUFNLE9BQU8sb0JBQW9COzs7WUFqQmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFBO3dCQUN0QixhQUFhLEVBQUU7NEJBQ2IsdUJBQXVCLEVBQUU7Z0NBQ3ZCLFNBQVMsRUFBRSx1QkFBdUI7NkJBQ25DO3lCQUNGO3FCQUNGLEVBQWEsQ0FBQztvQkFDZixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUsIE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKHtcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUm90YXRpbmdJbWFnZXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEJhbm5lckNhcm91c2VsQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9IGFzIENtc0NvbmZpZyksXG4gICAgUGFnZUNvbXBvbmVudE1vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQ2Fyb3VzZWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCYW5uZXJDYXJvdXNlbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNhcm91c2VsTW9kdWxlIHt9XG4iXX0=