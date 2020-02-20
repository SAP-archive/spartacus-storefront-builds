import { __decorate } from "tslib";
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { htmlLangProvider } from './html-lang-provider';
import { SeoMetaService } from './seo-meta.service';
import { StructuredDataModule } from './structured-data/structured-data.module';
export function initSeoService(injector) {
    var result = function () {
        var service = injector.get(SeoMetaService);
        service.init();
    };
    return result;
}
var SeoModule = /** @class */ (function () {
    function SeoModule() {
    }
    SeoModule = __decorate([
        NgModule({
            imports: [StructuredDataModule],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: initSeoService,
                    deps: [Injector],
                    multi: true,
                },
                htmlLangProvider,
            ],
        })
    ], SeoModule);
    return SeoModule;
}());
export { SeoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEYsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFrQjtJQUMvQyxJQUFNLE1BQU0sR0FBRztRQUNiLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFjRDtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBWnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLGNBQWM7b0JBQzFCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGh0bWxMYW5nUHJvdmlkZXIgfSBmcm9tICcuL2h0bWwtbGFuZy1wcm92aWRlcic7XG5pbXBvcnQgeyBTZW9NZXRhU2VydmljZSB9IGZyb20gJy4vc2VvLW1ldGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVkRGF0YU1vZHVsZSB9IGZyb20gJy4vc3RydWN0dXJlZC1kYXRhL3N0cnVjdHVyZWQtZGF0YS5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlb1NlcnZpY2UoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KFNlb01ldGFTZXJ2aWNlKTtcbiAgICBzZXJ2aWNlLmluaXQoKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1N0cnVjdHVyZWREYXRhTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdFNlb1NlcnZpY2UsXG4gICAgICBkZXBzOiBbSW5qZWN0b3JdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBodG1sTGFuZ1Byb3ZpZGVyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZW9Nb2R1bGUge31cbiJdfQ==