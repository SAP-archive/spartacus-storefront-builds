import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { IconConfig, IconConfigResource, IconOptions, IconResourceType, ICON_TYPE, } from './icon.model';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./icon.model";
import * as i3 from "@angular/platform-browser";
var IconLoaderService = /** @class */ (function () {
    function IconLoaderService(winRef, iconConfig, sanitizer) {
        this.winRef = winRef;
        this.iconConfig = iconConfig;
        this.sanitizer = sanitizer;
        this.loadedResources = [];
    }
    /**
     * Returns an html fragment which can be added to the DOM in a safe way.
     */
    IconLoaderService.prototype.getHtml = function (type) {
        if (this.isResourceType(type, IconResourceType.SVG)) {
            return this.sanitizer.bypassSecurityTrustHtml("<svg><use xlink:href=\"" + this.getSvgPath(type) + "\"></use></svg>");
        }
        if (this.isResourceType(type, IconResourceType.TEXT)) {
            return this.sanitizer.bypassSecurityTrustHtml(this.getSymbol(type));
        }
    };
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    IconLoaderService.prototype.getStyleClasses = function (iconType) {
        return this.getSymbol(iconType) || '';
    };
    /**
     * Indicates whether the given `ICON_TYPE` is configured for
     * the given `IconResourceType`.
     */
    IconLoaderService.prototype.isResourceType = function (iconType, resourceType) {
        return (this.config.resources &&
            !!this.config.resources.find(function (res) {
                return res.types && res.type === resourceType && res.types.includes(iconType);
            }));
    };
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    IconLoaderService.prototype.getSvgPath = function (iconType) {
        var svgResource = this.config.resources.find(function (res) {
            return res.type === IconResourceType.SVG &&
                res.types &&
                res.types.includes(iconType);
        });
        if (svgResource) {
            return svgResource.url
                ? svgResource.url + "#" + this.getSymbol(iconType)
                : "#" + this.getSymbol(iconType);
        }
    };
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    IconLoaderService.prototype.addLinkResource = function (iconType) {
        var resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource &&
            resource.url &&
            !this.loadedResources.includes(resource.url)) {
            this.loadedResources.push(resource.url);
            var head = this.winRef.document.getElementsByTagName('head')[0];
            var link = this.winRef.document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = resource.url;
            head.appendChild(link);
        }
    };
    IconLoaderService.prototype.findResource = function (iconType, resourceType) {
        if (!this.config.resources) {
            return;
        }
        var resource = this.config.resources.find(function (res) {
            return res.type === resourceType && res.types && res.types.includes(iconType);
        });
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.resources.find(function (res) { return (res.type === resourceType && !res.types) || res.types === []; });
        }
        return resource;
    };
    IconLoaderService.prototype.getSymbol = function (iconType) {
        if (this.config && this.config.symbols && this.config.symbols[iconType]) {
            return this.config.symbols[iconType];
        }
    };
    Object.defineProperty(IconLoaderService.prototype, "config", {
        get: function () {
            return this.iconConfig.icon;
        },
        enumerable: true,
        configurable: true
    });
    IconLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: IconConfig },
        { type: DomSanitizer }
    ]; };
    IconLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.IconConfig), i0.ɵɵinject(i3.DomSanitizer)); }, token: IconLoaderService, providedIn: "root" });
    IconLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], IconLoaderService);
    return IconLoaderService;
}());
export { IconLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDOzs7OztBQUt0QjtJQUVFLDJCQUNZLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLFNBQXVCO1FBRnZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFSjs7T0FFRztJQUNILG1DQUFPLEdBQVAsVUFBUSxJQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDM0MsNEJBQXlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFnQixDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxD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QUN6RSxDQUFDO1FBQ0YsNkVBQTZFO1FBQzdFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNuQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQTdELENBQTZELENBQ3ZFLENBQUM7U0FDSDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsUUFBNEI7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsc0JBQVkscUNBQU07YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUM7OztPQUFBOztnQkF6SG1CLFNBQVM7Z0JBQ0wsVUFBVTtnQkFDWCxZQUFZOzs7SUFMeEIsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0E2SDdCOzRCQTNJRDtDQTJJQyxBQTdIRCxJQTZIQztTQTdIWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgSWNvbkNvbmZpZyxcbiAgSWNvbkNvbmZpZ1Jlc291cmNlLFxuICBJY29uT3B0aW9ucyxcbiAgSWNvblJlc291cmNlVHlwZSxcbiAgSUNPTl9UWVBFLFxufSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkxvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIGxvYWRlZFJlc291cmNlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGljb25Db25maWc6IEljb25Db25maWcsXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBodG1sIGZyYWdtZW50IHdoaWNoIGNhbiBiZSBhZGRlZCB0byB0aGUgRE9NIGluIGEgc2FmZSB3YXkuXG4gICAqL1xuICBnZXRIdG1sKHR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICBpZiAodGhpcy5pc1Jlc291cmNlVHlwZSh0eXBlLCBJY29uUmVzb3VyY2VUeXBlLlNWRykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgICAgYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0aGlzLmdldFN2Z1BhdGgodHlwZSl9XCI+PC91c2U+PC9zdmc+YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNSZXNvdXJjZVR5cGUodHlwZSwgSWNvblJlc291cmNlVHlwZS5URVhUKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZ2V0U3ltYm9sKHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyB0aGUgc3ltYm9sIGNsYXNzKGVzKSBmb3IgdGhlIGljb24gdHlwZS5cbiAgICovXG4gIGdldFN0eWxlQ2xhc3NlcyhpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTeW1ib2woaWNvblR5cGUpIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBgSUNPTl9UWVBFYCBpcyBjb25maWd1cmVkIGZvclxuICAgKiB0aGUgZ2l2ZW4gYEljb25SZXNvdXJjZVR5cGVgLlxuICAgKi9cbiAgcHJpdmF0ZSBpc1Jlc291cmNlVHlwZShcbiAgICBpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nLFxuICAgIHJlc291cmNlVHlwZTogSWNvblJlc291cmNlVHlwZVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcucmVzb3VyY2VzICYmXG4gICAgICAhIXRoaXMuY29uZmlnLnJlc291cmNlcy5maW5kKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlcy50eXBlcyAmJiByZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmIHJlcy50eXBlcy5pbmNsdWRlcyhpY29uVHlwZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIHN2ZyBsaW5rLiBUaGUgbGluayBzdXBwb3J0cyBwYXRoIG5hbWVzXG4gICAqIGFzIHdlbGwsIGlmIHRoZSBjb25maWcgYVtbcyBiZWVuIHNldHVwIHRvIHN1cHBvcnQgYSBzdmcgZmlsZSBwYXRoLlxuICAgKiBBZGRpdGlvbmFsbHksIHRoZSBpY29uIHByZWZpeCB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCB0byBwcmVmaXggdGhlXG4gICAqIGljb24gSURzIGluIHRoZSBTVkcuXG4gICAqL1xuICBwcml2YXRlIGdldFN2Z1BhdGgoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3ZnUmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMuZmluZChcbiAgICAgIChyZXMpID0+XG4gICAgICAgIHJlcy50eXBlID09PSBJY29uUmVzb3VyY2VUeXBlLlNWRyAmJlxuICAgICAgICByZXMudHlwZXMgJiZcbiAgICAgICAgcmVzLnR5cGVzLmluY2x1ZGVzKGljb25UeXBlKVxuICAgICk7XG4gICAgaWYgKHN2Z1Jlc291cmNlKSB7XG4gICAgICByZXR1cm4gc3ZnUmVzb3VyY2UudXJsXG4gICAgICAgID8gYCR7c3ZnUmVzb3VyY2UudXJsfSMke3RoaXMuZ2V0U3ltYm9sKGljb25UeXBlKX1gXG4gICAgICAgIDogYCMke3RoaXMuZ2V0U3ltYm9sKGljb25UeXBlKX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgcmVzb3VyY2UgdXJsIChpZiBhbnkpIGZvciB0aGUgZ2l2ZW4gaWNvbi5cbiAgICogVGhlIGljb24gd2lsbCBvbmx5IGJlIGxvYWRlZCBvbmNlLlxuICAgKlxuICAgKiBOT1RFOiB0aGlzIGlzIG5vdCB3b3JraW5nIHdoZW4gdGhlIHNoYWRvdyBpcyB1c2VkIGFzIHRoZXJlJ3NcbiAgICogbm8gaGVhZCBlbGVtZW50IGF2YWlsYWJsZSBhbmQgdGhlIGxpbmsgbXVzdCBiZSBsb2FkZWQgZm9yIGV2ZXJ5XG4gICAqIHdlYiBjb21wb25lbnQuXG4gICAqL1xuICBhZGRMaW5rUmVzb3VyY2UoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlc291cmNlOiBJY29uQ29uZmlnUmVzb3VyY2UgPSB0aGlzLmZpbmRSZXNvdXJjZShcbiAgICAgIGljb25UeXBlLFxuICAgICAgSWNvblJlc291cmNlVHlwZS5MSU5LXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICByZXNvdXJjZSAmJlxuICAgICAgcmVzb3VyY2UudXJsICYmXG4gICAgICAhdGhpcy5sb2FkZWRSZXNvdXJjZXMuaW5jbHVkZXMocmVzb3VyY2UudXJsKVxuICAgICkge1xuICAgICAgdGhpcy5sb2FkZWRSZXNvdXJjZXMucHVzaChyZXNvdXJjZS51cmwpO1xuICAgICAgY29uc3QgaGVhZCA9IHRoaXMud2luUmVmLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICBjb25zdCBsaW5rID0gdGhpcy53aW5SZWYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5ocmVmID0gcmVzb3VyY2UudXJsO1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRSZXNvdXJjZShcbiAgICBpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nLFxuICAgIHJlc291cmNlVHlwZTogSWNvblJlc291cmNlVHlwZVxuICApOiBJY29uQ29uZmlnUmVzb3VyY2Uge1xuICAgIGlmICghdGhpcy5jb25maWcucmVzb3VyY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAocmVzKSA9PlxuICAgICAgICByZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmIHJlcy50eXBlcyAmJiByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgKTtcbiAgICAvLyBubyBzcGVjaWZpYyByZXNvdXJjZSBmb3VuZCwgbGV0J3MgdHJ5IHRvIGZpbmQgYSBvbmUtc2l6ZS1maXRzLWFsbCByZXNvdXJjZVxuICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgIHJlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAgIChyZXMpID0+IChyZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmICFyZXMudHlwZXMpIHx8IHJlcy50eXBlcyA9PT0gW11cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXNvdXJjZTtcbiAgfVxuXG4gIGdldFN5bWJvbChpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnN5bWJvbHMgJiYgdGhpcy5jb25maWcuc3ltYm9sc1tpY29uVHlwZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zeW1ib2xzW2ljb25UeXBlXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBjb25maWcoKTogSWNvbk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmljb25Db25maWcuaWNvbjtcbiAgfVxufVxuIl19