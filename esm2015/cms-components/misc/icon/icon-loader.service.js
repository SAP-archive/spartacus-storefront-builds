import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { IconConfig, IconResourceType, } from './icon.model';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./icon.model";
import * as i3 from "@angular/platform-browser";
export class IconLoaderService {
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
}
IconLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.IconConfig), i0.ɵɵinject(i3.DomSanitizer)); }, token: IconLoaderService, providedIn: "root" });
IconLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IconLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: IconConfig },
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsVUFBVSxFQUdWLGdCQUFnQixHQUVqQixNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFLdEIsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUNZLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLFNBQXVCO1FBRnZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFSjs7T0FFRztJQUNILE9BQU8sQ0FBQyxJQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDM0MseUJBQXlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsSUFBd0I7O1FBQ3ZDLG1CQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLGFBQWEsMENBQUcsSUFBSSxFQUFFO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsUUFBNEI7UUFDMUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUNwQixRQUE0QixFQUM1QixZQUE4QjtRQUU5QixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQzFCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDTixHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssWUFBWSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxVQUFVLENBQUMsUUFBNEI7UUFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLO1lBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQy9CLENBQUM7UUFDRixJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sV0FBVyxDQUFDLEdBQUc7Z0JBQ3BCLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbEQsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxlQUFlLENBQUMsUUFBNEI7UUFDMUMsTUFBTSxRQUFRLEdBQXVCLElBQUksQ0FBQyxZQUFZLENBQ3BELFFBQVEsRUFDUixnQkFBZ0IsQ0FBQyxJQUFJLENBQ3RCLENBQUM7UUFDRixJQUNFLFFBQVE7WUFDUixRQUFRLENBQUMsR0FBRztZQUNaLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUM1QztZQUNBLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUNsQixRQUE0QixFQUM1QixZQUE4QjtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2QyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDekUsQ0FBQztRQUNGLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDbkMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQ3ZFLENBQUM7U0FDSDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBNEI7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7OztZQXZJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVpRLFNBQVM7WUFHaEIsVUFBVTtZQUpILFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9kaXJlY3Rpb24vY29uZmlnL2RpcmVjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1xuICBJY29uQ29uZmlnLFxuICBJY29uQ29uZmlnUmVzb3VyY2UsXG4gIEljb25PcHRpb25zLFxuICBJY29uUmVzb3VyY2VUeXBlLFxuICBJQ09OX1RZUEUsXG59IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uTG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VzID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgaWNvbkNvbmZpZzogSWNvbkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGh0bWwgZnJhZ21lbnQgd2hpY2ggY2FuIGJlIGFkZGVkIHRvIHRoZSBET00gaW4gYSBzYWZlIHdheS5cbiAgICovXG4gIGdldEh0bWwodHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIGlmICh0aGlzLmlzUmVzb3VyY2VUeXBlKHR5cGUsIEljb25SZXNvdXJjZVR5cGUuU1ZHKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgICBgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMuZ2V0U3ZnUGF0aCh0eXBlKX1cIj48L3VzZT48L3N2Zz5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1Jlc291cmNlVHlwZSh0eXBlLCBJY29uUmVzb3VyY2VUeXBlLlRFWFQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5nZXRTeW1ib2wodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpcmVjdGlvbiBmb3Igd2hpY2ggdGhlIGljb24gc2hvdWxkIG1pcnJvciAobHRyIHZzIHJ0bCkuIFRoZSBpY29uIGRpcmVjdGlvblxuICAgKiBpcyBjb25maWd1cmFibGUsIGJ1dCBvcHRpb25hbCwgYXMgb25seSBhIGZldyBpY29ucyBzaG91bGQgYmUgZmxpcHBlZCBmb3IgcnRsIGRpcmVjdGlvbi5cbiAgICovXG4gIGdldEZsaXBEaXJlY3Rpb24odHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogRGlyZWN0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnPy5mbGlwRGlyZWN0aW9uPy5bdHlwZV07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyB0aGUgc3ltYm9sIGNsYXNzKGVzKSBmb3IgdGhlIGljb24gdHlwZS5cbiAgICovXG4gIGdldFN0eWxlQ2xhc3NlcyhpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTeW1ib2woaWNvblR5cGUpIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBgSUNPTl9UWVBFYCBpcyBjb25maWd1cmVkIGZvclxuICAgKiB0aGUgZ2l2ZW4gYEljb25SZXNvdXJjZVR5cGVgLlxuICAgKi9cbiAgcHJpdmF0ZSBpc1Jlc291cmNlVHlwZShcbiAgICBpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nLFxuICAgIHJlc291cmNlVHlwZTogSWNvblJlc291cmNlVHlwZVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25maWcucmVzb3VyY2VzICYmXG4gICAgICAhIXRoaXMuY29uZmlnLnJlc291cmNlcy5maW5kKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlcy50eXBlcyAmJiByZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmIHJlcy50eXBlcy5pbmNsdWRlcyhpY29uVHlwZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIHN2ZyBsaW5rLiBUaGUgbGluayBzdXBwb3J0cyBwYXRoIG5hbWVzXG4gICAqIGFzIHdlbGwsIGlmIHRoZSBjb25maWcgYVtbcyBiZWVuIHNldHVwIHRvIHN1cHBvcnQgYSBzdmcgZmlsZSBwYXRoLlxuICAgKiBBZGRpdGlvbmFsbHksIHRoZSBpY29uIHByZWZpeCB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCB0byBwcmVmaXggdGhlXG4gICAqIGljb24gSURzIGluIHRoZSBTVkcuXG4gICAqL1xuICBwcml2YXRlIGdldFN2Z1BhdGgoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3ZnUmVzb3VyY2UgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMuZmluZChcbiAgICAgIChyZXMpID0+XG4gICAgICAgIHJlcy50eXBlID09PSBJY29uUmVzb3VyY2VUeXBlLlNWRyAmJlxuICAgICAgICByZXMudHlwZXMgJiZcbiAgICAgICAgcmVzLnR5cGVzLmluY2x1ZGVzKGljb25UeXBlKVxuICAgICk7XG4gICAgaWYgKHN2Z1Jlc291cmNlKSB7XG4gICAgICByZXR1cm4gc3ZnUmVzb3VyY2UudXJsXG4gICAgICAgID8gYCR7c3ZnUmVzb3VyY2UudXJsfSMke3RoaXMuZ2V0U3ltYm9sKGljb25UeXBlKX1gXG4gICAgICAgIDogYCMke3RoaXMuZ2V0U3ltYm9sKGljb25UeXBlKX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgcmVzb3VyY2UgdXJsIChpZiBhbnkpIGZvciB0aGUgZ2l2ZW4gaWNvbi5cbiAgICogVGhlIGljb24gd2lsbCBvbmx5IGJlIGxvYWRlZCBvbmNlLlxuICAgKlxuICAgKiBOT1RFOiB0aGlzIGlzIG5vdCB3b3JraW5nIHdoZW4gdGhlIHNoYWRvdyBpcyB1c2VkIGFzIHRoZXJlJ3NcbiAgICogbm8gaGVhZCBlbGVtZW50IGF2YWlsYWJsZSBhbmQgdGhlIGxpbmsgbXVzdCBiZSBsb2FkZWQgZm9yIGV2ZXJ5XG4gICAqIHdlYiBjb21wb25lbnQuXG4gICAqL1xuICBhZGRMaW5rUmVzb3VyY2UoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlc291cmNlOiBJY29uQ29uZmlnUmVzb3VyY2UgPSB0aGlzLmZpbmRSZXNvdXJjZShcbiAgICAgIGljb25UeXBlLFxuICAgICAgSWNvblJlc291cmNlVHlwZS5MSU5LXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICByZXNvdXJjZSAmJlxuICAgICAgcmVzb3VyY2UudXJsICYmXG4gICAgICAhdGhpcy5sb2FkZWRSZXNvdXJjZXMuaW5jbHVkZXMocmVzb3VyY2UudXJsKVxuICAgICkge1xuICAgICAgdGhpcy5sb2FkZWRSZXNvdXJjZXMucHVzaChyZXNvdXJjZS51cmwpO1xuICAgICAgY29uc3QgaGVhZCA9IHRoaXMud2luUmVmLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICBjb25zdCBsaW5rID0gdGhpcy53aW5SZWYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5ocmVmID0gcmVzb3VyY2UudXJsO1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRSZXNvdXJjZShcbiAgICBpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nLFxuICAgIHJlc291cmNlVHlwZTogSWNvblJlc291cmNlVHlwZVxuICApOiBJY29uQ29uZmlnUmVzb3VyY2Uge1xuICAgIGlmICghdGhpcy5jb25maWcucmVzb3VyY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAocmVzKSA9PlxuICAgICAgICByZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmIHJlcy50eXBlcyAmJiByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgKTtcbiAgICAvLyBubyBzcGVjaWZpYyByZXNvdXJjZSBmb3VuZCwgbGV0J3MgdHJ5IHRvIGZpbmQgYSBvbmUtc2l6ZS1maXRzLWFsbCByZXNvdXJjZVxuICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgIHJlc291cmNlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZpbmQoXG4gICAgICAgIChyZXMpID0+IChyZXMudHlwZSA9PT0gcmVzb3VyY2VUeXBlICYmICFyZXMudHlwZXMpIHx8IHJlcy50eXBlcyA9PT0gW11cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXNvdXJjZTtcbiAgfVxuXG4gIGdldFN5bWJvbChpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnN5bWJvbHMgJiYgdGhpcy5jb25maWcuc3ltYm9sc1tpY29uVHlwZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zeW1ib2xzW2ljb25UeXBlXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBjb25maWcoKTogSWNvbk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmljb25Db25maWcuaWNvbjtcbiAgfVxufVxuIl19