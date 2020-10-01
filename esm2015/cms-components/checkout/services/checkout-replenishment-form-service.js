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
            replenishmentStartDate: new Date().toISOString(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcmVwbGVuaXNobWVudC1mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1yZXBsZW5pc2htZW50LWZvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsZ0JBQWdCLEdBRWpCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLGdDQUFnQztJQWlCM0M7UUFoQkE7O1dBRUc7UUFDTSxvQkFBZSxHQUE4QjtZQUNwRCxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQy9CLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDeEMsc0JBQXNCLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7U0FDakQsQ0FBQztRQUVNLG1DQUE4QixHQUVsQyxJQUFJLGVBQWUsQ0FBNEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTFELENBQUM7SUFFaEIsZ0NBQWdDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxnQ0FBZ0MsQ0FBQyxRQUFtQztRQUNsRSxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxrQ0FBa0M7UUFDaEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEYXlzT2ZXZWVrLFxuICByZWN1cnJlbmNlUGVyaW9kLFxuICBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZSB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGZvcm0gZGF0YVxuICAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdEZvcm1EYXRhOiBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtID0ge1xuICAgIGRheXNPZldlZWs6IFtEYXlzT2ZXZWVrLk1PTkRBWV0sXG4gICAgbnRoRGF5T2ZNb250aDogJzEnLFxuICAgIG51bWJlck9mRGF5czogJzE0JyxcbiAgICBudW1iZXJPZldlZWtzOiAnMScsXG4gICAgcmVjdXJyZW5jZVBlcmlvZDogcmVjdXJyZW5jZVBlcmlvZC5EQUlMWSxcbiAgICByZXBsZW5pc2htZW50U3RhcnREYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSQ6IEJlaGF2aW9yU3ViamVjdDxcbiAgICBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0+KHRoaXMuZGVmYXVsdEZvcm1EYXRhKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoKTogT2JzZXJ2YWJsZTxTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtPiB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoZm9ybURhdGE6IFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0pOiB2b2lkIHtcbiAgICB0aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhJC5uZXh0KGZvcm1EYXRhKTtcbiAgfVxuXG4gIHJlc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5zY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSQubmV4dCh0aGlzLmRlZmF1bHRGb3JtRGF0YSk7XG4gIH1cbn1cbiJdfQ==