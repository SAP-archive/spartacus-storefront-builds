/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FooterNavigationComponent } from './footer-navigation.component';
var FooterNavigationModule = /** @class */ (function () {
    function FooterNavigationModule() {
    }
    FooterNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        NavigationModule,
                        GenericLinkModule,
                        I18nModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                FooterNavigationComponent: {
                                    component: FooterNavigationComponent,
                                },
                            },
                        }))),
                    ],
                    declarations: [FooterNavigationComponent],
                    entryComponents: [FooterNavigationComponent],
                    exports: [FooterNavigationComponent],
                },] }
    ];
    return FooterNavigationModule;
}());
export { FooterNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFO0lBQUE7SUFtQnFDLENBQUM7O2dCQW5CckMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHlCQUF5QixFQUFFO29DQUN6QixTQUFTLEVBQUUseUJBQXlCO2lDQUNyQzs2QkFDRjt5QkFDRixFQUFBLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUM1QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckM7O0lBQ29DLDZCQUFDO0NBQUEsQUFuQnRDLElBbUJzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsubW9kdWxlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgR2VuZXJpY0xpbmtNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Zvb3Rlck5hdmlnYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zvb3Rlck5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=