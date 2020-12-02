import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
/**
 * This component renders form errors.
 */
export class FormErrorsComponent {
    constructor() {
        this.prefix = 'formErrors';
    }
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
                template: "<p *ngFor=\"let errorName of errors$ | async\">\n  {{ prefix + '.' + errorName | cxTranslate: translationParams }}\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FormErrorsComponent.propDecorators = {
    prefix: [{ type: Input }],
    translationParams: [{ type: Input }],
    control: [{ type: Input }],
    invalid: [{ type: HostBinding, args: ['class.control-invalid',] }],
    dirty: [{ type: HostBinding, args: ['class.control-dirty',] }],
    touched: [{ type: HostBinding, args: ['class.control-touched',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhEOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQVNXLFdBQU0sR0FBRyxZQUFZLENBQUM7SUFpQ2pDLENBQUM7SUE1QkMsSUFDSSxPQUFPLENBQUMsT0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUMvQixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ25CLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzVCLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQTBDLE9BQU87O1FBQy9DLGFBQU8sSUFBSSxDQUFDLE9BQU8sMENBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUF3QyxLQUFLOztRQUMzQyxhQUFPLElBQUksQ0FBQyxPQUFPLDBDQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBMEMsT0FBTzs7UUFDL0MsYUFBTyxJQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixzSUFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7cUJBS0UsS0FBSztnQ0FFTCxLQUFLO3NCQUdMLEtBQUs7c0JBbUJMLFdBQVcsU0FBQyx1QkFBdUI7b0JBR25DLFdBQVcsU0FBQyxxQkFBcUI7c0JBR2pDLFdBQVcsU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGZvcm0gZXJyb3JzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb3JtLWVycm9ycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWVycm9ycy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JzQ29tcG9uZW50IHtcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xuICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBASW5wdXQoKSBwcmVmaXggPSAnZm9ybUVycm9ycyc7XG5cbiAgQElucHV0KClcbiAgdHJhbnNsYXRpb25QYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbnRyb2woY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbiAgICB0aGlzLl9jb250cm9sID0gY29udHJvbDtcblxuICAgIHRoaXMuZXJyb3JzJCA9IGNvbnRyb2w/LnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgICBtYXAoKCkgPT4gY29udHJvbC5lcnJvcnMgfHwge30pLFxuICAgICAgbWFwKChlcnJvcnMpID0+XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9ycylcbiAgICAgICAgICAuZmlsdGVyKChlcnJvcikgPT4gZXJyb3JbMV0pXG4gICAgICAgICAgLm1hcCgoZXJyb3IpID0+IGVycm9yWzBdKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2w7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRyb2wtaW52YWxpZCcpIGdldCBpbnZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LmludmFsaWQ7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb250cm9sLWRpcnR5JykgZ2V0IGRpcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LmRpcnR5O1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC10b3VjaGVkJykgZ2V0IHRvdWNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8udG91Y2hlZDtcbiAgfVxufVxuIl19