import { ElementRef, OnInit } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { BlockFocusConfig } from '../keyboard-focus.model';
import { VisibleFocusDirective } from '../visible/index';
import * as ɵngcc0 from '@angular/core';
export declare class BlockFocusDirective extends VisibleFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: BaseFocusService;
    protected defaultConfig: BlockFocusConfig;
    protected config: BlockFocusConfig;
    constructor(elementRef: ElementRef, service: BaseFocusService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BlockFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BlockFocusDirective, "[cxBlockFocus]", never, {
    "config": "cxBlockFocus";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImJsb2NrLWZvY3VzLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmxvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFZpc2libGVGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3Zpc2libGUvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmxvY2tGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFZpc2libGVGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEJhc2VGb2N1c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEJsb2NrRm9jdXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQmxvY2tGb2N1c0NvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19