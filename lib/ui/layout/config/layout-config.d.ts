export declare enum BREAKPOINT {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare type LayoutSections = 'header' | 'footer' | 'LandingPage2Template' | string;
export declare type SlotConfig = {
    slots?: string[];
};
export declare type SlotGroup = {
    [BREAKPOINT.lg]?: SlotConfig;
    [BREAKPOINT.md]?: SlotConfig;
    [BREAKPOINT.sm]?: SlotConfig;
    [BREAKPOINT.xs]?: SlotConfig;
};
export declare type LayoutSlotConfig = {
    [section in LayoutSections]: SlotConfig | SlotGroup | LayoutSlotConfig;
};
export declare abstract class LayoutConfig {
    breakpoints?: {
        [BREAKPOINT.xs]?: number;
        [BREAKPOINT.sm]?: number;
        [BREAKPOINT.md]?: number;
        [BREAKPOINT.lg]?: number;
    };
    layoutSlots?: LayoutSlotConfig;
}
