import { EMAIL_PATTERN, PASSWORD_PATTERN } from '@spartacus/core';
var CustomFormValidators = /** @class */ (function () {
    function CustomFormValidators() {
    }
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
    CustomFormValidators.emailValidator = function (control) {
        var email = control.value;
        return !email.length || email.match(EMAIL_PATTERN)
            ? null
            : { cxInvalidEmail: true };
    };
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
    CustomFormValidators.passwordValidator = function (control) {
        var password = control.value;
        return !password.length || password.match(PASSWORD_PATTERN)
            ? null
            : { cxInvalidPassword: true };
    };
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
    CustomFormValidators.starRatingEmpty = function (control) {
        var rating = control.value;
        return rating >= 1 && rating <= 5 ? null : { cxStarRatingEmpty: true };
    };
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
    CustomFormValidators.passwordsMustMatch = function (password, passwordConfirmation) {
        var validator = function (formGroup) {
            return controlsMustMatch(formGroup, password, passwordConfirmation, 'cxPasswordsMustMatch');
        };
        return validator;
    };
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
    CustomFormValidators.emailsMustMatch = function (email, emailConfirmation) {
        var validator = function (formGroup) {
            return controlsMustMatch(formGroup, email, emailConfirmation, 'cxEmailsMustMatch');
        };
        return validator;
    };
    return CustomFormValidators;
}());
export { CustomFormValidators };
/**
 * Generic function for validators, which checks if two passed controls match.
 *
 * @param formGroup
 * @param firstControlName First control to check
 * @param secondControlName Second control to check
 * @param errorName Error which will be returned by validator
 */
export function controlsMustMatch(formGroup, firstControlName, secondControlName, errorName) {
    var _a;
    var firstControl = formGroup.controls[firstControlName];
    var secondControl = formGroup.controls[secondControlName];
    if (secondControl.errors && !secondControl.errors[errorName]) {
        return;
    }
    secondControl.setErrors(firstControl.value !== secondControl.value ? (_a = {}, _a[errorName] = true, _a) : null);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFO0lBQUE7SUFxR0EsQ0FBQztJQXBHQzs7Ozs7Ozs7O09BU0c7SUFDSSxtQ0FBYyxHQUFyQixVQUFzQixPQUF3QjtRQUM1QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBZSxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxzQ0FBaUIsR0FBeEIsVUFBeUIsT0FBd0I7UUFDL0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQWUsQ0FBQztRQUV6QyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ3pELENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLG9DQUFlLEdBQXRCLFVBQXVCLE9BQXdCO1FBQzdDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFlLENBQUM7UUFFdkMsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLHVDQUFrQixHQUF6QixVQUNFLFFBQWdCLEVBQ2hCLG9CQUE0QjtRQUU1QixJQUFNLFNBQVMsR0FBRyxVQUFDLFNBQW9CO1lBQ3JDLE9BQUEsaUJBQWlCLENBQ2YsU0FBUyxFQUNULFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsc0JBQXNCLENBQ3ZCO1FBTEQsQ0FLQyxDQUFDO1FBRUosT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxvQ0FBZSxHQUF0QixVQUF1QixLQUFhLEVBQUUsaUJBQXlCO1FBQzdELElBQU0sU0FBUyxHQUFHLFVBQUMsU0FBb0I7WUFDckMsT0FBQSxpQkFBaUIsQ0FDZixTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixtQkFBbUIsQ0FDcEI7UUFMRCxDQUtDLENBQUM7UUFFSixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBckdELElBcUdDOztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFNBQW9CLEVBQ3BCLGdCQUF3QixFQUN4QixpQkFBeUIsRUFDekIsU0FBaUI7O0lBRWpCLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFNUQsSUFBSSxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM1RCxPQUFPO0tBQ1I7SUFFRCxhQUFhLENBQUMsU0FBUyxDQUNyQixZQUFZLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFHLEdBQUMsU0FBUyxJQUFHLElBQUksTUFBRyxDQUFDLENBQUMsSUFBSSxDQUMxRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiwgUEFTU1dPUkRfUEFUVEVSTiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB7XG4gIC8qKlxuICAgKiBDaGVja3MgY29udHJvbCdzIHZhbHVlIHdpdGggcHJlZGVmaW5lZCBlbWFpbCByZWdleHBcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgY29udHJvbCB2YWxpZGF0b3JcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gY29udHJvbFxuICAgKiBAcmV0dXJucyB7KFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKX0gVXNlcyAnY3hJbnZhbGlkRW1haWwnIHZhbGlkYXRvciBlcnJvclxuICAgKiBAbWVtYmVyb2YgQ3VzdG9tRm9ybVZhbGlkYXRvcnNcbiAgICovXG4gIHN0YXRpYyBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZW1haWwgPSBjb250cm9sLnZhbHVlIGFzIHN0cmluZztcblxuICAgIHJldHVybiAhZW1haWwubGVuZ3RoIHx8IGVtYWlsLm1hdGNoKEVNQUlMX1BBVFRFUk4pXG4gICAgICA/IG51bGxcbiAgICAgIDogeyBjeEludmFsaWRFbWFpbDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBjb250cm9sJ3MgdmFsdWUgd2l0aCBwcmVkZWZpbmVkIHBhc3N3b3JkIHJlZ2V4cFxuICAgKlxuICAgKiBOT1RFOiBVc2UgaXQgYXMgYSBjb250cm9sIHZhbGlkYXRvclxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sXG4gICAqIEByZXR1cm5zIHsoVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpfSBVc2VzICdjeEludmFsaWRQYXNzd29yZCcgdmFsaWRhdG9yIGVycm9yXG4gICAqIEBtZW1iZXJvZiBDdXN0b21Gb3JtVmFsaWRhdG9yc1xuICAgKi9cbiAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuXG4gICAgcmV0dXJuICFwYXNzd29yZC5sZW5ndGggfHwgcGFzc3dvcmQubWF0Y2goUEFTU1dPUkRfUEFUVEVSTilcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IGN4SW52YWxpZFBhc3N3b3JkOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGNvbnRyb2wncyB2YWx1ZSBpcyBiZXR3ZWVuIDEgYW5kIDVcbiAgICpcbiAgICogTk9URTogVXNlIGl0IGFzIGEgY29udHJvbCB2YWxpZGF0b3JcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gY29udHJvbFxuICAgKiBAcmV0dXJucyB7KFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKX0gVXNlcyAnY3hTdGFyUmF0aW5nRW1wdHknIHZhbGlkYXRvciBlcnJvclxuICAgKiBAbWVtYmVyb2YgQ3VzdG9tRm9ybVZhbGlkYXRvcnNcbiAgICovXG4gIHN0YXRpYyBzdGFyUmF0aW5nRW1wdHkoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IHJhdGluZyA9IGNvbnRyb2wudmFsdWUgYXMgbnVtYmVyO1xuXG4gICAgcmV0dXJuIHJhdGluZyA+PSAxICYmIHJhdGluZyA8PSA1ID8gbnVsbCA6IHsgY3hTdGFyUmF0aW5nRW1wdHk6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHdvIHBhc3N3b3JkIGNvbnRyb2xzIG1hdGNoXG4gICAqXG4gICAqIE5PVEU6IFVzZSBpdCBhcyBhIGZvcm0gdmFsaWRhdG9yIGFuZCBwYXNzIHBhc3N3b3JkIGNvbnRyb2wgbmFtZXMgYXMgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBGaXJzdCBwYXNzd29yZCBjb250cm9sIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkQ29uZmlybWF0aW9uIFNlY29uZCBwYXNzd29yZCBjb250cm9sIG5hbWVcbiAgICogQHJldHVybnMgVXNlcyAnY3hQYXNzd29yZHNNdXN0TWF0Y2gnIHZhbGlkYXRvciBlcnJvclxuICAgKiBAbWVtYmVyb2YgQ3VzdG9tRm9ybVZhbGlkYXRvcnNcbiAgICovXG4gIHN0YXRpYyBwYXNzd29yZHNNdXN0TWF0Y2goXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogc3RyaW5nXG4gICk6IGFueSB7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gKGZvcm1Hcm91cDogRm9ybUdyb3VwKSA9PlxuICAgICAgY29udHJvbHNNdXN0TWF0Y2goXG4gICAgICAgIGZvcm1Hcm91cCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uLFxuICAgICAgICAnY3hQYXNzd29yZHNNdXN0TWF0Y2gnXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdHdvIGVtYWlsIGNvbnRyb2xzIG1hdGNoXG4gICAqXG4gICAqIE5PVEU6IFVzZSBpdCBhcyBhIGZvcm0gdmFsaWRhdG9yIGFuZCBwYXNzIGVtYWlsIGNvbnRyb2wgbmFtZXMgYXMgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBGaXJzdCBlbWFpbCBjb250cm9sIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsQ29uZmlybWF0aW9uIFNlY29uZCBlbWFpbCBjb250cm9sIG5hbWVcbiAgICogQHJldHVybnMgVXNlcyAnY3hFbWFpbHNNdXN0TWF0Y2gnIHZhbGlkYXRvciBlcnJvclxuICAgKiBAbWVtYmVyb2YgQ3VzdG9tRm9ybVZhbGlkYXRvcnNcbiAgICovXG4gIHN0YXRpYyBlbWFpbHNNdXN0TWF0Y2goZW1haWw6IHN0cmluZywgZW1haWxDb25maXJtYXRpb246IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gKGZvcm1Hcm91cDogRm9ybUdyb3VwKSA9PlxuICAgICAgY29udHJvbHNNdXN0TWF0Y2goXG4gICAgICAgIGZvcm1Hcm91cCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGVtYWlsQ29uZmlybWF0aW9uLFxuICAgICAgICAnY3hFbWFpbHNNdXN0TWF0Y2gnXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyaWMgZnVuY3Rpb24gZm9yIHZhbGlkYXRvcnMsIHdoaWNoIGNoZWNrcyBpZiB0d28gcGFzc2VkIGNvbnRyb2xzIG1hdGNoLlxuICpcbiAqIEBwYXJhbSBmb3JtR3JvdXBcbiAqIEBwYXJhbSBmaXJzdENvbnRyb2xOYW1lIEZpcnN0IGNvbnRyb2wgdG8gY2hlY2tcbiAqIEBwYXJhbSBzZWNvbmRDb250cm9sTmFtZSBTZWNvbmQgY29udHJvbCB0byBjaGVja1xuICogQHBhcmFtIGVycm9yTmFtZSBFcnJvciB3aGljaCB3aWxsIGJlIHJldHVybmVkIGJ5IHZhbGlkYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbHNNdXN0TWF0Y2goXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwLFxuICBmaXJzdENvbnRyb2xOYW1lOiBzdHJpbmcsXG4gIHNlY29uZENvbnRyb2xOYW1lOiBzdHJpbmcsXG4gIGVycm9yTmFtZTogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3QgZmlyc3RDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2ZpcnN0Q29udHJvbE5hbWVdO1xuICBjb25zdCBzZWNvbmRDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW3NlY29uZENvbnRyb2xOYW1lXTtcblxuICBpZiAoc2Vjb25kQ29udHJvbC5lcnJvcnMgJiYgIXNlY29uZENvbnRyb2wuZXJyb3JzW2Vycm9yTmFtZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWNvbmRDb250cm9sLnNldEVycm9ycyhcbiAgICBmaXJzdENvbnRyb2wudmFsdWUgIT09IHNlY29uZENvbnRyb2wudmFsdWUgPyB7IFtlcnJvck5hbWVdOiB0cnVlIH0gOiBudWxsXG4gICk7XG59XG4iXX0=