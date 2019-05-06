/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigModule, I18nModule, UrlTranslationModule, UserService, } from '@spartacus/core';
import { BootstrapModule } from '../../../../lib/bootstrap.module';
import { ListNavigationModule } from '../../../../shared/components/list-navigation/list-navigation.module';
import { OrderHistoryComponent } from './order-history.component';
export class OrderHistoryModule {
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
                    ListNavigationModule,
                    UrlTranslationModule,
                    I18nModule,
                ],
                declarations: [OrderHistoryComponent],
                exports: [OrderHistoryComponent],
                providers: [UserService],
                entryComponents: [OrderHistoryComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXVCbEUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBckI5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLDRCQUE0QixFQUFFLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO3lCQUMvRDtxQkFDRixFQUFBLENBQUM7b0JBQ0YsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsZUFBZSxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9ib290c3RyYXAubW9kdWxlJztcbmltcG9ydCB7IExpc3ROYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL2xpc3QtbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1oaXN0b3J5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRPcmRlckhpc3RvcnlDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1vcmRlci1oaXN0b3J5JyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgQm9vdHN0cmFwTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVySGlzdG9yeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPcmRlckhpc3RvcnlDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW09yZGVySGlzdG9yeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVySGlzdG9yeU1vZHVsZSB7fVxuIl19