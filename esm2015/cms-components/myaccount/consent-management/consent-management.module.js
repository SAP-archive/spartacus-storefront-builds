import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { IconModule } from '../../misc/icon/icon.module';
import { ConsentManagementFormComponent } from './components/consent-form/consent-management-form.component';
import { ConsentManagementComponent } from './components/consent-management.component';
let ConsentManagementModule = class ConsentManagementModule {
};
ConsentManagementModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
            IconModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ConsentManagementComponent: {
                        component: ConsentManagementComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
        exports: [ConsentManagementComponent, ConsentManagementFormComponent],
        entryComponents: [ConsentManagementComponent],
    })
], ConsentManagementModule);
export { ConsentManagementModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29uc2VudC1tYW5hZ2VtZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUF1QnZGLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBQUcsQ0FBQTtBQUExQix1QkFBdUI7SUFyQm5DLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixVQUFVO1lBQ1YsVUFBVTtZQUNWLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYiwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLDBCQUEwQjt3QkFDckMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNwQjtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLDhCQUE4QixDQUFDO1FBQzFFLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixFQUFFLDhCQUE4QixDQUFDO1FBQ3JFLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQzlDLENBQUM7R0FDVyx1QkFBdUIsQ0FBRztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb25zZW50TWFuYWdlbWVudENvbXBvbmVudCwgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50LCBDb25zZW50TWFuYWdlbWVudEZvcm1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb25zZW50TWFuYWdlbWVudENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlIHt9XG4iXX0=