import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AutoFocusDirective } from '../autofocus/auto-focus.directive';
import { TabFocusService } from './tab-focus.service';
/**
 * Directive to move the focus of ("locked") child elements. This is useful
 * for a nested list of tabs, carousel slides or any group of elements that
 * requires horizontal navigation.
 */
let TabFocusDirective = class TabFocusDirective extends AutoFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        /** `tab` defaults to true if the directive `cxTabFocus` is used. */
        this.defaultConfig = { tab: true };
        this.config = {};
    }
    handleNextTab(event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, 1 /* NEXT */, event);
        }
    }
    handlePreviousTab(event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, -1 /* PREV */, event);
        }
    }
};
TabFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TabFocusService }
];
__decorate([
    Input('cxTabFocus')
], TabFocusDirective.prototype, "config", void 0);
__decorate([
    HostListener('keydown.arrowRight', ['$event'])
], TabFocusDirective.prototype, "handleNextTab", null);
__decorate([
    HostListener('keydown.arrowLeft', ['$event'])
], TabFocusDirective.prototype, "handlePreviousTab", null);
TabFocusDirective = __decorate([
    Directive({
        selector: '[cxTabFocus]',
    })
], TabFocusDirective);
export { TabFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3RhYi90YWItZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDs7OztHQUlHO0FBSUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBa0IsU0FBUSxrQkFBa0I7SUFvQnZELFlBQ1ksVUFBc0IsRUFDdEIsT0FBd0I7UUFFbEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBckJwQyxvRUFBb0U7UUFDMUQsa0JBQWEsR0FBbUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFekIsV0FBTSxHQUFtQixFQUFFLENBQUM7SUFxQjNELENBQUM7SUFsQkQsYUFBYSxDQUFDLEtBQW9COztRQUNoQyxVQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLGdCQUFtQixLQUFLLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFHRCxpQkFBaUIsQ0FBQyxLQUFvQjs7UUFDcEMsVUFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxpQkFBbUIsS0FBSyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0NBUUYsQ0FBQTs7WUFMeUIsVUFBVTtZQUNiLGVBQWU7O0FBbEJmO0lBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7aURBQXVDO0FBRzNEO0lBREMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7c0RBSzlDO0FBR0Q7SUFEQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFLN0M7QUFsQlUsaUJBQWlCO0lBSDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO0tBQ3pCLENBQUM7R0FDVyxpQkFBaUIsQ0EwQjdCO1NBMUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXV0b2ZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1PVkVfRk9DVVMsIFRhYkZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi90YWItZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIG1vdmUgdGhlIGZvY3VzIG9mIChcImxvY2tlZFwiKSBjaGlsZCBlbGVtZW50cy4gVGhpcyBpcyB1c2VmdWxcbiAqIGZvciBhIG5lc3RlZCBsaXN0IG9mIHRhYnMsIGNhcm91c2VsIHNsaWRlcyBvciBhbnkgZ3JvdXAgb2YgZWxlbWVudHMgdGhhdFxuICogcmVxdWlyZXMgaG9yaXpvbnRhbCBuYXZpZ2F0aW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hUYWJGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEF1dG9Gb2N1c0RpcmVjdGl2ZSB7XG4gIC8qKiBgdGFiYCBkZWZhdWx0cyB0byB0cnVlIGlmIHRoZSBkaXJlY3RpdmUgYGN4VGFiRm9jdXNgIGlzIHVzZWQuICovXG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBUYWJGb2N1c0NvbmZpZyA9IHsgdGFiOiB0cnVlIH07XG5cbiAgQElucHV0KCdjeFRhYkZvY3VzJykgcHJvdGVjdGVkIGNvbmZpZzogVGFiRm9jdXNDb25maWcgPSB7fTtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBoYW5kbGVOZXh0VGFiKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnPy50YWIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5tb3ZlVGFiKHRoaXMuaG9zdCwgdGhpcy5jb25maWcsIE1PVkVfRk9DVVMuTkVYVCwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dMZWZ0JywgWyckZXZlbnQnXSlcbiAgaGFuZGxlUHJldmlvdXNUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb25maWc/LnRhYikge1xuICAgICAgdGhpcy5zZXJ2aWNlLm1vdmVUYWIodGhpcy5ob3N0LCB0aGlzLmNvbmZpZywgTU9WRV9GT0NVUy5QUkVWLCBldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRhYkZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxufVxuIl19