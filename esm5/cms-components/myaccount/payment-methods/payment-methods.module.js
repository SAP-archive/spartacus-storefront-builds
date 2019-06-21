/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { PaymentMethodsComponent } from './payment-methods.component';
var PaymentMethodsModule = /** @class */ (function () {
    function PaymentMethodsModule() {
    }
    PaymentMethodsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CardModule,
                        SpinnerModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                AccountPaymentDetailsComponent: {
                                    component: PaymentMethodsComponent,
                                    guards: [AuthGuard],
                                },
                            },
                        }))),
                        I18nModule,
                    ],
                    providers: [UserService],
                    declarations: [PaymentMethodsComponent],
                    exports: [PaymentMethodsComponent],
                    entryComponents: [PaymentMethodsComponent],
                },] }
    ];
    return PaymentMethodsModule;
}());
export { PaymentMethodsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEU7SUFBQTtJQW9CbUMsQ0FBQzs7Z0JBcEJuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixhQUFhO3dCQUNiLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiw4QkFBOEIsRUFBRTtvQ0FDOUIsU0FBUyxFQUFFLHVCQUF1QjtvQ0FDbEMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO2lDQUNwQjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsVUFBVTtxQkFDWDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ3hCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQzNDOztJQUNrQywyQkFBQztDQUFBLEFBcEJwQyxJQW9Cb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRQYXltZW50RGV0YWlsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGF5bWVudE1ldGhvZHNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXltZW50TWV0aG9kc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYXltZW50TWV0aG9kc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BheW1lbnRNZXRob2RzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNNb2R1bGUge31cbiJdfQ==