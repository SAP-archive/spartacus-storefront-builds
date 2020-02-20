import { __decorate } from "tslib";
import { Directive, TemplateRef, Input, OnInit } from '@angular/core';
import { OutletService } from '../outlet.service';
let OutletRefDirective = class OutletRefDirective {
    constructor(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
};
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService }
];
__decorate([
    Input()
], OutletRefDirective.prototype, "cxOutletRef", void 0);
__decorate([
    Input()
], OutletRefDirective.prototype, "cxOutletPos", void 0);
OutletRefDirective = __decorate([
    Directive({
        selector: '[cxOutletRef]',
    })
], OutletRefDirective);
export { OutletRefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtsRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQU03QixZQUNVLEdBQXFCLEVBQ3JCLGFBQTRCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0YsQ0FBQTs7WUFQZ0IsV0FBVztZQUNELGFBQWE7O0FBTnRDO0lBREMsS0FBSyxFQUFFO3VEQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO3VEQUNvQjtBQUpqQixrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQWM5QjtTQWRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0UmVmXScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFJlZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGN4T3V0bGV0UmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGN4T3V0bGV0UG9zOiBPdXRsZXRQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRwbDogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQodGhpcy5jeE91dGxldFJlZiwgdGhpcy50cGwsIHRoaXMuY3hPdXRsZXRQb3MpO1xuICB9XG59XG4iXX0=