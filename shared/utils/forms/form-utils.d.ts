import { FormGroup } from '@angular/forms';
/**
 * Utility class when working with forms.
 */
export declare class FormUtils {
    /**
     *
     * Checks is the `formControlName` field valid in the provided `form`.
     *
     * If it's NOT valid, the method returns `true`.
     *
     * @param form a form whose field to check
     * @param formControlName a field name
     * @param submitted is the form submitted
     */
    static isNotValidField(form: FormGroup, formControlName: string, submitted: boolean): boolean;
}
