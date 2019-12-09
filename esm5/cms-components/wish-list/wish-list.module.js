/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { MediaModule, StarRatingModule } from '../../shared/index';
import { AddToCartModule } from '../cart/index';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
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
                                },
                            },
                        }))),
                        I18nModule,
                        MediaModule,
                        RouterModule,
                        StarRatingModule,
                        UrlModule,
                    ],
                    declarations: [WishListComponent, WishListItemComponent],
                    entryComponents: [WishListComponent],
                    exports: [WishListComponent, WishListItemComponent],
                },] }
    ];
    return WishListModule;
}());
export { WishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFN0Y7SUFBQTtJQXFCNkIsQ0FBQzs7Z0JBckI3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsaUJBQWlCLEVBQUU7b0NBQ2pCLFNBQVMsRUFBRSxpQkFBaUI7aUNBQzdCOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFNBQVM7cUJBQ1Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztpQkFDcEQ7O0lBQzRCLHFCQUFDO0NBQUEsQUFyQjlCLElBcUI4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlLCBTdGFyUmF0aW5nTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHsgV2lzaExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2lzaExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dpc2gtbGlzdC1pdGVtL3dpc2gtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBZGRUb0NhcnRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBXaXNoTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogV2lzaExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFN0YXJSYXRpbmdNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtXaXNoTGlzdENvbXBvbmVudCwgV2lzaExpc3RJdGVtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbV2lzaExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbV2lzaExpc3RDb21wb25lbnQsIFdpc2hMaXN0SXRlbUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0TW9kdWxlIHt9XG4iXX0=