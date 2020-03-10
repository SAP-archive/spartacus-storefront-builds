import { OnInit } from '@angular/core';
import { ActiveCartService, Cart, RoutingConfigService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfig } from '../../../config/checkout-config';
import { CheckoutStep } from '../../../model/checkout-step.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileTopComponent implements OnInit {
    protected config: CheckoutConfig;
    protected routingService: RoutingService;
    protected routingConfigService: RoutingConfigService;
    protected activeCartService: ActiveCartService;
    constructor(config: CheckoutConfig, routingService: RoutingService, routingConfigService: RoutingConfigService, activeCartService: ActiveCartService);
    steps: Array<CheckoutStep>;
    routerState$: Observable<any>;
    cart$: Observable<Cart>;
    activeStepIndex: number;
    activeStepUrl: string;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileTopComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileTopComponent, "cx-checkout-progress-mobile-top", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQ2FydCwgUm91dGluZ0NvbmZpZ1NlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBjb25maWc6IENoZWNrb3V0Q29uZmlnO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2hlY2tvdXRDb25maWcsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIHN0ZXBzOiBBcnJheTxDaGVja291dFN0ZXA+O1xuICAgIHJvdXRlclN0YXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICAgIGFjdGl2ZVN0ZXBVcmw6IHN0cmluZztcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19