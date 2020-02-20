import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdateEmailFormComponent } from './update-email-form/update-email-form.component';
import { UpdateEmailComponent } from './update-email.component';
let UpdateEmailModule = class UpdateEmailModule {
};
UpdateEmailModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    UpdateEmailComponent: {
                        component: UpdateEmailComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
        ],
        declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
        exports: [UpdateEmailComponent, UpdateEmailFormComponent],
        entryComponents: [UpdateEmailComponent],
    })
], UpdateEmailModule);
export { UpdateEmailModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtZW1haWwvdXBkYXRlLWVtYWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXNCaEUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBRyxDQUFBO0FBQXBCLGlCQUFpQjtJQXBCN0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYixvQkFBb0IsRUFBRTt3QkFDcEIsU0FBUyxFQUFFLG9CQUFvQjt3QkFDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNwQjtpQkFDRjthQUNGLENBQUM7WUFDRixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixVQUFVO1NBQ1g7UUFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQztRQUM5RCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx3QkFBd0IsQ0FBQztRQUN6RCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUN4QyxDQUFDO0dBQ1csaUJBQWlCLENBQUc7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBVcGRhdGVFbWFpbEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1lbWFpbC1mb3JtL3VwZGF0ZS1lbWFpbC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlLWVtYWlsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFVwZGF0ZUVtYWlsQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBVcGRhdGVFbWFpbENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50LCBVcGRhdGVFbWFpbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtVcGRhdGVFbWFpbENvbXBvbmVudCwgVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVXBkYXRlRW1haWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbE1vZHVsZSB7fVxuIl19