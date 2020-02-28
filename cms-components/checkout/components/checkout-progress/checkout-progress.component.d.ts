import { RoutingService, RoutingConfigService } from '@spartacus/core';
import { OnInit } from '@angular/core';
import { CheckoutConfig } from '../../config/checkout-config';
import { CheckoutStep } from '../../model/checkout-step.model';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressComponent implements OnInit {
    protected config: CheckoutConfig;
    protected routingService: RoutingService;
    protected routingConfigService: RoutingConfigService;
    constructor(config: CheckoutConfig, routingService: RoutingService, routingConfigService: RoutingConfigService);
    steps: Array<CheckoutStep>;
    routerState$: Observable<any>;
    activeStepIndex: number;
    activeStepUrl: string;
    ngOnInit(): void;
    getTabIndex(stepIndex: number): number;
    isActive(index: number): boolean;
    isDisabled(index: number): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressComponent, "cx-checkout-progress", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LXByb2dyZXNzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCB9IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ2hlY2tvdXRDb25maWc7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2hlY2tvdXRDb25maWcsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlKTtcbiAgICBzdGVwczogQXJyYXk8Q2hlY2tvdXRTdGVwPjtcbiAgICByb3V0ZXJTdGF0ZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgICBhY3RpdmVTdGVwVXJsOiBzdHJpbmc7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRUYWJJbmRleChzdGVwSW5kZXg6IG51bWJlcik6IG51bWJlcjtcbiAgICBpc0FjdGl2ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbjtcbiAgICBpc0Rpc2FibGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuO1xufVxuIl19