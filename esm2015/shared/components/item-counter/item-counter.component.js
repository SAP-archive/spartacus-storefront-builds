import { __decorate } from "tslib";
import { Component, HostBinding, HostListener, Input, ViewChild, } from '@angular/core';
import { startWith } from 'rxjs/operators';
/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functionality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
let ItemCounterComponent = class ItemCounterComponent {
    constructor() {
        /**
         * This can be used in case an item has a minmum order quantity.
         * @default 1
         */
        this.min = 1;
        /**
         * The step is used to increment the count. It is supposed to be a
         * positive integer or float.
         * @default 1
         */
        this.step = 1;
        /**
         * Indicates that the input can be manually set to zero,
         * despite the fact that the input controls will be limited to
         * the minimum. The zero value can be used to remove an item.
         */
        this.allowZero = false;
        /**
         * In readonly mode the item counter will only be shown as a label,
         * the form controls are not rendered.
         * Please not that readonly is different from the `disabled` form state.
         * @default false
         */
        this.readonly = false;
    }
    handleClick() {
        this.input.nativeElement.focus();
    }
    ngOnInit() {
        this.sub = this.control.valueChanges
            .pipe(startWith(this.control.value))
            .subscribe((value) => this.control.setValue(this.getValidCount(value), { emitEvent: false }));
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    increment() {
        // it's too early to use the `stepUp` and `stepDown` API...
        // let's wait for FF: https://caniuse.com/#search=stepUp
        this.control.setValue(this.control.value + this.step);
        this.control.markAsDirty();
    }
    decrement() {
        this.control.setValue(this.control.value - this.step);
        this.control.markAsDirty();
    }
    /**
     * Validate that the given value is in between
     * the `min` and `max` value. If the value is out
     * of  the min/max range, it will be altered.
     * If `allowZero` is set to true, the 0 value is ignored.
     *
     */
    getValidCount(value) {
        if (value < this.min && !(value === 0 && this.allowZero)) {
            value = this.min;
        }
        if (this.max && value > this.max) {
            value = this.max;
        }
        return value;
    }
};
__decorate([
    Input()
], ItemCounterComponent.prototype, "control", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "min", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "max", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "step", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "allowZero", void 0);
__decorate([
    HostBinding('class.readonly'), Input()
], ItemCounterComponent.prototype, "readonly", void 0);
__decorate([
    ViewChild('qty')
], ItemCounterComponent.prototype, "input", void 0);
__decorate([
    HostListener('click')
], ItemCounterComponent.prototype, "handleClick", null);
ItemCounterComponent = __decorate([
    Component({
        selector: 'cx-item-counter',
        template: "<button\n  type=\"button\"\n  (click)=\"decrement()\"\n  [disabled]=\"control.disabled || control.value <= min\"\n  tabindex=\"-1\"\n>\n  -\n</button>\n\n<input\n  #qty\n  type=\"number\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [step]=\"step\"\n  [readonly]=\"readonly\"\n  [formControl]=\"control\"\n/>\n\n<button\n  type=\"button\"\n  (click)=\"increment()\"\n  [disabled]=\"control.disabled || control.value >= max\"\n  tabindex=\"-1\"\n>\n  +\n</button>\n"
    })
], ItemCounterComponent);
export { ItemCounterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7Ozs7R0FJRztBQVNILElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBT0U7OztXQUdHO1FBQ00sUUFBRyxHQUFHLENBQUMsQ0FBQztRQU9qQjs7OztXQUlHO1FBQ00sU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVsQjs7OztXQUlHO1FBQ00sY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUzQjs7Ozs7V0FLRztRQUNxQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBdUQzRCxDQUFDO0lBOUN3QixXQUFXO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FDdkUsQ0FBQztJQUNOLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsMkRBQTJEO1FBQzNELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxhQUFhLENBQUMsS0FBYTtRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNsQjtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNsQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUF4RlU7SUFBUixLQUFLLEVBQUU7cURBQXNCO0FBTXJCO0lBQVIsS0FBSyxFQUFFO2lEQUFTO0FBS1I7SUFBUixLQUFLLEVBQUU7aURBQWE7QUFPWjtJQUFSLEtBQUssRUFBRTtrREFBVTtBQU9UO0lBQVIsS0FBSyxFQUFFO3VEQUFtQjtBQVFhO0lBQXZDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRTtzREFBa0I7QUFFdkM7SUFBakIsU0FBUyxDQUFDLEtBQUssQ0FBQzttREFBNkM7QUFPdkM7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQzt1REFFckI7QUFqRFUsb0JBQW9CO0lBUmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0Isb2RBQTRDO0tBSzdDLENBQUM7R0FDVyxvQkFBb0IsQ0E2RmhDO1NBN0ZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIFVJIHRvIG1hbmFnZSB0aGUgY291bnQgb2YgdGhlIHF1YW50aXR5LCB0eXBpY2FsbHkgYnkgdXNpbmdcbiAqIGluY3JlYXNlIGFuZCBkZWNyZWFzZSBmdW5jdGlvbmFsaXR5LiBUaGUgaXRlbSBjb3VudGVyIGV4cGVjdHMgYW4gaW5wdXQgYEZvcm1Db250cm9sYFxuICogc28gdGhhdCB0aGUgc3RhdGUgb2YgdGhlIGNvbnRyb2wgY2FuIGJlIG1hbmFnZWQgb3V0c2lkZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaXRlbS1jb3VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIC8vIGRvIG5vdCB1c2UgT25QdXNoIGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kgYXMgd2Ugd291bGQgbm90XG4gIC8vIGdldCB1cGRhdGVzIG9mIG90aGVyIGZvcm0gY29udHJvbCBzdGF0ZSAoZGlzYWJsZWQpLiBXZSB3YW50IHRvIGhhdmUgYVxuICAvLyBkaXNhYmxlZCBzdGF0ZSBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgY29udHJvbCBjYW5ub3QgYmUgdXNlZCB3aGlsZVxuICAvLyB0aGUgY2FydCBpcyB1cGRhdGVkLlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEhvbGRzIHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciwgdGhlIHN0YXRlIG9mIHRoZSBgRm9ybUNvbnRyb2xgXG4gICAqIGNhbiBiZSBtYW5hZ2VkIG91dHNpZGUgb2YgdGhlIGl0ZW0gY291bnRlci5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIC8qKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIGluIGNhc2UgYW4gaXRlbSBoYXMgYSBtaW5tdW0gb3JkZXIgcXVhbnRpdHkuXG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIEBJbnB1dCgpIG1pbiA9IDE7XG5cbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gY2FzZSBhbiBpdGVtIGhhcyBhIG1heGltdW0gb3JkZXIgcXVhbnRpdHkuXG4gICAqL1xuICBASW5wdXQoKSBtYXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN0ZXAgaXMgdXNlZCB0byBpbmNyZW1lbnQgdGhlIGNvdW50LiBJdCBpcyBzdXBwb3NlZCB0byBiZSBhXG4gICAqIHBvc2l0aXZlIGludGVnZXIgb3IgZmxvYXQuXG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIEBJbnB1dCgpIHN0ZXAgPSAxO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaW5wdXQgY2FuIGJlIG1hbnVhbGx5IHNldCB0byB6ZXJvLFxuICAgKiBkZXNwaXRlIHRoZSBmYWN0IHRoYXQgdGhlIGlucHV0IGNvbnRyb2xzIHdpbGwgYmUgbGltaXRlZCB0b1xuICAgKiB0aGUgbWluaW11bS4gVGhlIHplcm8gdmFsdWUgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIGFuIGl0ZW0uXG4gICAqL1xuICBASW5wdXQoKSBhbGxvd1plcm8gPSBmYWxzZTtcblxuICAvKipcbiAgICogSW4gcmVhZG9ubHkgbW9kZSB0aGUgaXRlbSBjb3VudGVyIHdpbGwgb25seSBiZSBzaG93biBhcyBhIGxhYmVsLFxuICAgKiB0aGUgZm9ybSBjb250cm9scyBhcmUgbm90IHJlbmRlcmVkLlxuICAgKiBQbGVhc2Ugbm90IHRoYXQgcmVhZG9ubHkgaXMgZGlmZmVyZW50IGZyb20gdGhlIGBkaXNhYmxlZGAgZm9ybSBzdGF0ZS5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVhZG9ubHknKSBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3F0eScpIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiByZXNwb25zaWJsZSBmb3IgYXV0by1jb3JyZWN0aW5nIGNvbnRyb2wncyB2YWx1ZSB3aGVuIGl0J3MgaW52YWxpZC5cbiAgICovXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMuY29udHJvbC52YWx1ZSkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT5cbiAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuZ2V0VmFsaWRDb3VudCh2YWx1ZSksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxuICAgICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgLy8gaXQncyB0b28gZWFybHkgdG8gdXNlIHRoZSBgc3RlcFVwYCBhbmQgYHN0ZXBEb3duYCBBUEkuLi5cbiAgICAvLyBsZXQncyB3YWl0IGZvciBGRjogaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXN0ZXBVcFxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wudmFsdWUgKyB0aGlzLnN0ZXApO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wudmFsdWUgLSB0aGlzLnN0ZXApO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoYXQgdGhlIGdpdmVuIHZhbHVlIGlzIGluIGJldHdlZW5cbiAgICogdGhlIGBtaW5gIGFuZCBgbWF4YCB2YWx1ZS4gSWYgdGhlIHZhbHVlIGlzIG91dFxuICAgKiBvZiAgdGhlIG1pbi9tYXggcmFuZ2UsIGl0IHdpbGwgYmUgYWx0ZXJlZC5cbiAgICogSWYgYGFsbG93WmVyb2AgaXMgc2V0IHRvIHRydWUsIHRoZSAwIHZhbHVlIGlzIGlnbm9yZWQuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGdldFZhbGlkQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA8IHRoaXMubWluICYmICEodmFsdWUgPT09IDAgJiYgdGhpcy5hbGxvd1plcm8pKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubWluO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXggJiYgdmFsdWUgPiB0aGlzLm1heCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm1heDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=