import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { filter, map, startWith } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/icon.model';
let MiniCartComponent = class MiniCartComponent {
    constructor(activeCartService) {
        this.activeCartService = activeCartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.activeCartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map((cart) => cart.deliveryItemsQuantity || 0));
        this.total$ = this.activeCartService.getActive().pipe(filter((cart) => !!cart.totalPrice), map((cart) => cart.totalPrice.formattedValue));
    }
};
MiniCartComponent.ctorParameters = () => [
    { type: ActiveCartService }
];
MiniCartComponent = __decorate([
    Component({
        selector: 'cx-mini-cart',
        template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">\n    {{ 'miniCart.total' | cxTranslate: { total: total$ | async } }}\n  </span>\n\n  <span class=\"count\">\n    {{ 'miniCart.count' | cxTranslate: { count: quantity$ | async } }}\n  </span>\n</a>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], MiniCartComponent);
export { MiniCartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT3ZELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBYTVCLFlBQXNCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBWjFELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFdEIsY0FBUyxHQUF1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUN2QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztRQUVGLFdBQU0sR0FBdUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDbEUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQzlDLENBQUM7SUFFMkQsQ0FBQztDQUMvRCxDQUFBOztZQUQwQyxpQkFBaUI7O0FBYi9DLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixvYkFBeUM7UUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGlCQUFpQixDQWM3QjtTQWRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1pbmktY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcXVhbnRpdHkkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgc3RhcnRXaXRoKHsgZGVsaXZlcnlJdGVtc1F1YW50aXR5OiAwIH0pLFxuICAgIG1hcCgoY2FydCkgPT4gY2FydC5kZWxpdmVyeUl0ZW1zUXVhbnRpdHkgfHwgMClcbiAgKTtcblxuICB0b3RhbCQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICBmaWx0ZXIoKGNhcnQpID0+ICEhY2FydC50b3RhbFByaWNlKSxcbiAgICBtYXAoKGNhcnQpID0+IGNhcnQudG90YWxQcmljZS5mb3JtYXR0ZWRWYWx1ZSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKSB7fVxufVxuIl19