/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, FeaturesConfigModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { AutoFocusDirectiveModule } from '../../../shared/directives/auto-focus/auto-focus.directive.module';
import { ItemCounterModule, SpinnerModule } from '../../../shared/index';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
var AddToCartModule = /** @class */ (function () {
    function AddToCartModule() {
    }
    AddToCartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CartSharedModule,
                        CommonModule,
                        RouterModule,
                        SpinnerModule,
                        PromotionsModule,
                        FeaturesConfigModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ProductAddToCartComponent: {
                                    component: AddToCartComponent,
                                },
                            },
                        }))),
                        UrlModule,
                        IconModule,
                        I18nModule,
                        ItemCounterModule,
                        AutoFocusDirectiveModule,
                    ],
                    declarations: [AddToCartComponent, AddedToCartDialogComponent],
                    entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                    exports: [AddToCartComponent, AddedToCartDialogComponent],
                },] }
    ];
    return AddToCartModule;
}());
export { AddToCartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUxRjtJQUFBO0lBeUI4QixDQUFDOztnQkF6QjlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHlCQUF5QixFQUFFO29DQUN6QixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsU0FBUzt3QkFDVCxVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsaUJBQWlCO3dCQUNqQix3QkFBd0I7cUJBQ3pCO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO29CQUM5RCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQztvQkFDakUsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsMEJBQTBCLENBQUM7aUJBQzFEOztJQUM2QixzQkFBQztDQUFBLEFBekIvQixJQXlCK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBBdXRvRm9jdXNEaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9hdXRvLWZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtQ291bnRlck1vZHVsZSwgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi8uLi9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hZGQtdG8tY2FydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFkZFRvQ2FydENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVXJsTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgICBBdXRvRm9jdXNEaXJlY3RpdmVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRUb0NhcnRDb21wb25lbnQsIEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0NhcnRNb2R1bGUge31cbiJdfQ==