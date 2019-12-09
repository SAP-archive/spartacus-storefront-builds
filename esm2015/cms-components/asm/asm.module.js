/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsmModule as AsmCoreModule, I18nModule } from '@spartacus/core';
import { AsmLoaderModule } from './asm-loader.module';
import { AsmMainUiComponent } from './asm-main-ui/asm-main-ui.component';
import { AsmSessionTimerComponent } from './asm-session-timer/asm-session-timer.component';
import { FormatTimerPipe } from './asm-session-timer/format-timer.pipe';
import { CSAgentLoginFormComponent } from './csagent-login-form/csagent-login-form.component';
import { CustomerEmulationComponent } from './customer-emulation/customer-emulation.component';
import { CustomerSelectionComponent } from './customer-selection/customer-selection.component';
export class AsmModule {
}
AsmModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    I18nModule,
                    AsmCoreModule.forRoot(),
                    AsmLoaderModule,
                ],
                declarations: [
                    AsmMainUiComponent,
                    CSAgentLoginFormComponent,
                    CustomerSelectionComponent,
                    AsmSessionTimerComponent,
                    FormatTimerPipe,
                    CustomerEmulationComponent,
                ],
                entryComponents: [AsmMainUiComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxJQUFJLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBb0IvRixNQUFNLE9BQU8sU0FBUzs7O1lBbEJyQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixVQUFVO29CQUNWLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLHlCQUF5QjtvQkFDekIsMEJBQTBCO29CQUMxQix3QkFBd0I7b0JBQ3hCLGVBQWU7b0JBQ2YsMEJBQTBCO2lCQUMzQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFzbU1vZHVsZSBhcyBBc21Db3JlTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbUxvYWRlck1vZHVsZSB9IGZyb20gJy4vYXNtLWxvYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tbWFpbi11aS9hc20tbWFpbi11aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0VGltZXJQaXBlIH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9mb3JtYXQtdGltZXIucGlwZSc7XG5pbXBvcnQgeyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItZW11bGF0aW9uL2N1c3RvbWVyLWVtdWxhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLXNlbGVjdGlvbi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQXNtQ29yZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXNtTG9hZGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBc21NYWluVWlDb21wb25lbnQsXG4gICAgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICBBc21TZXNzaW9uVGltZXJDb21wb25lbnQsXG4gICAgRm9ybWF0VGltZXJQaXBlLFxuICAgIEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBc21NYWluVWlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge31cbiJdfQ==