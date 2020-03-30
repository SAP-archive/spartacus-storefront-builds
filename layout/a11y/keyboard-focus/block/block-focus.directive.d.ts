import { ElementRef, OnInit } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { BlockFocusConfig } from '../keyboard-focus.model';
import { VisibleFocusDirective } from '../visible/visible-focus.directive';
import * as ɵngcc0 from '@angular/core';
export declare class BlockFocusDirective extends VisibleFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: BaseFocusService;
    protected defaultConfig: BlockFocusConfig;
    protected config: BlockFocusConfig;
    constructor(elementRef: ElementRef, service: BaseFocusService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BlockFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BlockFocusDirective, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImJsb2NrLWZvY3VzLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJsb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBWaXNpYmxlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi92aXNpYmxlL3Zpc2libGUtZm9jdXMuZGlyZWN0aXZlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJsb2NrRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBWaXNpYmxlRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCbG9ja0ZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IEJsb2NrRm9jdXNDb25maWc7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2VydmljZTogQmFzZUZvY3VzU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==