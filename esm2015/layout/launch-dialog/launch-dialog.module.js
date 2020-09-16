import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { LayoutConfig } from '../config/layout-config';
import { InlineRenderStrategy, LaunchRenderStrategy, OutletRenderStrategy, RoutingRenderStrategy, } from './services/index';
export class LaunchDialogModule {
    static forRoot() {
        return {
            ngModule: LaunchDialogModule,
            providers: [{ provide: LayoutConfig, useExisting: Config }],
        };
    }
}
LaunchDialogModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvbGF1bmNoLWRpYWxvZy9sYXVuY2gtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixxQkFBcUIsR0FDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQXFCMUIsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDNUQsQ0FBQztJQUNKLENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFdBQVcsRUFBRSxxQkFBcUI7d0JBQ2xDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7XG4gIElubGluZVJlbmRlclN0cmF0ZWd5LFxuICBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgT3V0bGV0UmVuZGVyU3RyYXRlZ3ksXG4gIFJvdXRpbmdSZW5kZXJTdHJhdGVneSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IExhdW5jaFJlbmRlclN0cmF0ZWd5LFxuICAgICAgdXNlRXhpc3Rpbmc6IE91dGxldFJlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBMYXVuY2hSZW5kZXJTdHJhdGVneSxcbiAgICAgIHVzZUV4aXN0aW5nOiBJbmxpbmVSZW5kZXJTdHJhdGVneSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTGF1bmNoUmVuZGVyU3RyYXRlZ3ksXG4gICAgICB1c2VFeGlzdGluZzogUm91dGluZ1JlbmRlclN0cmF0ZWd5LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF1bmNoRGlhbG9nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMYXVuY2hEaWFsb2dNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExhdW5jaERpYWxvZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTGF5b3V0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==