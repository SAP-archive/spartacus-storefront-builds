import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { DEFAULT_LAUNCH_CONFIG } from './config/default-launch-config';
import { InlineRenderStrategy, LaunchRenderStrategy, OutletRenderStrategy, RoutingRenderStrategy, } from './services/index';
var LaunchDialogModule = /** @class */ (function () {
    function LaunchDialogModule() {
    }
    LaunchDialogModule_1 = LaunchDialogModule;
    LaunchDialogModule.forRoot = function () {
        return {
            ngModule: LaunchDialogModule_1,
            providers: [provideConfig(DEFAULT_LAUNCH_CONFIG)],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbGF1bmNoLWRpYWxvZy9sYXVuY2gtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixxQkFBcUIsR0FDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQXFCMUI7SUFBQTtJQU9BLENBQUM7MkJBUFksa0JBQWtCO0lBQ3RCLDBCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNsRCxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxrQkFBa0I7UUFuQjlCLFFBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUscUJBQXFCO29CQUNsQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztPQUNXLGtCQUFrQixDQU85QjtJQUFELHlCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgREVGQVVMVF9MQVVOQ0hfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1sYXVuY2gtY29uZmlnJztcbmltcG9ydCB7XG4gIElubGluZVJlbmRlclN0cmF0ZWd5LFxuICBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgT3V0bGV0UmVuZGVyU3RyYXRlZ3ksXG4gIFJvdXRpbmdSZW5kZXJTdHJhdGVneSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IExhdW5jaFJlbmRlclN0cmF0ZWd5LFxuICAgICAgdXNlRXhpc3Rpbmc6IE91dGxldFJlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgICAgIHVzZUV4aXN0aW5nOiBJbmxpbmVSZW5kZXJTdHJhdGVneSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTGF1bmNoUmVuZGVyU3RyYXRlZ3ksXG4gICAgICB1c2VFeGlzdGluZzogUm91dGluZ1JlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF1bmNoRGlhbG9nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMYXVuY2hEaWFsb2dNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExhdW5jaERpYWxvZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoREVGQVVMVF9MQVVOQ0hfQ09ORklHKV0sXG4gICAgfTtcbiAgfVxufVxuIl19