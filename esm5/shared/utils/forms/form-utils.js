/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * Validates a field of the given form group
     *
     * If the field is NOT valid (or invalid), the method returns `true`.
     *
     * @param form Form with fields to check
     * @param formControlName Name of the form field to check
     * @param submitted Has the form been submitted
     */
    /**
     *
     * Validates a field of the given form group
     *
     * If the field is NOT valid (or invalid), the method returns `true`.
     *
     * @param {?} form Form with fields to check
     * @param {?} formControlName Name of the form field to check
     * @param {?} submitted Has the form been submitted
     * @return {?}
     */
    FormUtils.isNotValidField = /**
     *
     * Validates a field of the given form group
     *
     * If the field is NOT valid (or invalid), the method returns `true`.
     *
     * @param {?} form Form with fields to check
     * @param {?} formControlName Name of the form field to check
     * @param {?} submitted Has the form been submitted
     * @return {?}
     */
    function (form, formControlName, submitted) {
        /** @type {?} */
        var control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    };
    return FormUtils;
}());
/**
 * Utility class when working with forms.
 */
export { FormUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7OztJQUFBO0lBbUJBLENBQUM7SUFsQkM7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7Ozs7SUFDSSx5QkFBZTs7Ozs7Ozs7Ozs7SUFBdEIsVUFDRSxJQUFlLEVBQ2YsZUFBdUIsRUFDdkIsU0FBa0I7O1lBRVosT0FBTyxHQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUMxRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIHdoZW4gd29ya2luZyB3aXRoIGZvcm1zLlxuICovXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcbiAgLyoqXG4gICAqXG4gICAqIFZhbGlkYXRlcyBhIGZpZWxkIG9mIHRoZSBnaXZlbiBmb3JtIGdyb3VwXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyBOT1QgdmFsaWQgKG9yIGludmFsaWQpLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgLlxuICAgKlxuICAgKiBAcGFyYW0gZm9ybSBGb3JtIHdpdGggZmllbGRzIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBmb3JtQ29udHJvbE5hbWUgTmFtZSBvZiB0aGUgZm9ybSBmaWVsZCB0byBjaGVja1xuICAgKiBAcGFyYW0gc3VibWl0dGVkIEhhcyB0aGUgZm9ybSBiZWVuIHN1Ym1pdHRlZFxuICAgKi9cbiAgc3RhdGljIGlzTm90VmFsaWRGaWVsZChcbiAgICBmb3JtOiBGb3JtR3JvdXAsXG4gICAgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsXG4gICAgc3VibWl0dGVkOiBib29sZWFuXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCA9IGZvcm0uZ2V0KGZvcm1Db250cm9sTmFtZSk7XG4gICAgcmV0dXJuIGNvbnRyb2wuaW52YWxpZCAmJiAoc3VibWl0dGVkIHx8IChjb250cm9sLnRvdWNoZWQgJiYgY29udHJvbC5kaXJ0eSkpO1xuICB9XG59XG4iXX0=