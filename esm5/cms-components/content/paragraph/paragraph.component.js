import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(component) {
        this.component = component;
    }
    ParagraphComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    ParagraphComponent = __decorate([
        Component({
            selector: 'cx-paragraph',
            template: "<p *ngIf=\"component.data$ | async as data\" [innerHTML]=\"data.content\"></p>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ParagraphComponent);
    return ParagraphComponent;
}());
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPeEY7SUFDRSw0QkFBbUIsU0FBa0Q7UUFBbEQsY0FBUyxHQUFULFNBQVMsQ0FBeUM7SUFBRyxDQUFDOztnQkFBM0MsZ0JBQWdCOztJQURuQyxrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsNEZBQXlDO1lBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxrQkFBa0IsQ0FFOUI7SUFBRCx5QkFBQztDQUFBLEFBRkQsSUFFQztTQUZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1BhcmFncmFwaENvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhcmFncmFwaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYWdyYXBoQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+KSB7fVxufVxuIl19