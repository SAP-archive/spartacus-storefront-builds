import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockNotificationComponent } from './stock-notification.component';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { RouterModule } from '@angular/router';
var StockNotificationModule = /** @class */ (function () {
    function StockNotificationModule() {
    }
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
    return StockNotificationModule;
}());
export { StockNotificationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3Qvc3RvY2stbm90aWZpY2F0aW9uL3N0b2NrLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFFTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFvQi9DO0lBQUE7SUFBc0MsQ0FBQztJQUExQix1QkFBdUI7UUFsQm5DLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDO1lBQzVFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7WUFDM0UsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2IsMEJBQTBCLEVBQUU7NEJBQzFCLFNBQVMsRUFBRSwwQkFBMEI7eUJBQ3RDO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELGVBQWUsRUFBRTtnQkFDZiwwQkFBMEI7Z0JBQzFCLGdDQUFnQzthQUNqQztZQUNELE9BQU8sRUFBRSxDQUFDLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDO1NBQ3hFLENBQUM7T0FDVyx1QkFBdUIsQ0FBRztJQUFELDhCQUFDO0NBQUEsQUFBdkMsSUFBdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc3RvY2stbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy9zdG9jay1ub3RpZmljYXRpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCwgU3RvY2tOb3RpZmljYXRpb25EaWFsb2dDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEkxOG5Nb2R1bGUsIFNwaW5uZXJNb2R1bGUsIFVybE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU3RvY2tOb3RpZmljYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1N0b2NrTm90aWZpY2F0aW9uQ29tcG9uZW50LCBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlIHt9XG4iXX0=