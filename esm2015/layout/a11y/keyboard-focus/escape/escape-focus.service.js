import { Injectable } from '@angular/core';
import { PersistFocusService } from '../persist/persist-focus.service';
import { SelectFocusUtility } from '../services/select-focus.util';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
export class EscapeFocusService extends PersistFocusService {
    constructor(selectFocusUtil) {
        super();
        this.selectFocusUtil = selectFocusUtil;
    }
    shouldFocus(config) {
        return !!(config === null || config === void 0 ? void 0 : config.focusOnEscape);
    }
    handleEscape(host, config, event) {
        var _a;
        if (this.shouldFocus(config)) {
            if (host !== event.target) {
                host.focus({ preventScroll: true });
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                if (config === null || config === void 0 ? void 0 : config.focusOnDoubleEscape) {
                    (_a = this.selectFocusUtil
                        .findFirstFocusable(host, { autofocus: true })) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
        }
    }
}
EscapeFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EscapeFocusService_Factory() { return new EscapeFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: EscapeFocusService, providedIn: "root" });
EscapeFocusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
EscapeFocusService.ctorParameters = () => [
    { type: SelectFocusUtility }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9lc2NhcGUvZXNjYXBlLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBS25FLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFDekQsWUFBc0IsZUFBbUM7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFEWSxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7SUFFekQsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUF5QjtRQUNuQyxPQUFPLENBQUMsRUFBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsYUFBYSxDQUFBLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVksQ0FDVixJQUFpQixFQUNqQixNQUF5QixFQUN6QixLQUFvQjs7UUFFcEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsbUJBQW1CLEVBQUU7b0JBQy9CLE1BQUEsSUFBSSxDQUFDLGVBQWU7eUJBQ2pCLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQywwQ0FDNUMsS0FBSyxHQUFHO2lCQUNiO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7WUE5QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RGb2N1c1V0aWxpdHkgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWxlY3QtZm9jdXMudXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFc2NhcGVGb2N1c1NlcnZpY2UgZXh0ZW5kcyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlbGVjdEZvY3VzVXRpbDogU2VsZWN0Rm9jdXNVdGlsaXR5KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNob3VsZEZvY3VzKGNvbmZpZzogRXNjYXBlRm9jdXNDb25maWcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFjb25maWc/LmZvY3VzT25Fc2NhcGU7XG4gIH1cblxuICBoYW5kbGVFc2NhcGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBFc2NhcGVGb2N1c0NvbmZpZyxcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudFxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRGb2N1cyhjb25maWcpKSB7XG4gICAgICBpZiAoaG9zdCAhPT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIGhvc3QuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25maWc/LmZvY3VzT25Eb3VibGVFc2NhcGUpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEZvY3VzVXRpbFxuICAgICAgICAgICAgLmZpbmRGaXJzdEZvY3VzYWJsZShob3N0LCB7IGF1dG9mb2N1czogdHJ1ZSB9KVxuICAgICAgICAgICAgPy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=