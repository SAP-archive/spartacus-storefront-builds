/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { UpdateEmailFormComponent } from './update-email-form/update-email-form.component';
import { UpdateEmailComponent } from './update-email.component';
var UpdateEmailModule = /** @class */ (function () {
    function UpdateEmailModule() {
    }
    UpdateEmailModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                UpdateEmailComponent: {
                                    component: UpdateEmailComponent,
                                    guards: [AuthGuard],
                                },
                            },
                        }))),
                        FormsModule,
                        ReactiveFormsModule,
                        SpinnerModule,
                        I18nModule,
                    ],
                    declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
                    exports: [UpdateEmailComponent],
                    entryComponents: [UpdateEmailComponent],
                },] }
    ];
    return UpdateEmailModule;
}());
export { UpdateEmailModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtZW1haWwvdXBkYXRlLWVtYWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUFBO0lBb0JnQyxDQUFDOztnQkFwQmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2Isb0JBQW9CLEVBQUU7b0NBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7b0NBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQ0FDcEI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUM7b0JBQzlELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7O0lBQytCLHdCQUFDO0NBQUEsQUFwQmpDLElBb0JpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFVwZGF0ZUVtYWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vdXBkYXRlLWVtYWlsLWZvcm0vdXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZUVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtZW1haWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgVXBkYXRlRW1haWxDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFVwZGF0ZUVtYWlsQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtVcGRhdGVFbWFpbEZvcm1Db21wb25lbnQsIFVwZGF0ZUVtYWlsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VwZGF0ZUVtYWlsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVXBkYXRlRW1haWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbE1vZHVsZSB7fVxuIl19