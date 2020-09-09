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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FocusDirective, "[cxFocus]", never, { "config": "cxFocus"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImZvY3VzLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IExvY2tGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vbG9jay9sb2NrLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBLZXlib2FyZEZvY3VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMva2V5Ym9hcmQtZm9jdXMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIExvY2tGb2N1c0RpcmVjdGl2ZSB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEtleWJvYXJkRm9jdXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBGb2N1c0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBGb2N1c0NvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XG59XG4iXX0=