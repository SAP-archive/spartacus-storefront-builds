/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '@spartacus/core';
export class AddressBookComponentService {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    getAddresses() {
        return this.userService.getAddresses();
    }
    /**
     * @return {?}
     */
    getAddressesStateLoading() {
        return this.userService.getAddressesLoading();
    }
    /**
     * @return {?}
     */
    getUserId() {
        return this.userService.get().pipe(map(({ uid }) => uid));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAddresses(userId) {
        this.userService.loadAddresses(userId);
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    addUserAddress(userId, address) {
        this.userService.addUserAddress(userId, address);
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    updateUserAddress(userId, addressId, address) {
        this.userService.updateUserAddress(userId, addressId, address);
    }
}
AddressBookComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressBookComponentService.ctorParameters = () => [
    { type: UserService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYWRkcmVzcy1ib29rL2FkZHJlc3MtYm9vay5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBaUIsTUFBTSxpQkFBaUIsQ0FBQztBQUc3RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBQ3RDLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVoRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBYztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBYyxFQUFFLE9BQWdCO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBYyxFQUFFLFNBQWlCLEVBQUUsT0FBZ0I7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OztZQTFCRixVQUFVOzs7O1lBRkYsV0FBVzs7Ozs7OztJQUlOLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UsIEFkZHJlc3MsIFVzZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICB9XG5cbiAgZ2V0VXNlcklkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0KCkucGlwZShtYXAoKHsgdWlkIH06IFVzZXIpID0+IHVpZCkpO1xuICB9XG5cbiAgbG9hZEFkZHJlc3Nlcyh1c2VySWQ6IHN0cmluZykge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZEFkZHJlc3Nlcyh1c2VySWQpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKHVzZXJJZCwgYWRkcmVzcyk7XG4gIH1cblxuICB1cGRhdGVVc2VyQWRkcmVzcyh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXJBZGRyZXNzKHVzZXJJZCwgYWRkcmVzc0lkLCBhZGRyZXNzKTtcbiAgfVxufVxuIl19