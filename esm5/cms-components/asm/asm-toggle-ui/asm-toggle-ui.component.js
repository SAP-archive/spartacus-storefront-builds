import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { AsmService } from '@spartacus/core';
import { Subscription } from 'rxjs';
var AsmToggleUiComponent = /** @class */ (function () {
    function AsmToggleUiComponent(asmService) {
        this.asmService = asmService;
        this.subscription = new Subscription();
    }
    AsmToggleUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.asmService.getAsmUiState().subscribe(function (uiState) {
            _this.isCollapsed = uiState.collapsed;
        }));
    };
    AsmToggleUiComponent.prototype.toggleUi = function () {
        this.asmService.updateAsmUiState({ collapsed: !this.isCollapsed });
    };
    AsmToggleUiComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AsmToggleUiComponent.ctorParameters = function () { return [
        { type: AsmService }
    ]; };
    AsmToggleUiComponent = __decorate([
        Component({
            selector: 'cx-asm-toggle-ui',
            template: "<a class=\"toggleUi\" (click)=\"toggleUi()\">\n  <span [ngClass]=\"!isCollapsed ? 'collapseIcon' : 'expandIcon'\"></span>\n  <span *ngIf=\"!isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.collapse' | cxTranslate }}\n  </span>\n  <span *ngIf=\"isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.expand' | cxTranslate }}\n  </span>\n</a>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-asm-toggle-ui{cursor:pointer;display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-toggle-ui .toggleUi{display:inherit;align-items:inherit}cx-asm-toggle-ui .toggleUi .label{margin-left:5px}@media (max-width:575px){cx-asm-toggle-ui .toggleUi .label{display:none}}cx-asm-toggle-ui .toggleUi .collapseIcon,cx-asm-toggle-ui .toggleUi .expandIcon{width:16px;height:16px}cx-asm-toggle-ui .toggleUi .collapseIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-up' class='svg-inline--fa fa-chevron-circle-up fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z'%3E%3C/path%3E%3C/svg%3E\") center center no-repeat}cx-asm-toggle-ui .toggleUi .expandIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-down' class='svg-inline--fa fa-chevron-circle-down fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z'%3E%3C/path%3E%3C/svg%3E\") center center no-repeat}"]
        })
    ], AsmToggleUiComponent);
    return AsmToggleUiComponent;
}());
export { AsmToggleUiComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLXRvZ2dsZS11aS9hc20tdG9nZ2xlLXVpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRcEM7SUFJRSw4QkFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHSyxDQUFDO0lBRWhELHVDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDaEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBaEJpQyxVQUFVOztJQUpqQyxvQkFBb0I7UUFOaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixvV0FBNkM7WUFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxvQkFBb0IsQ0FxQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXJCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXNtU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYXNtLXRvZ2dsZS11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc20tdG9nZ2xlLXVpLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Ub2dnbGVVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuYXNtU2VydmljZS5nZXRBc21VaVN0YXRlKCkuc3Vic2NyaWJlKCh1aVN0YXRlKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB1aVN0YXRlLmNvbGxhcHNlZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZVVpKCk6IHZvaWQge1xuICAgIHRoaXMuYXNtU2VydmljZS51cGRhdGVBc21VaVN0YXRlKHsgY29sbGFwc2VkOiAhdGhpcy5pc0NvbGxhcHNlZCB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==