import { Component, ElementRef, forwardRef, Input, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { DatePickerFormatterService } from '@spartacus/core';
export class DatePickerComponent {
    constructor(dateFormatterService) {
        this.dateFormatterService = dateFormatterService;
        this.nativeValue = null;
        this.endOfDay = false;
    }
    onInput(event) {
        this.value = this.dateFormatterService.toModel(event.target.value, this.endOfDay);
        this.nativeValue = event.target.value;
        this.onChange(this.value);
    }
    onChange(_event) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (value) {
            this.value = value;
            this.nativeValue = this.dateFormatterService.toNative(value);
        }
    }
    getMin() {
        return this.dateFormatterService.toNative(this.min);
    }
    getMax() {
        return this.dateFormatterService.toNative(this.max);
    }
    validate() {
        if (this.input && !this.input.nativeElement.validity.valid) {
            const validity = this.input.nativeElement.validity;
            const validators = {};
            if (validity.rangeOverflow) {
                validators.cxDateMax = true;
            }
            if (validity.rangeUnderflow) {
                validators.cxDateMin = true;
            }
            return validators;
        }
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-date-picker',
                template: "<input\n  #inputElement\n  type=\"date\"\n  class=\"form-control\"\n  (blur)=\"onTouched()\"\n  (input)=\"onInput($event)\"\n  [value]=\"nativeValue\"\n  [required]=\"required\"\n  [class.is-invalid]=\"invalid\"\n  [min]=\"getMin()\"\n  [max]=\"getMax()\"\n/>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => DatePickerComponent),
                        multi: true,
                    },
                ]
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: DatePickerFormatterService }
];
DatePickerComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['inputElement', { static: false, read: ElementRef },] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    endOfDay: [{ type: Input }],
    required: [{ type: Input }],
    invalid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxhQUFhLEVBQ2IsaUJBQWlCLEdBRWxCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFrQjdELE1BQU0sT0FBTyxtQkFBbUI7SUFzQjlCLFlBQXNCLG9CQUFnRDtRQUFoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1FBcEJ0RSxnQkFBVyxHQUFXLElBQUksQ0FBQztRQVkzQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBUXdELENBQUM7SUFFMUUsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQzVDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNsQixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVyxJQUFHLENBQUM7SUFFeEIsU0FBUyxLQUFJLENBQUM7SUFFZCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDbkQsTUFBTSxVQUFVLEdBQStCLEVBQUUsQ0FBQztZQUNsRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFO2dCQUMzQixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUM3QjtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBeEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixpUkFBMkM7Z0JBQzNDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O1lBakJRLDBCQUEwQjs7O29CQXNCaEMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtrQkFHN0QsS0FBSztrQkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdG9yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyRm9ybWF0dGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICB2YWx1ZTogc3RyaW5nO1xuICBuYXRpdmVWYWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgbWluPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIG1heD86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBlbmRPZkRheSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBpbnZhbGlkPzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZUZvcm1hdHRlclNlcnZpY2U6IERhdGVQaWNrZXJGb3JtYXR0ZXJTZXJ2aWNlKSB7fVxuXG4gIG9uSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5kYXRlRm9ybWF0dGVyU2VydmljZS50b01vZGVsKFxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgdGhpcy5lbmRPZkRheVxuICAgICk7XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2UoX2V2ZW50OiBhbnkpIHt9XG5cbiAgb25Ub3VjaGVkKCkge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm5hdGl2ZVZhbHVlID0gdGhpcy5kYXRlRm9ybWF0dGVyU2VydmljZS50b05hdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWluKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlclNlcnZpY2UudG9OYXRpdmUodGhpcy5taW4pO1xuICB9XG5cbiAgZ2V0TWF4KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlclNlcnZpY2UudG9OYXRpdmUodGhpcy5tYXgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgaWYgKHRoaXMuaW5wdXQgJiYgIXRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsaWRpdHk7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICAgICAgaWYgKHZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcbiAgICAgICAgdmFsaWRhdG9ycy5jeERhdGVNYXggPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93KSB7XG4gICAgICAgIHZhbGlkYXRvcnMuY3hEYXRlTWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICAgIH1cbiAgfVxufVxuIl19