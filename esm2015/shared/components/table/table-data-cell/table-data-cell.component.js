import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { OutletContextData } from '../../../../cms-structure/outlet/outlet.model';
export class TableDataCellComponent {
    constructor(outlet) {
        this.outlet = outlet;
    }
    get value() {
        return this.model[this.field];
    }
    get model() {
        var _a;
        return (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.context;
    }
    get field() {
        var _a, _b;
        return (_b = (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b._field;
    }
}
TableDataCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-table-data-cell',
                template: `{{ value }}`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TableDataCellComponent.ctorParameters = () => [
    { type: OutletContextData }
];
TableDataCellComponent.propDecorators = {
    value: [{ type: HostBinding, args: ['attr.title',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWRhdGEtY2VsbC90YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBUWxGLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBc0IsTUFBbUQ7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBNkM7SUFBRyxDQUFDO0lBRTdFLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUM7SUFDdEMsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVBRLGlCQUFpQjs7O29CQVd2QixXQUFXLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRDb250ZXh0RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBUYWJsZUhlYWRlck91dGxldENvbnRleHQgfSBmcm9tICcuLi90YWJsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRhYmxlLWRhdGEtY2VsbCcsXG4gIHRlbXBsYXRlOiBge3sgdmFsdWUgfX1gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhQ2VsbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvdXRsZXQ6IE91dGxldENvbnRleHREYXRhPFRhYmxlSGVhZGVyT3V0bGV0Q29udGV4dD4pIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRpdGxlJylcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxbdGhpcy5maWVsZF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IG1vZGVsKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGV0Py5jb250ZXh0O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBmaWVsZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm91dGxldD8uY29udGV4dD8uX2ZpZWxkO1xuICB9XG59XG4iXX0=