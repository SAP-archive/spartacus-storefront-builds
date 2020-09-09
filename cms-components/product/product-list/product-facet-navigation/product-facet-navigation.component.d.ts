import { ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { BreakpointService } from '../../../../layout/breakpoint/breakpoint.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductFacetNavigationComponent {
    protected breakpointService: BreakpointService;
    iconTypes: typeof ICON_TYPE;
    /**
     * We delay the removal of DOM so that animations can finish playing before the
     * DOM is removed. Removing the DOM, as hidding is not enough to stop elements
     * to be focused.
     */
    protected CLOSE_DELAY: number;
    /**
     * Used to open the facet navigation in a dialog. The usage of the dialog depends
     * on the availability of the trigger element, which is driven by CSS.
     *
     * The reference is also used to refocus the trigger after the dialog is closed.
     */
    trigger: ElementRef<HTMLElement>;
    protected open$: BehaviorSubject<boolean>;
    /**
     * Emits the open state that indicates whether the facet list should be rendered.
     * This is either done instantly, or after the user triggers this by using the trigger
     * button. This driven by the visiibility of the trigger, so that the CSS drives
     * the behaviour. This can differ per breakpoint.
     *
     * There's a configurable delay for the closed state, so that the DOM is not removed
     * before some CSS animations are done.
     */
    isOpen$: Observable<boolean>;
    /**
     * Emits the active state that indicates whether the facet list is activated. Activation
     * is related to the css, so that a animation or transition can visualize opening/closing
     * the list (i.e. dialog).
     */
    isActive$: Observable<boolean>;
    constructor(breakpointService: BreakpointService);
    launch(): void;
    close(): void;
    /**
     * Indicates that the facet navigation should be open explicitely by a trigger.
     * This is fully controlled by CSS, where the trigger button can be hidden
     * (display:none) for certain screen sizes.
     */
    get hasTrigger(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductFacetNavigationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductFacetNavigationComponent, "cx-product-facet-navigation", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICAvKipcbiAgICAgKiBXZSBkZWxheSB0aGUgcmVtb3ZhbCBvZiBET00gc28gdGhhdCBhbmltYXRpb25zIGNhbiBmaW5pc2ggcGxheWluZyBiZWZvcmUgdGhlXG4gICAgICogRE9NIGlzIHJlbW92ZWQuIFJlbW92aW5nIHRoZSBET00sIGFzIGhpZGRpbmcgaXMgbm90IGVub3VnaCB0byBzdG9wIGVsZW1lbnRzXG4gICAgICogdG8gYmUgZm9jdXNlZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgQ0xPU0VfREVMQVk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIG9wZW4gdGhlIGZhY2V0IG5hdmlnYXRpb24gaW4gYSBkaWFsb2cuIFRoZSB1c2FnZSBvZiB0aGUgZGlhbG9nIGRlcGVuZHNcbiAgICAgKiBvbiB0aGUgYXZhaWxhYmlsaXR5IG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHdoaWNoIGlzIGRyaXZlbiBieSBDU1MuXG4gICAgICpcbiAgICAgKiBUaGUgcmVmZXJlbmNlIGlzIGFsc28gdXNlZCB0byByZWZvY3VzIHRoZSB0cmlnZ2VyIGFmdGVyIHRoZSBkaWFsb2cgaXMgY2xvc2VkLlxuICAgICAqL1xuICAgIHRyaWdnZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByb3RlY3RlZCBvcGVuJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHRoZSBvcGVuIHN0YXRlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGZhY2V0IGxpc3Qgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqIFRoaXMgaXMgZWl0aGVyIGRvbmUgaW5zdGFudGx5LCBvciBhZnRlciB0aGUgdXNlciB0cmlnZ2VycyB0aGlzIGJ5IHVzaW5nIHRoZSB0cmlnZ2VyXG4gICAgICogYnV0dG9uLiBUaGlzIGRyaXZlbiBieSB0aGUgdmlzaWliaWxpdHkgb2YgdGhlIHRyaWdnZXIsIHNvIHRoYXQgdGhlIENTUyBkcml2ZXNcbiAgICAgKiB0aGUgYmVoYXZpb3VyLiBUaGlzIGNhbiBkaWZmZXIgcGVyIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBUaGVyZSdzIGEgY29uZmlndXJhYmxlIGRlbGF5IGZvciB0aGUgY2xvc2VkIHN0YXRlLCBzbyB0aGF0IHRoZSBET00gaXMgbm90IHJlbW92ZWRcbiAgICAgKiBiZWZvcmUgc29tZSBDU1MgYW5pbWF0aW9ucyBhcmUgZG9uZS5cbiAgICAgKi9cbiAgICBpc09wZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHRoZSBhY3RpdmUgc3RhdGUgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZmFjZXQgbGlzdCBpcyBhY3RpdmF0ZWQuIEFjdGl2YXRpb25cbiAgICAgKiBpcyByZWxhdGVkIHRvIHRoZSBjc3MsIHNvIHRoYXQgYSBhbmltYXRpb24gb3IgdHJhbnNpdGlvbiBjYW4gdmlzdWFsaXplIG9wZW5pbmcvY2xvc2luZ1xuICAgICAqIHRoZSBsaXN0IChpLmUuIGRpYWxvZykuXG4gICAgICovXG4gICAgaXNBY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSk7XG4gICAgbGF1bmNoKCk6IHZvaWQ7XG4gICAgY2xvc2UoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgbmF2aWdhdGlvbiBzaG91bGQgYmUgb3BlbiBleHBsaWNpdGVseSBieSBhIHRyaWdnZXIuXG4gICAgICogVGhpcyBpcyBmdWxseSBjb250cm9sbGVkIGJ5IENTUywgd2hlcmUgdGhlIHRyaWdnZXIgYnV0dG9uIGNhbiBiZSBoaWRkZW5cbiAgICAgKiAoZGlzcGxheTpub25lKSBmb3IgY2VydGFpbiBzY3JlZW4gc2l6ZXMuXG4gICAgICovXG4gICAgZ2V0IGhhc1RyaWdnZXIoKTogYm9vbGVhbjtcbn1cbiJdfQ==