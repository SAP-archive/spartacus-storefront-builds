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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJpdGVtLWNvdW50ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogUHJvdmlkZXMgYSBVSSB0byBtYW5hZ2UgdGhlIGNvdW50IG9mIHRoZSBxdWFudGl0eSwgdHlwaWNhbGx5IGJ5IHVzaW5nXG4gKiBpbmNyZWFzZSBhbmQgZGVjcmVhc2UgZnVuY3RpbmFsaXR5LiBUaGUgaXRlbSBjb3VudGVyIGV4cGVjdHMgYW4gaW5wdXQgYEZvcm1Db250cm9sYFxuICogc28gdGhhdCB0aGUgc3RhdGUgb2YgdGhlIGNvbnRyb2wgY2FuIGJlIG1hbmFnZWQgb3V0c2lkZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSXRlbUNvdW50ZXJDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciwgdGhlIHN0YXRlIG9mIHRoZSBgRm9ybUNvbnRyb2xgXG4gICAgICogY2FuIGJlIG1hbmFnZWQgb3V0c2lkZSBvZiB0aGUgaXRlbSBjb3VudGVyLlxuICAgICAqL1xuICAgIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIC8qKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gY2FzZSBhbiBpdGVtIGhhcyBhIG1pbm11bSBvcmRlciBxdWFudGl0eS5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgbWluOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBpbiBjYXNlIGFuIGl0ZW0gaGFzIGEgbWF4aW11bSBvcmRlciBxdWFudGl0eS5cbiAgICAgKi9cbiAgICBtYXg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RlcCBpcyB1c2VkIHRvIGluY3JlbWVudCB0aGUgY291bnQuIEl0IGlzIHN1cHBvc2VkIHRvIGJlIGFcbiAgICAgKiBwb3NpdGl2ZSBpbnRldGVnZXIgb3IgZmxvYXQuXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHN0ZXA6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBJbmlkaWNhdGVzIHRoYXQgdGhlIGlucHV0IGNhbiBiZSBtYW51YWxseSBzZXQgdG8gemVybyxcbiAgICAgKiBkZXNwaXRlIHRoZSBmYWN0IHRoYXQgdGhlIGlucHV0IGNvbnRyb2xzIHdpbGwgYmUgbGltaXRlZCB0b1xuICAgICAqIHRoZSBtaW5pbXVtLiBUaGUgemVybyB2YWx1ZSBjYW4gYmUgdXNlZCB0byByZW1vdmUgYW4gaXRlbS5cbiAgICAgKi9cbiAgICBhbGxvd1plcm86IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfY29udHJvbCQ7XG4gICAgLyoqXG4gICAgICogSW4gcmVhZG9ubHkgbW9kZSB0aGUgaXRlbSBjb3VudGVyIHdpbGwgb25seSBiZSBzaG93biBhcyBhIGxhYmVsLFxuICAgICAqIHRoZSBmb3JtIGNvbnRyb2xzIGFyZSBub3QgcmVuZGVyZWQuXG4gICAgICogUGxlYXNlIG5vdCB0aGF0IHJlYWRvbmx5IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBgZGlzYWJsZWRgIGZvcm0gc3RhdGUuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlucHV0O1xuICAgIGhhbmRsZUNsaWNrKCk6IHZvaWQ7XG4gICAgaW5jcmVtZW50KCk6IHZvaWQ7XG4gICAgZGVjcmVtZW50KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGNvbnRyb2wuIFRoZSB2YWx1ZSBjaGFuZ2VzIG9mIHRoZVxuICAgICAqIGNvbnRyb2wgYXJlIGludGVyY2VwdGVkIGluIG9yZGVyIHRvIHN1cHByZXNzIGludmFsaWQgdmFsdWVzLlxuICAgICAqL1xuICAgIGdldENvbnRyb2woKTogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD47XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gdmFsdWUgaXMgaW4gYmV0d2VlblxuICAgICAqIHRoZSBgbWluYCBhbmQgYG1heGAgdmFsdWUuIElmIHRoZSB2YWx1ZSBpcyBvdXRcbiAgICAgKiBvZiAgdGhlIG1pbi9tYXggcmFuZ2UsIGl0IHdpbGwgYmUgYWx0ZXJlZC5cbiAgICAgKiBJZiBgYWxsb3daZXJvYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIDAgdmFsdWUgaXMgaWdub3JlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VmFsaWRDb3VudDtcbn1cbiJdfQ==