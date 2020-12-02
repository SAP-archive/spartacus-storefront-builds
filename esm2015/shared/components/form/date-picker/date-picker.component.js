import { Component, Input } from '@angular/core';
import { DatePickerService } from './date-picker.service';
/**
 * Component that adds a date control. While the native date picker works in most
 * modern browsers, some browsers need more guidance (placeholder), validation and
 * date conversion.
 *
 * The data picker supports (optional) min and max form controls, so that you can
 * limit the start and/or end date.
 *
 * Most of the implementation is done in the `DatePickerFallbackDirective`.
 */
export class DatePickerComponent {
    constructor(service) {
        this.service = service;
    }
    update() {
        var _a, _b;
        // we're updating the min/max controls to ensure that validation kicks in
        (_a = this.min) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
        (_b = this.max) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
    }
    /**
     * Only returns the date if we have a valid format. We do this to avoid
     * loads of console errors coming from the datePipe while the user is typing
     * (in those browsers where the date picker isn't supported).
     */
    getDate(date) {
        return this.service.isValidFormat(date) ? date : null;
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-date-picker',
                template: "<input\n  class=\"form-control\"\n  type=\"date\"\n  [formControl]=\"control\"\n  [attr.min]=\"min?.value\"\n  [attr.max]=\"max?.value\"\n  cxDatePickerFallback\n  (change)=\"update()\"\n/>\n<cx-form-errors\n  [control]=\"control\"\n  prefix=\"formErrors.date\"\n  [translationParams]=\"{\n    max: getDate(max?.value) | cxDate,\n    min: getDate(min?.value) | cxDate\n  }\"\n></cx-form-errors>\n"
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: DatePickerService }
];
DatePickerComponent.propDecorators = {
    control: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7Ozs7Ozs7OztHQVNHO0FBT0gsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFzQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFHLENBQUM7SUFLcEQsTUFBTTs7UUFDSix5RUFBeUU7UUFDekUsTUFBQSxJQUFJLENBQUMsR0FBRywwQ0FBRSxzQkFBc0IsR0FBRztRQUNuQyxNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLHNCQUFzQixHQUFHO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix3WkFBMkM7YUFHNUM7OztZQWpCUSxpQkFBaUI7OztzQkFvQnZCLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgYWRkcyBhIGRhdGUgY29udHJvbC4gV2hpbGUgdGhlIG5hdGl2ZSBkYXRlIHBpY2tlciB3b3JrcyBpbiBtb3N0XG4gKiBtb2Rlcm4gYnJvd3NlcnMsIHNvbWUgYnJvd3NlcnMgbmVlZCBtb3JlIGd1aWRhbmNlIChwbGFjZWhvbGRlciksIHZhbGlkYXRpb24gYW5kXG4gKiBkYXRlIGNvbnZlcnNpb24uXG4gKlxuICogVGhlIGRhdGEgcGlja2VyIHN1cHBvcnRzIChvcHRpb25hbCkgbWluIGFuZCBtYXggZm9ybSBjb250cm9scywgc28gdGhhdCB5b3UgY2FuXG4gKiBsaW1pdCB0aGUgc3RhcnQgYW5kL29yIGVuZCBkYXRlLlxuICpcbiAqIE1vc3Qgb2YgdGhlIGltcGxlbWVudGF0aW9uIGlzIGRvbmUgaW4gdGhlIGBEYXRlUGlja2VyRmFsbGJhY2tEaXJlY3RpdmVgLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIC8vIHdlIGNhbm5vdCB1c2Ugb25QdXNoIGNoYW5nZSBkZXRlY3Rpb24gYXMgdGhlIGZvcm0gc3RhdGUgaXNuJ3QgdXBkYXRlZCB3aXRob3V0IGV4cGxpY2l0XG4gIC8vIGNoYW5nZSBkZXRlY3Rpb24sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDgxNlxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlKSB7fVxuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgQElucHV0KCkgbWluOiBGb3JtQ29udHJvbDtcbiAgQElucHV0KCkgbWF4OiBGb3JtQ29udHJvbDtcblxuICB1cGRhdGUoKSB7XG4gICAgLy8gd2UncmUgdXBkYXRpbmcgdGhlIG1pbi9tYXggY29udHJvbHMgdG8gZW5zdXJlIHRoYXQgdmFsaWRhdGlvbiBraWNrcyBpblxuICAgIHRoaXMubWluPy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5tYXg/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHJldHVybnMgdGhlIGRhdGUgaWYgd2UgaGF2ZSBhIHZhbGlkIGZvcm1hdC4gV2UgZG8gdGhpcyB0byBhdm9pZFxuICAgKiBsb2FkcyBvZiBjb25zb2xlIGVycm9ycyBjb21pbmcgZnJvbSB0aGUgZGF0ZVBpcGUgd2hpbGUgdGhlIHVzZXIgaXMgdHlwaW5nXG4gICAqIChpbiB0aG9zZSBicm93c2VycyB3aGVyZSB0aGUgZGF0ZSBwaWNrZXIgaXNuJ3Qgc3VwcG9ydGVkKS5cbiAgICovXG4gIGdldERhdGUoZGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmFsaWRGb3JtYXQoZGF0ZSkgPyBkYXRlIDogbnVsbDtcbiAgfVxufVxuIl19