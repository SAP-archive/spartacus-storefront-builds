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
export class PwaModule {
}
PwaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ServiceWorkerModule.register('ngsw-worker.js'),
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixHQUN0QixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDNUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHNCQUFzQixFQUFtQixNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRS9FLE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsU0FBMEI7SUFFMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN2RSxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxzQkFBc0I7SUFDL0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7SUFDNUMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXlCRCxNQUFNLE9BQU8sU0FBUzs7O1lBdkJyQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO29CQUM5QyxVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDNUM7d0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsVUFBVSxFQUFFLHVCQUF1Qjt3QkFDbkMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUNmO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsVUFBVTt3QkFDdEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQzlCLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO2dCQUMzRSxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSw4QkFBOEIsQ0FBQzthQUN2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIGlzRGV2TW9kZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNlcnZpY2VXb3JrZXJNb2R1bGUsXG4gIFN3UmVnaXN0cmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHsgQ29uZmlnLCBJMThuTW9kdWxlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi9hZGQtdG8taG9tZS1zY3JlZW4tYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0UFdBTW9kdWxlQ29uZmlnLCBQV0FNb2R1bGVDb25maWcgfSBmcm9tICcuL3B3YS5tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBwd2FDb25maWc6IFBXQU1vZHVsZUNvbmZpZ1xuKTogU3dSZWdpc3RyYXRpb25PcHRpb25zIHtcbiAgcmV0dXJuIHsgZW5hYmxlZDogKCFpc0Rldk1vZGUoKSAmJiBwd2FDb25maWcucHdhLmVuYWJsZWQpIHx8IGZhbHNlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwd2FGYWN0b3J5KGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNlcnZpY2VXb3JrZXJNb2R1bGUucmVnaXN0ZXIoJ25nc3ctd29ya2VyLmpzJyksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFBXQU1vZHVsZUNvbmZpZyksXG4gICAge1xuICAgICAgcHJvdmlkZTogU3dSZWdpc3RyYXRpb25PcHRpb25zLFxuICAgICAgdXNlRmFjdG9yeTogcHdhQ29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29uZmlnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUZhY3RvcnksXG4gICAgICBkZXBzOiBbQWRkVG9Ib21lU2NyZWVuU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7fVxuIl19