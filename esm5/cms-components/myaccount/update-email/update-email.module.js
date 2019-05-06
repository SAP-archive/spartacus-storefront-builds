/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
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
                                    selector: 'cx-update-email',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC91cGRhdGUtZW1haWwvdXBkYXRlLWVtYWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBQUE7SUFtQmdDLENBQUM7O2dCQW5CaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixvQkFBb0IsRUFBRTtvQ0FDcEIsUUFBUSxFQUFFLGlCQUFpQjtpQ0FDNUI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUM7b0JBQzlELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7O0lBQytCLHdCQUFDO0NBQUEsQUFuQmpDLElBbUJpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlRW1haWxDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1lbWFpbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBVcGRhdGVFbWFpbENvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtdXBkYXRlLWVtYWlsJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VwZGF0ZUVtYWlsRm9ybUNvbXBvbmVudCwgVXBkYXRlRW1haWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVXBkYXRlRW1haWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtVcGRhdGVFbWFpbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsTW9kdWxlIHt9XG4iXX0=