/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, } from '@angular/core';
/** @enum {string} */
const ViewModes = {
    Grid: 'grid',
    List: 'list',
};
export { ViewModes };
export class ProductViewComponent {
    constructor() {
        this.modeChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get buttonClass() {
        return `cx-product-${this.mode}`;
    }
    /**
     * @return {?}
     */
    changeMode() {
        /** @type {?} */
        const newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    }
}
ProductViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-view',
                template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\"><span></span></div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-product-layout{position:var(--cx-position,relative);display:var(--cx-display,inline-block);overflow:var(--cx-overflow,hidden);border-radius:var(--cx-border-radius,4px);border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));max-height:var(--cx-max-height,48px)}.cx-product-layout span{position:var(--cx-position,relative);display:var(--cx-display,inline-block);overflow:var(--cx-overflow,hidden);width:var(--cx-width,20px);height:var(--cx-height,20px)}.cx-product-grid{display:var(--cx-display,inline-block);padding:var(--cx-padding,13px 18px 13px 18px);color:var(--cx-color,var(--cx-g-color-light))}@media (max-width:767.98px){.cx-product-grid{padding:var(--cx-padding,13px 12px 13px 12px)}}.cx-product-grid span{color:var(--cx-color,var(--cx-g-color-inverse));background-color:var(--cx-background-color,var(--cx-g-color-secondary))}.cx-product-grid span:hover{background:var(--cx-background,var(--cx-g-color-primary))}.cx-product-grid span:before{-webkit-transform:rotate(90deg);transform:rotate(90deg);content:'';position:var(--cx-position,absolute);width:var(--cx-width,100%);height:var(--cx-height,2px);top:var(--cx-top,50%);left:var(--cx-left,0);margin:var(--cx-margin,-1px 0 0 0);background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-product-grid span:after{-webkit-transform:rotate(0);transform:rotate(0);content:'';position:var(--cx-position,absolute);width:var(--cx-width,100%);height:var(--cx-height,2px);top:var(--cx-top,50%);left:var(--cx-left,0);margin:var(--cx-margin,-1px 0 0 0);background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-product-list{display:var(--cx-display,inline-block);padding:var(--cx-padding,13px 18px 13px 18px)}@media (max-width:767.98px){.cx-product-list{padding:var(--cx-padding,13px 12px 13px 12px)}}.cx-product-list span{color:var(--cx-color,var(--cx-g-color-secondary))}.cx-product-list span:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-product-list span:before{content:'\\2630';font-size:var(--cx-font-size,25px);bottom:var(--cx-bottom,12px);position:var(--cx-position,relative)}"]
            }] }
];
ProductViewComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProductViewComponent.prototype.mode;
    /** @type {?} */
    ProductViewComponent.prototype.modeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQzs7O0lBR3JCLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTs7O0FBU2YsTUFBTSxPQUFPLG9CQUFvQjtJQU5qQztRQVVFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBVzFDLENBQUM7Ozs7SUFUQyxJQUFJLFdBQVc7UUFDYixPQUFPLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLE9BQU8sR0FDWCxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isc0lBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OzttQkFFRSxLQUFLO3lCQUVMLE1BQU07Ozs7SUFGUCxvQ0FDZ0I7O0lBQ2hCLDBDQUN3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFZpZXdNb2RlcyB7XG4gIEdyaWQgPSAnZ3JpZCcsXG4gIExpc3QgPSAnbGlzdCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbW9kZTogVmlld01vZGVzO1xuICBAT3V0cHV0KClcbiAgbW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCBidXR0b25DbGFzcygpIHtcbiAgICByZXR1cm4gYGN4LXByb2R1Y3QtJHt0aGlzLm1vZGV9YDtcbiAgfVxuXG4gIGNoYW5nZU1vZGUoKSB7XG4gICAgY29uc3QgbmV3TW9kZSA9XG4gICAgICB0aGlzLm1vZGUgPT09IFZpZXdNb2Rlcy5HcmlkID8gVmlld01vZGVzLkxpc3QgOiBWaWV3TW9kZXMuR3JpZDtcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdChuZXdNb2RlKTtcbiAgfVxufVxuIl19