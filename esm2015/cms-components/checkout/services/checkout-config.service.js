import { Injectable } from '@angular/core';
import { CheckoutConfig, DeliveryModePreferences, } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/checkout-config";
export class CheckoutConfigService {
    constructor(checkoutConfig) {
        this.checkoutConfig = checkoutConfig;
        this.express = this.checkoutConfig.checkout.express;
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    compareDeliveryCost(deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    }
    findMatchingDeliveryMode(deliveryModes, index = 0) {
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                const leastExpensiveFound = deliveryModes.find((deliveryMode) => deliveryMode.deliveryCost.value !== 0);
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                const codeFound = deliveryModes.find((deliveryMode) => deliveryMode.code === this.defaultDeliveryMode[index]);
                if (codeFound) {
                    return codeFound.code;
                }
        }
        const lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    }
    getPreferredDeliveryMode(deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    }
    isExpressCheckout() {
        return this.express;
    }
    isGuestCheckout() {
        return this.guest;
    }
}
CheckoutConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(i0.ɵɵinject(i1.CheckoutConfig)); }, token: CheckoutConfigService, providedIn: "root" });
CheckoutConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsdUJBQXVCLEdBQ3hCLE1BQU0sMkJBQTJCLENBQUM7OztBQUtuQyxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUwxQyxZQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hELFVBQUssR0FBWSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsd0JBQW1CLEdBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztJQUVKLENBQUM7SUFFNUMsbUJBQW1CLENBQzNCLGFBQTJCLEVBQzNCLGFBQTJCO1FBRTNCLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDdkUsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQ0wsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQ25FO1lBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRVMsd0JBQXdCLENBQ2hDLGFBQTZCLEVBQzdCLEtBQUssR0FBRyxDQUFDO1FBRVQsUUFBUSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkMsS0FBSyx1QkFBdUIsQ0FBQyxJQUFJO2dCQUMvQixJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtvQkFDN0MsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUM5QjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyx1QkFBdUIsQ0FBQyxlQUFlO2dCQUMxQyxNQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQzVDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQ3hELENBQUM7Z0JBQ0YsSUFBSSxtQkFBbUIsRUFBRTtvQkFDdkIsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDUixLQUFLLHVCQUF1QixDQUFDLGNBQWM7Z0JBQ3pDLE9BQU8sYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3REO2dCQUNFLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQ2xDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FDZixZQUFZLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FDeEQsQ0FBQztnQkFDRixJQUFJLFNBQVMsRUFBRTtvQkFDYixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7aUJBQ3ZCO1NBQ0o7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDOUQsT0FBTyxRQUFRO1lBQ2IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsYUFBNkI7UUFDcEQsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7WUF2RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENoZWNrb3V0Q29uZmlnLFxuICBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGV4cHJlc3M6IGJvb2xlYW4gPSB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0LmV4cHJlc3M7XG4gIHByaXZhdGUgZ3Vlc3Q6IGJvb2xlYW4gPSB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0Lmd1ZXN0O1xuICBwcml2YXRlIGRlZmF1bHREZWxpdmVyeU1vZGU6IEFycmF5PERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzIHwgc3RyaW5nPiA9XG4gICAgdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5kZWZhdWx0RGVsaXZlcnlNb2RlIHx8IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCBjb21wYXJlRGVsaXZlcnlDb3N0KFxuICAgIGRlbGl2ZXJ5TW9kZTE6IERlbGl2ZXJ5TW9kZSxcbiAgICBkZWxpdmVyeU1vZGUyOiBEZWxpdmVyeU1vZGVcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoZGVsaXZlcnlNb2RlMS5kZWxpdmVyeUNvc3QudmFsdWUgPiBkZWxpdmVyeU1vZGUyLmRlbGl2ZXJ5Q29zdC52YWx1ZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRlbGl2ZXJ5TW9kZTEuZGVsaXZlcnlDb3N0LnZhbHVlIDwgZGVsaXZlcnlNb2RlMi5kZWxpdmVyeUNvc3QudmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKFxuICAgIGRlbGl2ZXJ5TW9kZXM6IERlbGl2ZXJ5TW9kZVtdLFxuICAgIGluZGV4ID0gMFxuICApOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5kZWZhdWx0RGVsaXZlcnlNb2RlW2luZGV4XSkge1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5GUkVFOlxuICAgICAgICBpZiAoZGVsaXZlcnlNb2Rlc1swXS5kZWxpdmVyeUNvc3QudmFsdWUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZGVsaXZlcnlNb2Rlc1swXS5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5MRUFTVF9FWFBFTlNJVkU6XG4gICAgICAgIGNvbnN0IGxlYXN0RXhwZW5zaXZlRm91bmQgPSBkZWxpdmVyeU1vZGVzLmZpbmQoXG4gICAgICAgICAgKGRlbGl2ZXJ5TW9kZSkgPT4gZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdC52YWx1ZSAhPT0gMFxuICAgICAgICApO1xuICAgICAgICBpZiAobGVhc3RFeHBlbnNpdmVGb3VuZCkge1xuICAgICAgICAgIHJldHVybiBsZWFzdEV4cGVuc2l2ZUZvdW5kLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLk1PU1RfRVhQRU5TSVZFOlxuICAgICAgICByZXR1cm4gZGVsaXZlcnlNb2Rlc1tkZWxpdmVyeU1vZGVzLmxlbmd0aCAtIDFdLmNvZGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBjb2RlRm91bmQgPSBkZWxpdmVyeU1vZGVzLmZpbmQoXG4gICAgICAgICAgKGRlbGl2ZXJ5TW9kZSkgPT5cbiAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZS5jb2RlID09PSB0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGVbaW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb2RlRm91bmQpIHtcbiAgICAgICAgICByZXR1cm4gY29kZUZvdW5kLmNvZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGFzdE1vZGUgPSB0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGUubGVuZ3RoIC0gMSA8PSBpbmRleDtcbiAgICByZXR1cm4gbGFzdE1vZGVcbiAgICAgID8gZGVsaXZlcnlNb2Rlc1swXS5jb2RlXG4gICAgICA6IHRoaXMuZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXMsIGluZGV4ICsgMSk7XG4gIH1cblxuICBnZXRQcmVmZXJyZWREZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2RlczogRGVsaXZlcnlNb2RlW10pOiBzdHJpbmcge1xuICAgIGRlbGl2ZXJ5TW9kZXMuc29ydCh0aGlzLmNvbXBhcmVEZWxpdmVyeUNvc3QpO1xuICAgIHJldHVybiB0aGlzLmZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzKTtcbiAgfVxuXG4gIGlzRXhwcmVzc0NoZWNrb3V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3M7XG4gIH1cblxuICBpc0d1ZXN0Q2hlY2tvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ3Vlc3Q7XG4gIH1cbn1cbiJdfQ==