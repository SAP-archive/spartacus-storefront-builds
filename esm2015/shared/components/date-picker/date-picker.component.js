import { Component, ElementRef, forwardRef, Input, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { DatePickerFormatterService } from './date-picker-formatter.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxhQUFhLEVBQ2IsaUJBQWlCLEdBRWxCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFrQjdFLE1BQU0sT0FBTyxtQkFBbUI7SUFzQjlCLFlBQXNCLG9CQUFnRDtRQUFoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1FBcEJ0RSxnQkFBVyxHQUFXLElBQUksQ0FBQztRQVkzQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBUXdELENBQUM7SUFFMUUsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQzVDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNsQixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVyxJQUFHLENBQUM7SUFFeEIsU0FBUyxLQUFJLENBQUM7SUFFZCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDbkQsTUFBTSxVQUFVLEdBQStCLEVBQUUsQ0FBQztZQUNsRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFO2dCQUMzQixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUM3QjtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBeEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixpUkFBMkM7Z0JBQzNDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O1lBakJRLDBCQUEwQjs7O29CQXNCaEMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtrQkFHN0QsS0FBSztrQkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdG9yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyRm9ybWF0dGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXItZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbmF0aXZlVmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIG1pbj86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBtYXg/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZW5kT2ZEYXkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICByZXF1aXJlZD86IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgaW52YWxpZD86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVGb3JtYXR0ZXJTZXJ2aWNlOiBEYXRlUGlja2VyRm9ybWF0dGVyU2VydmljZSkge31cblxuICBvbklucHV0KGV2ZW50KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZGF0ZUZvcm1hdHRlclNlcnZpY2UudG9Nb2RlbChcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIHRoaXMuZW5kT2ZEYXlcbiAgICApO1xuICAgIHRoaXMubmF0aXZlVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKF9ldmVudDogYW55KSB7fVxuXG4gIG9uVG91Y2hlZCgpIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5uYXRpdmVWYWx1ZSA9IHRoaXMuZGF0ZUZvcm1hdHRlclNlcnZpY2UudG9OYXRpdmUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1pbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXJTZXJ2aWNlLnRvTmF0aXZlKHRoaXMubWluKTtcbiAgfVxuXG4gIGdldE1heCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXJTZXJ2aWNlLnRvTmF0aXZlKHRoaXMubWF4KTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGlmICh0aGlzLmlucHV0ICYmICF0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbGlkaXR5O1xuICAgICAgY29uc3QgdmFsaWRhdG9yczogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgICAgIGlmICh2YWxpZGl0eS5yYW5nZU92ZXJmbG93KSB7XG4gICAgICAgIHZhbGlkYXRvcnMuY3hEYXRlTWF4ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWxpZGl0eS5yYW5nZVVuZGVyZmxvdykge1xuICAgICAgICB2YWxpZGF0b3JzLmN4RGF0ZU1pbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgICB9XG4gIH1cbn1cbiJdfQ==