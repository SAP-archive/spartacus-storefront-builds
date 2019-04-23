/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SiteContextComponentService } from './site-context-component.service';
var SiteContextSelectorComponent = /** @class */ (function () {
    function SiteContextSelectorComponent(componentService) {
        this.componentService = componentService;
    }
    Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.items$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.activeItem$;
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
            this.componentService.active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.label$;
        },
        enumerable: true,
        configurable: true
    });
    SiteContextSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-site-context-selector',
                    template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    >\n  </select>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SiteContextSelectorComponent.ctorParameters = function () { return [
        { type: SiteContextComponentService }
    ]; };
    return SiteContextSelectorComponent;
}());
export { SiteContextSelectorComponent };
if (false) {
    /** @type {?} */
    SiteContextSelectorComponent.prototype.siteContextService;
    /**
     * @type {?}
     * @private
     */
    SiteContextSelectorComponent.prototype.componentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3NpdGUtY29udGV4dC1zZWxlY3Rvci9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9FO0lBU0Usc0NBQW9CLGdCQUE2QztRQUE3QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO0lBQUcsQ0FBQztJQUVyRSxzQkFBSSxnREFBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFNOzs7OztRQUFWLFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMscVlBQXFEO29CQUVyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVJRLDJCQUEyQjs7SUE2QnBDLG1DQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FwQlksNEJBQTRCOzs7SUFDdkMsMERBQXFDOzs7OztJQUV6Qix3REFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNpdGUtY29udGV4dC1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQge1xuICBzaXRlQ29udGV4dFNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRTZXJ2aWNlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgZ2V0IGl0ZW1zJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuaXRlbXMkO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZUl0ZW0kKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U2VydmljZS5hY3RpdmVJdGVtJDtcbiAgfVxuXG4gIHNldCBhY3RpdmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29tcG9uZW50U2VydmljZS5hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBsYWJlbCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTZXJ2aWNlLmxhYmVsJDtcbiAgfVxufVxuIl19