import { Directive, ElementRef } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { VisibleFocusDirective } from '../visible/visible-focus.directive';
// { selector: '[cxBlockFocus]' }
export class BlockFocusDirective extends VisibleFocusDirective {
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
}
BlockFocusDirective.decorators = [
    { type: Directive }
];
BlockFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BaseFocusService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzNFLGlDQUFpQztBQUNqQyxNQUFNLE9BQU8sbUJBQ1gsU0FBUSxxQkFBcUI7SUFPN0IsWUFDWSxVQUFzQixFQUN0QixPQUF5QjtRQUVuQyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFQM0Isa0JBQWEsR0FBcUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFNUQseUJBQXlCO1FBQ2YsV0FBTSxHQUFxQixFQUFFLENBQUM7SUFPeEMsQ0FBQztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBdEJGLFNBQVM7OztZQUxVLFVBQVU7WUFDckIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVmlzaWJsZUZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlzaWJsZS92aXNpYmxlLWZvY3VzLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoKVxuLy8geyBzZWxlY3RvcjogJ1tjeEJsb2NrRm9jdXNdJyB9XG5leHBvcnQgY2xhc3MgQmxvY2tGb2N1c0RpcmVjdGl2ZVxuICBleHRlbmRzIFZpc2libGVGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCbG9ja0ZvY3VzQ29uZmlnID0geyBibG9jazogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hCbG9ja0ZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogQmxvY2tGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5jb25maWcuYmxvY2spIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==