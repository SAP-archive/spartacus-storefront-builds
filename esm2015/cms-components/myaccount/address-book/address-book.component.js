import { Component } from '@angular/core';
import { TranslationService, UserAddressService, CheckoutDeliveryService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { AddressBookComponentService } from './address-book.component.service';
import { map } from 'rxjs/operators';
export class AddressBookComponent {
    constructor(service, translation, userAddressService, checkoutDeliveryService) {
        this.service = service;
        this.translation = translation;
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    ngOnInit() {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    }
    addAddressButtonHandle() {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    }
    editAddressButtonHandle(address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    }
    addAddressSubmit(address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    }
    addAddressCancel() {
        this.showAddAddressForm = false;
    }
    editAddressSubmit(address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    }
    editAddressCancel() {
        this.showEditAddressForm = false;
    }
    getCardContent(address) {
        return combineLatest([
            this.translation.translate('addressCard.default'),
            this.translation.translate('addressCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('common.edit'),
            this.translation.translate('addressBook.areYouSureToDeleteAddress'),
        ]).pipe(map(([defaultText, setAsDefaultText, textDelete, textEdit, textVerifyDeleteMsg,]) => {
            let region = '';
            if (address.region && address.region.isocode) {
                region = address.region.isocode + ', ';
            }
            const actions = [];
            if (!address.defaultAddress) {
                actions.push({ name: setAsDefaultText, event: 'default' });
            }
            actions.push({ name: textEdit, event: 'edit' });
            actions.push({ name: textDelete, event: 'delete' });
            return {
                textBold: address.firstName + ' ' + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ', ' + region + address.country.isocode,
                    address.postalCode,
                    address.phone,
                ],
                actions: actions,
                header: address.defaultAddress ? `✓ ${defaultText}` : '',
                deleteMsg: textVerifyDeleteMsg,
            };
        }));
    }
    setAddressAsDefault(addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    }
    deleteAddress(addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    }
    setEdit(addressId) {
        if (this.editCard !== addressId) {
            this.editCard = addressId;
        }
        else {
            this.deleteAddress(addressId);
        }
    }
    cancelCard() {
        this.editCard = null;
    }
}
AddressBookComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-book',
                template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of addresses$ | async\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-card\n          [border]=\"true\"\n          [fitToContainer]=\"true\"\n          [content]=\"getCardContent(address) | async\"\n          (editCard)=\"editAddressButtonHandle(address)\"\n          (setDefaultCard)=\"setAddressAsDefault(address.id)\"\n          (deleteCard)=\"setEdit(address.id)\"\n          [editMode]=\"address.id === editCard\"\n          (cancelCard)=\"cancelCard()\"\n        ></cx-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n        (cancelCard)=\"cancelCard()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            },] }
];
AddressBookComponent.ctorParameters = () => [
    { type: AddressBookComponentService },
    { type: TranslationService },
    { type: UserAddressService },
    { type: CheckoutDeliveryService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJDLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0IsWUFDUyxPQUFvQyxFQUNqQyxXQUErQixFQUMvQixrQkFBc0MsRUFDdEMsdUJBQWdEO1FBSG5ELFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFSNUQsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztJQVF6QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FB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RSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4RCxTQUFTLEVBQUUsbUJBQW1CO2FBQy9CLENBQUM7UUFDSixDQUFDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG1CQUFtQixDQUFDLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsYUFBYSxDQUFDLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7OztZQTNIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNm5GQUE0QzthQUM3Qzs7O1lBUFEsMkJBQTJCO1lBTGxDLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1ib29rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFtdPjtcbiAgYWRkcmVzc2VzU3RhdGVMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY3VycmVudEFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIHNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgZWRpdENhcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NlcyQgPSB0aGlzLnNlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gICAgdGhpcy5hZGRyZXNzZXNTdGF0ZUxvYWRpbmckID0gdGhpcy5zZXJ2aWNlLmdldEFkZHJlc3Nlc1N0YXRlTG9hZGluZygpO1xuICAgIHRoaXMuc2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cblxuICBhZGRBZGRyZXNzQnV0dG9uSGFuZGxlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzQnV0dG9uSGFuZGxlKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50QWRkcmVzcyA9IGFkZHJlc3M7XG4gIH1cblxuICBhZGRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZS5hZGRVc2VyQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3ModGhpcy5jdXJyZW50QWRkcmVzc1snaWQnXSwgYWRkcmVzcyk7XG4gIH1cblxuICBlZGl0QWRkcmVzc0NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuZGVmYXVsdCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNldEFzRGVmYXVsdCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5kZWxldGUnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uZWRpdCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NCb29rLmFyZVlvdVN1cmVUb0RlbGV0ZUFkZHJlc3MnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGRlZmF1bHRUZXh0LFxuICAgICAgICAgIHNldEFzRGVmYXVsdFRleHQsXG4gICAgICAgICAgdGV4dERlbGV0ZSxcbiAgICAgICAgICB0ZXh0RWRpdCxcbiAgICAgICAgICB0ZXh0VmVyaWZ5RGVsZXRlTXNnLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgbGV0IHJlZ2lvbiA9ICcnO1xuXG4gICAgICAgICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgICAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IHsgbmFtZTogc3RyaW5nOyBldmVudDogc3RyaW5nIH1bXSA9IFtdO1xuICAgICAgICAgIGlmICghYWRkcmVzcy5kZWZhdWx0QWRkcmVzcykge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogc2V0QXNEZWZhdWx0VGV4dCwgZXZlbnQ6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogdGV4dEVkaXQsIGV2ZW50OiAnZWRpdCcgfSk7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogdGV4dERlbGV0ZSwgZXZlbnQ6ICdkZWxldGUnIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MgPyBg4pyTICR7ZGVmYXVsdFRleHR9YCA6ICcnLFxuICAgICAgICAgICAgZGVsZXRlTXNnOiB0ZXh0VmVyaWZ5RGVsZXRlTXNnLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLnNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkKTtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTtcbiAgfVxuXG4gIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5kZWxldGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQpO1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICB9XG5cbiAgc2V0RWRpdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRDYXJkICE9PSBhZGRyZXNzSWQpIHtcbiAgICAgIHRoaXMuZWRpdENhcmQgPSBhZGRyZXNzSWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVsZXRlQWRkcmVzcyhhZGRyZXNzSWQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbENhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cbn1cbiJdfQ==