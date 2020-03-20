import { __decorate } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LockFocusDirective } from './lock/lock-focus.directive';
import { KeyboardFocusService } from './services/keyboard-focus.service';
let FocusDirective = class FocusDirective extends LockFocusDirective {
    constructor(elementRef, service, renderer) {
        super(elementRef, service, renderer);
        this.elementRef = elementRef;
        this.service = service;
        this.renderer = renderer;
        this.defaultConfig = {};
        // tslint:disable-next-line: no-input-rename
        this.config = {};
    }
};
FocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: KeyboardFocusService },
    { type: Renderer2 }
];
__decorate([
    Input('cxFocus')
], FocusDirective.prototype, "config", void 0);
FocusDirective = __decorate([
    Directive({
        selector: '[cxFocus]',
    })
], FocusDirective);
export { FocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3pFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxrQkFBa0I7SUFLcEQsWUFDWSxVQUFzQixFQUN0QixPQUE2QixFQUM3QixRQUFtQjtRQUU3QixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUozQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQckIsa0JBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBQzFDLDRDQUE0QztRQUNoQixXQUFNLEdBQWdCLEVBQUUsQ0FBQztJQVFyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFOeUIsVUFBVTtZQUNiLG9CQUFvQjtZQUNuQixTQUFTOztBQUxiO0lBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7OENBQW9DO0FBSDFDLGNBQWM7SUFIMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7S0FDdEIsQ0FBQztHQUNXLGNBQWMsQ0FZMUI7U0FaWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZyB9IGZyb20gJy4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9rZXlib2FyZC1mb2N1cy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Rm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBMb2NrRm9jdXNEaXJlY3RpdmUge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogRm9jdXNDb25maWcgPSB7fTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdjeEZvY3VzJykgcHJvdGVjdGVkIGNvbmZpZzogRm9jdXNDb25maWcgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogS2V5Ym9hcmRGb2N1c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSwgcmVuZGVyZXIpO1xuICB9XG59XG4iXX0=