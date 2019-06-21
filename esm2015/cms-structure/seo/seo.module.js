/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRXhELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1VBQ3pDLE1BQU07OztJQUFHLEdBQUcsRUFBRTs7Y0FDWixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDNUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFhRCxNQUFNLE9BQU8sU0FBUzs7O1lBWHJCLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxjQUFjO3dCQUMxQixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW9NZXRhU2VydmljZSB9IGZyb20gJy4vc2VvLW1ldGEuc2VydmljZSc7XG5pbXBvcnQgeyBodG1sTGFuZ1Byb3ZpZGVyIH0gZnJvbSAnLi9odG1sLWxhbmctcHJvdmlkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlb1NlcnZpY2UoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KFNlb01ldGFTZXJ2aWNlKTtcbiAgICBzZXJ2aWNlLmluaXQoKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdFNlb1NlcnZpY2UsXG4gICAgICBkZXBzOiBbSW5qZWN0b3JdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBodG1sTGFuZ1Byb3ZpZGVyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZW9Nb2R1bGUge31cbiJdfQ==