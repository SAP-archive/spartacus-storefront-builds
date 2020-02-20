import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from '../add-to-home-screen.component';
let AddToHomeScreenBtnComponent = class AddToHomeScreenBtnComponent extends AddToHomeScreenComponent {
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
};
AddToHomeScreenBtnComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
AddToHomeScreenBtnComponent = __decorate([
    Component({
        selector: 'cx-add-to-home-screen-btn',
        template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"canPrompt$ | async\"></ng-content>\n</span>\n"
    })
], AddToHomeScreenBtnComponent);
export { AddToHomeScreenBtnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1idG4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNM0UsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBNEIsU0FBUSx3QkFBd0I7SUFDdkUsWUFBc0Isc0JBQThDO1FBQ2xFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRFYsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUVwRSxDQUFDO0NBQ0YsQ0FBQTs7WUFIK0Msc0JBQXNCOztBQUR6RCwyQkFBMkI7SUFKdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyw0R0FBc0Q7S0FDdkQsQ0FBQztHQUNXLDJCQUEyQixDQUl2QztTQUpZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4uL2FkZC10by1ob21lLXNjcmVlbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGQtdG8taG9tZS1zY3JlZW4tYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQgZXh0ZW5kcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSkge1xuICAgIHN1cGVyKGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpO1xuICB9XG59XG4iXX0=