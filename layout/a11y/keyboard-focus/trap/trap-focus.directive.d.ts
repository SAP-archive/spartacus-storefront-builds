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
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TrapFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsidHJhcC1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYXBGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRhYkZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vdGFiL3RhYi1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJhcEZvY3VzU2VydmljZSB9IGZyb20gJy4vdHJhcC1mb2N1cy5zZXJ2aWNlJztcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQga2VlcHMgdGhlIGZvY3VzIGluc2lkZSB0aGUgZm9jdXNzYWJsZSBjaGlsZCBlbGVtZW50cyxcbiAqIGFsc28ga25vd24gYXMgYSBfZm9jdXMgdHJhcF8uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYXBGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRhYkZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVHJhcEZvY3VzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVHJhcEZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IFRyYXBGb2N1c0NvbmZpZztcbiAgICBoYW5kbGVUcmFwRG93bjogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xuICAgIGhhbmRsZVRyYXBVcDogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IFRyYXBGb2N1c1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBmb2N1cyBvZiB0aGUgZWxlbWVudCByZWZlcmVuY2UgdXAgb3IgZG93biwgZGVwZW5kaW5nIG9uIHRoZSBpbmNyZW1lbnQuXG4gICAgICogVGhlIGZvY3VzIG9mIHRoZSBlbGVtZW50IGlzIHRyYXBwZWQgdG8gYXZvaWQgaXQgZnJvbSBnb2luZyBvdXQgb2YgdGhlIGdyb3VwLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IFVJRXZlbnQgdGhhdCBpcyB1c2VkIHRvIGdldCB0aGUgdGFyZ2V0IGVsZW1lbnQuIFRoZSBldmVudCBpcyBibG9ja2VkXG4gICAgICogICBmcm9tIHN0YW5kYXJkIGV4ZWN1dGlvbiBhbmQgZnVydGhlciBidWJibGluZy5cbiAgICAgKiBAcGFyYW0gaW5jcmVtZW50IGluZGljYXRlcyB3aGV0aGVyIHRoZSBuZXh0IG9yIHByZXZpb3VzIGlzIGZvY3Vzc2VkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtb3ZlRm9jdXMoZXZlbnQ6IFVJRXZlbnQsIGluY3JlbWVudDogbnVtYmVyKTogdm9pZDtcbn1cbiJdfQ==