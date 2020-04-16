import { __decorate, __param } from "tslib";
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
let WebComponentHandler = class WebComponentHandler {
    constructor(document, platform) {
        this.document = document;
        this.platform = platform;
        this.loadedWebComponents = {};
    }
    hasMatch(componentMapping) {
        return (typeof componentMapping.component === 'string' &&
            componentMapping.component.includes('#'));
    }
    getPriority() {
        return -10 /* LOW */; // low, as it's a default matcher
    }
    launcher(componentMapping, viewContainerRef, elementInjector) {
        return new Observable((subscriber) => {
            let webElement;
            let active = true;
            const injector = elementInjector !== null && elementInjector !== void 0 ? elementInjector : viewContainerRef.injector;
            const renderer = injector.get(Renderer2);
            const disposeFunc = () => {
                active = false;
                if (webElement) {
                    webElement.remove();
                }
            };
            this.initWebComponent(componentMapping.component, renderer).then((elementName) => {
                if (elementName) {
                    webElement = renderer.createElement(elementName);
                    const cmsComponentData = injector.get(CmsComponentData, null);
                    webElement.cxApi = Object.assign(Object.assign({}, injector.get(CxApiService)), { cmsComponentData });
                    renderer.appendChild(viewContainerRef.element.nativeElement.parentElement, webElement);
                    subscriber.next({ elementRef: new ElementRef(webElement) });
                    if (!active) {
                        disposeFunc();
                    }
                }
            });
            return disposeFunc;
        });
    }
    initWebComponent(component, renderer) {
        return new Promise((resolve) => {
            const [path, selector] = component.split('#');
            let script = this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(this.document.body, script);
                    if (isPlatformBrowser(this.platform)) {
                        script.onload = () => {
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
                const chainedOnload = script.onload;
                script.onload = () => {
                    chainedOnload();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    }
};
WebComponentHandler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
WebComponentHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function WebComponentHandler_Factory() { return new WebComponentHandler(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: WebComponentHandler, providedIn: "root" });
WebComponentHandler = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(DOCUMENT)),
    __param(1, Inject(PLATFORM_ID))
], WebComponentHandler);
export { WebComponentHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9oYW5kbGVycy93ZWItY29tcG9uZW50LmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFFVixXQUFXLEVBQ1gsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUUvQzs7R0FFRztBQUlILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLFlBQzhCLFFBQWEsRUFDVixRQUFhO1FBRGhCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDVixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBR3RDLHdCQUFtQixHQUE0QixFQUFFLENBQUM7SUFGdkQsQ0FBQztJQUlKLFFBQVEsQ0FBQyxnQkFBcUM7UUFDNUMsT0FBTyxDQUNMLE9BQU8sZ0JBQWdCLENBQUMsU0FBUyxLQUFLLFFBQVE7WUFDOUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QscUJBQW9CLENBQUMsaUNBQWlDO0lBQ3hELENBQUM7SUFFRCxRQUFRLENBQ04sZ0JBQXFDLEVBQ3JDLGdCQUFrQyxFQUNsQyxlQUEwQjtRQUUxQixPQUFPLElBQUksVUFBVSxDQUE2QixDQUFDLFVBQVUsRUFBRSxFQUFFO1lB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QUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOzs0Q0F6R0ksTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLFdBQVc7OztBQUhWLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBR0csV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEIsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FIWCxtQkFBbUIsQ0EyRy9CO1NBM0dZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vY29tcG9uZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEN4QXBpU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2N4LWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGhhbmRsZXIgcmVzcG9uc2libGUgZm9yIGxhdW5jaGluZyBjbXMgd2ViIGNvbXBvbmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBXZWJDb21wb25lbnRIYW5kbGVyIGltcGxlbWVudHMgQ29tcG9uZW50SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55XG4gICkge31cblxuICBwcml2YXRlIGxvYWRlZFdlYkNvbXBvbmVudHM6IHsgW3BhdGg6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgaGFzTWF0Y2goY29tcG9uZW50TWFwcGluZzogQ21zQ29tcG9uZW50TWFwcGluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgY29tcG9uZW50TWFwcGluZy5jb21wb25lbnQgPT09ICdzdHJpbmcnICYmXG4gICAgICBjb21wb25lbnRNYXBwaW5nLmNvbXBvbmVudC5pbmNsdWRlcygnIycpXG4gICAgKTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCk6IFByaW9yaXR5IHtcbiAgICByZXR1cm4gUHJpb3JpdHkuTE9XOyAvLyBsb3csIGFzIGl0J3MgYSBkZWZhdWx0IG1hdGNoZXJcbiAgfVxuXG4gIGxhdW5jaGVyKFxuICAgIGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBlbGVtZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBPYnNlcnZhYmxlPHsgZWxlbWVudFJlZjogRWxlbWVudFJlZiB9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHsgZWxlbWVudFJlZjogRWxlbWVudFJlZiB9Pigoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgbGV0IHdlYkVsZW1lbnQ7XG4gICAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gZWxlbWVudEluamVjdG9yID8/IHZpZXdDb250YWluZXJSZWYuaW5qZWN0b3I7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gaW5qZWN0b3IuZ2V0KFJlbmRlcmVyMik7XG5cbiAgICAgIGNvbnN0IGRpc3Bvc2VGdW5jID0gKCkgPT4ge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHdlYkVsZW1lbnQpIHtcbiAgICAgICAgICB3ZWJFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmluaXRXZWJDb21wb25lbnQoY29tcG9uZW50TWFwcGluZy5jb21wb25lbnQsIHJlbmRlcmVyKS50aGVuKFxuICAgICAgICAoZWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudE5hbWUpIHtcbiAgICAgICAgICAgIHdlYkVsZW1lbnQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgY21zQ29tcG9uZW50RGF0YSA9IGluamVjdG9yLmdldChDbXNDb21wb25lbnREYXRhLCBudWxsKTtcblxuICAgICAgICAgICAgd2ViRWxlbWVudC5jeEFwaSA9IHtcbiAgICAgICAgICAgICAgLi4uaW5qZWN0b3IuZ2V0KEN4QXBpU2VydmljZSksXG4gICAgICAgICAgICAgIGNtc0NvbXBvbmVudERhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgd2ViRWxlbWVudFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHsgZWxlbWVudFJlZjogbmV3IEVsZW1lbnRSZWYod2ViRWxlbWVudCkgfSk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgIGRpc3Bvc2VGdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGlzcG9zZUZ1bmM7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRXZWJDb21wb25lbnQoXG4gICAgY29tcG9uZW50OiBzdHJpbmcsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgW3BhdGgsIHNlbGVjdG9yXSA9IGNvbXBvbmVudC5zcGxpdCgnIycpO1xuXG4gICAgICBsZXQgc2NyaXB0ID0gdGhpcy5sb2FkZWRXZWJDb21wb25lbnRzW3BhdGhdO1xuXG4gICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgIHRoaXMubG9hZGVkV2ViQ29tcG9uZW50c1twYXRoXSA9IHNjcmlwdDtcbiAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXRoKTtcbiAgICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcmlwdCA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JpcHQub25sb2FkKSB7XG4gICAgICAgIC8vIElmIHNjcmlwdCBpcyBzdGlsbCBsb2FkaW5nIChoYXMgb25sb2FkIGNhbGxiYWNrIGRlZmluZWQpXG4gICAgICAgIC8vIGFkZCBuZXcgY2FsbGJhY2sgYW5kIGNoYWluIGl0IHdpdGggdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgICAgLy8gTmVlZGVkIHRvIHN1cHBvcnQgbG9hZGluZyBtdWx0aXBsZSBjb21wb25lbnRzIGZyb20gb25lIHNjcmlwdFxuICAgICAgICBjb25zdCBjaGFpbmVkT25sb2FkID0gc2NyaXB0Lm9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjaGFpbmVkT25sb2FkKCk7XG4gICAgICAgICAgcmVzb2x2ZShzZWxlY3Rvcik7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19