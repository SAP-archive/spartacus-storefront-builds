import { Injectable } from '@angular/core';
import { OrderReturnRequestService, RoutingService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class ReturnRequestService {
    constructor(routingService, returnRequestService, globalMessageService) {
        this.routingService = routingService;
        this.returnRequestService = returnRequestService;
        this.globalMessageService = globalMessageService;
    }
    get isCancelling$() {
        return this.returnRequestService.getCancelReturnRequestLoading();
    }
    get isCancelSuccess$() {
        return this.returnRequestService.getCancelReturnRequestSuccess();
    }
    getReturnRequest() {
        return combineLatest([
            this.routingService.getRouterState(),
            this.returnRequestService.getOrderReturnRequest(),
            this.returnRequestService.getReturnRequestLoading(),
        ]).pipe(map(([routingState, returnRequest, isLoading]) => [
            routingState.state.params['returnCode'],
            returnRequest,
            isLoading,
        ]), filter(([returnCode]) => Boolean(returnCode)), tap(([returnCode, returnRequest, isLoading]) => {
            if ((returnRequest === undefined || returnRequest.rma !== returnCode) &&
                !isLoading) {
                this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
            }
        }), map(([_, returnRequest]) => returnRequest), filter(Boolean), distinctUntilChanged());
    }
    clearReturnRequest() {
        this.returnRequestService.clearOrderReturnRequestDetail();
    }
    cancelReturnRequest(returnRequestCode) {
        this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
            status: 'CANCELLING',
        });
    }
    cancelSuccess(rma) {
        this.returnRequestService.resetCancelReturnRequestProcessState();
        this.globalMessageService.add({
            key: 'returnRequest.cancelSuccess',
            params: { rma },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routingService.go({
            cxRoute: 'orders',
        });
    }
    backToList() {
        this.routingService.go({ cxRoute: 'orders' }, null, {
            state: {
                activeTab: 1,
            },
        });
    }
}
ReturnRequestService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReturnRequestService_Factory() { return new ReturnRequestService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.OrderReturnRequestService), i0.ɵɵinject(i1.GlobalMessageService)); }, token: ReturnRequestService, providedIn: "root" });
ReturnRequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ReturnRequestService.ctorParameters = () => [
    { type: RoutingService },
    { type: OrderReturnRequestService },
    { type: GlobalMessageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsY0FBYyxFQUVkLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUNZLGNBQThCLEVBQzlCLG9CQUErQyxFQUMvQyxvQkFBMEM7UUFGMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDO0lBRUosSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUU7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFO1lBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsRUFBRTtTQUNwRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLGFBQWE7WUFDYixTQUFTO1NBQ1YsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUM3QyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUNFLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQztnQkFDakUsQ0FBQyxTQUFTLEVBQ1Y7Z0JBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELG1CQUFtQixDQUFDLGlCQUF5QjtRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLEVBQUU7WUFDcEUsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO1lBQ0UsR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7U0FDaEIsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFO1lBQ2xELEtBQUssRUFBRTtnQkFDTCxTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQTFFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZDLGNBQWM7WUFEZCx5QkFBeUI7WUFHekIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFJldHVyblJlcXVlc3QsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuUmVxdWVzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBnZXQgaXNDYW5jZWxsaW5nJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRDYW5jZWxSZXR1cm5SZXF1ZXN0TG9hZGluZygpO1xuICB9XG5cbiAgZ2V0IGlzQ2FuY2VsU3VjY2VzcyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuZ2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTtcbiAgfVxuXG4gIGdldFJldHVyblJlcXVlc3QoKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLFxuICAgICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRPcmRlclJldHVyblJlcXVlc3QoKSxcbiAgICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuZ2V0UmV0dXJuUmVxdWVzdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcm91dGluZ1N0YXRlLCByZXR1cm5SZXF1ZXN0LCBpc0xvYWRpbmddKSA9PiBbXG4gICAgICAgIHJvdXRpbmdTdGF0ZS5zdGF0ZS5wYXJhbXNbJ3JldHVybkNvZGUnXSxcbiAgICAgICAgcmV0dXJuUmVxdWVzdCxcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgXSksXG4gICAgICBmaWx0ZXIoKFtyZXR1cm5Db2RlXSkgPT4gQm9vbGVhbihyZXR1cm5Db2RlKSksXG4gICAgICB0YXAoKFtyZXR1cm5Db2RlLCByZXR1cm5SZXF1ZXN0LCBpc0xvYWRpbmddKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAocmV0dXJuUmVxdWVzdCA9PT0gdW5kZWZpbmVkIHx8IHJldHVyblJlcXVlc3Qucm1hICE9PSByZXR1cm5Db2RlKSAmJlxuICAgICAgICAgICFpc0xvYWRpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5sb2FkT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKHJldHVybkNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW18sIHJldHVyblJlcXVlc3RdKSA9PiByZXR1cm5SZXF1ZXN0KSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgY2xlYXJSZXR1cm5SZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2xlYXJPcmRlclJldHVyblJlcXVlc3REZXRhaWwoKTtcbiAgfVxuXG4gIGNhbmNlbFJldHVyblJlcXVlc3QocmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0KHJldHVyblJlcXVlc3RDb2RlLCB7XG4gICAgICBzdGF0dXM6ICdDQU5DRUxMSU5HJyxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbFN1Y2Nlc3Mocm1hOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLnJlc2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZXR1cm5SZXF1ZXN0LmNhbmNlbFN1Y2Nlc3MnLFxuICAgICAgICBwYXJhbXM6IHsgcm1hIH0sXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlcnMnLFxuICAgIH0pO1xuICB9XG5cbiAgYmFja1RvTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVycycgfSwgbnVsbCwge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgYWN0aXZlVGFiOiAxLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIl19