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
        return (this.query(host, selector).find(el => !this.isHidden(el)) ||
            this.findFocusable(host).find(el => Boolean(el)));
    }
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returned
     * @param invisible indicates whether hidden focusable elements should be returned
     */
    findFocusable(host, locked = false, invisible = false) {
        let suffix = this.focusableSelectorSuffix;
        if (!locked) {
            suffix += `:not([tabindex='-1'])`;
        }
        const selector = this.focusableSelectors.map(s => (s += suffix)).join(',');
        return this.query(host, selector).filter(el => !invisible ? !this.isHidden(el) : Boolean(el));
    }
    /**
     * Indicates whether the element is hidden by CSS. There are various CSS rules and
     * HTML structures which can lead to an hidden or invisible element. An `offsetParent`
     * of null indicates that the element or any of it's decendants is hidden (`display:none`).
     *
     * Oother techniques use the visibility (`visibility: hidden`), opacity (`opacity`) or
     * phyisical location on the element itself or any of it's anchestor elements. Those
     * technique require to work with the _computed styles_, which will cause a performance
     * downgrade. We don't do this in the standard implementaton.
     */
    isHidden(el) {
        return el.offsetParent === null;
    }
};
SelectFocusUtility.ɵprov = i0.ɵɵdefineInjectable({ factory: function SelectFocusUtility_Factory() { return new SelectFocusUtility(); }, token: SelectFocusUtility, providedIn: "root" });
SelectFocusUtility = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SelectFocusUtility);
export { SelectFocusUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFBL0I7UUFDRTs7O1dBR0c7UUFDTyx1QkFBa0IsR0FBYTtZQUN2QyxTQUFTO1lBQ1QsUUFBUTtZQUNSLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7U0FDWCxDQUFDO1FBRUYsb0ZBQW9GO1FBQ3BGLHNGQUFzRjtRQUN0RixpREFBaUQ7UUFDakQscUNBQXFDO1FBRTNCLDRCQUF1QixHQUFHLGdDQUFnQyxDQUFDO0tBNER0RTtJQTFEQyxLQUFLLENBQUMsSUFBaUIsRUFBRSxRQUFnQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUE0QixDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7O1FBRTdDLE1BQU0sUUFBUSxHQUNaLGNBQU8sTUFBTSwwQ0FBRSxTQUFTLENBQUEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMzRSw4QkFBOEI7UUFDOUIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxhQUFhLENBQ1gsSUFBaUIsRUFDakIsTUFBTSxHQUFHLEtBQUssRUFDZCxTQUFTLEdBQUcsS0FBSztRQUVqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQztTQUNuQztRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUM1QyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ08sUUFBUSxDQUFDLEVBQWU7UUFDaEMsT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7QUEvRVksa0JBQWtCO0lBSDlCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxrQkFBa0IsQ0ErRTlCO1NBL0VZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvY3VzVXRpbGl0eSB7XG4gIC8qKlxuICAgKiBRdWVyeSBzZWxlY3RvcnMgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICogVGhlIHNlbGVjdG9ycyBhcmUgc3VwcGxlbWVudGVkIHdpdGggYDpub3QoW2Rpc2FibGVkXSlgIGFuZCBgOm5vdChbaGlkZGVuXSlgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yczogc3RyaW5nW10gPSBbXG4gICAgJ2FbaHJlZl0nLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdJyxcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG4gIF07XG5cbiAgLy8gbGlrZSB0byBsZWF2ZSBvdXQgdGhlIGZvbGxvd2luZyBhcyB3ZSBkb24ndCB1c2UgaXQsIGFuZCBtYWtlIHRoaXMgbGlzdCBleGVuc2libGUuXG4gIC8vICAgYFtjb250ZW50RWRpdGFibGU9dHJ1ZV1gLCAvLyB2ZXJ5IHVubGlrZWx5IHRvIHN1cG9ydCBhcyB3ZSdyZSBub3QgYSBidXNpbmVzcyB0b29sXG4gIC8vICAgYGlmcmFtZWAsIC8vIHdlIHJlYWxseSBkb24ndCBsaWtlIGlmcmFtZXMuLi5cbiAgLy8gICBgYXJlYVtocmVmXWAsIC8vIHZlcnkgZGViYXRhYmxlIVxuXG4gIHByb3RlY3RlZCBmb2N1c2FibGVTZWxlY3RvclN1ZmZpeCA9ICc6bm90KFtkaXNhYmxlZF0pOm5vdChbaGlkZGVuXSknO1xuXG4gIHF1ZXJ5KGhvc3Q6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBob3N0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGZpbmRGaXJzdEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IEF1dG9Gb2N1c0NvbmZpZyA9IHsgYXV0b2ZvY3VzOiB0cnVlIH1cbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbGVjdG9yID1cbiAgICAgIHR5cGVvZiBjb25maWc/LmF1dG9mb2N1cyA9PT0gJ3N0cmluZycgPyBjb25maWcuYXV0b2ZvY3VzIDogJ1thdXRvZm9jdXNdJztcbiAgICAvLyBmYWxsYmFjayB0byBmaXJzdCBmb2N1c2FibGVcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5xdWVyeShob3N0LCBzZWxlY3RvcikuZmluZChlbCA9PiAhdGhpcy5pc0hpZGRlbihlbCkpIHx8XG4gICAgICB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCkuZmluZChlbCA9PiBCb29sZWFuKGVsKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LiBUaGUgZWxlbWVudCBzZWxlY3RvcnNcbiAgICogYXJlIGJ1aWxkIGZyb20gdGhlIGBmb2N1c2FibGVTZWxlY3RvcnNgLlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCB0aGUgYEhUTUxFbGVtZW50YCB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBlbGVtZW50c1xuICAgKiBAcGFyYW0gbG9ja2VkIGluZGljYXRlcyB3aGV0aGVyIGluYWN0aXZlIChgdGFiaW5kZXg9XCItMVwiYCkgZm9jdXNhYmxlIGVsZW1lbnRzIHNob3VsZCBiZSByZXR1cm5lZFxuICAgKiBAcGFyYW0gaW52aXNpYmxlIGluZGljYXRlcyB3aGV0aGVyIGhpZGRlbiBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkXG4gICAqL1xuICBmaW5kRm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGxvY2tlZCA9IGZhbHNlLFxuICAgIGludmlzaWJsZSA9IGZhbHNlXG4gICk6IEhUTUxFbGVtZW50W10ge1xuICAgIGxldCBzdWZmaXggPSB0aGlzLmZvY3VzYWJsZVNlbGVjdG9yU3VmZml4O1xuICAgIGlmICghbG9ja2VkKSB7XG4gICAgICBzdWZmaXggKz0gYDpub3QoW3RhYmluZGV4PSctMSddKWA7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5mb2N1c2FibGVTZWxlY3RvcnMubWFwKHMgPT4gKHMgKz0gc3VmZml4KSkuam9pbignLCcpO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KGhvc3QsIHNlbGVjdG9yKS5maWx0ZXIoZWwgPT5cbiAgICAgICFpbnZpc2libGUgPyAhdGhpcy5pc0hpZGRlbihlbCkgOiBCb29sZWFuKGVsKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGJ5IENTUy4gVGhlcmUgYXJlIHZhcmlvdXMgQ1NTIHJ1bGVzIGFuZFxuICAgKiBIVE1MIHN0cnVjdHVyZXMgd2hpY2ggY2FuIGxlYWQgdG8gYW4gaGlkZGVuIG9yIGludmlzaWJsZSBlbGVtZW50LiBBbiBgb2Zmc2V0UGFyZW50YFxuICAgKiBvZiBudWxsIGluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IG9yIGFueSBvZiBpdCdzIGRlY2VuZGFudHMgaXMgaGlkZGVuIChgZGlzcGxheTpub25lYCkuXG4gICAqXG4gICAqIE9vdGhlciB0ZWNobmlxdWVzIHVzZSB0aGUgdmlzaWJpbGl0eSAoYHZpc2liaWxpdHk6IGhpZGRlbmApLCBvcGFjaXR5IChgb3BhY2l0eWApIG9yXG4gICAqIHBoeWlzaWNhbCBsb2NhdGlvbiBvbiB0aGUgZWxlbWVudCBpdHNlbGYgb3IgYW55IG9mIGl0J3MgYW5jaGVzdG9yIGVsZW1lbnRzLiBUaG9zZVxuICAgKiB0ZWNobmlxdWUgcmVxdWlyZSB0byB3b3JrIHdpdGggdGhlIF9jb21wdXRlZCBzdHlsZXNfLCB3aGljaCB3aWxsIGNhdXNlIGEgcGVyZm9ybWFuY2VcbiAgICogZG93bmdyYWRlLiBXZSBkb24ndCBkbyB0aGlzIGluIHRoZSBzdGFuZGFyZCBpbXBsZW1lbnRhdG9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGlzSGlkZGVuKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbC5vZmZzZXRQYXJlbnQgPT09IG51bGw7XG4gIH1cbn1cbiJdfQ==