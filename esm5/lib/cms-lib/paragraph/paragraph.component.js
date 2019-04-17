/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(component) {
        this.component = component;
    }
    ParagraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-paragraph',
                    template: "<p *ngIf=\"(component.data$ | async) as data\" [innerHTML]=\"data.content\"></p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParagraphComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    return ParagraphComponent;
}());
export { ParagraphComponent };
if (false) {
    /** @type {?} */
    ParagraphComponent.prototype.component;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3hGO0lBT0UsNEJBQW1CLFNBQWtEO1FBQWxELGNBQVMsR0FBVCxTQUFTLENBQXlDO0lBQUcsQ0FBQzs7Z0JBUDFFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsOEZBQXlDO29CQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVJRLGdCQUFnQjs7SUFXekIseUJBQUM7Q0FBQSxBQVJELElBUUM7U0FGWSxrQkFBa0I7OztJQUNqQix1Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDbXNQYXJhZ3JhcGhDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXJhZ3JhcGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhZ3JhcGhDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1BhcmFncmFwaENvbXBvbmVudD4pIHt9XG59XG4iXX0=