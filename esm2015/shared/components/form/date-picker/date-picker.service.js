import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service that provides the placeholder and input pattern for date pickers. This is
 * used in Spartacus to support browser that won't support the native html5 date picker
 * using `<input type="date">`.
 *
 * While the placeholder is configurable, you should be aware that the placeholder format
 * defaults to `yyyy-mm-dd` to align with Safaris limited support of ISO 8601.
 * Another consideration is the support of date formats in the backend. In case you change
 * this format, you might need to serialize the date to the supported date format in the
 * backend.
 *
 */
export class DatePickerService {
    get placeholder() {
        return 'yyyy-mm-dd';
    }
    /**
     * The default date pattern is based on the placeholder string;
     */
    get pattern() {
        return this.placeholder
            .replace('yyyy', '\\d{4}')
            .replace('mm', '\\d{1,2}')
            .replace('dd', '\\d{1,2}');
    }
    /**
     * Validates if the string based date value is a valid date.
     */
    isValidFormat(date, pattern) {
        const patternRegex = new RegExp(`^${pattern !== null && pattern !== void 0 ? pattern : this.pattern}$`);
        return patternRegex.test(date);
    }
    /**
     * Since Safari doesn't support proper date formats (ISO 8601), we need to do this
     * ourselves. We cannot rely on `new Date('2020-1-1')`. This will fail, only
     * `new Date('2020-01-01')` works.
     */
    getDate(value) {
        if (!value) {
            return;
        }
        const delimiter = this.placeholder
            .replace('yyyy', '')
            .replace('mm', '')
            .replace('dd', '')
            .substr(0, 1);
        const dateParts = value.split(delimiter);
        const placeholderParts = this.placeholder.split(delimiter);
        const y = placeholderParts.indexOf('yyyy');
        const m = placeholderParts.indexOf('mm');
        const d = placeholderParts.indexOf('dd');
        return new Date(Number(dateParts[y]), Number(dateParts[m]) - 1, Number(dateParts[d]));
    }
}
DatePickerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatePickerService_Factory() { return new DatePickerService(); }, token: DatePickerService, providedIn: "root" });
DatePickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7Ozs7Ozs7Ozs7R0FXRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsSUFBSSxXQUFXO1FBQ2IsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQzthQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxJQUFZLEVBQUUsT0FBZ0I7UUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDL0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7YUFDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7YUFDakIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7YUFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLElBQUksQ0FDYixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7WUF2REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyB0aGUgcGxhY2Vob2xkZXIgYW5kIGlucHV0IHBhdHRlcm4gZm9yIGRhdGUgcGlja2Vycy4gVGhpcyBpc1xuICogdXNlZCBpbiBTcGFydGFjdXMgdG8gc3VwcG9ydCBicm93c2VyIHRoYXQgd29uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIGh0bWw1IGRhdGUgcGlja2VyXG4gKiB1c2luZyBgPGlucHV0IHR5cGU9XCJkYXRlXCI+YC5cbiAqXG4gKiBXaGlsZSB0aGUgcGxhY2Vob2xkZXIgaXMgY29uZmlndXJhYmxlLCB5b3Ugc2hvdWxkIGJlIGF3YXJlIHRoYXQgdGhlIHBsYWNlaG9sZGVyIGZvcm1hdFxuICogZGVmYXVsdHMgdG8gYHl5eXktbW0tZGRgIHRvIGFsaWduIHdpdGggU2FmYXJpcyBsaW1pdGVkIHN1cHBvcnQgb2YgSVNPIDg2MDEuXG4gKiBBbm90aGVyIGNvbnNpZGVyYXRpb24gaXMgdGhlIHN1cHBvcnQgb2YgZGF0ZSBmb3JtYXRzIGluIHRoZSBiYWNrZW5kLiBJbiBjYXNlIHlvdSBjaGFuZ2VcbiAqIHRoaXMgZm9ybWF0LCB5b3UgbWlnaHQgbmVlZCB0byBzZXJpYWxpemUgdGhlIGRhdGUgdG8gdGhlIHN1cHBvcnRlZCBkYXRlIGZvcm1hdCBpbiB0aGVcbiAqIGJhY2tlbmQuXG4gKlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlclNlcnZpY2Uge1xuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3l5eXktbW0tZGQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGRhdGUgcGF0dGVybiBpcyBiYXNlZCBvbiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nO1xuICAgKi9cbiAgZ2V0IHBhdHRlcm4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlclxuICAgICAgLnJlcGxhY2UoJ3l5eXknLCAnXFxcXGR7NH0nKVxuICAgICAgLnJlcGxhY2UoJ21tJywgJ1xcXFxkezEsMn0nKVxuICAgICAgLnJlcGxhY2UoJ2RkJywgJ1xcXFxkezEsMn0nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlIHN0cmluZyBiYXNlZCBkYXRlIHZhbHVlIGlzIGEgdmFsaWQgZGF0ZS5cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQoZGF0ZTogc3RyaW5nLCBwYXR0ZXJuPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGF0dGVyblJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybiA/PyB0aGlzLnBhdHRlcm59JGApO1xuICAgIHJldHVybiBwYXR0ZXJuUmVnZXgudGVzdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHByb3BlciBkYXRlIGZvcm1hdHMgKElTTyA4NjAxKSwgd2UgbmVlZCB0byBkbyB0aGlzXG4gICAqIG91cnNlbHZlcy4gV2UgY2Fubm90IHJlbHkgb24gYG5ldyBEYXRlKCcyMDIwLTEtMScpYC4gVGhpcyB3aWxsIGZhaWwsIG9ubHlcbiAgICogYG5ldyBEYXRlKCcyMDIwLTAxLTAxJylgIHdvcmtzLlxuICAgKi9cbiAgZ2V0RGF0ZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGltaXRlciA9IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgIC5yZXBsYWNlKCd5eXl5JywgJycpXG4gICAgICAucmVwbGFjZSgnbW0nLCAnJylcbiAgICAgIC5yZXBsYWNlKCdkZCcsICcnKVxuICAgICAgLnN1YnN0cigwLCAxKTtcblxuICAgIGNvbnN0IGRhdGVQYXJ0cyA9IHZhbHVlLnNwbGl0KGRlbGltaXRlcik7XG5cbiAgICBjb25zdCBwbGFjZWhvbGRlclBhcnRzID0gdGhpcy5wbGFjZWhvbGRlci5zcGxpdChkZWxpbWl0ZXIpO1xuXG4gICAgY29uc3QgeSA9IHBsYWNlaG9sZGVyUGFydHMuaW5kZXhPZigneXl5eScpO1xuICAgIGNvbnN0IG0gPSBwbGFjZWhvbGRlclBhcnRzLmluZGV4T2YoJ21tJyk7XG4gICAgY29uc3QgZCA9IHBsYWNlaG9sZGVyUGFydHMuaW5kZXhPZignZGQnKTtcblxuICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgIE51bWJlcihkYXRlUGFydHNbeV0pLFxuICAgICAgTnVtYmVyKGRhdGVQYXJ0c1ttXSkgLSAxLFxuICAgICAgTnVtYmVyKGRhdGVQYXJ0c1tkXSlcbiAgICApO1xuICB9XG59XG4iXX0=