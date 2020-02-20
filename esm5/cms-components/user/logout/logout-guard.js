import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, RoutingService, SemanticPathService, ProtectedRoutesService, FeatureConfigService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var LogoutGuard = /** @class */ (function () {
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     */
    function LogoutGuard(auth, cms, routing, semanticPathService, protectedRoutes, featureConfig) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.featureConfig = featureConfig;
    }
    LogoutGuard.prototype.canActivate = function () {
        var _this = this;
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap(function (hasPage) {
            if (!hasPage) {
                _this.redirect();
            }
        }));
    };
    LogoutGuard.prototype.redirect = function () {
        // TODO(issue:5666) Deprecated since 1.4
        var cxRoute = this.featureConfig.isLevel('1.4') &&
            this.protectedRoutes &&
            this.protectedRoutes.shouldProtect
            ? 'login'
            : 'home';
        this.routing.go({ cxRoute: cxRoute });
    };
    LogoutGuard.prototype.logout = function () {
        this.auth.logout();
    };
    LogoutGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: CmsService },
        { type: RoutingService },
        { type: SemanticPathService },
        { type: ProtectedRoutesService },
        { type: FeatureConfigService }
    ]; };
    LogoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: LogoutGuard, providedIn: "root" });
    LogoutGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], LogoutGuard);
    return LogoutGuard;
}());
export { LogoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtyQztJQUNFOzs7OztPQUtHO0lBQ0gscUJBQ1ksSUFBaUIsRUFDakIsR0FBZSxFQUNmLE9BQXVCLEVBQ3ZCLG1CQUF3QyxFQUN4QyxlQUF3QyxFQUN4QyxhQUFvQztRQUxwQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFDN0MsQ0FBQztJQUVKLGlDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLE9BQU8sSUFBSSxDQUFDLEdBQUc7YUFDWixPQUFPLENBQUM7WUFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO1NBQzVCLENBQUM7YUFDRCxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNULElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFUyw4QkFBUSxHQUFsQjtRQUNFLHdDQUF3QztRQUN4QyxJQUFNLE9BQU8sR0FDWCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhO1lBQ2hDLENBQUMsQ0FBQyxPQUFPO1lBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUViLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFUyw0QkFBTSxHQUFoQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBdkNpQixXQUFXO2dCQUNaLFVBQVU7Z0JBQ04sY0FBYztnQkFDRixtQkFBbUI7Z0JBQ3RCLHNCQUFzQjtnQkFDeEIsb0JBQW9COzs7SUFickMsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csV0FBVyxDQWdEdkI7c0JBakVEO0NBaUVDLEFBaERELElBZ0RDO1NBaERZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ21zU2VydmljZSxcbiAgUGFnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAqIENoZWNrICM1NjY2IGZvciBtb3JlIGluZm9cbiAgICpcbiAgICogVE9ETyhpc3N1ZTo1NjY2KSBEZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm90ZWN0ZWRSb3V0ZXM/OiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2dvdXQoKTtcblxuICAgIHJldHVybiB0aGlzLmNtc1xuICAgICAgLmhhc1BhZ2Uoe1xuICAgICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9nb3V0JyksXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGhhc1BhZ2UgPT4ge1xuICAgICAgICAgIGlmICghaGFzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVkaXJlY3QoKTogdm9pZCB7XG4gICAgLy8gVE9ETyhpc3N1ZTo1NjY2KSBEZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgIGNvbnN0IGN4Um91dGU6IHN0cmluZyA9XG4gICAgICB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS40JykgJiZcbiAgICAgIHRoaXMucHJvdGVjdGVkUm91dGVzICYmXG4gICAgICB0aGlzLnByb3RlY3RlZFJvdXRlcy5zaG91bGRQcm90ZWN0XG4gICAgICAgID8gJ2xvZ2luJ1xuICAgICAgICA6ICdob21lJztcblxuICAgIHRoaXMucm91dGluZy5nbyh7IGN4Um91dGUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgfVxufVxuIl19