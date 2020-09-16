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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFDTCxTQUFTLElBQUksYUFBYSxFQUMxQixVQUFVLEVBQ1YsYUFBYSxHQUNkLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQXVCckUsTUFBTSxPQUFPLFNBQVM7OztZQXJCckIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixlQUFlO29CQUNmLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZiwwQkFBMEI7b0JBQzFCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ2xELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXNtTW9kdWxlIGFzIEFzbUNvcmVNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFzbUxvYWRlck1vZHVsZSB9IGZyb20gJy4vYXNtLWxvYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTWFpblVpQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tbWFpbi11aS9hc20tbWFpbi11aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0VGltZXJQaXBlIH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9mb3JtYXQtdGltZXIucGlwZSc7XG5pbXBvcnQgeyBBc21Ub2dnbGVVaUNvbXBvbmVudCB9IGZyb20gJy4vYXNtLXRvZ2dsZS11aS9hc20tdG9nZ2xlLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItZW11bGF0aW9uL2N1c3RvbWVyLWVtdWxhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLXNlbGVjdGlvbi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRBc21MYXlvdXRDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtYXNtLWxheW91dC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBBc21Db3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBc21Mb2FkZXJNb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXNtTWFpblVpQ29tcG9uZW50LFxuICAgIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50LFxuICAgIEZvcm1hdFRpbWVyUGlwZSxcbiAgICBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCxcbiAgICBBc21Ub2dnbGVVaUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhkZWZhdWx0QXNtTGF5b3V0Q29uZmlnKV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FzbU1haW5VaUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1vZHVsZSB7fVxuIl19