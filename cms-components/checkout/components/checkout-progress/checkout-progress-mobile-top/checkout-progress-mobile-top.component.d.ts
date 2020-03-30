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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileTopComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileTopComponent, "cx-checkout-progress-mobile-top", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBDYXJ0LCBSb3V0aW5nQ29uZmlnU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ2hlY2tvdXRDb25maWc7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDaGVja291dENvbmZpZywgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgc3RlcHM6IEFycmF5PENoZWNrb3V0U3RlcD47XG4gICAgcm91dGVyU3RhdGUkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gICAgYWN0aXZlU3RlcFVybDogc3RyaW5nO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=