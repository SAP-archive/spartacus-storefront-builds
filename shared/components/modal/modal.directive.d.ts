import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export interface ModalDirectiveOptions {
    /**
     * Action to perform after click
     */
    type: 'dismiss' | 'close';
    /**
     * Reason for dismissing or closing the modal
     */
    reason?: string;
}
/**
 * Service to control the behavior of the DismissModalDirective
 */
export declare class ModalDirectiveService {
    /**
     * Handler for the click event on the directive
     *
     * @param options.type    Action to perform after click - close or dismiss
     * @param options.reason  Reason for dismissing or closing the modal
     * @param url             url (optional) - exists only when the directive is also a `routerLink`.
     */
    onClick(options: ModalDirectiveOptions, activeModal: NgbActiveModal, url?: string): void;
}
/**
 * Directive to dismiss the modal on click
 */
export declare class ModalDirective {
    protected service: ModalDirectiveService;
    protected router: Router;
    protected activeModal: NgbActiveModal;
    protected routerLink: RouterLink;
    protected routerLinkWithHref: RouterLinkWithHref;
    /**
     * Action to perform, when the directive is clicked - dismiss or close.
     *
     * Reason can be given via input `cxModalReason`, which fallbacks to URL of the `routerLink` (if exists on the same element).
     */
    cxModal: ModalDirectiveOptions['type'];
    /**
     * Reason for closing/dismissing the modal. Fallbacks to URL of the `routerLink` (if exists on the same element).
     */
    cxModalReason: ModalDirectiveOptions['reason'];
    constructor(service: ModalDirectiveService, router: Router, activeModal: NgbActiveModal, routerLink: RouterLink, routerLinkWithHref: RouterLinkWithHref);
    /**
     * Returns URL in case when the directive is in the scope of a `routerLink` directive at the same time.
     */
    protected getUrl(): string | undefined;
    onClick(): void;
    /**
     * Converts the directive's inputs to the shape of modal directive options
     */
    protected get options(): ModalDirectiveOptions;
}
