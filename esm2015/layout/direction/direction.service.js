import { __decorate } from "tslib";
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
let DirectionService = class DirectionService {
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
};
DirectionService.ctorParameters = () => [
    { type: ConfigInitializerService },
    { type: LanguageService },
    { type: WindowRef }
];
DirectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectionService_Factory() { return new DirectionService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.WindowRef)); }, token: DirectionService, providedIn: "root" });
DirectionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DirectionService);
export { DirectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvZGlyZWN0aW9uL2RpcmVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFhLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFFcEU7Ozs7Ozs7OztHQVNHO0FBSUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFNM0IsWUFDWSxVQUFvQyxFQUNwQyxlQUFnQyxFQUNoQyxNQUFpQjtRQUZqQixlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVBuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNekMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDbkIsZUFBZSxDQUFDLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7O1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsQ0FBQztZQUNoQyxVQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLFFBQ3BDLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FDckIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sTUFBTTtRQUNkLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGVBQWU7YUFDakIsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FDN0IsSUFBSSxDQUFDLFlBQVksQ0FDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQzNCLENBQ0YsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksQ0FBQyxFQUFlLEVBQUUsU0FBd0I7UUFDcEQsSUFBSSxTQUFTLEVBQUU7WUFDYixFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxZQUFZLENBQUMsUUFBaUI7O1FBQzVCLElBQUksUUFBUSxpQkFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxZQUFZLDBDQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUMsRUFBRTtZQUM3RCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7U0FDMUI7UUFDRCxJQUFJLFFBQVEsaUJBQUksSUFBSSxDQUFDLE1BQU0sMENBQUUsWUFBWSwwQ0FBRSxRQUFRLENBQUMsUUFBUSxFQUFDLEVBQUU7WUFDN0QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDVCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7WUE5RXlCLHdCQUF3QjtZQUNuQixlQUFlO1lBQ3hCLFNBQVM7OztBQVRsQixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQXFGNUI7U0FyRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kaXJlY3Rpb24uY29uZmlnJztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uTW9kZSB9IGZyb20gJy4vY29uZmlnL2RpcmVjdGlvbi5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBEaXJlY3Rpb25TZXJ2aWNlYCBjYW4gYmUgdXNlZCB0byBhZGQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3ZlcmFsbCBzdG9yZWZyb250IG9yIGluZGl2aWR1YWwgZWxlbWVudHMuXG4gKiBCeSBkZWZhdWx0LCB0aGUgZGlyZWN0aW9uIGlzIGFkZGVkIHRvIHRoZSBgaHRtbGAgZWxlbWVudCAoaS5lLiBgPGh0bWwgZGlyPVwibHRyXCI+YCkuIFRoZSBBUEkgb2YgdGhpcyBzZXJ2aWNlXG4gKiBkb2VzIGhvd2V2ZXIgcHJvdmlkZSBtZXRob2RzIHRvIGFkZCBkaXJlY3Rpb24gdG8gaW5kaXZpZHVhbCBlbGVtZW50cyBpZiBuZWVkZWQuXG4gKlxuICogVGhlIGRpcmVjdGlvbiBpcyBjb25maWd1cmFibGUgYW5kIGFsbG93cyBmb3IgbGFuZ3VhZ2UgZHJpdmVuIGRpcmVjdGlvbiBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRvIHJlYWN0IHRvIHRoZSBhY3RpdmUgbGFuZ3VhZ2UsIHRoZSBzZXJ2aWNlIHN1YnNjcmliZXMgdG8gdGhlIGFjdGl2ZSBsYW5ndWFnZSBpbiB0aGUgaW5pdGlhbGl6ZSBtZXRob2QuIFRoaXNcbiAqIGlzIGNhbGxlZCBmcm9tIGFuIEFQUF9JTklUSUFMSVpFUiBtZXRob2QgYW5kIHNob3VsZCBvbmx5IGhhcHBlbiBvbmNlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBjb25maWc6IERpcmVjdGlvbjtcbiAgcHJvdGVjdGVkIHN0YXJ0c0RldGVjdGluZyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGxheW91dCBkaXJlY3Rpb24gZm9yIHRoZSBzdG9yZWZyb250LlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdJbml0XG4gICAgICAuZ2V0U3RhYmxlQ29uZmlnKCdkaXJlY3Rpb24nKVxuICAgICAgLnRoZW4oKGNvbmZpZzogRGlyZWN0aW9uQ29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnPy5kaXJlY3Rpb247XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZz8uZGV0ZWN0KSB7XG4gICAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldERpcmVjdGlvbihcbiAgICAgICAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnPy5kZWZhdWx0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIF9hY3RpdmVfIGxhbmd1YWdlIGFuZCBzZXQgdGhlIHJlcXVpcmVkIGRpcmVjdGlvbiBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlLlxuICAgKiBUaGUgbWV0aG9kIGlzIGd1YXJkZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGFjdGl2ZSBsYW5ndWFnZSBpcyBvYnNlcnZlZCBvbmx5IG9uY2UuXG4gICAqL1xuICBwcm90ZWN0ZWQgZGV0ZWN0KCkge1xuICAgIGlmICh0aGlzLnN0YXJ0c0RldGVjdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSgoaXNvQ29kZTogc3RyaW5nKSA9PlxuICAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKFxuICAgICAgICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oaXNvQ29kZSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xuICAgIHRoaXMuc3RhcnRzRGV0ZWN0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXJlY3Rpb24gYXR0cmlidXRlIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC4gSWYgdGhlIGRpcmVjdGlvbiBpcyB1bmRlZmluZWQsIHRoZSBgZGlyYFxuICAgKiBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAgICovXG4gIHNldERpcmVjdGlvbihlbDogSFRNTEVsZW1lbnQsIGRpcmVjdGlvbjogRGlyZWN0aW9uTW9kZSk6IHZvaWQge1xuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGlyJywgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkaXInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYERpcmVjdGlvbk1vZGVgIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaXNvQ29kZS4gVGhlIGxhbmd1YWdlIGlzb0NvZGUgaXMgY29tcGFyZWRcbiAgICogdG8gdGhlIGNvbmZpZ3VyZWQgbGlzdCBvZiBsYW5ndWFnZXMoYGRpcmVjdGlvbi5ydGxMYW5ndWFnZXNgIHZzIGBkaXJlY3Rpb24ubHRyTGFuZ3VhZ2VzYCkuXG4gICAqXG4gICAqIElmIG5vIGxhbmd1YWdlIGlzIGdpdmVuLCBvciBubyBsYW5ndWFnZSBtYXBwaW5nIGNvdWxkIGJlIGZvdW5kLCB3ZSBmYWxsYmFjayB0byB0aGUgZGVmYXVsdFxuICAgKiBgZGlyZWN0aW9uLm1vZGVgLlxuICAgKi9cbiAgZ2V0RGlyZWN0aW9uKGxhbmd1YWdlPzogc3RyaW5nKTogRGlyZWN0aW9uTW9kZSB7XG4gICAgaWYgKGxhbmd1YWdlICYmIHRoaXMuY29uZmlnPy5ydGxMYW5ndWFnZXM/LmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIERpcmVjdGlvbk1vZGUuUlRMO1xuICAgIH1cbiAgICBpZiAobGFuZ3VhZ2UgJiYgdGhpcy5jb25maWc/Lmx0ckxhbmd1YWdlcz8uaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uTW9kZS5MVFI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpZz8uZGVmYXVsdDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIENsZWFucyB1cCB0aGUgc3Vic2NyaXB0aW9uLCB0byBhdm9pZCBtZW1vcnkgbGVha3MgaW4gU1NSLlxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==