import { __assign, __decorate } from "tslib";
import { Injectable, } from '@angular/core';
import { from } from 'rxjs';
import { DefaultComponentHandler } from './default-component.handler';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./default-component.handler";
/**
 * Lazy component handler used for launching lazy loaded cms components implemented
 * as native Angular components.
 */
var LazyComponentHandler = /** @class */ (function () {
    function LazyComponentHandler(defaultHandler) {
        this.defaultHandler = defaultHandler;
    }
    /**
     * We want to mach dynamic import signature () => import('')
     */
    LazyComponentHandler.prototype.hasMatch = function (componentMapping) {
        return (typeof componentMapping.component === 'function' &&
            this.isNotClass(componentMapping.component));
    };
    LazyComponentHandler.prototype.isNotClass = function (symbol) {
        var signature = symbol.toString().substr(0, 20).replace(' ', '');
        return signature.startsWith('function()') || signature.startsWith('()=>');
    };
    LazyComponentHandler.prototype.getPriority = function () {
        return -10 /* LOW */;
    };
    LazyComponentHandler.prototype.launcher = function (componentMapping, viewContainerRef, elementInjector) {
        var _this = this;
        return from(componentMapping.component()).pipe(switchMap(function (component) {
            return _this.defaultHandler.launcher(__assign(__assign({}, componentMapping), { component: component }), viewContainerRef, elementInjector);
        }));
    };
    LazyComponentHandler.ctorParameters = function () { return [
        { type: DefaultComponentHandler }
    ]; };
    LazyComponentHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyComponentHandler_Factory() { return new LazyComponentHandler(i0.ɵɵinject(i1.DefaultComponentHandler)); }, token: LazyComponentHandler, providedIn: "root" });
    LazyComponentHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], LazyComponentHandler);
    return LazyComponentHandler;
}());
export { LazyComponentHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1jb21wb25lbnQuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvaGFuZGxlcnMvbGF6eS1jb21wb25lbnQuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzNDOzs7R0FHRztBQUlIO0lBQ0UsOEJBQXNCLGNBQXVDO1FBQXZDLG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtJQUFHLENBQUM7SUFFakU7O09BRUc7SUFDSCx1Q0FBUSxHQUFSLFVBQVMsZ0JBQXFDO1FBQzVDLE9BQU8sQ0FDTCxPQUFPLGdCQUFnQixDQUFDLFNBQVMsS0FBSyxVQUFVO1lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRU8seUNBQVUsR0FBbEIsVUFBbUIsTUFBVztRQUM1QixJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UscUJBQW9CO0lBQ3RCLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQ0UsZ0JBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxlQUEwQjtRQUg1QixpQkFjQztRQVRDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1QyxTQUFTLENBQUMsVUFBQyxTQUFTO1lBQ2xCLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLHVCQUNyQixnQkFBZ0IsS0FBRSxTQUFTLFdBQUEsS0FDaEMsZ0JBQWdCLEVBQ2hCLGVBQWUsQ0FDaEI7UUFKRCxDQUlDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkNxQyx1QkFBdUI7OztJQURsRCxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXFDaEM7K0JBekREO0NBeURDLEFBckNELElBcUNDO1NBckNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZywgUHJpb3JpdHkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmYXVsdENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2RlZmF1bHQtY29tcG9uZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vY29tcG9uZW50LWhhbmRsZXInO1xuXG4vKipcbiAqIExhenkgY29tcG9uZW50IGhhbmRsZXIgdXNlZCBmb3IgbGF1bmNoaW5nIGxhenkgbG9hZGVkIGNtcyBjb21wb25lbnRzIGltcGxlbWVudGVkXG4gKiBhcyBuYXRpdmUgQW5ndWxhciBjb21wb25lbnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGF6eUNvbXBvbmVudEhhbmRsZXIgaW1wbGVtZW50cyBDb21wb25lbnRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRlZmF1bHRIYW5kbGVyOiBEZWZhdWx0Q29tcG9uZW50SGFuZGxlcikge31cblxuICAvKipcbiAgICogV2Ugd2FudCB0byBtYWNoIGR5bmFtaWMgaW1wb3J0IHNpZ25hdHVyZSAoKSA9PiBpbXBvcnQoJycpXG4gICAqL1xuICBoYXNNYXRjaChjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdGhpcy5pc05vdENsYXNzKGNvbXBvbmVudE1hcHBpbmcuY29tcG9uZW50KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzTm90Q2xhc3Moc3ltYm9sOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBzeW1ib2wudG9TdHJpbmcoKS5zdWJzdHIoMCwgMjApLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5zdGFydHNXaXRoKCdmdW5jdGlvbigpJykgfHwgc2lnbmF0dXJlLnN0YXJ0c1dpdGgoJygpPT4nKTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCk6IFByaW9yaXR5IHtcbiAgICByZXR1cm4gUHJpb3JpdHkuTE9XO1xuICB9XG5cbiAgbGF1bmNoZXIoXG4gICAgY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmOyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PiB9PiB7XG4gICAgcmV0dXJuIGZyb20oY29tcG9uZW50TWFwcGluZy5jb21wb25lbnQoKSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50KSA9PlxuICAgICAgICB0aGlzLmRlZmF1bHRIYW5kbGVyLmxhdW5jaGVyKFxuICAgICAgICAgIHsgLi4uY29tcG9uZW50TWFwcGluZywgY29tcG9uZW50IH0sXG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICBlbGVtZW50SW5qZWN0b3JcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==