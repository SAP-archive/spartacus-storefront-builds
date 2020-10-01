import { NgModule } from '@angular/core';
import { OrderCancellationModule, OrderReturnModule, } from './amend-order/index';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderHistoryModule } from './order-history/order-history.module';
import { ReplenishmentOrderDetailsModule } from './replenishment-order-details/replenishment-order-details.module';
import { ReplenishmentOrderHistoryModule } from './replenishment-order-history/replenishment-order-history.module';
import { ReturnRequestDetailModule } from './return-request-detail/return-request-detail.module';
import { ReturnRequestListModule } from './return-request-list/order-return-request-list.module';
export class OrderModule {
}
OrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OrderHistoryModule,
                    OrderDetailsModule,
                    ReplenishmentOrderDetailsModule,
                    OrderCancellationModule,
                    OrderReturnModule,
                    ReplenishmentOrderHistoryModule,
                    ReturnRequestListModule,
                    ReturnRequestDetailModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDbkgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFjakcsTUFBTSxPQUFPLFdBQVc7OztZQVp2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQiwrQkFBK0I7b0JBQy9CLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQiwrQkFBK0I7b0JBQy9CLHVCQUF1QjtvQkFDdkIseUJBQXlCO2lCQUMxQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyQ2FuY2VsbGF0aW9uTW9kdWxlLFxuICBPcmRlclJldHVybk1vZHVsZSxcbn0gZnJvbSAnLi9hbWVuZC1vcmRlci9pbmRleCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNNb2R1bGUgfSBmcm9tICcuL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TW9kdWxlIH0gZnJvbSAnLi9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkubW9kdWxlJztcbmltcG9ydCB7IFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNNb2R1bGUgfSBmcm9tICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy9yZXBsZW5pc2htZW50LW9yZGVyLWRldGFpbHMubW9kdWxlJztcbmltcG9ydCB7IFJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlNb2R1bGUgfSBmcm9tICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItaGlzdG9yeS9yZXBsZW5pc2htZW50LW9yZGVyLWhpc3RvcnkubW9kdWxlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LWRldGFpbC9yZXR1cm4tcmVxdWVzdC1kZXRhaWwubW9kdWxlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RMaXN0TW9kdWxlIH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC1saXN0L29yZGVyLXJldHVybi1yZXF1ZXN0LWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBPcmRlckRldGFpbHNNb2R1bGUsXG4gICAgUmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgICBPcmRlclJldHVybk1vZHVsZSxcbiAgICBSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIFJldHVyblJlcXVlc3RMaXN0TW9kdWxlLFxuICAgIFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyTW9kdWxlIHt9XG4iXX0=