import { CanActivate } from '@angular/router';
import { AuthService, CmsService, RoutingService, SemanticPathService, ProtectedRoutesService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LogoutGuard implements CanActivate {
    protected auth: AuthService;
    protected cms: CmsService;
    protected routing: RoutingService;
    protected semanticPathService: SemanticPathService;
    protected protectedRoutes?: ProtectedRoutesService;
    protected featureConfig?: FeatureConfigService;
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     */
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, semanticPathService: SemanticPathService, protectedRoutes?: ProtectedRoutesService, featureConfig?: FeatureConfigService);
    canActivate(): Observable<any>;
    protected redirect(): void;
    protected logout(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LogoutGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmQudHMiLCJzb3VyY2VzIjpbImxvZ291dC1ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQ21zU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFNlbWFudGljUGF0aFNlcnZpY2UsIFByb3RlY3RlZFJvdXRlc1NlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExvZ291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzPzogUHJvdGVjdGVkUm91dGVzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAqIENoZWNrICM1NjY2IGZvciBtb3JlIGluZm9cbiAgICAgKlxuICAgICAqIFRPRE8oaXNzdWU6NTY2NikgRGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgY21zOiBDbXNTZXJ2aWNlLCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSwgcHJvdGVjdGVkUm91dGVzPzogUHJvdGVjdGVkUm91dGVzU2VydmljZSwgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHJvdGVjdGVkIHJlZGlyZWN0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGxvZ291dCgpOiB2b2lkO1xufVxuIl19