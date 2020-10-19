import { ElementRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
/**
 * Directive that Adds a style class to the host element based on the cms page
 * template. The CMS page template is driven by the CMS structure, which is configurable
 * in the backend.
 *
 * The style class is added to the host element of the directive. The host element is resolved
 * from the `elementRef`, or, in case the directive is used in an `ng-template`, by the
 * `TemplateRef`.
 *
 * An example of the usage is given below:
 *
 * ```html
 * <cx-storefront class="LandingPageTemplate">
 *   <ng-template cxPageTemplateStyle>...</ng-template>
 * <cx-storefront>
 * ```
 *
 * The style class can also be provided by an input:
 *
 * ```html
 * <ng-template [cxPageTemplateStyle]="pageTemplateName">
 * ```
 *
 */
export declare class PageTemplateDirective implements OnInit, OnDestroy {
    protected pageLayoutService: PageLayoutService;
    protected elementRef: ElementRef;
    protected templateRef: TemplateRef<HTMLElement>;
    /**
     * Adds a style class to the host element based on the cms page template, unless
     * the class is given as an input.
     *
     * The host element is either the actual host, or the parent element in case this
     * is used inside an `ng-template`.
     */
    cxPageTemplateStyle: string;
    templateClass: string;
    protected subscription: Subscription;
    /**
     * Holds the current page template, so we can remove previous page templates
     * from the element classList.
     */
    protected currentTemplate: string;
    constructor(pageLayoutService: PageLayoutService, elementRef: ElementRef, templateRef: TemplateRef<HTMLElement>);
    ngOnInit(): void;
    protected get template(): Observable<string>;
    /**
     * Adds the page template as a style class to the given element. If any page template
     * was added before, we clean it up.
     */
    protected addStyleClass(el: HTMLElement, template: string): void;
    /**
     * Returns the host element (`HTMLElement`).
     *
     * If the directive is used on an `ng-template`, we take the parent element, to
     * ensure that we're not ending up with a comment.
     */
    protected get host(): HTMLElement;
    ngOnDestroy(): void;
}
