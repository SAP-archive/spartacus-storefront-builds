/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../ui/components/spinner/spinner.module';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
var UpdatePasswordModule = /** @class */ (function () {
    function UpdatePasswordModule() {
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
    return UpdatePasswordModule;
}());
export { UpdatePasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFhLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDL0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFakc7SUFBQTtJQWlCbUMsQ0FBQzs7Z0JBakJuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix1QkFBdUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTs2QkFDNUQ7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLGFBQWE7d0JBQ2IsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztvQkFDcEUsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUMzQzs7SUFDa0MsMkJBQUM7Q0FBQSxBQWpCcEMsSUFpQm9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGRhdGVQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC11cGRhdGUtcGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsIFVwZGF0ZVBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtVcGRhdGVQYXNzd29yZENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VwZGF0ZVBhc3N3b3JkQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRNb2R1bGUge31cbiJdfQ==