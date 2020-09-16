import { Component, Input, ChangeDetectionStrategy, HostBinding, } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
/**
 * This component renders form errors.
 */
export class FormErrorsComponent {
    set control(control) {
        this._control = control;
        this.errors$ = control === null || control === void 0 ? void 0 : control.statusChanges.pipe(startWith({}), map(() => control.errors || {}), map((errors) => Object.entries(errors)
            .filter((error) => error[1])
            .map((error) => error[0])));
    }
    get control() {
        return this._control;
    }
    get invalid() {
        return this.control.invalid;
    }
    get dirty() {
        return this.control.dirty;
    }
    get touched() {
        return this.control.touched;
    }
}
FormErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-form-errors',
                template: "<p *ngFor=\"let errorName of errors$ | async\">\n  {{ 'formErrors.' + errorName | cxTranslate }}\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FormErrorsComponent.propDecorators = {
    control: [{ type: Input }],
    invalid: [{ type: HostBinding, args: ['class.control-invalid',] }],
    dirty: [{ type: HostBinding, args: ['class.control-dirty',] }],
    touched: [{ type: HostBinding, args: ['class.control-touched',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhEOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixJQUNJLE9BQU8sQ0FBQyxPQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxhQUFhLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDbkIsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0IsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBMEMsT0FBTztRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUF3QyxLQUFLO1FBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQTBDLE9BQU87UUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG9IQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztzQkFLRSxLQUFLO3NCQW1CTCxXQUFXLFNBQUMsdUJBQXVCO29CQUduQyxXQUFXLFNBQUMscUJBQXFCO3NCQUdqQyxXQUFXLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyBmb3JtIGVycm9ycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZm9ybS1lcnJvcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1lcnJvcnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc0NvbXBvbmVudCB7XG4gIF9jb250cm9sOiBGb3JtQ29udHJvbDtcbiAgZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbnRyb2woY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbiAgICB0aGlzLl9jb250cm9sID0gY29udHJvbDtcblxuICAgIHRoaXMuZXJyb3JzJCA9IGNvbnRyb2w/LnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgICBtYXAoKCkgPT4gY29udHJvbC5lcnJvcnMgfHwge30pLFxuICAgICAgbWFwKChlcnJvcnMpID0+XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9ycylcbiAgICAgICAgICAuZmlsdGVyKChlcnJvcikgPT4gZXJyb3JbMV0pXG4gICAgICAgICAgLm1hcCgoZXJyb3IpID0+IGVycm9yWzBdKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2w7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRyb2wtaW52YWxpZCcpIGdldCBpbnZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuaW52YWxpZDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRyb2wtZGlydHknKSBnZXQgZGlydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRyb2wtdG91Y2hlZCcpIGdldCB0b3VjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcbiAgfVxufVxuIl19