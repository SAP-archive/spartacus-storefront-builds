import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, NotAuthGuard, } from '@spartacus/core';
import { ResetPasswordFormComponent } from './reset-password-form.component';
let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ResetPasswordComponent: {
                        component: ResetPasswordFormComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            I18nModule,
        ],
        declarations: [ResetPasswordFormComponent],
        exports: [ResetPasswordFormComponent],
        entryComponents: [ResetPasswordFormComponent],
    })
], ResetPasswordModule);
export { ResetPasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXNCN0UsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQXBCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYixzQkFBc0IsRUFBRTt3QkFDdEIsU0FBUyxFQUFFLDBCQUEwQjt3QkFDckMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN2QjtpQkFDRjthQUNGLENBQUM7WUFDRixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixVQUFVO1NBQ1g7UUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUNyQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUM5QyxDQUFDO0dBQ1csbUJBQW1CLENBQUc7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgTm90QXV0aEd1YXJkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmVzZXRQYXNzd29yZENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmVzZXRQYXNzd29yZEZvcm1Db21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbTm90QXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmVzZXRQYXNzd29yZEZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUmVzZXRQYXNzd29yZEZvcm1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRNb2R1bGUge31cbiJdfQ==