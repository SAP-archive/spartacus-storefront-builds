import { ScheduleReplenishmentForm } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CheckoutReplenishmentFormService {
    /**
     * Default form data
     */
    readonly defaultFormData: ScheduleReplenishmentForm;
    private scheduleReplenishmentFormData$;
    constructor();
    getScheduleReplenishmentFormData(): Observable<ScheduleReplenishmentForm>;
    setScheduleReplenishmentFormData(formData: ScheduleReplenishmentForm): void;
    resetScheduleReplenishmentFormData(): void;
}
