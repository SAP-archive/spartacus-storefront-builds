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
export class VisibleFocusDirective extends BaseFocusDirective {
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
}
VisibleFocusDirective.decorators = [
    { type: Directive }
];
VisibleFocusDirective.propDecorators = {
    mouseFocus: [{ type: HostBinding, args: ['class.mouse-focus',] }],
    handleMousedown: [{ type: HostListener, args: ['mousedown',] }],
    handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJsZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy92aXNpYmxlL3Zpc2libGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUdsRTs7Ozs7Ozs7Ozs7R0FXRztBQUVILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBa0I7SUFEN0Q7O1FBRVksa0JBQWEsR0FBdUI7WUFDNUMsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDO1FBS0YsMkRBQTJEO1FBQ3pCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUF3Q3ZELENBQUM7SUF0QzRCLGVBQWU7UUFDeEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRW9DLGFBQWEsQ0FBQyxLQUFvQjtRQUNyRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsa0JBQWtCOztRQUM5QixhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLGlCQUFpQixDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDTyxZQUFZLENBQUMsS0FBb0I7UUFDekMsK0VBQStFO1FBQy9FLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsMEZBQTBGO1FBQzFGLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELHFGQUFxRjtRQUNyRixJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUMsTUFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6RSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUFqREYsU0FBUzs7O3lCQVVQLFdBQVcsU0FBQyxtQkFBbUI7OEJBRS9CLFlBQVksU0FBQyxXQUFXOzRCQU14QixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpc2libGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgaW1wbGVtZW50YXRpb24gdGhhdCBhZGRzIGEgQ1NTIGNsYXNzIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAqIHdoZW4gdGhlIG1vdXNlZCBpcyB1c2VkIHRvIGZvY3VzIGFuIGVsZW1lbnQuIEFzIHNvb24gYXMgdGhlIGtleWJvYXJkXG4gKiBpcyB1c2VkLCB0aGUgY2xhc3MgaXMgcmVtb3ZlZC5cbiAqXG4gKiBUaGlzIGZlYXR1cmUgbXVzdCBiZSBleHBsaWNpdGx5IGVuYWJsZWQgd2l0aCB0aGUgYGRpc2FibGVNb3VzZUZvY3VzYCBjb25maWcuXG4gKlxuICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHZpc3VhbCBmb2N1cyBkZXBlbmRzIG9uIHRoZSBDU1MgaW1wbGVtZW50YXRpb24gdG9cbiAqIGJlZ2luIHdpdGguIFNwYXJ0YWN1cyBzdHlsZXMgYWRkIGEgYmx1ZSBib3JkZXIgYXJvdW5kIGVhY2ggZm9jdXNhYmxlIGVsZW1lbnQuXG4gKiBUaGlzIGNhbiBiZSBjb25zaWRlcmVkIGFubm95aW5nIGJ5IGtleWJvYXJkIHVzZXJzLCBhcyB0aGV5IHdvbid0IG5lZWQgc3VjaCBhXG4gKiBzdHJvbmcgaW5kaWNhdGlvbiBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4VmlzaWJsZUZvY3VzXSdcbmV4cG9ydCBjbGFzcyBWaXNpYmxlRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlRm9jdXNEaXJlY3RpdmUge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVmlzaWJsZUZvY3VzQ29uZmlnID0ge1xuICAgIGRpc2FibGVNb3VzZUZvY3VzOiB0cnVlLFxuICB9O1xuXG4gIC8vIEBJbnB1dCgnY3hWaXNpYmxlRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBWaXNpYmxlRm9jdXNDb25maWc7XG5cbiAgLyoqIENvbnRyb2xzIGEgY3NzIGNsYXNzIHRvIGhpZGUgZm9jdXMgdmlzaWJsZSBDU1MgcnVsZXMgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb3VzZS1mb2N1cycpIG1vdXNlRm9jdXMgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKSBoYW5kbGVNb3VzZWRvd24oKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlRm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlRm9jdXMgPSAhdGhpcy5pc05hdmlnYXRpbmcoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY29uZmlndXJhdGlvbnMgc2V0dXAgdG8gZGlzYWJsZSB2aXN1YWwgZm9jdXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNob3VsZEZvY3VzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc/LmRpc2FibGVNb3VzZUZvY3VzO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBldmVudCBpcyB1c2VkIHRvIG5hdmlnYXRlIHRoZSBzdG9yZWZyb250LiBTb21lIGtleWJvYXJkIGV2ZW50c1xuICAgKiBhcmUgdXNlZCBieSBtb3VzZSB1c2VycyB0byBmaWxsIGEgZm9ybSBvciBpbnRlcmFjdCB3aXRoIHRoZSBPUyBvciBicm93c2VyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGlzTmF2aWdhdGluZyhldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xuICAgIC8vIHdoZW4gdGhlIGNtZCBvciBjdHJsIGtleXMgYXJlIHVzZWQsIHRoZSB1c2VyIGRvZXNuJ3QgbmF2aWdhdGUgdGhlIHN0b3JlZnJvbnRcbiAgICBpZiAoZXZlbnQubWV0YUtleSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB3aGVuIHRoZSB0YWIga2V5IGlzIHVzZWQsIHVzZXJzIGFyZSBmb3IgbmF2aWdhdGluZyBhd2F5IGZyb20gdGhlIGN1cnJlbnQgKGZvcm0pIGVsZW1lbnRcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1RhYicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgdXNlciBmaWxsIGluIGEgZm9ybSwgd2UgZG9uJ3QgY29uc2lkZXJpbmcgaXQgcGFydCBvZiBzdG9yZWZyb250IG5hdmlnYXRpb24uXG4gICAgaWYgKFsnSU5QVVQnLCAnVEVYVEFSRUEnXS5pbmNsdWRlcygoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19