/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    var result = function () {
        languageService.getActive().subscribe(function (lang) {
            winRef.document.documentElement.lang = lang;
        });
    };
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1sYW5nLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vaHRtbC1sYW5nLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTdELE1BQU0sS0FBTyxnQkFBZ0IsR0FBYTtJQUN4QyxPQUFPLEVBQUUsZUFBZTtJQUN4QixLQUFLLEVBQUUsSUFBSTtJQUNYLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztDQUNuQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsTUFBaUIsRUFDakIsZUFBZ0M7O1FBRTFCLE1BQU0sR0FBRztRQUNiLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGh0bWxMYW5nUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gIG11bHRpOiB0cnVlLFxuICB1c2VGYWN0b3J5OiBzZXRIdG1sTGFuZ0F0dHJpYnV0ZSxcbiAgZGVwczogW1dpbmRvd1JlZiwgTGFuZ3VhZ2VTZXJ2aWNlXSxcbn07XG5cbi8qKlxuICogU2V0cyBhY3RpdmUgbGFuZ3VhZ2UgaW4gPGh0bWwgbGFuZz1cIlwiPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SHRtbExhbmdBdHRyaWJ1dGUoXG4gIHdpblJlZjogV2luZG93UmVmLFxuICBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBsYW5ndWFnZVNlcnZpY2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKGxhbmcgPT4ge1xuICAgICAgd2luUmVmLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGFuZztcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==