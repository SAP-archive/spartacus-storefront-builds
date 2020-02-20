import { __decorate } from "tslib";
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
let AsmModule = class AsmModule {
};
AsmModule = __decorate([
    NgModule({
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
    })
], AsmModule);
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxJQUFJLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBb0IvRixJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQUcsQ0FBQTtBQUFaLFNBQVM7SUFsQnJCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsZUFBZTtTQUNoQjtRQUNELFlBQVksRUFBRTtZQUNaLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsMEJBQTBCO1lBQzFCLHdCQUF3QjtZQUN4QixlQUFlO1lBQ2YsMEJBQTBCO1NBQzNCO1FBQ0QsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDdEMsQ0FBQztHQUNXLFNBQVMsQ0FBRztTQUFaLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBc21Nb2R1bGUgYXMgQXNtQ29yZU1vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBc21Mb2FkZXJNb2R1bGUgfSBmcm9tICcuL2FzbS1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdFRpbWVyUGlwZSB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUnO1xuaW1wb3J0IHsgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY3NhZ2VudC1sb2dpbi1mb3JtL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLWVtdWxhdGlvbi9jdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEFzbUNvcmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFzbUxvYWRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXNtTWFpblVpQ29tcG9uZW50LFxuICAgIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50LFxuICAgIEZvcm1hdFRpbWVyUGlwZSxcbiAgICBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQXNtTWFpblVpQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHt9XG4iXX0=