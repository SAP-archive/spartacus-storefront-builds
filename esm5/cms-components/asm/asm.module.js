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
import { FormErrorsModule } from '../../shared/index';
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
            entryComponents: [AsmMainUiComponent],
        })
    ], AsmModule);
    return AsmModule;
}());
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxJQUFJLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBcUJ0RDtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBbkJyQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsYUFBYSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsZUFBZTtnQkFDZixnQkFBZ0I7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0JBQWtCO2dCQUNsQix5QkFBeUI7Z0JBQ3pCLDBCQUEwQjtnQkFDMUIsd0JBQXdCO2dCQUN4QixlQUFlO2dCQUNmLDBCQUEwQjthQUMzQjtZQUNELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ3RDLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFzbU1vZHVsZSBhcyBBc21Db3JlTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbUxvYWRlck1vZHVsZSB9IGZyb20gJy4vYXNtLWxvYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tbWFpbi11aS9hc20tbWFpbi11aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0VGltZXJQaXBlIH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9mb3JtYXQtdGltZXIucGlwZSc7XG5pbXBvcnQgeyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItZW11bGF0aW9uL2N1c3RvbWVyLWVtdWxhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLXNlbGVjdGlvbi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBBc21Db3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBc21Mb2FkZXJNb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXNtTWFpblVpQ29tcG9uZW50LFxuICAgIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50LFxuICAgIEZvcm1hdFRpbWVyUGlwZSxcbiAgICBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQXNtTWFpblVpQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHt9XG4iXX0=