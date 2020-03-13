import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockNotificationComponent } from './stock-notification.component';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { RouterModule } from '@angular/router';
let StockNotificationModule = class StockNotificationModule {
};
StockNotificationModule = __decorate([
    NgModule({
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
    })
], StockNotificationModule);
export { StockNotificationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFFTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFvQi9DLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBQUcsQ0FBQTtBQUExQix1QkFBdUI7SUFsQm5DLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDO1FBQzVFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7UUFDM0UsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYiwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLDBCQUEwQjtxQkFDdEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxlQUFlLEVBQUU7WUFDZiwwQkFBMEI7WUFDMUIsZ0NBQWdDO1NBQ2pDO1FBQ0QsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsZ0NBQWdDLENBQUM7S0FDeEUsQ0FBQztHQUNXLHVCQUF1QixDQUFHO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3N0b2NrLW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3N0b2NrLW5vdGlmaWNhdGlvbi1kaWFsb2cvc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQsIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBJMThuTW9kdWxlLCBTcGlubmVyTW9kdWxlLCBVcmxNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFN0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQsXG4gICAgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCwgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja05vdGlmaWNhdGlvbk1vZHVsZSB7fVxuIl19