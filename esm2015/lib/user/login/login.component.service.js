/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LoginComponentService {
    constructor() {
        this._isLogin = false;
    }
    /**
     * @return {?}
     */
    get isLogin() {
        return this._isLogin;
    }
    /**
     * @param {?} login
     * @return {?}
     */
    set isLogin(login) {
        this._isLogin = login;
    }
}
LoginComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ LoginComponentService.ngInjectableDef = i0.defineInjectable({ factory: function LoginComponentService_Factory() { return new LoginComponentService(); }, token: LoginComponentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginComponentService.prototype._isLogin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUlVLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FTMUI7Ozs7SUFQQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFFQyx5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudFNlcnZpY2Uge1xuICBwcml2YXRlIF9pc0xvZ2luID0gZmFsc2U7XG5cbiAgZ2V0IGlzTG9naW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9naW47XG4gIH1cblxuICBzZXQgaXNMb2dpbihsb2dpbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTG9naW4gPSBsb2dpbjtcbiAgfVxufVxuIl19