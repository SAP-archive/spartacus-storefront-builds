/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.showMenu = false;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
            this.subscription = this.router.events.subscribe(function () {
                _this.toggleMenu();
            });
        }
        else {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-header',
                    template: "<header class=\"cx-header\">\n  <button\n    class=\"cx-hamburger\"\n    type=\"button\"\n    (click)=\"toggleMenu()\"\n    [class.is-active]=\"showMenu\"\n    [attr.aria-expanded]=\"showMenu\"\n    aria-label=\"Menu\"\n    aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n  >\n    <span class=\"hamburger-box\"> <span class=\"hamburger-inner\"></span> </span>\n  </button>\n  <cx-header-skipper></cx-header-skipper>\n\n  <cx-page-slot position=\"SiteContext\"></cx-page-slot>\n  <cx-page-slot position=\"SiteLinks\"></cx-page-slot>\n  <cx-page-slot position=\"SiteLogo\"></cx-page-slot>\n  <cx-page-slot position=\"SearchBox\"></cx-page-slot>\n  <cx-login class=\"SiteLogin\"></cx-login>\n  <cx-page-slot position=\"MiniCart\"></cx-page-slot>\n  <cx-page-slot position=\"NavigationBar\"></cx-page-slot>\n</header>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{background-color:var(--cx-background-color,var(--cx-g-color-dark));color:var(--cx-color,var(--cx-g-color-inverse));display:block}header{max-width:var(--cx-max-width,1140px);margin:auto;display:flex;flex-wrap:wrap}header>*{-ms-grid-row-align:center;align-self:center}.SiteContext,.SiteLinks{font-size:var(--cx-g-font-small,.75rem);color:var(--cx-color,var(--cx-g-color-light))}.SiteLinks{--cx-display:block}.SiteLogo{--cx-width:95px}.SearchBox{margin:.5rem auto}.NavigationBar{flex:100%}.cx-hamburger{display:block}@media (max-width:575.98px){.SearchBox{margin:0 0 0 auto}}@media (max-width:991.98px){.NavigationBar,.SiteContext,.SiteLinks,.SiteLogin{flex:100%}.NavigationBar,.SiteLogin{order:1}.SiteContext,.SiteLinks{order:2}.SiteContext,.SiteLinks,.SiteLogin{background-color:var(--cx-background-color,var(--cx-g-color-background));color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,.25rem 0)}.SiteContext{padding:.5rem 1rem .25rem}.SiteLinks{padding:.25rem 1rem .5rem}:host:not(.mobile-nav) .NavigationBar,:host:not(.mobile-nav) .SiteContext,:host:not(.mobile-nav) .SiteLinks,:host:not(.mobile-nav) .SiteLogin{display:none}}@media (min-width:992px){header{padding:0 1rem}.cx-hamburger{display:none}.SiteContext,.SiteLinks{flex:50%;display:flex;--cx-margin:0.5rem 8px}.SiteContext.has-components:before,.SiteLinks.has-components:before{border-top:var(--cx-border-top,1px solid currentColor);content:'';position:absolute;right:0;left:0;margin-top:30px}.SiteLinks{justify-content:flex-end;--cx-padding:0 0.5rem}.SiteLogin{padding:.5rem 1rem}}"]
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    HeaderComponent.propDecorators = {
        showMenu: [{ type: HostBinding, args: ['class.mobile-nav',] }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.subscription;
    /** @type {?} */
    HeaderComponent.prototype.showMenu;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QztJQVVFLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZELGFBQVEsR0FBRyxLQUFLLENBQUM7SUFFYixDQUFDOzs7O0lBRXRDLG9DQUFVOzs7SUFBVjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDYyQkFBc0M7O2lCQUV2Qzs7OztnQkFQUSxNQUFNOzs7MkJBV1osV0FBVyxTQUFDLGtCQUFrQjs7SUFvQmpDLHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2QlksZUFBZTs7Ozs7O0lBQzFCLHVDQUFtQzs7SUFFbkMsbUNBQWtEOzs7OztJQUV0QyxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9iaWxlLW5hdicpIHNob3dNZW51ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd01lbnUgPSAhdGhpcy5zaG93TWVudTtcbiAgICBpZiAodGhpcy5zaG93TWVudSkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=