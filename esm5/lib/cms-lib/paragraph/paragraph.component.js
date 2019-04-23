/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(component) {
        this.component = component;
    }
    ParagraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-paragraph',
                    template: "<p *ngIf=\"(component.data$ | async) as data\" [innerHTML]=\"data.content\"></p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBTUUsNEJBQW1CLFNBQWtEO1FBQWxELGNBQVMsR0FBVCxTQUFTLENBQXlDO0lBQUcsQ0FBQzs7Z0JBTjFFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsOEZBQXlDO29CQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsZ0JBQWdCOztJQVN6Qix5QkFBQztDQUFBLEFBUEQsSUFPQztTQUZZLGtCQUFrQjs7O0lBQ2pCLHVDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1BhcmFncmFwaENvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhcmFncmFwaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYWdyYXBoQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+KSB7fVxufVxuIl19