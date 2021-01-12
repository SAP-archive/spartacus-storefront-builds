import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePickerService } from './date-picker.service';
/**
 * Component that adds a date control. While the native date picker works in most
 * modern browsers, some browsers need more guidance (placeholder), validation and
 * date conversion.
 *
 * The data picker supports (optional) min and max form controls, so that you can
 * limit the start and/or end date.
 *
 * Most of the implementation is done in the `DatePickerFallbackDirective`.
 */
export declare class DatePickerComponent {
    protected service: DatePickerService;
    constructor(service: DatePickerService);
    control: FormControl;
    min?: string;
    max?: string;
    update: EventEmitter<void>;
    change(): void;
    get placeholder(): string;
    get pattern(): string;
    /**
     * Only returns the date if we have a valid format. We do this to avoid
     * loads of console errors coming from the datePipe while the user is typing
     * (in those browsers where the date picker isn't supported).
     */
    getDate(date: string): string;
}
