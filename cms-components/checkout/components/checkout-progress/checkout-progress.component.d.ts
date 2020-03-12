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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LXByb2dyZXNzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDaGVja291dENvbmZpZztcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDaGVja291dENvbmZpZywgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UpO1xuICAgIHN0ZXBzOiBBcnJheTxDaGVja291dFN0ZXA+O1xuICAgIHJvdXRlclN0YXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICAgIGFjdGl2ZVN0ZXBVcmw6IHN0cmluZztcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGdldFRhYkluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogbnVtYmVyO1xuICAgIGlzQWN0aXZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuO1xuICAgIGlzRGlzYWJsZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW47XG59XG4iXX0=