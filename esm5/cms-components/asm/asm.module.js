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
import { AsmToggleUiComponent } from './asm-toggle-ui/asm-toggle-ui.component';
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
                AsmToggleUiComponent,
            ],
            providers: [provideConfig(defaultAsmLayoutConfig)],
            entryComponents: [AsmMainUiComponent],
        })
    ], AsmModule);
    return AsmModule;
}());
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxJQUFJLGFBQWEsRUFDMUIsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUF1QnJFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFyQnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QixlQUFlO2dCQUNmLGdCQUFnQjthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDWixrQkFBa0I7Z0JBQ2xCLHlCQUF5QjtnQkFDekIsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLGVBQWU7Z0JBQ2YsMEJBQTBCO2dCQUMxQixvQkFBb0I7YUFDckI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNsRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtTQUFaLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBc21Nb2R1bGUgYXMgQXNtQ29yZU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQXNtTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi9hc20tbG9hZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBBc21NYWluVWlDb21wb25lbnQgfSBmcm9tICcuL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc21TZXNzaW9uVGltZXJDb21wb25lbnQgfSBmcm9tICcuL2FzbS1zZXNzaW9uLXRpbWVyL2FzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRUaW1lclBpcGUgfSBmcm9tICcuL2FzbS1zZXNzaW9uLXRpbWVyL2Zvcm1hdC10aW1lci5waXBlJztcbmltcG9ydCB7IEFzbVRvZ2dsZVVpQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tdG9nZ2xlLXVpL2FzbS10b2dnbGUtdWkuY29tcG9uZW50JztcbmltcG9ydCB7IENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NzYWdlbnQtbG9naW4tZm9ybS9jc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItc2VsZWN0aW9uL2N1c3RvbWVyLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEFzbUxheW91dENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1hc20tbGF5b3V0LmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEFzbUNvcmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFzbUxvYWRlck1vZHVsZSxcbiAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBc21NYWluVWlDb21wb25lbnQsXG4gICAgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICBBc21TZXNzaW9uVGltZXJDb21wb25lbnQsXG4gICAgRm9ybWF0VGltZXJQaXBlLFxuICAgIEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50LFxuICAgIEFzbVRvZ2dsZVVpQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGRlZmF1bHRBc21MYXlvdXRDb25maWcpXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQXNtTWFpblVpQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHt9XG4iXX0=