/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { WindowRef, LanguageService } from '@spartacus/core';
/** @type {?} */
export var htmlLangProvider = {
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
    var result = (/**
     * @return {?}
     */
    function () {
        languageService.getActive().subscribe((/**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            winRef.document.documentElement.lang = lang;
        }));
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1sYW5nLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vaHRtbC1sYW5nLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTdELE1BQU0sS0FBTyxnQkFBZ0IsR0FBYTtJQUN4QyxPQUFPLEVBQUUsZUFBZTtJQUN4QixLQUFLLEVBQUUsSUFBSTtJQUNYLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztDQUNuQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsTUFBaUIsRUFDakIsZUFBZ0M7O1FBRTFCLE1BQU07OztJQUFHO1FBQ2IsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDeEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBodG1sTGFuZ1Byb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICBtdWx0aTogdHJ1ZSxcbiAgdXNlRmFjdG9yeTogc2V0SHRtbExhbmdBdHRyaWJ1dGUsXG4gIGRlcHM6IFtXaW5kb3dSZWYsIExhbmd1YWdlU2VydmljZV0sXG59O1xuXG4vKipcbiAqIFNldHMgYWN0aXZlIGxhbmd1YWdlIGluIDxodG1sIGxhbmc9XCJcIj5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEh0bWxMYW5nQXR0cmlidXRlKFxuICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgbGFuZ3VhZ2VTZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZShsYW5nID0+IHtcbiAgICAgIHdpblJlZi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxhbmc7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=