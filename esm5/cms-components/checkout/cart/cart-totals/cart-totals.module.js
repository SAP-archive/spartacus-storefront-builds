/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlTranslationModule, ConfigModule, I18nModule, } from '@spartacus/core';
import { CartTotalsComponent } from './cart-totals.component';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
var CartTotalsModule = /** @class */ (function () {
    function CartTotalsModule() {
    }
    CartTotalsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        UrlTranslationModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CartTotalsComponent: {
                                    selector: 'cx-cart-totals',
                                },
                            },
                        }))),
                        CartSharedModule,
                        I18nModule,
                    ],
                    declarations: [CartTotalsComponent],
                    exports: [CartTotalsComponent],
                    entryComponents: [CartTotalsComponent],
                },] }
    ];
    return CartTotalsModule;
}());
export { CartTotalsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXRvdGFscy9jYXJ0LXRvdGFscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFlBQVksRUFFWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRTtJQUFBO0lBbUIrQixDQUFDOztnQkFuQi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG1CQUFtQixFQUFFO29DQUNuQixRQUFRLEVBQUUsZ0JBQWdCO2lDQUMzQjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsZ0JBQWdCO3dCQUNoQixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ3ZDOztJQUM4Qix1QkFBQztDQUFBLEFBbkJoQyxJQW1CZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0VG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LXRvdGFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYXJ0VG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1jYXJ0LXRvdGFscycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FydFRvdGFsc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJ0VG90YWxzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FydFRvdGFsc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRUb3RhbHNNb2R1bGUge31cbiJdfQ==