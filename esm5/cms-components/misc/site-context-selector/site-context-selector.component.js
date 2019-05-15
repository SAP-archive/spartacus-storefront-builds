/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPES } from '../icon/icon.model';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextType } from './site-context.model';
var SiteContextSelectorComponent = /** @class */ (function () {
    function SiteContextSelectorComponent(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPES;
    }
    Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.getItems(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.getActiveItem(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "active", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.componentService.setActive(value, this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.getLabel(this.context);
        },
        enumerable: true,
        configurable: true
    });
    SiteContextSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-site-context-selector',
                    template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SiteContextSelectorComponent.ctorParameters = function () { return [
        { type: SiteContextComponentService }
    ]; };
    SiteContextSelectorComponent.propDecorators = {
        context: [{ type: Input }]
    };
    return SiteContextSelectorComponent;
}());
export { SiteContextSelectorComponent };
if (false) {
    /** @type {?} */
    SiteContextSelectorComponent.prototype.siteContextService;
    /** @type {?} */
    SiteContextSelectorComponent.prototype.iconTypes;
    /**
     * the context type can be set as an input. If the context is
     * not given, the context will be loaded from the backend.
     * @type {?}
     */
    SiteContextSelectorComponent.prototype.context;
    /**
     * @type {?}
     * @private
     */
    SiteContextSelectorComponent.prototype.componentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQ7SUFjRSxzQ0FBb0IsZ0JBQTZDO1FBQTdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFQakUsY0FBUyxHQUFHLFVBQVUsQ0FBQztJQU82QyxDQUFDO0lBRXJFLHNCQUFJLGdEQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnREFBTTs7Ozs7UUFBVixVQUFXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMseWNBQXFEO29CQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUFEsMkJBQTJCOzs7MEJBZWpDLEtBQUs7O0lBbUJSLG1DQUFDO0NBQUEsQUEvQkQsSUErQkM7U0ExQlksNEJBQTRCOzs7SUFDdkMsMERBQXFDOztJQUNyQyxpREFBdUI7Ozs7OztJQUt2QiwrQ0FBa0M7Ozs7O0lBRXRCLHdEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VHlwZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2l0ZS1jb250ZXh0LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IHtcbiAgc2l0ZUNvbnRleHRTZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+O1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEVTO1xuICAvKipcbiAgICogdGhlIGNvbnRleHQgdHlwZSBjYW4gYmUgc2V0IGFzIGFuIGlucHV0LiBJZiB0aGUgY29udGV4dCBpc1xuICAgKiBub3QgZ2l2ZW4sIHRoZSBjb250ZXh0IHdpbGwgYmUgbG9hZGVkIGZyb20gdGhlIGJhY2tlbmQuXG4gICAqL1xuICBASW5wdXQoKSBjb250ZXh0OiBTaXRlQ29udGV4dFR5cGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRTZXJ2aWNlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgZ2V0IGl0ZW1zJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuZ2V0SXRlbXModGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBhY3RpdmVJdGVtJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuZ2V0QWN0aXZlSXRlbSh0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb21wb25lbnRTZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBsYWJlbCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTZXJ2aWNlLmdldExhYmVsKHRoaXMuY29udGV4dCk7XG4gIH1cbn1cbiJdfQ==