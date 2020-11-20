import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, Optional, } from '@angular/core';
import { OutletDirective } from './outlet.directive';
import { OutletPosition } from './outlet.model';
import { PROVIDE_OUTLET_OPTIONS, } from './outlet.providers';
import { OutletService } from './outlet.service';
/**
 * @private
 */
export function registerOutletsFactory(providedOutletOptions, componentFactoryResolver, outletService) {
    const result = () => {
        (providedOutletOptions !== null && providedOutletOptions !== void 0 ? providedOutletOptions : []).forEach((options) => {
            var _a;
            const factory = componentFactoryResolver.resolveComponentFactory(options.component);
            outletService.add(options.id, factory, (_a = options.position) !== null && _a !== void 0 ? _a : OutletPosition.AFTER);
        });
    };
    return result;
}
export class OutletModule {
    static forRoot() {
        return {
            ngModule: OutletModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: registerOutletsFactory,
                    deps: [
                        [new Optional(), PROVIDE_OUTLET_OPTIONS],
                        ComponentFactoryResolver,
                        OutletService,
                    ],
                    multi: true,
                },
            ],
        };
    }
}
OutletModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [OutletDirective],
                exports: [OutletDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBRWYsd0JBQXdCLEVBRXhCLFFBQVEsRUFDUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsc0JBQXNCLEdBRXZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxxQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELGFBQXlEO0lBRXpELE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixDQUFDLHFCQUFxQixhQUFyQixxQkFBcUIsY0FBckIscUJBQXFCLEdBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O1lBQ2hELE1BQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDLHVCQUF1QixDQUM5RCxPQUFPLENBQUMsU0FBUyxDQUNsQixDQUFDO1lBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FDZixPQUFPLENBQUMsRUFBRSxFQUNWLE9BQU8sUUFDUCxPQUFPLENBQUMsUUFBUSxtQ0FBSSxjQUFjLENBQUMsS0FBSyxDQUN6QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBT0QsTUFBTSxPQUFPLFlBQVk7SUFDdkIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsc0JBQXNCO29CQUNsQyxJQUFJLEVBQUU7d0JBQ0osQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLHNCQUFzQixDQUFDO3dCQUN4Qyx3QkFBd0I7d0JBQ3hCLGFBQWE7cUJBQ2Q7b0JBQ0QsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL291dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQge1xuICBQUk9WSURFX09VVExFVF9PUFRJT05TLFxuICBQcm92aWRlT3V0bGV0T3B0aW9ucyxcbn0gZnJvbSAnLi9vdXRsZXQucHJvdmlkZXJzJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJPdXRsZXRzRmFjdG9yeShcbiAgcHJvdmlkZWRPdXRsZXRPcHRpb25zOiBQcm92aWRlT3V0bGV0T3B0aW9uc1tdLFxuICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxDb21wb25lbnRGYWN0b3J5PFR5cGU8YW55Pj4+XG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIChwcm92aWRlZE91dGxldE9wdGlvbnMgPz8gW10pLmZvckVhY2goKG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IGZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50XG4gICAgICApO1xuICAgICAgb3V0bGV0U2VydmljZS5hZGQoXG4gICAgICAgIG9wdGlvbnMuaWQsXG4gICAgICAgIGZhY3RvcnksXG4gICAgICAgIG9wdGlvbnMucG9zaXRpb24gPz8gT3V0bGV0UG9zaXRpb24uQUZURVJcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtPdXRsZXREaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbT3V0bGV0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPdXRsZXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE91dGxldE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHJlZ2lzdGVyT3V0bGV0c0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBQUk9WSURFX09VVExFVF9PUFRJT05TXSxcbiAgICAgICAgICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgIE91dGxldFNlcnZpY2UsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19