/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { AuthService, UserService, RoutingService, RoutingConfigService, } from '@spartacus/core';
import { of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
export class LoginComponent {
    /**
     * @param {?} auth
     * @param {?} userService
     * @param {?=} routingService
     * @param {?=} routingConfigService
     */
    constructor(auth, userService, routingService, routingConfigService) {
        this.auth = auth;
        this.userService = userService;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
        this.hidden = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.user$ = this.auth.getUserToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token && !!token.access_token) {
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
        /** @type {?} */
        const checkoutPath = '/' + this.routingConfigService.getRouteConfig('checkout').paths[0] + '/';
        this.subscription = this.routingService
            .getRouterState()
            .subscribe((/**
         * @param {?} routerState
         * @return {?}
         */
        routerState => {
            if (routerState.state.context.id.includes(checkoutPath)) {
                this.hidden.next(true);
            }
            else {
                this.hidden.next(false);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login',
                template: "<ng-container *ngIf=\"!(hidden | async)\">\n  <ng-container *ngIf=\"user$ | async as user; else login\">\n    <div class=\"cx-login-greet\">\n      {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}\n    </div>\n    <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n  </ng-container>\n\n  <ng-template #login>\n    <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n      'miniLogin.signInRegister' | cxTranslate\n    }}</a>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: RoutingService },
    { type: RoutingConfigService }
];
if (false) {
    /** @type {?} */
    LoginComponent.prototype.user$;
    /** @type {?} */
    LoginComponent.prototype.hidden;
    /** @type {?} */
    LoginComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsdUJBQXVCLEdBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBRVgsV0FBVyxFQUNYLGNBQWMsRUFDZCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFnQixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBbUJ6QixZQUNVLElBQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLGNBQStCLEVBQy9CLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBckJyRCxXQUFNLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBc0IzRCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNoQixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQzs7Y0FFSSxZQUFZLEdBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1FBRTNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDcEMsY0FBYyxFQUFFO2FBQ2hCLFNBQVM7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsOGZBQXFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWJDLFdBQVc7WUFFWCxXQUFXO1lBQ1gsY0FBYztZQUNkLG9CQUFvQjs7OztJQVdwQiwrQkFBd0I7O0lBQ3hCLGdDQUE4RDs7SUFFOUQsc0NBQTJCOzs7OztJQWdCekIsOEJBQXlCOzs7OztJQUN6QixxQ0FBZ0M7Ozs7O0lBQ2hDLHdDQUF1Qzs7Ozs7SUFDdkMsOENBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIFVzZXIsXG4gIFVzZXJTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICBoaWRkZW46IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEueFxuICAgKiBOT1RFOiBjaGVjayBpc3N1ZTojNDE1NSBmb3IgbW9yZSBpbmZvXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6IzQxNTUpIERlcHJlY2F0ZWQgc2luY2UgMS54XG4gICAqL1xuICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlPzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZT86IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXIkID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4gJiYgISF0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgY2hlY2tvdXRQYXRoID1cbiAgICAgICcvJyArIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoJ2NoZWNrb3V0JykucGF0aHNbMF0gKyAnLyc7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAuc3Vic2NyaWJlKHJvdXRlclN0YXRlID0+IHtcbiAgICAgICAgaWYgKHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQuaWQuaW5jbHVkZXMoY2hlY2tvdXRQYXRoKSkge1xuICAgICAgICAgIHRoaXMuaGlkZGVuLm5leHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRkZW4ubmV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19