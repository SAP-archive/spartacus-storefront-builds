/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AddToHomeScreenService } from '../../services/add-to-home-screen.service';
import { AddToHomeScreenComponent } from './../add-to-home-screen.component';
export class AddToHomeScreenBtnComponent extends AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
}
AddToHomeScreenBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-home-screen-btn',
                template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"(canPrompt$ | async)\"></ng-content>\n</span>\n"
            }] }
];
/** @nocollapse */
AddToHomeScreenBtnComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenBtnComponent.prototype.addToHomeScreenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvcHdhL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi9hZGQtdG8taG9tZS1zY3JlZW4tYnRuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU03RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsd0JBQXdCOzs7O0lBQ3ZFLFlBQXNCLHNCQUE4QztRQUNsRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQURWLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFcEUsQ0FBQzs7O1lBUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLDhHQUFzRDthQUN2RDs7OztZQU5RLHNCQUFzQjs7Ozs7OztJQVFqQiw2REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuLy4uL2FkZC10by1ob21lLXNjcmVlbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGQtdG8taG9tZS1zY3JlZW4tYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQgZXh0ZW5kcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSkge1xuICAgIHN1cGVyKGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpO1xuICB9XG59XG4iXX0=