import { ElementRef } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class DatePickerComponent implements ControlValueAccessor, Validator {
    value: string;
    input: ElementRef;
    min?: string;
    max?: string;
    required?: boolean;
    invalid?: boolean;
    constructor();
    onInput(event: any): void;
    onChange(_event: any): void;
    onTouched(): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(value: string): void;
    validate(): {
        [key: string]: any;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatePickerComponent, "cx-date-picker", never, { "min": "min"; "max": "max"; "required": "required"; "invalid": "invalid"; }, {}, never, never>;
}

//# sourceMappingURL=date-picker.component.d.ts.map