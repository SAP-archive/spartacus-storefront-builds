import { Directive, ElementRef, forwardRef, HostBinding } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
import { DatePickerService } from './date-picker.service';
/**
 * Directive that adds an alternative for the native html5 date picker
 * for those browsers that won't support it, Safari being our main concern.
 *
 * An input with `type="date"` will be ignored by browsers that do not support
 * the native date picker. The default text type will be used instead. This directive
 * introduces a few features to ensure that valid dates are added:
 *
 * - add a placeholder to the text input so that the user understands the date format he should provide
 * - add a pattern validator to the input, based on the the placeholder. Please note that the
 *   standard pattern will no longer be applicable since the pattern is added dynamically.
 * - support the `min` and `max` properties by validating the input against those values.
 *
 * The placeholder is provided by the `DatePickerService.placeholder` to allow for customizations.
 *
 */
export class DatePickerFallbackDirective {
    constructor(elementRef, service) {
        this.elementRef = elementRef;
        this.service = service;
        this.placeholder = this.service.placeholder;
        this.pattern = this.service.pattern;
    }
    validate(formControl) {
        const errors = {};
        if (formControl.value && formControl.value !== '') {
            // we need to do the pattern validation here, as the default
            // pattern validator doesn't work dynamically
            if (!this.service.isValidFormat(formControl.value, this.pattern)) {
                errors.pattern = true;
            }
            if (!errors.pattern) {
                if (this.validateMin(formControl)) {
                    errors.min = true;
                }
                if (this.validateMax(formControl)) {
                    errors.max = true;
                }
            }
        }
        return Object.keys(errors).length === 0 ? null : errors;
    }
    validateMin(formControl) {
        const date = this.service.getDate(formControl.value);
        return date && date < this.min;
    }
    validateMax(formControl) {
        const date = this.service.getDate(formControl.value);
        return date && date > this.max;
    }
    get min() {
        return this.service.getDate(this.host.getAttribute('min'));
    }
    get max() {
        return this.service.getDate(this.host.getAttribute('max'));
    }
    get host() {
        return this.elementRef.nativeElement;
    }
}
DatePickerFallbackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxDatePickerFallback]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => DatePickerFallbackDirective),
                        multi: true,
                    },
                ],
            },] }
];
DatePickerFallbackDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DatePickerService }
];
DatePickerFallbackDirective.propDecorators = {
    placeholder: [{ type: HostBinding, args: ['placeholder',] }],
    pattern: [{ type: HostBinding, args: ['pattern',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItZmFsbGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci1mYWxsYmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBRUwsYUFBYSxHQUdkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBV0gsTUFBTSxPQUFPLDJCQUEyQjtJQUl0QyxZQUNZLFVBQXdDLEVBQ3hDLE9BQTBCO1FBRDFCLGVBQVUsR0FBVixVQUFVLENBQThCO1FBQ3hDLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBTFYsZ0JBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFLcEQsQ0FBQztJQUVKLFFBQVEsQ0FBQyxXQUE0QjtRQUNuQyxNQUFNLE1BQU0sR0FBcUIsRUFBRSxDQUFDO1FBRXBDLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqRCw0REFBNEQ7WUFDNUQsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNqQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztpQkFDbkI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNqQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRjtTQUNGO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFELENBQUM7SUFFUyxXQUFXLENBQUMsV0FBNEI7UUFDaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pDLENBQUM7SUFFUyxXQUFXLENBQUMsV0FBNEI7UUFDaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFjLEdBQUc7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQWMsR0FBRztRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7OztZQWxDbUIsVUFBVTtZQU9yQixpQkFBaUI7OzswQkE2QnZCLFdBQVcsU0FBQyxhQUFhO3NCQUN6QixXQUFXLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBhbiBhbHRlcm5hdGl2ZSBmb3IgdGhlIG5hdGl2ZSBodG1sNSBkYXRlIHBpY2tlclxuICogZm9yIHRob3NlIGJyb3dzZXJzIHRoYXQgd29uJ3Qgc3VwcG9ydCBpdCwgU2FmYXJpIGJlaW5nIG91ciBtYWluIGNvbmNlcm4uXG4gKlxuICogQW4gaW5wdXQgd2l0aCBgdHlwZT1cImRhdGVcImAgd2lsbCBiZSBpZ25vcmVkIGJ5IGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnRcbiAqIHRoZSBuYXRpdmUgZGF0ZSBwaWNrZXIuIFRoZSBkZWZhdWx0IHRleHQgdHlwZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC4gVGhpcyBkaXJlY3RpdmVcbiAqIGludHJvZHVjZXMgYSBmZXcgZmVhdHVyZXMgdG8gZW5zdXJlIHRoYXQgdmFsaWQgZGF0ZXMgYXJlIGFkZGVkOlxuICpcbiAqIC0gYWRkIGEgcGxhY2Vob2xkZXIgdG8gdGhlIHRleHQgaW5wdXQgc28gdGhhdCB0aGUgdXNlciB1bmRlcnN0YW5kcyB0aGUgZGF0ZSBmb3JtYXQgaGUgc2hvdWxkIHByb3ZpZGVcbiAqIC0gYWRkIGEgcGF0dGVybiB2YWxpZGF0b3IgdG8gdGhlIGlucHV0LCBiYXNlZCBvbiB0aGUgdGhlIHBsYWNlaG9sZGVyLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZVxuICogICBzdGFuZGFyZCBwYXR0ZXJuIHdpbGwgbm8gbG9uZ2VyIGJlIGFwcGxpY2FibGUgc2luY2UgdGhlIHBhdHRlcm4gaXMgYWRkZWQgZHluYW1pY2FsbHkuXG4gKiAtIHN1cHBvcnQgdGhlIGBtaW5gIGFuZCBgbWF4YCBwcm9wZXJ0aWVzIGJ5IHZhbGlkYXRpbmcgdGhlIGlucHV0IGFnYWluc3QgdGhvc2UgdmFsdWVzLlxuICpcbiAqIFRoZSBwbGFjZWhvbGRlciBpcyBwcm92aWRlZCBieSB0aGUgYERhdGVQaWNrZXJTZXJ2aWNlLnBsYWNlaG9sZGVyYCB0byBhbGxvdyBmb3IgY3VzdG9taXphdGlvbnMuXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hEYXRlUGlja2VyRmFsbGJhY2tdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJGYWxsYmFja0RpcmVjdGl2ZSksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyRmFsbGJhY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICBASG9zdEJpbmRpbmcoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXIgPSB0aGlzLnNlcnZpY2UucGxhY2Vob2xkZXI7XG4gIEBIb3N0QmluZGluZygncGF0dGVybicpIHBhdHRlcm4gPSB0aGlzLnNlcnZpY2UucGF0dGVybjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogRGF0ZVBpY2tlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHZhbGlkYXRlKGZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7fTtcblxuICAgIGlmIChmb3JtQ29udHJvbC52YWx1ZSAmJiBmb3JtQ29udHJvbC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gZG8gdGhlIHBhdHRlcm4gdmFsaWRhdGlvbiBoZXJlLCBhcyB0aGUgZGVmYXVsdFxuICAgICAgLy8gcGF0dGVybiB2YWxpZGF0b3IgZG9lc24ndCB3b3JrIGR5bmFtaWNhbGx5XG4gICAgICBpZiAoIXRoaXMuc2VydmljZS5pc1ZhbGlkRm9ybWF0KGZvcm1Db250cm9sLnZhbHVlLCB0aGlzLnBhdHRlcm4pKSB7XG4gICAgICAgIGVycm9ycy5wYXR0ZXJuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlcnJvcnMucGF0dGVybikge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZU1pbihmb3JtQ29udHJvbCkpIHtcbiAgICAgICAgICBlcnJvcnMubWluID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZU1heChmb3JtQ29udHJvbCkpIHtcbiAgICAgICAgICBlcnJvcnMubWF4ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBlcnJvcnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNaW4oZm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0ZShmb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgcmV0dXJuIGRhdGUgJiYgZGF0ZSA8IHRoaXMubWluO1xuICB9XG5cbiAgcHJvdGVjdGVkIHZhbGlkYXRlTWF4KGZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5zZXJ2aWNlLmdldERhdGUoZm9ybUNvbnRyb2wudmFsdWUpO1xuICAgIHJldHVybiBkYXRlICYmIGRhdGUgPiB0aGlzLm1heDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbWluKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0RGF0ZSh0aGlzLmhvc3QuZ2V0QXR0cmlidXRlKCdtaW4nKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IG1heCgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldERhdGUodGhpcy5ob3N0LmdldEF0dHJpYnV0ZSgnbWF4JykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBob3N0KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19