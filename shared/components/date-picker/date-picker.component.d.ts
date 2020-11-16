import { ElementRef } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
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
}
