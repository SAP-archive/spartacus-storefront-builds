/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { OrderHistoryComponent } from './order-history.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BootstrapModule } from '../../../bootstrap.module';
import { PaginationAndSortingModule } from '../../../ui/components/pagination-and-sorting/pagination-and-sorting.module';
import { UrlTranslationModule, ConfigModule, UserService, I18nModule, } from '@spartacus/core';
var OrderHistoryModule = /** @class */ (function () {
    function OrderHistoryModule() {
    }
    OrderHistoryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                AccountOrderHistoryComponent: { selector: 'cx-order-history' },
                            },
                        }))),
                        RouterModule,
                        FormsModule,
                        NgSelectModule,
                        BootstrapModule,
                        PaginationAndSortingModule,
                        UrlTranslationModule,
                        I18nModule,
                    ],
                    declarations: [OrderHistoryComponent],
                    exports: [OrderHistoryComponent],
                    providers: [UserService],
                    entryComponents: [OrderHistoryComponent],
                },] }
    ];
    return OrderHistoryModule;
}());
export { OrderHistoryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekgsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixZQUFZLEVBRVosV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBQUE7SUFxQmlDLENBQUM7O2dCQXJCakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiw0QkFBNEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTs2QkFDL0Q7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNoQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ3hCLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUN6Qzs7SUFDZ0MseUJBQUM7Q0FBQSxBQXJCbEMsSUFxQmtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWhpc3RvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkFuZFNvcnRpbmdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi91aS9jb21wb25lbnRzL3BhZ2luYXRpb24tYW5kLXNvcnRpbmcvcGFnaW5hdGlvbi1hbmQtc29ydGluZy5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBVc2VyU2VydmljZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVySGlzdG9yeUNvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LW9yZGVyLWhpc3RvcnknIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBCb290c3RyYXBNb2R1bGUsXG4gICAgUGFnaW5hdGlvbkFuZFNvcnRpbmdNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJIaXN0b3J5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVySGlzdG9yeUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbT3JkZXJIaXN0b3J5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJIaXN0b3J5TW9kdWxlIHt9XG4iXX0=