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
    cls: [{ type: HostBinding, args: ['class.content-wrapper',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWRhdGEtY2VsbC90YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBT2xGLE1BQU0sT0FBTyxzQkFBc0I7SUFHakMsWUFBc0IsTUFBbUQ7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBNkM7UUFGbkMsUUFBRyxHQUFHLElBQUksQ0FBQztJQUUyQixDQUFDO0lBRTdFLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUM7SUFDdEMsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLGlCQUFpQjs7O2tCQVF2QixXQUFXLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldENvbnRleHREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IFRhYmxlSGVhZGVyT3V0bGV0Q29udGV4dCB9IGZyb20gJy4uL3RhYmxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBge3sgdmFsdWUgfX1gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhQ2VsbENvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udGVudC13cmFwcGVyJykgY2xzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3V0bGV0OiBPdXRsZXRDb250ZXh0RGF0YTxUYWJsZUhlYWRlck91dGxldENvbnRleHQ+KSB7fVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vZGVsW3RoaXMuZmllbGRdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBtb2RlbCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLm91dGxldD8uY29udGV4dDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmllbGQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXQ/LmNvbnRleHQ/Ll9maWVsZDtcbiAgfVxufVxuIl19