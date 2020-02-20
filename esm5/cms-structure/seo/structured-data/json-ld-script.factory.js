import { __decorate, __param } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, Renderer2, RendererFactory2, SecurityContext, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/platform-browser";
var JsonLdScriptFactory = /** @class */ (function () {
    function JsonLdScriptFactory(platformId, winRef, rendererFactory, sanitizer) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
    }
    JsonLdScriptFactory.prototype.build = function (schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    };
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    JsonLdScriptFactory.prototype.isJsonLdRequired = function () {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    };
    JsonLdScriptFactory.prototype.createJsonLdScriptElement = function () {
        var id = 'json-ld';
        var scriptElement = (this.winRef.document.getElementById(id));
        if (!scriptElement) {
            var renderer = this.rendererFactory.createRenderer(null, null);
            var script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    };
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    JsonLdScriptFactory.prototype.sanitize = function (schema) {
        var _this = this;
        return JSON.stringify(schema, function (_key, value) {
            return typeof value === 'string'
                ? _this.sanitizer.sanitize(SecurityContext.HTML, value)
                : value;
        });
    };
    JsonLdScriptFactory.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: WindowRef },
        { type: RendererFactory2 },
        { type: DomSanitizer }
    ]; };
    JsonLdScriptFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DomSanitizer)); }, token: JsonLdScriptFactory, providedIn: "root" });
    JsonLdScriptFactory = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(PLATFORM_ID))
    ], JsonLdScriptFactory);
    return JsonLdScriptFactory;
}());
export { JsonLdScriptFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSzVDO0lBQ0UsNkJBQ2lDLFVBQWtCLEVBQ3ZDLE1BQWlCLEVBQ2pCLGVBQWlDLEVBQ2pDLFNBQXVCO1FBSEYsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQ2hDLENBQUM7SUFFSixtQ0FBSyxHQUFMLFVBQU0sTUFBWTtRQUNoQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCw4Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFTyx1REFBeUIsR0FBakM7UUFDRSxJQUFNLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDckIsSUFBSSxhQUFhLEdBQXlDLENBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FDeEMsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBTSxRQUFRLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQzdELElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztZQUNGLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztZQUNwQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RCxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0NBQVEsR0FBUixVQUFTLE1BQVU7UUFBbkIsaUJBTUM7UUFMQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDeEMsT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRO2dCQUN2QixDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxLQUFLO1FBRlQsQ0FFUyxDQUNWLENBQUM7SUFDSixDQUFDOzs2Q0FwREUsTUFBTSxTQUFDLFdBQVc7Z0JBQ0QsU0FBUztnQkFDQSxnQkFBZ0I7Z0JBQ3RCLFlBQVk7OztJQUx4QixtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUdHLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO09BRlgsbUJBQW1CLENBdUQvQjs4QkF2RUQ7Q0F1RUMsQUF2REQsSUF1REM7U0F2RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFNlY3VyaXR5Q29udGV4dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGRTY3JpcHRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIGJ1aWxkKHNjaGVtYToge31bXSk6IHZvaWQge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5pc0pzb25MZFJlcXVpcmVkKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlSnNvbkxkU2NyaXB0RWxlbWVudCgpLmlubmVySFRNTCA9IHRoaXMuc2FuaXRpemUoc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT25seSByZXR1cm4gc2NoZW1hIGRhdGEgaW4gY2FzZSBvZiBTU1Igb3IgZGV2ZWxvcG1lbnQgbW9kZSxcbiAgICogdG8gbm90IHdhc3RlIG1lbW9yeSB1bm5lY2Vzc2FyeS5cbiAgICovXG4gIGlzSnNvbkxkUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpIHx8IGlzRGV2TW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVKc29uTGRTY3JpcHRFbGVtZW50KCk6IEhUTUxTY3JpcHRFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9ICdqc29uLWxkJztcbiAgICBsZXQgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQgPSA8SFRNTFNjcmlwdEVsZW1lbnQ+KFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgKTtcblxuICAgIGlmICghc2NyaXB0RWxlbWVudCkge1xuICAgICAgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyMiA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsXG4gICAgICApO1xuICAgICAgY29uc3Qgc2NyaXB0OiBIVE1MU2NyaXB0RWxlbWVudCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xuICAgIH1cbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZXMgdGhlIGdpdmVuIGpzb24tbGQgc2NoZW1hIGJ5IGxldmVyYWdpbmcgdGhlIGFuZ3VsYXIgSFRNTCBzYW5pdGl6ZXIuXG4gICAqXG4gICAqIFRoZSBnaXZlbiBzY2hlbWEgaXMgbm90IHRydXN0ZWQsIGFzIG1hbGljaW91cyBjb2RlIGNvdWxkIGJlIGluamVjdGVkIChYU1MpXG4gICAqIGludG8gdGhlIGpzb24tbGQgc2NyaXB0LlxuICAgKi9cbiAgc2FuaXRpemUoc2NoZW1hOiB7fSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNjaGVtYSwgKF9rZXksIHZhbHVlKSA9PlxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCB2YWx1ZSlcbiAgICAgICAgOiB2YWx1ZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==