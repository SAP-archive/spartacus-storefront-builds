import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletModule } from '../../outlet/outlet.module';
import { PageComponentModule } from '../component/page-component.module';
import { PageSlotComponent } from './page-slot.component';
import { SkipLinkModule } from '../../../layout/a11y/skip-link/skip-link.module';
var PageSlotModule = /** @class */ (function () {
    function PageSlotModule() {
    }
    PageSlotModule = __decorate([
        NgModule({
            imports: [CommonModule, OutletModule, PageComponentModule, SkipLinkModule],
            providers: [],
            declarations: [PageSlotComponent],
            exports: [PageSlotComponent],
        })
    ], PageSlotModule);
    return PageSlotModule;
}());
export { PageSlotModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFRakY7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFOMUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxjQUFjLENBQUM7WUFDMUUsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUM3QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlU2xvdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1zbG90LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTa2lwTGlua01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3V0bGV0TW9kdWxlLCBQYWdlQ29tcG9uZW50TW9kdWxlLCBTa2lwTGlua01vZHVsZV0sXG4gIHByb3ZpZGVyczogW10sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2VTbG90Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhZ2VTbG90Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RNb2R1bGUge31cbiJdfQ==