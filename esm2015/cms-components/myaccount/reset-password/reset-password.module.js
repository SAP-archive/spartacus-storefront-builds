import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule, NotAuthGuard, provideDefaultConfig, } from '@spartacus/core';
import { ResetPasswordFormComponent } from './reset-password-form.component';
import { FormErrorsModule } from '../../../shared/index';
let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ResetPasswordComponent: {
                        component: ResetPasswordFormComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
        ],
        declarations: [ResetPasswordFormComponent],
        exports: [ResetPasswordFormComponent],
        entryComponents: [ResetPasswordFormComponent],
    })
], ResetPasswordModule);
export { ResetPasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksRUFDWixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXlCekQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQXZCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLFVBQVU7WUFDVixnQkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLHNCQUFzQixFQUFFO3dCQUN0QixTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3ZCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDMUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDckMsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDOUMsQ0FBQztHQUNXLG1CQUFtQixDQUFHO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBOb3RBdXRoR3VhcmQsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRGb3JtQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW05vdEF1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Jlc2V0UGFzc3dvcmRGb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZE1vZHVsZSB7fVxuIl19