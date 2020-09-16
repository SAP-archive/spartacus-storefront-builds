import { Injectable } from '@angular/core';
import { ConfigInitializerService, LanguageService, WindowRef, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { DirectionMode } from './config/direction.model';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * The `DirectionService` can be used to add the direction to the overall storefront or individual elements.
 * By default, the direction is added to the `html` element (i.e. `<html dir="ltr">`). The API of this service
 * does however provide methods to add direction to individual elements if needed.
 *
 * The direction is configurable and allows for language driven direction configuration.
 *
 * To react to the active language, the service subscribes to the active language in the initialize method. This
 * is called from an APP_INITIALIZER method and should only happen once.
 */
export class DirectionService {
    constructor(configInit, languageService, winRef) {
        this.configInit = configInit;
        this.languageService = languageService;
        this.winRef = winRef;
        this.startsDetecting = false;
        this.subscription = new Subscription();
    }
    /**
     * Initializes the layout direction for the storefront.
     */
    initialize() {
        return this.configInit
            .getStableConfig('direction')
            .then((config) => {
            var _a, _b;
            this.config = config === null || config === void 0 ? void 0 : config.direction;
            if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.detect) {
                this.detect();
            }
            else {
                this.setDirection(this.winRef.document.documentElement, (_b = this.config) === null || _b === void 0 ? void 0 : _b.default);
            }
        });
    }
    /**
     * Observes the _active_ language and set the required direction for the given language.
     * The method is guarded to ensure that the active language is observed only once.
     */
    detect() {
        if (this.startsDetecting) {
            return;
        }
        this.subscription.add(this.languageService
            .getActive()
            .subscribe((isoCode) => this.setDirection(this.winRef.document.documentElement, this.getDirection(isoCode))));
        this.startsDetecting = true;
    }
    /**
     * Sets the direction attribute for the given element. If the direction is undefined, the `dir`
     * attribute is removed.
     */
    setDirection(el, direction) {
        if (direction) {
            el.setAttribute('dir', direction);
        }
        else {
            el.removeAttribute('dir');
        }
    }
    /**
     * Gets the `DirectionMode` for the given language isoCode. The language isoCode is compared
     * to the configured list of languages(`direction.rtlLanguages` vs `direction.ltrLanguages`).
     *
     * If no language is given, or no language mapping could be found, we fallback to the default
     * `direction.mode`.
     */
    getDirection(language) {
        var _a, _b, _c, _d, _e;
        if (language && ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.rtlLanguages) === null || _b === void 0 ? void 0 : _b.includes(language))) {
            return DirectionMode.RTL;
        }
        if (language && ((_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.ltrLanguages) === null || _d === void 0 ? void 0 : _d.includes(language))) {
            return DirectionMode.LTR;
        }
        return (_e = this.config) === null || _e === void 0 ? void 0 : _e.default;
    }
    ngOnDestroy() {
        // Cleans up the subscription, to avoid memory leaks in SSR.
        this.subscription.unsubscribe();
    }
}
DirectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectionService_Factory() { return new DirectionService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.WindowRef)); }, token: DirectionService, providedIn: "root" });
DirectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DirectionService.ctorParameters = () => [
    { type: ConfigInitializerService },
    { type: LanguageService },
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvZGlyZWN0aW9uL2RpcmVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQWEsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUVwRTs7Ozs7Ozs7O0dBU0c7QUFJSCxNQUFNLE9BQU8sZ0JBQWdCO0lBTTNCLFlBQ1ksVUFBb0MsRUFDcEMsZUFBZ0MsRUFDaEMsTUFBaUI7UUFGakIsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXpDLENBQUM7SUFFSjs7T0FFRztJQUNILFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLGVBQWUsQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFOztZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxTQUFTLENBQUM7WUFDaEMsVUFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxRQUNwQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQ3JCLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7T0FHRztJQUNPLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxlQUFlO2FBQ2pCLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQzdCLElBQUksQ0FBQyxZQUFZLENBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUMzQixDQUNGLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsRUFBZSxFQUFFLFNBQXdCO1FBQ3BELElBQUksU0FBUyxFQUFFO1lBQ2IsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxDQUFDLFFBQWlCOztRQUM1QixJQUFJLFFBQVEsaUJBQUksSUFBSSxDQUFDLE1BQU0sMENBQUUsWUFBWSwwQ0FBRSxRQUFRLENBQUMsUUFBUSxFQUFDLEVBQUU7WUFDN0QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxRQUFRLGlCQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLFlBQVksMENBQUUsUUFBUSxDQUFDLFFBQVEsRUFBQyxFQUFFO1lBQzdELE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztTQUMxQjtRQUNELGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXO1FBQ1QsNERBQTREO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztZQXZGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCQyx3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpcmVjdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RpcmVjdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25Nb2RlIH0gZnJvbSAnLi9jb25maWcvZGlyZWN0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYERpcmVjdGlvblNlcnZpY2VgIGNhbiBiZSB1c2VkIHRvIGFkZCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvdmVyYWxsIHN0b3JlZnJvbnQgb3IgaW5kaXZpZHVhbCBlbGVtZW50cy5cbiAqIEJ5IGRlZmF1bHQsIHRoZSBkaXJlY3Rpb24gaXMgYWRkZWQgdG8gdGhlIGBodG1sYCBlbGVtZW50IChpLmUuIGA8aHRtbCBkaXI9XCJsdHJcIj5gKS4gVGhlIEFQSSBvZiB0aGlzIHNlcnZpY2VcbiAqIGRvZXMgaG93ZXZlciBwcm92aWRlIG1ldGhvZHMgdG8gYWRkIGRpcmVjdGlvbiB0byBpbmRpdmlkdWFsIGVsZW1lbnRzIGlmIG5lZWRlZC5cbiAqXG4gKiBUaGUgZGlyZWN0aW9uIGlzIGNvbmZpZ3VyYWJsZSBhbmQgYWxsb3dzIGZvciBsYW5ndWFnZSBkcml2ZW4gZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVG8gcmVhY3QgdG8gdGhlIGFjdGl2ZSBsYW5ndWFnZSwgdGhlIHNlcnZpY2Ugc3Vic2NyaWJlcyB0byB0aGUgYWN0aXZlIGxhbmd1YWdlIGluIHRoZSBpbml0aWFsaXplIG1ldGhvZC4gVGhpc1xuICogaXMgY2FsbGVkIGZyb20gYW4gQVBQX0lOSVRJQUxJWkVSIG1ldGhvZCBhbmQgc2hvdWxkIG9ubHkgaGFwcGVuIG9uY2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogRGlyZWN0aW9uO1xuICBwcm90ZWN0ZWQgc3RhcnRzRGV0ZWN0aW5nID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbGF5b3V0IGRpcmVjdGlvbiBmb3IgdGhlIHN0b3JlZnJvbnQuXG4gICAqL1xuICBpbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ0luaXRcbiAgICAgIC5nZXRTdGFibGVDb25maWcoJ2RpcmVjdGlvbicpXG4gICAgICAudGhlbigoY29uZmlnOiBEaXJlY3Rpb25Db25maWcpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc/LmRpcmVjdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnPy5kZXRlY3QpIHtcbiAgICAgICAgICB0aGlzLmRldGVjdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKFxuICAgICAgICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5jb25maWc/LmRlZmF1bHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgX2FjdGl2ZV8gbGFuZ3VhZ2UgYW5kIHNldCB0aGUgcmVxdWlyZWQgZGlyZWN0aW9uIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UuXG4gICAqIFRoZSBtZXRob2QgaXMgZ3VhcmRlZCB0byBlbnN1cmUgdGhhdCB0aGUgYWN0aXZlIGxhbmd1YWdlIGlzIG9ic2VydmVkIG9ubHkgb25jZS5cbiAgICovXG4gIHByb3RlY3RlZCBkZXRlY3QoKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRzRGV0ZWN0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKChpc29Db2RlOiBzdHJpbmcpID0+XG4gICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oXG4gICAgICAgICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLmdldERpcmVjdGlvbihpc29Db2RlKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5zdGFydHNEZXRlY3RpbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpcmVjdGlvbiBhdHRyaWJ1dGUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiBJZiB0aGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCwgdGhlIGBkaXJgXG4gICAqIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICAgKi9cbiAgc2V0RGlyZWN0aW9uKGVsOiBIVE1MRWxlbWVudCwgZGlyZWN0aW9uOiBEaXJlY3Rpb25Nb2RlKTogdm9pZCB7XG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkaXInLCBkaXJlY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RpcicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBgRGlyZWN0aW9uTW9kZWAgZm9yIHRoZSBnaXZlbiBsYW5ndWFnZSBpc29Db2RlLiBUaGUgbGFuZ3VhZ2UgaXNvQ29kZSBpcyBjb21wYXJlZFxuICAgKiB0byB0aGUgY29uZmlndXJlZCBsaXN0IG9mIGxhbmd1YWdlcyhgZGlyZWN0aW9uLnJ0bExhbmd1YWdlc2AgdnMgYGRpcmVjdGlvbi5sdHJMYW5ndWFnZXNgKS5cbiAgICpcbiAgICogSWYgbm8gbGFuZ3VhZ2UgaXMgZ2l2ZW4sIG9yIG5vIGxhbmd1YWdlIG1hcHBpbmcgY291bGQgYmUgZm91bmQsIHdlIGZhbGxiYWNrIHRvIHRoZSBkZWZhdWx0XG4gICAqIGBkaXJlY3Rpb24ubW9kZWAuXG4gICAqL1xuICBnZXREaXJlY3Rpb24obGFuZ3VhZ2U/OiBzdHJpbmcpOiBEaXJlY3Rpb25Nb2RlIHtcbiAgICBpZiAobGFuZ3VhZ2UgJiYgdGhpcy5jb25maWc/LnJ0bExhbmd1YWdlcz8uaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uTW9kZS5SVEw7XG4gICAgfVxuICAgIGlmIChsYW5ndWFnZSAmJiB0aGlzLmNvbmZpZz8ubHRyTGFuZ3VhZ2VzPy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBEaXJlY3Rpb25Nb2RlLkxUUjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnPy5kZWZhdWx0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gQ2xlYW5zIHVwIHRoZSBzdWJzY3JpcHRpb24sIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyBpbiBTU1IuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19