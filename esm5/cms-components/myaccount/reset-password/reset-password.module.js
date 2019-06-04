/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, NotAuthGuard, } from '@spartacus/core';
import { ResetPasswordFormComponent } from './reset-password-form.component';
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ResetPasswordComponent: {
                                    selector: 'cx-reset-password-form',
                                    guards: [NotAuthGuard],
                                },
                            },
                        }))),
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        I18nModule,
                    ],
                    declarations: [ResetPasswordFormComponent],
                    exports: [ResetPasswordFormComponent],
                    entryComponents: [ResetPasswordFormComponent],
                },] }
    ];
    return ResetPasswordModule;
}());
export { ResetPasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RTtJQUFBO0lBb0JrQyxDQUFDOztnQkFwQmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2Isc0JBQXNCLEVBQUU7b0NBQ3RCLFFBQVEsRUFBRSx3QkFBd0I7b0NBQ2xDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDdkI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUNyQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDOUM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFwQm5DLElBb0JtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBOb3RBdXRoR3VhcmQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1yZXNldC1wYXNzd29yZC1mb3JtJyxcbiAgICAgICAgICBndWFyZHM6IFtOb3RBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Jlc2V0UGFzc3dvcmRGb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZE1vZHVsZSB7fVxuIl19