import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var SortingComponent = /** @class */ (function () {
    function SortingComponent() {
        this.sortListEvent = new EventEmitter();
    }
    SortingComponent.prototype.sortList = function (sortCode) {
        this.sortListEvent.emit(sortCode);
    };
    __decorate([
        Input()
    ], SortingComponent.prototype, "sortOptions", void 0);
    __decorate([
        Input()
    ], SortingComponent.prototype, "selectedOption", void 0);
    __decorate([
        Input()
    ], SortingComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], SortingComponent.prototype, "sortLabels", void 0);
    __decorate([
        Output()
    ], SortingComponent.prototype, "sortListEvent", void 0);
    SortingComponent = __decorate([
        Component({
            selector: 'cx-sorting',
            template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SortingComponent);
    return SortingComponent;
}());
export { SortingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFRdkI7SUFhRTtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFqQkQ7UUFEQyxLQUFLLEVBQUU7eURBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFOzREQUNlO0lBRXZCO1FBREMsS0FBSyxFQUFFO3lEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO3dEQUMrQjtJQUd2QztRQURDLE1BQU0sRUFBRTsyREFDMkI7SUFYekIsZ0JBQWdCO1FBTDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLG1XQUF1QztZQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csZ0JBQWdCLENBb0I1QjtJQUFELHVCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvcnRNb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNvcnRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc29ydGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc29ydE9wdGlvbnM6IFNvcnRNb2RlbFtdO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzb3J0TGFiZWxzOiB7IFtjb2RlOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBAT3V0cHV0KClcbiAgc29ydExpc3RFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb3J0TGlzdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0TGlzdEV2ZW50LmVtaXQoc29ydENvZGUpO1xuICB9XG59XG4iXX0=