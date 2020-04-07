import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { CheckoutLoginComponent } from './checkout-login.component';
import { NotCheckoutAuthGuard } from '../../checkout/guards/not-checkout-auth.guard';
import { FormErrorsModule } from '../../../shared/index';
let CheckoutLoginModule = class CheckoutLoginModule {
};
CheckoutLoginModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            FormsModule,
            ReactiveFormsModule,
            FormsModule,
            ReactiveFormsModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    GuestCheckoutLoginComponent: {
                        component: CheckoutLoginComponent,
                        guards: [NotCheckoutAuthGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutLoginComponent],
        exports: [CheckoutLoginComponent],
        entryComponents: [CheckoutLoginComponent],
    })
], CheckoutLoginModule);
export { CheckoutLoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUEwQnpELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBQUcsQ0FBQTtBQUF0QixtQkFBbUI7SUF4Qi9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixVQUFVO1lBQ1YsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFZO2dCQUM5QixhQUFhLEVBQUU7b0JBQ2IsMkJBQTJCLEVBQUU7d0JBQzNCLFNBQVMsRUFBRSxzQkFBc0I7d0JBQ2pDLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUMvQjtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQzFDLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBJMThuTW9kdWxlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90Q2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9jaGVja291dC9ndWFyZHMvbm90LWNoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgRm9ybUVycm9yc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEd1ZXN0Q2hlY2tvdXRMb2dpbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtOb3RDaGVja291dEF1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDaGVja291dExvZ2luQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0TG9naW5Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dExvZ2luQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRMb2dpbk1vZHVsZSB7fVxuIl19