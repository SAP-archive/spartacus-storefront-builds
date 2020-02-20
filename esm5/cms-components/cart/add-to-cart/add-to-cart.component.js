import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, OrderEntry, Product } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CurrentProductService } from '../../product/current-product.service';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
        this.addToCartForm = new FormGroup({
            quantity: new FormControl(1),
        });
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.product) {
            this.productCode = this.product.code;
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe(function (product) {
                _this.productCode = product.code;
                _this.setStockInfo(product);
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            });
        }
    };
    AddToCartComponent.prototype.setStockInfo = function (product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    };
    AddToCartComponent.prototype.updateCount = function (value) {
        this.quantity = value;
    };
    AddToCartComponent.prototype.addToCart = function () {
        var _this = this;
        var quantity = this.addToCartForm.get('quantity').value;
        if (!this.productCode || quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.cartService
            .getEntry(this.productCode)
            .subscribe(function (entry) {
            if (entry) {
                _this.increment = true;
            }
            _this.openModal();
            _this.cartService.addEntry(_this.productCode, quantity);
            _this.increment = false;
        })
            .unsubscribe();
    };
    AddToCartComponent.prototype.openModal = function () {
        var modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.entry$ = this.cartEntry$;
        modalInstance.cart$ = this.cartService.getActive();
        modalInstance.loaded$ = this.cartService.getLoaded();
        modalInstance.quantity = this.quantity;
        modalInstance.increment = this.increment;
    };
    AddToCartComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: ModalService },
        { type: CurrentProductService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], AddToCartComponent.prototype, "productCode", void 0);
    __decorate([
        Input()
    ], AddToCartComponent.prototype, "showQuantity", void 0);
    __decorate([
        Input()
    ], AddToCartComponent.prototype, "product", void 0);
    AddToCartComponent = __decorate([
        Component({
            selector: 'cx-add-to-cart',
            template: "<form *ngIf=\"productCode\" [formGroup]=\"addToCartForm\" (submit)=\"addToCart()\">\n  <div class=\"quantity\" *ngIf=\"showQuantity\">\n    <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      *ngIf=\"hasStock\"\n      [max]=\"maxQuantity\"\n      [control]=\"addToCartForm.get('quantity')\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('addToCart.inStock' | cxTranslate)\n        : ('addToCart.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n\n  <button\n    *ngIf=\"hasStock\"\n    class=\"btn btn-primary btn-block\"\n    type=\"submit\"\n    [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  >\n    {{ 'addToCart.addToCart' | cxTranslate }}\n  </button>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AddToCartComponent);
    return AddToCartComponent;
}());
export { AddToCartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFPbkc7SUErQkUsNEJBQ1ksV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIscUJBQTRDLEVBQzlDLEVBQXFCO1FBSG5CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDOUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFqQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBVzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFLbEIsa0JBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUM1QixRQUFRLEVBQUUs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QW9IOUI7SUFBRCx5QkFBQztDQUFBLEFBcEhELElBb0hDO1NBcEhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBPcmRlckVudHJ5LCBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbFJlZiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLXJlZic7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGQtdG8tY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8tY2FydC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUb0NhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dRdWFudGl0eSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEFzIGxvbmcgYXMgd2UgZG8gbm90IHN1cHBvcnQgIzUwMjYsIHdlIHJlcXVpcmUgcHJvZHVjdCBpbnB1dCwgYXMgd2UgbmVlZFxuICAgKiAgYSByZWZlcmVuY2UgdG8gdGhlIHByb2R1Y3QgbW9kZWwgdG8gZmV0Y2ggdGhlIHN0b2NrIGRhdGEuXG4gICAqL1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuXG4gIG1heFF1YW50aXR5OiBudW1iZXI7XG4gIG1vZGFsUmVmOiBNb2RhbFJlZjtcblxuICBoYXNTdG9jayA9IGZhbHNlO1xuICBxdWFudGl0eSA9IDE7XG4gIGluY3JlbWVudCA9IGZhbHNlO1xuICBjYXJ0RW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGFkZFRvQ2FydEZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBxdWFudGl0eTogbmV3IEZvcm1Db250cm9sKDEpLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB7XG4gICAgICB0aGlzLnByb2R1Y3RDb2RlID0gdGhpcy5wcm9kdWN0LmNvZGU7XG4gICAgICB0aGlzLmNhcnRFbnRyeSQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpO1xuICAgICAgdGhpcy5zZXRTdG9ja0luZm8odGhpcy5wcm9kdWN0KTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2R1Y3RDb2RlKSB7XG4gICAgICB0aGlzLmNhcnRFbnRyeSQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpO1xuICAgICAgLy8gZm9yY2UgaGFzU3RvY2sgYW5kIHF1YW50aXR5IGZvciB0aGUgdGltZSBiZWluZywgYXMgd2UgZG8gbm90IGhhdmUgbW9yZSBpbmZvOlxuICAgICAgdGhpcy5xdWFudGl0eSA9IDE7XG4gICAgICB0aGlzLmhhc1N0b2NrID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2VcbiAgICAgICAgLmdldFByb2R1Y3QoKVxuICAgICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RDb2RlID0gcHJvZHVjdC5jb2RlO1xuICAgICAgICAgIHRoaXMuc2V0U3RvY2tJbmZvKHByb2R1Y3QpO1xuICAgICAgICAgIHRoaXMuY2FydEVudHJ5JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdG9ja0luZm8ocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMucXVhbnRpdHkgPSAxO1xuICAgIHRoaXMuaGFzU3RvY2sgPVxuICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJztcbiAgICBpZiAodGhpcy5oYXNTdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWwpIHtcbiAgICAgIHRoaXMubWF4UXVhbnRpdHkgPSBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ291bnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXVhbnRpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZFRvQ2FydCgpIHtcbiAgICBjb25zdCBxdWFudGl0eSA9IHRoaXMuYWRkVG9DYXJ0Rm9ybS5nZXQoJ3F1YW50aXR5JykudmFsdWU7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RDb2RlIHx8IHF1YW50aXR5IDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY2hlY2sgaXRlbSBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGNhcnRcbiAgICAvLyBzbyBtb2RhbCB3aWxsIGhhdmUgcHJvcGVyIGhlYWRlciB0ZXh0IGRpc3BsYXllZFxuICAgIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKVxuICAgICAgLnN1YnNjcmliZShlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVudHJ5KHRoaXMucHJvZHVjdENvZGUsIHF1YW50aXR5KTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3Blbk1vZGFsKCkge1xuICAgIGxldCBtb2RhbEluc3RhbmNlOiBhbnk7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UgPSB0aGlzLm1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIG1vZGFsSW5zdGFuY2UuZW50cnkkID0gdGhpcy5jYXJ0RW50cnkkO1xuICAgIG1vZGFsSW5zdGFuY2UuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIG1vZGFsSW5zdGFuY2UubG9hZGVkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gICAgbW9kYWxJbnN0YW5jZS5xdWFudGl0eSA9IHRoaXMucXVhbnRpdHk7XG4gICAgbW9kYWxJbnN0YW5jZS5pbmNyZW1lbnQgPSB0aGlzLmluY3JlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==