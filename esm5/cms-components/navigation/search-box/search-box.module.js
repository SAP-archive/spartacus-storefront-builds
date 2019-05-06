/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, ProductModule, ProductSearchService, RoutingService, StripHtmlModule, UrlTranslationModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { BootstrapModule } from '../../../lib/bootstrap.module';
import { MediaModule } from '../../../shared/index';
import { SearchBoxComponentService } from './search-box-component.service';
import { SearchBoxComponent } from './search-box.component';
var SearchBoxModule = /** @class */ (function () {
    function SearchBoxModule() {
    }
    SearchBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BootstrapModule,
                        FormsModule,
                        RouterModule,
                        ReactiveFormsModule,
                        MediaModule,
                        ProductModule,
                        StripHtmlModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                SearchBoxComponent: {
                                    selector: 'cx-searchbox',
                                    providers: [
                                        {
                                            provide: SearchBoxComponentService,
                                            useClass: SearchBoxComponentService,
                                            deps: [CmsComponentData, ProductSearchService, RoutingService],
                                        },
                                    ],
                                },
                            },
                        }))),
                        IconModule,
                        UrlTranslationModule,
                        I18nModule,
                    ],
                    declarations: [SearchBoxComponent],
                    entryComponents: [SearchBoxComponent],
                    exports: [SearchBoxComponent],
                },] }
    ];
    return SearchBoxModule;
}());
export { SearchBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixjQUFjLEVBQ2QsZUFBZSxFQUNmLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBQUE7SUFnQzhCLENBQUM7O2dCQWhDOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLGtCQUFrQixFQUFFO29DQUNsQixRQUFRLEVBQUUsY0FBYztvQ0FDeEIsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSx5QkFBeUI7NENBQ2xDLFFBQVEsRUFBRSx5QkFBeUI7NENBQ25DLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLGNBQWMsQ0FBQzt5Q0FDL0Q7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDckMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzlCOztJQUM2QixzQkFBQztDQUFBLEFBaEMvQixJQWdDK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFByb2R1Y3RNb2R1bGUsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU3RyaXBIdG1sTW9kdWxlLFxuICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1ib3guY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCb290c3RyYXBNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgUHJvZHVjdE1vZHVsZSxcbiAgICBTdHJpcEh0bWxNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFNlYXJjaEJveENvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBQcm9kdWN0U2VhcmNoU2VydmljZSwgUm91dGluZ1NlcnZpY2VdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaEJveENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NlYXJjaEJveENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWFyY2hCb3hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hNb2R1bGUge31cbiJdfQ==