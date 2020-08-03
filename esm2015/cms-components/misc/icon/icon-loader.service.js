import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { IconConfig, IconConfigResource, IconOptions, IconResourceType, ICON_TYPE, } from './icon.model';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./icon.model";
import * as i3 from "@angular/platform-browser";
let IconLoaderService = class IconLoaderService {
    constructor(winRef, iconConfig, sanitizer) {
        this.winRef = winRef;
        this.iconConfig = iconConfig;
        this.sanitizer = sanitizer;
        this.loadedResources = [];
    }
    /**
     * Returns an html fragment which can be added to the DOM in a safe way.
     */
    getHtml(type) {
        if (this.isResourceType(type, IconResourceType.SVG)) {
            return this.sanitizer.bypassSecurityTrustHtml(`<svg><use xlink:href="${this.getSvgPath(type)}"></use></svg>`);
        }
        if (this.isResourceType(type, IconResourceType.TEXT)) {
            return this.sanitizer.bypassSecurityTrustHtml(this.getSymbol(type));
        }
    }
    /**
     * Return the direction for which the icon should mirror (ltr vs rtl). The icon direction
     * is configurable, but optional, as only a few icons should be flipped for rtl direction.
     */
    getFlipDirection(type) {
        var _a, _b;
        return (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.flipDirection) === null || _b === void 0 ? void 0 : _b[type];
    }
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    getStyleClasses(iconType) {
        return this.getSymbol(iconType) || '';
    }
    /**
     * Indicates whether the given `ICON_TYPE` is configured for
     * the given `IconResourceType`.
     */
    isResourceType(iconType, resourceType) {
        return (this.config.resources &&
            !!this.config.resources.find((res) => res.types && res.type === resourceType && res.types.includes(iconType)));
    }
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    getSvgPath(iconType) {
        const svgResource = this.config.resources.find((res) => res.type === IconResourceType.SVG &&
            res.types &&
            res.types.includes(iconType));
        if (svgResource) {
            return svgResource.url
                ? `${svgResource.url}#${this.getSymbol(iconType)}`
                : `#${this.getSymbol(iconType)}`;
        }
    }
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    addLinkResource(iconType) {
        const resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource &&
            resource.url &&
            !this.loadedResources.includes(resource.url)) {
            this.loadedResources.push(resource.url);
            const head = this.winRef.document.getElementsByTagName('head')[0];
            const link = this.winRef.document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = resource.url;
            head.appendChild(link);
        }
    }
    findResource(iconType, resourceType) {
        if (!this.config.resources) {
            return;
        }
        let resource = this.config.resources.find((res) => res.type === resourceType && res.types && res.types.includes(iconType));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.resources.find((res) => (res.type === resourceType && !res.types) || res.types === []);
        }
        return resource;
    }
    getSymbol(iconType) {
        if (this.config && this.config.symbols && this.config.symbols[iconType]) {
            return this.config.symbols[iconType];
        }
    }
    get config() {
        return this.iconConfig.icon;
    }
};
IconLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: IconConfig },
    { type: DomSanitizer }
];
IconLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.IconConfig), i0.ɵɵinject(i3.DomSanitizer)); }, token: IconLoaderService, providedIn: "root" });
IconLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], IconLoaderService);
export { IconLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDOzs7OztBQUt0QixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUU1QixZQUNZLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLFNBQXVCO1FBRnZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFSjs7T0FFRztJQUNILE9BQU8sQ0FBQyxJQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDM0MseUJBQXlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFB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LElBQUksS0FBSyxZQUFZLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDekUsQ0FBQztRQUNGLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDbkMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQ3ZFLENBQUM7U0FDSDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBNEI7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7O1lBbElxQixTQUFTO1lBQ0wsVUFBVTtZQUNYLFlBQVk7OztBQUx4QixpQkFBaUI7SUFIN0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlCQUFpQixDQXFJN0I7U0FySVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IERpcmVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvZGlyZWN0aW9uL2NvbmZpZy9kaXJlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtcbiAgSWNvbkNvbmZpZyxcbiAgSWNvbkNvbmZpZ1Jlc291cmNlLFxuICBJY29uT3B0aW9ucyxcbiAgSWNvblJlc291cmNlVHlwZSxcbiAgSUNPTl9UWVBFLFxufSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkxvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIGxvYWRlZFJlc291cmNlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGljb25Db25maWc6IEljb25Db25maWcsXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBodG1sIGZyYWdtZW50IHdoaWNoIGNhbiBiZSBhZGRlZCB0byB0aGUgRE9NIGluIGEgc2FmZSB3YXkuXG4gICAqL1xuICBnZXRIdG1sKHR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICBpZiAodGhpcy5pc1Jlc291cmNlVHlwZSh0eXBlLCBJY29uUmVzb3VyY2VUeXBlLlNWRykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgICAgYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0aGlzLmdldFN2Z1BhdGgodHlwZSl9XCI+PC91c2U+PC9zdmc+YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNSZXNvdXJjZVR5cGUodHlwZSwgSWNvblJlc291cmNlVHlwZS5URVhUKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZ2V0U3ltYm9sKHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaXJlY3Rpb24gZm9yIHdoaWNoIHRoZSBpY29uIHNob3VsZCBtaXJyb3IgKGx0ciB2cyBydGwpLiBUaGUgaWNvbiBkaXJlY3Rpb25cbiAgICogaXMgY29uZmlndXJhYmxlLCBidXQgb3B0aW9uYWwsIGFzIG9ubHkgYSBmZXcgaWNvbnMgc2hvdWxkIGJlIGZsaXBwZWQgZm9yIHJ0bCBkaXJlY3Rpb24uXG4gICAqL1xuICBnZXRGbGlwRGlyZWN0aW9uKHR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IERpcmVjdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZz8uZmxpcERpcmVjdGlvbj8uW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHN5bWJvbCBjbGFzcyhlcykgZm9yIHRoZSBpY29uIHR5cGUuXG4gICAqL1xuICBnZXRTdHlsZUNsYXNzZXMoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3ltYm9sKGljb25UeXBlKSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gYElDT05fVFlQRWAgaXMgY29uZmlndXJlZCBmb3JcbiAgICogdGhlIGdpdmVuIGBJY29uUmVzb3VyY2VUeXBlYC5cbiAgICovXG4gIHByaXZhdGUgaXNSZXNvdXJjZVR5cGUoXG4gICAgaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyxcbiAgICByZXNvdXJjZVR5cGU6IEljb25SZXNvdXJjZVR5cGVcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLnJlc291cmNlcyAmJlxuICAgICAgISF0aGlzLmNvbmZpZy5yZXNvdXJjZXMuZmluZChcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXMudHlwZXMgJiYgcmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgbGluay4gVGhlIGxpbmsgc3VwcG9ydHMgcGF0aCBuYW1lc1xuICAgKiBhcyB3ZWxsLCBpZiB0aGUgY29uZmlnIGFbW3MgYmVlbiBzZXR1cCB0byBzdXBwb3J0IGEgc3ZnIGZpbGUgcGF0aC5cbiAgICogQWRkaXRpb25hbGx5LCB0aGUgaWNvbiBwcmVmaXggd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgdG8gcHJlZml4IHRoZVxuICAgKiBpY29uIElEcyBpbiB0aGUgU1ZHLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdmdQYXRoKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN2Z1Jlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAocmVzKSA9PlxuICAgICAgICByZXMudHlwZSA9PT0gSWNvblJlc291cmNlVHlwZS5TVkcgJiZcbiAgICAgICAgcmVzLnR5cGVzICYmXG4gICAgICAgIHJlcy50eXBlcy5pbmNsdWRlcyhpY29uVHlwZSlcbiAgICApO1xuICAgIGlmIChzdmdSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIHN2Z1Jlc291cmNlLnVybFxuICAgICAgICA/IGAke3N2Z1Jlc291cmNlLnVybH0jJHt0aGlzLmdldFN5bWJvbChpY29uVHlwZSl9YFxuICAgICAgICA6IGAjJHt0aGlzLmdldFN5bWJvbChpY29uVHlwZSl9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHJlc291cmNlIHVybCAoaWYgYW55KSBmb3IgdGhlIGdpdmVuIGljb24uXG4gICAqIFRoZSBpY29uIHdpbGwgb25seSBiZSBsb2FkZWQgb25jZS5cbiAgICpcbiAgICogTk9URTogdGhpcyBpcyBub3Qgd29ya2luZyB3aGVuIHRoZSBzaGFkb3cgaXMgdXNlZCBhcyB0aGVyZSdzXG4gICAqIG5vIGhlYWQgZWxlbWVudCBhdmFpbGFibGUgYW5kIHRoZSBsaW5rIG11c3QgYmUgbG9hZGVkIGZvciBldmVyeVxuICAgKiB3ZWIgY29tcG9uZW50LlxuICAgKi9cbiAgYWRkTGlua1Jlc291cmNlKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCByZXNvdXJjZTogSWNvbkNvbmZpZ1Jlc291cmNlID0gdGhpcy5maW5kUmVzb3VyY2UoXG4gICAgICBpY29uVHlwZSxcbiAgICAgIEljb25SZXNvdXJjZVR5cGUuTElOS1xuICAgICk7XG4gICAgaWYgKFxuICAgICAgcmVzb3VyY2UgJiZcbiAgICAgIHJlc291cmNlLnVybCAmJlxuICAgICAgIXRoaXMubG9hZGVkUmVzb3VyY2VzLmluY2x1ZGVzKHJlc291cmNlLnVybClcbiAgICApIHtcbiAgICAgIHRoaXMubG9hZGVkUmVzb3VyY2VzLnB1c2gocmVzb3VyY2UudXJsKTtcbiAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLndpblJlZi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgY29uc3QgbGluayA9IHRoaXMud2luUmVmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGxpbmsuaHJlZiA9IHJlc291cmNlLnVybDtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUmVzb3VyY2UoXG4gICAgaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyxcbiAgICByZXNvdXJjZVR5cGU6IEljb25SZXNvdXJjZVR5cGVcbiAgKTogSWNvbkNvbmZpZ1Jlc291cmNlIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnJlc291cmNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXNvdXJjZSA9IHRoaXMuY29uZmlnLnJlc291cmNlcy5maW5kKFxuICAgICAgKHJlcykgPT5cbiAgICAgICAgcmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiByZXMudHlwZXMgJiYgcmVzLnR5cGVzLmluY2x1ZGVzKGljb25UeXBlKVxuICAgICk7XG4gICAgLy8gbm8gc3BlY2lmaWMgcmVzb3VyY2UgZm91bmQsIGxldCdzIHRyeSB0byBmaW5kIGEgb25lLXNpemUtZml0cy1hbGwgcmVzb3VyY2VcbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICByZXNvdXJjZSA9IHRoaXMuY29uZmlnLnJlc291cmNlcy5maW5kKFxuICAgICAgICAocmVzKSA9PiAocmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiAhcmVzLnR5cGVzKSB8fCByZXMudHlwZXMgPT09IFtdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb3VyY2U7XG4gIH1cblxuICBnZXRTeW1ib2woaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZykge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5zeW1ib2xzICYmIHRoaXMuY29uZmlnLnN5bWJvbHNbaWNvblR5cGVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuc3ltYm9sc1tpY29uVHlwZV07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29uZmlnKCk6IEljb25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5pY29uQ29uZmlnLmljb247XG4gIH1cbn1cbiJdfQ==