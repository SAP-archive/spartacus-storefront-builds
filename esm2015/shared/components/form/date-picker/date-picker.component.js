import { Component, EventEmitter, Input, Output } from '@angular/core';
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
        this.update = new EventEmitter();
    }
    change() {
        this.update.emit();
    }
    get placeholder() {
        return this.service.placeholder;
    }
    get pattern() {
        return this.service.pattern;
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
                template: "<input\n  class=\"form-control\"\n  type=\"date\"\n  [formControl]=\"control\"\n  [attr.min]=\"min\"\n  [attr.max]=\"max\"\n  (change)=\"change()\"\n  [placeholder]=\"placeholder\"\n  [pattern]=\"pattern\"\n/>\n<cx-form-errors\n  [control]=\"control\"\n  prefix=\"formErrors.date\"\n  [translationParams]=\"{\n    max: getDate(max) | cxDate,\n    min: getDate(min) | cxDate\n  }\"\n></cx-form-errors>\n"
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: DatePickerService }
];
DatePickerComponent.propDecorators = {
    control: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    update: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDs7Ozs7Ozs7O0dBU0c7QUFPSCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQXNCLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBS3RDLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUxQLENBQUM7SUFPcEQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFFSCxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDhaQUEyQzthQUc1Qzs7O1lBakJRLGlCQUFpQjs7O3NCQW9CdkIsS0FBSztrQkFDTCxLQUFLO2tCQUNMLEtBQUs7cUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBhZGRzIGEgZGF0ZSBjb250cm9sLiBXaGlsZSB0aGUgbmF0aXZlIGRhdGUgcGlja2VyIHdvcmtzIGluIG1vc3RcbiAqIG1vZGVybiBicm93c2Vycywgc29tZSBicm93c2VycyBuZWVkIG1vcmUgZ3VpZGFuY2UgKHBsYWNlaG9sZGVyKSwgdmFsaWRhdGlvbiBhbmRcbiAqIGRhdGUgY29udmVyc2lvbi5cbiAqXG4gKiBUaGUgZGF0YSBwaWNrZXIgc3VwcG9ydHMgKG9wdGlvbmFsKSBtaW4gYW5kIG1heCBmb3JtIGNvbnRyb2xzLCBzbyB0aGF0IHlvdSBjYW5cbiAqIGxpbWl0IHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGUuXG4gKlxuICogTW9zdCBvZiB0aGUgaW1wbGVtZW50YXRpb24gaXMgZG9uZSBpbiB0aGUgYERhdGVQaWNrZXJGYWxsYmFja0RpcmVjdGl2ZWAuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgLy8gd2UgY2Fubm90IHVzZSBvblB1c2ggY2hhbmdlIGRldGVjdGlvbiBhcyB0aGUgZm9ybSBzdGF0ZSBpc24ndCB1cGRhdGVkIHdpdGhvdXQgZXhwbGljaXRcbiAgLy8gY2hhbmdlIGRldGVjdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2XG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogRGF0ZVBpY2tlclNlcnZpY2UpIHt9XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICBASW5wdXQoKSBtaW4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heD86IHN0cmluZztcblxuICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlLmVtaXQoKTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnBsYWNlaG9sZGVyO1xuICB9XG5cbiAgZ2V0IHBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5wYXR0ZXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgcmV0dXJucyB0aGUgZGF0ZSBpZiB3ZSBoYXZlIGEgdmFsaWQgZm9ybWF0LiBXZSBkbyB0aGlzIHRvIGF2b2lkXG4gICAqIGxvYWRzIG9mIGNvbnNvbGUgZXJyb3JzIGNvbWluZyBmcm9tIHRoZSBkYXRlUGlwZSB3aGlsZSB0aGUgdXNlciBpcyB0eXBpbmdcbiAgICogKGluIHRob3NlIGJyb3dzZXJzIHdoZXJlIHRoZSBkYXRlIHBpY2tlciBpc24ndCBzdXBwb3J0ZWQpLlxuICAgKi9cblxuICBnZXREYXRlKGRhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1ZhbGlkRm9ybWF0KGRhdGUpID8gZGF0ZSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==