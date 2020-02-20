/**
 * Utility class when working with forms.
 */
var FormUtils = /** @class */ (function () {
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
    FormUtils.isNotValidField = function (form, formControlName, submitted) {
        var control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    };
    return FormUtils;
}());
export { FormUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztHQUVHO0FBQ0g7SUFBQTtJQW1CQSxDQUFDO0lBbEJDOzs7Ozs7Ozs7T0FTRztJQUNJLHlCQUFlLEdBQXRCLFVBQ0UsSUFBZSxFQUNmLGVBQXVCLEVBQ3ZCLFNBQWtCO1FBRWxCLElBQU0sT0FBTyxHQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3Mgd2hlbiB3b3JraW5nIHdpdGggZm9ybXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xuICAvKipcbiAgICpcbiAgICogVmFsaWRhdGVzIGEgZmllbGQgb2YgdGhlIGdpdmVuIGZvcm0gZ3JvdXBcbiAgICpcbiAgICogSWYgdGhlIGZpZWxkIGlzIE5PVCB2YWxpZCAob3IgaW52YWxpZCksIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAuXG4gICAqXG4gICAqIEBwYXJhbSBmb3JtIEZvcm0gd2l0aCBmaWVsZHMgdG8gY2hlY2tcbiAgICogQHBhcmFtIGZvcm1Db250cm9sTmFtZSBOYW1lIG9mIHRoZSBmb3JtIGZpZWxkIHRvIGNoZWNrXG4gICAqIEBwYXJhbSBzdWJtaXR0ZWQgSGFzIHRoZSBmb3JtIGJlZW4gc3VibWl0dGVkXG4gICAqL1xuICBzdGF0aWMgaXNOb3RWYWxpZEZpZWxkKFxuICAgIGZvcm06IEZvcm1Hcm91cCxcbiAgICBmb3JtQ29udHJvbE5hbWU6IHN0cmluZyxcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW5cbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udHJvbDogQWJzdHJhY3RDb250cm9sID0gZm9ybS5nZXQoZm9ybUNvbnRyb2xOYW1lKTtcbiAgICByZXR1cm4gY29udHJvbC5pbnZhbGlkICYmIChzdWJtaXR0ZWQgfHwgKGNvbnRyb2wudG91Y2hlZCAmJiBjb250cm9sLmRpcnR5KSk7XG4gIH1cbn1cbiJdfQ==