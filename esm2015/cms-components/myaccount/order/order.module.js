import { NgModule } from '@angular/core';
import { OrderCancellationModule, OrderReturnModule, } from './amend-order/index';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderHistoryModule } from './order-history/order-history.module';
import { ReturnRequestDetailModule } from './return-request-detail/return-request-detail.module';
import { ReturnRequestListModule } from './return-request-list/order-return-request-list.module';
export class OrderModule {
}
OrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OrderHistoryModule,
                    OrderDetailsModule,
                    OrderCancellationModule,
                    OrderReturnModule,
                    ReturnRequestListModule,
                    ReturnRequestDetailModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFZakcsTUFBTSxPQUFPLFdBQVc7OztZQVZ2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix5QkFBeUI7aUJBQzFCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3JkZXJDYW5jZWxsYXRpb25Nb2R1bGUsXG4gIE9yZGVyUmV0dXJuTW9kdWxlLFxufSBmcm9tICcuL2FtZW5kLW9yZGVyL2luZGV4JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc01vZHVsZSB9IGZyb20gJy4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlNb2R1bGUgfSBmcm9tICcuL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5tb2R1bGUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdERldGFpbE1vZHVsZSB9IGZyb20gJy4vcmV0dXJuLXJlcXVlc3QtZGV0YWlsL3JldHVybi1yZXF1ZXN0LWRldGFpbC5tb2R1bGUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdExpc3RNb2R1bGUgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LWxpc3Qvb3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgICBPcmRlclJldHVybk1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlck1vZHVsZSB7fVxuIl19