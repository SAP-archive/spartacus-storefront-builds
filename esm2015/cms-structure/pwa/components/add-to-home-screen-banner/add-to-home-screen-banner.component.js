import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
let AddToHomeScreenBannerComponent = class AddToHomeScreenBannerComponent extends AddToHomeScreenComponent {
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
};
AddToHomeScreenBannerComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
AddToHomeScreenBannerComponent = __decorate([
    Component({
        selector: 'cx-add-to-home-screen-banner',
        template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
    })
], AddToHomeScreenBannerComponent);
export { AddToHomeScreenBannerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNM0UsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBK0IsU0FBUSx3QkFBd0I7SUFDMUUsWUFBc0Isc0JBQThDO1FBQ2xFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRFYsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUVwRSxDQUFDO0NBQ0YsQ0FBQTs7WUFIK0Msc0JBQXNCOztBQUR6RCw4QkFBOEI7SUFKMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDhCQUE4QjtRQUN4Qyw0aUJBQXlEO0tBQzFELENBQUM7R0FDVyw4QkFBOEIsQ0FJMUM7U0FKWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuLi9hZGQtdG8taG9tZS1zY3JlZW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkZFRvSG9tZVNjcmVlblNlcnZpY2U6IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UpIHtcbiAgICBzdXBlcihhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTtcbiAgfVxufVxuIl19