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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmQudHMiLCJzb3VyY2VzIjpbImxvZ291dC1ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBDbXNTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgU2VtYW50aWNQYXRoU2VydmljZSwgUHJvdGVjdGVkUm91dGVzU2VydmljZSwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9nb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm90ZWN0ZWRSb3V0ZXM/OiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICogQ2hlY2sgIzU2NjYgZm9yIG1vcmUgaW5mb1xuICAgICAqXG4gICAgICogVE9ETyhpc3N1ZTo1NjY2KSBEZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlLCBjbXM6IENtc1NlcnZpY2UsIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLCBwcm90ZWN0ZWRSb3V0ZXM/OiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PjtcbiAgICBwcm90ZWN0ZWQgcmVkaXJlY3QoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgbG9nb3V0KCk6IHZvaWQ7XG59XG4iXX0=