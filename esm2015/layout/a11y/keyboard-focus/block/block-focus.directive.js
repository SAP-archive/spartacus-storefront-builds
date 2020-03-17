import { __decorate } from "tslib";
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseFocusService } from '../base/base-focus.service';
import { VisibleFocusDirective } from '../visible/index';
let BlockFocusDirective = class BlockFocusDirective extends VisibleFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { block: true };
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
__decorate([
    Input('cxBlockFocus')
], BlockFocusDirective.prototype, "config", void 0);
BlockFocusDirective = __decorate([
    Directive({
        selector: '[cxBlockFocus]',
    })
], BlockFocusDirective);
export { BlockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS3pELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW9CLFNBQVEscUJBQXFCO0lBTTVELFlBQ1ksVUFBc0IsRUFDdEIsT0FBeUI7UUFFbkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBTjNCLGtCQUFhLEdBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTNCLFdBQU0sR0FBcUIsRUFBRSxDQUFDO0lBTy9ELENBQUM7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQVp5QixVQUFVO1lBQ2IsZ0JBQWdCOztBQUpkO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7bURBQXlDO0FBSnBELG1CQUFtQjtJQUgvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7R0FDVyxtQkFBbUIsQ0FtQi9CO1NBbkJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2Jhc2UvYmFzZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJsb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBWaXNpYmxlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi92aXNpYmxlL2luZGV4JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4QmxvY2tGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBCbG9ja0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVmlzaWJsZUZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEJsb2NrRm9jdXNDb25maWcgPSB7IGJsb2NrOiB0cnVlIH07XG5cbiAgQElucHV0KCdjeEJsb2NrRm9jdXMnKSBwcm90ZWN0ZWQgY29uZmlnOiBCbG9ja0ZvY3VzQ29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEJhc2VGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZy5ibG9jaykge1xuICAgICAgdGhpcy50YWJpbmRleCA9IC0xO1xuICAgIH1cbiAgfVxufVxuIl19