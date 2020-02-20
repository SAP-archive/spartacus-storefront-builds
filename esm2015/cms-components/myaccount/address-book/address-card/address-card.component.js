import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address, CheckoutDeliveryService, FeatureConfigService, UserAddressService, } from '@spartacus/core';
let AddressCardComponent = class AddressCardComponent {
    constructor(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
        this.editEvent = new EventEmitter();
    }
    openEditFormEvent() {
        this.editEvent.emit();
    }
    cancelEdit() {
        this.editMode = false;
    }
    setEditMode() {
        this.editMode = true;
    }
    setAddressAsDefault(addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
    deleteAddress(addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
};
AddressCardComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: FeatureConfigService }
];
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
export { AddressCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBc0IvQixZQUNVLGtCQUFzQyxFQUNwQyx1QkFBaUQsRUFDbkQsb0JBQTJDO1FBRjNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUEwQjtRQUNuRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBbkIzQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQW9CM0MsQ0FBQztJQUVKLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxTQUFpQjtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQ7O1dBRUc7UUFDSCxJQUNFLElBQUksQ0FBQyxvQkFBb0I7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLHVCQUF1QixFQUM1QjtZQUNBLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFpQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQ7O1dBRUc7UUFDSCxJQUNFLElBQUksQ0FBQyxvQkFBb0I7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLHVCQUF1QixFQUM1QjtZQUNBLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBNUMrQixrQkFBa0I7WUFDVix1QkFBdUI7WUFDNUIsb0JBQW9COztBQXJCNUM7SUFBUixLQUFLLEVBQUU7cURBQWtCO0FBRWhCO0lBQVQsTUFBTSxFQUFFO3VEQUFxQztBQU5uQyxvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQiwycUVBQTRDO0tBQzdDLENBQUM7R0FDVyxvQkFBb0IsQ0FtRWhDO1NBbkVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDYXJkQ29tcG9uZW50IHtcbiAgZWRpdE1vZGU6IGJvb2xlYW47XG4gIGlzRGVmYXVsdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBhZGRyZXNzOiBBZGRyZXNzO1xuXG4gIEBPdXRwdXQoKSBlZGl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMlxuICAgKiAgVXNlIGNvbnN0cnVjdG9yKHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgKiAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAqICBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpIGluc3RlYWRcbiAgICpcbiAgICogIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U/OiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW5FZGl0Rm9ybUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdEV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0RWRpdE1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gIH1cblxuICBzZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2Uuc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQpO1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICB0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlICYmXG4gICAgICB0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMicpICYmXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZGVsZXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkKTtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgaWYgKFxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZSAmJlxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjInKSAmJlxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICkge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckNoZWNrb3V0RGVsaXZlcnlEZXRhaWxzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=