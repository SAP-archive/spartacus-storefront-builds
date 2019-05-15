/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { SeoMetaService } from './seo-meta.service';
import { htmlLangProvider } from './html-lang-provider';
/**
 * @param {?} injector
 * @return {?}
 */
export function initSeoService(injector) {
    /** @type {?} */
    const result = () => {
        /** @type {?} */
        const service = injector.get(SeoMetaService);
        service.init();
    };
    return result;
}
export class SeoModule {
}
SeoModule.decorators = [
    { type: NgModule, args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRXhELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1VBQ3pDLE1BQU0sR0FBRyxHQUFHLEVBQUU7O2NBQ1osT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWFELE1BQU0sT0FBTyxTQUFTOzs7WUFYckIsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsVUFBVSxFQUFFLGNBQWM7d0JBQzFCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0QsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlb01ldGFTZXJ2aWNlIH0gZnJvbSAnLi9zZW8tbWV0YS5zZXJ2aWNlJztcbmltcG9ydCB7IGh0bWxMYW5nUHJvdmlkZXIgfSBmcm9tICcuL2h0bWwtbGFuZy1wcm92aWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2VvU2VydmljZShpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBpbmplY3Rvci5nZXQoU2VvTWV0YVNlcnZpY2UpO1xuICAgIHNlcnZpY2UuaW5pdCgpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0U2VvU2VydmljZSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIGh0bWxMYW5nUHJvdmlkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlb01vZHVsZSB7fVxuIl19