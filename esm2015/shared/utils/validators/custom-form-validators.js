import { EMAIL_PATTERN, PASSWORD_PATTERN } from '@spartacus/core';
export class CustomFormValidators {
    /**
     * Checks control's value with predefined email regexp
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxInvalidEmail' validator error
     * @memberof CustomFormValidators
     */
    static emailValidator(control) {
        const email = control.value;
        return !email.length || email.match(EMAIL_PATTERN)
            ? null
            : { cxInvalidEmail: true };
    }
    /**
     * Checks control's value with predefined password regexp
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxInvalidPassword' validator error
     * @memberof CustomFormValidators
     */
    static passwordValidator(control) {
        const password = control.value;
        return !password.length || password.match(PASSWORD_PATTERN)
            ? null
            : { cxInvalidPassword: true };
    }
    /**
     * Checks if control's value is between 1 and 5
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxStarRatingEmpty' validator error
     * @memberof CustomFormValidators
     */
    static starRatingEmpty(control) {
        const rating = control.value;
        return rating >= 1 && rating <= 5 ? null : { cxStarRatingEmpty: true };
    }
    /**
     * Checks if two password controls match
     *
     * NOTE: Use it as a form validator and pass password control names as parameters
     *
     * @static
     * @param {string} password First password control name
     * @param {string} passwordConfirmation Second password control name
     * @returns Uses 'cxPasswordsMustMatch' validator error
     * @memberof CustomFormValidators
     */
    static passwordsMustMatch(password, passwordConfirmation) {
        const validator = (formGroup) => controlsMustMatch(formGroup, password, passwordConfirmation, 'cxPasswordsMustMatch');
        return validator;
    }
    /**
     * Checks if two email controls match
     *
     * NOTE: Use it as a form validator and pass email control names as parameters
     *
     * @static
     * @param {string} email First email control name
     * @param {string} emailConfirmation Second email control name
     * @returns Uses 'cxEmailsMustMatch' validator error
     * @memberof CustomFormValidators
     */
    static emailsMustMatch(email, emailConfirmation) {
        const validator = (formGroup) => controlsMustMatch(formGroup, email, emailConfirmation, 'cxEmailsMustMatch');
        return validator;
    }
}
/**
 * Generic function for validators, which checks if two passed controls match.
 *
 * @param formGroup
 * @param firstControlName First control to check
 * @param secondControlName Second control to check
 * @param errorName Error which will be returned by validator
 */
export function controlsMustMatch(formGroup, firstControlName, secondControlName, errorName) {
    const firstControl = formGroup.controls[firstControlName];
    const secondControl = formGroup.controls[secondControlName];
    if (secondControl.errors && !secondControl.errors[errorName]) {
        return;
    }
    secondControl.setErrors(firstControl.value !== secondControl.value ? { [errorName]: true } : null);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0I7Ozs7Ozs7OztPQVNHO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUF3QjtRQUM1QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBZSxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBd0I7UUFDL0MsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQWUsQ0FBQztRQUV6QyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ3pELENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBd0I7UUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQWUsQ0FBQztRQUV2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsTUFBTSxDQUFDLGtCQUFrQixDQUN2QixRQUFnQixFQUNoQixvQkFBNEI7UUFFNUIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FDekMsaUJBQWlCLENBQ2YsU0FBUyxFQUNULFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsc0JBQXNCLENBQ3ZCLENBQUM7UUFFSixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBYSxFQUFFLGlCQUF5QjtRQUM3RCxNQUFNLFNBQVMsR0FBRyxDQUFDLFNBQW9CLEVBQUUsRUFBRSxDQUN6QyxpQkFBaUIsQ0FDZixTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixtQkFBbUIsQ0FDcEIsQ0FBQztRQUVKLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFNBQW9CLEVBQ3BCLGdCQUF3QixFQUN4QixpQkFBeUIsRUFDekIsU0FBaUI7SUFFakIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFELE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUU1RCxJQUFJLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzVELE9BQU87S0FDUjtJQUVELGFBQWEsQ0FBQyxTQUFTLENBQ3JCLFlBQVksQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzFFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTUFJTF9QQVRURVJOLCBQQVNTV09SRF9QQVRURVJOIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbUZvcm1WYWxpZGF0b3JzIHtcbiAgLyoqXG4gICAqIENoZWNrcyBjb250cm9sJ3MgdmFsdWUgd2l0aCBwcmVkZWZpbmVkIGVtYWlsIHJlZ2V4cFxuICAgKlxuICAgKiBOT1RFOiBVc2UgaXQgYXMgYSBjb250cm9sIHZhbGlkYXRvclxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sXG4gICAqIEByZXR1cm5zIHsoVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpfSBVc2VzICdjeEludmFsaWRFbWFpbCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBlbWFpbCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuXG4gICAgcmV0dXJuICFlbWFpbC5sZW5ndGggfHwgZW1haWwubWF0Y2goRU1BSUxfUEFUVEVSTilcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IGN4SW52YWxpZEVtYWlsOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGNvbnRyb2wncyB2YWx1ZSB3aXRoIHByZWRlZmluZWQgcGFzc3dvcmQgcmVnZXhwXG4gICAqXG4gICAqIE5PVEU6IFVzZSBpdCBhcyBhIGNvbnRyb2wgdmFsaWRhdG9yXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9IGNvbnRyb2xcbiAgICogQHJldHVybnMgeyhWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCl9IFVzZXMgJ2N4SW52YWxpZFBhc3N3b3JkJyB2YWxpZGF0b3IgZXJyb3JcbiAgICogQG1lbWJlcm9mIEN1c3RvbUZvcm1WYWxpZGF0b3JzXG4gICAqL1xuICBzdGF0aWMgcGFzc3dvcmRWYWxpZGF0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gY29udHJvbC52YWx1ZSBhcyBzdHJpbmc7XG5cbiAgICByZXR1cm4gIXBhc3N3b3JkLmxlbmd0aCB8fCBwYXNzd29yZC5tYXRjaChQQVNTV09SRF9QQVRURVJOKVxuICAgICAgPyBudWxsXG4gICAgICA6IHsgY3hJbnZhbGlkUGFzc3dvcmQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgY29udHJvbCdzIHZhbHVlIGlzIGJldHdlZW4gMSBhbmQgNVxuICAgKlxuICAgKiBOT1RFOiBVc2UgaXQgYXMgYSBjb250cm9sIHZhbGlkYXRvclxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sXG4gICAqIEByZXR1cm5zIHsoVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpfSBVc2VzICdjeFN0YXJSYXRpbmdFbXB0eScgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIHN0YXJSYXRpbmdFbXB0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgcmF0aW5nID0gY29udHJvbC52YWx1ZSBhcyBudW1iZXI7XG5cbiAgICByZXR1cm4gcmF0aW5nID49IDEgJiYgcmF0aW5nIDw9IDUgPyBudWxsIDogeyBjeFN0YXJSYXRpbmdFbXB0eTogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0d28gcGFzc3dvcmQgY29udHJvbHMgbWF0Y2hcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgZm9ybSB2YWxpZGF0b3IgYW5kIHBhc3MgcGFzc3dvcmQgY29udHJvbCBuYW1lcyBhcyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIEZpcnN0IHBhc3N3b3JkIGNvbnRyb2wgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmRDb25maXJtYXRpb24gU2Vjb25kIHBhc3N3b3JkIGNvbnRyb2wgbmFtZVxuICAgKiBAcmV0dXJucyBVc2VzICdjeFBhc3N3b3Jkc011c3RNYXRjaCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIHBhc3N3b3Jkc011c3RNYXRjaChcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBzdHJpbmdcbiAgKTogYW55IHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+XG4gICAgICBjb250cm9sc011c3RNYXRjaChcbiAgICAgICAgZm9ybUdyb3VwLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb24sXG4gICAgICAgICdjeFBhc3N3b3Jkc011c3RNYXRjaCdcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0d28gZW1haWwgY29udHJvbHMgbWF0Y2hcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgZm9ybSB2YWxpZGF0b3IgYW5kIHBhc3MgZW1haWwgY29udHJvbCBuYW1lcyBhcyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIEZpcnN0IGVtYWlsIGNvbnRyb2wgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxDb25maXJtYXRpb24gU2Vjb25kIGVtYWlsIGNvbnRyb2wgbmFtZVxuICAgKiBAcmV0dXJucyBVc2VzICdjeEVtYWlsc011c3RNYXRjaCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIGVtYWlsc011c3RNYXRjaChlbWFpbDogc3RyaW5nLCBlbWFpbENvbmZpcm1hdGlvbjogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+XG4gICAgICBjb250cm9sc011c3RNYXRjaChcbiAgICAgICAgZm9ybUdyb3VwLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgZW1haWxDb25maXJtYXRpb24sXG4gICAgICAgICdjeEVtYWlsc011c3RNYXRjaCdcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yO1xuICB9XG59XG5cbi8qKlxuICogR2VuZXJpYyBmdW5jdGlvbiBmb3IgdmFsaWRhdG9ycywgd2hpY2ggY2hlY2tzIGlmIHR3byBwYXNzZWQgY29udHJvbHMgbWF0Y2guXG4gKlxuICogQHBhcmFtIGZvcm1Hcm91cFxuICogQHBhcmFtIGZpcnN0Q29udHJvbE5hbWUgRmlyc3QgY29udHJvbCB0byBjaGVja1xuICogQHBhcmFtIHNlY29uZENvbnRyb2xOYW1lIFNlY29uZCBjb250cm9sIHRvIGNoZWNrXG4gKiBAcGFyYW0gZXJyb3JOYW1lIEVycm9yIHdoaWNoIHdpbGwgYmUgcmV0dXJuZWQgYnkgdmFsaWRhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sc011c3RNYXRjaChcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXAsXG4gIGZpcnN0Q29udHJvbE5hbWU6IHN0cmluZyxcbiAgc2Vjb25kQ29udHJvbE5hbWU6IHN0cmluZyxcbiAgZXJyb3JOYW1lOiBzdHJpbmdcbik6IHZvaWQge1xuICBjb25zdCBmaXJzdENvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNbZmlyc3RDb250cm9sTmFtZV07XG4gIGNvbnN0IHNlY29uZENvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNbc2Vjb25kQ29udHJvbE5hbWVdO1xuXG4gIGlmIChzZWNvbmRDb250cm9sLmVycm9ycyAmJiAhc2Vjb25kQ29udHJvbC5lcnJvcnNbZXJyb3JOYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlY29uZENvbnRyb2wuc2V0RXJyb3JzKFxuICAgIGZpcnN0Q29udHJvbC52YWx1ZSAhPT0gc2Vjb25kQ29udHJvbC52YWx1ZSA/IHsgW2Vycm9yTmFtZV06IHRydWUgfSA6IG51bGxcbiAgKTtcbn1cbiJdfQ==