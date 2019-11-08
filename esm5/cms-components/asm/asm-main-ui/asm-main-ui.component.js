/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AsmService, AuthService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AsmComponentService } from '../services/asm-component.service';
var AsmMainUiComponent = /** @class */ (function () {
    function AsmMainUiComponent(authService, userService, asmService, asmComponentService, globalMessageService, routingService) {
        this.authService = authService;
        this.userService = userService;
        this.asmService = asmService;
        this.asmComponentService = asmComponentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.startingCustomerSession = false;
    }
    /**
     * @return {?}
     */
    AsmMainUiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.csAgentToken$ = this.authService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.authService.getCustomerSupportAgentTokenLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token && !!token.access_token) {
                _this.handleCustomerSessionStartRedirection(token);
                return _this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
    };
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    AsmMainUiComponent.prototype.handleCustomerSessionStartRedirection = /**
     * @private
     * @param {?} token
     * @return {?}
     */
    function (token) {
        if (this.startingCustomerSession &&
            this.authService.isCustomerEmulationToken(token)) {
            this.startingCustomerSession = false;
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this.routingService.go('/');
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    AsmMainUiComponent.prototype.loginCustomerSupportAgent = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var userId = _a.userId, password = _a.password;
        this.authService.authorizeCustomerSupporAgent(userId, password);
    };
    /**
     * @return {?}
     */
    AsmMainUiComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    AsmMainUiComponent.prototype.startCustomerEmulationSession = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var customerId = _a.customerId;
        this.authService
            .getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} customerSupportAgentToken
         * @return {?}
         */
        function (customerSupportAgentToken) {
            return _this.authService.startCustomerEmulationSession(customerSupportAgentToken, customerId);
        }))
            .unsubscribe();
        this.startingCustomerSession = true;
    };
    /**
     * @return {?}
     */
    AsmMainUiComponent.prototype.hideUi = /**
     * @return {?}
     */
    function () {
        this.asmService.updateAsmUiState({ visible: false });
    };
    AsmMainUiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-asm-main-ui',
                    template: "<div class=\"fd-shellbar\">\n  <div class=\"fd-shellbar__group fd-shellbar__group--start\">\n    <a href=\"#\" class=\"fd-shellbar__logo\"\n      ><img\n        src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAAAXNSR0IArs4c6QAAD7RJREFUeAHtW3twVGcVP7t795V30rwJBBJeASq01NJgnZa2otTW2nHAqrRak+rUKfgYZ/xDW5lRR2e0/mGtAadqq6WjUAdNa4udqVZaEdtCKQ2FQEh5JSQh5Lnvp7/ft9lkd9l7swkhwMiZ3N27937fd8533ufcG9P1L/VE5SpMOwdMmk0iocDzWjAUnnbk/9cITSYx2xwS9Xs3Wzs7NmqhcOT/mh/Tunkw32SzScjr2Vy2v3XDa5tWhbRI5KoHmi4hmGx2ifi8mz8UmvHI9k2VyvVokasWMC38N8HtRHyezUejex5pXbdu1O9r5qsCuLgCUD4fmu/1bq5sbd9wdNMY84lYM10VwMUTAJlvtUnU491c0XZc+fxUZFo0Mn4QjiJMMFREcKJG4xxrC/7ETCQ854+JAtbBny5Mak3d1ab3BsKtCrhhuJ2K9lNpmU+KYAHpWRAFa4K4x7t5NouU5WhS4rRIvt0idotJ3MGIDPgj0usNSZ8vLMOBiIQhJQukoZkpHGOJcGXLiPD0WBNStOmvQ8ETAjp7iN0d++RelBLhBFsAnVQe/fXHZk7wDEuarXaJBrxNFe2nNzLb0VsBMWA0HoyO8WNDDnDxIzOy5ONzcuX6MqdU5VhxLZlYWoUvFJEud0iODQZkb5dXHa19PnEFw2LDBi0QRqqac14BBPnz2yul0GEZxZt68vzhQXm6pS+Gl9xLANL4uUWFsm5hPmiIjiPu2EQqSY8nJCeHAnK4zy+tOLrdQXXTClqVLFLwJKDM7BSLmMD8iN/btCRn3obtm+adz+CElTTlW0YuEDe1qR6M//oNJXJDRVbC0PNPqYFZVrPUFNjU8bHqHGUF3NxLx4ZkZ/uQdLnOF34Acad+To6srDRe/7ML8+T5Q/3KEpNFD5lijVKnWa4tdpxPWIZXeiGM/3S65Y/vD8hbnR6lLBdkEdR8DZrv9zUtyT+wYfu6+YbMJ5mjQZjMZ1H20HXF8s0VZWKjjU4C6IIWgyk8PlqVLY0vnhDGkMTVNJjA3bV5464+t9AhS4vtsqfDBWuiKY0Bk4dIhq5nbFbyWXGWJnfPzZc1NRT0gDy+p1uG/WHlmpJHZvALG6TmR/2epoOFBzccTEg1jWabTXBBpkhYgoGQNCy9Rr6zsnzSzE9ERKZvazknAX9IzFhf4QGuMFofNXmarKjMThye9pwWtqYmV6Jwc2R4fI3Rb/qyKQDGgvsWF8ovVlcJSEOPJsaTUTzkkdGBRMZstorA7SwqXLRBMmQ+STczC/IHwnA3TvlGfdkUbCe2xBsnhmVna79YTQi3YB7x8AhA0LfPzpNsW7JG6yG+BWOLHWYJgwHxNUa/KeUphPqZOfKt+nKlJIk0j+Ib2UPyb8QfMD/q8zYV9/Ru3L7ONK7bSSTZHIUZm6FJDdeXIrsZnynMdBh4jfbuR1B8YnenhBCIVZZFV4GDuLLh2j4xLz+RBsPzylyrspYAlIRrJB1TZAGJBHxmUZFcV5YFRUmDLxU/fpP5aC80Fff1GWY7iTgSzzWa26wCu6yA9I3g7VPDsu1Ar3zQ75MAGEwNLnBoUgtfv2JmriybkSM5SFcJO1p65Z3Tw2JnPgqtiUMIgluGsXUlzviljL7vnF8gLx86h7UShnNdIy3A0NeODcrrHwwqn56LrKv2GtA6K0+K4Pv1wAoF+STw7T05lBy4kibQ8lhkMdvxNZUMD06K+VxSC0NLawtto8xLwjPyYx+Y2bCtVVwjAYrpGvdOBXzlcFSeguVUF9rlzroiuXlOgfzmv2fEwgFwG4kQhitag80xUE8EbgLTZsISOgb9Y3MhzPEE8NapIdmyu0McyNRIDjOcmVC2x1ZXy621BbokLK/KEZQ8CPLJ9I9OwDpm9POR7fzqYPXyjTJBtzO6Dk4QH8MosPQ1goND4DSDNFCKDT4dHk99O8xRRSjKaTnR65Ff7jolX37ufTnT78UYBE1oafygT2Uhd9vcwkT8GZ3noVa4tSY/5tIS1jQBrxFYIWdkqurIAkMdoL2jzyvf/1u7dA8HdKdW5FmlCHEnFozH9qASAfDCYtLYz2+qe7P9gphPAhADEBipTQZwIzTwJ3fVSmm2VTy+kARgNeyiqkDFbzDFooQioh7w4PfovZFxDL7U5Mp8W1pMrLppYXqwBtbFuJ2MF2ptAFEwK4kO0MWkoGPAK/s7hnVnMhZmw30m4eI+aEZgPtzOr+pqTmzYvj25saa7oMENiDIq3UN+gyGxW5+6tkRurM6XHe/2yIstZ6XtrEcJTgOxTOPoluIVbypb+JvK+slF1+jiae/1yuvH+qVx5Yy0Y66tzJX5xVnScsYlrFpZA5AfRkCGcVwEljoKoDOMaz5UxXqgIQ7Aa6lxo1Mxj3l+OOD73eEFKze2rKvX1xa9hdNcx1aicqjLJb0ufZOMzyvPs8nDH62SPzculWceWAJmVUkNAlsAgdwFywhCS0LQstTDz0BfZJebEB/0YM8HA7Jjf7eqpNONYWF4x4JC8QVDav0g8LCvYwS8z3GJ9NDaEY9lfql+Fc4kg/sJJ8wNm20S9nu3+sKBr12Iz0+l10wtOQ2fTa3OFBjUbpqdL9/9xBz5y1eXyVNfWCy0EA0bc6Pw4oZJfPzwwWXdPr9IcrhzHdjV1icHod20LD1YXVes1qCgufZ4AmDKTOFTQUgDafPg+PwNFbIAqaYeuOEKe90B5XIUHgseIwa9W/3RYOPxTat8evMmc121o+m/m/51QlaBSdVFE0sRnVaLmse5LZ0ueeK14/IShKk6nbQvCDiLqd3iYl36uuAC950cFK8/KK9DEAvK0lfJc0uyZHlVrvzzyLmY+xnHAvIg8CpYrQM0ZiGAVF+TJXdDUe6+ttSwC9ra7ZJ+eASVraG3A5+/1VLqbmjfeOf4vlp3l+lvQAAoxHDvNLKDh7e+J1vWf0hmogczGVhSmSNbPr9EnvnPafnB344iINP8o3Lj7AJZDB+uB3va+6V70KcC+T9bz0nDyplpny8wzty1pFRePXQ2IwE8WD9DPgdtN2EiBWBFvMoEXnm/V/xwddnOLHY1n9OGfQ1tP5x65pMW1PgIRjiYYew/MSj3bdkrfz/YkwmdumO+WF8lP753IVLQqEod74LWscDRg1cP9ap+jxWMOgBL6BjQt/JVC4qkIgfv1JBurG8E1PyCLKvkI83OlPknoYgvvtslDjzDDQe8W8H8L7c9cXGYT9qRa2ETPJAZ2OEyTvS65StPvysP//6AvH18wGh/hvfWLq+QtcvLhW5g9aIS3bH96Mf/tw09IygAApL0DvlkdxuqXh0oy7PLzaglmNbGzEBn4CQuM2b86IUjctYFrxD0bTU5LI0Xk/kk0RxhMEs4GCbplnbs7ZC1T74lX9jytvzpzQ45Y6CVentdf1OVrIHLmGkQV/a098mpc24xgfmKDmj2Ky3GFnjX0jIIi3pjbAF6dKW7zjrksR2Hpfm9PtEi/q3RLG3KA246vBrdRCrQWTjgL1kJ/gPM4FGe75Dl8OV3LC6VW5CNVBSMHycWVuTKN1fXpi6f9Jsuh81Atq0JVIAPetwyhEedeToV+sraIvSgnOhank+7WmSCH0eRhv8Ymr8TzwSQ7zxr7rc9dPzxqc129Egy1Xz9paRd8Eeqt+Y1lVNjwzwvRz/l08tnyCNgbhH88YUAU8O2brd0IhX24zlzCVzMbGQ7FLDR06nvbTsodvitR++tmxT6QU9QDqEafuGdTmned0b6fSaxg/mRwa6Hjj/9oH4QmhQ2/UnnWQALFWYbDFpxQfCb+QMrRAqgH02xJ3celdOIF5sbl+NhRHykPiK9O9l2TZbOyleH3ph019fADe05qh8rOOeNw72y+0gv6I7thSnxOaSXp895YGUelfmxTnA4nGKPBrfCrTW2P/3glKea6eiPX9Ms8P9xYMq4/iOzlAvY09qrLttIfDr+QiLtnUMqflM40w3LqgtQNxh3A954v0cebz4szpE2OWnkXpiWMsdnC8XuQLaDgBs1WxoudsBNxyNYQEwAZP6c0hx5dO0SVUTthGlu//cJOXC8X4bx8JouSAkCJsAZOXgW8NAdtcoq0i18sa9lA//NC/WLO+Jnzygbb3Kkvs2haIMgzKhwI0g1oxbrJWE+6dAs9CmAIPzvA7fORsESaxfcc2OVfOrDVXKsa1gOnhyQDrSbB1Ce0y+XoVBbsaBEFs3M/MlWDMvUfjoSNDvdyrRM7i++x8QxJjI/6Hs2rFkveqqZiDf1XFkAU7B55Tny6fpZSfep8XORyfC4IoEtWFp4BBsZAb4wpv45Iuh/1uvvY8CdVp8fpyP+rbH4iSIQrV81B2kfnuxPA/AlgJ9tf0/KUR8sqi6U8kInyn6rCvpMAs6hGDuJVHQ/CrL7bquRuZXjv8KSjmy0/tWTOfV0bmSAcjsh/7OewMC0Zjvp6OM1ja+J1MGVrL1ljt6YKb/ehuD93KvHVJfSjnaB06aJNvLWHRXWj86lF+mpF4IqRTo6WQHwAQULPB4EExtrYL7X6Wg8/utLq/lxpppZUfrQ+37tnTNq4/Ebk/lmoH793TOKeUbzd2EM35jIBvMZcfxgthvxhYfXizYwqmEnnkjxIf+/W7rQqoox0GjNdPdoASw0eZjRzxf4fG+H45L6/FQ6zVS8M2dd8u0nd8v9P/yH/H7nETnd40odZ/ib7NmHfPurP90lbx7uESdyeyPYtb8TjwbBHAiMLpDtcAoifvAa7/Hd0kNoVUyUnjhu9b4n10fANQX8f3BndTa2vXzxGmtxvBP5Nl33pW1KvUCnejWR2laEarQOvnnZvGKpm10olXgUWJhrFxs0lsCxLk9AulG9toBBb0Cj6a/d3qCsva1W5lTQZ6tl1fjEj0Fo+XOvHAUuMHksNiYOSTpnS/tOJAcLZvFhfvo1kyYk/Njd0i1vHxlAbAltc3VlP3C5MZ+kmq574E/n7YquhO+JsuPLgsWJjiaDZLylywk+uI1hMJzpKythK1wGGcrfRi6DYyjIDHgfYyUGBrDmZP6XzWZHO0NCzR6LfX3rb+/Rfwofw3RJPrV4gErErlwBKmDlE3AjDAYMBn1J3V8ykk+9NPaRCTQL/KmXeg16/6Nj1UkGH1iT/48AZBkMHhvCt5Qj4UCzW3NctswntRr5lgmo/DmVBzGeZzJ9WseQ+eFgoNkz5Frf2vzZy1Lz4wxBDM5QAvEZl/m32cJUE8y3kfkNlzXzyUr1XtBlztOMyVNuJ+Rvdg571u+7Apg/IoCM93dZD+S7mnA7f/W4PPdfKcwfEcCV74KU26HPd3vvvxLcTqImX4pWfiL+Cz7nf6ZEI8G/ut3eK8Lnp254pAOTevnK+G0yI4RFQvtzQ9r6vc0NEyvfL5Mt/g8XIbTVhsig+gAAAABJRU5ErkJggg==\"\n        width=\"48\"\n        height=\"24\"\n        alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    /></a>\n    <div class=\"fd-shellbar__product\">\n      <span class=\"fd-shellbar__title\">{{\n        'asm.mainTitle' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n  <div class=\"fd-shellbar__group fd-shellbar__group--end\">\n    <div class=\"fd-shellbar__actions\">\n      <div class=\"fd-shellbar__action fd-shellbar__action--show-always\">\n        <div class=\"session-timer\">\n          <cx-asm-session-timer\n            *ngIf=\"(csAgentToken$ | async)?.access_token\"\n          ></cx-asm-session-timer>\n        </div>\n\n        <div class=\"sap-icon--decline\">\n          <a\n            title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n            *ngIf=\"\n              !(csAgentToken$ | async)?.access_token &&\n              !(csAgentTokenLoading$ | async)\n            \"\n            (click)=\"hideUi()\"\n          >\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"15\"\n              height=\"15\"\n              viewBox=\"0 0 18 18\"\n            >\n              <path\n                d=\"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z\"\n              />\n            </svg>\n          </a>\n        </div>\n        <div class=\"sap-icon--log\">\n          <a\n            title=\"{{ 'asm.logout' | cxTranslate }}\"\n            *ngIf=\"(csAgentToken$ | async)?.access_token\"\n            (click)=\"logout()\"\n          >\n            <img\n              src=\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij48cGF0aCBmaWxsPSIjZDFlM2ZmIiBkPSJNMTYuOTk5IDguNDRjMS4xODcuNTY1IDIuMTg3IDEuNDUzIDIuODkxIDIuNTYgMS4yNTMgMS45NDcgMS40NjQgNC4zODguNTYyIDYuNTItLjM0Mi44MTYtLjgzNSAxLjU1OS0xLjQ1MSAyLjE5LS42NDIuNjM3LTEuMzk3IDEuMTQ2LTIuMjI5IDEuNS0uODYyLjM1OS0xLjc4Ny41NDQtMi43Mi41NC0uOTM4LjAwOC0xLjg2Ny0uMTc1LTIuNzMtLjU0LS44MjgtLjM1NC0xLjU4MS0uODY1LTIuMjItMS41LS42MzgtLjYzOC0xLjE0Ny0xLjM5MS0xLjUtMi4yMi0uOTEtMi4xMTYtLjcxOS00LjU0Mi41MDgtNi40OS43MDQtMS4xMDcgMS43MDUtMS45OTUgMi44OS0yLjU2djEuMTNjLS44OTYuNTE1LTEuNjQzIDEuMjUyLTIuMTcgMi4xNC0uNTQ4LjkwNC0uODM1IDEuOTQzLS44MyAzLS4wMTQgMS42MDUuNjE2IDMuMTUxIDEuNzUgNC4yOS41NDUuNTUgMS4xOTUuOTg1IDEuOTEgMS4yOCAxLjQ5OC42MjUgMy4xODMuNjI1IDQuNjgxIDAgLjcxNS0uMjk1IDEuMzY0LS43MyAxLjkwOC0xLjI4IDEuMTI1LTEuMTI3IDEuNzU2LTIuNjU2IDEuNzUxLTQuMjQ5LjAwNS0xLjA1OS0uMjgxLTIuMDk3LS44My0zLjAwMS0uNTIxLS45MDItMS4yNy0xLjY1NC0yLjE3MS0yLjE4di0xLjEzem0tMi45OTkgNi4zMTFjLS4yNjguMDA1LS41MjctLjA5Ni0uNzItLjI4MS0uMTg3LS4xOTMtLjI4Ny0uNDUyLS4yODEtLjcydi03Yy0uMDAxLS4yNjEuMDk5LS41MTIuMjgxLS42OTkuMzgzLS4zOTggMS4wMTYtLjQxIDEuNDE0LS4wMjYuMTk2LjE4OS4zMDguNDUxLjMwNi43MjV2Ny4wMDFjLjAwOS4yNzItLjEwMS41MzQtLjMuNzItLjE4OC4xNzktLjQzOS4yOC0uNy4yOHoiLz48L3N2Zz4=\"\n            />\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-container *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\">\n  <cx-customer-emulation\n    *ngIf=\"customer$ | async as customer; else showCustomerSelection\"\n  ></cx-customer-emulation>\n  <ng-template #showCustomerSelection>\n    <cx-customer-selection\n      (submitEvent)=\"startCustomerEmulationSession($event)\"\n    ></cx-customer-selection>\n  </ng-template>\n</ng-container>\n\n<ng-template #showLoginForm>\n  <cx-csagent-login-form\n    (submitEvent)=\"loginCustomerSupportAgent($event)\"\n    [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n  ></cx-csagent-login-form>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    AsmMainUiComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService },
        { type: AsmService },
        { type: AsmComponentService },
        { type: GlobalMessageService },
        { type: RoutingService }
    ]; };
    return AsmMainUiComponent;
}());
export { AsmMainUiComponent };
if (false) {
    /** @type {?} */
    AsmMainUiComponent.prototype.csAgentToken$;
    /** @type {?} */
    AsmMainUiComponent.prototype.csAgentTokenLoading$;
    /** @type {?} */
    AsmMainUiComponent.prototype.customer$;
    /**
     * @type {?}
     * @private
     */
    AsmMainUiComponent.prototype.startingCustomerSession;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.asmService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.asmComponentService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW1haW4tdWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFFZCxXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEU7SUFXRSw0QkFDWSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixVQUFzQixFQUN0QixtQkFBd0MsRUFDeEMsb0JBQTBDLEVBQzFDLGNBQThCO1FBTDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJsQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFTckMsQ0FBQzs7OztJQUVKLHFDQUFROzs7SUFBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNuRCxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2IsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGtFQUFxQzs7Ozs7SUFBN0MsVUFBOEMsS0FBZ0I7UUFDNUQsSUFDRSxJQUFJLENBQUMsdUJBQXVCO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEVBQ2hEO1lBQ0EsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzREFBeUI7Ozs7SUFBekIsVUFBMEIsRUFNekI7WUFMQyxrQkFBTSxFQUNOLHNCQUFRO1FBS1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELG1DQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsMERBQTZCOzs7O0lBQTdCLFVBQThCLEVBQXNDO1FBQXBFLGlCQVlDO1lBWitCLDBCQUFVO1FBQ3hDLElBQUksQ0FBQyxXQUFXO2FBQ2IsNEJBQTRCLEVBQUU7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVM7Ozs7UUFBQyxVQUFBLHlCQUF5QjtZQUNsQyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQzVDLHlCQUF5QixFQUN6QixVQUFVLENBQ1g7UUFIRCxDQUdDLEVBQ0Y7YUFDQSxXQUFXLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxtQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixxa1NBQTJDO2lCQUM1Qzs7OztnQkFmQyxXQUFXO2dCQUtYLFdBQVc7Z0JBTlgsVUFBVTtnQkFXSCxtQkFBbUI7Z0JBVDFCLG9CQUFvQjtnQkFFcEIsY0FBYzs7SUFzRmhCLHlCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0F6RVksa0JBQWtCOzs7SUFDN0IsMkNBQXFDOztJQUNyQyxrREFBMEM7O0lBQzFDLHVDQUE0Qjs7Ozs7SUFFNUIscURBQXdDOzs7OztJQUd0Qyx5Q0FBa0M7Ozs7O0lBQ2xDLHlDQUFrQzs7Ozs7SUFDbEMsd0NBQWdDOzs7OztJQUNoQyxpREFBa0Q7Ozs7O0lBQ2xELGtEQUFvRDs7Ozs7SUFDcEQsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFzbVNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyLFxuICBVc2VyU2VydmljZSxcbiAgVXNlclRva2VuLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hc20tbWFpbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc20tbWFpbi11aS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1haW5VaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNzQWdlbnRUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgY3NBZ2VudFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGN1c3RvbWVyJDogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICBwcml2YXRlIHN0YXJ0aW5nQ3VzdG9tZXJTZXNzaW9uID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jc0FnZW50VG9rZW4kID0gdGhpcy5hdXRoU2VydmljZS5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk7XG4gICAgdGhpcy5jc0FnZW50VG9rZW5Mb2FkaW5nJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcoKTtcbiAgICB0aGlzLmN1c3RvbWVyJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbiAmJiAhIXRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMuaGFuZGxlQ3VzdG9tZXJTZXNzaW9uU3RhcnRSZWRpcmVjdGlvbih0b2tlbik7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ3VzdG9tZXJTZXNzaW9uU3RhcnRSZWRpcmVjdGlvbih0b2tlbjogVXNlclRva2VuKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zdGFydGluZ0N1c3RvbWVyU2Vzc2lvbiAmJlxuICAgICAgdGhpcy5hdXRoU2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odG9rZW4pXG4gICAgKSB7XG4gICAgICB0aGlzLnN0YXJ0aW5nQ3VzdG9tZXJTZXNzaW9uID0gZmFsc2U7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKCcvJyk7XG4gICAgfVxuICB9XG5cbiAgbG9naW5DdXN0b21lclN1cHBvcnRBZ2VudCh7XG4gICAgdXNlcklkLFxuICAgIHBhc3N3b3JkLFxuICB9OiB7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aG9yaXplQ3VzdG9tZXJTdXBwb3JBZ2VudCh1c2VySWQsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbUNvbXBvbmVudFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRBbmRDdXN0b21lcigpO1xuICB9XG5cbiAgc3RhcnRDdXN0b21lckVtdWxhdGlvblNlc3Npb24oeyBjdXN0b21lcklkIH06IHsgY3VzdG9tZXJJZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuID0+XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc3RhcnRDdXN0b21lckVtdWxhdGlvblNlc3Npb24oXG4gICAgICAgICAgY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbixcbiAgICAgICAgICBjdXN0b21lcklkXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3RhcnRpbmdDdXN0b21lclNlc3Npb24gPSB0cnVlO1xuICB9XG5cbiAgaGlkZVVpKCk6IHZvaWQge1xuICAgIHRoaXMuYXNtU2VydmljZS51cGRhdGVBc21VaVN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gIH1cbn1cbiJdfQ==