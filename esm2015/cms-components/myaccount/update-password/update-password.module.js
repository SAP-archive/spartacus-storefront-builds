import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
let UpdatePasswordModule = class UpdatePasswordModule {
};
UpdatePasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    UpdatePasswordComponent: {
                        component: UpdatePasswordComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            SpinnerModule,
            I18nModule,
        ],
        declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
        exports: [UpdatePasswordComponent, UpdatePasswordFormComponent],
        entryComponents: [UpdatePasswordComponent],
    })
], UpdatePasswordModule);
export { UpdatePasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQXNCakcsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRyxDQUFBO0FBQXZCLG9CQUFvQjtJQXBCaEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLHVCQUF1QixFQUFFO3dCQUN2QixTQUFTLEVBQUUsdUJBQXVCO3dCQUNsQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3BCO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLGFBQWE7WUFDYixVQUFVO1NBQ1g7UUFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztRQUNwRSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztRQUMvRCxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUMzQyxDQUFDO0dBQ1csb0JBQW9CLENBQUc7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBVcGRhdGVQYXNzd29yZEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXBkYXRlLXBhc3N3b3JkLWZvcm0vdXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBVcGRhdGVQYXNzd29yZENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtVcGRhdGVQYXNzd29yZENvbXBvbmVudCwgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VwZGF0ZVBhc3N3b3JkQ29tcG9uZW50LCBVcGRhdGVQYXNzd29yZEZvcm1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtVcGRhdGVQYXNzd29yZENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkTW9kdWxlIHt9XG4iXX0=