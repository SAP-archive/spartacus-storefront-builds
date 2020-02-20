import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageComponentModule } from '../../cms-structure/page/component/page-component.module';
import { AsmEnablerService } from './services/asm-enabler.service';
/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
var AsmLoaderModule = /** @class */ (function () {
    function AsmLoaderModule() {
    }
    AsmLoaderModule = __decorate([
        NgModule({
            imports: [CommonModule, PageComponentModule],
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: asmFactory,
                    deps: [AsmEnablerService],
                    multi: true,
                },
            ],
        })
    ], AsmLoaderModule);
    return AsmLoaderModule;
}());
export { AsmLoaderModule };
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 */
export function asmFactory(asmEnablerService) {
    var isReady = function () {
        asmEnablerService.load();
    };
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVuRTs7O0dBR0c7QUFZSDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQVgzQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7WUFDNUMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsVUFBVTtvQkFDdEIsSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ3pCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixlQUFlO0FBRTVCOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxpQkFBb0M7SUFDN0QsSUFBTSxPQUFPLEdBQUc7UUFDZCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3BhZ2UtY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBBc21FbmFibGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXNtLWVuYWJsZXIuc2VydmljZSc7XG5cbi8qKlxuICogVGhlIEFTTSBsb2FkZXIgbW9kdWxlIHRha2VzIGNhcmUgb2YgbG9hZGluZyB0aGUgQVNNIFVJXG4gKiBvbmx5IGluIGNhc2UgdGhlcmUncyBhIHJlYXNvbiB0byBkbyBzby5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGFnZUNvbXBvbmVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGFzbUZhY3RvcnksXG4gICAgICBkZXBzOiBbQXNtRW5hYmxlclNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTG9hZGVyTW9kdWxlIHt9XG5cbi8qKlxuICpcbiAqIFdlIGRvIG5vdCBsaWtlIHRvIGJsb2NrIHRoZSBVSSwgd2hpY2ggaXMgd2h5IHdlIGRlbGdhdGUgbG9hZGluZyBvZiBBU01cbiAqIHRvIGEgcmVhbCBjb21wb25lbnQ7IHRoZSByb3V0ZXIgYW5kIHN0YXRlIGFyZW4ndCBhdmFpbGFibGUgaW4gYW4gb3B0aW1pemVkXG4gKiB3YXkgZHVyaW5nIHRoZSBBUFBfSU5JVElBTElaRVIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc21GYWN0b3J5KGFzbUVuYWJsZXJTZXJ2aWNlOiBBc21FbmFibGVyU2VydmljZSkge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIGFzbUVuYWJsZXJTZXJ2aWNlLmxvYWQoKTtcbiAgfTtcbiAgcmV0dXJuIGlzUmVhZHk7XG59XG4iXX0=