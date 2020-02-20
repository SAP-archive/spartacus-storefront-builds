import { __decorate } from "tslib";
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
    StockNotificationModule = __decorate([
        NgModule({
            declarations: [StockNotificationComponent, StockNotificationDialogComponent],
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        StockNotificationComponent: {
                            component: StockNotificationComponent,
                        },
                    },
                }),
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
        })
    ], StockNotificationModule);
    return StockNotificationModule;
}());
export { StockNotificationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFDTCxZQUFZLEVBRVosVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUF3Qi9DO0lBQUE7SUFBc0MsQ0FBQztJQUExQix1QkFBdUI7UUF0Qm5DLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDO1lBQzVFLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYiwwQkFBMEIsRUFBRTs0QkFDMUIsU0FBUyxFQUFFLDBCQUEwQjt5QkFDdEM7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixTQUFTO2FBQ1Y7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsMEJBQTBCO2dCQUMxQixnQ0FBZ0M7YUFDakM7WUFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxnQ0FBZ0MsQ0FBQztTQUN4RSxDQUFDO09BQ1csdUJBQXVCLENBQUc7SUFBRCw4QkFBQztDQUFBLEFBQXZDLElBQXVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LCBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LFxuICAgIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQsIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvY2tOb3RpZmljYXRpb25Nb2R1bGUge31cbiJdfQ==