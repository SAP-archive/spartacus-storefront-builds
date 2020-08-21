export declare enum OutletPosition {
    REPLACE = "replace",
    BEFORE = "before",
    AFTER = "after"
}
export declare const AVOID_STACKED_OUTLETS = false;
export declare const USE_STACKED_OUTLETS = true;
/**
 * Token for injecting outlet related context to the component rendered in the outlet
 */
export declare abstract class OutletContextData<T = any> {
    /**
     * Provides reference of the outlet where component is rendered in
     */
    reference: string;
    /**
     * Provides position of the outlet
     */
    position: OutletPosition;
    /**
     * Provides outlet context
     */
    context: T;
}
