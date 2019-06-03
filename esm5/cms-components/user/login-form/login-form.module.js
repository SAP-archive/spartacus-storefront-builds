/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, NotAuthGuard, UrlModule, UserModule, } from '@spartacus/core';
import { CmsModule } from '../../../cms-structure/cms.module';
import { LoginFormComponent } from './login-form.component';
var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        CmsModule,
                        UserModule,
                        UrlModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ReturningCustomerLoginComponent: {
                                    selector: 'cx-login-form',
                                    guards: [NotAuthGuard],
                                },
                            },
                        }))),
                        I18nModule,
                    ],
                    declarations: [LoginFormComponent],
                    exports: [LoginFormComponent],
                    entryComponents: [LoginFormComponent],
                },] }
    ];
    return LoginFormModule;
}());
export { LoginFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFBQTtJQXVCOEIsQ0FBQzs7Z0JBdkI5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxVQUFVO3dCQUNWLFNBQVM7d0JBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLCtCQUErQixFQUFFO29DQUMvQixRQUFRLEVBQUUsZUFBZTtvQ0FDekIsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN2Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUN0Qzs7SUFDNkIsc0JBQUM7Q0FBQSxBQXZCL0IsSUF1QitCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBOb3RBdXRoR3VhcmQsXG4gIFVybE1vZHVsZSxcbiAgVXNlck1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLWZvcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVybmluZ0N1c3RvbWVyTG9naW5Db21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWxvZ2luLWZvcm0nLFxuICAgICAgICAgIGd1YXJkczogW05vdEF1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMb2dpbkZvcm1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtMb2dpbkZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkZvcm1Nb2R1bGUge31cbiJdfQ==