import { ElementRef } from '@angular/core';
import { AutoFocusDirective } from '../autofocus/auto-focus.directive';
import { TabFocusConfig } from '../keyboard-focus.model';
import { TabFocusService } from './tab-focus.service';
/**
 * Directive to move the focus of ("locked") child elements. This is useful
 * for a nested list of tabs, carousel slides or any group of elements that
 * requires horizontal navigation.
 */
import * as ɵngcc0 from '@angular/core';
export declare class TabFocusDirective extends AutoFocusDirective {
    protected elementRef: ElementRef;
    protected service: TabFocusService;
    /** `tab` defaults to true if the directive `cxTabFocus` is used. */
    protected defaultConfig: TabFocusConfig;
    protected config: TabFocusConfig;
    handleNextTab(event: KeyboardEvent): void;
    handlePreviousTab(event: KeyboardEvent): void;
    constructor(elementRef: ElementRef, service: TabFocusService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TabFocusDirective, "[cxTabFocus]", never, {
    "config": "cxTabFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJ0YWItZm9jdXMuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXV0b2ZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYkZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90YWItZm9jdXMuc2VydmljZSc7XG4vKipcbiAqIERpcmVjdGl2ZSB0byBtb3ZlIHRoZSBmb2N1cyBvZiAoXCJsb2NrZWRcIikgY2hpbGQgZWxlbWVudHMuIFRoaXMgaXMgdXNlZnVsXG4gKiBmb3IgYSBuZXN0ZWQgbGlzdCBvZiB0YWJzLCBjYXJvdXNlbCBzbGlkZXMgb3IgYW55IGdyb3VwIG9mIGVsZW1lbnRzIHRoYXRcbiAqIHJlcXVpcmVzIGhvcml6b250YWwgbmF2aWdhdGlvbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBBdXRvRm9jdXNEaXJlY3RpdmUge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBUYWJGb2N1c1NlcnZpY2U7XG4gICAgLyoqIGB0YWJgIGRlZmF1bHRzIHRvIHRydWUgaWYgdGhlIGRpcmVjdGl2ZSBgY3hUYWJGb2N1c2AgaXMgdXNlZC4gKi9cbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogVGFiRm9jdXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogVGFiRm9jdXNDb25maWc7XG4gICAgaGFuZGxlTmV4dFRhYihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgaGFuZGxlUHJldmlvdXNUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IFRhYkZvY3VzU2VydmljZSk7XG59XG4iXX0=