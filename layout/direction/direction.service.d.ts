import { OnDestroy } from '@angular/core';
import { ConfigInitializerService, LanguageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { Direction, DirectionMode } from './config/direction.model';
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
import * as ɵngcc0 from '@angular/core';
export declare class DirectionService implements OnDestroy {
    protected configInit: ConfigInitializerService;
    protected languageService: LanguageService;
    protected winRef: WindowRef;
    protected config: Direction;
    protected startsDetecting: boolean;
    protected subscription: Subscription;
    constructor(configInit: ConfigInitializerService, languageService: LanguageService, winRef: WindowRef);
    /**
     * Initializes the layout direction for the storefront.
     */
    initialize(): Promise<void>;
    /**
     * Observes the _active_ language and set the required direction for the given language.
     * The method is guarded to ensure that the active language is observed only once.
     */
    protected detect(): void;
    /**
     * Sets the direction attribute for the given element. If the direction is undefined, the `dir`
     * attribute is removed.
     */
    setDirection(el: HTMLElement, direction: DirectionMode): void;
    /**
     * Gets the `DirectionMode` for the given language isoCode. The language isoCode is compared
     * to the configured list of languages(`direction.rtlLanguages` vs `direction.ltrLanguages`).
     *
     * If no language is given, or no language mapping could be found, we fallback to the default
     * `direction.mode`.
     */
    getDirection(language?: string): DirectionMode;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DirectionService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZGlyZWN0aW9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25Nb2RlIH0gZnJvbSAnLi9jb25maWcvZGlyZWN0aW9uLm1vZGVsJztcbi8qKlxuICogVGhlIGBEaXJlY3Rpb25TZXJ2aWNlYCBjYW4gYmUgdXNlZCB0byBhZGQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3ZlcmFsbCBzdG9yZWZyb250IG9yIGluZGl2aWR1YWwgZWxlbWVudHMuXG4gKiBCeSBkZWZhdWx0LCB0aGUgZGlyZWN0aW9uIGlzIGFkZGVkIHRvIHRoZSBgaHRtbGAgZWxlbWVudCAoaS5lLiBgPGh0bWwgZGlyPVwibHRyXCI+YCkuIFRoZSBBUEkgb2YgdGhpcyBzZXJ2aWNlXG4gKiBkb2VzIGhvd2V2ZXIgcHJvdmlkZSBtZXRob2RzIHRvIGFkZCBkaXJlY3Rpb24gdG8gaW5kaXZpZHVhbCBlbGVtZW50cyBpZiBuZWVkZWQuXG4gKlxuICogVGhlIGRpcmVjdGlvbiBpcyBjb25maWd1cmFibGUgYW5kIGFsbG93cyBmb3IgbGFuZ3VhZ2UgZHJpdmVuIGRpcmVjdGlvbiBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRvIHJlYWN0IHRvIHRoZSBhY3RpdmUgbGFuZ3VhZ2UsIHRoZSBzZXJ2aWNlIHN1YnNjcmliZXMgdG8gdGhlIGFjdGl2ZSBsYW5ndWFnZSBpbiB0aGUgaW5pdGlhbGl6ZSBtZXRob2QuIFRoaXNcbiAqIGlzIGNhbGxlZCBmcm9tIGFuIEFQUF9JTklUSUFMSVpFUiBtZXRob2QgYW5kIHNob3VsZCBvbmx5IGhhcHBlbiBvbmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXJlY3Rpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRGlyZWN0aW9uO1xuICAgIHByb3RlY3RlZCBzdGFydHNEZXRlY3Rpbmc6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSwgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsIHdpblJlZjogV2luZG93UmVmKTtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbGF5b3V0IGRpcmVjdGlvbiBmb3IgdGhlIHN0b3JlZnJvbnQuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmVzIHRoZSBfYWN0aXZlXyBsYW5ndWFnZSBhbmQgc2V0IHRoZSByZXF1aXJlZCBkaXJlY3Rpb24gZm9yIHRoZSBnaXZlbiBsYW5ndWFnZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGd1YXJkZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGFjdGl2ZSBsYW5ndWFnZSBpcyBvYnNlcnZlZCBvbmx5IG9uY2UuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRldGVjdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRpcmVjdGlvbiBhdHRyaWJ1dGUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiBJZiB0aGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCwgdGhlIGBkaXJgXG4gICAgICogYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgc2V0RGlyZWN0aW9uKGVsOiBIVE1MRWxlbWVudCwgZGlyZWN0aW9uOiBEaXJlY3Rpb25Nb2RlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgRGlyZWN0aW9uTW9kZWAgZm9yIHRoZSBnaXZlbiBsYW5ndWFnZSBpc29Db2RlLiBUaGUgbGFuZ3VhZ2UgaXNvQ29kZSBpcyBjb21wYXJlZFxuICAgICAqIHRvIHRoZSBjb25maWd1cmVkIGxpc3Qgb2YgbGFuZ3VhZ2VzKGBkaXJlY3Rpb24ucnRsTGFuZ3VhZ2VzYCB2cyBgZGlyZWN0aW9uLmx0ckxhbmd1YWdlc2ApLlxuICAgICAqXG4gICAgICogSWYgbm8gbGFuZ3VhZ2UgaXMgZ2l2ZW4sIG9yIG5vIGxhbmd1YWdlIG1hcHBpbmcgY291bGQgYmUgZm91bmQsIHdlIGZhbGxiYWNrIHRvIHRoZSBkZWZhdWx0XG4gICAgICogYGRpcmVjdGlvbi5tb2RlYC5cbiAgICAgKi9cbiAgICBnZXREaXJlY3Rpb24obGFuZ3VhZ2U/OiBzdHJpbmcpOiBEaXJlY3Rpb25Nb2RlO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=