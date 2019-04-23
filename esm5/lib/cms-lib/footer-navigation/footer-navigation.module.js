/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsService, ConfigModule } from '@spartacus/core';
import { FooterNavigationComponent } from './footer-navigation.component';
import { GenericLinkModule } from '../../ui/components/generic-link/generic-link.module';
import { NavigationComponentService } from '../navigation/navigation.component.service';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var FooterNavigationModule = /** @class */ (function () {
    function FooterNavigationModule() {
    }
    FooterNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                FooterNavigationComponent: {
                                    selector: 'cx-footer-navigation',
                                    providers: [
                                        {
                                            provide: NavigationComponentService,
                                            useClass: NavigationComponentService,
                                            deps: [CmsService, CmsComponentData],
                                        },
                                    ],
                                },
                            },
                        }))),
                        GenericLinkModule,
                    ],
                    declarations: [FooterNavigationComponent],
                    entryComponents: [FooterNavigationComponent],
                    exports: [FooterNavigationComponent],
                },] }
    ];
    return FooterNavigationModule;
}());
export { FooterNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvZm9vdGVyLW5hdmlnYXRpb24vZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV4RjtJQUFBO0lBd0JxQyxDQUFDOztnQkF4QnJDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix5QkFBeUIsRUFBRTtvQ0FDekIsUUFBUSxFQUFFLHNCQUFzQjtvQ0FDaEMsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSwwQkFBMEI7NENBQ25DLFFBQVEsRUFBRSwwQkFBMEI7NENBQ3BDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQzt5Q0FDckM7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUM1QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckM7O0lBQ29DLDZCQUFDO0NBQUEsQUF4QnRDLElBd0JzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENtc1NlcnZpY2UsIENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uL3VpL2NvbXBvbmVudHMvZ2VuZXJpYy1saW5rL2dlbmVyaWMtbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtZm9vdGVyLW5hdmlnYXRpb24nLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zU2VydmljZSwgQ21zQ29tcG9uZW50RGF0YV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEdlbmVyaWNMaW5rTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19