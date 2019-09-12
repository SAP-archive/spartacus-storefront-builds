/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return email.match(
        // Email Standard RFC 5322:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // tslint:disable-line
        )
            ? null
            : { InvalidEmail: true };
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
        return password.match(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^*()_\-+{};:.,]).{6,}$/)
            ? null
            : { InvalidPassword: true };
    };
    return CustomFormValidators;
}());
export { CustomFormValidators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQUE7SUE0QkEsQ0FBQzs7Ozs7SUEzQlEseUNBQW9COzs7O0lBQTNCLFVBQ0UsT0FBd0I7O1lBRWxCLEtBQUssR0FBRyxtQkFBQSxPQUFPLENBQUMsS0FBSyxFQUFVO1FBRXJDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVNLG1DQUFjOzs7O0lBQXJCLFVBQXNCLE9BQXdCOztZQUN0QyxLQUFLLEdBQUcsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBVTtRQUVyQyxPQUFPLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLDJCQUEyQjtRQUMzQix3SkFBd0osQ0FBQyxzQkFBc0I7U0FDaEw7WUFDQyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLHNDQUFpQjs7OztJQUF4QixVQUF5QixPQUF3Qjs7WUFDekMsUUFBUSxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQVU7UUFDeEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUNuQiw2REFBNkQsQ0FDOUQ7WUFDQyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tRm9ybVZhbGlkYXRvcnMge1xuICBzdGF0aWMgZW1haWxEb21haW5WYWxpZGF0b3IoXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sXG4gICk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBlbWFpbCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuXG4gICAgcmV0dXJuIGVtYWlsLm1hdGNoKCdbLl1bYS16QS1aXSskJykgPyBudWxsIDogeyBJbnZhbGlkRW1haWw6IHRydWUgfTtcbiAgfVxuXG4gIHN0YXRpYyBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZW1haWwgPSBjb250cm9sLnZhbHVlIGFzIHN0cmluZztcblxuICAgIHJldHVybiBlbWFpbC5tYXRjaChcbiAgICAgIC8vIEVtYWlsIFN0YW5kYXJkIFJGQyA1MzIyOlxuICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIClcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IEludmFsaWRFbWFpbDogdHJ1ZSB9O1xuICB9XG5cbiAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nO1xuICAgIHJldHVybiBwYXNzd29yZC5tYXRjaChcbiAgICAgIC9eKD89Lio/W0EtWl0pKD89Lio/WzAtOV0pKD89Lio/WyFAIyQlXiooKV9cXC0re307Oi4sXSkuezYsfSQvXG4gICAgKVxuICAgICAgPyBudWxsXG4gICAgICA6IHsgSW52YWxpZFBhc3N3b3JkOiB0cnVlIH07XG4gIH1cbn1cbiJdfQ==