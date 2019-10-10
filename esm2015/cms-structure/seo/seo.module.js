/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { htmlLangProvider } from './html-lang-provider';
import { SeoMetaService } from './seo-meta.service';
import { StructuredDataModule } from './structured-data/structured-data.module';
/**
 * @param {?} injector
 * @return {?}
 */
export function initSeoService(injector) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const service = injector.get(SeoMetaService);
        service.init();
    });
    return result;
}
export class SeoModule {
}
SeoModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7O0FBRWhGLE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1VBQ3pDLE1BQU07OztJQUFHLEdBQUcsRUFBRTs7Y0FDWixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDNUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFjRCxNQUFNLE9BQU8sU0FBUzs7O1lBWnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsY0FBYzt3QkFDMUIsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaHRtbExhbmdQcm92aWRlciB9IGZyb20gJy4vaHRtbC1sYW5nLXByb3ZpZGVyJztcbmltcG9ydCB7IFNlb01ldGFTZXJ2aWNlIH0gZnJvbSAnLi9zZW8tbWV0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZWREYXRhTW9kdWxlIH0gZnJvbSAnLi9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2VvU2VydmljZShpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBpbmplY3Rvci5nZXQoU2VvTWV0YVNlcnZpY2UpO1xuICAgIHNlcnZpY2UuaW5pdCgpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU3RydWN0dXJlZERhdGFNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0U2VvU2VydmljZSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIGh0bWxMYW5nUHJvdmlkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlb01vZHVsZSB7fVxuIl19