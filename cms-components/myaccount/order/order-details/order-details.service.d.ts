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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyLCBSb3V0aW5nU2VydmljZSwgVXNlck9yZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckRldGFpbHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBvcmRlckNvZGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG4gICAgY29uc3RydWN0b3IodXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj47XG59XG4iXX0=