/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, ProductModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { MediaModule } from '../../../shared/components/media/media.module';
import { HighlightPipe } from './highlight.pipe';
import { SearchBoxComponent } from './search-box.component';
var SearchBoxModule = /** @class */ (function () {
    function SearchBoxModule() {
    }
    SearchBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        MediaModule,
                        ProductModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                SearchBoxComponent: {
                                    component: SearchBoxComponent,
                                },
                            },
                        }))),
                        IconModule,
                        UrlModule,
                        I18nModule,
                    ],
                    declarations: [SearchBoxComponent, HighlightPipe],
                    entryComponents: [SearchBoxComponent],
                    exports: [SearchBoxComponent],
                },] }
    ];
    return SearchBoxModule;
}());
export { SearchBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixhQUFhLEVBQ2IsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQ7SUFBQTtJQXFCOEIsQ0FBQzs7Z0JBckI5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLGtCQUFrQixFQUFFO29DQUNsQixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTt3QkFDVixTQUFTO3dCQUNULFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO29CQUNqRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDckMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzlCOztJQUM2QixzQkFBQztDQUFBLEFBckIvQixJQXFCK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9kdWN0TW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlJztcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2hpZ2hsaWdodC5waXBlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWJveC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgUHJvZHVjdE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU2VhcmNoQm94Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTZWFyY2hCb3hDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEljb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaEJveENvbXBvbmVudCwgSGlnaGxpZ2h0UGlwZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NlYXJjaEJveENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWFyY2hCb3hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hNb2R1bGUge31cbiJdfQ==