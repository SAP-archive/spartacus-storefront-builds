import { WindowRef } from '@spartacus/core';
import { IconConfig, ICON_TYPE } from './icon.model';
export declare class IconLoaderService {
    protected winRef: WindowRef;
    protected config: IconConfig;
    private loadedResources;
    constructor(winRef: WindowRef, config: IconConfig);
    /**
     * Indicates whether the given icon type is configured to use SVG.
     */
    useSvg(iconType: ICON_TYPE): boolean;
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    getSvgPath(iconType: ICON_TYPE): string;
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    getStyleClasses(iconType: ICON_TYPE | string): string;
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    addLinkResource(iconType: ICON_TYPE): void;
    private findResource;
    private getSymbol;
}
