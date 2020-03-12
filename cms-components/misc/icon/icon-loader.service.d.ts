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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJpY29uLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29uZmlnLCBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSWNvbkxvYWRlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgaWNvbkNvbmZpZzogSWNvbkNvbmZpZztcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXI7XG4gICAgcHJpdmF0ZSBsb2FkZWRSZXNvdXJjZXM7XG4gICAgY29uc3RydWN0b3Iod2luUmVmOiBXaW5kb3dSZWYsIGljb25Db25maWc6IEljb25Db25maWcsIHNhbml0aXplcjogRG9tU2FuaXRpemVyKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGh0bWwgZnJhZ21lbnQgd2hpY2ggY2FuIGJlIGFkZGVkIHRvIHRoZSBET00gaW4gYSBzYWZlIHdheS5cbiAgICAgKi9cbiAgICBnZXRIdG1sKHR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IFNhZmVIdG1sO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogUmV0dXJucyB0aGUgc3ltYm9sIGNsYXNzKGVzKSBmb3IgdGhlIGljb24gdHlwZS5cbiAgICAgKi9cbiAgICBnZXRTdHlsZUNsYXNzZXMoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gYElDT05fVFlQRWAgaXMgY29uZmlndXJlZCBmb3JcbiAgICAgKiB0aGUgZ2l2ZW4gYEljb25SZXNvdXJjZVR5cGVgLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNSZXNvdXJjZVR5cGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIGxpbmsuIFRoZSBsaW5rIHN1cHBvcnRzIHBhdGggbmFtZXNcbiAgICAgKiBhcyB3ZWxsLCBpZiB0aGUgY29uZmlnIGFbW3MgYmVlbiBzZXR1cCB0byBzdXBwb3J0IGEgc3ZnIGZpbGUgcGF0aC5cbiAgICAgKiBBZGRpdGlvbmFsbHksIHRoZSBpY29uIHByZWZpeCB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCB0byBwcmVmaXggdGhlXG4gICAgICogaWNvbiBJRHMgaW4gdGhlIFNWRy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFN2Z1BhdGg7XG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIHJlc291cmNlIHVybCAoaWYgYW55KSBmb3IgdGhlIGdpdmVuIGljb24uXG4gICAgICogVGhlIGljb24gd2lsbCBvbmx5IGJlIGxvYWRlZCBvbmNlLlxuICAgICAqXG4gICAgICogTk9URTogdGhpcyBpcyBub3Qgd29ya2luZyB3aGVuIHRoZSBzaGFkb3cgaXMgdXNlZCBhcyB0aGVyZSdzXG4gICAgICogbm8gaGVhZCBlbGVtZW50IGF2YWlsYWJsZSBhbmQgdGhlIGxpbmsgbXVzdCBiZSBsb2FkZWQgZm9yIGV2ZXJ5XG4gICAgICogd2ViIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBhZGRMaW5rUmVzb3VyY2UoaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBmaW5kUmVzb3VyY2U7XG4gICAgZ2V0U3ltYm9sKGljb25UeXBlOiBJQ09OX1RZUEUgfCBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBnZXQgY29uZmlnKCk7XG59XG4iXX0=