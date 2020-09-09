import { DirectionMode } from '../../../layout/direction/config/direction.model';
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
    /**
     * Lists icons that should be flipped for a specific direction.
     */
    flipDirection?: {
        [ICON_TYPE: string]: DirectionMode;
    };
}
export interface IconConfigResource {
    type: IconResourceType | string;
    url?: string;
    types?: (ICON_TYPE | string)[];
}
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automatically loaded in case they're required for the `ICON_TYPE`.
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5kLnRzIiwic291cmNlcyI6WyJpY29uLm1vZGVsLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvZGlyZWN0aW9uL2NvbmZpZy9kaXJlY3Rpb24ubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgZW51bSBJQ09OX1RZUEUge1xuICAgIFNUQVIgPSBcIlNUQVJcIixcbiAgICBTRUFSQ0ggPSBcIlNFQVJDSFwiLFxuICAgIENBUlQgPSBcIkNBUlRcIixcbiAgICBJTkZPID0gXCJJTkZPXCIsXG4gICAgR1JJRCA9IFwiR1JJRFwiLFxuICAgIExJU1QgPSBcIkxJU1RcIixcbiAgICBDQVJFVF9ET1dOID0gXCJDQVJFVF9ET1dOXCIsXG4gICAgQ0FSRVRfTEVGVCA9IFwiQ0FSRVRfTEVGVFwiLFxuICAgIENBUkVUX1JJR0hUID0gXCJDQVJFVF9SSUdIVFwiLFxuICAgIENMT1NFID0gXCJDTE9TRVwiLFxuICAgIEVSUk9SID0gXCJFUlJPUlwiLFxuICAgIFdBUk5JTkcgPSBcIldBUk5JTkdcIixcbiAgICBTVUNDRVNTID0gXCJTVUNDRVNTXCIsXG4gICAgVklTQSA9IFwiVklTQVwiLFxuICAgIE1BU1RFUl9DQVJEID0gXCJNQVNURVJfQ0FSRFwiLFxuICAgIEFNRVggPSBcIkFNRVhcIixcbiAgICBESU5FUlNfQ0xVQiA9IFwiRElORVJTX0NMVUJcIixcbiAgICBDUkVESVRfQ0FSRCA9IFwiQ1JFRElUX0NBUkRcIixcbiAgICBFWFBBTkQgPSBcIkVYUEFORFwiLFxuICAgIENPTExBUFNFID0gXCJDT0xMQVBTRVwiLFxuICAgIFJFU0VUID0gXCJSRVNFVFwiLFxuICAgIENJUkNMRSA9IFwiQ0lSQ0xFXCIsXG4gICAgSEVBUlQgPSBcIkhFQVJUXCIsXG4gICAgRU1QVFlfSEVBUlQgPSBcIkVNUFRZX0hFQVJUXCIsXG4gICAgRklMVEVSID0gXCJGSUxURVJcIlxufVxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgSWNvbkNvbmZpZyB7XG4gICAgaWNvbj86IEljb25PcHRpb25zO1xufVxuZXhwb3J0IGludGVyZmFjZSBJY29uT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogRWFjaCBpY29uIHR5cGUgY2FuIGJlIGNvbmZpZ3VyZWQgd2l0aCBhIHNvLWNhbGxlZCBzeW1ib2wuIFRoZSBzeW1ib2wgd2lsbFxuICAgICAqIGJlIHVzZWQgdG8gbWFwIHRoZSBpY29uIHRvIGFuIFNWRyBgc3ltYm9sYCAoaWQpIG9yIHRvIHRoZSBzdHlsZSBjbGFzc2VzIG9mXG4gICAgICogYSBmb250IGJhc2VkIGljb24uIFRoZSBmb2xsb3dpbmcgY29uZmlndXJhdGlvbiB3b3VsZCBtYXAgdG8gYSBmb250YXdlc29tZVxuICAgICAqIGljb246XG4gICAgICpcbiAgICAgKiBpY29uOiB7XG4gICAgICogICBzeW1ib2xzOiB7XG4gICAgICogICAgIENBUlQ6ICdmYXMgZmEtc2hvcHBpbmctY2FydCdcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICovXG4gICAgc3ltYm9scz86IHtcbiAgICAgICAgW0lDT05fVFlQRTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzb3VyY2VzIGFyZSB1c2VkIHRvIG1hcCBpY29uIHR5cGVzIHRvIGNlcnRhaW4gYXNzZXQsIHN1Y2ggYXMgYW4gU1ZHIChzcHJpdGUpIGltYWdlLlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIChgSWNvblJlc291cmNlVHlwZWApIGRpY3RhdGVzIHdoZXRoZXIgYW4gU1ZHIGltYWdlIGlzIHVzZWQuIFRoZSBVUkxcbiAgICAgKiBpcyB1c2VkIGZvciB0aGUgU1ZHIHhsaW5rIHJlZmVyZW5jZS5cbiAgICAgKi9cbiAgICByZXNvdXJjZXM/OiBJY29uQ29uZmlnUmVzb3VyY2VbXTtcbiAgICAvKipcbiAgICAgKiBMaXN0cyBpY29ucyB0aGF0IHNob3VsZCBiZSBmbGlwcGVkIGZvciBhIHNwZWNpZmljIGRpcmVjdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwRGlyZWN0aW9uPzoge1xuICAgICAgICBbSUNPTl9UWVBFOiBzdHJpbmddOiBEaXJlY3Rpb25Nb2RlO1xuICAgIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWdSZXNvdXJjZSB7XG4gICAgdHlwZTogSWNvblJlc291cmNlVHlwZSB8IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgdHlwZXM/OiAoSUNPTl9UWVBFIHwgc3RyaW5nKVtdO1xufVxuLyoqXG4gKiBFYWNoIElDT04gdHlwZSBjYW4gaGF2ZSBhbiBjb21wYW5pZWQgcmVzb3VyY2UgdHlwZSwgc3VjaCBhcyBTVkcsIExJTksgKGZvbnQpIG9yIGp1c3QgVEVYVC5cbiAqIFRoZSByZXNvdXJjZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGxvYWRlZCBpbiBjYXNlIHRoZXkncmUgcmVxdWlyZWQgZm9yIHRoZSBgSUNPTl9UWVBFYC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgZW51bSBJY29uUmVzb3VyY2VUeXBlIHtcbiAgICAvKipcbiAgICAgKiBBbiBzdmcgYmFzZWQgaWNvbiByZXF1aXJlcyBhbiBTVkcgcmVzb3VyY2UgdGhhdCBtdXN0IGJlIGxvYWRlZCxcbiAgICAgKiB0aGlzIGlzIHR5cGljYWxseSBhIHNwcml0ZSBzdmcgZmlsZS5cbiAgICAgKi9cbiAgICBTVkcgPSBcInN2Z1wiLFxuICAgIC8qKlxuICAgICAqIEEgZm9udCBiYXNlZCBJQ09OIG1pZ2h0IHJlcXVpcmUgYW4gYWRkaXRpb25hbCBDU1MgZmlsZSB0byBiZSBsb2FkZWQuXG4gICAgICovXG4gICAgTElOSyA9IFwibGlua1wiLFxuICAgIC8qKlxuICAgICAqIFRleHQgYmFzZWQgaWNvbnMgd2lsbCBzaW1wbHkgYWRkIHRoZSBJQ09OIHN0cmluZyB0byB0aGUgRE9NLiBUZXh0IGljb25zIGRvIG5vdCBuZWVkIGFuIGltYWdlXG4gICAgICogb3IgQ1NTIHBzZXVkbyBjbGFzcyAoaS5lLiA6YmVmb3JlKSwgYXMgdGhlIHRleHQgaXRzZWxmIGlzIHRoZSBpY29uIChpLmUuICspXG4gICAgICovXG4gICAgVEVYVCA9IFwidGV4dFwiXG59XG4iXX0=