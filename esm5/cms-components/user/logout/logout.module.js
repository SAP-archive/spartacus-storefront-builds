/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../cms-structure/page/index';
import { LogoutGuard } from './logout-guard';
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([
                            {
                                path: 'logout',
                                canActivate: [LogoutGuard],
                                component: PageLayoutComponent,
                            },
                        ]),
                    ],
                },] }
    ];
    return LogoutModule;
}());
export { LogoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3VzZXIvbG9nb3V0L2xvZ291dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBVzJCLENBQUM7O2dCQVgzQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCO2dDQUNFLElBQUksRUFBRSxRQUFRO2dDQUNkLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQ0FDMUIsU0FBUyxFQUFFLG1CQUFtQjs2QkFDL0I7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRjs7SUFDMEIsbUJBQUM7Q0FBQSxBQVg1QixJQVc0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgTG9nb3V0R3VhcmQgfSBmcm9tICcuL2xvZ291dC1ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnbG9nb3V0JyxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtMb2dvdXRHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dE1vZHVsZSB7fVxuIl19