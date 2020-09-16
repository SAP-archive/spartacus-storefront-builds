import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LockFocusDirective } from './lock/lock-focus.directive';
import { KeyboardFocusService } from './services/keyboard-focus.service';
export class FocusDirective extends LockFocusDirective {
    constructor(elementRef, service, renderer) {
        super(elementRef, service, renderer);
        this.elementRef = elementRef;
        this.service = service;
        this.renderer = renderer;
        this.defaultConfig = {};
        // tslint:disable-next-line: no-input-rename
        this.config = {};
    }
}
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxFocus]',
            },] }
];
FocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: KeyboardFocusService },
    { type: Renderer2 }
];
FocusDirective.propDecorators = {
    config: [{ type: Input, args: ['cxFocus',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLekUsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFLcEQsWUFDWSxVQUFzQixFQUN0QixPQUE2QixFQUM3QixRQUFtQjtRQUU3QixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUozQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQckIsa0JBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBQzFDLDRDQUE0QztRQUNoQixXQUFNLEdBQWdCLEVBQUUsQ0FBQztJQVFyRCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7OztZQVBtQixVQUFVO1lBR3JCLG9CQUFvQjtZQUhVLFNBQVM7OztxQkFXN0MsS0FBSyxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvY3VzQ29uZmlnIH0gZnJvbSAnLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBMb2NrRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2xvY2svbG9jay1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2tleWJvYXJkLWZvY3VzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIExvY2tGb2N1c0RpcmVjdGl2ZSB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBGb2N1c0NvbmZpZyA9IHt9O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2N4Rm9jdXMnKSBwcm90ZWN0ZWQgY29uZmlnOiBGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlLCByZW5kZXJlcik7XG4gIH1cbn1cbiJdfQ==