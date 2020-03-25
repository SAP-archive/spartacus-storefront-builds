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
        var _a;
        var selector = typeof ((_a = config) === null || _a === void 0 ? void 0 : _a.autofocus) === 'string' ? config.autofocus : '[autofocus]';
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
        var selector = this.focusableSelectors.map(function (s) { return (s += suffix); }).join(',');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0M7SUFBQTtRQUNFOzs7V0FHRztRQUNPLHVCQUFrQixHQUFhO1lBQ3ZDLFNBQVM7WUFDVCxRQUFRO1lBQ1IsWUFBWTtZQUNaLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtTQUNYLENBQUM7UUFFRixvRkFBb0Y7UUFDcEYsc0ZBQXNGO1FBQ3RGLGlEQUFpRDtRQUNqRCxxQ0FBcUM7UUFFM0IsNEJBQXVCLEdBQUcsZ0NBQWdDLENBQUM7S0E0RHRFO0lBMURDLGtDQUFLLEdBQUwsVUFBTSxJQUFpQixFQUFFLFFBQWdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQTRCLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQ0UsSUFBaUIsRUFDakIsTUFBNkM7UUFGL0MsaUJBV0M7UUFUQyx1QkFBQSxFQUFBLFdBQTRCLFNBQVMsRUFBRSxJQUFJLEVBQUU7O1FBRTdDLElBQU0sUUFBUSxHQUNaLGNBQU8sTUFBTSwwQ0FBRSxTQUFTLENBQUEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMzRSw4QkFBOEI7UUFDOUIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsMENBQWEsR0FBYixVQUNFLElBQWlCLEVBQ2pCLE1BQWMsRUFDZCxTQUFpQjtRQUhuQixpQkFhQztRQVhDLHVCQUFBLEVBQUEsY0FBYztRQUNkLDBCQUFBLEVBQUEsaUJBQWlCO1FBRWpCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLHVCQUF1QixDQUFDO1NBQ25DO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUU7WUFDekMsT0FBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQTdDLENBQTZDLENBQzlDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ08scUNBQVEsR0FBbEIsVUFBbUIsRUFBZTtRQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7O0lBOUVVLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csa0JBQWtCLENBK0U5Qjs2QkFyRkQ7Q0FxRkMsQUEvRUQsSUErRUM7U0EvRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Rm9jdXNVdGlsaXR5IHtcbiAgLyoqXG4gICAqIFF1ZXJ5IHNlbGVjdG9ycyB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKiBUaGUgc2VsZWN0b3JzIGFyZSBzdXBwbGVtZW50ZWQgd2l0aCBgOm5vdChbZGlzYWJsZWRdKWAgYW5kIGA6bm90KFtoaWRkZW5dKWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZm9jdXNhYmxlU2VsZWN0b3JzOiBzdHJpbmdbXSA9IFtcbiAgICAnYVtocmVmXScsXG4gICAgJ2J1dHRvbicsXG4gICAgJ1t0YWJpbmRleF0nLFxuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbiAgXTtcblxuICAvLyBsaWtlIHRvIGxlYXZlIG91dCB0aGUgZm9sbG93aW5nIGFzIHdlIGRvbid0IHVzZSBpdCwgYW5kIG1ha2UgdGhpcyBsaXN0IGV4ZW5zaWJsZS5cbiAgLy8gICBgW2NvbnRlbnRFZGl0YWJsZT10cnVlXWAsIC8vIHZlcnkgdW5saWtlbHkgdG8gc3Vwb3J0IGFzIHdlJ3JlIG5vdCBhIGJ1c2luZXNzIHRvb2xcbiAgLy8gICBgaWZyYW1lYCwgLy8gd2UgcmVhbGx5IGRvbid0IGxpa2UgaWZyYW1lcy4uLlxuICAvLyAgIGBhcmVhW2hyZWZdYCwgLy8gdmVyeSBkZWJhdGFibGUhXG5cbiAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yU3VmZml4ID0gJzpub3QoW2Rpc2FibGVkXSk6bm90KFtoaWRkZW5dKSc7XG5cbiAgcXVlcnkoaG9zdDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIGhvc3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICApO1xuICB9XG5cbiAgZmluZEZpcnN0Rm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogQXV0b0ZvY3VzQ29uZmlnID0geyBhdXRvZm9jdXM6IHRydWUgfVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgdHlwZW9mIGNvbmZpZz8uYXV0b2ZvY3VzID09PSAnc3RyaW5nJyA/IGNvbmZpZy5hdXRvZm9jdXMgOiAnW2F1dG9mb2N1c10nO1xuICAgIC8vIGZhbGxiYWNrIHRvIGZpcnN0IGZvY3VzYWJsZVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnF1ZXJ5KGhvc3QsIHNlbGVjdG9yKS5maW5kKGVsID0+ICF0aGlzLmlzSGlkZGVuKGVsKSkgfHxcbiAgICAgIHRoaXMuZmluZEZvY3VzYWJsZShob3N0KS5maW5kKGVsID0+IEJvb2xlYW4oZWwpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBhcmUgYnVpbGQgZnJvbSB0aGUgYGZvY3VzYWJsZVNlbGVjdG9yc2AuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSBsb2NrZWQgaW5kaWNhdGVzIHdoZXRoZXIgaW5hY3RpdmUgKGB0YWJpbmRleD1cIi0xXCJgKSBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkXG4gICAqIEBwYXJhbSBpbnZpc2libGUgaW5kaWNhdGVzIHdoZXRoZXIgaGlkZGVuIGZvY3VzYWJsZSBlbGVtZW50cyBzaG91bGQgYmUgcmV0dXJuZWRcbiAgICovXG4gIGZpbmRGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgbG9ja2VkID0gZmFsc2UsXG4gICAgaW52aXNpYmxlID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgbGV0IHN1ZmZpeCA9IHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JTdWZmaXg7XG4gICAgaWYgKCFsb2NrZWQpIHtcbiAgICAgIHN1ZmZpeCArPSBgOm5vdChbdGFiaW5kZXg9Jy0xJ10pYDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycy5tYXAocyA9PiAocyArPSBzdWZmaXgpKS5qb2luKCcsJyk7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoaG9zdCwgc2VsZWN0b3IpLmZpbHRlcihlbCA9PlxuICAgICAgIWludmlzaWJsZSA/ICF0aGlzLmlzSGlkZGVuKGVsKSA6IEJvb2xlYW4oZWwpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCBpcyBoaWRkZW4gYnkgQ1NTLiBUaGVyZSBhcmUgdmFyaW91cyBDU1MgcnVsZXMgYW5kXG4gICAqIEhUTUwgc3RydWN0dXJlcyB3aGljaCBjYW4gbGVhZCB0byBhbiBoaWRkZW4gb3IgaW52aXNpYmxlIGVsZW1lbnQuIEFuIGBvZmZzZXRQYXJlbnRgXG4gICAqIG9mIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgb3IgYW55IG9mIGl0J3MgZGVjZW5kYW50cyBpcyBoaWRkZW4gKGBkaXNwbGF5Om5vbmVgKS5cbiAgICpcbiAgICogT290aGVyIHRlY2huaXF1ZXMgdXNlIHRoZSB2aXNpYmlsaXR5IChgdmlzaWJpbGl0eTogaGlkZGVuYCksIG9wYWNpdHkgKGBvcGFjaXR5YCkgb3JcbiAgICogcGh5aXNpY2FsIGxvY2F0aW9uIG9uIHRoZSBlbGVtZW50IGl0c2VsZiBvciBhbnkgb2YgaXQncyBhbmNoZXN0b3IgZWxlbWVudHMuIFRob3NlXG4gICAqIHRlY2huaXF1ZSByZXF1aXJlIHRvIHdvcmsgd2l0aCB0aGUgX2NvbXB1dGVkIHN0eWxlc18sIHdoaWNoIHdpbGwgY2F1c2UgYSBwZXJmb3JtYW5jZVxuICAgKiBkb3duZ3JhZGUuIFdlIGRvbid0IGRvIHRoaXMgaW4gdGhlIHN0YW5kYXJkIGltcGxlbWVudGF0b24uXG4gICAqL1xuICBwcm90ZWN0ZWQgaXNIaWRkZW4oZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVsLm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbiAgfVxufVxuIl19