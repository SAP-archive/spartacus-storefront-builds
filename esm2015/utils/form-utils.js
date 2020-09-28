import { FormArray, FormGroup } from '@angular/forms';
/**
 * Utils for Angular forms
 */
export var FormUtils;
(function (FormUtils) {
    /**
     * Calls the native Angular method `#updateValueAndValidity` for the given from control
     * and all its descendants (in case when it's `FormGroup` or `FormArray`).
     *
     * In particular it's useful for triggering re-emission of observables
     * `valueChanges` and `statusChanges` for all descendant form controls.
     *
     * _Note: Dropping this function may be considered, when it's implemented natively
     * by Angular. See https://github.com/angular/angular/issues/6170_
     *
     * @param control form control
     * @param options additional options
     * * `emitEvent`: When true or not given (the default), the `statusChanges` and
     * `valueChanges` observables emit the latest status and value. When false,
     * it doesn't trigger observables emission.
     */
    function deepUpdateValueAndValidity(control, options = {}) {
        if (control instanceof FormGroup || control instanceof FormArray) {
            Object.values(control.controls).forEach((childControl) => {
                deepUpdateValueAndValidity(childControl, options);
            });
        }
        control.updateValueAndValidity({
            onlySelf: true,
            emitEvent: options.emitEvent,
        });
    }
    FormUtils.deepUpdateValueAndValidity = deepUpdateValueAndValidity;
})(FormUtils || (FormUtils = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkU7O0dBRUc7QUFDSCxNQUFNLEtBQVcsU0FBUyxDQWtDekI7QUFsQ0QsV0FBaUIsU0FBUztJQUN4Qjs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxTQUFnQiwwQkFBMEIsQ0FDeEMsT0FBd0IsRUFDeEIsVUFBbUMsRUFBRTtRQUVyQyxJQUFJLE9BQU8sWUFBWSxTQUFTLElBQUksT0FBTyxZQUFZLFNBQVMsRUFBRTtZQUNoRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQ3JDLENBQUMsWUFBNkIsRUFBRSxFQUFFO2dCQUNoQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUNGLENBQUM7U0FDSDtRQUVELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixRQUFRLEVBQUUsSUFBSTtZQUNkLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEJlLG9DQUEwQiw2QkFnQnpDLENBQUE7QUFDSCxDQUFDLEVBbENnQixTQUFTLEtBQVQsU0FBUyxRQWtDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFV0aWxzIGZvciBBbmd1bGFyIGZvcm1zXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgRm9ybVV0aWxzIHtcbiAgLyoqXG4gICAqIENhbGxzIHRoZSBuYXRpdmUgQW5ndWxhciBtZXRob2QgYCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5YCBmb3IgdGhlIGdpdmVuIGZyb20gY29udHJvbFxuICAgKiBhbmQgYWxsIGl0cyBkZXNjZW5kYW50cyAoaW4gY2FzZSB3aGVuIGl0J3MgYEZvcm1Hcm91cGAgb3IgYEZvcm1BcnJheWApLlxuICAgKlxuICAgKiBJbiBwYXJ0aWN1bGFyIGl0J3MgdXNlZnVsIGZvciB0cmlnZ2VyaW5nIHJlLWVtaXNzaW9uIG9mIG9ic2VydmFibGVzXG4gICAqIGB2YWx1ZUNoYW5nZXNgIGFuZCBgc3RhdHVzQ2hhbmdlc2AgZm9yIGFsbCBkZXNjZW5kYW50IGZvcm0gY29udHJvbHMuXG4gICAqXG4gICAqIF9Ob3RlOiBEcm9wcGluZyB0aGlzIGZ1bmN0aW9uIG1heSBiZSBjb25zaWRlcmVkLCB3aGVuIGl0J3MgaW1wbGVtZW50ZWQgbmF0aXZlbHlcbiAgICogYnkgQW5ndWxhci4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzYxNzBfXG4gICAqXG4gICAqIEBwYXJhbSBjb250cm9sIGZvcm0gY29udHJvbFxuICAgKiBAcGFyYW0gb3B0aW9ucyBhZGRpdGlvbmFsIG9wdGlvbnNcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBnaXZlbiAodGhlIGRlZmF1bHQpLCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYCBvYnNlcnZhYmxlcyBlbWl0IHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZS4gV2hlbiBmYWxzZSxcbiAgICogaXQgZG9lc24ndCB0cmlnZ2VyIG9ic2VydmFibGVzIGVtaXNzaW9uLlxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGRlZXBVcGRhdGVWYWx1ZUFuZFZhbGlkaXR5KFxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgICBvcHRpb25zOiB7IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8IGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIE9iamVjdC52YWx1ZXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaChcbiAgICAgICAgKGNoaWxkQ29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICAgICAgZGVlcFVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoY2hpbGRDb250cm9sLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe1xuICAgICAgb25seVNlbGY6IHRydWUsIC8vIGF2b2lkIGNhbGxpbmcgYCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5YCBmb3IgYWxsIGFuY2VzdG9yc1xuICAgICAgZW1pdEV2ZW50OiBvcHRpb25zLmVtaXRFdmVudCxcbiAgICB9KTtcbiAgfVxufVxuIl19