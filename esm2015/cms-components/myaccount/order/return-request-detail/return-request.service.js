/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OrderReturnRequestService, RoutingService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class ReturnRequestService {
    /**
     * @param {?} routingService
     * @param {?} returnRequestService
     * @param {?} globalMessageService
     */
    constructor(routingService, returnRequestService, globalMessageService) {
        this.routingService = routingService;
        this.returnRequestService = returnRequestService;
        this.globalMessageService = globalMessageService;
    }
    /**
     * @return {?}
     */
    get isCancelling$() {
        return this.returnRequestService.getCancelReturnRequestLoading();
    }
    /**
     * @return {?}
     */
    get isCancelSuccess$() {
        return this.returnRequestService.getCancelReturnRequestSuccess();
    }
    /**
     * @return {?}
     */
    getReturnRequest() {
        return combineLatest([
            this.routingService.getRouterState(),
            this.returnRequestService.getOrderReturnRequest(),
            this.returnRequestService.getReturnRequestLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([routingState, returnRequest, isLoading]) => [
            routingState.state.params['returnCode'],
            returnRequest,
            isLoading,
        ])), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([returnCode]) => Boolean(returnCode))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([returnCode, returnRequest, isLoading]) => {
            if ((returnRequest === undefined || returnRequest.rma !== returnCode) &&
                !isLoading) {
                this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, returnRequest]) => returnRequest)), filter(Boolean), distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    clearReturnRequest() {
        this.returnRequestService.clearOrderReturnRequestDetail();
    }
    /**
     * @param {?} returnRequestCode
     * @return {?}
     */
    cancelReturnRequest(returnRequestCode) {
        this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
            status: 'CANCELLING',
        });
    }
    /**
     * @param {?} rma
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    backToList() {
        this.routingService.go({ cxRoute: 'orders' }, null, {
            state: {
                activeTab: 1,
            },
        });
    }
}
ReturnRequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ReturnRequestService.ctorParameters = () => [
    { type: RoutingService },
    { type: OrderReturnRequestService },
    { type: GlobalMessageService }
];
/** @nocollapse */ ReturnRequestService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ReturnRequestService_Factory() { return new ReturnRequestService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.OrderReturnRequestService), i0.ɵɵinject(i1.GlobalMessageService)); }, token: ReturnRequestService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ReturnRequestService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    ReturnRequestService.prototype.returnRequestService;
    /**
     * @type {?}
     * @protected
     */
    ReturnRequestService.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLGNBQWMsRUFFZCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3hFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUMvQixZQUNZLGNBQThCLEVBQzlCLG9CQUErQyxFQUMvQyxvQkFBMEM7UUFGMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDOzs7O0lBRUosSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUU7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFO1lBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsRUFBRTtTQUNwRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLGFBQWE7WUFDYixTQUFTO1NBQ1YsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBQyxFQUM3QyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUNFLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQztnQkFDakUsQ0FBQyxTQUFTLEVBQ1Y7Z0JBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBQyxFQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxpQkFBeUI7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixFQUFFO1lBQ3BFLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9DQUFvQyxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7WUFDRSxHQUFHLEVBQUUsNkJBQTZCO1lBQ2xDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTtTQUNoQixFQUNELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7WUFDckIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDbEQsS0FBSyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxDQUFDO2FBQ2I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUExRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVkMsY0FBYztZQURkLHlCQUF5QjtZQUd6QixvQkFBb0I7Ozs7Ozs7O0lBV2xCLDhDQUF3Qzs7Ozs7SUFDeEMsb0RBQXlEOzs7OztJQUN6RCxvREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgUmV0dXJuUmVxdWVzdCxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBpc0NhbmNlbGxpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmdldENhbmNlbFJldHVyblJlcXVlc3RMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgaXNDYW5jZWxTdWNjZXNzJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRDYW5jZWxSZXR1cm5SZXF1ZXN0U3VjY2VzcygpO1xuICB9XG5cbiAgZ2V0UmV0dXJuUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCksXG4gICAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmdldE9yZGVyUmV0dXJuUmVxdWVzdCgpLFxuICAgICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtyb3V0aW5nU3RhdGUsIHJldHVyblJlcXVlc3QsIGlzTG9hZGluZ10pID0+IFtcbiAgICAgICAgcm91dGluZ1N0YXRlLnN0YXRlLnBhcmFtc1sncmV0dXJuQ29kZSddLFxuICAgICAgICByZXR1cm5SZXF1ZXN0LFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICBdKSxcbiAgICAgIGZpbHRlcigoW3JldHVybkNvZGVdKSA9PiBCb29sZWFuKHJldHVybkNvZGUpKSxcbiAgICAgIHRhcCgoW3JldHVybkNvZGUsIHJldHVyblJlcXVlc3QsIGlzTG9hZGluZ10pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChyZXR1cm5SZXF1ZXN0ID09PSB1bmRlZmluZWQgfHwgcmV0dXJuUmVxdWVzdC5ybWEgIT09IHJldHVybkNvZGUpICYmXG4gICAgICAgICAgIWlzTG9hZGluZ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmxvYWRPcmRlclJldHVyblJlcXVlc3REZXRhaWwocmV0dXJuQ29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbXywgcmV0dXJuUmVxdWVzdF0pID0+IHJldHVyblJlcXVlc3QpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBjbGVhclJldHVyblJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jbGVhck9yZGVyUmV0dXJuUmVxdWVzdERldGFpbCgpO1xuICB9XG5cbiAgY2FuY2VsUmV0dXJuUmVxdWVzdChyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jYW5jZWxPcmRlclJldHVyblJlcXVlc3QocmV0dXJuUmVxdWVzdENvZGUsIHtcbiAgICAgIHN0YXR1czogJ0NBTkNFTExJTkcnLFxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsU3VjY2VzcyhybWE6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UucmVzZXRDYW5jZWxSZXR1cm5SZXF1ZXN0UHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JldHVyblJlcXVlc3QuY2FuY2VsU3VjY2VzcycsXG4gICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ29yZGVycycsXG4gICAgfSk7XG4gIH1cblxuICBiYWNrVG9MaXN0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnb3JkZXJzJyB9LCBudWxsLCB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBhY3RpdmVUYWI6IDEsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=