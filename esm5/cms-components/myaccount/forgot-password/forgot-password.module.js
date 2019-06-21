/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, NotAuthGuard, UrlModule, } from '@spartacus/core';
import { ForgotPasswordComponent } from './forgot-password.component';
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        RouterModule,
                        UrlModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ForgotPasswordComponent: {
                                    component: ForgotPasswordComponent,
                                    guards: [NotAuthGuard],
                                },
                            },
                        }))),
                        I18nModule,
                    ],
                    declarations: [ForgotPasswordComponent],
                    exports: [ForgotPasswordComponent],
                    entryComponents: [ForgotPasswordComponent],
                },] }
    ];
    return ForgotPasswordModule;
}());
export { ForgotPasswordModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RTtJQUFBO0lBb0JtQyxDQUFDOztnQkFwQm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsdUJBQXVCLEVBQUU7b0NBQ3ZCLFNBQVMsRUFBRSx1QkFBdUI7b0NBQ2xDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDdkI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNsQyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDM0M7O0lBQ2tDLDJCQUFDO0NBQUEsQUFwQnBDLElBb0JvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIE5vdEF1dGhHdWFyZCxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW05vdEF1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRm9yZ290UGFzc3dvcmRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZE1vZHVsZSB7fVxuIl19