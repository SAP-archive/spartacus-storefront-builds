/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
export class UpdatePasswordModule {
}
UpdatePasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdatePasswordComponent: { selector: 'cx-update-password' },
                        },
                    }))),
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
                exports: [UpdatePasswordComponent],
                entryComponents: [UpdatePasswordComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBbUJqRyxNQUFNLE9BQU8sb0JBQW9COzs7WUFqQmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHVCQUF1QixFQUFFLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO3lCQUM1RDtxQkFDRixFQUFBLENBQUM7b0JBQ0YsYUFBYTtvQkFDYixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDJCQUEyQixDQUFDO2dCQUNwRSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDbEMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC11cGRhdGUtcGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsIFVwZGF0ZVBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtVcGRhdGVQYXNzd29yZENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VwZGF0ZVBhc3N3b3JkQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRNb2R1bGUge31cbiJdfQ==