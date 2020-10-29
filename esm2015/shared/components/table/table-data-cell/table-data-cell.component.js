import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { OutletContextData } from '../../../../cms-structure/outlet/outlet.model';
export class TableDataCellComponent {
    constructor(outlet) {
        this.outlet = outlet;
        this.cls = true;
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
                template: `{{ value }}`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TableDataCellComponent.ctorParameters = () => [
    { type: OutletContextData }
];
TableDataCellComponent.propDecorators = {
    cls: [{ type: HostBinding, args: ['class.content-wrapper',] }],
    value: [{ type: HostBinding, args: ['attr.title',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWRhdGEtY2VsbC90YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBT2xGLE1BQU0sT0FBTyxzQkFBc0I7SUFHakMsWUFBc0IsTUFBbUQ7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBNkM7UUFGbkMsUUFBRyxHQUFHLElBQUksQ0FBQztJQUUyQixDQUFDO0lBRTdFLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUM7SUFDdEMsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLGlCQUFpQjs7O2tCQVF2QixXQUFXLFNBQUMsdUJBQXVCO29CQUluQyxXQUFXLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRDb250ZXh0RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBUYWJsZUhlYWRlck91dGxldENvbnRleHQgfSBmcm9tICcuLi90YWJsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYHt7IHZhbHVlIH19YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YUNlbGxDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRlbnQtd3JhcHBlcicpIGNscyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG91dGxldDogT3V0bGV0Q29udGV4dERhdGE8VGFibGVIZWFkZXJPdXRsZXRDb250ZXh0Pikge31cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGl0bGUnKVxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbFt0aGlzLmZpZWxkXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbW9kZWwoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXQ/LmNvbnRleHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGZpZWxkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGV0Py5jb250ZXh0Py5fZmllbGQ7XG4gIH1cbn1cbiJdfQ==