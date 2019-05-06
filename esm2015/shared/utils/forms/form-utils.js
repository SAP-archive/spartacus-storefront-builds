/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility class when working with forms.
 */
export class FormUtils {
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
    static isNotValidField(form, formControlName, submitted) {
        return (form.get(formControlName).invalid &&
            (submitted ||
                (form.get(formControlName).touched && form.get(formControlName).dirty)));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLE9BQU8sU0FBUzs7Ozs7Ozs7Ozs7O0lBV3BCLE1BQU0sQ0FBQyxlQUFlLENBQ3BCLElBQWUsRUFDZixlQUF1QixFQUN2QixTQUFrQjtRQUVsQixPQUFPLENBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPO1lBQ2pDLENBQUMsU0FBUztnQkFDUixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUUsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIHdoZW4gd29ya2luZyB3aXRoIGZvcm1zLlxuICovXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcbiAgLyoqXG4gICAqXG4gICAqIENoZWNrcyBpcyB0aGUgYGZvcm1Db250cm9sTmFtZWAgZmllbGQgdmFsaWQgaW4gdGhlIHByb3ZpZGVkIGBmb3JtYC5cbiAgICpcbiAgICogSWYgaXQncyBOT1QgdmFsaWQsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAuXG4gICAqXG4gICAqIEBwYXJhbSBmb3JtIGEgZm9ybSB3aG9zZSBmaWVsZCB0byBjaGVja1xuICAgKiBAcGFyYW0gZm9ybUNvbnRyb2xOYW1lIGEgZmllbGQgbmFtZVxuICAgKiBAcGFyYW0gc3VibWl0dGVkIGlzIHRoZSBmb3JtIHN1Ym1pdHRlZFxuICAgKi9cbiAgc3RhdGljIGlzTm90VmFsaWRGaWVsZChcbiAgICBmb3JtOiBGb3JtR3JvdXAsXG4gICAgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsXG4gICAgc3VibWl0dGVkOiBib29sZWFuXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBmb3JtLmdldChmb3JtQ29udHJvbE5hbWUpLmludmFsaWQgJiZcbiAgICAgIChzdWJtaXR0ZWQgfHxcbiAgICAgICAgKGZvcm0uZ2V0KGZvcm1Db250cm9sTmFtZSkudG91Y2hlZCAmJiBmb3JtLmdldChmb3JtQ29udHJvbE5hbWUpLmRpcnR5KSlcbiAgICApO1xuICB9XG59XG4iXX0=