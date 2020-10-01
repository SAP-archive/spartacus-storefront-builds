import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, DaysOfWeek, ORDER_TYPE, ScheduleReplenishmentForm } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
import { CheckoutReplenishmentFormService } from '../../services/checkout-replenishment-form-service';
import * as ɵngcc0 from '@angular/core';
export declare class ScheduleReplenishmentOrderComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected checkoutReplenishmentFormService: CheckoutReplenishmentFormService;
    private subscription;
    iconTypes: typeof ICON_TYPE;
    orderTypes: typeof ORDER_TYPE;
    daysOfWeek: any[];
    recurrencePeriodType: any[];
    selectedOrderType$: Observable<ORDER_TYPE>;
    isMonthly: Boolean;
    isWeekly: Boolean;
    currentDaysOfWeek: DaysOfWeek[];
    numberOfDays: string[];
    numberOfWeeks: string[];
    currentDate: string;
    scheduleReplenishmentFormData: ScheduleReplenishmentForm;
    constructor(checkoutService: CheckoutService, checkoutReplenishmentFormService: CheckoutReplenishmentFormService);
    ngOnInit(): void;
    changeOrderType(orderType: ORDER_TYPE): void;
    changeNumberOfDays(nDays: string): void;
    changeNumberOfWeeks(nWeeks: string): void;
    changeRecurrencePeriodType(type: string): void;
    changeDayOfTheMonth(dayOfMonth: string): void;
    changeReplenishmentStartDate(date: string): void;
    changeRepeatDays(day: DaysOfWeek, isChecked: boolean): void;
    hasDaysOfWeekChecked(day: DaysOfWeek): boolean;
    currentISODate(date: string): string;
    private initConfig;
    private createNumberStringArray;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScheduleReplenishmentOrderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScheduleReplenishmentOrderComponent, "cx-schedule-replenishment-order", never, {}, {}, never, never>;
}

//# sourceMappingURL=schedule-replenishment-order.component.d.ts.map