import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2, } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/index';
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(el, renderer) {
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
    StarRatingComponent.prototype.ngOnInit = function () {
        this.setRate(this.rating, true);
    };
    StarRatingComponent.prototype.setRate = function (value, force) {
        if (!this.disabled || force) {
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', "--star-fill:" + (value || this.initialRate) + ";");
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
        }
    };
    StarRatingComponent.prototype.saveRate = function (rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    };
    StarRatingComponent.prototype.setRateOnEvent = function (event, rating) {
        if (event.code === 'Space') {
            event.preventDefault();
            this.setRate(rating);
        }
    };
    StarRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return StarRatingComponent;
}());
export { StarRatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9EO0lBNkJFLDZCQUFzQixFQUFjLEVBQVksUUFBb0I7UUFBOUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVk7UUE1QnBFOzs7V0FHRztRQUNvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT3hEOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVVpRCxDQUFDO0lBRXhFLHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFPLEdBQVAsVUFBUSxLQUFhLEVBQUUsS0FBZTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDM0IsMkNBQTJDO1lBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixPQUFPLEVBQ1Asa0JBQWUsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLE9BQUcsQ0FDNUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3JDLGFBQWEsRUFDYixLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FDMUIsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxLQUFVLEVBQUUsTUFBYztRQUN2QyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzFCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Z0JBdEN5QixVQUFVO2dCQUF1QixTQUFTOztJQXhCN0I7UUFBdEMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGVBQWUsQ0FBQzt5REFBa0I7SUFLL0M7UUFBUixLQUFLLEVBQUU7dURBQWdCO0lBS2Q7UUFBVCxNQUFNLEVBQUU7dURBQXFDO0lBZm5DLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLHFTQUEyQztZQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csbUJBQW1CLENBb0UvQjtJQUFELDBCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FwRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHJhdGluZyBjb21wb25lbnQgY2FuIGJlIHVzZWQgaW4gZGlzYWJsZWQgbW9kZSxcbiAgICogc28gdGhhdCB0aGUgaW50ZXJhdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgc29tZSBjb2xvcmZ1bCBzdGFycyBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIGdpdmVuIHJhdGluZyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN0YXIuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBpbml0aWFsUmF0ZSA9IDA7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjAuMlxuICAgKiAgVXNlIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiMzODAzKSBkZXByZWNhdGVkIHNpbmNlIDEuMC4yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZik7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHJlbmRlcmVyPzogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmF0ZSh0aGlzLnJhdGluZywgdHJ1ZSk7XG4gIH1cblxuICBzZXRSYXRlKHZhbHVlOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCB8fCBmb3JjZSkge1xuICAgICAgLy8gVE9ETyhpc3N1ZTojMzgwMykgZGVwcmVjYXRlZCBzaW5jZSAxLjAuMlxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgYC0tc3Rhci1maWxsOiR7dmFsdWUgfHwgdGhpcy5pbml0aWFsUmF0ZX07YFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICctLXN0YXItZmlsbCcsXG4gICAgICAgICAgdmFsdWUgfHwgdGhpcy5pbml0aWFsUmF0ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNhdmVSYXRlKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsUmF0ZSA9IHJhdGluZztcbiAgICB0aGlzLnNldFJhdGUocmF0aW5nKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJhdGluZyk7XG4gIH1cblxuICBzZXRSYXRlT25FdmVudChldmVudDogYW55LCByYXRpbmc6IG51bWJlcikge1xuICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRSYXRlKHJhdGluZyk7XG4gICAgfVxuICB9XG59XG4iXX0=