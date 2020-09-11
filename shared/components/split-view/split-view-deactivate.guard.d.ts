import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
/**
 * Guard that can be used in split-view based child routes. This guard
 * delays the guard to be removed with 500ms, so that any css transition can be
 * finished before the DOM is destroyed.
 */
import * as ɵngcc0 from '@angular/core';
export declare class SplitViewDeactivateGuard implements CanDeactivate<boolean> {
    canDeactivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SplitViewDeactivateGuard, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy1kZWFjdGl2YXRlLmd1YXJkLmQudHMiLCJzb3VyY2VzIjpbInNwbGl0LXZpZXctZGVhY3RpdmF0ZS5ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkRlYWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBHdWFyZCB0aGF0IGNhbiBiZSB1c2VkIGluIHNwbGl0LXZpZXcgYmFzZWQgY2hpbGQgcm91dGVzLiBUaGlzIGd1YXJkXG4gKiBkZWxheXMgdGhlIGd1YXJkIHRvIGJlIHJlbW92ZWQgd2l0aCA1MDBtcywgc28gdGhhdCBhbnkgY3NzIHRyYW5zaXRpb24gY2FuIGJlXG4gKiBmaW5pc2hlZCBiZWZvcmUgdGhlIERPTSBpcyBkZXN0cm95ZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNwbGl0Vmlld0RlYWN0aXZhdGVHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Ym9vbGVhbj4ge1xuICAgIGNhbkRlYWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cbiJdfQ==