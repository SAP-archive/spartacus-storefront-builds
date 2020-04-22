var LaunchDialogModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { DEFAULT_LAUNCH_CONFIG } from './config/default-launch-config';
import { InlineRenderStrategy, LaunchRenderStrategy, OutletRenderStrategy, RoutingRenderStrategy, } from './services/index';
let LaunchDialogModule = LaunchDialogModule_1 = class LaunchDialogModule {
    static forRoot() {
        return {
            ngModule: LaunchDialogModule_1,
            providers: [provideConfig(DEFAULT_LAUNCH_CONFIG)],
        };
    }
};
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
export { LaunchDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbGF1bmNoLWRpYWxvZy9sYXVuY2gtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIscUJBQXFCLEdBQ3RCLE1BQU0sa0JBQWtCLENBQUM7QUFxQjFCLElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2xELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLGtCQUFrQjtJQW5COUIsUUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBTzlCO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgREVGQVVMVF9MQVVOQ0hfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1sYXVuY2gtY29uZmlnJztcbmltcG9ydCB7XG4gIElubGluZVJlbmRlclN0cmF0ZWd5LFxuICBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgT3V0bGV0UmVuZGVyU3RyYXRlZ3ksXG4gIFJvdXRpbmdSZW5kZXJTdHJhdGVneSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IExhdW5jaFJlbmRlclN0cmF0ZWd5LFxuICAgICAgdXNlRXhpc3Rpbmc6IE91dGxldFJlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgICAgIHVzZUV4aXN0aW5nOiBJbmxpbmVSZW5kZXJTdHJhdGVneSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTGF1bmNoUmVuZGVyU3RyYXRlZ3ksXG4gICAgICB1c2VFeGlzdGluZzogUm91dGluZ1JlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF1bmNoRGlhbG9nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMYXVuY2hEaWFsb2dNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExhdW5jaERpYWxvZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoREVGQVVMVF9MQVVOQ0hfQ09ORklHKV0sXG4gICAgfTtcbiAgfVxufVxuIl19