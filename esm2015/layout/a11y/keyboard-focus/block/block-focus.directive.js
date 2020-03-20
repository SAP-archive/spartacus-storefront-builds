import { __decorate } from "tslib";
import { Directive, ElementRef, OnInit } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { VisibleFocusDirective } from '../visible/visible-focus.directive';
let BlockFocusDirective = 
// { selector: '[cxBlockFocus]' }
class BlockFocusDirective extends VisibleFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { block: true };
        // @Input('cxBlockFocus')
        this.config = {};
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.config.block) {
            this.tabindex = -1;
        }
    }
};
BlockFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BaseFocusService }
];
BlockFocusDirective = __decorate([
    Directive()
    // { selector: '[cxBlockFocus]' }
], BlockFocusDirective);
export { BlockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJM0UsSUFBYSxtQkFBbUI7QUFEaEMsaUNBQWlDO0FBQ2pDLE1BQWEsbUJBQW9CLFNBQVEscUJBQXFCO0lBTzVELFlBQ1ksVUFBc0IsRUFDdEIsT0FBeUI7UUFFbkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBUDNCLGtCQUFhLEdBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTVELHlCQUF5QjtRQUNmLFdBQU0sR0FBcUIsRUFBRSxDQUFDO0lBT3hDLENBQUM7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQVp5QixVQUFVO1lBQ2IsZ0JBQWdCOztBQVQxQixtQkFBbUI7SUFGL0IsU0FBUyxFQUFFO0lBQ1osaUNBQWlDO0dBQ3BCLG1CQUFtQixDQW9CL0I7U0FwQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVmlzaWJsZUZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlzaWJsZS92aXNpYmxlLWZvY3VzLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoKVxuLy8geyBzZWxlY3RvcjogJ1tjeEJsb2NrRm9jdXNdJyB9XG5leHBvcnQgY2xhc3MgQmxvY2tGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFZpc2libGVGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCbG9ja0ZvY3VzQ29uZmlnID0geyBibG9jazogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hCbG9ja0ZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogQmxvY2tGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5jb25maWcuYmxvY2spIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==