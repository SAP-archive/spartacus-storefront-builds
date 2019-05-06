/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ConfigModule, UrlTranslationModule, I18nModule, } from '@spartacus/core';
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        RouterModule,
                        UrlTranslationModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ForgotPasswordComponent: { selector: 'cx-forgot-password' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFDTCxZQUFZLEVBRVosb0JBQW9CLEVBQ3BCLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBQUE7SUFpQm1DLENBQUM7O2dCQWpCbkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix1QkFBdUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTs2QkFDNUQ7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNsQyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDM0M7O0lBQ2tDLDJCQUFDO0NBQUEsQUFqQnBDLElBaUJvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1mb3Jnb3QtcGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRm9yZ290UGFzc3dvcmRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZE1vZHVsZSB7fVxuIl19