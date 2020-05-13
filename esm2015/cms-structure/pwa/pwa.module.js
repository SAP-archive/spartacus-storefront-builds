import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { ServiceWorkerModule, SwRegistrationOptions, } from '@angular/service-worker';
import { Config, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { AddToHomeScreenBannerComponent } from './components/add-to-home-screen-banner/add-to-home-screen-banner.component';
import { AddToHomeScreenBtnComponent } from './components/add-to-home-screen-btn/add-to-home-screen-btn.component';
import { defaultPWAModuleConfig } from './pwa.module-config';
import { AddToHomeScreenService } from './services/add-to-home-screen.service';
export function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (!isDevMode() && pwaConfig.pwa.enabled) || false };
}
export function pwaFactory(addToHomeScreenService) {
    const result = () => addToHomeScreenService;
    return result;
}
let PwaModule = class PwaModule {
};
PwaModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ServiceWorkerModule.register('/ngsw-worker.js'),
            I18nModule,
        ],
        providers: [
            provideDefaultConfig(defaultPWAModuleConfig),
            {
                provide: SwRegistrationOptions,
                useFactory: pwaConfigurationFactory,
                deps: [Config],
            },
            {
                provide: APP_INITIALIZER,
                useFactory: pwaFactory,
                deps: [AddToHomeScreenService],
                multi: true,
            },
        ],
        declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
        exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
    })
], PwaModule);
export { PwaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQkFBc0IsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUvRSxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFNBQTBCO0lBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7QUFDdkUsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsc0JBQXNCO0lBQy9DLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQzVDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUF5QkQsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQUFHLENBQUE7QUFBWixTQUFTO0lBdkJyQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osbUJBQW1CLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQy9DLFVBQVU7U0FDWDtRQUNELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO1lBQzVDO2dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFVBQVUsRUFBRSx1QkFBdUI7Z0JBQ25DLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNmO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDOUIsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO1FBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7UUFDM0UsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7S0FDdkUsQ0FBQztHQUNXLFNBQVMsQ0FBRztTQUFaLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBpc0Rldk1vZGUsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTZXJ2aWNlV29ya2VyTW9kdWxlLFxuICBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMsXG59IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IENvbmZpZywgSTE4bk1vZHVsZSwgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1idG4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFBXQU1vZHVsZUNvbmZpZywgUFdBTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9wd2EubW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwd2FDb25maWd1cmF0aW9uRmFjdG9yeShcbiAgcHdhQ29uZmlnOiBQV0FNb2R1bGVDb25maWdcbik6IFN3UmVnaXN0cmF0aW9uT3B0aW9ucyB7XG4gIHJldHVybiB7IGVuYWJsZWQ6ICghaXNEZXZNb2RlKCkgJiYgcHdhQ29uZmlnLnB3YS5lbmFibGVkKSB8fCBmYWxzZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHdhRmFjdG9yeShhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTogYW55IHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYWRkVG9Ib21lU2NyZWVuU2VydmljZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZXJ2aWNlV29ya2VyTW9kdWxlLnJlZ2lzdGVyKCcvbmdzdy13b3JrZXIuanMnKSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0UFdBTW9kdWxlQ29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMsXG4gICAgICB1c2VGYWN0b3J5OiBwd2FDb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtDb25maWddLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogcHdhRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHdhTW9kdWxlIHt9XG4iXX0=