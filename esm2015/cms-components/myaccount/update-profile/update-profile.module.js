/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdateProfileFormComponent } from './components/update-profile-form.component';
import { UpdateProfileComponent } from './update-profile.component';
export class UpdateProfileModule {
}
UpdateProfileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdateProfileComponent: {
                                selector: 'cx-update-profile',
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
                exports: [UpdateProfileComponent],
                entryComponents: [UpdateProfileComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXNCcEUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBcEIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHNCQUFzQixFQUFFO2dDQUN0QixRQUFRLEVBQUUsbUJBQW1CO2dDQUM3QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkJBQ3BCO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO2dCQUNsRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWxlLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFVwZGF0ZVByb2ZpbGVDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wcm9maWxlJyxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBkYXRlUHJvZmlsZUNvbXBvbmVudCwgVXBkYXRlUHJvZmlsZUZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbVXBkYXRlUHJvZmlsZUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VwZGF0ZVByb2ZpbGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlTW9kdWxlIHt9XG4iXX0=