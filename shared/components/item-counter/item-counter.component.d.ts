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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ItemCounterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ItemCounterComponent, "cx-item-counter", never, { "min": "min"; "step": "step"; "allowZero": "allowZero"; "readonly": "readonly"; "control": "control"; "max": "max"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJpdGVtLWNvdW50ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBQcm92aWRlcyBhIFVJIHRvIG1hbmFnZSB0aGUgY291bnQgb2YgdGhlIHF1YW50aXR5LCB0eXBpY2FsbHkgYnkgdXNpbmdcbiAqIGluY3JlYXNlIGFuZCBkZWNyZWFzZSBmdW5jdGluYWxpdHkuIFRoZSBpdGVtIGNvdW50ZXIgZXhwZWN0cyBhbiBpbnB1dCBgRm9ybUNvbnRyb2xgXG4gKiBzbyB0aGF0IHRoZSBzdGF0ZSBvZiB0aGUgY29udHJvbCBjYW4gYmUgbWFuYWdlZCBvdXRzaWRlIG9mIHRoaXMgY29tcG9uZW50LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVyLCB0aGUgc3RhdGUgb2YgdGhlIGBGb3JtQ29udHJvbGBcbiAgICAgKiBjYW4gYmUgbWFuYWdlZCBvdXRzaWRlIG9mIHRoZSBpdGVtIGNvdW50ZXIuXG4gICAgICovXG4gICAgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgLyoqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBpbiBjYXNlIGFuIGl0ZW0gaGFzIGEgbWlubXVtIG9yZGVyIHF1YW50aXR5LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBtaW46IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGluIGNhc2UgYW4gaXRlbSBoYXMgYSBtYXhpbXVtIG9yZGVyIHF1YW50aXR5LlxuICAgICAqL1xuICAgIG1heDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGVwIGlzIHVzZWQgdG8gaW5jcmVtZW50IHRoZSBjb3VudC4gSXQgaXMgc3VwcG9zZWQgdG8gYmUgYVxuICAgICAqIHBvc2l0aXZlIGludGV0ZWdlciBvciBmbG9hdC5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgc3RlcDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEluaWRpY2F0ZXMgdGhhdCB0aGUgaW5wdXQgY2FuIGJlIG1hbnVhbGx5IHNldCB0byB6ZXJvLFxuICAgICAqIGRlc3BpdGUgdGhlIGZhY3QgdGhhdCB0aGUgaW5wdXQgY29udHJvbHMgd2lsbCBiZSBsaW1pdGVkIHRvXG4gICAgICogdGhlIG1pbmltdW0uIFRoZSB6ZXJvIHZhbHVlIGNhbiBiZSB1c2VkIHRvIHJlbW92ZSBhbiBpdGVtLlxuICAgICAqL1xuICAgIGFsbG93WmVybzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jb250cm9sJDtcbiAgICAvKipcbiAgICAgKiBJbiByZWFkb25seSBtb2RlIHRoZSBpdGVtIGNvdW50ZXIgd2lsbCBvbmx5IGJlIHNob3duIGFzIGEgbGFiZWwsXG4gICAgICogdGhlIGZvcm0gY29udHJvbHMgYXJlIG5vdCByZW5kZXJlZC5cbiAgICAgKiBQbGVhc2Ugbm90IHRoYXQgcmVhZG9ubHkgaXMgZGlmZmVyZW50IGZyb20gdGhlIGBkaXNhYmxlZGAgZm9ybSBzdGF0ZS5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIHByaXZhdGUgaW5wdXQ7XG4gICAgaGFuZGxlQ2xpY2soKTogdm9pZDtcbiAgICBpbmNyZW1lbnQoKTogdm9pZDtcbiAgICBkZWNyZW1lbnQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgY29udHJvbC4gVGhlIHZhbHVlIGNoYW5nZXMgb2YgdGhlXG4gICAgICogY29udHJvbCBhcmUgaW50ZXJjZXB0ZWQgaW4gb3JkZXIgdG8gc3VwcHJlc3MgaW52YWxpZCB2YWx1ZXMuXG4gICAgICovXG4gICAgZ2V0Q29udHJvbCgpOiBPYnNlcnZhYmxlPEZvcm1Db250cm9sPjtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiB2YWx1ZSBpcyBpbiBiZXR3ZWVuXG4gICAgICogdGhlIGBtaW5gIGFuZCBgbWF4YCB2YWx1ZS4gSWYgdGhlIHZhbHVlIGlzIG91dFxuICAgICAqIG9mICB0aGUgbWluL21heCByYW5nZSwgaXQgd2lsbCBiZSBhbHRlcmVkLlxuICAgICAqIElmIGBhbGxvd1plcm9gIGlzIHNldCB0byB0cnVlLCB0aGUgMCB2YWx1ZSBpcyBpZ25vcmVkLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRWYWxpZENvdW50O1xufVxuIl19