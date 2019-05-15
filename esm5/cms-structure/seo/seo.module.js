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
    var result = function () {
        /** @type {?} */
        var service = injector.get(SeoMetaService);
        service.init();
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRXhELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1FBQ3pDLE1BQU0sR0FBRzs7WUFDUCxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDNUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQVd3QixDQUFDOztnQkFYeEIsUUFBUSxTQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGNBQWM7NEJBQzFCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDaEIsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsZ0JBQWdCO3FCQUNqQjtpQkFDRjs7SUFDdUIsZ0JBQUM7Q0FBQSxBQVh6QixJQVd5QjtTQUFaLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VvTWV0YVNlcnZpY2UgfSBmcm9tICcuL3Nlby1tZXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgaHRtbExhbmdQcm92aWRlciB9IGZyb20gJy4vaHRtbC1sYW5nLXByb3ZpZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTZW9TZXJ2aWNlKGluamVjdG9yOiBJbmplY3Rvcikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IGluamVjdG9yLmdldChTZW9NZXRhU2VydmljZSk7XG4gICAgc2VydmljZS5pbml0KCk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRTZW9TZXJ2aWNlLFxuICAgICAgZGVwczogW0luamVjdG9yXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgaHRtbExhbmdQcm92aWRlcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VvTW9kdWxlIHt9XG4iXX0=