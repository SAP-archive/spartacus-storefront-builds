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

//# sourceMappingURL=page-template-style.service.d.ts.map