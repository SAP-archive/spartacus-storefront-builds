/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    PromotionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-promotions',
                    template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <strong *ngFor=\"let promotion of promotions\">\n    {{ promotion.description }}\n  </strong>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PromotionsComponent.ctorParameters = function () { return []; };
    PromotionsComponent.propDecorators = {
        promotions: [{ type: Input }]
    };
    return PromotionsComponent;
}());
export { PromotionsComponent };
if (false) {
    /** @type {?} */
    PromotionsComponent.prototype.promotions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFFO0lBU0U7SUFBZSxDQUFDOztnQkFUakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5S0FBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7Ozs7NkJBRUUsS0FBSzs7SUFJUiwwQkFBQztDQUFBLEFBVkQsSUFVQztTQUxZLG1CQUFtQjs7O0lBQzlCLHlDQUN3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9tb3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb21vdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHByb21vdGlvbnM6IFByb21vdGlvbltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==