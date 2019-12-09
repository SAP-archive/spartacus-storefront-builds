/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockNotificationComponent } from './stock-notification.component';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { RouterModule } from '@angular/router';
var StockNotificationModule = /** @class */ (function () {
    function StockNotificationModule() {
    }
    StockNotificationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StockNotificationComponent, StockNotificationDialogComponent],
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                StockNotificationComponent: {
                                    component: StockNotificationComponent,
                                },
                            },
                        }))),
                        RouterModule,
                        I18nModule,
                        SpinnerModule,
                        UrlModule,
                    ],
                    entryComponents: [
                        StockNotificationComponent,
                        StockNotificationDialogComponent,
                    ],
                    exports: [StockNotificationComponent, StockNotificationDialogComponent],
                },] }
    ];
    return StockNotificationModule;
}());
export { StockNotificationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFDTCxZQUFZLEVBRVosVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFBQTtJQXNCc0MsQ0FBQzs7Z0JBdEJ0QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsZ0NBQWdDLENBQUM7b0JBQzVFLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiwwQkFBMEIsRUFBRTtvQ0FDMUIsU0FBUyxFQUFFLDBCQUEwQjtpQ0FDdEM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixhQUFhO3dCQUNiLFNBQVM7cUJBQ1Y7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLDBCQUEwQjt3QkFDMUIsZ0NBQWdDO3FCQUNqQztvQkFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxnQ0FBZ0MsQ0FBQztpQkFDeEU7O0lBQ3FDLDhCQUFDO0NBQUEsQUF0QnZDLElBc0J1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdG9jay1ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCwgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1N0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LCBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlIHt9XG4iXX0=