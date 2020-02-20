import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address, CheckoutDeliveryService, FeatureConfigService, UserAddressService, } from '@spartacus/core';
var AddressCardComponent = /** @class */ (function () {
    function AddressCardComponent(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
        this.editEvent = new EventEmitter();
    }
    AddressCardComponent.prototype.openEditFormEvent = function () {
        this.editEvent.emit();
    };
    AddressCardComponent.prototype.cancelEdit = function () {
        this.editMode = false;
    };
    AddressCardComponent.prototype.setEditMode = function () {
        this.editMode = true;
    };
    AddressCardComponent.prototype.setAddressAsDefault = function (addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressCardComponent.prototype.deleteAddress = function (addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressCardComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], AddressCardComponent.prototype, "address", void 0);
    __decorate([
        Output()
    ], AddressCardComponent.prototype, "editEvent", void 0);
    AddressCardComponent = __decorate([
        Component({
            selector: 'cx-address-card',
            template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
        })
    ], AddressCardComponent);
    return AddressCardComponent;
}());
export { AddressCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCO0lBc0JFLDhCQUNVLGtCQUFzQyxFQUNwQyx1QkFBaUQsRUFDbkQsb0JBQTJDO1FBRjNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUEwQjtRQUNuRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBbkIzQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQW9CM0MsQ0FBQztJQUVKLGdEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrREFBbUIsR0FBbkIsVUFBb0IsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZEOztXQUVHO1FBQ0gsSUFDRSxJQUFJLENBQUMsb0JBQW9CO1lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFDNUI7WUFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JEOztXQUVHO1FBQ0gsSUFDRSxJQUFJLENBQUMsb0JBQW9CO1lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFDNUI7WUFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7O2dCQTNDNkIsa0JBQWtCO2dCQUNWLHVCQUF1QjtnQkFDNUIsb0JBQW9COztJQXJCNUM7UUFBUixLQUFLLEVBQUU7eURBQWtCO0lBRWhCO1FBQVQsTUFBTSxFQUFFOzJEQUFxQztJQU5uQyxvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiwycUVBQTRDO1NBQzdDLENBQUM7T0FDVyxvQkFBb0IsQ0FtRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQW5FWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZHJlc3MtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ2FyZENvbXBvbmVudCB7XG4gIGVkaXRNb2RlOiBib29sZWFuO1xuICBpc0RlZmF1bHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgYWRkcmVzczogQWRkcmVzcztcblxuICBAT3V0cHV0KCkgZWRpdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjJcbiAgICogIFVzZSBjb25zdHJ1Y3Rvcih1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICogIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgKiAgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlPzogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBvcGVuRWRpdEZvcm1FdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRFdmVudC5lbWl0KCk7XG4gIH1cblxuICBjYW5jZWxFZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgfVxuXG4gIHNldEVkaXRNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLnNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkKTtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgaWYgKFxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZSAmJlxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjInKSAmJlxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICkge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckNoZWNrb3V0RGVsaXZlcnlEZXRhaWxzKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmRlbGV0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZCk7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgJiZcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4yJykgJiZcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICAgIH1cbiAgfVxufVxuIl19