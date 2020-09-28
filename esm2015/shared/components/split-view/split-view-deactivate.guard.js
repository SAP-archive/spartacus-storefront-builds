import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Guard that can be used in split-view based child routes. This guard
 * delays the guard to be removed with 300ms, so that any css transition can be
 * finished before the DOM is destroyed.
 */
export class SplitViewDeactivateGuard {
    canDeactivate() {
        // TODO: this might cause an issue with e2e
        return timer(300).pipe(map(() => true));
    }
}
SplitViewDeactivateGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SplitViewDeactivateGuard_Factory() { return new SplitViewDeactivateGuard(); }, token: SplitViewDeactivateGuard, providedIn: "root" });
SplitViewDeactivateGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy1kZWFjdGl2YXRlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LWRlYWN0aXZhdGUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckM7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsYUFBYTtRQUNYLDJDQUEyQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztZQVBGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkRlYWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBHdWFyZCB0aGF0IGNhbiBiZSB1c2VkIGluIHNwbGl0LXZpZXcgYmFzZWQgY2hpbGQgcm91dGVzLiBUaGlzIGd1YXJkXG4gKiBkZWxheXMgdGhlIGd1YXJkIHRvIGJlIHJlbW92ZWQgd2l0aCAzMDBtcywgc28gdGhhdCBhbnkgY3NzIHRyYW5zaXRpb24gY2FuIGJlXG4gKiBmaW5pc2hlZCBiZWZvcmUgdGhlIERPTSBpcyBkZXN0cm95ZWQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdFZpZXdEZWFjdGl2YXRlR3VhcmQgaW1wbGVtZW50cyBDYW5EZWFjdGl2YXRlPGJvb2xlYW4+IHtcbiAgY2FuRGVhY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBUT0RPOiB0aGlzIG1pZ2h0IGNhdXNlIGFuIGlzc3VlIHdpdGggZTJlXG4gICAgcmV0dXJuIHRpbWVyKDMwMCkucGlwZShtYXAoKCkgPT4gdHJ1ZSkpO1xuICB9XG59XG4iXX0=