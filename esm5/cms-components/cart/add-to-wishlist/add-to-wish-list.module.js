/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { AddToWishListComponent } from './add-to-wish-list.component';
var AddToWishListModule = /** @class */ (function () {
    function AddToWishListModule() {
    }
    AddToWishListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                AddToWishListComponent: {
                                    component: AddToWishListComponent,
                                },
                            },
                        }))),
                        I18nModule,
                        IconModule,
                    ],
                    declarations: [AddToWishListComponent],
                    entryComponents: [AddToWishListComponent],
                    exports: [AddToWishListComponent],
                },] }
    ];
    return AddToWishListModule;
}());
export { AddToWishListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdEU7SUFBQTtJQWlCa0MsQ0FBQzs7Z0JBakJsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHNCQUFzQixFQUFFO29DQUN0QixTQUFTLEVBQUUsc0JBQXNCO2lDQUNsQzs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTt3QkFDVixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDekMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDOztJQUNpQywwQkFBQztDQUFBLEFBakJuQyxJQWlCbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEFkZFRvV2lzaExpc3RDb21wb25lbnQgfSBmcm9tICcuL2FkZC10by13aXNoLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWRkVG9XaXNoTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQWRkVG9XaXNoTGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRUb1dpc2hMaXN0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkVG9XaXNoTGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRUb1dpc2hMaXN0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9XaXNoTGlzdE1vZHVsZSB7fVxuIl19