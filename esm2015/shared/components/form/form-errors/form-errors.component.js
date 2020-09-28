import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
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
        var _a;
        return (_a = this.control) === null || _a === void 0 ? void 0 : _a.invalid;
    }
    get dirty() {
        var _a;
        return (_a = this.control) === null || _a === void 0 ? void 0 : _a.dirty;
    }
    get touched() {
        var _a;
        return (_a = this.control) === null || _a === void 0 ? void 0 : _a.touched;
    }
}
FormErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-form-errors',
                template: "<p *ngFor=\"let errorName of errors$ | async\">\n  {{ 'formErrors.' + errorName | cxTranslate: translationParams }}\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FormErrorsComponent.propDecorators = {
    translationParams: [{ type: Input }],
    control: [{ type: Input }],
    invalid: [{ type: HostBinding, args: ['class.control-invalid',] }],
    dirty: [{ type: HostBinding, args: ['class.control-dirty',] }],
    touched: [{ type: HostBinding, args: ['class.control-touched',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhEOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQU85QixJQUNJLE9BQU8sQ0FBQyxPQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxhQUFhLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDbkIsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0IsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBMEMsT0FBTzs7UUFDL0MsYUFBTyxJQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQXdDLEtBQUs7O1FBQzNDLGFBQU8sSUFBSSxDQUFDLE9BQU8sMENBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUEwQyxPQUFPOztRQUMvQyxhQUFPLElBQUksQ0FBQyxPQUFPLDBDQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHVJQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztnQ0FLRSxLQUFLO3NCQUdMLEtBQUs7c0JBbUJMLFdBQVcsU0FBQyx1QkFBdUI7b0JBR25DLFdBQVcsU0FBQyxxQkFBcUI7c0JBR2pDLFdBQVcsU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGZvcm0gZXJyb3JzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb3JtLWVycm9ycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWVycm9ycy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JzQ29tcG9uZW50IHtcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xuICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBASW5wdXQoKVxuICB0cmFuc2xhdGlvblBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBASW5wdXQoKVxuICBzZXQgY29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb250cm9sO1xuXG4gICAgdGhpcy5lcnJvcnMkID0gY29udHJvbD8uc3RhdHVzQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKHt9KSxcbiAgICAgIG1hcCgoKSA9PiBjb250cm9sLmVycm9ycyB8fCB7fSksXG4gICAgICBtYXAoKGVycm9ycykgPT5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3JzKVxuICAgICAgICAgIC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvclsxXSlcbiAgICAgICAgICAubWFwKChlcnJvcikgPT4gZXJyb3JbMF0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC1pbnZhbGlkJykgZ2V0IGludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8uaW52YWxpZDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRyb2wtZGlydHknKSBnZXQgZGlydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8uZGlydHk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb250cm9sLXRvdWNoZWQnKSBnZXQgdG91Y2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sPy50b3VjaGVkO1xuICB9XG59XG4iXX0=