import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { QualtricsLoaderService } from './qualtrics-loader.service';
let QualtricsComponent = class QualtricsComponent {
    constructor(qualtricsLoader) {
        this.qualtricsLoader = qualtricsLoader;
        this.qualtricsEnabled$ = this.qualtricsLoader.load();
    }
};
QualtricsComponent.ctorParameters = () => [
    { type: QualtricsLoaderService }
];
QualtricsComponent = __decorate([
    Component({
        selector: 'cx-qualtrics',
        template: ` <ng-container *ngIf="qualtricsEnabled$ | async"></ng-container> `
    })
], QualtricsComponent);
export { QualtricsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNcEUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFHN0IsWUFBb0IsZUFBdUM7UUFBdkMsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBRjNELHNCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFYyxDQUFDO0NBQ2hFLENBQUE7O1lBRHNDLHNCQUFzQjs7QUFIaEQsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxtRUFBbUU7S0FDOUUsQ0FBQztHQUNXLGtCQUFrQixDQUk5QjtTQUpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUXVhbHRyaWNzTG9hZGVyU2VydmljZSB9IGZyb20gJy4vcXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcXVhbHRyaWNzJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1YWx0cmljc0VuYWJsZWQkIHwgYXN5bmNcIj48L25nLWNvbnRhaW5lcj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzQ29tcG9uZW50IHtcbiAgcXVhbHRyaWNzRW5hYmxlZCQgPSB0aGlzLnF1YWx0cmljc0xvYWRlci5sb2FkKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWFsdHJpY3NMb2FkZXI6IFF1YWx0cmljc0xvYWRlclNlcnZpY2UpIHt9XG59XG4iXX0=