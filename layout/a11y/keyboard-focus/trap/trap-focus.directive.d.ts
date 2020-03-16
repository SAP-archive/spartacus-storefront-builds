import { ElementRef, OnInit } from '@angular/core';
import { TrapFocusConfig } from '../keyboard-focus.model';
import { TabFocusDirective } from '../tab/tab-focus.directive';
import { TrapFocusService } from './trap-focus.service';
/**
 * Directive that keeps the focus inside the focussable child elements,
 * also known as a _focus trap_.
 */
import * as ɵngcc0 from '@angular/core';
export declare class TrapFocusDirective extends TabFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: TrapFocusService;
    protected defaultConfig: TrapFocusConfig;
    protected config: TrapFocusConfig;
    handleTrapDown: (event: KeyboardEvent) => void;
    handleTrapUp: (event: KeyboardEvent) => void;
    constructor(elementRef: ElementRef, service: TrapFocusService);
    /**
     * Moves the focus of the element reference up or down, depending on the increment.
     * The focus of the element is trapped to avoid it from going out of the group.
     *
     * @param event UIEvent that is used to get the target element. The event is blocked
     *   from standard execution and further bubbling.
     * @param increment indicates whether the next or previous is focussed.
     */
    protected moveFocus(event: UIEvent, increment: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TrapFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TrapFocusDirective, "[cxTrapFocus]", never, {
    "config": "cxTrapFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsidHJhcC1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhcEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90YWIvdGFiLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmFwRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90cmFwLWZvY3VzLnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBrZWVwcyB0aGUgZm9jdXMgaW5zaWRlIHRoZSBmb2N1c3NhYmxlIGNoaWxkIGVsZW1lbnRzLFxuICogYWxzbyBrbm93biBhcyBhIF9mb2N1cyB0cmFwXy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJhcEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVGFiRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUcmFwRm9jdXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBUcmFwRm9jdXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogVHJhcEZvY3VzQ29uZmlnO1xuICAgIGhhbmRsZVRyYXBEb3duOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gICAgaGFuZGxlVHJhcFVwOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2VydmljZTogVHJhcEZvY3VzU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIGZvY3VzIG9mIHRoZSBlbGVtZW50IHJlZmVyZW5jZSB1cCBvciBkb3duLCBkZXBlbmRpbmcgb24gdGhlIGluY3JlbWVudC5cbiAgICAgKiBUaGUgZm9jdXMgb2YgdGhlIGVsZW1lbnQgaXMgdHJhcHBlZCB0byBhdm9pZCBpdCBmcm9tIGdvaW5nIG91dCBvZiB0aGUgZ3JvdXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgVUlFdmVudCB0aGF0IGlzIHVzZWQgdG8gZ2V0IHRoZSB0YXJnZXQgZWxlbWVudC4gVGhlIGV2ZW50IGlzIGJsb2NrZWRcbiAgICAgKiAgIGZyb20gc3RhbmRhcmQgZXhlY3V0aW9uIGFuZCBmdXJ0aGVyIGJ1YmJsaW5nLlxuICAgICAqIEBwYXJhbSBpbmNyZW1lbnQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5leHQgb3IgcHJldmlvdXMgaXMgZm9jdXNzZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1vdmVGb2N1cyhldmVudDogVUlFdmVudCwgaW5jcmVtZW50OiBudW1iZXIpOiB2b2lkO1xufVxuIl19