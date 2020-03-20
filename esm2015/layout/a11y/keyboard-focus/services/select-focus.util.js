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
        // like to leave out the following as we don't use it, and make this list exensible.
        //   `[contentEditable=true]`, // very unlikely to suport as we're not a business tool
        //   `iframe`, // we really don't like iframes...
        //   `area[href]`, // very debatable!
        this.focusableSelectorSuffix = ':not([disabled]):not([hidden])';
    }
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
        let suffix = this.focusableSelectorSuffix;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFBL0I7UUFDRTs7O1dBR0c7UUFDTyx1QkFBa0IsR0FBYTtZQUN2QyxTQUFTO1lBQ1QsUUFBUTtZQUNSLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7U0FDWCxDQUFDO1FBRUYsb0ZBQW9GO1FBQ3BGLHNGQUFzRjtRQUN0RixpREFBaUQ7UUFDakQscUNBQXFDO1FBRTNCLDRCQUF1QixHQUFHLGdDQUFnQyxDQUFDO0tBd0N0RTtJQXRDQyxLQUFLLENBQUMsSUFBaUIsRUFBRSxRQUFnQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUE0QixDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7O1FBRTdDLE1BQU0sUUFBUSxHQUNaLGNBQU8sTUFBTSwwQ0FBRSxTQUFTLENBQUEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUUzRSw4QkFBOEI7UUFDOUIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsYUFBYSxDQUFDLElBQWlCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksdUJBQXVCLENBQUM7U0FDbkM7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7QUEzRFksa0JBQWtCO0lBSDlCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxrQkFBa0IsQ0EyRDlCO1NBM0RZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvY3VzVXRpbGl0eSB7XG4gIC8qKlxuICAgKiBRdWVyeSBzZWxlY3RvcnMgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICogVGhlIHNlbGVjdG9ycyBhcmUgc3VwcGxlbWVudGVkIHdpdGggYDpub3QoW2Rpc2FibGVkXSlgIGFuZCBgOm5vdChbaGlkZGVuXSlgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yczogc3RyaW5nW10gPSBbXG4gICAgJ2FbaHJlZl0nLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdJyxcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG4gIF07XG5cbiAgLy8gbGlrZSB0byBsZWF2ZSBvdXQgdGhlIGZvbGxvd2luZyBhcyB3ZSBkb24ndCB1c2UgaXQsIGFuZCBtYWtlIHRoaXMgbGlzdCBleGVuc2libGUuXG4gIC8vICAgYFtjb250ZW50RWRpdGFibGU9dHJ1ZV1gLCAvLyB2ZXJ5IHVubGlrZWx5IHRvIHN1cG9ydCBhcyB3ZSdyZSBub3QgYSBidXNpbmVzcyB0b29sXG4gIC8vICAgYGlmcmFtZWAsIC8vIHdlIHJlYWxseSBkb24ndCBsaWtlIGlmcmFtZXMuLi5cbiAgLy8gICBgYXJlYVtocmVmXWAsIC8vIHZlcnkgZGViYXRhYmxlIVxuXG4gIHByb3RlY3RlZCBmb2N1c2FibGVTZWxlY3RvclN1ZmZpeCA9ICc6bm90KFtkaXNhYmxlZF0pOm5vdChbaGlkZGVuXSknO1xuXG4gIHF1ZXJ5KGhvc3Q6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBob3N0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGZpbmRGaXJzdEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH1cbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbGVjdG9yID1cbiAgICAgIHR5cGVvZiBjb25maWc/LmF1dG9mb2N1cyA9PT0gJ3N0cmluZycgPyBjb25maWcuYXV0b2ZvY3VzIDogJ1thdXRvZm9jdXNdJztcblxuICAgIC8vIGZhbGxiYWNrIHRvIGZpcnN0IGZvY3VzYWJsZVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnF1ZXJ5KGhvc3QsIHNlbGVjdG9yKS5maW5kKEJvb2xlYW4pIHx8XG4gICAgICB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCkuZmluZChCb29sZWFuKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBhcmUgYnVpbGQgZnJvbSB0aGUgYGZvY3VzYWJsZVNlbGVjdG9yc2AuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBsb2NrZWQgaW5kaWNhdGVzIHdoZXRoZXIgaW5hY3RpdmUgKGB0YWJpbmRleD1cIi0xXCJgKSBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVyZW5kIGFzIHdlbGxcbiAgICovXG4gIGZpbmRGb2N1c2FibGUoaG9zdDogSFRNTEVsZW1lbnQsIGxvY2tlZCA9IGZhbHNlKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgbGV0IHN1ZmZpeCA9IHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JTdWZmaXg7XG4gICAgaWYgKCFsb2NrZWQpIHtcbiAgICAgIHN1ZmZpeCArPSBgOm5vdChbdGFiaW5kZXg9Jy0xJ10pYDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycy5tYXAocyA9PiAocyArPSBzdWZmaXgpKS5qb2luKCcsJyk7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoaG9zdCwgc2VsZWN0b3IpO1xuICB9XG59XG4iXX0=