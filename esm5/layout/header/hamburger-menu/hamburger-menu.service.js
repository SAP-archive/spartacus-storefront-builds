import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var HamburgerMenuService = /** @class */ (function () {
    function HamburgerMenuService(router) {
        var _this = this;
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function () {
            _this.toggle(true);
        });
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    HamburgerMenuService.prototype.toggle = function (forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    };
    HamburgerMenuService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    HamburgerMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(i0.ɵɵinject(i1.Router)); }, token: HamburgerMenuService, providedIn: "root" });
    HamburgerMenuService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], HamburgerMenuService);
    return HamburgerMenuService;
}());
export { HamburgerMenuService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEM7SUFHRSw4QkFBWSxNQUFjO1FBQTFCLGlCQU1DO1FBUkQsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdoRSxNQUFNLENBQUMsTUFBTTthQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksZUFBZSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7YUFDdkQsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILHFDQUFNLEdBQU4sVUFBTyxhQUF1QjtRQUM1QixJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Z0JBakJtQixNQUFNOzs7SUFIZixvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXFCaEM7K0JBN0JEO0NBNkJDLEFBckJELElBcUJDO1NBckJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSGFtYnVyZ2VyTWVudVNlcnZpY2Uge1xuICBpc0V4cGFuZGVkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xuICAgIHJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGUodHJ1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHRoZSBleHBhbmQgc3RhdGUgb2YgdGhlIGhhbWJ1cmdlciBtZW51XG4gICAqL1xuICB0b2dnbGUoZm9yY2VDb2xsYXBzZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZm9yY2VDb2xsYXBzZSkge1xuICAgICAgdGhpcy5pc0V4cGFuZGVkLm5leHQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRXhwYW5kZWQubmV4dCghdGhpcy5pc0V4cGFuZGVkLnZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==