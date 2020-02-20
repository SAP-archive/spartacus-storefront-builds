import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageComponentModule } from '../../cms-structure/page/component/page-component.module';
import { AsmEnablerService } from './services/asm-enabler.service';
/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
let AsmLoaderModule = class AsmLoaderModule {
};
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
export { AsmLoaderModule };
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 */
export function asmFactory(asmEnablerService) {
    const isReady = () => {
        asmEnablerService.load();
    };
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVuRTs7O0dBR0c7QUFZSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBWDNCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztRQUM1QyxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLElBQUksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QixLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csZUFBZSxDQUFHO1NBQWxCLGVBQWU7QUFFNUI7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLGlCQUFvQztJQUM3RCxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDbkIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9wYWdlLWNvbXBvbmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtRW5hYmxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FzbS1lbmFibGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBBU00gbG9hZGVyIG1vZHVsZSB0YWtlcyBjYXJlIG9mIGxvYWRpbmcgdGhlIEFTTSBVSVxuICogb25seSBpbiBjYXNlIHRoZXJlJ3MgYSByZWFzb24gdG8gZG8gc28uXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBhZ2VDb21wb25lbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBhc21GYWN0b3J5LFxuICAgICAgZGVwczogW0FzbUVuYWJsZXJTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbUxvYWRlck1vZHVsZSB7fVxuXG4vKipcbiAqXG4gKiBXZSBkbyBub3QgbGlrZSB0byBibG9jayB0aGUgVUksIHdoaWNoIGlzIHdoeSB3ZSBkZWxnYXRlIGxvYWRpbmcgb2YgQVNNXG4gKiB0byBhIHJlYWwgY29tcG9uZW50OyB0aGUgcm91dGVyIGFuZCBzdGF0ZSBhcmVuJ3QgYXZhaWxhYmxlIGluIGFuIG9wdGltaXplZFxuICogd2F5IGR1cmluZyB0aGUgQVBQX0lOSVRJQUxJWkVSLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNtRmFjdG9yeShhc21FbmFibGVyU2VydmljZTogQXNtRW5hYmxlclNlcnZpY2UpIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICBhc21FbmFibGVyU2VydmljZS5sb2FkKCk7XG4gIH07XG4gIHJldHVybiBpc1JlYWR5O1xufVxuIl19