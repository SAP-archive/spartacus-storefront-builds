/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../cms-structure/page/index';
import { LogoutGuard } from './logout-guard';
export class LogoutModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3VzZXIvbG9nb3V0L2xvZ291dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWE3QyxNQUFNLE9BQU8sWUFBWTs7O1lBWHhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEI7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDOzRCQUMxQixTQUFTLEVBQUUsbUJBQW1CO3lCQUMvQjtxQkFDRixDQUFDO2lCQUNIO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgTG9nb3V0R3VhcmQgfSBmcm9tICcuL2xvZ291dC1ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnbG9nb3V0JyxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtMb2dvdXRHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dE1vZHVsZSB7fVxuIl19