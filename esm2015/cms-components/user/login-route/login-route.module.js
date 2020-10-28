import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { LoginGuard } from './login.guard';
const ɵ0 = { cxRoute: 'login' };
/**
 * This module enables to quickly switch from Resource Owner Password Flow
 * to Implicit Flow or Authorization Code Flow. The `login` route in this case will be
 * responsible for initalizing the redirect to OAuth server to login.
 *
 * Instead of manually invoking OAuth redirect you only have to redirect to `login` page.
 */
export class LoginRouteModule {
}
LoginRouteModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    PageLayoutModule,
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [LoginGuard],
                            component: PageLayoutComponent,
                            data: ɵ0,
                        },
                    ]),
                ],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcm91dGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi1yb3V0ZS9sb2dpbi1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsR0FDakIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO1dBaUI3QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFmbEM7Ozs7OztHQU1HO0FBY0gsTUFBTSxPQUFPLGdCQUFnQjs7O1lBYjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQ3pCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBc0I7eUJBQzNCO3FCQUNGLENBQUM7aUJBQ0g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbiAgUGFnZUxheW91dE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tICcuL2xvZ2luLmd1YXJkJztcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBlbmFibGVzIHRvIHF1aWNrbHkgc3dpdGNoIGZyb20gUmVzb3VyY2UgT3duZXIgUGFzc3dvcmQgRmxvd1xuICogdG8gSW1wbGljaXQgRmxvdyBvciBBdXRob3JpemF0aW9uIENvZGUgRmxvdy4gVGhlIGBsb2dpbmAgcm91dGUgaW4gdGhpcyBjYXNlIHdpbGwgYmVcbiAqIHJlc3BvbnNpYmxlIGZvciBpbml0YWxpemluZyB0aGUgcmVkaXJlY3QgdG8gT0F1dGggc2VydmVyIHRvIGxvZ2luLlxuICpcbiAqIEluc3RlYWQgb2YgbWFudWFsbHkgaW52b2tpbmcgT0F1dGggcmVkaXJlY3QgeW91IG9ubHkgaGF2ZSB0byByZWRpcmVjdCB0byBgbG9naW5gIHBhZ2UuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnbG9naW4nIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblJvdXRlTW9kdWxlIHt9XG4iXX0=