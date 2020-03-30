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
        const selector = typeof (config === null || config === void 0 ? void 0 : config.autofocus) === 'string' ? config.autofocus : '[autofocus]';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFBL0I7UUFDRTs7O1dBR0c7UUFDTyx1QkFBa0IsR0FBYTtZQUN2QyxTQUFTO1lBQ1QsUUFBUTtZQUNSLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7U0FDWCxDQUFDO1FBRUYsb0ZBQW9GO1FBQ3BGLHNGQUFzRjtRQUN0RixpREFBaUQ7UUFDakQscUNBQXFDO1FBRTNCLDRCQUF1QixHQUFHLGdDQUFnQyxDQUFDO0tBNER0RTtJQTFEQyxLQUFLLENBQUMsSUFBaUIsRUFBRSxRQUFnQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUE0QixDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUNoQixJQUFpQixFQUNqQixTQUEwQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7UUFFN0MsTUFBTSxRQUFRLEdBQ1osUUFBTyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUyxDQUFBLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDM0UsOEJBQThCO1FBQzlCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsYUFBYSxDQUNYLElBQWlCLEVBQ2pCLE1BQU0sR0FBRyxLQUFLLEVBQ2QsU0FBUyxHQUFHLEtBQUs7UUFFakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksdUJBQXVCLENBQUM7U0FDbkM7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDNUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNPLFFBQVEsQ0FBQyxFQUFlO1FBQ2hDLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7O0FBL0VZLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0JBQWtCLENBK0U5QjtTQS9FWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGb2N1c1V0aWxpdHkge1xuICAvKipcbiAgICogUXVlcnkgc2VsZWN0b3JzIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIFRoZSBzZWxlY3RvcnMgYXJlIHN1cHBsZW1lbnRlZCB3aXRoIGA6bm90KFtkaXNhYmxlZF0pYCBhbmQgYDpub3QoW2hpZGRlbl0pYC5cbiAgICovXG4gIHByb3RlY3RlZCBmb2N1c2FibGVTZWxlY3RvcnM6IHN0cmluZ1tdID0gW1xuICAgICdhW2hyZWZdJyxcbiAgICAnYnV0dG9uJyxcbiAgICAnW3RhYmluZGV4XScsXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuICBdO1xuXG4gIC8vIGxpa2UgdG8gbGVhdmUgb3V0IHRoZSBmb2xsb3dpbmcgYXMgd2UgZG9uJ3QgdXNlIGl0LCBhbmQgbWFrZSB0aGlzIGxpc3QgZXhlbnNpYmxlLlxuICAvLyAgIGBbY29udGVudEVkaXRhYmxlPXRydWVdYCwgLy8gdmVyeSB1bmxpa2VseSB0byBzdXBvcnQgYXMgd2UncmUgbm90IGEgYnVzaW5lc3MgdG9vbFxuICAvLyAgIGBpZnJhbWVgLCAvLyB3ZSByZWFsbHkgZG9uJ3QgbGlrZSBpZnJhbWVzLi4uXG4gIC8vICAgYGFyZWFbaHJlZl1gLCAvLyB2ZXJ5IGRlYmF0YWJsZSFcblxuICBwcm90ZWN0ZWQgZm9jdXNhYmxlU2VsZWN0b3JTdWZmaXggPSAnOm5vdChbZGlzYWJsZWRdKTpub3QoW2hpZGRlbl0pJztcblxuICBxdWVyeShob3N0OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgaG9zdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICk7XG4gIH1cblxuICBmaW5kRmlyc3RGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBBdXRvRm9jdXNDb25maWcgPSB7IGF1dG9mb2N1czogdHJ1ZSB9XG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWxlY3RvciA9XG4gICAgICB0eXBlb2YgY29uZmlnPy5hdXRvZm9jdXMgPT09ICdzdHJpbmcnID8gY29uZmlnLmF1dG9mb2N1cyA6ICdbYXV0b2ZvY3VzXSc7XG4gICAgLy8gZmFsbGJhY2sgdG8gZmlyc3QgZm9jdXNhYmxlXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucXVlcnkoaG9zdCwgc2VsZWN0b3IpLmZpbmQoZWwgPT4gIXRoaXMuaXNIaWRkZW4oZWwpKSB8fFxuICAgICAgdGhpcy5maW5kRm9jdXNhYmxlKGhvc3QpLmZpbmQoZWwgPT4gQm9vbGVhbihlbCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC4gVGhlIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAqIGFyZSBidWlsZCBmcm9tIHRoZSBgZm9jdXNhYmxlU2VsZWN0b3JzYC5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgdGhlIGBIVE1MRWxlbWVudGAgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgZWxlbWVudHNcbiAgICogQHBhcmFtIGxvY2tlZCBpbmRpY2F0ZXMgd2hldGhlciBpbmFjdGl2ZSAoYHRhYmluZGV4PVwiLTFcImApIGZvY3VzYWJsZSBlbGVtZW50cyBzaG91bGQgYmUgcmV0dXJuZWRcbiAgICogQHBhcmFtIGludmlzaWJsZSBpbmRpY2F0ZXMgd2hldGhlciBoaWRkZW4gZm9jdXNhYmxlIGVsZW1lbnRzIHNob3VsZCBiZSByZXR1cm5lZFxuICAgKi9cbiAgZmluZEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBsb2NrZWQgPSBmYWxzZSxcbiAgICBpbnZpc2libGUgPSBmYWxzZVxuICApOiBIVE1MRWxlbWVudFtdIHtcbiAgICBsZXQgc3VmZml4ID0gdGhpcy5mb2N1c2FibGVTZWxlY3RvclN1ZmZpeDtcbiAgICBpZiAoIWxvY2tlZCkge1xuICAgICAgc3VmZml4ICs9IGA6bm90KFt0YWJpbmRleD0nLTEnXSlgO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzLm1hcChzID0+IChzICs9IHN1ZmZpeCkpLmpvaW4oJywnKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShob3N0LCBzZWxlY3RvcikuZmlsdGVyKGVsID0+XG4gICAgICAhaW52aXNpYmxlID8gIXRoaXMuaXNIaWRkZW4oZWwpIDogQm9vbGVhbihlbClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBieSBDU1MuIFRoZXJlIGFyZSB2YXJpb3VzIENTUyBydWxlcyBhbmRcbiAgICogSFRNTCBzdHJ1Y3R1cmVzIHdoaWNoIGNhbiBsZWFkIHRvIGFuIGhpZGRlbiBvciBpbnZpc2libGUgZWxlbWVudC4gQW4gYG9mZnNldFBhcmVudGBcbiAgICogb2YgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBvciBhbnkgb2YgaXQncyBkZWNlbmRhbnRzIGlzIGhpZGRlbiAoYGRpc3BsYXk6bm9uZWApLlxuICAgKlxuICAgKiBPb3RoZXIgdGVjaG5pcXVlcyB1c2UgdGhlIHZpc2liaWxpdHkgKGB2aXNpYmlsaXR5OiBoaWRkZW5gKSwgb3BhY2l0eSAoYG9wYWNpdHlgKSBvclxuICAgKiBwaHlpc2ljYWwgbG9jYXRpb24gb24gdGhlIGVsZW1lbnQgaXRzZWxmIG9yIGFueSBvZiBpdCdzIGFuY2hlc3RvciBlbGVtZW50cy4gVGhvc2VcbiAgICogdGVjaG5pcXVlIHJlcXVpcmUgdG8gd29yayB3aXRoIHRoZSBfY29tcHV0ZWQgc3R5bGVzXywgd2hpY2ggd2lsbCBjYXVzZSBhIHBlcmZvcm1hbmNlXG4gICAqIGRvd25ncmFkZS4gV2UgZG9uJ3QgZG8gdGhpcyBpbiB0aGUgc3RhbmRhcmQgaW1wbGVtZW50YXRvbi5cbiAgICovXG4gIHByb3RlY3RlZCBpc0hpZGRlbihlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZWwub2Zmc2V0UGFyZW50ID09PSBudWxsO1xuICB9XG59XG4iXX0=