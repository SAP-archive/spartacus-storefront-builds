/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigModule, I18nModule, NotAuthGuard, UrlModule, } from '@spartacus/core';
import { LoginModule } from '../login/login.module';
import { RegisterComponent } from './register.component';
var RegisterComponentModule = /** @class */ (function () {
    function RegisterComponentModule() {
    }
    RegisterComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        LoginModule,
                        ReactiveFormsModule,
                        RouterModule,
                        UrlModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                RegisterCustomerComponent: {
                                    component: RegisterComponent,
                                    guards: [NotAuthGuard],
                                },
                            },
                        }))),
                        I18nModule,
                        NgSelectModule,
                    ],
                    declarations: [RegisterComponent],
                    exports: [RegisterComponent],
                    entryComponents: [RegisterComponent],
                },] }
    ];
    return RegisterComponentModule;
}());
export { RegisterComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RDtJQUFBO0lBc0JzQyxDQUFDOztnQkF0QnRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixTQUFTO3dCQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix5QkFBeUIsRUFBRTtvQ0FDekIsU0FBUyxFQUFFLGlCQUFpQjtvQ0FDNUIsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN2Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTt3QkFDVixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ3JDOztJQUNxQyw4QkFBQztDQUFBLEFBdEJ2QyxJQXNCdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIE5vdEF1dGhHdWFyZCxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTG9naW5Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZWdpc3RlckN1c3RvbWVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtOb3RBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZWdpc3RlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZWdpc3RlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JlZ2lzdGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnRNb2R1bGUge31cbiJdfQ==