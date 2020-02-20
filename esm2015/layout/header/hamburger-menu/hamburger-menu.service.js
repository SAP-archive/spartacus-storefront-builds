import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let HamburgerMenuService = class HamburgerMenuService {
    constructor(router) {
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => {
            this.toggle(true);
        });
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    toggle(forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    }
};
HamburgerMenuService.ctorParameters = () => [
    { type: Router }
];
HamburgerMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(i0.ɵɵinject(i1.Router)); }, token: HamburgerMenuService, providedIn: "root" });
HamburgerMenuService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], HamburgerMenuService);
export { HamburgerMenuService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFHL0IsWUFBWSxNQUFjO1FBRjFCLGVBQVUsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHaEUsTUFBTSxDQUFDLE1BQU07YUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGVBQWUsQ0FBQyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLGFBQXVCO1FBQzVCLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFsQnFCLE1BQU07OztBQUhmLG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csb0JBQW9CLENBcUJoQztTQXJCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlck1lbnVTZXJ2aWNlIHtcbiAgaXNFeHBhbmRlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlKHRydWUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlcyB0aGUgZXhwYW5kIHN0YXRlIG9mIHRoZSBoYW1idXJnZXIgbWVudVxuICAgKi9cbiAgdG9nZ2xlKGZvcmNlQ29sbGFwc2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGZvcmNlQ29sbGFwc2UpIHtcbiAgICAgIHRoaXMuaXNFeHBhbmRlZC5uZXh0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0V4cGFuZGVkLm5leHQoIXRoaXMuaXNFeHBhbmRlZC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=