import * as ɵngcc0 from '@angular/core';
export declare enum ICON_TYPE {
    STAR = "STAR",
    SEARCH = "SEARCH",
    CART = "CART",
    INFO = "INFO",
    GRID = "GRID",
    LIST = "LIST",
    CARET_DOWN = "CARET_DOWN",
    CARET_LEFT = "CARET_LEFT",
    CARET_RIGHT = "CARET_RIGHT",
    CLOSE = "CLOSE",
    ERROR = "ERROR",
    WARNING = "WARNING",
    SUCCESS = "SUCCESS",
    VISA = "VISA",
    MASTER_CARD = "MASTER_CARD",
    AMEX = "AMEX",
    DINERS_CLUB = "DINERS_CLUB",
    CREDIT_CARD = "CREDIT_CARD",
    EXPAND = "EXPAND",
    COLLAPSE = "COLLAPSE",
    RESET = "RESET",
    CIRCLE = "CIRCLE",
    HEART = "HEART",
    EMPTY_HEART = "EMPTY_HEART",
    FILTER = "FILTER"
}
export declare abstract class IconConfig {
    icon?: IconOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IconConfig, never>;
}
export interface IconOptions {
    /**
     * Each icon type can be configured with a so-called symbol. The symbol will
     * be used to map the icon to an SVG `symbol` (id) or to the style classes of
     * a font based icon. The following configuration would map to a fontawesome
     * icon:
     *
     * icon: {
     *   symbols: {
     *     CART: 'fas fa-shopping-cart'
     *   }
     * }
     */
    symbols?: {
        [ICON_TYPE: string]: string;
    };
    /**
     * Resources are used to map icon types to certain asset, such as an SVG (sprite) image.
     * The resource type (`IconResourceType`) dictates whether an SVG image is used. The URL
     * is used for the SVG xlink reference.
     */
    resources?: IconConfigResource[];
}
export interface IconConfigResource {
    type: IconResourceType | string;
    url?: string;
    types?: (ICON_TYPE | string)[];
}
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automitacally loaded in case they're required for the `ICON_TYPE`.
 */
export declare enum IconResourceType {
    /**
     * An svg based icon requires an SVG resource that must be loaded,
     * this is typically a sprite svg file.
     */
    SVG = "svg",
    /**
     * A font based ICON might require an additional CSS file to be loaded.
     */
    LINK = "link",
    /**
     * Text based icons will simply add the ICON string to the DOM. Text icons do not need an image
     * or CSS pseudo class (i.e. :before), as the text itself is the icon (i.e. +)
     */
    TEXT = "text"
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5kLnRzIiwic291cmNlcyI6WyJpY29uLm1vZGVsLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBlbnVtIElDT05fVFlQRSB7XG4gICAgU1RBUiA9IFwiU1RBUlwiLFxuICAgIFNFQVJDSCA9IFwiU0VBUkNIXCIsXG4gICAgQ0FSVCA9IFwiQ0FSVFwiLFxuICAgIElORk8gPSBcIklORk9cIixcbiAgICBHUklEID0gXCJHUklEXCIsXG4gICAgTElTVCA9IFwiTElTVFwiLFxuICAgIENBUkVUX0RPV04gPSBcIkNBUkVUX0RPV05cIixcbiAgICBDQVJFVF9MRUZUID0gXCJDQVJFVF9MRUZUXCIsXG4gICAgQ0FSRVRfUklHSFQgPSBcIkNBUkVUX1JJR0hUXCIsXG4gICAgQ0xPU0UgPSBcIkNMT1NFXCIsXG4gICAgRVJST1IgPSBcIkVSUk9SXCIsXG4gICAgV0FSTklORyA9IFwiV0FSTklOR1wiLFxuICAgIFNVQ0NFU1MgPSBcIlNVQ0NFU1NcIixcbiAgICBWSVNBID0gXCJWSVNBXCIsXG4gICAgTUFTVEVSX0NBUkQgPSBcIk1BU1RFUl9DQVJEXCIsXG4gICAgQU1FWCA9IFwiQU1FWFwiLFxuICAgIERJTkVSU19DTFVCID0gXCJESU5FUlNfQ0xVQlwiLFxuICAgIENSRURJVF9DQVJEID0gXCJDUkVESVRfQ0FSRFwiLFxuICAgIEVYUEFORCA9IFwiRVhQQU5EXCIsXG4gICAgQ09MTEFQU0UgPSBcIkNPTExBUFNFXCIsXG4gICAgUkVTRVQgPSBcIlJFU0VUXCIsXG4gICAgQ0lSQ0xFID0gXCJDSVJDTEVcIixcbiAgICBIRUFSVCA9IFwiSEVBUlRcIixcbiAgICBFTVBUWV9IRUFSVCA9IFwiRU1QVFlfSEVBUlRcIixcbiAgICBGSUxURVIgPSBcIkZJTFRFUlwiXG59XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBJY29uQ29uZmlnIHtcbiAgICBpY29uPzogSWNvbk9wdGlvbnM7XG59XG5leHBvcnQgaW50ZXJmYWNlIEljb25PcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBFYWNoIGljb24gdHlwZSBjYW4gYmUgY29uZmlndXJlZCB3aXRoIGEgc28tY2FsbGVkIHN5bWJvbC4gVGhlIHN5bWJvbCB3aWxsXG4gICAgICogYmUgdXNlZCB0byBtYXAgdGhlIGljb24gdG8gYW4gU1ZHIGBzeW1ib2xgIChpZCkgb3IgdG8gdGhlIHN0eWxlIGNsYXNzZXMgb2ZcbiAgICAgKiBhIGZvbnQgYmFzZWQgaWNvbi4gVGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uIHdvdWxkIG1hcCB0byBhIGZvbnRhd2Vzb21lXG4gICAgICogaWNvbjpcbiAgICAgKlxuICAgICAqIGljb246IHtcbiAgICAgKiAgIHN5bWJvbHM6IHtcbiAgICAgKiAgICAgQ0FSVDogJ2ZhcyBmYS1zaG9wcGluZy1jYXJ0J1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKi9cbiAgICBzeW1ib2xzPzoge1xuICAgICAgICBbSUNPTl9UWVBFOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNvdXJjZXMgYXJlIHVzZWQgdG8gbWFwIGljb24gdHlwZXMgdG8gY2VydGFpbiBhc3NldCwgc3VjaCBhcyBhbiBTVkcgKHNwcml0ZSkgaW1hZ2UuXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgKGBJY29uUmVzb3VyY2VUeXBlYCkgZGljdGF0ZXMgd2hldGhlciBhbiBTVkcgaW1hZ2UgaXMgdXNlZC4gVGhlIFVSTFxuICAgICAqIGlzIHVzZWQgZm9yIHRoZSBTVkcgeGxpbmsgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHJlc291cmNlcz86IEljb25Db25maWdSZXNvdXJjZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJY29uQ29uZmlnUmVzb3VyY2Uge1xuICAgIHR5cGU6IEljb25SZXNvdXJjZVR5cGUgfCBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIHR5cGVzPzogKElDT05fVFlQRSB8IHN0cmluZylbXTtcbn1cbi8qKlxuICogRWFjaCBJQ09OIHR5cGUgY2FuIGhhdmUgYW4gY29tcGFuaWVkIHJlc291cmNlIHR5cGUsIHN1Y2ggYXMgU1ZHLCBMSU5LIChmb250KSBvciBqdXN0IFRFWFQuXG4gKiBUaGUgcmVzb3VyY2VzIHdpbGwgYmUgYXV0b21pdGFjYWxseSBsb2FkZWQgaW4gY2FzZSB0aGV5J3JlIHJlcXVpcmVkIGZvciB0aGUgYElDT05fVFlQRWAuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGVudW0gSWNvblJlc291cmNlVHlwZSB7XG4gICAgLyoqXG4gICAgICogQW4gc3ZnIGJhc2VkIGljb24gcmVxdWlyZXMgYW4gU1ZHIHJlc291cmNlIHRoYXQgbXVzdCBiZSBsb2FkZWQsXG4gICAgICogdGhpcyBpcyB0eXBpY2FsbHkgYSBzcHJpdGUgc3ZnIGZpbGUuXG4gICAgICovXG4gICAgU1ZHID0gXCJzdmdcIixcbiAgICAvKipcbiAgICAgKiBBIGZvbnQgYmFzZWQgSUNPTiBtaWdodCByZXF1aXJlIGFuIGFkZGl0aW9uYWwgQ1NTIGZpbGUgdG8gYmUgbG9hZGVkLlxuICAgICAqL1xuICAgIExJTksgPSBcImxpbmtcIixcbiAgICAvKipcbiAgICAgKiBUZXh0IGJhc2VkIGljb25zIHdpbGwgc2ltcGx5IGFkZCB0aGUgSUNPTiBzdHJpbmcgdG8gdGhlIERPTS4gVGV4dCBpY29ucyBkbyBub3QgbmVlZCBhbiBpbWFnZVxuICAgICAqIG9yIENTUyBwc2V1ZG8gY2xhc3MgKGkuZS4gOmJlZm9yZSksIGFzIHRoZSB0ZXh0IGl0c2VsZiBpcyB0aGUgaWNvbiAoaS5lLiArKVxuICAgICAqL1xuICAgIFRFWFQgPSBcInRleHRcIlxufVxuIl19