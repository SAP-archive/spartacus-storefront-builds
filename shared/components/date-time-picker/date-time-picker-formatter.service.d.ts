/**
 * Service responsible for converting date-like strings to/from formats compatible with the `<input type="datetime-local">`
 * HTML element and valid strings compatible with the `Date` object.
 *
 * Date values used are relative to the local timezone of the user.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DateTimePickerFormatterService {
    /**
     * Convert date string into a string format compatable with the browser's native `<input type="datetime-local">` HTML element.
     * @param value: date string to convert
     *
     * @example
     * With UTC-0 local offset, `toNative('2010-01-01T00:00+0000')` returns `'2010-01-01T00:00'`.
     */
    toNative(value: string): string;
    /**
     * Convert datetime-local native string into a valid datetime string.
     * @param value: datetime-local string to convert
     *
     * @example
     * With UTC-0 locale offset, `toModel('2010-01-01T00:00')` returns `'2010-01-01T00:00:00+00:00'`.
     */
    toModel(value: string): string;
    /**
     * Returns the local timezone in a format that can be appended to a date-like string.
     * @param invert (default: false): returns the opposite operator relative to the local timezone
     *
     * @example
     * When locale is set to a CEST timezone, `getLocalTimezoneOffset()` returns '+02:00'
     * and `getLocalTimezoneOffset(true)` returns '-02:00'
     */
    protected getLocalTimezoneOffset(invert?: boolean): string;
    /**
     * Format date string into a format compatable with the browser's native `<input type="datetime-local">` HTML element.
     * @param dateString: date string to convert
     * @param offset: offset to append to date string
     *
     * @example
     * With UTC-0 local offset, `formatDateStringWithTimezone('2010-01-01T00:00+0000', '+00:00')` returns `'2010-01-01T00:00+00:00'`.
     */
    protected formatDateStringWithTimezone(dateString: string, offset: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateTimePickerFormatterService, never>;
}

//# sourceMappingURL=date-time-picker-formatter.service.d.ts.map