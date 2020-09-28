import { ElementRef } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
import { DatePickerFormatterService } from './date-picker-formatter.service';
import * as ɵngcc0 from '@angular/core';
export declare class DatePickerComponent implements ControlValueAccessor, Validator {
    protected dateFormatterService: DatePickerFormatterService;
    value: string;
    nativeValue: string;
    input: ElementRef;
    min?: string;
    max?: string;
    endOfDay: boolean;
    required?: boolean;
    invalid?: boolean;
    constructor(dateFormatterService: DatePickerFormatterService);
    onInput(event: any): void;
    onChange(_event: any): void;
    onTouched(): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(value: string): void;
    getMin(): string;
    getMax(): string;
    validate(): {
        [key: string]: any;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatePickerComponent, "cx-date-picker", never, { "endOfDay": "endOfDay"; "min": "min"; "max": "max"; "required": "required"; "invalid": "invalid"; }, {}, never, never>;
}

//# sourceMappingURL=date-picker.component.d.ts.map