import { Directive, HostListener, Injectable, Input, Optional, } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
/**
 * Service to control the behavior of the DismissModalDirective
 */
export class ModalDirectiveService {
    /**
     * Handler for the click event on the directive
     *
     * @param options.type    Action to perform after click - close or dismiss
     * @param options.reason  Reason for dismissing or closing the modal
     * @param url             url (optional) - exists only when the directive is also a `routerLink`.
     */
    onClick(options, activeModal, url) {
        let reason = options.reason;
        if (!reason && url) {
            reason = `Link click: ${url}`;
        }
        if (options.type === 'dismiss') {
            activeModal.dismiss(reason);
        }
        else if (options.type === 'close') {
            activeModal.close(reason);
        }
    }
}
ModalDirectiveService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalDirectiveService_Factory() { return new ModalDirectiveService(); }, token: ModalDirectiveService, providedIn: "root" });
ModalDirectiveService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/**
 * Directive to dismiss the modal on click
 */
export class ModalDirective {
    constructor(service, router, 
    // active modal can be injected only when the directive is projected inside modal
    activeModal, routerLink, routerLinkWithHref) {
        this.service = service;
        this.router = router;
        this.activeModal = activeModal;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
    /**
     * Returns URL in case when the directive is in the scope of a `routerLink` directive at the same time.
     */
    getUrl() {
        var _a;
        const routerLink = (_a = this.routerLink) !== null && _a !== void 0 ? _a : this.routerLinkWithHref;
        return routerLink
            ? this.router.serializeUrl(routerLink.urlTree)
            : undefined;
    }
    onClick() {
        if (this.activeModal) {
            this.service.onClick(this.options, this.activeModal, this.getUrl());
        }
    }
    /**
     * Converts the directive's inputs to the shape of modal directive options
     */
    get options() {
        return { type: this.cxModal, reason: this.cxModalReason };
    }
}
ModalDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxModal]',
            },] }
];
ModalDirective.ctorParameters = () => [
    { type: ModalDirectiveService },
    { type: Router },
    { type: NgbActiveModal, decorators: [{ type: Optional }] },
    { type: RouterLink, decorators: [{ type: Optional }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }] }
];
ModalDirective.propDecorators = {
    cxModal: [{ type: Input }],
    cxModalReason: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQWM1RDs7R0FFRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEM7Ozs7OztPQU1HO0lBQ0gsT0FBTyxDQUNMLE9BQThCLEVBQzlCLFdBQTJCLEVBQzNCLEdBQVk7UUFFWixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRTVCLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNuQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O0FBNEJEOztHQUVHO0FBSUgsTUFBTSxPQUFPLGNBQWM7SUFhekIsWUFDWSxPQUE4QixFQUM5QixNQUFjO0lBRXhCLGlGQUFpRjtJQUMzRCxXQUEyQixFQUUzQixVQUFzQixFQUN0QixrQkFBc0M7UUFQbEQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUdGLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUUzQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDM0QsQ0FBQztJQUVKOztPQUVHO0lBQ08sTUFBTTs7UUFDZCxNQUFNLFVBQVUsU0FBRyxJQUFJLENBQUMsVUFBVSxtQ0FBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDOUQsT0FBTyxVQUFVO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDOUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDO0lBR0QsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUQsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7O1lBZXNCLHFCQUFxQjtZQXBFbkMsTUFBTTtZQUNOLGNBQWMsdUJBdUVsQixRQUFRO1lBeEVJLFVBQVUsdUJBMEV0QixRQUFRO1lBMUVnQixrQkFBa0IsdUJBMkUxQyxRQUFROzs7c0JBZlYsS0FBSzs0QkFLTCxLQUFLO3NCQXVCTCxZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3RhYmxlLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxEaXJlY3RpdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFjdGlvbiB0byBwZXJmb3JtIGFmdGVyIGNsaWNrXG4gICAqL1xuICB0eXBlOiAnZGlzbWlzcycgfCAnY2xvc2UnO1xuXG4gIC8qKlxuICAgKiBSZWFzb24gZm9yIGRpc21pc3Npbmcgb3IgY2xvc2luZyB0aGUgbW9kYWxcbiAgICovXG4gIHJlYXNvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yIG9mIHRoZSBEaXNtaXNzTW9kYWxEaXJlY3RpdmVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGlyZWN0aXZlU2VydmljZSB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGRpcmVjdGl2ZVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucy50eXBlICAgIEFjdGlvbiB0byBwZXJmb3JtIGFmdGVyIGNsaWNrIC0gY2xvc2Ugb3IgZGlzbWlzc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5yZWFzb24gIFJlYXNvbiBmb3IgZGlzbWlzc2luZyBvciBjbG9zaW5nIHRoZSBtb2RhbFxuICAgKiBAcGFyYW0gdXJsICAgICAgICAgICAgIHVybCAob3B0aW9uYWwpIC0gZXhpc3RzIG9ubHkgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGFsc28gYSBgcm91dGVyTGlua2AuXG4gICAqL1xuICBvbkNsaWNrKFxuICAgIG9wdGlvbnM6IE1vZGFsRGlyZWN0aXZlT3B0aW9ucyxcbiAgICBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgdXJsPzogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGxldCByZWFzb24gPSBvcHRpb25zLnJlYXNvbjtcblxuICAgIGlmICghcmVhc29uICYmIHVybCkge1xuICAgICAgcmVhc29uID0gYExpbmsgY2xpY2s6ICR7dXJsfWA7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2Rpc21pc3MnKSB7XG4gICAgICBhY3RpdmVNb2RhbC5kaXNtaXNzKHJlYXNvbik7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIGFjdGl2ZU1vZGFsLmNsb3NlKHJlYXNvbik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIGRpc21pc3MgdGhlIG1vZGFsIG9uIGNsaWNrXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE1vZGFsXScsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIEFjdGlvbiB0byBwZXJmb3JtLCB3aGVuIHRoZSBkaXJlY3RpdmUgaXMgY2xpY2tlZCAtIGRpc21pc3Mgb3IgY2xvc2UuXG4gICAqXG4gICAqIFJlYXNvbiBjYW4gYmUgZ2l2ZW4gdmlhIGlucHV0IGBjeE1vZGFsUmVhc29uYCwgd2hpY2ggZmFsbGJhY2tzIHRvIFVSTCBvZiB0aGUgYHJvdXRlckxpbmtgIChpZiBleGlzdHMgb24gdGhlIHNhbWUgZWxlbWVudCkuXG4gICAqL1xuICBASW5wdXQoKSBjeE1vZGFsOiBNb2RhbERpcmVjdGl2ZU9wdGlvbnNbJ3R5cGUnXTtcblxuICAvKipcbiAgICogUmVhc29uIGZvciBjbG9zaW5nL2Rpc21pc3NpbmcgdGhlIG1vZGFsLiBGYWxsYmFja3MgdG8gVVJMIG9mIHRoZSBgcm91dGVyTGlua2AgKGlmIGV4aXN0cyBvbiB0aGUgc2FtZSBlbGVtZW50KS5cbiAgICovXG4gIEBJbnB1dCgpIGN4TW9kYWxSZWFzb246IE1vZGFsRGlyZWN0aXZlT3B0aW9uc1sncmVhc29uJ107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IE1vZGFsRGlyZWN0aXZlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG5cbiAgICAvLyBhY3RpdmUgbW9kYWwgY2FuIGJlIGluamVjdGVkIG9ubHkgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIHByb2plY3RlZCBpbnNpZGUgbW9kYWxcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHJvdXRlckxpbms6IFJvdXRlckxpbmssXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHJvdXRlckxpbmtXaXRoSHJlZjogUm91dGVyTGlua1dpdGhIcmVmXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgaW4gY2FzZSB3aGVuIHRoZSBkaXJlY3RpdmUgaXMgaW4gdGhlIHNjb3BlIG9mIGEgYHJvdXRlckxpbmtgIGRpcmVjdGl2ZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHJvdXRlckxpbmsgPSB0aGlzLnJvdXRlckxpbmsgPz8gdGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWY7XG4gICAgcmV0dXJuIHJvdXRlckxpbmtcbiAgICAgID8gdGhpcy5yb3V0ZXIuc2VyaWFsaXplVXJsKHJvdXRlckxpbmsudXJsVHJlZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZU1vZGFsKSB7XG4gICAgICB0aGlzLnNlcnZpY2Uub25DbGljayh0aGlzLm9wdGlvbnMsIHRoaXMuYWN0aXZlTW9kYWwsIHRoaXMuZ2V0VXJsKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgZGlyZWN0aXZlJ3MgaW5wdXRzIHRvIHRoZSBzaGFwZSBvZiBtb2RhbCBkaXJlY3RpdmUgb3B0aW9uc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBvcHRpb25zKCk6IE1vZGFsRGlyZWN0aXZlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHsgdHlwZTogdGhpcy5jeE1vZGFsLCByZWFzb246IHRoaXMuY3hNb2RhbFJlYXNvbiB9O1xuICB9XG59XG4iXX0=