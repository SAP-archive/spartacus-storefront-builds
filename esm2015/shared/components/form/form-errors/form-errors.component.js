import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding, } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
/**
 * This component renders form errors.
 */
let FormErrorsComponent = class FormErrorsComponent {
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
};
__decorate([
    Input()
], FormErrorsComponent.prototype, "control", null);
__decorate([
    HostBinding('class.control-invalid')
], FormErrorsComponent.prototype, "invalid", null);
__decorate([
    HostBinding('class.control-dirty')
], FormErrorsComponent.prototype, "dirty", null);
__decorate([
    HostBinding('class.control-touched')
], FormErrorsComponent.prototype, "touched", null);
FormErrorsComponent = __decorate([
    Component({
        selector: 'cx-form-errors',
        template: "<p *ngFor=\"let errorName of errors$ | async\">\n  {{ 'formErrors.' + errorName | cxTranslate }}\n</p>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormErrorsComponent);
export { FormErrorsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvZm9ybS9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRDs7R0FFRztBQU1ILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSzlCLElBQUksT0FBTyxDQUFDLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFDL0IsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDYixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUNuQixNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1QixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFcUMsSUFBSSxPQUFPO1FBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUNtQyxJQUFJLEtBQUs7UUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ3FDLElBQUksT0FBTztRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBM0JDO0lBREMsS0FBSyxFQUFFO2tEQWFQO0FBTXFDO0lBQXJDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztrREFFcEM7QUFDbUM7SUFBbkMsV0FBVyxDQUFDLHFCQUFxQixDQUFDO2dEQUVsQztBQUNxQztJQUFyQyxXQUFXLENBQUMsdUJBQXVCLENBQUM7a0RBRXBDO0FBL0JVLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLG9IQUEyQztRQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csbUJBQW1CLENBZ0MvQjtTQWhDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGZvcm0gZXJyb3JzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb3JtLWVycm9ycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWVycm9ycy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JzQ29tcG9uZW50IHtcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xuICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBASW5wdXQoKVxuICBzZXQgY29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb250cm9sO1xuXG4gICAgdGhpcy5lcnJvcnMkID0gY29udHJvbD8uc3RhdHVzQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKHt9KSxcbiAgICAgIG1hcCgoKSA9PiBjb250cm9sLmVycm9ycyB8fCB7fSksXG4gICAgICBtYXAoKGVycm9ycykgPT5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3JzKVxuICAgICAgICAgIC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvclsxXSlcbiAgICAgICAgICAubWFwKChlcnJvcikgPT4gZXJyb3JbMF0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC1pbnZhbGlkJykgZ2V0IGludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5pbnZhbGlkO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC1kaXJ0eScpIGdldCBkaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC10b3VjaGVkJykgZ2V0IHRvdWNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG59XG4iXX0=