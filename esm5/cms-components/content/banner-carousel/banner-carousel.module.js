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
var BannerCarouselModule = /** @class */ (function () {
    function BannerCarouselModule() {
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
                    exports: [BannerCarouselComponent],
                },] }
    ];
    return BannerCarouselModule;
}());
export { BannerCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFO0lBQUE7SUFrQm1DLENBQUM7O2dCQWxCbkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQUE7NEJBQ3RCLGFBQWEsRUFBRTtnQ0FDYix1QkFBdUIsRUFBRTtvQ0FDdkIsU0FBUyxFQUFFLHVCQUF1QjtpQ0FDbkM7NkJBQ0Y7eUJBQ0YsRUFBYSxDQUFDO3dCQUNmLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDMUMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DOztJQUNrQywyQkFBQztDQUFBLEFBbEJwQyxJQWtCb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlLCBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEJhbm5lckNhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXItY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyh7XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJvdGF0aW5nSW1hZ2VzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBCYW5uZXJDYXJvdXNlbENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSBhcyBDbXNDb25maWcpLFxuICAgIFBhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Jhbm5lckNhcm91c2VsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQmFubmVyQ2Fyb3VzZWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQmFubmVyQ2Fyb3VzZWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDYXJvdXNlbE1vZHVsZSB7fVxuIl19