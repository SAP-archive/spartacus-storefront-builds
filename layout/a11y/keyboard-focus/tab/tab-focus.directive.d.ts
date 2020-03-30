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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TabFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJ0YWItZm9jdXMuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2F1dG9mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRhYkZvY3VzU2VydmljZSB9IGZyb20gJy4vdGFiLWZvY3VzLnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdG8gbW92ZSB0aGUgZm9jdXMgb2YgKFwibG9ja2VkXCIpIGNoaWxkIGVsZW1lbnRzLiBUaGlzIGlzIHVzZWZ1bFxuICogZm9yIGEgbmVzdGVkIGxpc3Qgb2YgdGFicywgY2Fyb3VzZWwgc2xpZGVzIG9yIGFueSBncm91cCBvZiBlbGVtZW50cyB0aGF0XG4gKiByZXF1aXJlcyBob3Jpem9udGFsIG5hdmlnYXRpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRhYkZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgQXV0b0ZvY3VzRGlyZWN0aXZlIHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVGFiRm9jdXNTZXJ2aWNlO1xuICAgIC8qKiBgdGFiYCBkZWZhdWx0cyB0byB0cnVlIGlmIHRoZSBkaXJlY3RpdmUgYGN4VGFiRm9jdXNgIGlzIHVzZWQuICovXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFRhYkZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IFRhYkZvY3VzQ29uZmlnO1xuICAgIGhhbmRsZU5leHRUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIGhhbmRsZVByZXZpb3VzVGFiKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBUYWJGb2N1c1NlcnZpY2UpO1xufVxuIl19