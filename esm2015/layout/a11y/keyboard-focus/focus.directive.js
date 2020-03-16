import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { LockFocusDirective } from './lock';
let FocusDirective = class FocusDirective extends LockFocusDirective {
    constructor() {
        super(...arguments);
        // tslint:disable-next-line: no-input-rename
        this.config = {};
    }
};
__decorate([
    Input('cxFocus')
], FocusDirective.prototype, "config", void 0);
FocusDirective = __decorate([
    Directive({
        selector: '[cxFocus]',
    })
], FocusDirective);
export { FocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFLNUMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLGtCQUFrQjtJQUF0RDs7UUFDRSw0Q0FBNEM7UUFDaEIsV0FBTSxHQUFnQixFQUFFLENBQUM7SUFDdkQsQ0FBQztDQUFBLENBQUE7QUFEbUI7SUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs4Q0FBb0M7QUFGMUMsY0FBYztJQUgxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztLQUN0QixDQUFDO0dBQ1csY0FBYyxDQUcxQjtTQUhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZyB9IGZyb20gJy4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2NrJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Rm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBMb2NrRm9jdXNEaXJlY3RpdmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2N4Rm9jdXMnKSBwcm90ZWN0ZWQgY29uZmlnOiBGb2N1c0NvbmZpZyA9IHt9O1xufVxuIl19