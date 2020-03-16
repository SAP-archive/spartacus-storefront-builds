import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
var SkipLinkComponent = /** @class */ (function () {
    function SkipLinkComponent(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService.getSkipLinks();
    }
    SkipLinkComponent.prototype.scrollToTarget = function (skipLink) {
        this.skipLinkService.scrollToTarget(skipLink);
    };
    SkipLinkComponent.ctorParameters = function () { return [
        { type: SkipLinkService }
    ]; };
    SkipLinkComponent = __decorate([
        Component({
            selector: 'cx-skip-link',
            template: "<div [cxFocus]=\"{ tab: true }\" *ngIf=\"skipLinks$ | async as links\">\n  <button *ngFor=\"let link of links\" (click)=\"scrollToTarget(link)\">\n    {{ 'skipLink.skipTo' | cxTranslate }}\n    {{ link.i18nKey | cxTranslate }}\n  </button>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SkipLinkComponent);
    return SkipLinkComponent;
}());
export { SkipLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPL0Q7SUFHRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRnBELGVBQVUsR0FBMkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBRXhELDBDQUFjLEdBQWQsVUFBZSxRQUFrQjtRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkFKb0MsZUFBZTs7SUFIekMsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLHFRQUF5QztZQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBUTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTa2lwTGluayB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1za2lwLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2tpcC1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rQ29tcG9uZW50IHtcbiAgc2tpcExpbmtzJDogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiA9IHRoaXMuc2tpcExpbmtTZXJ2aWNlLmdldFNraXBMaW5rcygpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2UpIHt9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rKTogdm9pZCB7XG4gICAgdGhpcy5za2lwTGlua1NlcnZpY2Uuc2Nyb2xsVG9UYXJnZXQoc2tpcExpbmspO1xuICB9XG59XG4iXX0=