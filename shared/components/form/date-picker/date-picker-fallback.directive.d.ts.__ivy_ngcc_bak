import { ElementRef } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { DatePickerService } from './date-picker.service';
/**
 * Directive that adds an alternative for the native html5 date picker
 * for those browsers that won't support it, Safari being our main concern.
 *
 * An input with `type="date"` will be ignored by browsers that do not support
 * the native date picker. The default text type will be used instead. This directive
 * introduces a few features to ensure that valid dates are added:
 *
 * - add a placeholder to the text input so that the user understands the date format he should provide
 * - add a pattern validator to the input, based on the the placeholder. Please note that the
 *   standard pattern will no longer be applicable since the pattern is added dynamically.
 * - support the `min` and `max` properties by validating the input against those values.
 *
 * The placeholder is provided by the `DatePickerService.placeholder` to allow for customizations.
 *
 */
export declare class DatePickerFallbackDirective implements Validator {
    protected elementRef: ElementRef<HTMLInputElement>;
    protected service: DatePickerService;
    placeholder: string;
    pattern: string;
    constructor(elementRef: ElementRef<HTMLInputElement>, service: DatePickerService);
    validate(formControl: AbstractControl): ValidationErrors;
    protected validateMin(formControl: AbstractControl): boolean;
    protected validateMax(formControl: AbstractControl): boolean;
    protected get min(): Date;
    protected get max(): Date;
    protected get host(): HTMLInputElement;
}
