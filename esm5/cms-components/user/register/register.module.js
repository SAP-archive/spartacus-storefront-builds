/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { RegisterComponent } from './register.component';
import { ConfigModule, I18nModule, NotAuthGuard, UrlModule, UserModule, } from '@spartacus/core';
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
                    ],
                    declarations: [RegisterComponent],
                    exports: [RegisterComponent],
                    entryComponents: [RegisterComponent],
                },] }
    ];
    return RegisterComponentModule;
}());
export { RegisterComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQUFBO0lBc0JzQyxDQUFDOztnQkF0QnRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFNBQVM7d0JBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHlCQUF5QixFQUFFO29DQUN6QixTQUFTLEVBQUUsaUJBQWlCO29DQUM1QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUNBQ3ZCOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ3JDOztJQUNxQyw4QkFBQztDQUFBLEFBdEJ2QyxJQXNCdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBOb3RBdXRoR3VhcmQsXG4gIFVybE1vZHVsZSxcbiAgVXNlck1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVc2VyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmVnaXN0ZXJDdXN0b21lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbTm90QXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZWdpc3RlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50TW9kdWxlIHt9XG4iXX0=