import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { EscapeFocusConfig } from '../keyboard-focus.model';
import { PersistFocusDirective } from '../persist/persist-focus.directive';
import { EscapeFocusService } from './escape-focus.service';
/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class EscapeFocusDirective extends PersistFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: EscapeFocusService;
    protected defaultConfig: EscapeFocusConfig;
    /** Optional configuration to drive behaviour of the directive. */
    protected config: EscapeFocusConfig;
    esc: EventEmitter<boolean>;
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    handleEscape(event: KeyboardEvent): void;
    constructor(elementRef: ElementRef, service: EscapeFocusService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EscapeFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<EscapeFocusDirective, "[cxEscFocus]", never, {
    "config": "cxEscFocus";
}, {
    "esc": "esc";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJlc2NhcGUtZm9jdXMuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgUGVyc2lzdEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vcGVyc2lzdC9wZXJzaXN0LWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2VzY2FwZS1mb2N1cy5zZXJ2aWNlJztcbi8qKlxuICogRGlyZWN0aXZlIHRvIGZvY3VzIHRoZSBob3N0IGVsZW1lbnQgd2hlbmV2ZXIgdGhlIGBlc2NhcGVgIGtleSBpcyBjYXB0dXJlZC5cbiAqIFVpRXZlbnRzIGJ1YmJsZSB1cCBieSBuYXR1cmUsIHdoaWNoIGlzIHdoeSB0aGUgYGN4RXNjR3JvdXBgIGNhbiBiZSB1c2VkXG4gKiBvbiBhIHRyZWUgb2YgZWxlbWVudHMuIEVhY2ggdGltZSB0aGUgZXNjYXBlIGtleSBpcyB1c2VkLCB0aGUgZm9jdXMgd2lsbFxuICogbW92ZSB1cCBpbiB0aGUgRE9NIHRyZWUuXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBFc2NhcGVGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEVzY2FwZUZvY3VzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogRXNjYXBlRm9jdXNDb25maWc7XG4gICAgLyoqIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gdG8gZHJpdmUgYmVoYXZpb3VyIG9mIHRoZSBkaXJlY3RpdmUuICovXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRXNjYXBlRm9jdXNDb25maWc7XG4gICAgZXNjOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgZXNjYXBlIGtleSBldmVudC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgdGhlIG5hdGl2ZSBrZXlib2FyZCBldmVudCB3aGljaCBjb250YWlucyB0aGUgZXNjYXBlIGtleWRvd24gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IEVzY2FwZUZvY3VzU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==