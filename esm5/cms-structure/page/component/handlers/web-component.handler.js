import { __assign, __decorate, __param, __read } from "tslib";
import { ElementRef, Inject, Injectable, PLATFORM_ID, Renderer2, } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CxApiService } from '../services/cx-api.service';
import { CmsComponentData } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Component handler responsible for launching cms web components.
 */
var WebComponentHandler = /** @class */ (function () {
    function WebComponentHandler(document, platform) {
        this.document = document;
        this.platform = platform;
        this.loadedWebComponents = {};
    }
    WebComponentHandler.prototype.hasMatch = function (componentMapping) {
        return (typeof componentMapping.component === 'string' &&
            componentMapping.component.includes('#'));
    };
    WebComponentHandler.prototype.getPriority = function () {
        return -10 /* LOW */; // low, as it's a default matcher
    };
    WebComponentHandler.prototype.launcher = function (componentMapping, viewContainerRef, elementInjector) {
        var _this = this;
        return new Observable(function (subscriber) {
            var webElement;
            var active = true;
            var injector = elementInjector !== null && elementInjector !== void 0 ? elementInjector : viewContainerRef.injector;
            var renderer = injector.get(Renderer2);
            var disposeFunc = function () {
                active = false;
                if (webElement) {
                    webElement.remove();
                }
            };
            _this.initWebComponent(componentMapping.component, renderer).then(function (elementName) {
                if (elementName) {
                    webElement = renderer.createElement(elementName);
                    var cmsComponentData = injector.get(CmsComponentData, null);
                    webElement.cxApi = __assign(__assign({}, injector.get(CxApiService)), { cmsComponentData: cmsComponentData });
                    renderer.appendChild(viewContainerRef.element.nativeElement.parentElement, webElement);
                    subscriber.next({ elementRef: new ElementRef(webElement) });
                    if (!active) {
                        disposeFunc();
                    }
                }
            });
            return disposeFunc;
        });
    };
    WebComponentHandler.prototype.initWebComponent = function (component, renderer) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = __read(component.split('#'), 2), path = _a[0], selector = _a[1];
            var script = _this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    _this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(_this.document.body, script);
                    if (isPlatformBrowser(_this.platform)) {
                        script.onload = function () {
                            script.onload = null;
                        };
                    }
                }
                else {
                    script = {};
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                var chainedOnload_1 = script.onload;
                script.onload = function () {
                    chainedOnload_1();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    };
    WebComponentHandler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    WebComponentHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function WebComponentHandler_Factory() { return new WebComponentHandler(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: WebComponentHandler, providedIn: "root" });
    WebComponentHandler = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(DOCUMENT)),
        __param(1, Inject(PLATFORM_ID))
    ], WebComponentHandler);
    return WebComponentHandler;
}());
export { WebComponentHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9oYW5kbGVycy93ZWItY29tcG9uZW50LmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFFVixXQUFXLEVBQ1gsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUUvQzs7R0FFRztBQUlIO0lBQ0UsNkJBQzhCLFFBQWEsRUFDVixRQUFhO1FBRGhCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDVixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBR3RDLHdCQUFtQixHQUE0QixFQUFFLENBQUM7SUFGdkQsQ0FBQztJQUlKLHNDQUFRLEdBQVIsVUFBUyxnQkFBcUM7UUFDNUMsT0FBTyxDQUNMLE9BQU8sZ0JBQWdCLENBQUMsU0FBUyxLQUFLLFFBQVE7WUFDOUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UscUJBQW9CLENBQUMsaUNBQWlDO0lBQ3hELENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQ0UsZ0JBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxlQUEwQjtRQUg1QixpQkErQ0M7UUExQ0MsT0FBTyxJQUFJLFVBQVUsQ0FBNkIsVUFBQyxVQUFVO1lBQzNELElBQUks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LENBQUMsQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0RBeEdFLE1BQU0sU0FBQyxRQUFRO2dEQUNmLE1BQU0sU0FBQyxXQUFXOzs7SUFIVixtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUdHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hCLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO09BSFgsbUJBQW1CLENBMkcvQjs4QkFqSUQ7Q0FpSUMsQUEzR0QsSUEyR0M7U0EzR1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9jb21wb25lbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ3hBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY3gtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZywgUHJpb3JpdHkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsJztcblxuLyoqXG4gKiBDb21wb25lbnQgaGFuZGxlciByZXNwb25zaWJsZSBmb3IgbGF1bmNoaW5nIGNtcyB3ZWIgY29tcG9uZW50cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudEhhbmRsZXIgaW1wbGVtZW50cyBDb21wb25lbnRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgbG9hZGVkV2ViQ29tcG9uZW50czogeyBbcGF0aDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBoYXNNYXRjaChjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudCA9PT0gJ3N0cmluZycgJiZcbiAgICAgIGNvbXBvbmVudE1hcHBpbmcuY29tcG9uZW50LmluY2x1ZGVzKCcjJylcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7IC8vIGxvdywgYXMgaXQncyBhIGRlZmF1bHQgbWF0Y2hlclxuICB9XG5cbiAgbGF1bmNoZXIoXG4gICAgY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmIH0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8eyBlbGVtZW50UmVmOiBFbGVtZW50UmVmIH0+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgICBsZXQgd2ViRWxlbWVudDtcbiAgICAgIGxldCBhY3RpdmUgPSB0cnVlO1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSBlbGVtZW50SW5qZWN0b3IgPz8gdmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBpbmplY3Rvci5nZXQoUmVuZGVyZXIyKTtcblxuICAgICAgY29uc3QgZGlzcG9zZUZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAod2ViRWxlbWVudCkge1xuICAgICAgICAgIHdlYkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaW5pdFdlYkNvbXBvbmVudChjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudCwgcmVuZGVyZXIpLnRoZW4oXG4gICAgICAgIChlbGVtZW50TmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50TmFtZSkge1xuICAgICAgICAgICAgd2ViRWxlbWVudCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBjbXNDb21wb25lbnREYXRhID0gaW5qZWN0b3IuZ2V0KENtc0NvbXBvbmVudERhdGEsIG51bGwpO1xuXG4gICAgICAgICAgICB3ZWJFbGVtZW50LmN4QXBpID0ge1xuICAgICAgICAgICAgICAuLi5pbmplY3Rvci5nZXQoQ3hBcGlTZXJ2aWNlKSxcbiAgICAgICAgICAgICAgY21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgICAgICB3ZWJFbGVtZW50XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoeyBlbGVtZW50UmVmOiBuZXcgRWxlbWVudFJlZih3ZWJFbGVtZW50KSB9KTtcblxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgICAgZGlzcG9zZUZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkaXNwb3NlRnVuYztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFdlYkNvbXBvbmVudChcbiAgICBjb21wb25lbnQ6IHN0cmluZyxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBbcGF0aCwgc2VsZWN0b3JdID0gY29tcG9uZW50LnNwbGl0KCcjJyk7XG5cbiAgICAgIGxldCBzY3JpcHQgPSB0aGlzLmxvYWRlZFdlYkNvbXBvbmVudHNbcGF0aF07XG5cbiAgICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgc2NyaXB0ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdID0gc2NyaXB0O1xuICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhdGgpO1xuICAgICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcbiAgICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NyaXB0ID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNjcmlwdC5vbmxvYWQpIHtcbiAgICAgICAgLy8gSWYgc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgKGhhcyBvbmxvYWQgY2FsbGJhY2sgZGVmaW5lZClcbiAgICAgICAgLy8gYWRkIG5ldyBjYWxsYmFjayBhbmQgY2hhaW4gaXQgd2l0aCB0aGUgZXhpc3Rpbmcgb25lLlxuICAgICAgICAvLyBOZWVkZWQgdG8gc3VwcG9ydCBsb2FkaW5nIG11bHRpcGxlIGNvbXBvbmVudHMgZnJvbSBvbmUgc2NyaXB0XG4gICAgICAgIGNvbnN0IGNoYWluZWRPbmxvYWQgPSBzY3JpcHQub25sb2FkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGNoYWluZWRPbmxvYWQoKTtcbiAgICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=