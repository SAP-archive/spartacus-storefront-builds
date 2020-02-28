import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { IconConfig, ICON_TYPE } from './icon.model';
import * as ɵngcc0 from '@angular/core';
export declare class IconLoaderService {
    protected winRef: WindowRef;
    protected iconConfig: IconConfig;
    protected sanitizer: DomSanitizer;
    private loadedResources;
    constructor(winRef: WindowRef, iconConfig: IconConfig, sanitizer: DomSanitizer);
    /**
     * Returns an html fragment which can be added to the DOM in a safe way.
     */
    getHtml(type: ICON_TYPE | string): SafeHtml;
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    getStyleClasses(iconType: ICON_TYPE | string): string;
    /**
     * Indicates whether the given `ICON_TYPE` is configured for
     * the given `IconResourceType`.
     */
    private isResourceType;
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    private getSvgPath;
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    addLinkResource(iconType: ICON_TYPE | string): void;
    private findResource;
    getSymbol(iconType: ICON_TYPE | string): string;
    private get config();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IconLoaderService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJpY29uLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZywgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEljb25Mb2FkZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJvdGVjdGVkIGljb25Db25maWc6IEljb25Db25maWc7XG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyO1xuICAgIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VzO1xuICAgIGNvbnN0cnVjdG9yKHdpblJlZjogV2luZG93UmVmLCBpY29uQ29uZmlnOiBJY29uQ29uZmlnLCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcik7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBodG1sIGZyYWdtZW50IHdoaWNoIGNhbiBiZSBhZGRlZCB0byB0aGUgRE9NIGluIGEgc2FmZSB3YXkuXG4gICAgICovXG4gICAgZ2V0SHRtbCh0eXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiBTYWZlSHRtbDtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIFJldHVybnMgdGhlIHN5bWJvbCBjbGFzcyhlcykgZm9yIHRoZSBpY29uIHR5cGUuXG4gICAgICovXG4gICAgZ2V0U3R5bGVDbGFzc2VzKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIGBJQ09OX1RZUEVgIGlzIGNvbmZpZ3VyZWQgZm9yXG4gICAgICogdGhlIGdpdmVuIGBJY29uUmVzb3VyY2VUeXBlYC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzUmVzb3VyY2VUeXBlO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIHN2ZyBsaW5rLiBUaGUgbGluayBzdXBwb3J0cyBwYXRoIG5hbWVzXG4gICAgICogYXMgd2VsbCwgaWYgdGhlIGNvbmZpZyBhW1tzIGJlZW4gc2V0dXAgdG8gc3VwcG9ydCBhIHN2ZyBmaWxlIHBhdGguXG4gICAgICogQWRkaXRpb25hbGx5LCB0aGUgaWNvbiBwcmVmaXggd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgdG8gcHJlZml4IHRoZVxuICAgICAqIGljb24gSURzIGluIHRoZSBTVkcuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTdmdQYXRoO1xuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSByZXNvdXJjZSB1cmwgKGlmIGFueSkgZm9yIHRoZSBnaXZlbiBpY29uLlxuICAgICAqIFRoZSBpY29uIHdpbGwgb25seSBiZSBsb2FkZWQgb25jZS5cbiAgICAgKlxuICAgICAqIE5PVEU6IHRoaXMgaXMgbm90IHdvcmtpbmcgd2hlbiB0aGUgc2hhZG93IGlzIHVzZWQgYXMgdGhlcmUnc1xuICAgICAqIG5vIGhlYWQgZWxlbWVudCBhdmFpbGFibGUgYW5kIHRoZSBsaW5rIG11c3QgYmUgbG9hZGVkIGZvciBldmVyeVxuICAgICAqIHdlYiBjb21wb25lbnQuXG4gICAgICovXG4gICAgYWRkTGlua1Jlc291cmNlKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiB2b2lkO1xuICAgIHByaXZhdGUgZmluZFJlc291cmNlO1xuICAgIGdldFN5bWJvbChpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nO1xuICAgIHByaXZhdGUgZ2V0IGNvbmZpZygpO1xufVxuIl19