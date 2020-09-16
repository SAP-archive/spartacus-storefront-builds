import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SelectFocusUtility {
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
        const selector = typeof (config === null || config === void 0 ? void 0 : config.autofocus) === 'string' ? config.autofocus : '[autofocus]';
        // fallback to first focusable
        return (this.query(host, selector).find((el) => !this.isHidden(el)) ||
            this.findFocusable(host).find((el) => Boolean(el)));
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
        const selector = this.focusableSelectors
            .map((s) => (s += suffix))
            .join(',');
        return this.query(host, selector).filter((el) => !invisible ? !this.isHidden(el) : Boolean(el));
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
}
SelectFocusUtility.ɵprov = i0.ɵɵdefineInjectable({ factory: function SelectFocusUtility_Factory() { return new SelectFocusUtility(); }, token: SelectFocusUtility, providedIn: "root" });
SelectFocusUtility.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBSUU7OztXQUdHO1FBQ08sdUJBQWtCLEdBQWE7WUFDdkMsU0FBUztZQUNULFFBQVE7WUFDUixZQUFZO1lBQ1osT0FBTztZQUNQLFFBQVE7WUFDUixVQUFVO1NBQ1gsQ0FBQztRQUVGLG9GQUFvRjtRQUNwRixzRkFBc0Y7UUFDdEYsaURBQWlEO1FBQ2pELHFDQUFxQztRQUUzQiw0QkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQztLQThEdEU7SUE1REMsS0FBSyxDQUFDLElBQWlCLEVBQUUsUUFBZ0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBNEIsQ0FDM0QsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FDaEIsSUFBaUIsRUFDakIsU0FBMEIsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO1FBRTdDLE1BQU0sUUFBUSxHQUNaLFFBQU8sTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsQ0FBQSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQzNFLDhCQUE4QjtRQUM5QixPQUFPLENBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxhQUFhLENBQ1gsSUFBaUIsRUFDakIsTUFBTSxHQUFHLEtBQUssRUFDZCxTQUFTLEdBQUcsS0FBSztRQUVqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQztTQUNuQztRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7YUFDckMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQzthQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQzlDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDTyxRQUFRLENBQUMsRUFBZTtRQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFuRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Rm9jdXNVdGlsaXR5IHtcbiAgLyoqXG4gICAqIFF1ZXJ5IHNlbGVjdG9ycyB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKiBUaGUgc2VsZWN0b3JzIGFyZSBzdXBwbGVtZW50ZWQgd2l0aCBgOm5vdChbZGlzYWJsZWRdKWAgYW5kIGA6bm90KFtoaWRkZW5dKWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZm9jdXNhYmxlU2VsZWN0b3JzOiBzdHJpbmdbXSA9IFtcbiAgICAnYVtocmVmXScsXG4gICAgJ2J1dHRvbicsXG4gICAgJ1t0YWJpbmRleF0nLFxuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbiAgXTtcblxuICAvLyBsaWtlIHRvIGxlYXZlIG91dCB0aGUgZm9sbG93aW5nIGFzIHdlIGRvbid0IHVzZSBpdCwgYW5kIG1ha2UgdGhpcyBsaXN0IGV4ZW5zaWJsZS5cbiAgLy8gICBgW2NvbnRlbnRFZGl0YWJsZT10cnVlXWAsIC8vIHZlcnkgdW5saWtlbHkgdG8gc3Vwb3J0IGFzIHdlJ3JlIG5vdCBhIGJ1c2luZXNzIHRvb2xcbiAgLy8gICBgaWZyYW1lYCwgLy8gd2UgcmVhbGx5IGRvbid0IGxpa2UgaWZyYW1lcy4uLlxuICAvLyAgIGBhcmVhW2hyZWZdYCwgLy8gdmVyeSBkZWJhdGFibGUhXG5cbiAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yU3VmZml4ID0gJzpub3QoW2Rpc2FibGVkXSk6bm90KFtoaWRkZW5dKSc7XG5cbiAgcXVlcnkoaG9zdDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIGhvc3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICApO1xuICB9XG5cbiAgZmluZEZpcnN0Rm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnID0geyBhdXRvZm9jdXM6IHRydWUgfVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgdHlwZW9mIGNvbmZpZz8uYXV0b2ZvY3VzID09PSAnc3RyaW5nJyA/IGNvbmZpZy5hdXRvZm9jdXMgOiAnW2F1dG9mb2N1c10nO1xuICAgIC8vIGZhbGxiYWNrIHRvIGZpcnN0IGZvY3VzYWJsZVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnF1ZXJ5KGhvc3QsIHNlbGVjdG9yKS5maW5kKChlbCkgPT4gIXRoaXMuaXNIaWRkZW4oZWwpKSB8fFxuICAgICAgdGhpcy5maW5kRm9jdXNhYmxlKGhvc3QpLmZpbmQoKGVsKSA9PiBCb29sZWFuKGVsKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LiBUaGUgZWxlbWVudCBzZWxlY3RvcnNcbiAgICogYXJlIGJ1aWxkIGZyb20gdGhlIGBmb2N1c2FibGVTZWxlY3RvcnNgLlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCB0aGUgYEhUTUxFbGVtZW50YCB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBlbGVtZW50c1xuICAgKiBAcGFyYW0gbG9ja2VkIGluZGljYXRlcyB3aGV0aGVyIGluYWN0aXZlIChgdGFiaW5kZXg9XCItMVwiYCkgZm9jdXNhYmxlIGVsZW1lbnRzIHNob3VsZCBiZSByZXR1cm5lZFxuICAgKiBAcGFyYW0gaW52aXNpYmxlIGluZGljYXRlcyB3aGV0aGVyIGhpZGRlbiBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkXG4gICAqL1xuICBmaW5kRm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGxvY2tlZCA9IGZhbHNlLFxuICAgIGludmlzaWJsZSA9IGZhbHNlXG4gICk6IEhUTUxFbGVtZW50W10ge1xuICAgIGxldCBzdWZmaXggPSB0aGlzLmZvY3VzYWJsZVNlbGVjdG9yU3VmZml4O1xuICAgIGlmICghbG9ja2VkKSB7XG4gICAgICBzdWZmaXggKz0gYDpub3QoW3RhYmluZGV4PSctMSddKWA7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5mb2N1c2FibGVTZWxlY3RvcnNcbiAgICAgIC5tYXAoKHMpID0+IChzICs9IHN1ZmZpeCkpXG4gICAgICAuam9pbignLCcpO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KGhvc3QsIHNlbGVjdG9yKS5maWx0ZXIoKGVsKSA9PlxuICAgICAgIWludmlzaWJsZSA/ICF0aGlzLmlzSGlkZGVuKGVsKSA6IEJvb2xlYW4oZWwpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCBpcyBoaWRkZW4gYnkgQ1NTLiBUaGVyZSBhcmUgdmFyaW91cyBDU1MgcnVsZXMgYW5kXG4gICAqIEhUTUwgc3RydWN0dXJlcyB3aGljaCBjYW4gbGVhZCB0byBhbiBoaWRkZW4gb3IgaW52aXNpYmxlIGVsZW1lbnQuIEFuIGBvZmZzZXRQYXJlbnRgXG4gICAqIG9mIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgb3IgYW55IG9mIGl0J3MgZGVjZW5kYW50cyBpcyBoaWRkZW4gKGBkaXNwbGF5Om5vbmVgKS5cbiAgICpcbiAgICogT290aGVyIHRlY2huaXF1ZXMgdXNlIHRoZSB2aXNpYmlsaXR5IChgdmlzaWJpbGl0eTogaGlkZGVuYCksIG9wYWNpdHkgKGBvcGFjaXR5YCkgb3JcbiAgICogcGh5aXNpY2FsIGxvY2F0aW9uIG9uIHRoZSBlbGVtZW50IGl0c2VsZiBvciBhbnkgb2YgaXQncyBhbmNoZXN0b3IgZWxlbWVudHMuIFRob3NlXG4gICAqIHRlY2huaXF1ZSByZXF1aXJlIHRvIHdvcmsgd2l0aCB0aGUgX2NvbXB1dGVkIHN0eWxlc18sIHdoaWNoIHdpbGwgY2F1c2UgYSBwZXJmb3JtYW5jZVxuICAgKiBkb3duZ3JhZGUuIFdlIGRvbid0IGRvIHRoaXMgaW4gdGhlIHN0YW5kYXJkIGltcGxlbWVudGF0b24uXG4gICAqL1xuICBwcm90ZWN0ZWQgaXNIaWRkZW4oZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVsLm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbiAgfVxufVxuIl19