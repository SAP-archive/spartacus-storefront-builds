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
        template: `
    <ng-container *ngIf="qualtricsEnabled$ | async"></ng-container>
  `
    })
], QualtricsComponent);
export { QualtricsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFRcEUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFHN0IsWUFBb0IsZUFBdUM7UUFBdkMsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBRjNELHNCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFYyxDQUFDO0NBQ2hFLENBQUE7O1lBRHNDLHNCQUFzQjs7QUFIaEQsa0JBQWtCO0lBTjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7R0FFVDtLQUNGLENBQUM7R0FDVyxrQkFBa0IsQ0FJOUI7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFF1YWx0cmljc0xvYWRlclNlcnZpY2UgfSBmcm9tICcuL3F1YWx0cmljcy1sb2FkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXF1YWx0cmljcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1YWx0cmljc0VuYWJsZWQkIHwgYXN5bmNcIj48L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzQ29tcG9uZW50IHtcbiAgcXVhbHRyaWNzRW5hYmxlZCQgPSB0aGlzLnF1YWx0cmljc0xvYWRlci5sb2FkKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWFsdHJpY3NMb2FkZXI6IFF1YWx0cmljc0xvYWRlclNlcnZpY2UpIHt9XG59XG4iXX0=