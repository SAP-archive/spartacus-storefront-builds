import { Component, ElementRef, forwardRef, Input, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { DateTimePickerFormatterService } from './date-time-picker-formatter.service';
/**
 * This component serves the browser's native `<input type="datetime-local">` HTML element
 * in whilst projecting the value in the standard date format with regards to timezone offsets.
 */
export class DateTimePickerComponent {
    constructor(dateFormatterService) {
        this.dateFormatterService = dateFormatterService;
        this.nativeValue = null;
    }
    /**
     * Handler method for input interactions.
     * @param event: Input event.
     */
    onInput(event) {
        this.value = this.dateFormatterService.toModel(event.target.value);
        this.nativeValue = event.target.value;
        this.onChange(this.value);
    }
    /**
     * Handler method for when the value is modified.
     * @param event: Change event.
     */
    onChange(_event) { }
    /**
     * Handler method for when the element is interacted with.
     */
    onTouched() { }
    /**
     * Register the `onChange()` handler method.
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Register the `onTouched()` handler method.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Set the value of the input element.
     * @param value: Date-like string to be set
     */
    writeValue(value) {
        if (value) {
            this.value = value;
            this.nativeValue = this.dateFormatterService.toNative(value);
        }
    }
    /**
     * Get the minimum value allowed for the input.
     */
    getMin() {
        return this.dateFormatterService.toNative(this.min);
    }
    /**
     * Get the maximum value allowed for the input.
     */
    getMax() {
        return this.dateFormatterService.toNative(this.max);
    }
    /**
     * Returns failing validators if input value is invalid
     */
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
DateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-date-time-picker',
                template: "<input\n  #inputElement\n  type=\"datetime-local\"\n  class=\"form-control\"\n  (blur)=\"onTouched()\"\n  (input)=\"onInput($event)\"\n  [value]=\"nativeValue\"\n  [required]=\"required\"\n  [class.is-invalid]=\"invalid\"\n  [min]=\"getMin()\"\n  [max]=\"getMax()\"\n/>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DateTimePickerComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => DateTimePickerComponent),
                        multi: true,
                    },
                ]
            },] }
];
DateTimePickerComponent.ctorParameters = () => [
    { type: DateTimePickerFormatterService }
];
DateTimePickerComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['inputElement', { static: false, read: ElementRef },] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    required: [{ type: Input }],
    invalid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxhQUFhLEVBQ2IsaUJBQWlCLEdBRWxCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEY7OztHQUdHO0FBaUJILE1BQU0sT0FBTyx1QkFBdUI7SUFtQ2xDLFlBQXNCLG9CQUFvRDtRQUFwRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWdDO1FBaEMxRSxnQkFBVyxHQUFXLElBQUksQ0FBQztJQWdDa0QsQ0FBQztJQUU5RTs7O09BR0c7SUFDSCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxNQUFXLElBQUcsQ0FBQztJQUV4Qjs7T0FFRztJQUNILFNBQVMsS0FBSSxDQUFDO0lBRWQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzFELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNuRCxNQUFNLFVBQVUsR0FBK0IsRUFBRSxDQUFDO1lBQ2xELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtnQkFDMUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDN0I7WUFDRCxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQzNCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxVQUFVLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7WUFoSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDJSQUFnRDtnQkFDaEQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQ3RELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUN0RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7WUFyQlEsOEJBQThCOzs7b0JBOEJwQyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2tCQU03RCxLQUFLO2tCQU1MLEtBQUs7dUJBTUwsS0FBSztzQkFNTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdG9yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlckZvcm1hdHRlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHNlcnZlcyB0aGUgYnJvd3NlcidzIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiPmAgSFRNTCBlbGVtZW50XG4gKiBpbiB3aGlsc3QgcHJvamVjdGluZyB0aGUgdmFsdWUgaW4gdGhlIHN0YW5kYXJkIGRhdGUgZm9ybWF0IHdpdGggcmVnYXJkcyB0byB0aW1lem9uZSBvZmZzZXRzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kYXRlLXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVUaW1lUGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVUaW1lUGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG5hdGl2ZVZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gaW5wdXQgZWxlbWVudCBvZiB0eXBlICdkYXRldGltZS1sb2NhbCcuXG4gICAqL1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gdmFsdWUgYWxsb3dlZCBmb3IgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIG1pbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWF4aW11bSB2YWx1ZSBhbGxvd2VkIGZvciBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KClcbiAgbWF4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSBgcmVxdWlyZWRgIHZhbGlkYXRvci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29uZGl0aW9uIHRvIGRpc3BsYXkgYXMgaW52YWxpZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGludmFsaWQ/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRlRm9ybWF0dGVyU2VydmljZTogRGF0ZVRpbWVQaWNrZXJGb3JtYXR0ZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIG1ldGhvZCBmb3IgaW5wdXQgaW50ZXJhY3Rpb25zLlxuICAgKiBAcGFyYW0gZXZlbnQ6IElucHV0IGV2ZW50LlxuICAgKi9cbiAgb25JbnB1dChldmVudCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmRhdGVGb3JtYXR0ZXJTZXJ2aWNlLnRvTW9kZWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLm5hdGl2ZVZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlciBtZXRob2QgZm9yIHdoZW4gdGhlIHZhbHVlIGlzIG1vZGlmaWVkLlxuICAgKiBAcGFyYW0gZXZlbnQ6IENoYW5nZSBldmVudC5cbiAgICovXG4gIG9uQ2hhbmdlKF9ldmVudDogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBpcyBpbnRlcmFjdGVkIHdpdGguXG4gICAqL1xuICBvblRvdWNoZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYG9uQ2hhbmdlKClgIGhhbmRsZXIgbWV0aG9kLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYG9uVG91Y2hlZCgpYCBoYW5kbGVyIG1ldGhvZC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0gdmFsdWU6IERhdGUtbGlrZSBzdHJpbmcgdG8gYmUgc2V0XG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubmF0aXZlVmFsdWUgPSB0aGlzLmRhdGVGb3JtYXR0ZXJTZXJ2aWNlLnRvTmF0aXZlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW5pbXVtIHZhbHVlIGFsbG93ZWQgZm9yIHRoZSBpbnB1dC5cbiAgICovXG4gIGdldE1pbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXJTZXJ2aWNlLnRvTmF0aXZlKHRoaXMubWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1heGltdW0gdmFsdWUgYWxsb3dlZCBmb3IgdGhlIGlucHV0LlxuICAgKi9cbiAgZ2V0TWF4KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlclNlcnZpY2UudG9OYXRpdmUodGhpcy5tYXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFpbGluZyB2YWxpZGF0b3JzIGlmIGlucHV0IHZhbHVlIGlzIGludmFsaWRcbiAgICovXG4gIHZhbGlkYXRlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGlmICh0aGlzLmlucHV0ICYmICF0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbGlkaXR5O1xuICAgICAgY29uc3QgdmFsaWRhdG9yczogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgICAgIGlmICh2YWxpZGl0eS5yYW5nZU92ZXJmbG93KSB7XG4gICAgICAgIHZhbGlkYXRvcnMuY3hEYXRlTWF4ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWxpZGl0eS5yYW5nZVVuZGVyZmxvdykge1xuICAgICAgICB2YWxpZGF0b3JzLmN4RGF0ZU1pbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgICB9XG4gIH1cbn1cbiJdfQ==