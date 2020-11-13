import { ElementRef } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
import { DateTimePickerFormatterService } from '@spartacus/core';
/**
 * This component serves the browser's native `<input type="datetime-local">` HTML element
 * in whilst projecting the value in the standard date format with regards to timezone offsets.
 */
export declare class DateTimePickerComponent implements ControlValueAccessor, Validator {
    protected dateFormatterService: DateTimePickerFormatterService;
    value: string;
    nativeValue: string;
    /**
     * Reference to input element of type 'datetime-local'.
     */
    input: ElementRef;
    /**
     * Minimum value allowed for input element.
     */
    min?: string;
    /**
     * Maximum value allowed for input element.
     */
    max?: string;
    /**
     * Whether to use `required` validator.
     */
    required?: boolean;
    /**
     * Condition to display as invalid.
     */
    invalid?: boolean;
    constructor(dateFormatterService: DateTimePickerFormatterService);
    /**
     * Handler method for input interactions.
     * @param event: Input event.
     */
    onInput(event: any): void;
    /**
     * Handler method for when the value is modified.
     * @param event: Change event.
     */
    onChange(_event: any): void;
    /**
     * Handler method for when the element is interacted with.
     */
    onTouched(): void;
    /**
     * Register the `onChange()` handler method.
     */
    registerOnChange(fn: (_: any) => void): void;
    /**
     * Register the `onTouched()` handler method.
     */
    registerOnTouched(fn: () => void): void;
    /**
     * Set the value of the input element.
     * @param value: Date-like string to be set
     */
    writeValue(value: string): void;
    /**
     * Get the minimum value allowed for the input.
     */
    getMin(): string;
    /**
     * Get the maximum value allowed for the input.
     */
    getMax(): string;
    /**
     * Returns failing validators if input value is invalid
     */
    validate(): {
        [key: string]: any;
    };
}
