import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
var UpdatePasswordModule = /** @class */ (function () {
    function UpdatePasswordModule() {
    }
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
    return UpdatePasswordModule;
}());
export { UpdatePasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQXNCakc7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQXBCaEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYix1QkFBdUIsRUFBRTs0QkFDdkIsU0FBUyxFQUFFLHVCQUF1Qjs0QkFDbEMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3lCQUNwQjtxQkFDRjtpQkFDRixDQUFDO2dCQUNGLGFBQWE7Z0JBQ2IsVUFBVTthQUNYO1lBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7WUFDcEUsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7WUFDL0QsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDM0MsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQtZm9ybS91cGRhdGUtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBVcGRhdGVQYXNzd29yZENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VwZGF0ZVBhc3N3b3JkQ29tcG9uZW50LCBVcGRhdGVQYXNzd29yZEZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsIFVwZGF0ZVBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VwZGF0ZVBhc3N3b3JkQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRNb2R1bGUge31cbiJdfQ==