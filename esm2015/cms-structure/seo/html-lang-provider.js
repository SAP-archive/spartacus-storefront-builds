/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { WindowRef, LanguageService } from '@spartacus/core';
/** @type {?} */
export const htmlLangProvider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: setHtmlLangAttribute,
    deps: [WindowRef, LanguageService],
};
/**
 * Sets active language in <html lang="">
 * @param {?} winRef
 * @param {?} languageService
 * @return {?}
 */
export function setHtmlLangAttribute(winRef, languageService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => {
        languageService.getActive().subscribe((/**
         * @param {?} lang
         * @return {?}
         */
        lang => {
            winRef.document.documentElement.lang = lang;
        }));
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1sYW5nLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vaHRtbC1sYW5nLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTdELE1BQU0sT0FBTyxnQkFBZ0IsR0FBYTtJQUN4QyxPQUFPLEVBQUUsZUFBZTtJQUN4QixLQUFLLEVBQUUsSUFBSTtJQUNYLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztDQUNuQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsTUFBaUIsRUFDakIsZUFBZ0M7O1VBRTFCLE1BQU07OztJQUFHLEdBQUcsRUFBRTtRQUNsQixlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmLCBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgaHRtbExhbmdQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgbXVsdGk6IHRydWUsXG4gIHVzZUZhY3Rvcnk6IHNldEh0bWxMYW5nQXR0cmlidXRlLFxuICBkZXBzOiBbV2luZG93UmVmLCBMYW5ndWFnZVNlcnZpY2VdLFxufTtcblxuLyoqXG4gKiBTZXRzIGFjdGl2ZSBsYW5ndWFnZSBpbiA8aHRtbCBsYW5nPVwiXCI+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRIdG1sTGFuZ0F0dHJpYnV0ZShcbiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGxhbmd1YWdlU2VydmljZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUobGFuZyA9PiB7XG4gICAgICB3aW5SZWYuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsYW5nO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19