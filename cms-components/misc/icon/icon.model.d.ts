export declare enum ICON_TYPE {
    STAR = "STAR",
    SEARCH = "SEARCH",
    CART = "CART",
    INFO = "INFO",
    GRID = "GRID",
    LIST = "LIST",
    CARET_DOWN = "CARET_DOWN",
    TIMES = "TIMES",
    ERROR = "ERROR",
    WARNING = "WARNING",
    SUCCESS = "SUCCESS",
    VISA = "VISA",
    PLUS = "PLUS",
    MINUS = "MINUS"
}
export declare abstract class IconConfig {
    icon?: {
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
    };
}
export interface IconConfigResource {
    type: IconResourceType | string;
    url?: string;
    types?: ICON_TYPE[];
}
export declare enum IconResourceType {
    SVG = "svg",
    LINK = "link"
}
