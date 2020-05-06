import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { LayoutConfig } from '../config/layout-config';
import { InlineRenderStrategy, LaunchRenderStrategy, OutletRenderStrategy, RoutingRenderStrategy, } from './services/index';
var LaunchDialogModule = /** @class */ (function () {
    function LaunchDialogModule() {
    }
    LaunchDialogModule_1 = LaunchDialogModule;
    LaunchDialogModule.forRoot = function () {
        return {
            ngModule: LaunchDialogModule_1,
            providers: [{ provide: LayoutConfig, useExisting: Config }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbGF1bmNoLWRpYWxvZy9sYXVuY2gtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIscUJBQXFCLEdBQ3RCLE1BQU0sa0JBQWtCLENBQUM7QUFxQjFCO0lBQUE7SUFPQSxDQUFDOzJCQVBZLGtCQUFrQjtJQUN0QiwwQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUM1RCxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxrQkFBa0I7UUFuQjlCLFFBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUscUJBQXFCO29CQUNsQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztPQUNXLGtCQUFrQixDQU85QjtJQUFELHlCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQge1xuICBJbmxpbmVSZW5kZXJTdHJhdGVneSxcbiAgTGF1bmNoUmVuZGVyU3RyYXRlZ3ksXG4gIE91dGxldFJlbmRlclN0cmF0ZWd5LFxuICBSb3V0aW5nUmVuZGVyU3RyYXRlZ3ksXG59IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgICAgIHVzZUV4aXN0aW5nOiBPdXRsZXRSZW5kZXJTdHJhdGVneSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTGF1bmNoUmVuZGVyU3RyYXRlZ3ksXG4gICAgICB1c2VFeGlzdGluZzogSW5saW5lUmVuZGVyU3RyYXRlZ3ksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IExhdW5jaFJlbmRlclN0cmF0ZWd5LFxuICAgICAgdXNlRXhpc3Rpbmc6IFJvdXRpbmdSZW5kZXJTdHJhdGVneSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExhdW5jaERpYWxvZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TGF1bmNoRGlhbG9nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMYXVuY2hEaWFsb2dNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IExheW91dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=