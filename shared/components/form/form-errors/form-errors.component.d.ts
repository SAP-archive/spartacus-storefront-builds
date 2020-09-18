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

//# sourceMappingURL=form-errors.component.d.ts.map