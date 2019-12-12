/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { ItemCounterModule, MediaModule, StarRatingModule, } from '../../shared/index';
import { AddToCartModule } from '../cart/index';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
var WishListModule = /** @class */ (function () {
    function WishListModule() {
    }
    WishListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AddToCartModule,
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                WishListComponent: {
                                    component: WishListComponent,
                                    guards: [AuthGuard],
                                },
                            },
                        }))),
                        I18nModule,
                        MediaModule,
                        RouterModule,
                        StarRatingModule,
                        UrlModule,
                        ItemCounterModule,
                    ],
                    declarations: [WishListComponent, WishListItemComponent],
                    entryComponents: [WishListComponent],
                    exports: [WishListComponent, WishListItemComponent],
                },] }
    ];
    return WishListModule;
}());
export { WishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFL0U7SUFBQTtJQXVCNkIsQ0FBQzs7Z0JBdkI3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsaUJBQWlCLEVBQUU7b0NBQ2pCLFNBQVMsRUFBRSxpQkFBaUI7b0NBQzVCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQ0FDcEI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsU0FBUzt3QkFDVCxpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO29CQUN4RCxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7aUJBQ3BEOztJQUM0QixxQkFBQztDQUFBLEFBdkI5QixJQXVCOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEl0ZW1Db3VudGVyTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHsgV2lzaExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dpc2gtbGlzdC1pdGVtL3dpc2gtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaXNoTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93aXNoLWxpc3Qvd2lzaC1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBZGRUb0NhcnRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBXaXNoTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogV2lzaExpc3RDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgU3RhclJhdGluZ01vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1dpc2hMaXN0Q29tcG9uZW50LCBXaXNoTGlzdEl0ZW1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtXaXNoTGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtXaXNoTGlzdENvbXBvbmVudCwgV2lzaExpc3RJdGVtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgV2lzaExpc3RNb2R1bGUge31cbiJdfQ==