/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility class when working with forms.
 */
var /**
 * Utility class when working with forms.
 */
FormUtils = /** @class */ (function () {
    function FormUtils() {
    }
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
    /**
     *
     * Checks is the `formControlName` field valid in the provided `form`.
     *
     * If it's NOT valid, the method returns `true`.
     *
     * @param {?} form a form whose field to check
     * @param {?} formControlName a field name
     * @param {?} submitted is the form submitted
     * @return {?}
     */
    FormUtils.isNotValidField = /**
     *
     * Checks is the `formControlName` field valid in the provided `form`.
     *
     * If it's NOT valid, the method returns `true`.
     *
     * @param {?} form a form whose field to check
     * @param {?} formControlName a field name
     * @param {?} submitted is the form submitted
     * @return {?}
     */
    function (form, formControlName, submitted) {
        return (form.get(formControlName).invalid &&
            (submitted ||
                (form.get(formControlName).touched && form.get(formControlName).dirty)));
    };
    return FormUtils;
}());
/**
 * Utility class when working with forms.
 */
export { FormUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9mb3Jtcy9mb3JtLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7OztJQUFBO0lBc0JBLENBQUM7SUFyQkM7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7Ozs7SUFDSSx5QkFBZTs7Ozs7Ozs7Ozs7SUFBdEIsVUFDRSxJQUFlLEVBQ2YsZUFBdUIsRUFDdkIsU0FBa0I7UUFFbEIsT0FBTyxDQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTztZQUNqQyxDQUFDLFNBQVM7Z0JBQ1IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFFLENBQUM7SUFDSixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3Mgd2hlbiB3b3JraW5nIHdpdGggZm9ybXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIGlzIHRoZSBgZm9ybUNvbnRyb2xOYW1lYCBmaWVsZCB2YWxpZCBpbiB0aGUgcHJvdmlkZWQgYGZvcm1gLlxuICAgKlxuICAgKiBJZiBpdCdzIE5PVCB2YWxpZCwgdGhlIG1ldGhvZCByZXR1cm5zIGB0cnVlYC5cbiAgICpcbiAgICogQHBhcmFtIGZvcm0gYSBmb3JtIHdob3NlIGZpZWxkIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBmb3JtQ29udHJvbE5hbWUgYSBmaWVsZCBuYW1lXG4gICAqIEBwYXJhbSBzdWJtaXR0ZWQgaXMgdGhlIGZvcm0gc3VibWl0dGVkXG4gICAqL1xuICBzdGF0aWMgaXNOb3RWYWxpZEZpZWxkKFxuICAgIGZvcm06IEZvcm1Hcm91cCxcbiAgICBmb3JtQ29udHJvbE5hbWU6IHN0cmluZyxcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW5cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGZvcm0uZ2V0KGZvcm1Db250cm9sTmFtZSkuaW52YWxpZCAmJlxuICAgICAgKHN1Ym1pdHRlZCB8fFxuICAgICAgICAoZm9ybS5nZXQoZm9ybUNvbnRyb2xOYW1lKS50b3VjaGVkICYmIGZvcm0uZ2V0KGZvcm1Db250cm9sTmFtZSkuZGlydHkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==