import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SelectFocusUtility = /** @class */ (function () {
    function SelectFocusUtility() {
        /**
         * Query selectors used to query focusable child elements of the host element.
         * The selectors are supplemented with `:not([disabled])` and `:not([hidden])`.
         */
        this.focusableSelectors = [
            'a[href]',
            'button',
            '[tabindex]',
            'input',
            'select',
            'textarea',
        ];
    }
    // like to leave out the following as we don't use it, and make this list exensible.
    //   `[contentEditable=true]`, // very unlikely to suport as we're not a business tool
    //   `iframe`, // we really don't like iframes...
    //   `area[href]`, // very debatable!
    SelectFocusUtility.prototype.query = function (host, selector) {
        if (!selector || selector === '') {
            return [];
        }
        return Array.from(host.querySelectorAll(selector));
    };
    SelectFocusUtility.prototype.findFirstFocusable = function (host, config) {
        if (config === void 0) { config = { autofocus: true }; }
        var _a;
        var selector = typeof ((_a = config) === null || _a === void 0 ? void 0 : _a.autofocus) === 'string' ? config.autofocus : '[autofocus]';
        // fallback to first focusable
        return (this.query(host, selector).find(Boolean) ||
            this.findFocusable(host).find(Boolean));
    };
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returend as well
     */
    SelectFocusUtility.prototype.findFocusable = function (host, locked) {
        if (locked === void 0) { locked = false; }
        var suffix = ':not([disabled])';
        if (!locked) {
            suffix += ":not([tabindex='-1'])";
        }
        var selector = this.focusableSelectors.map(function (s) { return (s += suffix); }).join(',');
        return this.query(host, selector);
    };
    SelectFocusUtility.ɵprov = i0.ɵɵdefineInjectable({ factory: function SelectFocusUtility_Factory() { return new SelectFocusUtility(); }, token: SelectFocusUtility, providedIn: "root" });
    SelectFocusUtility = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SelectFocusUtility);
    return SelectFocusUtility;
}());
export { SelectFocusUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0M7SUFBQTtRQUNFOzs7V0FHRztRQUNPLHVCQUFrQixHQUFhO1lBQ3ZDLFNBQVM7WUFDVCxRQUFRO1lBQ1IsWUFBWTtZQUNaLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtTQUNYLENBQUM7S0E0Q0g7SUEzQ0Msb0ZBQW9GO0lBQ3BGLHNGQUFzRjtJQUN0RixpREFBaUQ7SUFDakQscUNBQXFDO0lBRXJDLGtDQUFLLEdBQUwsVUFBTSxJQUFpQixFQUFFLFFBQWdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQTRCLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQ0UsSUFBaUIsRUFDakIsTUFBNkM7UUFBN0MsdUJBQUEsRUFBQSxXQUE0QixTQUFTLEVBQUUsSUFBSSxFQUFFOztRQUU3QyxJQUFNLFFBQVEsR0FDWixjQUFPLE1BQU0sMENBQUUsU0FBUyxDQUFBLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFFM0UsOEJBQThCO1FBQzlCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILDBDQUFhLEdBQWIsVUFBYyxJQUFpQixFQUFFLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDN0MsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQztTQUNuQztRQUNELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOztJQXZEVSxrQkFBa0I7UUFIOUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGtCQUFrQixDQXdEOUI7NkJBOUREO0NBOERDLEFBeERELElBd0RDO1NBeERZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvY3VzVXRpbGl0eSB7XG4gIC8qKlxuICAgKiBRdWVyeSBzZWxlY3RvcnMgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICogVGhlIHNlbGVjdG9ycyBhcmUgc3VwcGxlbWVudGVkIHdpdGggYDpub3QoW2Rpc2FibGVkXSlgIGFuZCBgOm5vdChbaGlkZGVuXSlgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yczogc3RyaW5nW10gPSBbXG4gICAgJ2FbaHJlZl0nLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdJyxcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG4gIF07XG4gIC8vIGxpa2UgdG8gbGVhdmUgb3V0IHRoZSBmb2xsb3dpbmcgYXMgd2UgZG9uJ3QgdXNlIGl0LCBhbmQgbWFrZSB0aGlzIGxpc3QgZXhlbnNpYmxlLlxuICAvLyAgIGBbY29udGVudEVkaXRhYmxlPXRydWVdYCwgLy8gdmVyeSB1bmxpa2VseSB0byBzdXBvcnQgYXMgd2UncmUgbm90IGEgYnVzaW5lc3MgdG9vbFxuICAvLyAgIGBpZnJhbWVgLCAvLyB3ZSByZWFsbHkgZG9uJ3QgbGlrZSBpZnJhbWVzLi4uXG4gIC8vICAgYGFyZWFbaHJlZl1gLCAvLyB2ZXJ5IGRlYmF0YWJsZSFcblxuICBxdWVyeShob3N0OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgaG9zdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICk7XG4gIH1cblxuICBmaW5kRmlyc3RGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBBdXRvRm9jdXNDb25maWcgPSB7IGF1dG9mb2N1czogdHJ1ZSB9XG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWxlY3RvciA9XG4gICAgICB0eXBlb2YgY29uZmlnPy5hdXRvZm9jdXMgPT09ICdzdHJpbmcnID8gY29uZmlnLmF1dG9mb2N1cyA6ICdbYXV0b2ZvY3VzXSc7XG5cbiAgICAvLyBmYWxsYmFjayB0byBmaXJzdCBmb2N1c2FibGVcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5xdWVyeShob3N0LCBzZWxlY3RvcikuZmluZChCb29sZWFuKSB8fFxuICAgICAgdGhpcy5maW5kRm9jdXNhYmxlKGhvc3QpLmZpbmQoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LiBUaGUgZWxlbWVudCBzZWxlY3RvcnNcbiAgICogYXJlIGJ1aWxkIGZyb20gdGhlIGBmb2N1c2FibGVTZWxlY3RvcnNgLlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCB0aGUgYEhUTUxFbGVtZW50YCB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBlbGVtZW50c1xuICAgKiBAcGFyYW0gbG9ja2VkIGluZGljYXRlcyB3aGV0aGVyIGluYWN0aXZlIChgdGFiaW5kZXg9XCItMVwiYCkgZm9jdXNhYmxlIGVsZW1lbnRzIHNob3VsZCBiZSByZXR1cmVuZCBhcyB3ZWxsXG4gICAqL1xuICBmaW5kRm9jdXNhYmxlKGhvc3Q6IEhUTUxFbGVtZW50LCBsb2NrZWQgPSBmYWxzZSk6IEhUTUxFbGVtZW50W10ge1xuICAgIGxldCBzdWZmaXggPSAnOm5vdChbZGlzYWJsZWRdKSc7XG4gICAgaWYgKCFsb2NrZWQpIHtcbiAgICAgIHN1ZmZpeCArPSBgOm5vdChbdGFiaW5kZXg9Jy0xJ10pYDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycy5tYXAocyA9PiAocyArPSBzdWZmaXgpKS5qb2luKCcsJyk7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoaG9zdCwgc2VsZWN0b3IpO1xuICB9XG59XG4iXX0=