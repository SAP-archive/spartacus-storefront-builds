import { Injectable } from '@angular/core';
import { DaysOfWeek, recurrencePeriod, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CheckoutReplenishmentFormService {
    constructor() {
        /**
         * Default form data
         */
        this.defaultFormData = {
            daysOfWeek: [DaysOfWeek.MONDAY],
            nthDayOfMonth: '1',
            numberOfDays: '14',
            numberOfWeeks: '1',
            recurrencePeriod: recurrencePeriod.DAILY,
            replenishmentStartDate: new Date().toISOString().split('T')[0],
        };
        this.scheduleReplenishmentFormData$ = new BehaviorSubject(this.defaultFormData);
    }
    getScheduleReplenishmentFormData() {
        return this.scheduleReplenishmentFormData$.asObservable();
    }
    setScheduleReplenishmentFormData(formData) {
        this.scheduleReplenishmentFormData$.next(formData);
    }
    resetScheduleReplenishmentFormData() {
        this.scheduleReplenishmentFormData$.next(this.defaultFormData);
    }
}
CheckoutReplenishmentFormService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutReplenishmentFormService_Factory() { return new CheckoutReplenishmentFormService(); }, token: CheckoutReplenishmentFormService, providedIn: "root" });
CheckoutReplenishmentFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutReplenishmentFormService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcmVwbGVuaXNobWVudC1mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1yZXBsZW5pc2htZW50LWZvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsZ0JBQWdCLEdBRWpCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLGdDQUFnQztJQWlCM0M7UUFoQkE7O1dBRUc7UUFDTSxvQkFBZSxHQUE4QjtZQUNwRCxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQy9CLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDeEMsc0JBQXNCLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9ELENBQUM7UUFFTSxtQ0FBOEIsR0FFbEMsSUFBSSxlQUFlLENBQTRCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBRWhCLGdDQUFnQztRQUM5QixPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZ0NBQWdDLENBQUMsUUFBbUM7UUFDbEUsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0NBQWtDO1FBQ2hDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGF5c09mV2VlayxcbiAgcmVjdXJyZW5jZVBlcmlvZCxcbiAgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2Uge1xuICAvKipcbiAgICogRGVmYXVsdCBmb3JtIGRhdGFcbiAgICovXG4gIHJlYWRvbmx5IGRlZmF1bHRGb3JtRGF0YTogU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSA9IHtcbiAgICBkYXlzT2ZXZWVrOiBbRGF5c09mV2Vlay5NT05EQVldLFxuICAgIG50aERheU9mTW9udGg6ICcxJyxcbiAgICBudW1iZXJPZkRheXM6ICcxNCcsXG4gICAgbnVtYmVyT2ZXZWVrczogJzEnLFxuICAgIHJlY3VycmVuY2VQZXJpb2Q6IHJlY3VycmVuY2VQZXJpb2QuREFJTFksXG4gICAgcmVwbGVuaXNobWVudFN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gIH07XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSQ6IEJlaGF2aW9yU3ViamVjdDxcbiAgICBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0+KHRoaXMuZGVmYXVsdEZvcm1EYXRhKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoKTogT2JzZXJ2YWJsZTxTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtPiB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoZm9ybURhdGE6IFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0pOiB2b2lkIHtcbiAgICB0aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhJC5uZXh0KGZvcm1EYXRhKTtcbiAgfVxuXG4gIHJlc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5zY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSQubmV4dCh0aGlzLmRlZmF1bHRGb3JtRGF0YSk7XG4gIH1cbn1cbiJdfQ==