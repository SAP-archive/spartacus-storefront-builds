import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
var AddToHomeScreenBtnComponent = /** @class */ (function (_super) {
    __extends(AddToHomeScreenBtnComponent, _super);
    function AddToHomeScreenBtnComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBtnComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    AddToHomeScreenBtnComponent = __decorate([
        Component({
            selector: 'cx-add-to-home-screen-btn',
            template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"canPrompt$ | async\"></ng-content>\n</span>\n"
        })
    ], AddToHomeScreenBtnComponent);
    return AddToHomeScreenBtnComponent;
}(AddToHomeScreenComponent));
export { AddToHomeScreenBtnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1idG4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNM0U7SUFBaUQsK0NBQXdCO0lBQ3ZFLHFDQUFzQixzQkFBOEM7UUFBcEUsWUFDRSxrQkFBTSxzQkFBc0IsQ0FBQyxTQUM5QjtRQUZxQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUVwRSxDQUFDOztnQkFGNkMsc0JBQXNCOztJQUR6RCwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyw0R0FBc0Q7U0FDdkQsQ0FBQztPQUNXLDJCQUEyQixDQUl2QztJQUFELGtDQUFDO0NBQUEsQUFKRCxDQUFpRCx3QkFBd0IsR0FJeEU7U0FKWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuLi9hZGQtdG8taG9tZS1zY3JlZW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8taG9tZS1zY3JlZW4tYnRuLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50IGV4dGVuZHMgQWRkVG9Ib21lU2NyZWVuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkZFRvSG9tZVNjcmVlblNlcnZpY2U6IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UpIHtcbiAgICBzdXBlcihhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTtcbiAgfVxufVxuIl19