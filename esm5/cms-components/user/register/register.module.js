/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { RegisterComponent } from './register.component';
import { UserModule, UrlTranslationModule, ConfigModule, I18nModule, } from '@spartacus/core';
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
                        UserModule,
                        UrlTranslationModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                RegisterCustomerComponent: {
                                    selector: 'cx-register',
                                },
                            },
                        }))),
                        I18nModule,
                    ],
                    declarations: [RegisterComponent],
                    exports: [RegisterComponent],
                    entryComponents: [RegisterComponent],
                },] }
    ];
    return RegisterComponentModule;
}());
export { RegisterComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUNMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsWUFBWSxFQUVaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBQUE7SUFxQnNDLENBQUM7O2dCQXJCdEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IseUJBQXlCLEVBQUU7b0NBQ3pCLFFBQVEsRUFBRSxhQUFhO2lDQUN4Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUNyQzs7SUFDcUMsOEJBQUM7Q0FBQSxBQXJCdkMsSUFxQnVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5tb2R1bGUnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBVc2VyTW9kdWxlLFxuICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTG9naW5Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmVnaXN0ZXJDdXN0b21lckNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtcmVnaXN0ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZWdpc3RlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZWdpc3RlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JlZ2lzdGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnRNb2R1bGUge31cbiJdfQ==