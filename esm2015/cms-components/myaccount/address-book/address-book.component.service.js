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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxXQUFXLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFHN0QsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFaEQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWMsRUFBRSxPQUFnQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7OztJQUVELGlCQUFpQixDQUFDLE1BQWMsRUFBRSxTQUFpQixFQUFFLE9BQWdCO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUExQkYsVUFBVTs7OztZQUZGLFdBQVc7Ozs7Ozs7SUFJTixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBBZGRyZXNzLCBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGdldFVzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnBpcGUobWFwKCh7IHVpZCB9OiBVc2VyKSA9PiB1aWQpKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXModXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRBZGRyZXNzZXModXNlcklkKTtcbiAgfVxuXG4gIGFkZFVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5hZGRVc2VyQWRkcmVzcyh1c2VySWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgdXBkYXRlVXNlckFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyh1c2VySWQsIGFkZHJlc3NJZCwgYWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==