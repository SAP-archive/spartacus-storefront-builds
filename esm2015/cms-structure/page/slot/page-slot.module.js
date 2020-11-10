import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletModule } from '../../outlet/outlet.module';
import { PageComponentModule } from '../component/page-component.module';
import { PageSlotComponent } from './page-slot.component';
import { PageSlotService } from './page-slot.service';
export class PageSlotModule {
    // instantiate PageSlotService ASAP, so it can examine SSR pre-rendered DOM
    constructor(_pageSlot) { }
}
PageSlotModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OutletModule, PageComponentModule],
                declarations: [PageSlotComponent],
                exports: [PageSlotComponent],
            },] }
];
PageSlotModule.ctorParameters = () => [
    { type: PageSlotService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU90RCxNQUFNLE9BQU8sY0FBYztJQUN6QiwyRUFBMkU7SUFDM0UsWUFBWSxTQUEwQixJQUFHLENBQUM7OztZQVAzQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztnQkFDMUQsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCOzs7WUFOUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlU2xvdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1zbG90LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2xvdFNlcnZpY2UgfSBmcm9tICcuL3BhZ2Utc2xvdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3V0bGV0TW9kdWxlLCBQYWdlQ29tcG9uZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnZVNsb3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnZVNsb3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2xvdE1vZHVsZSB7XG4gIC8vIGluc3RhbnRpYXRlIFBhZ2VTbG90U2VydmljZSBBU0FQLCBzbyBpdCBjYW4gZXhhbWluZSBTU1IgcHJlLXJlbmRlcmVkIERPTVxuICBjb25zdHJ1Y3RvcihfcGFnZVNsb3Q6IFBhZ2VTbG90U2VydmljZSkge31cbn1cbiJdfQ==