import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
var AddToHomeScreenBannerComponent = /** @class */ (function (_super) {
    __extends(AddToHomeScreenBannerComponent, _super);
    function AddToHomeScreenBannerComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBannerComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    AddToHomeScreenBannerComponent = __decorate([
        Component({
            selector: 'cx-add-to-home-screen-banner',
            template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
        })
    ], AddToHomeScreenBannerComponent);
    return AddToHomeScreenBannerComponent;
}(AddToHomeScreenComponent));
export { AddToHomeScreenBannerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNM0U7SUFBb0Qsa0RBQXdCO0lBQzFFLHdDQUFzQixzQkFBOEM7UUFBcEUsWUFDRSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUM5QjtRQUZxQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUVwRSxDQUFDOztnQkFGNkMsc0JBQXNCOztJQUR6RCw4QkFBOEI7UUFKMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhCQUE4QjtZQUN4Qyw0aUJBQXlEO1NBQzFELENBQUM7T0FDVyw4QkFBOEIsQ0FJMUM7SUFBRCxxQ0FBQztDQUFBLEFBSkQsQ0FBb0Qsd0JBQXdCLEdBSTNFO1NBSlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by1ob21lLXNjcmVlbi1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudCBleHRlbmRzIEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlOiBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKSB7XG4gICAgc3VwZXIoYWRkVG9Ib21lU2NyZWVuU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==