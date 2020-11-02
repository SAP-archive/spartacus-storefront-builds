import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultSeoConfig } from './config';
import { htmlLangProvider } from './html-lang-provider';
import { SeoMetaService } from './seo-meta.service';
import { StructuredDataModule } from './structured-data/structured-data.module';
export function initSeoService(injector) {
    const result = () => {
        const service = injector.get(SeoMetaService);
        service.init();
    };
    return result;
}
export class SeoModule {
}
SeoModule.decorators = [
    { type: NgModule, args: [{
                imports: [StructuredDataModule],
                providers: [
                    provideDefaultConfig(defaultSeoConfig),
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initSeoService,
                        deps: [Injector],
                        multi: true,
                    },
                    htmlLangProvider,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEYsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFrQjtJQUMvQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWVELE1BQU0sT0FBTyxTQUFTOzs7WUFickIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3RDO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsY0FBYzt3QkFDMUIsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFNlb0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGh0bWxMYW5nUHJvdmlkZXIgfSBmcm9tICcuL2h0bWwtbGFuZy1wcm92aWRlcic7XG5pbXBvcnQgeyBTZW9NZXRhU2VydmljZSB9IGZyb20gJy4vc2VvLW1ldGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVkRGF0YU1vZHVsZSB9IGZyb20gJy4vc3RydWN0dXJlZC1kYXRhL3N0cnVjdHVyZWQtZGF0YS5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlb1NlcnZpY2UoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KFNlb01ldGFTZXJ2aWNlKTtcbiAgICBzZXJ2aWNlLmluaXQoKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1N0cnVjdHVyZWREYXRhTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFNlb0NvbmZpZyksXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdFNlb1NlcnZpY2UsXG4gICAgICBkZXBzOiBbSW5qZWN0b3JdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBodG1sTGFuZ1Byb3ZpZGVyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZW9Nb2R1bGUge31cbiJdfQ==