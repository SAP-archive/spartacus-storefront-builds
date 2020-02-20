import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPE } from '../icon/icon.model';
import { SiteContextComponentService } from './site-context-component.service';
var SiteContextSelectorComponent = /** @class */ (function () {
    function SiteContextSelectorComponent(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPE;
    }
    Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
        get: function () {
            return this.componentService.getItems(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
        get: function () {
            return this.componentService.getActiveItem(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "active", {
        set: function (value) {
            this.componentService.setActive(value, this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
        get: function () {
            return this.componentService.getLabel(this.context);
        },
        enumerable: true,
        configurable: true
    });
    SiteContextSelectorComponent.ctorParameters = function () { return [
        { type: SiteContextComponentService }
    ]; };
    __decorate([
        Input()
    ], SiteContextSelectorComponent.prototype, "context", void 0);
    SiteContextSelectorComponent = __decorate([
        Component({
            selector: 'cx-site-context-selector',
            template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SiteContextSelectorComponent);
    return SiteContextSelectorComponent;
}());
export { SiteContextSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVEvRTtJQVNFLHNDQUFvQixnQkFBNkM7UUFBN0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE2QjtRQVBqRSxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBTzhDLENBQUM7SUFFckUsc0JBQUksZ0RBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxREFBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFNO2FBQVYsVUFBVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBOztnQkFoQnFDLDJCQUEyQjs7SUFGeEQ7UUFBUixLQUFLLEVBQUU7aUVBQTBCO0lBUHZCLDRCQUE0QjtRQUx4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLHljQUFxRDtZQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csNEJBQTRCLENBMEJ4QztJQUFELG1DQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNpdGUtY29udGV4dC1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCB7XG4gIHNpdGVDb250ZXh0U2VydmljZTogU2l0ZUNvbnRleHQ8YW55PjtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICAvKipcbiAgICogdGhlIGNvbnRleHQgdHlwZSBjYW4gYmUgc2V0IGFzIGFuIGlucHV0LiBJZiB0aGUgY29udGV4dCBpc1xuICAgKiBub3QgZ2l2ZW4sIHRoZSBjb250ZXh0IHdpbGwgYmUgbG9hZGVkIGZyb20gdGhlIGJhY2tlbmQuXG4gICAqL1xuICBASW5wdXQoKSBjb250ZXh0OiBTaXRlQ29udGV4dFR5cGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRTZXJ2aWNlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgZ2V0IGl0ZW1zJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuZ2V0SXRlbXModGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBhY3RpdmVJdGVtJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuZ2V0QWN0aXZlSXRlbSh0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb21wb25lbnRTZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBsYWJlbCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTZXJ2aWNlLmdldExhYmVsKHRoaXMuY29udGV4dCk7XG4gIH1cbn1cbiJdfQ==