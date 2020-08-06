import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { OutletModule } from '../../outlet/outlet.module';
import { PageLayoutComponent } from './page-layout.component';
import { PageTemplateStyleService } from './page-template-style.service';
export function initPageTemplateStyle(service, featureConfigService) {
    var result = function (componentRef) {
        if (featureConfigService.isLevel('2.1')) {
            service.initialize(componentRef);
        }
    };
    return result;
}
var PageLayoutModule = /** @class */ (function () {
    function PageLayoutModule() {
    }
    PageLayoutModule = __decorate([
        NgModule({
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
        })
    ], PageLayoutModule);
    return PageLayoutModule;
}());
export { PageLayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBZ0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekUsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxPQUFpQyxFQUNqQyxvQkFBMEM7SUFFMUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxZQUErQjtRQUM3QyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWdCRDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBZDVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1lBQ3JELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBRTlCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQztpQkFDdkQ7YUFDRjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9CT09UU1RSQVBfTElTVEVORVIsIENvbXBvbmVudFJlZiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VTbG90TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3Nsb3QvcGFnZS1zbG90Lm1vZHVsZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVRlbXBsYXRlU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLXRlbXBsYXRlLXN0eWxlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFBhZ2VUZW1wbGF0ZVN0eWxlKFxuICBzZXJ2aWNlOiBQYWdlVGVtcGxhdGVTdHlsZVNlcnZpY2UsXG4gIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9IChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB7XG4gICAgaWYgKGZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzIuMScpKSB7XG4gICAgICBzZXJ2aWNlLmluaXRpYWxpemUoY29tcG9uZW50UmVmKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE91dGxldE1vZHVsZSwgUGFnZVNsb3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdlTGF5b3V0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhZ2VMYXlvdXRDb21wb25lbnRdLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9CT09UU1RSQVBfTElTVEVORVIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRQYWdlVGVtcGxhdGVTdHlsZSxcbiAgICAgIGRlcHM6IFtQYWdlVGVtcGxhdGVTdHlsZVNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0TW9kdWxlIHt9XG4iXX0=