import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockNotificationComponent } from './stock-notification.component';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { RouterModule } from '@angular/router';
export class StockNotificationModule {
}
StockNotificationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StockNotificationComponent, StockNotificationDialogComponent],
                imports: [CommonModule, RouterModule, I18nModule, SpinnerModule, UrlModule],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            StockNotificationComponent: {
                                component: StockNotificationComponent,
                            },
                        },
                    }),
                ],
                entryComponents: [
                    StockNotificationComponent,
                    StockNotificationDialogComponent,
                ],
                exports: [StockNotificationComponent, StockNotificationDialogComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUVMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQW9CL0MsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBbEJuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsZ0NBQWdDLENBQUM7Z0JBQzVFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7Z0JBQzNFLFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBWTt3QkFDOUIsYUFBYSxFQUFFOzRCQUNiLDBCQUEwQixFQUFFO2dDQUMxQixTQUFTLEVBQUUsMEJBQTBCOzZCQUN0Qzt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELGVBQWUsRUFBRTtvQkFDZiwwQkFBMEI7b0JBQzFCLGdDQUFnQztpQkFDakM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsZ0NBQWdDLENBQUM7YUFDeEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdG9jay1ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LCBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgSTE4bk1vZHVsZSwgU3Bpbm5lck1vZHVsZSwgVXJsTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LFxuICAgIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQsIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvY2tOb3RpZmljYXRpb25Nb2R1bGUge31cbiJdfQ==