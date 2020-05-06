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
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxJQUFJLGFBQWEsRUFDMUIsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFzQnJFLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBRyxDQUFBO0FBQVosU0FBUztJQXBCckIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixlQUFlO1lBQ2YsZ0JBQWdCO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osa0JBQWtCO1lBQ2xCLHlCQUF5QjtZQUN6QiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZiwwQkFBMEI7U0FDM0I7UUFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csU0FBUyxDQUFHO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFzbU1vZHVsZSBhcyBBc21Db3JlTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUVycm9yc01vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBBc21Mb2FkZXJNb2R1bGUgfSBmcm9tICcuL2FzbS1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdFRpbWVyUGlwZSB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUnO1xuaW1wb3J0IHsgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY3NhZ2VudC1sb2dpbi1mb3JtL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLWVtdWxhdGlvbi9jdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0QXNtTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWFzbS1sYXlvdXQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQXNtQ29yZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXNtTG9hZGVyTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFzbU1haW5VaUNvbXBvbmVudCxcbiAgICBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50LFxuICAgIEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCxcbiAgICBGb3JtYXRUaW1lclBpcGUsXG4gICAgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoZGVmYXVsdEFzbUxheW91dENvbmZpZyldLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBc21NYWluVWlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge31cbiJdfQ==