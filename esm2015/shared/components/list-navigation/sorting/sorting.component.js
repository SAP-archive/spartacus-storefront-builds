import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
let SortingComponent = class SortingComponent {
    constructor() {
        this.sortListEvent = new EventEmitter();
    }
    sortList(sortCode) {
        this.sortListEvent.emit(sortCode);
    }
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
export { SortingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFRdkIsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFhM0I7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFDbEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQURDLEtBQUssRUFBRTtxREFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7d0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7cURBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7b0RBQytCO0FBR3ZDO0lBREMsTUFBTSxFQUFFO3VEQUMyQjtBQVh6QixnQkFBZ0I7SUFMNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsbVdBQXVDO1FBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxnQkFBZ0IsQ0FvQjVCO1NBcEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0TW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zb3J0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvcnRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHNvcnRPcHRpb25zOiBTb3J0TW9kZWxbXTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRPcHRpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc29ydExhYmVsczogeyBbY29kZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgQE91dHB1dCgpXG4gIHNvcnRMaXN0RXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ydExpc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICB9XG5cbiAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydExpc3RFdmVudC5lbWl0KHNvcnRDb2RlKTtcbiAgfVxufVxuIl19