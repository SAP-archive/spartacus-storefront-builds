import { Component, ElementRef, forwardRef, Input, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
export class DatePickerComponent {
    constructor() { }
    onInput(event) {
        this.value = event.target.value;
        this.onChange(this.value);
    }
    onChange(_event) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    setDisabledState(isDisabled) {
        var _a, _b;
        if (isDisabled) {
            (_a = this.input.nativeElement) === null || _a === void 0 ? void 0 : _a.setAttribute('disabled', isDisabled);
        }
        else {
            (_b = this.input.nativeElement) === null || _b === void 0 ? void 0 : _b.removeAttribute('disabled');
        }
    }
    validate() {
        if (this.input && !this.input.nativeElement.validity.valid) {
            const validity = this.input.nativeElement.validity;
            const validators = {};
            if (validity.rangeOverflow) {
                validators.cxDateMax = true;
            }
            if (validity.rangeUnderflow) {
                validators.cxDateMin = true;
            }
            return validators;
        }
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-date-picker',
                template: "<input\n  #inputElement\n  type=\"date\"\n  class=\"form-control\"\n  (blur)=\"onTouched()\"\n  (input)=\"onInput($event)\"\n  [value]=\"value\"\n  [required]=\"required\"\n  [class.is-invalid]=\"invalid\"\n  [min]=\"min\"\n  [max]=\"max\"\n/>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => DatePickerComponent),
                        multi: true,
                    },
                ]
            },] }
];
DatePickerComponent.ctorParameters = () => [];
DatePickerComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['inputElement', { static: false, read: ElementRef },] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    required: [{ type: Input }],
    invalid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxhQUFhLEVBQ2IsaUJBQWlCLEdBRWxCLE1BQU0sZ0JBQWdCLENBQUM7QUFrQnhCLE1BQU0sT0FBTyxtQkFBbUI7SUFrQjlCLGdCQUFlLENBQUM7SUFFaEIsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVyxJQUFHLENBQUM7SUFFeEIsU0FBUyxLQUFJLENBQUM7SUFFZCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjs7UUFDbEMsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSwwQ0FBRSxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRTtTQUNoRTthQUFNO1lBQ0wsTUFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsMENBQUUsZUFBZSxDQUFDLFVBQVUsRUFBRTtTQUN2RDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDbkQsTUFBTSxVQUFVLEdBQStCLEVBQUUsQ0FBQztZQUNsRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFO2dCQUMzQixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUM3QjtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBL0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixpUUFBMkM7Z0JBQzNDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztvQkFJRSxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2tCQUc3RCxLQUFLO2tCQUdMLEtBQUs7dUJBR0wsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdG9yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KVxuICBpbnB1dDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBtaW4/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgbWF4Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBpbnZhbGlkPzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25JbnB1dChldmVudCkge1xuICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKF9ldmVudDogYW55KSB7fVxuXG4gIG9uVG91Y2hlZCgpIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgaWYgKHRoaXMuaW5wdXQgJiYgIXRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsaWRpdHk7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICAgICAgaWYgKHZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcbiAgICAgICAgdmFsaWRhdG9ycy5jeERhdGVNYXggPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93KSB7XG4gICAgICAgIHZhbGlkYXRvcnMuY3hEYXRlTWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICAgIH1cbiAgfVxufVxuIl19