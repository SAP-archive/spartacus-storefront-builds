import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let SelectFocusUtility = class SelectFocusUtility {
    constructor() {
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
    query(host, selector) {
        if (!selector || selector === '') {
            return [];
        }
        return Array.from(host.querySelectorAll(selector));
    }
    findFirstFocusable(host, config = { autofocus: true }) {
        var _a;
        const selector = typeof ((_a = config) === null || _a === void 0 ? void 0 : _a.autofocus) === 'string' ? config.autofocus : '[autofocus]';
        // fallback to first focusable
        return (this.query(host, selector).find(Boolean) ||
            this.findFocusable(host).find(Boolean));
    }
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returend as well
     */
    findFocusable(host, locked = false) {
        let suffix = ':not([disabled])';
        if (!locked) {
            suffix += `:not([tabindex='-1'])`;
        }
        const selector = this.focusableSelectors.map(s => (s += suffix)).join(',');
        return this.query(host, selector);
    }
};
SelectFocusUtility.ɵprov = i0.ɵɵdefineInjectable({ factory: function SelectFocusUtility_Factory() { return new SelectFocusUtility(); }, token: SelectFocusUtility, providedIn: "root" });
SelectFocusUtility = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SelectFocusUtility);
export { SelectFocusUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFBL0I7UUFDRTs7O1dBR0c7UUFDTyx1QkFBa0IsR0FBYTtZQUN2QyxTQUFTO1lBQ1QsUUFBUTtZQUNSLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7U0FDWCxDQUFDO0tBNENIO0lBM0NDLG9GQUFvRjtJQUNwRixzRkFBc0Y7SUFDdEYsaURBQWlEO0lBQ2pELHFDQUFxQztJQUVyQyxLQUFLLENBQUMsSUFBaUIsRUFBRSxRQUFnQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUE0QixDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7O1FBRTdDLE1BQU0sUUFBUSxHQUNaLGNBQU8sTUFBTSwwQ0FBRSxTQUFTLENBQUEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUUzRSw4QkFBOEI7UUFDOUIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsYUFBYSxDQUFDLElBQWlCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDN0MsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQztTQUNuQztRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRixDQUFBOztBQXhEWSxrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQXdEOUI7U0F4RFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Rm9jdXNVdGlsaXR5IHtcbiAgLyoqXG4gICAqIFF1ZXJ5IHNlbGVjdG9ycyB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKiBUaGUgc2VsZWN0b3JzIGFyZSBzdXBwbGVtZW50ZWQgd2l0aCBgOm5vdChbZGlzYWJsZWRdKWAgYW5kIGA6bm90KFtoaWRkZW5dKWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZm9jdXNhYmxlU2VsZWN0b3JzOiBzdHJpbmdbXSA9IFtcbiAgICAnYVtocmVmXScsXG4gICAgJ2J1dHRvbicsXG4gICAgJ1t0YWJpbmRleF0nLFxuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbiAgXTtcbiAgLy8gbGlrZSB0byBsZWF2ZSBvdXQgdGhlIGZvbGxvd2luZyBhcyB3ZSBkb24ndCB1c2UgaXQsIGFuZCBtYWtlIHRoaXMgbGlzdCBleGVuc2libGUuXG4gIC8vICAgYFtjb250ZW50RWRpdGFibGU9dHJ1ZV1gLCAvLyB2ZXJ5IHVubGlrZWx5IHRvIHN1cG9ydCBhcyB3ZSdyZSBub3QgYSBidXNpbmVzcyB0b29sXG4gIC8vICAgYGlmcmFtZWAsIC8vIHdlIHJlYWxseSBkb24ndCBsaWtlIGlmcmFtZXMuLi5cbiAgLy8gICBgYXJlYVtocmVmXWAsIC8vIHZlcnkgZGViYXRhYmxlIVxuXG4gIHF1ZXJ5KGhvc3Q6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBob3N0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGZpbmRGaXJzdEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH1cbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbGVjdG9yID1cbiAgICAgIHR5cGVvZiBjb25maWc/LmF1dG9mb2N1cyA9PT0gJ3N0cmluZycgPyBjb25maWcuYXV0b2ZvY3VzIDogJ1thdXRvZm9jdXNdJztcblxuICAgIC8vIGZhbGxiYWNrIHRvIGZpcnN0IGZvY3VzYWJsZVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnF1ZXJ5KGhvc3QsIHNlbGVjdG9yKS5maW5kKEJvb2xlYW4pIHx8XG4gICAgICB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCkuZmluZChCb29sZWFuKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBhcmUgYnVpbGQgZnJvbSB0aGUgYGZvY3VzYWJsZVNlbGVjdG9yc2AuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBsb2NrZWQgaW5kaWNhdGVzIHdoZXRoZXIgaW5hY3RpdmUgKGB0YWJpbmRleD1cIi0xXCJgKSBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVyZW5kIGFzIHdlbGxcbiAgICovXG4gIGZpbmRGb2N1c2FibGUoaG9zdDogSFRNTEVsZW1lbnQsIGxvY2tlZCA9IGZhbHNlKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgbGV0IHN1ZmZpeCA9ICc6bm90KFtkaXNhYmxlZF0pJztcbiAgICBpZiAoIWxvY2tlZCkge1xuICAgICAgc3VmZml4ICs9IGA6bm90KFt0YWJpbmRleD0nLTEnXSlgO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzLm1hcChzID0+IChzICs9IHN1ZmZpeCkpLmpvaW4oJywnKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShob3N0LCBzZWxlY3Rvcik7XG4gIH1cbn1cbiJdfQ==