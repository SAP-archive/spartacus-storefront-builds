import { Order, RoutingService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailsService {
    private userOrderService;
    private routingService;
    orderCode$: Observable<string>;
    orderLoad$: Observable<{}>;
    constructor(userOrderService: UserOrderService, routingService: RoutingService);
    getOrderDetails(): Observable<Order>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlciwgUm91dGluZ1NlcnZpY2UsIFVzZXJPcmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJEZXRhaWxzU2VydmljZSB7XG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgb3JkZXJDb2RlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIG9yZGVyTG9hZCQ6IE9ic2VydmFibGU8e30+O1xuICAgIGNvbnN0cnVjdG9yKHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+O1xufVxuIl19