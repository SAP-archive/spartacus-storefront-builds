import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SemanticPathService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { OrderCancellationService } from './order-cancellation.service';
import * as i0 from "@angular/core";
import * as i1 from "./order-cancellation.service";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/router";
export class OrderCancellationGuard {
    constructor(orderAmendService, semanticPathService, router) {
        this.orderAmendService = orderAmendService;
        this.semanticPathService = semanticPathService;
        this.router = router;
    }
    canActivate() {
        return this.orderAmendService.getForm().pipe(map((form) => {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                return this.router.parseUrl(this.semanticPathService.get('orders'));
            }
            else {
                return true;
            }
        }));
    }
}
OrderCancellationGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderCancellationGuard_Factory() { return new OrderCancellationGuard(i0.ɵɵinject(i1.OrderCancellationService), i0.ɵɵinject(i2.SemanticPathService), i0.ɵɵinject(i3.Router)); }, token: OrderCancellationGuard, providedIn: "root" });
OrderCancellationGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OrderCancellationGuard.ctorParameters = () => [
    { type: OrderCancellationService },
    { type: SemanticPathService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2NhbmNlbGxhdGlvbnMvb3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFLeEUsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUNZLGlCQUEyQyxFQUMzQyxtQkFBd0MsRUFDeEMsTUFBYztRQUZkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3ZCLENBQUM7SUFFSixXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLCtDQUErQztnQkFDL0MscURBQXFEO2dCQUNyRCw2QkFBNkI7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLHdCQUF3QjtZQUh4QixtQkFBbUI7WUFETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSB9IGZyb20gJy4vb3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDYW5jZWxsYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0Rm9ybSgpLnBpcGUoXG4gICAgICBtYXAoKGZvcm0pID0+IHtcbiAgICAgICAgaWYgKCFmb3JtLnZhbGlkKSB7XG4gICAgICAgICAgLy8gdGhlIG9yZGVyIGNvZGUgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgcm91dGVcbiAgICAgICAgICAvLyBhcyBsb25nIGFzIHdlJ3JlIGluc2lkZSBhIGd1YXJkLCBoZW5jZSB3ZSByZWRpcmVjdFxuICAgICAgICAgIC8vIHRvIHRoZSBjb21tb24gb3JkZXJzIHBhZ2UuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ29yZGVycycpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=