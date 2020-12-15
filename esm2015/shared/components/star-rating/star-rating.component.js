import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
/**
 * Star rating component can be used to view existing ratings as well
 * as create new ratings. The component can be used for any ratings.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRS9EOzs7R0FHRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNWSxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUUxQixTQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUV0Qjs7Ozs7V0FLRztRQUNvQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXZEOzs7O1dBSUc7UUFHSCxXQUFNLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVsQzs7V0FFRztRQUNILDRDQUE0QztRQUNsQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXlCaEQsQ0FBQztJQXZCQyxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdELEtBQUs7O1FBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLFNBQUcsSUFBSSxDQUFDLFdBQVcsbUNBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHNQQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozt1QkFZRSxLQUFLLFlBQUksV0FBVyxTQUFDLGVBQWU7cUJBT3BDLEtBQUssWUFDTCxXQUFXLFNBQUMsbUJBQW1CO3FCQU8vQixNQUFNO29CQVNOLFlBQVksU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaW5kZXgnO1xuXG4vKipcbiAqIFN0YXIgcmF0aW5nIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byB2aWV3IGV4aXN0aW5nIHJhdGluZ3MgYXMgd2VsbFxuICogYXMgY3JlYXRlIG5ldyByYXRpbmdzLiBUaGUgY29tcG9uZW50IGNhbiBiZSB1c2VkIGZvciBhbnkgcmF0aW5ncy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3Rhci1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBpbml0aWFsUmF0ZSA9IDA7XG5cbiAgaWNvbiA9IElDT05fVFlQRS5TVEFSO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBpbiBkaXNhYmxlZCBtb2RlLFxuICAgKiBzbyB0aGF0IHRoZSBpbnRlcmFjdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBkaXNhYmxlZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgaXMgdXNlZCB0byBjb2xvciB0aGUgcmF0aW5nIHN0YXJzLiBJdCBjYW4gaGF2ZSBhXG4gICAqIHByZWNpc2UgbnVtYmVyLiBUaGUgcmF0aW5nIG51bWJlciBpcyB1c2VkIGZvciBhIENTUyBjdXN0b20gcHJvcGVydHlcbiAgICogKEFLQSBjc3MgdmFyaWFibGUpIHZhbHVlLiBUaGUgYWN0dWFsbHkgY29sb3JpbmcgaXMgZG9uZSBpbiBDU1MuXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tc3Rhci1maWxsJylcbiAgcmF0aW5nOiBudW1iZXIgPSB0aGlzLmluaXRpYWxSYXRlO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgZ2l2ZW4gcmF0aW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgc3Rhci5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBzZXRSYXRlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJhdGluZyA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnKVxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJhdGluZyA9IHRoaXMuaW5pdGlhbFJhdGUgPz8gMDtcbiAgfVxuXG4gIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsUmF0ZSA9IHJhdGluZztcbiAgICB0aGlzLnNldFJhdGUocmF0aW5nKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJhdGluZyk7XG4gIH1cbn1cbiJdfQ==