import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '@spartacus/core';
import { DEFAULT_LAUNCH_CONFIG } from './config/default-launch-config';
import { LaunchConfig } from './config/launch-config';
import { InlineRenderStrategy, LaunchRenderStrategy, OutletRenderStrategy, RoutingRenderStrategy, } from './services/index';
var LaunchDialogModule = /** @class */ (function () {
    function LaunchDialogModule() {
    }
    LaunchDialogModule_1 = LaunchDialogModule;
    LaunchDialogModule.forRoot = function () {
        return {
            ngModule: LaunchDialogModule_1,
            providers: [
                provideConfig(DEFAULT_LAUNCH_CONFIG),
                { provide: LaunchConfig, useExisting: Config },
            ],
        };
    };
    var LaunchDialogModule_1;
    LaunchDialogModule = LaunchDialogModule_1 = __decorate([
        NgModule({
            providers: [
                {
                    provide: LaunchRenderStrategy,
                    useExisting: OutletRenderStrategy,
                    multi: true,
                },
                {
                    provide: LaunchRenderStrategy,
                    useExisting: InlineRenderStrategy,
                    multi: true,
                },
                {
                    provide: LaunchRenderStrategy,
                    useExisting: RoutingRenderStrategy,
                    multi: true,
                },
            ],
        })
    ], LaunchDialogModule);
    return LaunchDialogModule;
}());
export { LaunchDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbGF1bmNoLWRpYWxvZy9sYXVuY2gtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGtCQUFrQixDQUFDO0FBcUIxQjtJQUFBO0lBVUEsQ0FBQzsyQkFWWSxrQkFBa0I7SUFDdEIsMEJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMscUJBQXFCLENBQUM7Z0JBQ3BDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQy9DO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBVFUsa0JBQWtCO1FBbkI5QixRQUFRLENBQUM7WUFDUixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLG9CQUFvQjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLG9CQUFvQjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLHFCQUFxQjtvQkFDbEMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FVOUI7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgREVGQVVMVF9MQVVOQ0hfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1sYXVuY2gtY29uZmlnJztcbmltcG9ydCB7IExhdW5jaENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2xhdW5jaC1jb25maWcnO1xuaW1wb3J0IHtcbiAgSW5saW5lUmVuZGVyU3RyYXRlZ3ksXG4gIExhdW5jaFJlbmRlclN0cmF0ZWd5LFxuICBPdXRsZXRSZW5kZXJTdHJhdGVneSxcbiAgUm91dGluZ1JlbmRlclN0cmF0ZWd5LFxufSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTGF1bmNoUmVuZGVyU3RyYXRlZ3ksXG4gICAgICB1c2VFeGlzdGluZzogT3V0bGV0UmVuZGVyU3RyYXRlZ3ksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IExhdW5jaFJlbmRlclN0cmF0ZWd5LFxuICAgICAgdXNlRXhpc3Rpbmc6IElubGluZVJlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgICAgIHVzZUV4aXN0aW5nOiBSb3V0aW5nUmVuZGVyU3RyYXRlZ3ksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXVuY2hEaWFsb2dNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExhdW5jaERpYWxvZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGF1bmNoRGlhbG9nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoREVGQVVMVF9MQVVOQ0hfQ09ORklHKSxcbiAgICAgICAgeyBwcm92aWRlOiBMYXVuY2hDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19