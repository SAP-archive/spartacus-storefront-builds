/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '@spartacus/core';
var CustomFormValidators = /** @class */ (function () {
    function CustomFormValidators() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.emailDomainValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var email = (/** @type {?} */ (control.value));
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.emailValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var email = (/** @type {?} */ (control.value));
        return email.match(EMAIL_PATTERN) ? null : { InvalidEmail: true };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.passwordValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var password = (/** @type {?} */ (control.value));
        return password.match(PASSWORD_PATTERN) ? null : { InvalidPassword: true };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.matchPassword = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.get('password').value !== control.get('passwordconf').value) {
            return { NotEqual: true };
        }
        return null;
    };
    return CustomFormValidators;
}());
export { CustomFormValidators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRTtJQUFBO0lBMEJBLENBQUM7Ozs7O0lBekJRLHlDQUFvQjs7OztJQUEzQixVQUNFLE9BQXdCOztZQUVsQixLQUFLLEdBQUcsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBVTtRQUVyQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFTSxtQ0FBYzs7OztJQUFyQixVQUFzQixPQUF3Qjs7WUFDdEMsS0FBSyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQVU7UUFFckMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRU0sc0NBQWlCOzs7O0lBQXhCLFVBQXlCLE9BQXdCOztZQUN6QyxRQUFRLEdBQUcsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBVTtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVNLGtDQUFhOzs7O0lBQXBCLFVBQXFCLE9BQXdCO1FBQzNDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4sIFBBU1NXT1JEX1BBVFRFUk4gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tRm9ybVZhbGlkYXRvcnMge1xuICBzdGF0aWMgZW1haWxEb21haW5WYWxpZGF0b3IoXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sXG4gICk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBlbWFpbCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuXG4gICAgcmV0dXJuIGVtYWlsLm1hdGNoKCdbLl1bYS16QS1aXSskJykgPyBudWxsIDogeyBJbnZhbGlkRW1haWw6IHRydWUgfTtcbiAgfVxuXG4gIHN0YXRpYyBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZW1haWwgPSBjb250cm9sLnZhbHVlIGFzIHN0cmluZztcblxuICAgIHJldHVybiBlbWFpbC5tYXRjaChFTUFJTF9QQVRURVJOKSA/IG51bGwgOiB7IEludmFsaWRFbWFpbDogdHJ1ZSB9O1xuICB9XG5cbiAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuICAgIHJldHVybiBwYXNzd29yZC5tYXRjaChQQVNTV09SRF9QQVRURVJOKSA/IG51bGwgOiB7IEludmFsaWRQYXNzd29yZDogdHJ1ZSB9O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoUGFzc3dvcmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBOb3RFcXVhbDogYm9vbGVhbiB9IHtcbiAgICBpZiAoY29udHJvbC5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgIT09IGNvbnRyb2wuZ2V0KCdwYXNzd29yZGNvbmYnKS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgTm90RXF1YWw6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==