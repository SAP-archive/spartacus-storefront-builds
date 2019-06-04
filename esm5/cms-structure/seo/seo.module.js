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
    var result = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var service = injector.get(SeoMetaService);
        service.init();
    });
    return result;
}
var SeoModule = /** @class */ (function () {
    function SeoModule() {
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
    return SeoModule;
}());
export { SeoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRXhELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1FBQ3pDLE1BQU07OztJQUFHOztZQUNQLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUM1QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUFXd0IsQ0FBQzs7Z0JBWHhCLFFBQVEsU0FBQztvQkFDUixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxjQUFjOzRCQUMxQixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ2hCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNELGdCQUFnQjtxQkFDakI7aUJBQ0Y7O0lBQ3VCLGdCQUFDO0NBQUEsQUFYekIsSUFXeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlb01ldGFTZXJ2aWNlIH0gZnJvbSAnLi9zZW8tbWV0YS5zZXJ2aWNlJztcbmltcG9ydCB7IGh0bWxMYW5nUHJvdmlkZXIgfSBmcm9tICcuL2h0bWwtbGFuZy1wcm92aWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2VvU2VydmljZShpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBpbmplY3Rvci5nZXQoU2VvTWV0YVNlcnZpY2UpO1xuICAgIHNlcnZpY2UuaW5pdCgpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0U2VvU2VydmljZSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIGh0bWxMYW5nUHJvdmlkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlb01vZHVsZSB7fVxuIl19