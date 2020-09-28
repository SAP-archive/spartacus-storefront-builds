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
        return email && (!email.length || email.match(EMAIL_PATTERN))
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
        return password && (!password.length || password.match(PASSWORD_PATTERN))
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
    /**
     * Checks if control's value is euqal or greater than 0
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxNegativeAmount' validator error
     * @memberof CustomFormValidators
     */
    static mustBePositive(control) {
        const amount = control.value;
        return amount >= 0 ? null : { cxNegativeAmount: true };
    }
    /**
     * Checks if control's value does not contain any special characters
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxContainsSpecialCharacters' validator error
     * @memberof CustomFormValidators
     */
    static noSpecialCharacters(control) {
        const forbiddenChars = ['/'];
        const str = String(control.value);
        const containsSpecialChars = forbiddenChars.some((char) => str.includes(char));
        return !containsSpecialChars ? null : { cxContainsSpecialCharacters: true };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0I7Ozs7Ozs7OztPQVNHO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUF3QjtRQUM1QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBZSxDQUFDO1FBRXRDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUF3QjtRQUMvQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBZSxDQUFDO1FBRXpDLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQXdCO1FBQzdDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFlLENBQUM7UUFFdkMsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILE1BQU0sQ0FBQyxrQkFBa0IsQ0FDdkIsUUFBZ0IsRUFDaEIsb0JBQTRCO1FBRTVCLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQ3pDLGlCQUFpQixDQUNmLFNBQVMsRUFDVCxRQUFRLEVBQ1Isb0JBQW9CLEVBQ3BCLHNCQUFzQixDQUN2QixDQUFDO1FBRUosT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSCxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWEsRUFBRSxpQkFBeUI7UUFDN0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FDekMsaUJBQWlCLENBQ2YsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsbUJBQW1CLENBQ3BCLENBQUM7UUFFSixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUF3QjtRQUM1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBZSxDQUFDO1FBRXZDLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxNQUFNLENBQUMsbUJBQW1CLENBQ3hCLE9BQXdCO1FBRXhCLE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUN4RCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUNuQixDQUFDO1FBRUYsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUUsQ0FBQztDQUNGO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsU0FBb0IsRUFDcEIsZ0JBQXdCLEVBQ3hCLGlCQUF5QixFQUN6QixTQUFpQjtJQUVqQixNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTVELElBQUksYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDNUQsT0FBTztLQUNSO0lBRUQsYUFBYSxDQUFDLFNBQVMsQ0FDckIsWUFBWSxDQUFDLEtBQUssS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDMUUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4sIFBBU1NXT1JEX1BBVFRFUk4gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tRm9ybVZhbGlkYXRvcnMge1xuICAvKipcbiAgICogQ2hlY2tzIGNvbnRyb2wncyB2YWx1ZSB3aXRoIHByZWRlZmluZWQgZW1haWwgcmVnZXhwXG4gICAqXG4gICAqIE5PVEU6IFVzZSBpdCBhcyBhIGNvbnRyb2wgdmFsaWRhdG9yXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9IGNvbnRyb2xcbiAgICogQHJldHVybnMgeyhWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCl9IFVzZXMgJ2N4SW52YWxpZEVtYWlsJyB2YWxpZGF0b3IgZXJyb3JcbiAgICogQG1lbWJlcm9mIEN1c3RvbUZvcm1WYWxpZGF0b3JzXG4gICAqL1xuICBzdGF0aWMgZW1haWxWYWxpZGF0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVtYWlsID0gY29udHJvbC52YWx1ZSBhcyBzdHJpbmc7XG5cbiAgICByZXR1cm4gZW1haWwgJiYgKCFlbWFpbC5sZW5ndGggfHwgZW1haWwubWF0Y2goRU1BSUxfUEFUVEVSTikpXG4gICAgICA/IG51bGxcbiAgICAgIDogeyBjeEludmFsaWRFbWFpbDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBjb250cm9sJ3MgdmFsdWUgd2l0aCBwcmVkZWZpbmVkIHBhc3N3b3JkIHJlZ2V4cFxuICAgKlxuICAgKiBOT1RFOiBVc2UgaXQgYXMgYSBjb250cm9sIHZhbGlkYXRvclxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sXG4gICAqIEByZXR1cm5zIHsoVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpfSBVc2VzICdjeEludmFsaWRQYXNzd29yZCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkICYmICghcGFzc3dvcmQubGVuZ3RoIHx8IHBhc3N3b3JkLm1hdGNoKFBBU1NXT1JEX1BBVFRFUk4pKVxuICAgICAgPyBudWxsXG4gICAgICA6IHsgY3hJbnZhbGlkUGFzc3dvcmQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgY29udHJvbCdzIHZhbHVlIGlzIGJldHdlZW4gMSBhbmQgNVxuICAgKlxuICAgKiBOT1RFOiBVc2UgaXQgYXMgYSBjb250cm9sIHZhbGlkYXRvclxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sXG4gICAqIEByZXR1cm5zIHsoVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpfSBVc2VzICdjeFN0YXJSYXRpbmdFbXB0eScgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIHN0YXJSYXRpbmdFbXB0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgcmF0aW5nID0gY29udHJvbC52YWx1ZSBhcyBudW1iZXI7XG5cbiAgICByZXR1cm4gcmF0aW5nID49IDEgJiYgcmF0aW5nIDw9IDUgPyBudWxsIDogeyBjeFN0YXJSYXRpbmdFbXB0eTogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0d28gcGFzc3dvcmQgY29udHJvbHMgbWF0Y2hcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgZm9ybSB2YWxpZGF0b3IgYW5kIHBhc3MgcGFzc3dvcmQgY29udHJvbCBuYW1lcyBhcyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIEZpcnN0IHBhc3N3b3JkIGNvbnRyb2wgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmRDb25maXJtYXRpb24gU2Vjb25kIHBhc3N3b3JkIGNvbnRyb2wgbmFtZVxuICAgKiBAcmV0dXJucyBVc2VzICdjeFBhc3N3b3Jkc011c3RNYXRjaCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIHBhc3N3b3Jkc011c3RNYXRjaChcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBzdHJpbmdcbiAgKTogYW55IHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+XG4gICAgICBjb250cm9sc011c3RNYXRjaChcbiAgICAgICAgZm9ybUdyb3VwLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb24sXG4gICAgICAgICdjeFBhc3N3b3Jkc011c3RNYXRjaCdcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0d28gZW1haWwgY29udHJvbHMgbWF0Y2hcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgZm9ybSB2YWxpZGF0b3IgYW5kIHBhc3MgZW1haWwgY29udHJvbCBuYW1lcyBhcyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIEZpcnN0IGVtYWlsIGNvbnRyb2wgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxDb25maXJtYXRpb24gU2Vjb25kIGVtYWlsIGNvbnRyb2wgbmFtZVxuICAgKiBAcmV0dXJucyBVc2VzICdjeEVtYWlsc011c3RNYXRjaCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIGVtYWlsc011c3RNYXRjaChlbWFpbDogc3RyaW5nLCBlbWFpbENvbmZpcm1hdGlvbjogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+XG4gICAgICBjb250cm9sc011c3RNYXRjaChcbiAgICAgICAgZm9ybUdyb3VwLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgZW1haWxDb25maXJtYXRpb24sXG4gICAgICAgICdjeEVtYWlsc011c3RNYXRjaCdcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBjb250cm9sJ3MgdmFsdWUgaXMgZXVxYWwgb3IgZ3JlYXRlciB0aGFuIDBcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgY29udHJvbCB2YWxpZGF0b3JcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gY29udHJvbFxuICAgKiBAcmV0dXJucyB7KFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKX0gVXNlcyAnY3hOZWdhdGl2ZUFtb3VudCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIG11c3RCZVBvc2l0aXZlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBhbW91bnQgPSBjb250cm9sLnZhbHVlIGFzIG51bWJlcjtcblxuICAgIHJldHVybiBhbW91bnQgPj0gMCA/IG51bGwgOiB7IGN4TmVnYXRpdmVBbW91bnQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgY29udHJvbCdzIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gYW55IHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgKlxuICAgKiBOT1RFOiBVc2UgaXQgYXMgYSBjb250cm9sIHZhbGlkYXRvclxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sXG4gICAqIEByZXR1cm5zIHsoVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpfSBVc2VzICdjeENvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnMnIHZhbGlkYXRvciBlcnJvclxuICAgKiBAbWVtYmVyb2YgQ3VzdG9tRm9ybVZhbGlkYXRvcnNcbiAgICovXG4gIHN0YXRpYyBub1NwZWNpYWxDaGFyYWN0ZXJzKFxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbFxuICApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZm9yYmlkZGVuQ2hhcnMgPSBbJy8nXTtcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcoY29udHJvbC52YWx1ZSk7XG4gICAgY29uc3QgY29udGFpbnNTcGVjaWFsQ2hhcnMgPSBmb3JiaWRkZW5DaGFycy5zb21lKChjaGFyKSA9PlxuICAgICAgc3RyLmluY2x1ZGVzKGNoYXIpXG4gICAgKTtcblxuICAgIHJldHVybiAhY29udGFpbnNTcGVjaWFsQ2hhcnMgPyBudWxsIDogeyBjeENvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnM6IHRydWUgfTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyaWMgZnVuY3Rpb24gZm9yIHZhbGlkYXRvcnMsIHdoaWNoIGNoZWNrcyBpZiB0d28gcGFzc2VkIGNvbnRyb2xzIG1hdGNoLlxuICpcbiAqIEBwYXJhbSBmb3JtR3JvdXBcbiAqIEBwYXJhbSBmaXJzdENvbnRyb2xOYW1lIEZpcnN0IGNvbnRyb2wgdG8gY2hlY2tcbiAqIEBwYXJhbSBzZWNvbmRDb250cm9sTmFtZSBTZWNvbmQgY29udHJvbCB0byBjaGVja1xuICogQHBhcmFtIGVycm9yTmFtZSBFcnJvciB3aGljaCB3aWxsIGJlIHJldHVybmVkIGJ5IHZhbGlkYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbHNNdXN0TWF0Y2goXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwLFxuICBmaXJzdENvbnRyb2xOYW1lOiBzdHJpbmcsXG4gIHNlY29uZENvbnRyb2xOYW1lOiBzdHJpbmcsXG4gIGVycm9yTmFtZTogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3QgZmlyc3RDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2ZpcnN0Q29udHJvbE5hbWVdO1xuICBjb25zdCBzZWNvbmRDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW3NlY29uZENvbnRyb2xOYW1lXTtcblxuICBpZiAoc2Vjb25kQ29udHJvbC5lcnJvcnMgJiYgIXNlY29uZENvbnRyb2wuZXJyb3JzW2Vycm9yTmFtZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWNvbmRDb250cm9sLnNldEVycm9ycyhcbiAgICBmaXJzdENvbnRyb2wudmFsdWUgIT09IHNlY29uZENvbnRyb2wudmFsdWUgPyB7IFtlcnJvck5hbWVdOiB0cnVlIH0gOiBudWxsXG4gICk7XG59XG4iXX0=