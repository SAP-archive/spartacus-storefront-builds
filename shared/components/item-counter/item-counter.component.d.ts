import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functinality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ItemCounterComponent {
    /**
     * Holds the value of the counter, the state of the `FormControl`
     * can be managed outside of the item counter.
     */
    control: FormControl;
    /**
     * This can be used in case an item has a minmum order quantity.
     * @default 1
     */
    min: number;
    /**
     * This can be used in case an item has a maximum order quantity.
     */
    max: number;
    /**
     * The step is used to increment the count. It is supposed to be a
     * positive inteteger or float.
     * @default 1
     */
    step: number;
    /**
     * Inidicates that the input can be manually set to zero,
     * despite the fact that the input controls will be limited to
     * the minimum. The zero value can be used to remove an item.
     */
    allowZero: boolean;
    private _control$;
    /**
     * In readonly mode the item counter will only be shown as a label,
     * the form controls are not rendered.
     * Please not that readonly is different from the `disabled` form state.
     * @default false
     */
    readonly: boolean;
    private input;
    handleClick(): void;
    increment(): void;
    decrement(): void;
    /**
     * Returns an observable with the control. The value changes of the
     * control are intercepted in order to suppress invalid values.
     */
    getControl(): Observable<FormControl>;
    /**
     * Validate that the given value is in between
     * the `min` and `max` value. If the value is out
     * of  the min/max range, it will be altered.
     * If `allowZero` is set to true, the 0 value is ignored.
     *
     */
    private getValidCount;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ItemCounterComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ItemCounterComponent, "cx-item-counter", never, {
    "min": "min";
    "step": "step";
    "allowZero": "allowZero";
    "readonly": "readonly";
    "control": "control";
    "max": "max";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJpdGVtLWNvdW50ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIFByb3ZpZGVzIGEgVUkgdG8gbWFuYWdlIHRoZSBjb3VudCBvZiB0aGUgcXVhbnRpdHksIHR5cGljYWxseSBieSB1c2luZ1xuICogaW5jcmVhc2UgYW5kIGRlY3JlYXNlIGZ1bmN0aW5hbGl0eS4gVGhlIGl0ZW0gY291bnRlciBleHBlY3RzIGFuIGlucHV0IGBGb3JtQ29udHJvbGBcbiAqIHNvIHRoYXQgdGhlIHN0YXRlIG9mIHRoZSBjb250cm9sIGNhbiBiZSBtYW5hZ2VkIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEl0ZW1Db3VudGVyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgdmFsdWUgb2YgdGhlIGNvdW50ZXIsIHRoZSBzdGF0ZSBvZiB0aGUgYEZvcm1Db250cm9sYFxuICAgICAqIGNhbiBiZSBtYW5hZ2VkIG91dHNpZGUgb2YgdGhlIGl0ZW0gY291bnRlci5cbiAgICAgKi9cbiAgICBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgICAvKipcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGluIGNhc2UgYW4gaXRlbSBoYXMgYSBtaW5tdW0gb3JkZXIgcXVhbnRpdHkuXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIG1pbjogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gY2FzZSBhbiBpdGVtIGhhcyBhIG1heGltdW0gb3JkZXIgcXVhbnRpdHkuXG4gICAgICovXG4gICAgbWF4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN0ZXAgaXMgdXNlZCB0byBpbmNyZW1lbnQgdGhlIGNvdW50LiBJdCBpcyBzdXBwb3NlZCB0byBiZSBhXG4gICAgICogcG9zaXRpdmUgaW50ZXRlZ2VyIG9yIGZsb2F0LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBzdGVwOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSW5pZGljYXRlcyB0aGF0IHRoZSBpbnB1dCBjYW4gYmUgbWFudWFsbHkgc2V0IHRvIHplcm8sXG4gICAgICogZGVzcGl0ZSB0aGUgZmFjdCB0aGF0IHRoZSBpbnB1dCBjb250cm9scyB3aWxsIGJlIGxpbWl0ZWQgdG9cbiAgICAgKiB0aGUgbWluaW11bS4gVGhlIHplcm8gdmFsdWUgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIGFuIGl0ZW0uXG4gICAgICovXG4gICAgYWxsb3daZXJvOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2NvbnRyb2wkO1xuICAgIC8qKlxuICAgICAqIEluIHJlYWRvbmx5IG1vZGUgdGhlIGl0ZW0gY291bnRlciB3aWxsIG9ubHkgYmUgc2hvd24gYXMgYSBsYWJlbCxcbiAgICAgKiB0aGUgZm9ybSBjb250cm9scyBhcmUgbm90IHJlbmRlcmVkLlxuICAgICAqIFBsZWFzZSBub3QgdGhhdCByZWFkb25seSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYGRpc2FibGVkYCBmb3JtIHN0YXRlLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpbnB1dDtcbiAgICBoYW5kbGVDbGljaygpOiB2b2lkO1xuICAgIGluY3JlbWVudCgpOiB2b2lkO1xuICAgIGRlY3JlbWVudCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBjb250cm9sLiBUaGUgdmFsdWUgY2hhbmdlcyBvZiB0aGVcbiAgICAgKiBjb250cm9sIGFyZSBpbnRlcmNlcHRlZCBpbiBvcmRlciB0byBzdXBwcmVzcyBpbnZhbGlkIHZhbHVlcy5cbiAgICAgKi9cbiAgICBnZXRDb250cm9sKCk6IE9ic2VydmFibGU8Rm9ybUNvbnRyb2w+O1xuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHRoYXQgdGhlIGdpdmVuIHZhbHVlIGlzIGluIGJldHdlZW5cbiAgICAgKiB0aGUgYG1pbmAgYW5kIGBtYXhgIHZhbHVlLiBJZiB0aGUgdmFsdWUgaXMgb3V0XG4gICAgICogb2YgIHRoZSBtaW4vbWF4IHJhbmdlLCBpdCB3aWxsIGJlIGFsdGVyZWQuXG4gICAgICogSWYgYGFsbG93WmVyb2AgaXMgc2V0IHRvIHRydWUsIHRoZSAwIHZhbHVlIGlzIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFZhbGlkQ291bnQ7XG59XG4iXX0=