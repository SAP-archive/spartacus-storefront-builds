/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { LogoutGuard } from './logout-guard';
var ɵ0 = { cxRoute: 'logout' };
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PageLayoutModule,
                        RouterModule.forChild([
                            {
                                path: null,
                                canActivate: [LogoutGuard],
                                component: PageLayoutComponent,
                                data: ɵ0,
                            },
                        ]),
                    ],
                },] }
    ];
    return LogoutModule;
}());
export { LogoutModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3VzZXIvbG9nb3V0L2xvZ291dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO1NBVS9CLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQVJuQztJQUFBO0lBYTJCLENBQUM7O2dCQWIzQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEI7Z0NBQ0UsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDO2dDQUMxQixTQUFTLEVBQUUsbUJBQW1CO2dDQUM5QixJQUFJLElBQXVCOzZCQUM1Qjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGOztJQUMwQixtQkFBQztDQUFBLEFBYjVCLElBYTRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbiAgUGFnZUxheW91dE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IExvZ291dEd1YXJkIH0gZnJvbSAnLi9sb2dvdXQtZ3VhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0xvZ291dEd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdsb2dvdXQnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRNb2R1bGUge31cbiJdfQ==