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
var AsmModule = /** @class */ (function () {
    function AsmModule() {
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
    return AsmModule;
}());
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRjtJQUFBO0lBeUJ3QixDQUFDOztnQkF6QnhCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLFlBQVksRUFBRTtvQ0FDWixTQUFTLEVBQUUsZ0JBQWdCO2lDQUM1Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIseUJBQXlCO3dCQUN6QiwwQkFBMEI7d0JBQzFCLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLDBCQUEwQjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUNwQzs7SUFDdUIsZ0JBQUM7Q0FBQSxBQXpCekIsSUF5QnlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbU1haW5VaUNvbXBvbmVudCB9IGZyb20gJy4vYXNtLW1haW4tdWkvYXNtLW1haW4tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IEFzbVJvb3RDb21wb25lbnQgfSBmcm9tICcuL2FzbS1yb290L2FzbS1yb290LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItc2VsZWN0aW9uL2N1c3RvbWVyLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9hc20tc2Vzc2lvbi10aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0VGltZXJQaXBlIH0gZnJvbSAnLi9hc20tc2Vzc2lvbi10aW1lci9mb3JtYXQtdGltZXIucGlwZSc7XG5pbXBvcnQgeyBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXItZW11bGF0aW9uL2N1c3RvbWVyLWVtdWxhdGlvbi5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFzbUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQXNtUm9vdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFzbU1haW5VaUNvbXBvbmVudCxcbiAgICBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50LFxuICAgIEFzbVJvb3RDb21wb25lbnQsXG4gICAgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50LFxuICAgIEZvcm1hdFRpbWVyUGlwZSxcbiAgICBDdXN0b21lckVtdWxhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0FzbVJvb3RDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBc21Sb290Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHt9XG4iXX0=