import { ElementRef } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
import { DatePickerFormatterService } from './date-picker-formatter.service';
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
}
