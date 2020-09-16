import { Injectable } from '@angular/core';
import { ActiveCartService, CheckoutService, PromotionLocation, } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../cms-components/myaccount/order/order-details/order-details.service";
import * as i2 from "@spartacus/core";
export class PromotionService {
    constructor(orderDetailsService, checkoutService, activeCartService) {
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
        this.activeCartService = activeCartService;
    }
    getOrderPromotions(promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.getOrderPromotionsFromCart();
            case PromotionLocation.Checkout:
                return this.getOrderPromotionsFromCheckout();
            case PromotionLocation.Order:
                return this.getOrderPromotionsFromOrder();
            default:
                return of([]);
        }
    }
    getOrderPromotionsFromCart() {
        return this.activeCartService
            .getActive()
            .pipe(map((cart) => this.getOrderPromotionsFromCartHelper(cart)));
    }
    getOrderPromotionsFromCartHelper(cart) {
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
    getOrderPromotionsFromCheckout() {
        return this.checkoutService
            .getOrderDetails()
            .pipe(map((order) => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrder() {
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map((order) => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrderHelper(order) {
        const appliedOrderPromotions = [];
        appliedOrderPromotions.push(...(order.appliedOrderPromotions || []));
        return appliedOrderPromotions;
    }
    getProductPromotionForEntry(item, promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.activeCartService
                    .getActive()
                    .pipe(map((cart) => this.getProductPromotion(item, cart.appliedProductPromotions || [])));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map((order) => this.getProductPromotion(item, order.appliedProductPromotions || [])));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map((order) => this.getProductPromotion(item, order.appliedProductPromotions || [])));
        }
    }
    getProductPromotion(item, promotions) {
        const entryPromotions = [];
        if (promotions && promotions.length > 0) {
            for (const promotion of promotions) {
                if (promotion.description &&
                    promotion.consumedEntries &&
                    promotion.consumedEntries.length > 0) {
                    for (const consumedEntry of promotion.consumedEntries) {
                        if (this.isConsumedByEntry(consumedEntry, item)) {
                            entryPromotions.push(promotion);
                        }
                    }
                }
            }
        }
        return entryPromotions;
    }
    isConsumedByEntry(consumedEntry, entry) {
        const consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            for (const subEntry of entry.entries) {
                if (subEntry.entryNumber === consumedEntryNumber) {
                    return true;
                }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    }
}
PromotionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.CheckoutService), i0.ɵɵinject(i2.ActiveCartService)); }, token: PromotionService, providedIn: "root" });
PromotionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PromotionService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: CheckoutService },
    { type: ActiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixlQUFlLEVBR2YsaUJBQWlCLEdBRWxCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7Ozs7QUFLbEgsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNZLG1CQUF3QyxFQUN4QyxlQUFnQyxFQUNoQyxpQkFBb0M7UUFGcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUosa0JBQWtCLENBQ2hCLGlCQUFvQztRQUVwQyxRQUFRLGlCQUFpQixFQUFFO1lBQ3pCLEtBQUssaUJBQWlCLENBQUMsVUFBVTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUMzQyxLQUFLLGlCQUFpQixDQUFDLFFBQVE7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7WUFDL0MsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQzVDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQyxpQkFBaUI7YUFDMUIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sZ0NBQWdDLENBQUMsSUFBVTtRQUNqRCxNQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUMvQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5FLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw4QkFBOEI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZTthQUN4QixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUM1QixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8saUNBQWlDLENBQUMsS0FBWTtRQUNwRCxNQUFNLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sc0JBQXNCLENBQUM7SUFDaEMsQ0FBQztJQUVELDJCQUEyQixDQUN6QixJQUFnQixFQUNoQixpQkFBb0M7UUFFcEMsUUFBUSxpQkFBaUIsRUFBRTtZQUN6QixLQUFLLGlCQUFpQixDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjtxQkFDMUIsU0FBUyxFQUFFO3FCQUNYLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNYLElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsSUFBSSxFQUNKLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLENBQ3BDLENBQ0YsQ0FDRixDQUFDO1lBQ04sS0FBSyxpQkFBaUIsQ0FBQyxRQUFRO2dCQUM3QixPQUFPLElBQUksQ0FBQyxlQUFlO3FCQUN4QixlQUFlLEVBQUU7cUJBQ2pCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsSUFBSSxFQUNKLEtBQUssQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLENBQ3JDLENBQ0YsQ0FDRixDQUFDO1lBQ04sS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUI7cUJBQzVCLGVBQWUsRUFBRTtxQkFDakIsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUN0QixJQUFJLEVBQ0osS0FBSyxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FDckMsQ0FDRixDQUNGLENBQUM7U0FDUDtJQUNILENBQUM7SUFFTyxtQkFBbUIsQ0FDekIsSUFBZ0IsRUFDaEIsVUFBNkI7UUFFN0IsTUFBTSxlQUFlLEdBQXNCLEVBQUUsQ0FBQztRQUM5QyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtnQkFDbEMsSUFDRSxTQUFTLENBQUMsV0FBVztvQkFDckIsU0FBUyxDQUFDLGVBQWU7b0JBQ3pCLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEM7b0JBQ0EsS0FBSyxNQUFNLGFBQWEsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFO3dCQUNyRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUU7NEJBQy9DLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7eUJBQ2pDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxhQUFrQixFQUFFLEtBQVU7UUFDdEQsTUFBTSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDM0QsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksUUFBUSxDQUFDLFdBQVcsS0FBSyxtQkFBbUIsRUFBRTtvQkFDaEQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sbUJBQW1CLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7WUF4SUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxtQkFBbUI7WUFSMUIsZUFBZTtZQUZmLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDYXJ0LFxuICBDaGVja291dFNlcnZpY2UsXG4gIE9yZGVyLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBnZXRPcmRlclByb21vdGlvbnMoXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkNoZWNrb3V0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKChjYXJ0KSA9PiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0SGVscGVyKGNhcnQpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0SGVscGVyKGNhcnQ6IENhcnQpOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgcG90ZW50aWFsUHJvbW90aW9ucyA9IFtdO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIGNvbnN0IGFwcGxpZWRQcm9tb3Rpb25zID0gW107XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICByZXR1cm4gWy4uLnBvdGVudGlhbFByb21vdGlvbnMsIC4uLmFwcGxpZWRQcm9tb3Rpb25zXTtcbiAgfVxuXG4gIGdldE9yZGVyUHJvbW90aW9uc0Zyb21DaGVja291dCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgIC5waXBlKG1hcCgob3JkZXIpID0+IHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyKSkpO1xuICB9XG5cbiAgZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVyKCk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgIC5waXBlKG1hcCgob3JkZXIpID0+IHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXI6IE9yZGVyKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGFwcGxpZWRPcmRlclByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLnB1c2goLi4uKG9yZGVyLmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGNhcnQpID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIGNhcnQuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zIHx8IFtdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5DaGVja291dDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKG9yZGVyKSA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBvcmRlci5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW11cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLk9yZGVyOlxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlXG4gICAgICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKG9yZGVyKSA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBvcmRlci5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW11cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W11cbiAgKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICBpZiAocHJvbW90aW9ucyAmJiBwcm9tb3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19