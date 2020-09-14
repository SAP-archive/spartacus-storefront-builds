import { CheckoutStep } from '../model/checkout-step.model';
import * as ɵngcc0 from '@angular/core';
export declare enum DeliveryModePreferences {
    FREE = "FREE",
    LEAST_EXPENSIVE = "LEAST_EXPENSIVE",
    MOST_EXPENSIVE = "MOST_EXPENSIVE"
}
export declare abstract class CheckoutConfig {
    checkout?: {
        /**
         * Set checkout steps as ordered array of pages.
         */
        steps?: Array<CheckoutStep>;
        /**
         * Allow for express checkout when default shipping method and payment method are available.
         */
        express?: boolean;
        /**
         * Default delivery mode for i.a. express checkout. Set preferences in order with general preferences (eg. DeliveryModePreferences.LEAST_EXPENSIVE) or specific delivery codes.
         */
        defaultDeliveryMode?: Array<DeliveryModePreferences | string>;
        /**
         * Allow for guest checkout.
         */
        guest?: boolean;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBlbnVtIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzIHtcbiAgICBGUkVFID0gXCJGUkVFXCIsXG4gICAgTEVBU1RfRVhQRU5TSVZFID0gXCJMRUFTVF9FWFBFTlNJVkVcIixcbiAgICBNT1NUX0VYUEVOU0lWRSA9IFwiTU9TVF9FWFBFTlNJVkVcIlxufVxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgQ2hlY2tvdXRDb25maWcge1xuICAgIGNoZWNrb3V0Pzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IGNoZWNrb3V0IHN0ZXBzIGFzIG9yZGVyZWQgYXJyYXkgb2YgcGFnZXMuXG4gICAgICAgICAqL1xuICAgICAgICBzdGVwcz86IEFycmF5PENoZWNrb3V0U3RlcD47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGxvdyBmb3IgZXhwcmVzcyBjaGVja291dCB3aGVuIGRlZmF1bHQgc2hpcHBpbmcgbWV0aG9kIGFuZCBwYXltZW50IG1ldGhvZCBhcmUgYXZhaWxhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhwcmVzcz86IGJvb2xlYW47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGRlbGl2ZXJ5IG1vZGUgZm9yIGkuYS4gZXhwcmVzcyBjaGVja291dC4gU2V0IHByZWZlcmVuY2VzIGluIG9yZGVyIHdpdGggZ2VuZXJhbCBwcmVmZXJlbmNlcyAoZWcuIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkxFQVNUX0VYUEVOU0lWRSkgb3Igc3BlY2lmaWMgZGVsaXZlcnkgY29kZXMuXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0RGVsaXZlcnlNb2RlPzogQXJyYXk8RGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMgfCBzdHJpbmc+O1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsb3cgZm9yIGd1ZXN0IGNoZWNrb3V0LlxuICAgICAgICAgKi9cbiAgICAgICAgZ3Vlc3Q/OiBib29sZWFuO1xuICAgIH07XG59XG4iXX0=