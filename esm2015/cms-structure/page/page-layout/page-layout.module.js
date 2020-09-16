import { CommonModule } from '@angular/common';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { OutletModule } from '../../outlet/outlet.module';
import { PageLayoutComponent } from './page-layout.component';
import { PageTemplateStyleService } from './page-template-style.service';
export function initPageTemplateStyle(service, featureConfigService) {
    const result = (componentRef) => {
        if (featureConfigService.isLevel('2.1')) {
            service.initialize(componentRef);
        }
    };
    return result;
}
export class PageLayoutModule {
}
PageLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OutletModule, PageSlotModule],
                declarations: [PageLayoutComponent],
                exports: [PageLayoutComponent],
                providers: [
                    {
                        provide: APP_BOOTSTRAP_LISTENER,
                        multi: true,
                        useFactory: initPageTemplateStyle,
                        deps: [PageTemplateStyleService, FeatureConfigService],
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFnQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RSxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE9BQWlDLEVBQ2pDLG9CQUEwQztJQUUxQyxNQUFNLE1BQU0sR0FBRyxDQUFDLFlBQStCLEVBQUUsRUFBRTtRQUNqRCxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWdCRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFkNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUNyRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBRTlCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsc0JBQXNCO3dCQUMvQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxVQUFVLEVBQUUscUJBQXFCO3dCQUNqQyxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQztxQkFDdkQ7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfQk9PVFNUUkFQX0xJU1RFTkVSLCBDb21wb25lbnRSZWYsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlU2xvdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5tb2R1bGUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vb3V0bGV0L291dGxldC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VUZW1wbGF0ZVN0eWxlU2VydmljZSB9IGZyb20gJy4vcGFnZS10ZW1wbGF0ZS1zdHlsZS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRQYWdlVGVtcGxhdGVTdHlsZShcbiAgc2VydmljZTogUGFnZVRlbXBsYXRlU3R5bGVTZXJ2aWNlLFxuICBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4ge1xuICAgIGlmIChmZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcyLjEnKSkge1xuICAgICAgc2VydmljZS5pbml0aWFsaXplKGNvbXBvbmVudFJlZik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdXRsZXRNb2R1bGUsIFBhZ2VTbG90TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnZUxheW91dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYWdlTGF5b3V0Q29tcG9uZW50XSxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQk9PVFNUUkFQX0xJU1RFTkVSLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0UGFnZVRlbXBsYXRlU3R5bGUsXG4gICAgICBkZXBzOiBbUGFnZVRlbXBsYXRlU3R5bGVTZXJ2aWNlLCBGZWF0dXJlQ29uZmlnU2VydmljZV0sXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dE1vZHVsZSB7fVxuIl19