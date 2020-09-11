import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * This component renders form errors.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FormErrorsComponent {
    _control: FormControl;
    errors$: Observable<string[]>;
    set control(control: FormControl);
    get control(): FormControl;
    get invalid(): boolean;
    get dirty(): boolean;
    get touched(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormErrorsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormErrorsComponent, "cx-form-errors", never, { "control": "control"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImZvcm0tZXJyb3JzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHJlbmRlcnMgZm9ybSBlcnJvcnMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvcm1FcnJvcnNDb21wb25lbnQge1xuICAgIF9jb250cm9sOiBGb3JtQ29udHJvbDtcbiAgICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgICBzZXQgY29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCk7XG4gICAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2w7XG4gICAgZ2V0IGludmFsaWQoKTogYm9vbGVhbjtcbiAgICBnZXQgZGlydHkoKTogYm9vbGVhbjtcbiAgICBnZXQgdG91Y2hlZCgpOiBib29sZWFuO1xufVxuIl19