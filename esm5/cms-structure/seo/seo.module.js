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
    return SeoModule;
}());
export { SeoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7O0FBRWhGLE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7O1FBQ3pDLE1BQU07OztJQUFHOztZQUNQLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUM1QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUFZd0IsQ0FBQzs7Z0JBWnhCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDL0IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsY0FBYzs0QkFDMUIsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNoQixLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOztJQUN1QixnQkFBQztDQUFBLEFBWnpCLElBWXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBodG1sTGFuZ1Byb3ZpZGVyIH0gZnJvbSAnLi9odG1sLWxhbmctcHJvdmlkZXInO1xuaW1wb3J0IHsgU2VvTWV0YVNlcnZpY2UgfSBmcm9tICcuL3Nlby1tZXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlZERhdGFNb2R1bGUgfSBmcm9tICcuL3N0cnVjdHVyZWQtZGF0YS9zdHJ1Y3R1cmVkLWRhdGEubW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTZW9TZXJ2aWNlKGluamVjdG9yOiBJbmplY3Rvcikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IGluamVjdG9yLmdldChTZW9NZXRhU2VydmljZSk7XG4gICAgc2VydmljZS5pbml0KCk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTdHJ1Y3R1cmVkRGF0YU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRTZW9TZXJ2aWNlLFxuICAgICAgZGVwczogW0luamVjdG9yXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgaHRtbExhbmdQcm92aWRlcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VvTW9kdWxlIHt9XG4iXX0=