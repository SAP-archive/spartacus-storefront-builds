import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService, Cart } from '@spartacus/core';
var CheckoutOrderSummaryComponent = /** @class */ (function () {
    function CheckoutOrderSummaryComponent(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
    CheckoutOrderSummaryComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    CheckoutOrderSummaryComponent = __decorate([
        Component({
            selector: 'cx-checkout-order-summary',
            template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CheckoutOrderSummaryComponent);
    return CheckoutOrderSummaryComponent;
}());
export { CheckoutOrderSummaryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU1wRDtJQUdFLHVDQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Z0JBRmtDLFdBQVc7O0lBSG5DLDZCQUE2QjtRQUx6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDRFQUFzRDtZQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csNkJBQTZCLENBTXpDO0lBQUQsb0NBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1vcmRlci1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRPcmRlclN1bW1hcnlDb21wb25lbnQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gIH1cbn1cbiJdfQ==