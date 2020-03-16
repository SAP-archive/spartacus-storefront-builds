import { __decorate } from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, } from '@angular/core';
import { PersistFocusDirective } from '../persist/persist-focus.directive';
import { EscapeFocusService } from './escape-focus.service';
/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
let EscapeFocusDirective = class EscapeFocusDirective extends PersistFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { focusOnEscape: true };
        this.esc = new EventEmitter();
    }
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    handleEscape(event) {
        if (this.service.shouldFocus(this.config)) {
            this.service.handleEscape(this.host, this.config, event);
        }
        this.esc.emit(this.service.shouldFocus(this.config));
    }
    ngOnInit() {
        if (this.service.shouldFocus(this.config)) {
            this.requiredTabindex = -1;
        }
        super.ngOnInit();
    }
};
EscapeFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: EscapeFocusService }
];
__decorate([
    Input('cxEscFocus')
], EscapeFocusDirective.prototype, "config", void 0);
__decorate([
    Output()
], EscapeFocusDirective.prototype, "esc", void 0);
__decorate([
    HostListener('keydown.escape', ['$event'])
], EscapeFocusDirective.prototype, "handleEscape", null);
EscapeFocusDirective = __decorate([
    Directive({
        selector: '[cxEscFocus]',
    })
], EscapeFocusDirective);
export { EscapeFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2VzY2FwZS9lc2NhcGUtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEOzs7Ozs7R0FNRztBQUlILElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQXFCLFNBQVEscUJBQXFCO0lBcUI3RCxZQUNZLFVBQXNCLEVBQ3RCLE9BQTJCO1FBRXJDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQXJCN0Isa0JBQWEsR0FBc0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFLM0QsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFtQjVDLENBQUM7SUFqQkQ7OztPQUdHO0lBRUgsWUFBWSxDQUFDLEtBQW9CO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFTRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQVp5QixVQUFVO1lBQ2Isa0JBQWtCOztBQWxCbEI7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQztvREFBcUM7QUFFL0M7SUFBVCxNQUFNLEVBQUU7aURBQW1DO0FBTzVDO0lBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7d0RBTTFDO0FBbkJVLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztLQUN6QixDQUFDO0dBQ1csb0JBQW9CLENBa0NoQztTQWxDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzU2VydmljZSB9IGZyb20gJy4vZXNjYXBlLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBmb2N1cyB0aGUgaG9zdCBlbGVtZW50IHdoZW5ldmVyIHRoZSBgZXNjYXBlYCBrZXkgaXMgY2FwdHVyZWQuXG4gKiBVaUV2ZW50cyBidWJibGUgdXAgYnkgbmF0dXJlLCB3aGljaCBpcyB3aHkgdGhlIGBjeEVzY0dyb3VwYCBjYW4gYmUgdXNlZFxuICogb24gYSB0cmVlIG9mIGVsZW1lbnRzLiBFYWNoIHRpbWUgdGhlIGVzY2FwZSBrZXkgaXMgdXNlZCwgdGhlIGZvY3VzIHdpbGxcbiAqIG1vdmUgdXAgaW4gdGhlIERPTSB0cmVlLlxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4RXNjRm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgRXNjYXBlRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogRXNjYXBlRm9jdXNDb25maWcgPSB7IGZvY3VzT25Fc2NhcGU6IHRydWUgfTtcblxuICAvKiogT3B0aW9uYWwgY29uZmlndXJhdGlvbiB0byBkcml2ZSBiZWhhdmlvdXIgb2YgdGhlIGRpcmVjdGl2ZS4gKi9cbiAgQElucHV0KCdjeEVzY0ZvY3VzJykgcHJvdGVjdGVkIGNvbmZpZzogRXNjYXBlRm9jdXNDb25maWc7XG5cbiAgQE91dHB1dCgpIGVzYyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZXNjYXBlIGtleSBldmVudC5cbiAgICogQHBhcmFtIGV2ZW50IHRoZSBuYXRpdmUga2V5Ym9hcmQgZXZlbnQgd2hpY2ggY29udGFpbnMgdGhlIGVzY2FwZSBrZXlkb3duIGV2ZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUVzY2FwZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlcnZpY2Uuc2hvdWxkRm9jdXModGhpcy5jb25maWcpKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuaGFuZGxlRXNjYXBlKHRoaXMuaG9zdCwgdGhpcy5jb25maWcsIGV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5lc2MuZW1pdCh0aGlzLnNlcnZpY2Uuc2hvdWxkRm9jdXModGhpcy5jb25maWcpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBFc2NhcGVGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLnNob3VsZEZvY3VzKHRoaXMuY29uZmlnKSkge1xuICAgICAgdGhpcy5yZXF1aXJlZFRhYmluZGV4ID0gLTE7XG4gICAgfVxuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==