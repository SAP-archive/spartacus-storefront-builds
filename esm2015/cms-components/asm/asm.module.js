/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { AsmMainUiComponent } from './asm-main-ui/asm-main-ui.component';
import { AsmRootComponent } from './asm-root/asm-root.component';
import { CSAgentLoginFormComponent } from './csagent-login-form/csagent-login-form.component';
import { CustomerSelectionComponent } from './customer-selection/customer-selection.component';
import { AsmSessionTimerComponent } from './asm-session-timer/asm-session-timer.component';
import { FormatTimerPipe } from './asm-session-timer/format-timer.pipe';
import { CustomerEmulationComponent } from './customer-emulation/customer-emulation.component';
export class AsmModule {
}
AsmModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AsmComponent: {
                                component: AsmRootComponent,
                            },
                        },
                    }))),
                ],
                declarations: [
                    AsmMainUiComponent,
                    CSAgentLoginFormComponent,
                    CustomerSelectionComponent,
                    AsmRootComponent,
                    AsmSessionTimerComponent,
                    FormatTimerPipe,
                    CustomerEmulationComponent,
                ],
                exports: [AsmRootComponent],
                entryComponents: [AsmRootComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQTBCL0YsTUFBTSxPQUFPLFNBQVM7OztZQXpCckIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsWUFBWSxFQUFFO2dDQUNaLFNBQVMsRUFBRSxnQkFBZ0I7NkJBQzVCO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsZ0JBQWdCO29CQUNoQix3QkFBd0I7b0JBQ3hCLGVBQWU7b0JBQ2YsMEJBQTBCO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0IsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBc21NYWluVWlDb21wb25lbnQgfSBmcm9tICcuL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc21Sb290Q29tcG9uZW50IH0gZnJvbSAnLi9hc20tcm9vdC9hc20tcm9vdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY3NhZ2VudC1sb2dpbi1mb3JtL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLXNlbGVjdGlvbi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdFRpbWVyUGlwZSB9IGZyb20gJy4vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLWVtdWxhdGlvbi9jdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBc21Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFzbVJvb3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBc21NYWluVWlDb21wb25lbnQsXG4gICAgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICBBc21Sb290Q29tcG9uZW50LFxuICAgIEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCxcbiAgICBGb3JtYXRUaW1lclBpcGUsXG4gICAgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtBc21Sb290Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQXNtUm9vdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1vZHVsZSB7fVxuIl19