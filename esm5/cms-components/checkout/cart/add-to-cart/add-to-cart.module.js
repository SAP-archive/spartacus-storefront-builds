/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlTranslationModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/index';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
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
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ProductAddToCartComponent: { selector: 'cx-add-to-cart' },
                            },
                        }))),
                        UrlTranslationModule,
                        I18nModule,
                    ],
                    declarations: [AddToCartComponent, AddedToCartDialogComponent],
                    entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                    exports: [AddToCartComponent],
                },] }
    ];
    return AddToCartModule;
}());
export { AddToCartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFbkc7SUFBQTtJQWtCOEIsQ0FBQzs7Z0JBbEI5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHlCQUF5QixFQUFFLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOzZCQUMxRDt5QkFDRixFQUFBLENBQUM7d0JBQ0Ysb0JBQW9CO3dCQUNwQixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO29CQUM5RCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQztvQkFDakUsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzlCOztJQUM2QixzQkFBQztDQUFBLEFBbEIvQixJQWtCK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFkZFRvQ2FydENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1hZGQtdG8tY2FydCcgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkVG9DYXJ0Q29tcG9uZW50LCBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZFRvQ2FydENvbXBvbmVudCwgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkVG9DYXJ0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0TW9kdWxlIHt9XG4iXX0=