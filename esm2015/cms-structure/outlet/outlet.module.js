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
                providers: [OutletService],
                exports: [OutletDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBRWYsd0JBQXdCLEVBRXhCLFFBQVEsRUFDUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBRUwsc0JBQXNCLEdBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxxQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELGFBQXlEO0lBRXpELE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixDQUFDLHFCQUFxQixhQUFyQixxQkFBcUIsY0FBckIscUJBQXFCLEdBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O1lBQ2hELE1BQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDLHVCQUF1QixDQUM5RCxPQUFPLENBQUMsU0FBUyxDQUNsQixDQUFDO1lBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FDZixPQUFPLENBQUMsRUFBRSxFQUNWLE9BQU8sUUFDUCxPQUFPLENBQUMsUUFBUSxtQ0FBSSxjQUFjLENBQUMsS0FBSyxDQUN6QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBUUQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsc0JBQXNCO29CQUNsQyxJQUFJLEVBQUU7d0JBQ0osQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLHNCQUFzQixDQUFDO3dCQUN4Qyx3QkFBd0I7d0JBQ3hCLGFBQWE7cUJBQ2Q7b0JBQ0QsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF2QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7XG4gIFByb3ZpZGVPdXRsZXRPcHRpb25zLFxuICBQUk9WSURFX09VVExFVF9PUFRJT05TLFxufSBmcm9tICcuL291dGxldC5wcm92aWRlcnMnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck91dGxldHNGYWN0b3J5KFxuICBwcm92aWRlZE91dGxldE9wdGlvbnM6IFByb3ZpZGVPdXRsZXRPcHRpb25zW10sXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPENvbXBvbmVudEZhY3Rvcnk8VHlwZTxhbnk+Pj5cbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgKHByb3ZpZGVkT3V0bGV0T3B0aW9ucyA/PyBbXSkuZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZmFjdG9yeSA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRcbiAgICAgICk7XG4gICAgICBvdXRsZXRTZXJ2aWNlLmFkZChcbiAgICAgICAgb3B0aW9ucy5pZCxcbiAgICAgICAgZmFjdG9yeSxcbiAgICAgICAgb3B0aW9ucy5wb3NpdGlvbiA/PyBPdXRsZXRQb3NpdGlvbi5BRlRFUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW091dGxldERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW091dGxldFNlcnZpY2VdLFxuICBleHBvcnRzOiBbT3V0bGV0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPdXRsZXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE91dGxldE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHJlZ2lzdGVyT3V0bGV0c0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBQUk9WSURFX09VVExFVF9PUFRJT05TXSxcbiAgICAgICAgICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgIE91dGxldFNlcnZpY2UsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19