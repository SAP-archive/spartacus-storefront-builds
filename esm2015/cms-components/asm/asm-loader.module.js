/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageComponentModule } from '../../cms-structure/index';
import { AsmEnablerService } from './services/asm-enabler.service';
/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
export class AsmLoaderModule {
}
AsmLoaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PageComponentModule],
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        useFactory: asmFactory,
                        deps: [AsmEnablerService],
                        multi: true,
                    },
                ],
            },] }
];
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 * @param {?} asmEnablerService
 * @return {?}
 */
export function asmFactory(asmEnablerService) {
    /** @type {?} */
    const isReady = (/**
     * @return {?}
     */
    () => {
        asmEnablerService.load();
    });
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFpQm5FLE1BQU0sT0FBTyxlQUFlOzs7WUFYM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztnQkFDNUMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsVUFBVTt3QkFDdEIsSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBQ3pCLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsVUFBVSxDQUFDLGlCQUFvQzs7VUFDdkQsT0FBTzs7O0lBQUcsR0FBRyxFQUFFO1FBQ25CLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUMsQ0FBQTtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgQXNtRW5hYmxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FzbS1lbmFibGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBBU00gbG9hZGVyIG1vZHVsZSB0YWtlcyBjYXJlIG9mIGxvYWRpbmcgdGhlIEFTTSBVSVxuICogb25seSBpbiBjYXNlIHRoZXJlJ3MgYSByZWFzb24gdG8gZG8gc28uXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBhZ2VDb21wb25lbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBhc21GYWN0b3J5LFxuICAgICAgZGVwczogW0FzbUVuYWJsZXJTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbUxvYWRlck1vZHVsZSB7fVxuXG4vKipcbiAqXG4gKiBXZSBkbyBub3QgbGlrZSB0byBibG9jayB0aGUgVUksIHdoaWNoIGlzIHdoeSB3ZSBkZWxnYXRlIGxvYWRpbmcgb2YgQVNNXG4gKiB0byBhIHJlYWwgY29tcG9uZW50OyB0aGUgcm91dGVyIGFuZCBzdGF0ZSBhcmVuJ3QgYXZhaWxhYmxlIGluIGFuIG9wdGltaXplZFxuICogd2F5IGR1cmluZyB0aGUgQVBQX0lOSVRJQUxJWkVSLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNtRmFjdG9yeShhc21FbmFibGVyU2VydmljZTogQXNtRW5hYmxlclNlcnZpY2UpIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICBhc21FbmFibGVyU2VydmljZS5sb2FkKCk7XG4gIH07XG4gIHJldHVybiBpc1JlYWR5O1xufVxuIl19