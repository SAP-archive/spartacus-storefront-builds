import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Guard that can be used in split-view based child routes. This guard
 * delays the guard to be removed with 500ms, so that any css transition can be
 * finished before the DOM is destroyed.
 */
let SplitViewDeactivateGuard = class SplitViewDeactivateGuard {
    canDeactivate() {
        return timer(500).pipe(map(() => true));
    }
};
SplitViewDeactivateGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SplitViewDeactivateGuard_Factory() { return new SplitViewDeactivateGuard(); }, token: SplitViewDeactivateGuard, providedIn: "root" });
SplitViewDeactivateGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SplitViewDeactivateGuard);
export { SplitViewDeactivateGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy1kZWFjdGl2YXRlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LWRlYWN0aXZhdGUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDOzs7O0dBSUc7QUFJSCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUNuQyxhQUFhO1FBQ1gsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRixDQUFBOztBQUpZLHdCQUF3QjtJQUhwQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csd0JBQXdCLENBSXBDO1NBSlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuRGVhY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEd1YXJkIHRoYXQgY2FuIGJlIHVzZWQgaW4gc3BsaXQtdmlldyBiYXNlZCBjaGlsZCByb3V0ZXMuIFRoaXMgZ3VhcmRcbiAqIGRlbGF5cyB0aGUgZ3VhcmQgdG8gYmUgcmVtb3ZlZCB3aXRoIDUwMG1zLCBzbyB0aGF0IGFueSBjc3MgdHJhbnNpdGlvbiBjYW4gYmVcbiAqIGZpbmlzaGVkIGJlZm9yZSB0aGUgRE9NIGlzIGRlc3Ryb3llZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0Vmlld0RlYWN0aXZhdGVHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Ym9vbGVhbj4ge1xuICBjYW5EZWFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aW1lcig1MDApLnBpcGUobWFwKCgpID0+IHRydWUpKTtcbiAgfVxufVxuIl19