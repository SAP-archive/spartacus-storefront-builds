/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, UrlTranslationModule, SiteContextModule, ContextServiceMap, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextSelectorComponent } from './site-context-selector.component';
var SiteContextSelectorModule = /** @class */ (function () {
    function SiteContextSelectorModule() {
    }
    SiteContextSelectorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CMSSiteContextComponent: {
                                    selector: 'cx-site-context-selector',
                                    providers: [
                                        {
                                            provide: SiteContextComponentService,
                                            useClass: SiteContextComponentService,
                                            deps: [CmsComponentData, ContextServiceMap, Injector],
                                        },
                                    ],
                                },
                            },
                        }))),
                        UrlTranslationModule,
                        SiteContextModule.forRoot(),
                    ],
                    providers: [SiteContextComponentService],
                    declarations: [SiteContextSelectorComponent],
                    exports: [SiteContextSelectorComponent],
                    entryComponents: [SiteContextSelectorComponent],
                },] }
    ];
    return SiteContextSelectorModule;
}());
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3NpdGUtY29udGV4dC1zZWxlY3Rvci9zaXRlLWNvbnRleHQtc2VsZWN0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRjtJQUFBO0lBMEJ3QyxDQUFDOztnQkExQnhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix1QkFBdUIsRUFBRTtvQ0FDdkIsUUFBUSxFQUFFLDBCQUEwQjtvQ0FDcEMsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSwyQkFBMkI7NENBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7NENBQ3JDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQzt5Q0FDdEQ7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLG9CQUFvQjt3QkFDcEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFO3FCQUM1QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDeEMsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN2QyxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDaEQ7O0lBQ3VDLGdDQUFDO0NBQUEsQUExQnpDLElBMEJ5QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBDb25maWdNb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbmltcG9ydCB7IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXNpdGUtY29udGV4dC1zZWxlY3RvcicsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIENvbnRleHRTZXJ2aWNlTWFwLCBJbmplY3Rvcl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0TW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUge31cbiJdfQ==