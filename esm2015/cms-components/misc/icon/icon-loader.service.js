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
            !!this.config.resources.find(res => res.types && res.type === resourceType && res.types.includes(iconType)));
    }
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    getSvgPath(iconType) {
        const svgResource = this.config.resources.find(res => res.type === IconResourceType.SVG &&
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
        let resource = this.config.resources.find(res => res.type === resourceType && res.types && res.types.includes(iconType));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.resources.find(res => (res.type === resourceType && !res.types) || res.types === []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDOzs7OztBQUt0QixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUU1QixZQUNZLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLFNBQXVCO1FBRnZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFSjs7T0FFRztJQUNILE9BQU8sQ0FBQyxJQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDM0MseUJBQXlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFB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QUFDLFFBQVEsRUFBRTtZQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ25DLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FDckUsQ0FBQztTQUNIO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUE0QjtRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxJQUFZLE1BQU07UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTs7WUExSHFCLFNBQVM7WUFDTCxVQUFVO1lBQ1gsWUFBWTs7O0FBTHhCLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csaUJBQWlCLENBNkg3QjtTQTdIWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgSWNvbkNvbmZpZyxcbiAgSWNvbkNvbmZpZ1Jlc291cmNlLFxuICBJY29uT3B0aW9ucyxcbiAgSWNvblJlc291cmNlVHlwZSxcbiAgSUNPTl9UWVBFLFxufSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkxvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIGxvYWRlZFJlc291cmNlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGljb25Db25maWc6IEljb25Db25maWcsXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBodG1sIGZyYWdtZW50IHdoaWNoIGNhbiBiZSBhZGRlZCB0byB0aGUgRE9NIGluIGEgc2FmZSB3YXkuXG4gICAqL1xuICBnZXRIdG1sKHR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICBpZiAodGhpcy5pc1Jlc291cmNlVHlwZSh0eXBlLCBJY29uUmVzb3VyY2VUeXBlLlNWRykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgICAgYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0aGlzLmdldFN2Z1BhdGgodHlwZSl9XCI+PC91c2U+PC9zdmc+YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNSZXNvdXJjZVR5cGUodHlwZSwgSWNvblJlc291cmNlVHlwZS5URVhUKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZ2V0U3ltYm9sKHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyB0aGUgc3ltYm9sIGNsYXNzKGVzKSBmb3IgdGhlIGljb24gdHlwZS5cbiAgICovXG4gIGdldFN0eWxlQ2xhc3NlcyhpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTeW1ib2woaWNvblR5cGUpIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBgSUNPTl9UWVBFYCBpcyBjb25maWd1cmVkIGZvclxuICAgKiB0aGUgZ2l2ZW4gYEljb25SZXNvdXJjZVR5cGVgLlxuICAgKi9cbiAgcHJpdmF0ZSBpc1Jlc291cmNlVHlwZShcbiAgICBpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nLFxuICAgIHJlc291cmNlVHlwZTogSWNvblJlc291cmNlVHlwZVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcucmVzb3VyY2VzICYmXG4gICAgICAhIXRoaXMuY29uZmlnLnJlc291cmNlcy5maW5kKFxuICAgICAgICByZXMgPT5cbiAgICAgICAgICByZXMudHlwZXMgJiYgcmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgbGluay4gVGhlIGxpbmsgc3VwcG9ydHMgcGF0aCBuYW1lc1xuICAgKiBhcyB3ZWxsLCBpZiB0aGUgY29uZmlnIGFbW3MgYmVlbiBzZXR1cCB0byBzdXBwb3J0IGEgc3ZnIGZpbGUgcGF0aC5cbiAgICogQWRkaXRpb25hbGx5LCB0aGUgaWNvbiBwcmVmaXggd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgdG8gcHJlZml4IHRoZVxuICAgKiBpY29uIElEcyBpbiB0aGUgU1ZHLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdmdQYXRoKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN2Z1Jlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICByZXMgPT5cbiAgICAgICAgcmVzLnR5cGUgPT09IEljb25SZXNvdXJjZVR5cGUuU1ZHICYmXG4gICAgICAgIHJlcy50eXBlcyAmJlxuICAgICAgICByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgKTtcbiAgICBpZiAoc3ZnUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBzdmdSZXNvdXJjZS51cmxcbiAgICAgICAgPyBgJHtzdmdSZXNvdXJjZS51cmx9IyR7dGhpcy5nZXRTeW1ib2woaWNvblR5cGUpfWBcbiAgICAgICAgOiBgIyR7dGhpcy5nZXRTeW1ib2woaWNvblR5cGUpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSByZXNvdXJjZSB1cmwgKGlmIGFueSkgZm9yIHRoZSBnaXZlbiBpY29uLlxuICAgKiBUaGUgaWNvbiB3aWxsIG9ubHkgYmUgbG9hZGVkIG9uY2UuXG4gICAqXG4gICAqIE5PVEU6IHRoaXMgaXMgbm90IHdvcmtpbmcgd2hlbiB0aGUgc2hhZG93IGlzIHVzZWQgYXMgdGhlcmUnc1xuICAgKiBubyBoZWFkIGVsZW1lbnQgYXZhaWxhYmxlIGFuZCB0aGUgbGluayBtdXN0IGJlIGxvYWRlZCBmb3IgZXZlcnlcbiAgICogd2ViIGNvbXBvbmVudC5cbiAgICovXG4gIGFkZExpbmtSZXNvdXJjZShpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVzb3VyY2U6IEljb25Db25maWdSZXNvdXJjZSA9IHRoaXMuZmluZFJlc291cmNlKFxuICAgICAgaWNvblR5cGUsXG4gICAgICBJY29uUmVzb3VyY2VUeXBlLkxJTktcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHJlc291cmNlICYmXG4gICAgICByZXNvdXJjZS51cmwgJiZcbiAgICAgICF0aGlzLmxvYWRlZFJlc291cmNlcy5pbmNsdWRlcyhyZXNvdXJjZS51cmwpXG4gICAgKSB7XG4gICAgICB0aGlzLmxvYWRlZFJlc291cmNlcy5wdXNoKHJlc291cmNlLnVybCk7XG4gICAgICBjb25zdCBoZWFkID0gdGhpcy53aW5SZWYuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLndpblJlZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLmhyZWYgPSByZXNvdXJjZS51cmw7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFJlc291cmNlKFxuICAgIGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcsXG4gICAgcmVzb3VyY2VUeXBlOiBJY29uUmVzb3VyY2VUeXBlXG4gICk6IEljb25Db25maWdSZXNvdXJjZSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5yZXNvdXJjZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMuZmluZChcbiAgICAgIHJlcyA9PlxuICAgICAgICByZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmIHJlcy50eXBlcyAmJiByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgKTtcbiAgICAvLyBubyBzcGVjaWZpYyByZXNvdXJjZSBmb3VuZCwgbGV0J3MgdHJ5IHRvIGZpbmQgYSBvbmUtc2l6ZS1maXRzLWFsbCByZXNvdXJjZVxuICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgIHJlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAgIHJlcyA9PiAocmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiAhcmVzLnR5cGVzKSB8fCByZXMudHlwZXMgPT09IFtdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb3VyY2U7XG4gIH1cblxuICBnZXRTeW1ib2woaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZykge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5zeW1ib2xzICYmIHRoaXMuY29uZmlnLnN5bWJvbHNbaWNvblR5cGVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuc3ltYm9sc1tpY29uVHlwZV07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29uZmlnKCk6IEljb25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5pY29uQ29uZmlnLmljb247XG4gIH1cbn1cbiJdfQ==