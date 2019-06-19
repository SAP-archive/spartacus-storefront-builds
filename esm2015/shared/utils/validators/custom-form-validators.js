/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CustomFormValidators {
    /**
     * @param {?} control
     * @return {?}
     */
    static emailDomainValidator(control) {
        /** @type {?} */
        const email = (/** @type {?} */ (control.value));
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static emailValidator(control) {
        /** @type {?} */
        const email = (/** @type {?} */ (control.value));
        return email.match(
        // Email Standard RFC 5322:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // tslint:disable-line
        )
            ? null
            : { InvalidEmail: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static passwordValidator(control) {
        /** @type {?} */
        const password = (/** @type {?} */ (control.value));
        return password.match(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^*()_\-+{};:.,]).{6,}$/)
            ? null
            : { InvalidPassword: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBQy9CLE1BQU0sQ0FBQyxvQkFBb0IsQ0FDekIsT0FBd0I7O2NBRWxCLEtBQUssR0FBRyxtQkFBQSxPQUFPLENBQUMsS0FBSyxFQUFVO1FBRXJDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBd0I7O2NBQ3RDLEtBQUssR0FBRyxtQkFBQSxPQUFPLENBQUMsS0FBSyxFQUFVO1FBRXJDLE9BQU8sS0FBSyxDQUFDLEtBQUs7UUFDaEIsMkJBQTJCO1FBQzNCLHdKQUF3SixDQUFDLHNCQUFzQjtTQUNoTDtZQUNDLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQXdCOztjQUN6QyxRQUFRLEdBQUcsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBVTtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQ25CLDZEQUE2RCxDQUM5RDtZQUNDLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbUZvcm1WYWxpZGF0b3JzIHtcbiAgc3RhdGljIGVtYWlsRG9tYWluVmFsaWRhdG9yKFxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbFxuICApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZW1haWwgPSBjb250cm9sLnZhbHVlIGFzIHN0cmluZztcblxuICAgIHJldHVybiBlbWFpbC5tYXRjaCgnWy5dW2EtekEtWl0rJCcpID8gbnVsbCA6IHsgSW52YWxpZEVtYWlsOiB0cnVlIH07XG4gIH1cblxuICBzdGF0aWMgZW1haWxWYWxpZGF0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVtYWlsID0gY29udHJvbC52YWx1ZSBhcyBzdHJpbmc7XG5cbiAgICByZXR1cm4gZW1haWwubWF0Y2goXG4gICAgICAvLyBFbWFpbCBTdGFuZGFyZCBSRkMgNTMyMjpcbiAgICAgIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICApXG4gICAgICA/IG51bGxcbiAgICAgIDogeyBJbnZhbGlkRW1haWw6IHRydWUgfTtcbiAgfVxuXG4gIHN0YXRpYyBwYXNzd29yZFZhbGlkYXRvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBjb250cm9sLnZhbHVlIGFzIHN0cmluZztcbiAgICByZXR1cm4gcGFzc3dvcmQubWF0Y2goXG4gICAgICAvXig/PS4qP1tBLVpdKSg/PS4qP1swLTldKSg/PS4qP1shQCMkJV4qKClfXFwtK3t9OzouLF0pLns2LH0kL1xuICAgIClcbiAgICAgID8gbnVsbFxuICAgICAgOiB7IEludmFsaWRQYXNzd29yZDogdHJ1ZSB9O1xuICB9XG59XG4iXX0=