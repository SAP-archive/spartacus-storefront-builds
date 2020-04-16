import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional, } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import * as i0 from "@angular/core";
import * as i1 from "../handlers/component-handler";
/**
 * Responsible for obtaining component handler for specified component mapping
 */
var ComponentHandlerService = /** @class */ (function () {
    function ComponentHandlerService(handlers) {
        this.handlers = handlers;
        this.invalidMappings = new Set();
    }
    /**
     * Get best matching component handler
     *
     * @param componentMapping
     */
    ComponentHandlerService.prototype.resolve = function (componentMapping) {
        var _a;
        var matchedHandlers = ((_a = this.handlers) !== null && _a !== void 0 ? _a : []).filter(function (handler) {
            return handler.hasMatch(componentMapping);
        });
        if (matchedHandlers.length > 1) {
            matchedHandlers.sort(function (a, b) {
                return (a.getPriority ? a.getPriority() : 0) -
                    (b.getPriority ? b.getPriority() : 0);
            });
        }
        if (isDevMode() && matchedHandlers.length === 0) {
            if (!this.invalidMappings.has(componentMapping)) {
                this.invalidMappings.add(componentMapping);
                console.warn("Can't resolve handler for component mapping: ", componentMapping);
            }
        }
        return matchedHandlers[matchedHandlers.length - 1];
    };
    /**
     * Get launcher for specified component mapping
     *
     * @param componentMapping
     * @param viewContainerRef
     * @param elementInjector
     */
    ComponentHandlerService.prototype.getLauncher = function (componentMapping, viewContainerRef, elementInjector) {
        var _a;
        return (_a = this.resolve(componentMapping)) === null || _a === void 0 ? void 0 : _a.launcher(componentMapping, viewContainerRef, elementInjector);
    };
    ComponentHandlerService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ComponentHandler,] }] }
    ]; };
    ComponentHandlerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentHandlerService_Factory() { return new ComponentHandlerService(i0.ɵɵinject(i1.ComponentHandler, 8)); }, token: ComponentHandlerService, providedIn: "root" });
    ComponentHandlerService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Optional()),
        __param(0, Inject(ComponentHandler))
    ], ComponentHandlerService);
    return ComponentHandlerService;
}());
export { ComponentHandlerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBSWpFOztHQUVHO0FBSUg7SUFDRSxpQ0FHWSxRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUc5QixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO0lBRnhELENBQUM7SUFJSjs7OztPQUlHO0lBQ08seUNBQU8sR0FBakIsVUFBa0IsZ0JBQXFDOztRQUNyRCxJQUFNLGVBQWUsR0FBRyxPQUFDLElBQUksQ0FBQyxRQUFRLG1DQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU87WUFDM0QsT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1FBQWxDLENBQWtDLENBQ25DLENBQUM7UUFDRixJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLGVBQWUsQ0FBQyxJQUFJLENBQ2xCLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0gsT0FBQSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRHJDLENBQ3FDLENBQ3hDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxFQUFFLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsK0NBQStDLEVBQy9DLGdCQUFnQixDQUNqQixDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILDZDQUFXLEdBQVgsVUFDRSxnQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGVBQTBCOztRQUUxQixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMENBQUUsUUFBUSxDQUM3QyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZjtJQUNKLENBQUM7OzRDQXBERSxRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjs7O0lBSGYsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFHRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtPQUhoQix1QkFBdUIsQ0F1RG5DO2tDQTNFRDtDQTJFQyxBQXZERCxJQXVEQztTQXZEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIGlzRGV2TW9kZSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4uL2hhbmRsZXJzL2NvbXBvbmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBvYnRhaW5pbmcgY29tcG9uZW50IGhhbmRsZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SGFuZGxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ29tcG9uZW50SGFuZGxlcilcbiAgICBwcm90ZWN0ZWQgaGFuZGxlcnM6IENvbXBvbmVudEhhbmRsZXJbXVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGludmFsaWRNYXBwaW5ncyA9IG5ldyBTZXQ8Q21zQ29tcG9uZW50TWFwcGluZz4oKTtcblxuICAvKipcbiAgICogR2V0IGJlc3QgbWF0Y2hpbmcgY29tcG9uZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudE1hcHBpbmdcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBDb21wb25lbnRIYW5kbGVyIHtcbiAgICBjb25zdCBtYXRjaGVkSGFuZGxlcnMgPSAodGhpcy5oYW5kbGVycyA/PyBbXSkuZmlsdGVyKChoYW5kbGVyKSA9PlxuICAgICAgaGFuZGxlci5oYXNNYXRjaChjb21wb25lbnRNYXBwaW5nKVxuICAgICk7XG4gICAgaWYgKG1hdGNoZWRIYW5kbGVycy5sZW5ndGggPiAxKSB7XG4gICAgICBtYXRjaGVkSGFuZGxlcnMuc29ydChcbiAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgKGEuZ2V0UHJpb3JpdHkgPyBhLmdldFByaW9yaXR5KCkgOiAwKSAtXG4gICAgICAgICAgKGIuZ2V0UHJpb3JpdHkgPyBiLmdldFByaW9yaXR5KCkgOiAwKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIG1hdGNoZWRIYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICghdGhpcy5pbnZhbGlkTWFwcGluZ3MuaGFzKGNvbXBvbmVudE1hcHBpbmcpKSB7XG4gICAgICAgIHRoaXMuaW52YWxpZE1hcHBpbmdzLmFkZChjb21wb25lbnRNYXBwaW5nKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiQ2FuJ3QgcmVzb2x2ZSBoYW5kbGVyIGZvciBjb21wb25lbnQgbWFwcGluZzogXCIsXG4gICAgICAgICAgY29tcG9uZW50TWFwcGluZ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlZEhhbmRsZXJzW21hdGNoZWRIYW5kbGVycy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGF1bmNoZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgKiBAcGFyYW0gdmlld0NvbnRhaW5lclJlZlxuICAgKiBAcGFyYW0gZWxlbWVudEluamVjdG9yXG4gICAqL1xuICBnZXRMYXVuY2hlcihcbiAgICBjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgZWxlbWVudEluamVjdG9yPzogSW5qZWN0b3JcbiAgKTogT2JzZXJ2YWJsZTx7IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7IGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+IH0+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKGNvbXBvbmVudE1hcHBpbmcpPy5sYXVuY2hlcihcbiAgICAgIGNvbXBvbmVudE1hcHBpbmcsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgZWxlbWVudEluamVjdG9yXG4gICAgKTtcbiAgfVxufVxuIl19