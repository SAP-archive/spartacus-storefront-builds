import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { IconConfig, ICON_TYPE } from './icon.model';
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
}
