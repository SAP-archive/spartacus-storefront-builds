import { ComponentRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
/**
 * Service that adds the page template as a className to the application root element. If the root
 * element is cx-storefront, the resulting DOM would look like:
 *
 * ```html
 * <cx-storefront class="LandingPageTemplate">
 *  [...]
 * <cx-storefront>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class PageTemplateStyleService implements OnDestroy {
    protected pageLayoutService: PageLayoutService;
    /**
     * Keeps the subscriptions for this service so that we can unsubscribe on destroy.
     */
    protected subscription: Subscription;
    /**
     * Holds the current page template, so we can remove previous page templates from the element classList.
     */
    protected currentTemplate: string;
    constructor(pageLayoutService: PageLayoutService);
    initialize(ref: ComponentRef<any>): void;
    /**
     * Adds the page template as a style class to the given element. If any page template
     * was added before, we clean it up.
     */
    protected addStyleClass(el: HTMLElement, template: string): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageTemplateStyleService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS1zdHlsZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInBhZ2UtdGVtcGxhdGUtc3R5bGUuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgYWRkcyB0aGUgcGFnZSB0ZW1wbGF0ZSBhcyBhIGNsYXNzTmFtZSB0byB0aGUgYXBwbGljYXRpb24gcm9vdCBlbGVtZW50LiBJZiB0aGUgcm9vdFxuICogZWxlbWVudCBpcyBjeC1zdG9yZWZyb250LCB0aGUgcmVzdWx0aW5nIERPTSB3b3VsZCBsb29rIGxpa2U6XG4gKlxuICogYGBgaHRtbFxuICogPGN4LXN0b3JlZnJvbnQgY2xhc3M9XCJMYW5kaW5nUGFnZVRlbXBsYXRlXCI+XG4gKiAgWy4uLl1cbiAqIDxjeC1zdG9yZWZyb250PlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2VUZW1wbGF0ZVN0eWxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZTtcbiAgICAvKipcbiAgICAgKiBLZWVwcyB0aGUgc3Vic2NyaXB0aW9ucyBmb3IgdGhpcyBzZXJ2aWNlIHNvIHRoYXQgd2UgY2FuIHVuc3Vic2NyaWJlIG9uIGRlc3Ryb3kuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjdXJyZW50IHBhZ2UgdGVtcGxhdGUsIHNvIHdlIGNhbiByZW1vdmUgcHJldmlvdXMgcGFnZSB0ZW1wbGF0ZXMgZnJvbSB0aGUgZWxlbWVudCBjbGFzc0xpc3QuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRUZW1wbGF0ZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSk7XG4gICAgaW5pdGlhbGl6ZShyZWY6IENvbXBvbmVudFJlZjxhbnk+KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBwYWdlIHRlbXBsYXRlIGFzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQuIElmIGFueSBwYWdlIHRlbXBsYXRlXG4gICAgICogd2FzIGFkZGVkIGJlZm9yZSwgd2UgY2xlYW4gaXQgdXAuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCB0ZW1wbGF0ZTogc3RyaW5nKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19