/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@spartacus/core';
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
                imports: [CommonModule, ReactiveFormsModule, I18nModule, AsmLoaderModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQWEvRixNQUFNLE9BQU8sU0FBUzs7O1lBWnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQztnQkFDekUsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZiwwQkFBMEI7aUJBQzNCO2dCQUNELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBc21Mb2FkZXJNb2R1bGUgfSBmcm9tICcuL2FzbS1sb2FkZXIubW9kdWxlJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdFRpbWVyUGlwZSB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUnO1xuaW1wb3J0IHsgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY3NhZ2VudC1sb2dpbi1mb3JtL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLWVtdWxhdGlvbi9jdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBJMThuTW9kdWxlLCBBc21Mb2FkZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBc21NYWluVWlDb21wb25lbnQsXG4gICAgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICBBc21TZXNzaW9uVGltZXJDb21wb25lbnQsXG4gICAgRm9ybWF0VGltZXJQaXBlLFxuICAgIEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBc21NYWluVWlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge31cbiJdfQ==