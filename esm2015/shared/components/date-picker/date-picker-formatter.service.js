import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DatePickerFormatterService {
    constructor() { }
    toNative(value) {
        return value ? new Date(value).toISOString().split('T')[0] : null;
    }
    toModel(value, endOfDay) {
        if (value) {
            let date = new Date(value)
                .toISOString()
                .replace('.', '+')
                .replace('Z', '0');
            if (endOfDay) {
                date = date.replace('00:00:00', '23:59:59');
            }
            return date;
        }
    }
}
DatePickerFormatterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatePickerFormatterService_Factory() { return new DatePickerFormatterService(); }, token: DatePickerFormatterService, providedIn: "root" });
DatePickerFormatterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DatePickerFormatterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3RDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QixXQUFXLEVBQUU7aUJBQ2IsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7aUJBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFckIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckZvcm1hdHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9OYXRpdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlID8gbmV3IERhdGUodmFsdWUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSA6IG51bGw7XG4gIH1cblxuICB0b01vZGVsKHZhbHVlOiBzdHJpbmcsIGVuZE9mRGF5OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodmFsdWUpXG4gICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKCcuJywgJysnKVxuICAgICAgICAucmVwbGFjZSgnWicsICcwJyk7XG5cbiAgICAgIGlmIChlbmRPZkRheSkge1xuICAgICAgICBkYXRlID0gZGF0ZS5yZXBsYWNlKCcwMDowMDowMCcsICcyMzo1OTo1OScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=