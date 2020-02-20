import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { OutletModule } from '../../outlet/outlet.module';
import { PageLayoutComponent } from './page-layout.component';
import { PageLayoutService } from './page-layout.service';
var PageLayoutModule = /** @class */ (function () {
    function PageLayoutModule() {
    }
    PageLayoutModule = __decorate([
        NgModule({
            imports: [CommonModule, OutletModule, PageSlotModule],
            declarations: [PageLayoutComponent],
            providers: [PageLayoutService],
            exports: [PageLayoutComponent],
        })
    ], PageLayoutModule);
    return PageLayoutModule;
}());
export { PageLayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVExRDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBTjVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1lBQ3JELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9CLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlU2xvdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5tb2R1bGUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vb3V0bGV0L291dGxldC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3V0bGV0TW9kdWxlLCBQYWdlU2xvdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2VMYXlvdXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtQYWdlTGF5b3V0U2VydmljZV0sXG4gIGV4cG9ydHM6IFtQYWdlTGF5b3V0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dE1vZHVsZSB7fVxuIl19