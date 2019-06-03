/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CmsService, ConfigModule, I18nModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationUIComponent } from './navigation-ui.component';
import { NavigationComponent } from './navigation.component';
import { NavigationComponentService } from './navigation.component.service';
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        NgbDropdownModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                NavigationComponent: {
                                    selector: 'cx-navigation',
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
                        I18nModule,
                    ],
                    declarations: [NavigationComponent, NavigationUIComponent],
                    entryComponents: [NavigationComponent],
                    exports: [NavigationComponent, NavigationUIComponent],
                },] }
    ];
    return NavigationModule;
}());
export { NavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RTtJQUFBO0lBeUIrQixDQUFDOztnQkF6Qi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG1CQUFtQixFQUFFO29DQUNuQixRQUFRLEVBQUUsZUFBZTtvQ0FDekIsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSwwQkFBMEI7NENBQ25DLFFBQVEsRUFBRSwwQkFBMEI7NENBQ3BDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQzt5Q0FDckM7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7b0JBQzFELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztpQkFDdEQ7O0lBQzhCLHVCQUFDO0NBQUEsQUF6QmhDLElBeUJnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblVJQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1uYXZpZ2F0aW9uJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc1NlcnZpY2UsIENtc0NvbXBvbmVudERhdGFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZpZ2F0aW9uVUlDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmlnYXRpb25Db21wb25lbnQsIE5hdmlnYXRpb25VSUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==