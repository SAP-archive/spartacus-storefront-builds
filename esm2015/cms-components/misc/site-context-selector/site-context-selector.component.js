import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPE } from '../icon/icon.model';
import { SiteContextComponentService } from './site-context-component.service';
export class SiteContextSelectorComponent {
    constructor(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPE;
    }
    get items$() {
        return this.componentService.getItems(this.context);
    }
    get activeItem$() {
        return this.componentService.getActiveItem(this.context);
    }
    set active(value) {
        this.componentService.setActive(value, this.context);
    }
    get label$() {
        return this.componentService.getLabel(this.context);
    }
}
SiteContextSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-site-context-selector',
                template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n    >\n      {{ item.label }}\n    </option></select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
SiteContextSelectorComponent.ctorParameters = () => [
    { type: SiteContextComponentService }
];
SiteContextSelectorComponent.propDecorators = {
    context: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBUS9FLE1BQU0sT0FBTyw0QkFBNEI7SUFTdkMsWUFBb0IsZ0JBQTZDO1FBQTdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFQakUsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQU84QyxDQUFDO0lBRXJFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsOGNBQXFEO2dCQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBUFEsMkJBQTJCOzs7c0JBZWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VHlwZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2l0ZS1jb250ZXh0LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IHtcbiAgc2l0ZUNvbnRleHRTZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+O1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIC8qKlxuICAgKiB0aGUgY29udGV4dCB0eXBlIGNhbiBiZSBzZXQgYXMgYW4gaW5wdXQuIElmIHRoZSBjb250ZXh0IGlzXG4gICAqIG5vdCBnaXZlbiwgdGhlIGNvbnRleHQgd2lsbCBiZSBsb2FkZWQgZnJvbSB0aGUgYmFja2VuZC5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRleHQ6IFNpdGVDb250ZXh0VHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFNlcnZpY2U6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSkge31cblxuICBnZXQgaXRlbXMkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U2VydmljZS5nZXRJdGVtcyh0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZUl0ZW0kKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U2VydmljZS5nZXRBY3RpdmVJdGVtKHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBzZXQgYWN0aXZlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbXBvbmVudFNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IGxhYmVsJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFNlcnZpY2UuZ2V0TGFiZWwodGhpcy5jb250ZXh0KTtcbiAgfVxufVxuIl19