import { ElementRef, Renderer2 } from '@angular/core';
import { FocusConfig } from './keyboard-focus.model';
import { LockFocusDirective } from './lock/lock-focus.directive';
import { KeyboardFocusService } from './services/keyboard-focus.service';
import * as ɵngcc0 from '@angular/core';
export declare class FocusDirective extends LockFocusDirective {
    protected elementRef: ElementRef;
    protected service: KeyboardFocusService;
    protected renderer: Renderer2;
    protected defaultConfig: FocusConfig;
    protected config: FocusConfig;
    constructor(elementRef: ElementRef, service: KeyboardFocusService, renderer: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FocusDirective, "[cxFocus]", never, {
    "config": "cxFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImZvY3VzLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZyB9IGZyb20gJy4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9rZXlib2FyZC1mb2N1cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgTG9ja0ZvY3VzRGlyZWN0aXZlIHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogS2V5Ym9hcmRGb2N1c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IEZvY3VzQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IEtleWJvYXJkRm9jdXNTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbn1cbiJdfQ==