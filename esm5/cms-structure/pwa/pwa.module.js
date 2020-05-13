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
    var result = function () { return addToHomeScreenService; };
    return result;
}
var PwaModule = /** @class */ (function () {
    function PwaModule() {
    }
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
    return PwaModule;
}());
export { PwaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQkFBc0IsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUvRSxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFNBQTBCO0lBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7QUFDdkUsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsc0JBQXNCO0lBQy9DLElBQU0sTUFBTSxHQUFHLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQztJQUM1QyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBeUJEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF2QnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0MsVUFBVTthQUNYO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO2dCQUM1QztvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixVQUFVLEVBQUUsdUJBQXVCO29CQUNuQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDOUIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO1lBQzNFLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO1NBQ3ZFLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIGlzRGV2TW9kZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNlcnZpY2VXb3JrZXJNb2R1bGUsXG4gIFN3UmVnaXN0cmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHsgQ29uZmlnLCBJMThuTW9kdWxlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi9hZGQtdG8taG9tZS1zY3JlZW4tYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0UFdBTW9kdWxlQ29uZmlnLCBQV0FNb2R1bGVDb25maWcgfSBmcm9tICcuL3B3YS5tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBwd2FDb25maWc6IFBXQU1vZHVsZUNvbmZpZ1xuKTogU3dSZWdpc3RyYXRpb25PcHRpb25zIHtcbiAgcmV0dXJuIHsgZW5hYmxlZDogKCFpc0Rldk1vZGUoKSAmJiBwd2FDb25maWcucHdhLmVuYWJsZWQpIHx8IGZhbHNlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwd2FGYWN0b3J5KGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNlcnZpY2VXb3JrZXJNb2R1bGUucmVnaXN0ZXIoJy9uZ3N3LXdvcmtlci5qcycpLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRQV0FNb2R1bGVDb25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFN3UmVnaXN0cmF0aW9uT3B0aW9ucyxcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgZGVwczogW0NvbmZpZ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBwd2FGYWN0b3J5LFxuICAgICAgZGVwczogW0FkZFRvSG9tZVNjcmVlblNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50LCBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50LCBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQd2FNb2R1bGUge31cbiJdfQ==