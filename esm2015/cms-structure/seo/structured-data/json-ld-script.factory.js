import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, RendererFactory2, SecurityContext, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { SeoConfig } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../config/seo.config";
export class JsonLdScriptFactory {
    constructor(platformId, winRef, rendererFactory, sanitizer, config) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
        this.config = config;
    }
    build(schema) {
        if (schema && this.isJsonLdRequired()) {
            this.getJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    }
    /**
     * Indicates whether json ld data should be generated.
     *
     * This is only required on the server, but can be enabled in dev mode.
     */
    isJsonLdRequired() {
        var _a, _b;
        return (!isPlatformBrowser(this.platformId) ||
            (isDevMode() && !((_b = (_a = this.config.seo) === null || _a === void 0 ? void 0 : _a.structuredData) === null || _b === void 0 ? void 0 : _b.disableInDevMode)));
    }
    /**
     * Creates a json-ld script element. The element is created one, and appended
     * to the html body element.
     *
     * ```html
     * <script id="json-ld" type="application/ld+json">
     * </script>
     * ```
     */
    getJsonLdScriptElement() {
        const id = 'json-ld';
        let scriptElement = (this.winRef.document.getElementById(id));
        if (!scriptElement) {
            const renderer = this.rendererFactory.createRenderer(null, null);
            const script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    }
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    sanitize(schema) {
        return JSON.stringify(schema, (_key, value) => typeof value === 'string'
            ? this.sanitizer.sanitize(SecurityContext.HTML, value)
            : value);
    }
}
JsonLdScriptFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(i3.SeoConfig)); }, token: JsonLdScriptFactory, providedIn: "root" });
JsonLdScriptFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
JsonLdScriptFactory.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: SeoConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1zY3JpcHQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9qc29uLWxkLXNjcmlwdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBRVgsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQUt0QyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQ2lDLFVBQWtCLEVBQ3ZDLE1BQWlCLEVBQ2pCLGVBQWlDLEVBQ2pDLFNBQXVCLEVBQ3ZCLE1BQWlCO1FBSkksZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDMUIsQ0FBQztJQUVKLEtBQUssQ0FBQyxNQUFZO1FBQ2hCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQkFBZ0I7O1FBQ2QsT0FBTyxDQUNMLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxDQUFDLFNBQVMsRUFBRSxJQUFJLGNBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLDBDQUFFLGNBQWMsMENBQUUsZ0JBQWdCLENBQUEsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ08sc0JBQXNCO1FBQzlCLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNyQixJQUFJLGFBQWEsR0FBeUMsQ0FDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUN4QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLFFBQVEsR0FBYyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FDN0QsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELGFBQWEsR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsTUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQzVDLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxLQUFLLENBQ1YsQ0FBQztJQUNKLENBQUM7Ozs7WUF2RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7eUNBR0ksTUFBTSxTQUFDLFdBQVc7WUFSZCxTQUFTO1lBSmhCLGdCQUFnQjtZQUdULFlBQVk7WUFFWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFNlY3VyaXR5Q29udGV4dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTZW9Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkU2NyaXB0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNlb0NvbmZpZ1xuICApIHt9XG5cbiAgYnVpbGQoc2NoZW1hOiB7fVtdKTogdm9pZCB7XG4gICAgaWYgKHNjaGVtYSAmJiB0aGlzLmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgdGhpcy5nZXRKc29uTGRTY3JpcHRFbGVtZW50KCkuaW5uZXJIVE1MID0gdGhpcy5zYW5pdGl6ZShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBqc29uIGxkIGRhdGEgc2hvdWxkIGJlIGdlbmVyYXRlZC5cbiAgICpcbiAgICogVGhpcyBpcyBvbmx5IHJlcXVpcmVkIG9uIHRoZSBzZXJ2ZXIsIGJ1dCBjYW4gYmUgZW5hYmxlZCBpbiBkZXYgbW9kZS5cbiAgICovXG4gIGlzSnNvbkxkUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpIHx8XG4gICAgICAoaXNEZXZNb2RlKCkgJiYgIXRoaXMuY29uZmlnLnNlbz8uc3RydWN0dXJlZERhdGE/LmRpc2FibGVJbkRldk1vZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEganNvbi1sZCBzY3JpcHQgZWxlbWVudC4gVGhlIGVsZW1lbnQgaXMgY3JlYXRlZCBvbmUsIGFuZCBhcHBlbmRlZFxuICAgKiB0byB0aGUgaHRtbCBib2R5IGVsZW1lbnQuXG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPHNjcmlwdCBpZD1cImpzb24tbGRcIiB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPlxuICAgKiA8L3NjcmlwdD5cbiAgICogYGBgXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0SnNvbkxkU2NyaXB0RWxlbWVudCgpOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSAnanNvbi1sZCc7XG4gICAgbGV0IHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gPEhUTUxTY3JpcHRFbGVtZW50PihcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICk7XG5cbiAgICBpZiAoIXNjcmlwdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlcjIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNjcmlwdDogSFRNTFNjcmlwdEVsZW1lbnQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vbGQranNvbic7XG4gICAgICByZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemVzIHRoZSBnaXZlbiBqc29uLWxkIHNjaGVtYSBieSBsZXZlcmFnaW5nIHRoZSBhbmd1bGFyIEhUTUwgc2FuaXRpemVyLlxuICAgKlxuICAgKiBUaGUgZ2l2ZW4gc2NoZW1hIGlzIG5vdCB0cnVzdGVkLCBhcyBtYWxpY2lvdXMgY29kZSBjb3VsZCBiZSBpbmplY3RlZCAoWFNTKVxuICAgKiBpbnRvIHRoZSBqc29uLWxkIHNjcmlwdC5cbiAgICovXG4gIHNhbml0aXplKHNjaGVtYToge30pOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzY2hlbWEsIChfa2V5LCB2YWx1ZSkgPT5cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgdmFsdWUpXG4gICAgICAgIDogdmFsdWVcbiAgICApO1xuICB9XG59XG4iXX0=