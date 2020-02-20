import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AsmAuthService, AuthService, RoutingService, WindowRef, } from '@spartacus/core';
import { of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ASM_ENABLED_LOCAL_STORAGE_KEY } from '../asm-constants';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let AsmComponentService = class AsmComponentService {
    constructor(authService, asmAuthService, routingService, winRef) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.routingService = routingService;
        this.winRef = winRef;
    }
    logoutCustomerSupportAgentAndCustomer() {
        this.authService
            .getUserToken()
            .pipe(take(1))
            .subscribe(token => {
            if (this.asmAuthService.isCustomerEmulationToken(token)) {
                this.logoutCustomer();
            }
            this.asmAuthService.logoutCustomerSupportAgent();
        });
    }
    logoutCustomer() {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    }
    isCustomerEmulationSessionInProgress() {
        return this.authService
            .getUserToken()
            .pipe(mergeMap(userToken => of(this.asmAuthService.isCustomerEmulationToken(userToken))));
    }
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    unload() {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    }
};
AsmComponentService.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthService },
    { type: RoutingService },
    { type: WindowRef }
];
AsmComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AsmAuthService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.WindowRef)); }, token: AsmComponentService, providedIn: "root" });
AsmComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmComponentService);
export { AsmComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFdBQVcsRUFDWCxjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDOUIsWUFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixjQUE4QixFQUM5QixNQUFpQjtRQUhqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDMUIsQ0FBQztJQUVKLHFDQUFxQztRQUNuQyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsb0NBQW9DO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNILFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUM1RCxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE3QzBCLFdBQVc7WUFDUixjQUFjO1lBQ2QsY0FBYztZQUN0QixTQUFTOzs7QUFMbEIsbUJBQW1CO0lBSC9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxtQkFBbUIsQ0ErQy9CO1NBL0NZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFzbUF1dGhTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZIH0gZnJvbSAnLi4vYXNtLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Db21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXNtQXV0aFNlcnZpY2U6IEFzbUF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUodG9rZW4gPT4ge1xuICAgICAgICBpZiAodGhpcy5hc21BdXRoU2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odG9rZW4pKSB7XG4gICAgICAgICAgdGhpcy5sb2dvdXRDdXN0b21lcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXNtQXV0aFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0Q3VzdG9tZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtZXJnZU1hcCh1c2VyVG9rZW4gPT5cbiAgICAgICAgICBvZih0aGlzLmFzbUF1dGhTZXJ2aWNlLmlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW4pKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlJ3JlIGN1cnJlbnRseSBvbmx5IHJlbW92aW5nIHRoZSBwZXJzaXN0ZWQgc3RvcmFnZSBpbiB0aGUgYnJvd3NlclxuICAgKiB0byBlbnN1cmUgdGhlIEFTTSBleHBlcmllbmNlIGlzbid0IGxvYWRlZCBvbiB0aGUgbmV4dCB2aXNpdC4gVGhlcmUgYXJlIGEgZmV3XG4gICAqIG9wdGltc2lhdGlvbnMgd2UgY291bGQgdGhpbmsgb2Y6XG4gICAqIC0gZHJvcCB0aGUgYGFzbWAgcGFyYW1ldGVyIGZyb20gdGhlIFVSTCwgaW4gY2FzZSBpdCdzIHN0aWxsIHRoZXJlXG4gICAqIC0gcmVtb3ZlIHRoZSBnZW5lcmF0ZWQgVUkgZnJvbSB0aGUgRE9NIChvdXRsZXRzIGN1cnJlbnRseSBkbyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgKi9cbiAgdW5sb2FkKCkge1xuICAgIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==