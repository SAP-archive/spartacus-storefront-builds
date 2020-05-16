import { OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functionality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ItemCounterComponent implements OnInit, OnDestroy {
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
     * positive integer or float.
     * @default 1
     */
    step: number;
    /**
     * Indicates that the input can be manually set to zero,
     * despite the fact that the input controls will be limited to
     * the minimum. The zero value can be used to remove an item.
     */
    allowZero: boolean;
    /**
     * In readonly mode the item counter will only be shown as a label,
     * the form controls are not rendered.
     * Please not that readonly is different from the `disabled` form state.
     * @default false
     */
    readonly: boolean;
    private input;
    /**
     * Subscription responsible for auto-correcting control's value when it's invalid.
     */
    private sub;
    handleClick(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    increment(): void;
    decrement(): void;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJpdGVtLWNvdW50ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8qKlxuICogUHJvdmlkZXMgYSBVSSB0byBtYW5hZ2UgdGhlIGNvdW50IG9mIHRoZSBxdWFudGl0eSwgdHlwaWNhbGx5IGJ5IHVzaW5nXG4gKiBpbmNyZWFzZSBhbmQgZGVjcmVhc2UgZnVuY3Rpb25hbGl0eS4gVGhlIGl0ZW0gY291bnRlciBleHBlY3RzIGFuIGlucHV0IGBGb3JtQ29udHJvbGBcbiAqIHNvIHRoYXQgdGhlIHN0YXRlIG9mIHRoZSBjb250cm9sIGNhbiBiZSBtYW5hZ2VkIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEl0ZW1Db3VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciwgdGhlIHN0YXRlIG9mIHRoZSBgRm9ybUNvbnRyb2xgXG4gICAgICogY2FuIGJlIG1hbmFnZWQgb3V0c2lkZSBvZiB0aGUgaXRlbSBjb3VudGVyLlxuICAgICAqL1xuICAgIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIC8qKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gY2FzZSBhbiBpdGVtIGhhcyBhIG1pbm11bSBvcmRlciBxdWFudGl0eS5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgbWluOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBpbiBjYXNlIGFuIGl0ZW0gaGFzIGEgbWF4aW11bSBvcmRlciBxdWFudGl0eS5cbiAgICAgKi9cbiAgICBtYXg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RlcCBpcyB1c2VkIHRvIGluY3JlbWVudCB0aGUgY291bnQuIEl0IGlzIHN1cHBvc2VkIHRvIGJlIGFcbiAgICAgKiBwb3NpdGl2ZSBpbnRlZ2VyIG9yIGZsb2F0LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBzdGVwOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGlucHV0IGNhbiBiZSBtYW51YWxseSBzZXQgdG8gemVybyxcbiAgICAgKiBkZXNwaXRlIHRoZSBmYWN0IHRoYXQgdGhlIGlucHV0IGNvbnRyb2xzIHdpbGwgYmUgbGltaXRlZCB0b1xuICAgICAqIHRoZSBtaW5pbXVtLiBUaGUgemVybyB2YWx1ZSBjYW4gYmUgdXNlZCB0byByZW1vdmUgYW4gaXRlbS5cbiAgICAgKi9cbiAgICBhbGxvd1plcm86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW4gcmVhZG9ubHkgbW9kZSB0aGUgaXRlbSBjb3VudGVyIHdpbGwgb25seSBiZSBzaG93biBhcyBhIGxhYmVsLFxuICAgICAqIHRoZSBmb3JtIGNvbnRyb2xzIGFyZSBub3QgcmVuZGVyZWQuXG4gICAgICogUGxlYXNlIG5vdCB0aGF0IHJlYWRvbmx5IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBgZGlzYWJsZWRgIGZvcm0gc3RhdGUuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlucHV0O1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmlwdGlvbiByZXNwb25zaWJsZSBmb3IgYXV0by1jb3JyZWN0aW5nIGNvbnRyb2wncyB2YWx1ZSB3aGVuIGl0J3MgaW52YWxpZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN1YjtcbiAgICBoYW5kbGVDbGljaygpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBpbmNyZW1lbnQoKTogdm9pZDtcbiAgICBkZWNyZW1lbnQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiB2YWx1ZSBpcyBpbiBiZXR3ZWVuXG4gICAgICogdGhlIGBtaW5gIGFuZCBgbWF4YCB2YWx1ZS4gSWYgdGhlIHZhbHVlIGlzIG91dFxuICAgICAqIG9mICB0aGUgbWluL21heCByYW5nZSwgaXQgd2lsbCBiZSBhbHRlcmVkLlxuICAgICAqIElmIGBhbGxvd1plcm9gIGlzIHNldCB0byB0cnVlLCB0aGUgMCB2YWx1ZSBpcyBpZ25vcmVkLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRWYWxpZENvdW50O1xufVxuIl19