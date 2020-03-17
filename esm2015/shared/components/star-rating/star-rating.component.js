import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
let StarRatingComponent = class StarRatingComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * The rating component can be used in disabled mode,
         * so that the interation is not provided.
         */
        this.disabled = false;
        /**
         * Emits the given rating when the user clicks on a star.
         */
        this.change = new EventEmitter();
        this.initialRate = 0;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.setRate(this.rating, true);
    }
    setRate(value, force) {
        if (!this.disabled || force) {
            this.renderer.setAttribute(this.el.nativeElement, 'style', `--star-fill:${value || this.initialRate};`);
        }
    }
    saveRate(rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    }
    setRateOnEvent(event, rating) {
        if (event.code === 'Space') {
            event.preventDefault();
            this.setRate(rating);
        }
    }
};
StarRatingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(), HostBinding('attr.disabled')
], StarRatingComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], StarRatingComponent.prototype, "rating", void 0);
__decorate([
    Output()
], StarRatingComponent.prototype, "change", void 0);
StarRatingComponent = __decorate([
    Component({
        selector: 'cx-star-rating',
        template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (keydown)=\"setRateOnEvent($event, i)\"\n  (click)=\"saveRate(i)\"\n  [attr.tabindex]=\"disabled ? null : 0\"\n></cx-icon>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], StarRatingComponent);
export { StarRatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9ELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBcUI5QixZQUFzQixFQUFjLEVBQVksUUFBbUI7UUFBN0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwQm5FOzs7V0FHRztRQUNvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT3hEOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQUVnRCxDQUFDO0lBRXZFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBZTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixPQUFPLEVBQ1AsZUFBZSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUM1QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVLEVBQUUsTUFBYztRQUN2QyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzFCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBL0IyQixVQUFVO1lBQXNCLFNBQVM7O0FBaEI1QjtJQUF0QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDO3FEQUFrQjtBQUsvQztJQUFSLEtBQUssRUFBRTttREFBZ0I7QUFLZDtJQUFULE1BQU0sRUFBRTttREFBcUM7QUFmbkMsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIscVNBQTJDO1FBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxtQkFBbUIsQ0FvRC9CO1NBcERZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdGFyLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFyLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgY29tcG9uZW50IGNhbiBiZSB1c2VkIGluIGRpc2FibGVkIG1vZGUsXG4gICAqIHNvIHRoYXQgdGhlIGludGVyYXRpb24gaXMgbm90IHByb3ZpZGVkLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIHJhdGluZyB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHNvbWUgY29sb3JmdWwgc3RhcnMgaW4gdGhlIFVJLlxuICAgKi9cbiAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBnaXZlbiByYXRpbmcgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBzdGFyLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgaW5pdGlhbFJhdGUgPSAwO1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmF0ZSh0aGlzLnJhdGluZywgdHJ1ZSk7XG4gIH1cblxuICBzZXRSYXRlKHZhbHVlOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCB8fCBmb3JjZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgYC0tc3Rhci1maWxsOiR7dmFsdWUgfHwgdGhpcy5pbml0aWFsUmF0ZX07YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzYXZlUmF0ZShyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbFJhdGUgPSByYXRpbmc7XG4gICAgdGhpcy5zZXRSYXRlKHJhdGluZyk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyYXRpbmcpO1xuICB9XG5cbiAgc2V0UmF0ZU9uRXZlbnQoZXZlbnQ6IGFueSwgcmF0aW5nOiBudW1iZXIpIHtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0UmF0ZShyYXRpbmcpO1xuICAgIH1cbiAgfVxufVxuIl19