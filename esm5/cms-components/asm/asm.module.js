import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsmModule as AsmCoreModule, I18nModule, provideConfig, } from '@spartacus/core';
import { FormErrorsModule } from '../../shared/index';
import { AsmLoaderModule } from './asm-loader.module';
import { AsmMainUiComponent } from './asm-main-ui/asm-main-ui.component';
import { AsmSessionTimerComponent } from './asm-session-timer/asm-session-timer.component';
import { FormatTimerPipe } from './asm-session-timer/format-timer.pipe';
import { CSAgentLoginFormComponent } from './csagent-login-form/csagent-login-form.component';
import { CustomerEmulationComponent } from './customer-emulation/customer-emulation.component';
import { CustomerSelectionComponent } from './customer-selection/customer-selection.component';
import { defaultAsmLayoutConfig } from './default-asm-layout.config';
var AsmModule = /** @class */ (function () {
    function AsmModule() {
    }
    AsmModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                I18nModule,
                AsmCoreModule.forRoot(),
                AsmLoaderModule,
                FormErrorsModule,
            ],
            declarations: [
                AsmMainUiComponent,
                CSAgentLoginFormComponent,
                CustomerSelectionComponent,
                AsmSessionTimerComponent,
                FormatTimerPipe,
                CustomerEmulationComponent,
            ],
            providers: [provideConfig(defaultAsmLayoutConfig)],
            entryComponents: [AsmMainUiComponent],
        })
    ], AsmModule);
    return AsmModule;
}());
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxJQUFJLGFBQWEsRUFDMUIsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFzQnJFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFwQnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QixlQUFlO2dCQUNmLGdCQUFnQjthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDWixrQkFBa0I7Z0JBQ2xCLHlCQUF5QjtnQkFDekIsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLGVBQWU7Z0JBQ2YsMEJBQTBCO2FBQzNCO1lBQ0QsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDbEQsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDdEMsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXNtTW9kdWxlIGFzIEFzbUNvcmVNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFzbUxvYWRlck1vZHVsZSB9IGZyb20gJy4vYXNtLWxvYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tbWFpbi11aS9hc20tbWFpbi11aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0VGltZXJQaXBlIH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9mb3JtYXQtdGltZXIucGlwZSc7XG5pbXBvcnQgeyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItZW11bGF0aW9uL2N1c3RvbWVyLWVtdWxhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLXNlbGVjdGlvbi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRBc21MYXlvdXRDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtYXNtLWxheW91dC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBBc21Db3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBc21Mb2FkZXJNb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXNtTWFpblVpQ29tcG9uZW50LFxuICAgIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50LFxuICAgIEZvcm1hdFRpbWVyUGlwZSxcbiAgICBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhkZWZhdWx0QXNtTGF5b3V0Q29uZmlnKV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FzbU1haW5VaUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1vZHVsZSB7fVxuIl19