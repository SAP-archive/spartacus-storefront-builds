import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
/**
 * Star rating component can be used to view existing ratings as well
 * as create new ratings. The component can be used for any ratings.
 *
 * The rating component has a few import inputs/outputs:
 */
export class StarRatingComponent {
    constructor() {
        this.initialRate = 0;
        this.icon = ICON_TYPE.STAR;
        /**
         * The rating component can be used in disabled mode,
         * so that the interaction is not provided.
         *
         * Defaults to true.
         */
        this.disabled = true;
        /**
         * The rating is used to color the rating stars. It can have a
         * precise number. The rating number is used for a CSS custom property
         * (AKA css variable) value. The actually coloring is done in CSS.
         */
        this.rating = this.initialRate;
        /**
         * Emits the given rating when the user clicks on a star.
         */
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
    }
    setRate(value) {
        if (this.disabled) {
            return;
        }
        this.rating = value;
    }
    reset() {
        var _a;
        if (this.disabled) {
            return;
        }
        this.rating = (_a = this.initialRate) !== null && _a !== void 0 ? _a : 0;
    }
    saveRate(rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-star-rating',
                template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"icon\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (click)=\"saveRate(i)\"\n  (keydown.space)=\"saveRate(i)\"\n  [attr.tabindex]=\"disabled ? null : 0\"\n></cx-icon>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
StarRatingComponent.propDecorators = {
    disabled: [{ type: Input }, { type: HostBinding, args: ['attr.disabled',] }],
    rating: [{ type: Input }, { type: HostBinding, args: ['style.--star-fill',] }],
    change: [{ type: Output }],
    reset: [{ type: HostListener, args: ['mouseout',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRS9EOzs7OztHQUtHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1ZLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLFNBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRXRCOzs7OztXQUtHO1FBQ29DLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFdkQ7Ozs7V0FJRztRQUdILFdBQU0sR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRWxDOztXQUVHO1FBQ0gsNENBQTRDO1FBQ2xDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBeUJoRCxDQUFDO0lBdkJDLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBR0QsS0FBSzs7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sU0FBRyxJQUFJLENBQUMsV0FBVyxtQ0FBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsc1BBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3VCQVlFLEtBQUssWUFBSSxXQUFXLFNBQUMsZUFBZTtxQkFPcEMsS0FBSyxZQUNMLFdBQVcsU0FBQyxtQkFBbUI7cUJBTy9CLE1BQU07b0JBU04sWUFBWSxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5cbi8qKlxuICogU3RhciByYXRpbmcgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIHZpZXcgZXhpc3RpbmcgcmF0aW5ncyBhcyB3ZWxsXG4gKiBhcyBjcmVhdGUgbmV3IHJhdGluZ3MuIFRoZSBjb21wb25lbnQgY2FuIGJlIHVzZWQgZm9yIGFueSByYXRpbmdzLlxuICpcbiAqIFRoZSByYXRpbmcgY29tcG9uZW50IGhhcyBhIGZldyBpbXBvcnQgaW5wdXRzL291dHB1dHM6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgaW5pdGlhbFJhdGUgPSAwO1xuXG4gIGljb24gPSBJQ09OX1RZUEUuU1RBUjtcblxuICAvKipcbiAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICogc28gdGhhdCB0aGUgaW50ZXJhY3Rpb24gaXMgbm90IHByb3ZpZGVkLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJykgZGlzYWJsZWQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIGlzIHVzZWQgdG8gY29sb3IgdGhlIHJhdGluZyBzdGFycy4gSXQgY2FuIGhhdmUgYVxuICAgKiBwcmVjaXNlIG51bWJlci4gVGhlIHJhdGluZyBudW1iZXIgaXMgdXNlZCBmb3IgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG4gICAqIChBS0EgY3NzIHZhcmlhYmxlKSB2YWx1ZS4gVGhlIGFjdHVhbGx5IGNvbG9yaW5nIGlzIGRvbmUgaW4gQ1NTLlxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tLXN0YXItZmlsbCcpXG4gIHJhdGluZzogbnVtYmVyID0gdGhpcy5pbml0aWFsUmF0ZTtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgc2V0UmF0ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yYXRpbmcgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0JylcbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yYXRpbmcgPSB0aGlzLmluaXRpYWxSYXRlID8/IDA7XG4gIH1cblxuICBzYXZlUmF0ZShyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbFJhdGUgPSByYXRpbmc7XG4gICAgdGhpcy5zZXRSYXRlKHJhdGluZyk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyYXRpbmcpO1xuICB9XG59XG4iXX0=