import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { QualtricsLoaderService } from './qualtrics-loader.service';
var QualtricsComponent = /** @class */ (function () {
    function QualtricsComponent(qualtricsLoader) {
        this.qualtricsLoader = qualtricsLoader;
        this.qualtricsEnabled$ = this.qualtricsLoader.load();
    }
    QualtricsComponent.ctorParameters = function () { return [
        { type: QualtricsLoaderService }
    ]; };
    QualtricsComponent = __decorate([
        Component({
            selector: 'cx-qualtrics',
            template: " <ng-container *ngIf=\"qualtricsEnabled$ | async\"></ng-container> "
        })
    ], QualtricsComponent);
    return QualtricsComponent;
}());
export { QualtricsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNcEU7SUFHRSw0QkFBb0IsZUFBdUM7UUFBdkMsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBRjNELHNCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFYyxDQUFDOztnQkFBMUIsc0JBQXNCOztJQUhoRCxrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHFFQUFtRTtTQUM5RSxDQUFDO09BQ1csa0JBQWtCLENBSTlCO0lBQUQseUJBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFF1YWx0cmljc0xvYWRlclNlcnZpY2UgfSBmcm9tICcuL3F1YWx0cmljcy1sb2FkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXF1YWx0cmljcycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWFsdHJpY3NFbmFibGVkJCB8IGFzeW5jXCI+PC9uZy1jb250YWluZXI+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1YWx0cmljc0NvbXBvbmVudCB7XG4gIHF1YWx0cmljc0VuYWJsZWQkID0gdGhpcy5xdWFsdHJpY3NMb2FkZXIubG9hZCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVhbHRyaWNzTG9hZGVyOiBRdWFsdHJpY3NMb2FkZXJTZXJ2aWNlKSB7fVxufVxuIl19