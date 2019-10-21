/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { QualtricsLoaderService } from './qualtrics-loader.service';
export class QualtricsComponent {
    /**
     * @param {?} qualtricsLoader
     */
    constructor(qualtricsLoader) {
        this.qualtricsLoader = qualtricsLoader;
        this.qualtricsEnabled$ = this.qualtricsLoader.load();
    }
}
QualtricsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-qualtrics',
                template: `
    <ng-container *ngIf="qualtricsEnabled$ | async"></ng-container>
  `
            }] }
];
/** @nocollapse */
QualtricsComponent.ctorParameters = () => [
    { type: QualtricsLoaderService }
];
if (false) {
    /** @type {?} */
    QualtricsComponent.prototype.qualtricsEnabled$;
    /**
     * @type {?}
     * @private
     */
    QualtricsComponent.prototype.qualtricsLoader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFRcEUsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUc3QixZQUFvQixlQUF1QztRQUF2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFGM0Qsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVjLENBQUM7OztZQVRoRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBUFEsc0JBQXNCOzs7O0lBUzdCLCtDQUFnRDs7Ozs7SUFFcEMsNkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRdWFsdHJpY3NMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9xdWFsdHJpY3MtbG9hZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1xdWFsdHJpY3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWFsdHJpY3NFbmFibGVkJCB8IGFzeW5jXCI+PC9uZy1jb250YWluZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1YWx0cmljc0NvbXBvbmVudCB7XG4gIHF1YWx0cmljc0VuYWJsZWQkID0gdGhpcy5xdWFsdHJpY3NMb2FkZXIubG9hZCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVhbHRyaWNzTG9hZGVyOiBRdWFsdHJpY3NMb2FkZXJTZXJ2aWNlKSB7fVxufVxuIl19