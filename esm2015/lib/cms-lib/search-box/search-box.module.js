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
import { BootstrapModule } from '../../bootstrap.module';
import { MediaModule } from '../../ui/components/media/media.module';
import { SearchBoxComponentService } from './search-box-component.service';
import { SearchBoxComponent } from './search-box.component';
export class SearchBoxModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9zZWFyY2gtYm94L3NlYXJjaC1ib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxZQUFZLEVBQ1osVUFBVSxFQUNWLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGVBQWUsRUFDZixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWtDNUQsTUFBTSxPQUFPLGVBQWU7OztZQWhDM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLGtCQUFrQixFQUFFO2dDQUNsQixRQUFRLEVBQUUsY0FBYztnQ0FDeEIsU0FBUyxFQUFFO29DQUNUO3dDQUNFLE9BQU8sRUFBRSx5QkFBeUI7d0NBQ2xDLFFBQVEsRUFBRSx5QkFBeUI7d0NBQ25DLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLGNBQWMsQ0FBQztxQ0FDL0Q7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLFVBQVU7b0JBQ1Ysb0JBQW9CO29CQUNwQixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9kdWN0TW9kdWxlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFN0cmlwSHRtbE1vZHVsZSxcbiAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL21lZGlhL21lZGlhLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWJveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJvb3RzdHJhcE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBQcm9kdWN0TW9kdWxlLFxuICAgIFN0cmlwSHRtbE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU2VhcmNoQm94Q29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLCBSb3V0aW5nU2VydmljZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEljb25Nb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VhcmNoQm94Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2VhcmNoQm94Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlYXJjaEJveENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveE1vZHVsZSB7fVxuIl19