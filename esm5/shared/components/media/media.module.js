import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { MediaComponent } from './media.component';
import { MediaConfig } from './media.config';
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule_1 = MediaModule;
    MediaModule.forRoot = function () {
        return {
            ngModule: MediaModule_1,
            providers: [
                {
                    provide: MediaConfig,
                    useExisting: Config,
                },
            ],
        };
    };
    var MediaModule_1;
    MediaModule = MediaModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [MediaComponent],
            exports: [MediaComponent],
        })
    ], MediaModule);
    return MediaModule;
}());
export { MediaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0M7SUFBQTtJQVlBLENBQUM7b0JBWlksV0FBVztJQUNmLG1CQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVhVLFdBQVc7UUFMdkIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDMUIsQ0FBQztPQUNXLFdBQVcsQ0FZdkI7SUFBRCxrQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNZWRpYUNvbXBvbmVudCB9IGZyb20gJy4vbWVkaWEuY29tcG9uZW50JztcbmltcG9ydCB7IE1lZGlhQ29uZmlnIH0gZnJvbSAnLi9tZWRpYS5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWVkaWFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWVkaWFDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWVkaWFNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1lZGlhTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNZWRpYUNvbmZpZyxcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=