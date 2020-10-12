import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveCartService } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CurrentProductService } from '../../product/current-product.service';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
export class AddToCartComponent {
    constructor(modalService, currentProductService, cd, activeCartService) {
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.activeCartService = activeCartService;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.numberOfEntriesBeforeAdd = 0;
        this.addToCartForm = new FormGroup({
            quantity: new FormControl(1),
        });
    }
    ngOnInit() {
        if (this.product) {
            this.productCode = this.product.code;
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe((product) => {
                this.productCode = product.code;
                this.setStockInfo(product);
                this.cd.markForCheck();
            });
        }
    }
    setStockInfo(product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    }
    updateCount(value) {
        this.quantity = value;
    }
    addToCart() {
        const quantity = this.addToCartForm.get('quantity').value;
        if (!this.productCode || quantity <= 0) {
            return;
        }
        this.activeCartService
            .getEntries()
            .pipe(take(1))
            .subscribe((entries) => {
            this.numberOfEntriesBeforeAdd = entries.length;
            this.openModal();
            this.activeCartService.addEntry(this.productCode, quantity);
        });
    }
    openModal() {
        let modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        // Display last entry for new product code. This always corresponds to
        // our new item, independently of whether merging occured or not
        modalInstance.entry$ = this.activeCartService.getLastEntry(this.productCode);
        modalInstance.cart$ = this.activeCartService.getActive();
        modalInstance.loaded$ = this.activeCartService.isStable();
        modalInstance.quantity = this.quantity;
        modalInstance.numberOfEntriesBeforeAdd = this.numberOfEntriesBeforeAdd;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AddToCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-cart',
                template: "<form *ngIf=\"productCode\" [formGroup]=\"addToCartForm\" (submit)=\"addToCart()\">\n  <div class=\"quantity\" *ngIf=\"showQuantity\">\n    <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      *ngIf=\"hasStock\"\n      [max]=\"maxQuantity\"\n      [control]=\"addToCartForm.get('quantity')\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('addToCart.inStock' | cxTranslate)\n        : ('addToCart.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n\n  <button\n    *ngIf=\"hasStock\"\n    class=\"btn btn-primary btn-block\"\n    type=\"submit\"\n    [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  >\n    {{ 'addToCart.addToCart' | cxTranslate }}\n  </button>\n</form>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
AddToCartComponent.ctorParameters = () => [
    { type: ModalService },
    { type: CurrentProductService },
    { type: ChangeDetectorRef },
    { type: ActiveCartService }
];
AddToCartComponent.propDecorators = {
    productCode: [{ type: Input }],
    showQuantity: [{ type: Input }],
    product: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBRTdELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBT25HLE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCLFlBQ1ksWUFBMEIsRUFDMUIscUJBQTRDLEVBQzlDLEVBQXFCLEVBQ25CLGlCQUFvQztRQUhwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF6QnZDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBVzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNILDZCQUF3QixHQUFHLENBQUMsQ0FBQztRQUl2QyxrQkFBYSxHQUFHLElBQUksU0FBUyxDQUFDO1lB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Q0FBQyxZQUFZLENBQ3hELElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7UUFDRixhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6RCxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxRCxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkMsYUFBYSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN6RSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBNUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwwdkJBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBUlEsWUFBWTtZQUNaLHFCQUFxQjtZQVo1QixpQkFBaUI7WUFPVixpQkFBaUI7OzswQkFjdkIsS0FBSzsyQkFDTCxLQUFLO3NCQU1MLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZGFsUmVmIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtcmVmJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cvYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93UXVhbnRpdHkgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBcyBsb25nIGFzIHdlIGRvIG5vdCBzdXBwb3J0ICM1MDI2LCB3ZSByZXF1aXJlIHByb2R1Y3QgaW5wdXQsIGFzIHdlIG5lZWRcbiAgICogIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9kdWN0IG1vZGVsIHRvIGZldGNoIHRoZSBzdG9jayBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcblxuICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgcXVhbnRpdHkgPSAxO1xuICBwcm90ZWN0ZWQgbnVtYmVyT2ZFbnRyaWVzQmVmb3JlQWRkID0gMDtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBhZGRUb0NhcnRGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbCgxKSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB7XG4gICAgICB0aGlzLnByb2R1Y3RDb2RlID0gdGhpcy5wcm9kdWN0LmNvZGU7XG4gICAgICB0aGlzLnNldFN0b2NrSW5mbyh0aGlzLnByb2R1Y3QpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvZHVjdENvZGUpIHtcbiAgICAgIC8vIGZvcmNlIGhhc1N0b2NrIGFuZCBxdWFudGl0eSBmb3IgdGhlIHRpbWUgYmVpbmcsIGFzIHdlIGRvIG5vdCBoYXZlIG1vcmUgaW5mbzpcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAxO1xuICAgICAgdGhpcy5oYXNTdG9jayA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICAgICAgIC5nZXRQcm9kdWN0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgICAuc3Vic2NyaWJlKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0Q29kZSA9IHByb2R1Y3QuY29kZTtcbiAgICAgICAgICB0aGlzLnNldFN0b2NrSW5mbyhwcm9kdWN0KTtcbiAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFN0b2NrSW5mbyhwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy5xdWFudGl0eSA9IDE7XG4gICAgdGhpcy5oYXNTdG9jayA9XG4gICAgICBwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyAhPT0gJ291dE9mU3RvY2snO1xuICAgIGlmICh0aGlzLmhhc1N0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbCkge1xuICAgICAgdGhpcy5tYXhRdWFudGl0eSA9IHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb3VudCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5xdWFudGl0eSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkVG9DYXJ0KCkge1xuICAgIGNvbnN0IHF1YW50aXR5ID0gdGhpcy5hZGRUb0NhcnRGb3JtLmdldCgncXVhbnRpdHknKS52YWx1ZTtcbiAgICBpZiAoIXRoaXMucHJvZHVjdENvZGUgfHwgcXVhbnRpdHkgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoZW50cmllcykgPT4ge1xuICAgICAgICB0aGlzLm51bWJlck9mRW50cmllc0JlZm9yZUFkZCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmFkZEVudHJ5KHRoaXMucHJvZHVjdENvZGUsIHF1YW50aXR5KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsSW5zdGFuY2U6IGFueTtcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgLy8gRGlzcGxheSBsYXN0IGVudHJ5IGZvciBuZXcgcHJvZHVjdCBjb2RlLiBUaGlzIGFsd2F5cyBjb3JyZXNwb25kcyB0b1xuICAgIC8vIG91ciBuZXcgaXRlbSwgaW5kZXBlbmRlbnRseSBvZiB3aGV0aGVyIG1lcmdpbmcgb2NjdXJlZCBvciBub3RcbiAgICBtb2RhbEluc3RhbmNlLmVudHJ5JCA9IHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0TGFzdEVudHJ5KFxuICAgICAgdGhpcy5wcm9kdWN0Q29kZVxuICAgICk7XG4gICAgbW9kYWxJbnN0YW5jZS5jYXJ0JCA9IHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgbW9kYWxJbnN0YW5jZS5sb2FkZWQkID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc1N0YWJsZSgpO1xuICAgIG1vZGFsSW5zdGFuY2UucXVhbnRpdHkgPSB0aGlzLnF1YW50aXR5O1xuICAgIG1vZGFsSW5zdGFuY2UubnVtYmVyT2ZFbnRyaWVzQmVmb3JlQWRkID0gdGhpcy5udW1iZXJPZkVudHJpZXNCZWZvcmVBZGQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=