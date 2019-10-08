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
var AssistedServiceModule = /** @class */ (function () {
    function AssistedServiceModule() {
    }
    AssistedServiceModule.decorators = [
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
                    ],
                    exports: [AsmRootComponent],
                    entryComponents: [AsmRootComponent],
                },] }
    ];
    return AssistedServiceModule;
}());
export { AssistedServiceModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0ZWQtc2VydmljZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNzaXN0ZWQtc2VydmljZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0Y7SUFBQTtJQXNCb0MsQ0FBQzs7Z0JBdEJwQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixVQUFVO3dCQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixZQUFZLEVBQUU7b0NBQ1osU0FBUyxFQUFFLGdCQUFnQjtpQ0FDNUI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3dCQUMxQixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDcEM7O0lBQ21DLDRCQUFDO0NBQUEsQUF0QnJDLElBc0JxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBc21NYWluVWlDb21wb25lbnQgfSBmcm9tICcuL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc21Sb290Q29tcG9uZW50IH0gZnJvbSAnLi9hc20tcm9vdC9hc20tcm9vdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY3NhZ2VudC1sb2dpbi1mb3JtL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyLXNlbGVjdGlvbi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBc21Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFzbVJvb3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBc21NYWluVWlDb21wb25lbnQsXG4gICAgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICBBc21Sb290Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQXNtUm9vdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0FzbVJvb3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBc3Npc3RlZFNlcnZpY2VNb2R1bGUge31cbiJdfQ==