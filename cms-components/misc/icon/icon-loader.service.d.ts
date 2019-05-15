import { IconConfig, ICON_TYPES } from './icon.model';
export declare class IconLoaderService {
    private config;
    constructor(config: IconConfig);
    useSvg(): boolean;
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    getSvgPath(iconType: ICON_TYPES | string): string;
    /**
     *
     * returns an array of css classes that can be used to
     * render the icon by CSS / font. This is driven by the `iconType`
     * and the icon configuration, so that multiple icon fonts are
     * supported, such as font awesome, glypicons, Octicons, etc.
     */
    getStyleClasses(iconType: ICON_TYPES | string): string[];
    private getMappedType;
}
