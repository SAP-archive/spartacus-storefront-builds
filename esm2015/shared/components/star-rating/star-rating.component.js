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
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', `--star-fill:${value || this.initialRate};`);
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
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
        template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], StarRatingComponent);
export { StarRatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9ELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBNkI5QixZQUFzQixFQUFjLEVBQVksUUFBb0I7UUFBOUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVk7UUE1QnBFOzs7V0FHRztRQUNvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT3hEOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVVpRCxDQUFDO0lBRXhFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBZTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDM0IsMkNBQTJDO1lBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixPQUFPLEVBQ1AsZUFBZSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUM1QyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDckMsYUFBYSxFQUNiLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUMxQixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0YsQ0FBQTs7WUFoQzJCLFVBQVU7WUFBdUIsU0FBUzs7QUF4QjdCO0lBQXRDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUM7cURBQWtCO0FBSy9DO0lBQVIsS0FBSyxFQUFFO21EQUFnQjtBQUtkO0lBQVQsTUFBTSxFQUFFO21EQUFxQztBQWZuQyxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQiwrTUFBMkM7UUFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQTZEL0I7U0E3RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICogc28gdGhhdCB0aGUgaW50ZXJhdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgc29tZSBjb2xvcmZ1bCBzdGFycyBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBpbml0aWFsUmF0ZSA9IDA7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjAuMlxuICAgKiAgVXNlIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiMzODAzKSBkZXByZWNhdGVkIHNpbmNlIDEuMC4yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZik7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHJlbmRlcmVyPzogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmF0ZSh0aGlzLnJhdGluZywgdHJ1ZSk7XG4gIH1cblxuICBzZXRSYXRlKHZhbHVlOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCB8fCBmb3JjZSkge1xuICAgICAgLy8gVE9ETyhpc3N1ZTojMzgwMykgZGVwcmVjYXRlZCBzaW5jZSAxLjAuMlxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgYC0tc3Rhci1maWxsOiR7dmFsdWUgfHwgdGhpcy5pbml0aWFsUmF0ZX07YFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICctLXN0YXItZmlsbCcsXG4gICAgICAgICAgdmFsdWUgfHwgdGhpcy5pbml0aWFsUmF0ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsUmF0ZSA9IHJhdGluZztcbiAgICB0aGlzLnNldFJhdGUocmF0aW5nKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJhdGluZyk7XG4gIH1cbn1cbiJdfQ==