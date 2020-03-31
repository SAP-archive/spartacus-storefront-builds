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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDOzs7OztBQUt0QixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUU1QixZQUNZLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLFNBQXVCO1FBRnZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFSjs7T0FFRztJQUNILE9BQU8sQ0FBQyxJQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDM0MseUJBQXlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFB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NkU7UUFDN0UsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ25DLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUN2RSxDQUFDO1NBQ0g7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQTRCO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELElBQVksTUFBTTtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOztZQTFIcUIsU0FBUztZQUNMLFVBQVU7WUFDWCxZQUFZOzs7QUFMeEIsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0E2SDdCO1NBN0hZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBJY29uQ29uZmlnLFxuICBJY29uQ29uZmlnUmVzb3VyY2UsXG4gIEljb25PcHRpb25zLFxuICBJY29uUmVzb3VyY2VUeXBlLFxuICBJQ09OX1RZUEUsXG59IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uTG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VzID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgaWNvbkNvbmZpZzogSWNvbkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGh0bWwgZnJhZ21lbnQgd2hpY2ggY2FuIGJlIGFkZGVkIHRvIHRoZSBET00gaW4gYSBzYWZlIHdheS5cbiAgICovXG4gIGdldEh0bWwodHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIGlmICh0aGlzLmlzUmVzb3VyY2VUeXBlKHR5cGUsIEljb25SZXNvdXJjZVR5cGUuU1ZHKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgICBgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMuZ2V0U3ZnUGF0aCh0eXBlKX1cIj48L3VzZT48L3N2Zz5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1Jlc291cmNlVHlwZSh0eXBlLCBJY29uUmVzb3VyY2VUeXBlLlRFWFQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5nZXRTeW1ib2wodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBSZXR1cm5zIHRoZSBzeW1ib2wgY2xhc3MoZXMpIGZvciB0aGUgaWNvbiB0eXBlLlxuICAgKi9cbiAgZ2V0U3R5bGVDbGFzc2VzKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldFN5bWJvbChpY29uVHlwZSkgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIGBJQ09OX1RZUEVgIGlzIGNvbmZpZ3VyZWQgZm9yXG4gICAqIHRoZSBnaXZlbiBgSWNvblJlc291cmNlVHlwZWAuXG4gICAqL1xuICBwcml2YXRlIGlzUmVzb3VyY2VUeXBlKFxuICAgIGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcsXG4gICAgcmVzb3VyY2VUeXBlOiBJY29uUmVzb3VyY2VUeXBlXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5yZXNvdXJjZXMgJiZcbiAgICAgICEhdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzLnR5cGVzICYmIHJlcy50eXBlID09PSByZXNvdXJjZVR5cGUgJiYgcmVzLnR5cGVzLmluY2x1ZGVzKGljb25UeXBlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIGxpbmsuIFRoZSBsaW5rIHN1cHBvcnRzIHBhdGggbmFtZXNcbiAgICogYXMgd2VsbCwgaWYgdGhlIGNvbmZpZyBhW1tzIGJlZW4gc2V0dXAgdG8gc3VwcG9ydCBhIHN2ZyBmaWxlIHBhdGguXG4gICAqIEFkZGl0aW9uYWxseSwgdGhlIGljb24gcHJlZml4IHdpbGwgYmUgdGFrZW4gaW50byBhY2NvdW50IHRvIHByZWZpeCB0aGVcbiAgICogaWNvbiBJRHMgaW4gdGhlIFNWRy5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3ZnUGF0aChpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdmdSZXNvdXJjZSA9IHRoaXMuY29uZmlnLnJlc291cmNlcy5maW5kKFxuICAgICAgKHJlcykgPT5cbiAgICAgICAgcmVzLnR5cGUgPT09IEljb25SZXNvdXJjZVR5cGUuU1ZHICYmXG4gICAgICAgIHJlcy50eXBlcyAmJlxuICAgICAgICByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgKTtcbiAgICBpZiAoc3ZnUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBzdmdSZXNvdXJjZS51cmxcbiAgICAgICAgPyBgJHtzdmdSZXNvdXJjZS51cmx9IyR7dGhpcy5nZXRTeW1ib2woaWNvblR5cGUpfWBcbiAgICAgICAgOiBgIyR7dGhpcy5nZXRTeW1ib2woaWNvblR5cGUpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSByZXNvdXJjZSB1cmwgKGlmIGFueSkgZm9yIHRoZSBnaXZlbiBpY29uLlxuICAgKiBUaGUgaWNvbiB3aWxsIG9ubHkgYmUgbG9hZGVkIG9uY2UuXG4gICAqXG4gICAqIE5PVEU6IHRoaXMgaXMgbm90IHdvcmtpbmcgd2hlbiB0aGUgc2hhZG93IGlzIHVzZWQgYXMgdGhlcmUnc1xuICAgKiBubyBoZWFkIGVsZW1lbnQgYXZhaWxhYmxlIGFuZCB0aGUgbGluayBtdXN0IGJlIGxvYWRlZCBmb3IgZXZlcnlcbiAgICogd2ViIGNvbXBvbmVudC5cbiAgICovXG4gIGFkZExpbmtSZXNvdXJjZShpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVzb3VyY2U6IEljb25Db25maWdSZXNvdXJjZSA9IHRoaXMuZmluZFJlc291cmNlKFxuICAgICAgaWNvblR5cGUsXG4gICAgICBJY29uUmVzb3VyY2VUeXBlLkxJTktcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHJlc291cmNlICYmXG4gICAgICByZXNvdXJjZS51cmwgJiZcbiAgICAgICF0aGlzLmxvYWRlZFJlc291cmNlcy5pbmNsdWRlcyhyZXNvdXJjZS51cmwpXG4gICAgKSB7XG4gICAgICB0aGlzLmxvYWRlZFJlc291cmNlcy5wdXNoKHJlc291cmNlLnVybCk7XG4gICAgICBjb25zdCBoZWFkID0gdGhpcy53aW5SZWYuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLndpblJlZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLmhyZWYgPSByZXNvdXJjZS51cmw7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFJlc291cmNlKFxuICAgIGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcsXG4gICAgcmVzb3VyY2VUeXBlOiBJY29uUmVzb3VyY2VUeXBlXG4gICk6IEljb25Db25maWdSZXNvdXJjZSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5yZXNvdXJjZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMuZmluZChcbiAgICAgIChyZXMpID0+XG4gICAgICAgIHJlcy50eXBlID09PSByZXNvdXJjZVR5cGUgJiYgcmVzLnR5cGVzICYmIHJlcy50eXBlcy5pbmNsdWRlcyhpY29uVHlwZSlcbiAgICApO1xuICAgIC8vIG5vIHNwZWNpZmljIHJlc291cmNlIGZvdW5kLCBsZXQncyB0cnkgdG8gZmluZCBhIG9uZS1zaXplLWZpdHMtYWxsIHJlc291cmNlXG4gICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgcmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMuZmluZChcbiAgICAgICAgKHJlcykgPT4gKHJlcy50eXBlID09PSByZXNvdXJjZVR5cGUgJiYgIXJlcy50eXBlcykgfHwgcmVzLnR5cGVzID09PSBbXVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlO1xuICB9XG5cbiAgZ2V0U3ltYm9sKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuc3ltYm9scyAmJiB0aGlzLmNvbmZpZy5zeW1ib2xzW2ljb25UeXBlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnN5bWJvbHNbaWNvblR5cGVdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbmZpZygpOiBJY29uT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkNvbmZpZy5pY29uO1xuICB9XG59XG4iXX0=