import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    __decorate([
        Input()
    ], PromotionsComponent.prototype, "promotions", void 0);
    PromotionsComponent = __decorate([
        Component({
            selector: 'cx-promotions',
            template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <ng-container *cxFeatureLevel=\"'!1.4'\">\n    <strong *ngFor=\"let promotion of promotions\">\n      <li>{{ promotion.description }}</li>\n    </strong>\n  </ng-container>\n\n  <ng-container *cxFeatureLevel=\"'1.4'\">\n    <ul *ngFor=\"let promotion of promotions\">\n      <li>{{ promotion.description }}</li>\n    </ul>\n  </ng-container>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PromotionsComponent);
    return PromotionsComponent;
}());
export { PromotionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFFO0lBSUU7SUFBZSxDQUFDO0lBRmhCO1FBREMsS0FBSyxFQUFFOzJEQUNnQjtJQUZiLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixpYUFBMEM7WUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG1CQUFtQixDQUsvQjtJQUFELDBCQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb21vdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvbW90aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25zQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHJvbW90aW9uczogUHJvbW90aW9uW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19