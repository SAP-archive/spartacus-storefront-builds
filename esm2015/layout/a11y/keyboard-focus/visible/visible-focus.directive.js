import { __decorate } from "tslib";
import { Directive, HostBinding, HostListener } from '@angular/core';
import { BaseFocusDirective } from '../base/base-focus.directive';
/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 *
 * This feature must be explicitly enabled with the `disableMouseFocus` config.
 *
 * The appearance of the visual focus depends on the CSS implementation to
 * begin with. Spartacus styles add a blue border around each focusable element.
 * This can be considered annoying by keyboard users, as they won't need such a
 * strong indication of the selected element.
 */
let VisibleFocusDirective = class VisibleFocusDirective extends BaseFocusDirective {
    constructor() {
        super(...arguments);
        this.defaultConfig = {
            disableMouseFocus: true,
        };
        /** Controls a css class to hide focus visible CSS rules */
        this.mouseFocus = false;
    }
    handleMousedown() {
        if (this.shouldFocusVisible) {
            this.mouseFocus = true;
        }
    }
    handleKeydown(event) {
        if (this.shouldFocusVisible) {
            this.mouseFocus = !this.isNavigating(event);
        }
    }
    /**
     * Indicates whether the configurations setup to disable visual focus.
     */
    get shouldFocusVisible() {
        var _a;
        return (_a = this.config) === null || _a === void 0 ? void 0 : _a.disableMouseFocus;
    }
    /**
     * Indicates whether the event is used to navigate the storefront. Some keyboard events
     * are used by mouse users to fill a form or interact with the OS or browser.
     */
    isNavigating(event) {
        // when the cmd or ctrl keys are used, the user doesn't navigate the storefront
        if (event.metaKey) {
            return false;
        }
        // when the tab key is used, users are for navigating away from the current (form) element
        if (event.code === 'Tab') {
            return true;
        }
        // If the user fill in a form, we don't considering it part of storefront navigation.
        if (['INPUT', 'TEXTAREA'].includes(event.target.tagName)) {
            return false;
        }
        return true;
    }
};
__decorate([
    HostBinding('class.mouse-focus')
], VisibleFocusDirective.prototype, "mouseFocus", void 0);
__decorate([
    HostListener('mousedown')
], VisibleFocusDirective.prototype, "handleMousedown", null);
__decorate([
    HostListener('keydown', ['$event'])
], VisibleFocusDirective.prototype, "handleKeydown", null);
VisibleFocusDirective = __decorate([
    Directive() // selector: '[cxVisibleFocus]'
], VisibleFocusDirective);
export { VisibleFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy92aXNpYmxlL3Zpc2libGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHbEU7Ozs7Ozs7Ozs7O0dBV0c7QUFFSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGtCQUFrQjtJQUE3RDs7UUFDWSxrQkFBYSxHQUF1QjtZQUM1QyxpQkFBaUIsRUFBRSxJQUFJO1NBQ3hCLENBQUM7UUFLRiwyREFBMkQ7UUFDekIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQXdDdkQsQ0FBQztJQXRDNEIsZUFBZTtRQUN4QyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFb0MsYUFBYSxDQUFDLEtBQW9CO1FBQ3JFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxrQkFBa0I7O1FBQzlCLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsaUJBQWlCLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFlBQVksQ0FBQyxLQUFvQjtRQUN6QywrRUFBK0U7UUFDL0UsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCwwRkFBMEY7UUFDMUYsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBQyxNQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBO0FBeENtQztJQUFqQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7eURBQW9CO0FBRTFCO0lBQTFCLFlBQVksQ0FBQyxXQUFXLENBQUM7NERBSXpCO0FBRW9DO0lBQXBDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFJbkM7QUFyQlUscUJBQXFCO0lBRGpDLFNBQVMsRUFBRSxDQUFDLCtCQUErQjtHQUMvQixxQkFBcUIsQ0FpRGpDO1NBakRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXNpYmxlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbi8qKlxuICogRGlyZWN0aXZlIGltcGxlbWVudGF0aW9uIHRoYXQgYWRkcyBhIENTUyBjbGFzcyB0byB0aGUgaG9zdCBlbGVtZW50XG4gKiB3aGVuIHRoZSBtb3VzZWQgaXMgdXNlZCB0byBmb2N1cyBhbiBlbGVtZW50LiBBcyBzb29uIGFzIHRoZSBrZXlib2FyZFxuICogaXMgdXNlZCwgdGhlIGNsYXNzIGlzIHJlbW92ZWQuXG4gKlxuICogVGhpcyBmZWF0dXJlIG11c3QgYmUgZXhwbGljaXRseSBlbmFibGVkIHdpdGggdGhlIGBkaXNhYmxlTW91c2VGb2N1c2AgY29uZmlnLlxuICpcbiAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB2aXN1YWwgZm9jdXMgZGVwZW5kcyBvbiB0aGUgQ1NTIGltcGxlbWVudGF0aW9uIHRvXG4gKiBiZWdpbiB3aXRoLiBTcGFydGFjdXMgc3R5bGVzIGFkZCBhIGJsdWUgYm9yZGVyIGFyb3VuZCBlYWNoIGZvY3VzYWJsZSBlbGVtZW50LlxuICogVGhpcyBjYW4gYmUgY29uc2lkZXJlZCBhbm5veWluZyBieSBrZXlib2FyZCB1c2VycywgYXMgdGhleSB3b24ndCBuZWVkIHN1Y2ggYVxuICogc3Ryb25nIGluZGljYXRpb24gb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeFZpc2libGVGb2N1c10nXG5leHBvcnQgY2xhc3MgVmlzaWJsZUZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUZvY3VzRGlyZWN0aXZlIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFZpc2libGVGb2N1c0NvbmZpZyA9IHtcbiAgICBkaXNhYmxlTW91c2VGb2N1czogdHJ1ZSxcbiAgfTtcblxuICAvLyBASW5wdXQoJ2N4VmlzaWJsZUZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogVmlzaWJsZUZvY3VzQ29uZmlnO1xuXG4gIC8qKiBDb250cm9scyBhIGNzcyBjbGFzcyB0byBoaWRlIGZvY3VzIHZpc2libGUgQ1NTIHJ1bGVzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW91c2UtZm9jdXMnKSBtb3VzZUZvY3VzID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJykgaGFuZGxlTW91c2Vkb3duKCkge1xuICAgIGlmICh0aGlzLnNob3VsZEZvY3VzVmlzaWJsZSkge1xuICAgICAgdGhpcy5tb3VzZUZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLnNob3VsZEZvY3VzVmlzaWJsZSkge1xuICAgICAgdGhpcy5tb3VzZUZvY3VzID0gIXRoaXMuaXNOYXZpZ2F0aW5nKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvbmZpZ3VyYXRpb25zIHNldHVwIHRvIGRpc2FibGUgdmlzdWFsIGZvY3VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzaG91bGRGb2N1c1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnPy5kaXNhYmxlTW91c2VGb2N1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZXZlbnQgaXMgdXNlZCB0byBuYXZpZ2F0ZSB0aGUgc3RvcmVmcm9udC4gU29tZSBrZXlib2FyZCBldmVudHNcbiAgICogYXJlIHVzZWQgYnkgbW91c2UgdXNlcnMgdG8gZmlsbCBhIGZvcm0gb3IgaW50ZXJhY3Qgd2l0aCB0aGUgT1Mgb3IgYnJvd3Nlci5cbiAgICovXG4gIHByb3RlY3RlZCBpc05hdmlnYXRpbmcoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcbiAgICAvLyB3aGVuIHRoZSBjbWQgb3IgY3RybCBrZXlzIGFyZSB1c2VkLCB0aGUgdXNlciBkb2Vzbid0IG5hdmlnYXRlIHRoZSBzdG9yZWZyb250XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gd2hlbiB0aGUgdGFiIGtleSBpcyB1c2VkLCB1c2VycyBhcmUgZm9yIG5hdmlnYXRpbmcgYXdheSBmcm9tIHRoZSBjdXJyZW50IChmb3JtKSBlbGVtZW50XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdUYWInKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHVzZXIgZmlsbCBpbiBhIGZvcm0sIHdlIGRvbid0IGNvbnNpZGVyaW5nIGl0IHBhcnQgb2Ygc3RvcmVmcm9udCBuYXZpZ2F0aW9uLlxuICAgIGlmIChbJ0lOUFVUJywgJ1RFWFRBUkVBJ10uaW5jbHVkZXMoKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==