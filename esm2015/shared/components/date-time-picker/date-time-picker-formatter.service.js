import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service responsible for converting date-like strings to/from formats compatible with the `<input type="datetime-local">`
 * HTML element and valid strings compatible with the `Date` object.
 *
 * Date values used are relative to the local timezone of the user.
 */
export class DateTimePickerFormatterService {
    /**
     * Convert date string into a string format compatable with the browser's native `<input type="datetime-local">` HTML element.
     * @param value: date string to convert
     *
     * @example
     * With UTC-0 local offset, `toNative('2010-01-01T00:00+0000')` returns `'2010-01-01T00:00'`.
     */
    toNative(value) {
        return value
            ? this.formatDateStringWithTimezone(value, this.getLocalTimezoneOffset(true))
            : null;
    }
    /**
     * Convert datetime-local native string into a valid datetime string.
     * @param value: datetime-local string to convert
     *
     * @example
     * With UTC-0 locale offset, `toModel('2010-01-01T00:00')` returns `'2010-01-01T00:00:00+00:00'`.
     */
    toModel(value) {
        return value ? `${value}:00${this.getLocalTimezoneOffset()}` : null;
    }
    /**
     * Returns the local timezone in a format that can be appended to a date-like string.
     * @param invert (default: false): returns the opposite operator relative to the local timezone
     *
     * @example
     * When locale is set to a CEST timezone, `getLocalTimezoneOffset()` returns '+02:00'
     * and `getLocalTimezoneOffset(true)` returns '-02:00'
     */
    getLocalTimezoneOffset(invert) {
        const offset = new Date().getTimezoneOffset() * -1;
        const hours = Math.abs(Math.floor(offset / 60))
            .toString()
            .padStart(2, '0');
        const minutes = (offset % 60).toString().padStart(2, '0');
        const sign = offset >= 0 ? (invert ? `-` : `+`) : invert ? `+` : `-`;
        return `${sign}${hours}:${minutes}`;
    }
    /**
     * Format date string into a format compatable with the browser's native `<input type="datetime-local">` HTML element.
     * @param dateString: date string to convert
     * @param offset: offset to append to date string
     *
     * @example
     * With UTC-0 local offset, `formatDateStringWithTimezone('2010-01-01T00:00+0000', '+00:00')` returns `'2010-01-01T00:00+00:00'`.
     */
    formatDateStringWithTimezone(dateString, offset) {
        return new Date(dateString.replace('+0000', offset))
            .toISOString()
            .substring(0, 16);
    }
}
DateTimePickerFormatterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateTimePickerFormatterService_Factory() { return new DateTimePickerFormatterService(); }, token: DateTimePickerFormatterService, providedIn: "root" });
DateTimePickerFormatterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1mb3JtYXR0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvZGF0ZS10aW1lLXBpY2tlci1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyw4QkFBOEI7SUFDekM7Ozs7OztPQU1HO0lBQ0gsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxLQUFLO1lBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FDL0IsS0FBSyxFQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FDbEM7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE9BQU8sQ0FBQyxLQUFhO1FBQ25CLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxzQkFBc0IsQ0FBQyxNQUFnQjtRQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQzthQUM1QyxRQUFRLEVBQUU7YUFDVixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckUsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyw0QkFBNEIsQ0FDcEMsVUFBa0IsRUFDbEIsTUFBYztRQUVkLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDakQsV0FBVyxFQUFFO2FBQ2IsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O1lBaEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHJlc3BvbnNpYmxlIGZvciBjb252ZXJ0aW5nIGRhdGUtbGlrZSBzdHJpbmdzIHRvL2Zyb20gZm9ybWF0cyBjb21wYXRpYmxlIHdpdGggdGhlIGA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCI+YFxuICogSFRNTCBlbGVtZW50IGFuZCB2YWxpZCBzdHJpbmdzIGNvbXBhdGlibGUgd2l0aCB0aGUgYERhdGVgIG9iamVjdC5cbiAqXG4gKiBEYXRlIHZhbHVlcyB1c2VkIGFyZSByZWxhdGl2ZSB0byB0aGUgbG9jYWwgdGltZXpvbmUgb2YgdGhlIHVzZXIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlckZvcm1hdHRlclNlcnZpY2Uge1xuICAvKipcbiAgICogQ29udmVydCBkYXRlIHN0cmluZyBpbnRvIGEgc3RyaW5nIGZvcm1hdCBjb21wYXRhYmxlIHdpdGggdGhlIGJyb3dzZXIncyBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIj5gIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIHZhbHVlOiBkYXRlIHN0cmluZyB0byBjb252ZXJ0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIFdpdGggVVRDLTAgbG9jYWwgb2Zmc2V0LCBgdG9OYXRpdmUoJzIwMTAtMDEtMDFUMDA6MDArMDAwMCcpYCByZXR1cm5zIGAnMjAxMC0wMS0wMVQwMDowMCdgLlxuICAgKi9cbiAgdG9OYXRpdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICA/IHRoaXMuZm9ybWF0RGF0ZVN0cmluZ1dpdGhUaW1lem9uZShcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB0aGlzLmdldExvY2FsVGltZXpvbmVPZmZzZXQodHJ1ZSlcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZGF0ZXRpbWUtbG9jYWwgbmF0aXZlIHN0cmluZyBpbnRvIGEgdmFsaWQgZGF0ZXRpbWUgc3RyaW5nLlxuICAgKiBAcGFyYW0gdmFsdWU6IGRhdGV0aW1lLWxvY2FsIHN0cmluZyB0byBjb252ZXJ0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIFdpdGggVVRDLTAgbG9jYWxlIG9mZnNldCwgYHRvTW9kZWwoJzIwMTAtMDEtMDFUMDA6MDAnKWAgcmV0dXJucyBgJzIwMTAtMDEtMDFUMDA6MDA6MDArMDA6MDAnYC5cbiAgICovXG4gIHRvTW9kZWwodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlID8gYCR7dmFsdWV9OjAwJHt0aGlzLmdldExvY2FsVGltZXpvbmVPZmZzZXQoKX1gIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhbCB0aW1lem9uZSBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBhcHBlbmRlZCB0byBhIGRhdGUtbGlrZSBzdHJpbmcuXG4gICAqIEBwYXJhbSBpbnZlcnQgKGRlZmF1bHQ6IGZhbHNlKTogcmV0dXJucyB0aGUgb3Bwb3NpdGUgb3BlcmF0b3IgcmVsYXRpdmUgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIFdoZW4gbG9jYWxlIGlzIHNldCB0byBhIENFU1QgdGltZXpvbmUsIGBnZXRMb2NhbFRpbWV6b25lT2Zmc2V0KClgIHJldHVybnMgJyswMjowMCdcbiAgICogYW5kIGBnZXRMb2NhbFRpbWV6b25lT2Zmc2V0KHRydWUpYCByZXR1cm5zICctMDI6MDAnXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TG9jYWxUaW1lem9uZU9mZnNldChpbnZlcnQ/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiAtMTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguYWJzKE1hdGguZmxvb3Iob2Zmc2V0IC8gNjApKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSAob2Zmc2V0ICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID49IDAgPyAoaW52ZXJ0ID8gYC1gIDogYCtgKSA6IGludmVydCA/IGArYCA6IGAtYDtcbiAgICByZXR1cm4gYCR7c2lnbn0ke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgZGF0ZSBzdHJpbmcgaW50byBhIGZvcm1hdCBjb21wYXRhYmxlIHdpdGggdGhlIGJyb3dzZXIncyBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIj5gIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIGRhdGVTdHJpbmc6IGRhdGUgc3RyaW5nIHRvIGNvbnZlcnRcbiAgICogQHBhcmFtIG9mZnNldDogb2Zmc2V0IHRvIGFwcGVuZCB0byBkYXRlIHN0cmluZ1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBXaXRoIFVUQy0wIGxvY2FsIG9mZnNldCwgYGZvcm1hdERhdGVTdHJpbmdXaXRoVGltZXpvbmUoJzIwMTAtMDEtMDFUMDA6MDArMDAwMCcsICcrMDA6MDAnKWAgcmV0dXJucyBgJzIwMTAtMDEtMDFUMDA6MDArMDA6MDAnYC5cbiAgICovXG4gIHByb3RlY3RlZCBmb3JtYXREYXRlU3RyaW5nV2l0aFRpbWV6b25lKFxuICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICBvZmZzZXQ6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nLnJlcGxhY2UoJyswMDAwJywgb2Zmc2V0KSlcbiAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAuc3Vic3RyaW5nKDAsIDE2KTtcbiAgfVxufVxuIl19