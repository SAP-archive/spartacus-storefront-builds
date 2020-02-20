/**
 * Utility class when working with forms.
 */
export class FormUtils {
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
    static isNotValidField(form, formControlName, submitted) {
        const control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFDcEI7Ozs7Ozs7OztPQVNHO0lBQ0gsTUFBTSxDQUFDLGVBQWUsQ0FDcEIsSUFBZSxFQUNmLGVBQXVCLEVBQ3ZCLFNBQWtCO1FBRWxCLE1BQU0sT0FBTyxHQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyB3aGVuIHdvcmtpbmcgd2l0aCBmb3Jtcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIC8qKlxuICAgKlxuICAgKiBWYWxpZGF0ZXMgYSBmaWVsZCBvZiB0aGUgZ2l2ZW4gZm9ybSBncm91cFxuICAgKlxuICAgKiBJZiB0aGUgZmllbGQgaXMgTk9UIHZhbGlkIChvciBpbnZhbGlkKSwgdGhlIG1ldGhvZCByZXR1cm5zIGB0cnVlYC5cbiAgICpcbiAgICogQHBhcmFtIGZvcm0gRm9ybSB3aXRoIGZpZWxkcyB0byBjaGVja1xuICAgKiBAcGFyYW0gZm9ybUNvbnRyb2xOYW1lIE5hbWUgb2YgdGhlIGZvcm0gZmllbGQgdG8gY2hlY2tcbiAgICogQHBhcmFtIHN1Ym1pdHRlZCBIYXMgdGhlIGZvcm0gYmVlbiBzdWJtaXR0ZWRcbiAgICovXG4gIHN0YXRpYyBpc05vdFZhbGlkRmllbGQoXG4gICAgZm9ybTogRm9ybUdyb3VwLFxuICAgIGZvcm1Db250cm9sTmFtZTogc3RyaW5nLFxuICAgIHN1Ym1pdHRlZDogYm9vbGVhblxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgPSBmb3JtLmdldChmb3JtQ29udHJvbE5hbWUpO1xuICAgIHJldHVybiBjb250cm9sLmludmFsaWQgJiYgKHN1Ym1pdHRlZCB8fCAoY29udHJvbC50b3VjaGVkICYmIGNvbnRyb2wuZGlydHkpKTtcbiAgfVxufVxuIl19