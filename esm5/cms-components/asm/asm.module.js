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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxJQUFJLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBb0IvRjtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBbEJyQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsYUFBYSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsZUFBZTthQUNoQjtZQUNELFlBQVksRUFBRTtnQkFDWixrQkFBa0I7Z0JBQ2xCLHlCQUF5QjtnQkFDekIsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLGVBQWU7Z0JBQ2YsMEJBQTBCO2FBQzNCO1lBQ0QsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDdEMsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXNtTW9kdWxlIGFzIEFzbUNvcmVNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQXNtTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi9hc20tbG9hZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBBc21NYWluVWlDb21wb25lbnQgfSBmcm9tICcuL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc21TZXNzaW9uVGltZXJDb21wb25lbnQgfSBmcm9tICcuL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRUaW1lclBpcGUgfSBmcm9tICcuL2FzbS1zZXNzaW9uLXRpbWVyL2Zvcm1hdC10aW1lci5waXBlJztcbmltcG9ydCB7IENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NzYWdlbnQtbG9naW4tZm9ybS9jc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItc2VsZWN0aW9uL2N1c3RvbWVyLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBBc21Db3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBc21Mb2FkZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFzbU1haW5VaUNvbXBvbmVudCxcbiAgICBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50LFxuICAgIEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCxcbiAgICBGb3JtYXRUaW1lclBpcGUsXG4gICAgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FzbU1haW5VaUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1vZHVsZSB7fVxuIl19