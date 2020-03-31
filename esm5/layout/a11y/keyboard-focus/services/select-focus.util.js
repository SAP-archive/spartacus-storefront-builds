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
        // like to leave out the following as we don't use it, and make this list exensible.
        //   `[contentEditable=true]`, // very unlikely to suport as we're not a business tool
        //   `iframe`, // we really don't like iframes...
        //   `area[href]`, // very debatable!
        this.focusableSelectorSuffix = ':not([disabled]):not([hidden])';
    }
    SelectFocusUtility.prototype.query = function (host, selector) {
        if (!selector || selector === '') {
            return [];
        }
        return Array.from(host.querySelectorAll(selector));
    };
    SelectFocusUtility.prototype.findFirstFocusable = function (host, config) {
        var _this = this;
        if (config === void 0) { config = { autofocus: true }; }
        var selector = typeof (config === null || config === void 0 ? void 0 : config.autofocus) === 'string' ? config.autofocus : '[autofocus]';
        // fallback to first focusable
        return (this.query(host, selector).find(function (el) { return !_this.isHidden(el); }) ||
            this.findFocusable(host).find(function (el) { return Boolean(el); }));
    };
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returned
     * @param invisible indicates whether hidden focusable elements should be returned
     */
    SelectFocusUtility.prototype.findFocusable = function (host, locked, invisible) {
        var _this = this;
        if (locked === void 0) { locked = false; }
        if (invisible === void 0) { invisible = false; }
        var suffix = this.focusableSelectorSuffix;
        if (!locked) {
            suffix += ":not([tabindex='-1'])";
        }
        var selector = this.focusableSelectors
            .map(function (s) { return (s += suffix); })
            .join(',');
        return this.query(host, selector).filter(function (el) {
            return !invisible ? !_this.isHidden(el) : Boolean(el);
        });
    };
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
    SelectFocusUtility.prototype.isHidden = function (el) {
        return el.offsetParent === null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0M7SUFBQTtRQUNFOzs7V0FHRztRQUNPLHVCQUFrQixHQUFhO1lBQ3ZDLFNBQVM7WUFDVCxRQUFRO1lBQ1IsWUFBWTtZQUNaLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtTQUNYLENBQUM7UUFFRixvRkFBb0Y7UUFDcEYsc0ZBQXNGO1FBQ3RGLGlEQUFpRDtRQUNqRCxxQ0FBcUM7UUFFM0IsNEJBQXVCLEdBQUcsZ0NBQWdDLENBQUM7S0E4RHRFO0lBNURDLGtDQUFLLEdBQUwsVUFBTSxJQUFpQixFQUFFLFFBQWdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQTRCLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQ0UsSUFBaUIsRUFDakIsTUFBNkM7UUFGL0MsaUJBV0M7UUFUQyx1QkFBQSxFQUFBLFdBQTRCLFNBQVMsRUFBRSxJQUFJLEVBQUU7UUFFN0MsSUFBTSxRQUFRLEdBQ1osUUFBTyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUyxDQUFBLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDM0UsOEJBQThCO1FBQzlCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQWxCLENBQWtCLENBQUM7WUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQ25ELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILDBDQUFhLEdBQWIsVUFDRSxJQUFpQixFQUNqQixNQUFjLEVBQ2QsU0FBaUI7UUFIbkIsaUJBZUM7UUFiQyx1QkFBQSxFQUFBLGNBQWM7UUFDZCwwQkFBQSxFQUFBLGlCQUFpQjtRQUVqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQztTQUNuQztRQUNELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7YUFDckMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQWIsQ0FBYSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBRTtZQUMxQyxPQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFBN0MsQ0FBNkMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDTyxxQ0FBUSxHQUFsQixVQUFtQixFQUFlO1FBQ2hDLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7SUFoRlUsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FpRjlCOzZCQXZGRDtDQXVGQyxBQWpGRCxJQWlGQztTQWpGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGb2N1c1V0aWxpdHkge1xuICAvKipcbiAgICogUXVlcnkgc2VsZWN0b3JzIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIFRoZSBzZWxlY3RvcnMgYXJlIHN1cHBsZW1lbnRlZCB3aXRoIGA6bm90KFtkaXNhYmxlZF0pYCBhbmQgYDpub3QoW2hpZGRlbl0pYC5cbiAgICovXG4gIHByb3RlY3RlZCBmb2N1c2FibGVTZWxlY3RvcnM6IHN0cmluZ1tdID0gW1xuICAgICdhW2hyZWZdJyxcbiAgICAnYnV0dG9uJyxcbiAgICAnW3RhYmluZGV4XScsXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuICBdO1xuXG4gIC8vIGxpa2UgdG8gbGVhdmUgb3V0IHRoZSBmb2xsb3dpbmcgYXMgd2UgZG9uJ3QgdXNlIGl0LCBhbmQgbWFrZSB0aGlzIGxpc3QgZXhlbnNpYmxlLlxuICAvLyAgIGBbY29udGVudEVkaXRhYmxlPXRydWVdYCwgLy8gdmVyeSB1bmxpa2VseSB0byBzdXBvcnQgYXMgd2UncmUgbm90IGEgYnVzaW5lc3MgdG9vbFxuICAvLyAgIGBpZnJhbWVgLCAvLyB3ZSByZWFsbHkgZG9uJ3QgbGlrZSBpZnJhbWVzLi4uXG4gIC8vICAgYGFyZWFbaHJlZl1gLCAvLyB2ZXJ5IGRlYmF0YWJsZSFcblxuICBwcm90ZWN0ZWQgZm9jdXNhYmxlU2VsZWN0b3JTdWZmaXggPSAnOm5vdChbZGlzYWJsZWRdKTpub3QoW2hpZGRlbl0pJztcblxuICBxdWVyeShob3N0OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgaG9zdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICk7XG4gIH1cblxuICBmaW5kRmlyc3RGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBBdXRvRm9jdXNDb25maWcgPSB7IGF1dG9mb2N1czogdHJ1ZSB9XG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWxlY3RvciA9XG4gICAgICB0eXBlb2YgY29uZmlnPy5hdXRvZm9jdXMgPT09ICdzdHJpbmcnID8gY29uZmlnLmF1dG9mb2N1cyA6ICdbYXV0b2ZvY3VzXSc7XG4gICAgLy8gZmFsbGJhY2sgdG8gZmlyc3QgZm9jdXNhYmxlXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucXVlcnkoaG9zdCwgc2VsZWN0b3IpLmZpbmQoKGVsKSA9PiAhdGhpcy5pc0hpZGRlbihlbCkpIHx8XG4gICAgICB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCkuZmluZCgoZWwpID0+IEJvb2xlYW4oZWwpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBhcmUgYnVpbGQgZnJvbSB0aGUgYGZvY3VzYWJsZVNlbGVjdG9yc2AuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBsb2NrZWQgaW5kaWNhdGVzIHdoZXRoZXIgaW5hY3RpdmUgKGB0YWJpbmRleD1cIi0xXCJgKSBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkXG4gICAqIEBwYXJhbSBpbnZpc2libGUgaW5kaWNhdGVzIHdoZXRoZXIgaGlkZGVuIGZvY3VzYWJsZSBlbGVtZW50cyBzaG91bGQgYmUgcmV0dXJuZWRcbiAgICovXG4gIGZpbmRGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgbG9ja2VkID0gZmFsc2UsXG4gICAgaW52aXNpYmxlID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgbGV0IHN1ZmZpeCA9IHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JTdWZmaXg7XG4gICAgaWYgKCFsb2NrZWQpIHtcbiAgICAgIHN1ZmZpeCArPSBgOm5vdChbdGFiaW5kZXg9Jy0xJ10pYDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmZvY3VzYWJsZVNlbGVjdG9yc1xuICAgICAgLm1hcCgocykgPT4gKHMgKz0gc3VmZml4KSlcbiAgICAgIC5qb2luKCcsJyk7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoaG9zdCwgc2VsZWN0b3IpLmZpbHRlcigoZWwpID0+XG4gICAgICAhaW52aXNpYmxlID8gIXRoaXMuaXNIaWRkZW4oZWwpIDogQm9vbGVhbihlbClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBieSBDU1MuIFRoZXJlIGFyZSB2YXJpb3VzIENTUyBydWxlcyBhbmRcbiAgICogSFRNTCBzdHJ1Y3R1cmVzIHdoaWNoIGNhbiBsZWFkIHRvIGFuIGhpZGRlbiBvciBpbnZpc2libGUgZWxlbWVudC4gQW4gYG9mZnNldFBhcmVudGBcbiAgICogb2YgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBvciBhbnkgb2YgaXQncyBkZWNlbmRhbnRzIGlzIGhpZGRlbiAoYGRpc3BsYXk6bm9uZWApLlxuICAgKlxuICAgKiBPb3RoZXIgdGVjaG5pcXVlcyB1c2UgdGhlIHZpc2liaWxpdHkgKGB2aXNpYmlsaXR5OiBoaWRkZW5gKSwgb3BhY2l0eSAoYG9wYWNpdHlgKSBvclxuICAgKiBwaHlpc2ljYWwgbG9jYXRpb24gb24gdGhlIGVsZW1lbnQgaXRzZWxmIG9yIGFueSBvZiBpdCdzIGFuY2hlc3RvciBlbGVtZW50cy4gVGhvc2VcbiAgICogdGVjaG5pcXVlIHJlcXVpcmUgdG8gd29yayB3aXRoIHRoZSBfY29tcHV0ZWQgc3R5bGVzXywgd2hpY2ggd2lsbCBjYXVzZSBhIHBlcmZvcm1hbmNlXG4gICAqIGRvd25ncmFkZS4gV2UgZG9uJ3QgZG8gdGhpcyBpbiB0aGUgc3RhbmRhcmQgaW1wbGVtZW50YXRvbi5cbiAgICovXG4gIHByb3RlY3RlZCBpc0hpZGRlbihlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZWwub2Zmc2V0UGFyZW50ID09PSBudWxsO1xuICB9XG59XG4iXX0=