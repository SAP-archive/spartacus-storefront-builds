import { __decorate } from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, } from '@angular/core';
import { PersistFocusDirective } from '../persist/persist-focus.directive';
import { EscapeFocusService } from './escape-focus.service';
/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
let EscapeFocusDirective = class EscapeFocusDirective extends PersistFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { focusOnEscape: true };
        this.esc = new EventEmitter();
    }
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    handleEscape(event) {
        if (this.service.shouldFocus(this.config)) {
            this.service.handleEscape(this.host, this.config, event);
        }
        this.esc.emit(this.service.shouldFocus(this.config));
    }
    ngOnInit() {
        if (this.service.shouldFocus(this.config)) {
            this.requiredTabindex = -1;
        }
        super.ngOnInit();
    }
};
EscapeFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: EscapeFocusService }
];
__decorate([
    Output()
], EscapeFocusDirective.prototype, "esc", void 0);
__decorate([
    HostListener('keydown.escape', ['$event'])
], EscapeFocusDirective.prototype, "handleEscape", null);
EscapeFocusDirective = __decorate([
    Directive() // selector: '[cxEscFocus]',
], EscapeFocusDirective);
export { EscapeFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2VzY2FwZS9lc2NhcGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7Ozs7OztHQU1HO0FBRUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxxQkFBcUI7SUFxQjdELFlBQ1ksVUFBc0IsRUFDdEIsT0FBMkI7UUFFckMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBckI3QixrQkFBYSxHQUFzQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUszRCxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQW1CNUMsQ0FBQztJQWpCRDs7O09BR0c7SUFFSCxZQUFZLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVNELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBWnlCLFVBQVU7WUFDYixrQkFBa0I7O0FBaEI3QjtJQUFULE1BQU0sRUFBRTtpREFBbUM7QUFPNUM7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3REFNMUM7QUFuQlUsb0JBQW9CO0lBRGhDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QjtHQUM1QixvQkFBb0IsQ0FrQ2hDO1NBbENZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgUGVyc2lzdEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vcGVyc2lzdC9wZXJzaXN0LWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2VzY2FwZS1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gZm9jdXMgdGhlIGhvc3QgZWxlbWVudCB3aGVuZXZlciB0aGUgYGVzY2FwZWAga2V5IGlzIGNhcHR1cmVkLlxuICogVWlFdmVudHMgYnViYmxlIHVwIGJ5IG5hdHVyZSwgd2hpY2ggaXMgd2h5IHRoZSBgY3hFc2NHcm91cGAgY2FuIGJlIHVzZWRcbiAqIG9uIGEgdHJlZSBvZiBlbGVtZW50cy4gRWFjaCB0aW1lIHRoZSBlc2NhcGUga2V5IGlzIHVzZWQsIHRoZSBmb2N1cyB3aWxsXG4gKiBtb3ZlIHVwIGluIHRoZSBET00gdHJlZS5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeEVzY0ZvY3VzXScsXG5leHBvcnQgY2xhc3MgRXNjYXBlRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogRXNjYXBlRm9jdXNDb25maWcgPSB7IGZvY3VzT25Fc2NhcGU6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4RXNjRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZztcblxuICBAT3V0cHV0KCkgZXNjID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBlc2NhcGUga2V5IGV2ZW50LlxuICAgKiBAcGFyYW0gZXZlbnQgdGhlIG5hdGl2ZSBrZXlib2FyZCBldmVudCB3aGljaCBjb250YWlucyB0aGUgZXNjYXBlIGtleWRvd24gZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5zaG91bGRGb2N1cyh0aGlzLmNvbmZpZykpIHtcbiAgICAgIHRoaXMuc2VydmljZS5oYW5kbGVFc2NhcGUodGhpcy5ob3N0LCB0aGlzLmNvbmZpZywgZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLmVzYy5lbWl0KHRoaXMuc2VydmljZS5zaG91bGRGb2N1cyh0aGlzLmNvbmZpZykpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEVzY2FwZUZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnNlcnZpY2Uuc2hvdWxkRm9jdXModGhpcy5jb25maWcpKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkVGFiaW5kZXggPSAtMTtcbiAgICB9XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19