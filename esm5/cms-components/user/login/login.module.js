/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlTranslationModule, UserModule, } from '@spartacus/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { LoginComponent } from './login.component';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        UserModule,
                        UrlTranslationModule,
                        PageSlotModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                LoginComponent: {
                                    selector: 'cx-login',
                                },
                            },
                        }))),
                        I18nModule,
                    ],
                    declarations: [LoginComponent],
                    entryComponents: [LoginComponent],
                    exports: [LoginComponent],
                },] }
    ];
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUFBO0lBb0IwQixDQUFDOztnQkFwQjFCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixjQUFjLEVBQUU7b0NBQ2QsUUFBUSxFQUFFLFVBQVU7aUNBQ3JCOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCOztJQUN5QixrQkFBQztDQUFBLEFBcEIzQixJQW9CMkI7U0FBZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBVc2VyTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVNsb3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3QubW9kdWxlJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVc2VyTW9kdWxlLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICAgIFBhZ2VTbG90TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBMb2dpbkNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtbG9naW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0xvZ2luQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xvZ2luQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUge31cbiJdfQ==