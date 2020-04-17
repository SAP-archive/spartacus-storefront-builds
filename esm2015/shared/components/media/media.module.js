var MediaModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { MediaComponent } from './media.component';
import { MediaConfig } from './media.config';
let MediaModule = MediaModule_1 = class MediaModule {
    static forRoot() {
        return {
            ngModule: MediaModule_1,
            providers: [
                {
                    provide: MediaConfig,
                    useExisting: Config,
                },
            ],
        };
    }
};
MediaModule = MediaModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [MediaComponent],
        exports: [MediaComponent],
    })
], MediaModule);
export { MediaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsV0FBVyxFQUFFLE1BQU07aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFaWSxXQUFXO0lBTHZCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzFCLENBQUM7R0FDVyxXQUFXLENBWXZCO1NBWlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE1lZGlhQ29tcG9uZW50IH0gZnJvbSAnLi9tZWRpYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVkaWFDb25maWcgfSBmcm9tICcuL21lZGlhLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNZWRpYUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNZWRpYUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNZWRpYU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWVkaWFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE1lZGlhQ29uZmlnLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDb25maWcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==