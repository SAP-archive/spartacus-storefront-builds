import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import * as ɵngcc0 from '@angular/core';
export declare abstract class LaunchConfig {
    launch?: {
        [key: string]: LaunchOptions;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LaunchConfig, never>;
}
export declare type LaunchOptions = LaunchOutletDialog | LaunchInlineDialog | LaunchRoute;
/**
 * Parent type for configurations that render components
 */
export interface LaunchDialog {
    component: any;
    /**
     * Can the element be rendered multiple times
     */
    multi?: boolean;
    /**
     * Optional elements for other configurations
     */
    options?: {
        /**
         * Dialog type is used to apply CSS classes
         */
        dialogType?: DIALOG_TYPE;
    };
}
/**
 * Configuration type to render a component in an outlet
 */
export interface LaunchOutletDialog extends LaunchDialog {
    /**
     * The outlet to render the element in
     */
    outlet: string;
    /**
     * Default: OutletPosition.BEFORE
     */
    position?: OutletPosition;
}
/**
 * Configuration type to render a component inline (next to the trigger)
 */
export interface LaunchInlineDialog extends LaunchDialog {
    inline: boolean;
}
/**
 * Configuration type to render as link
 */
export interface LaunchRoute {
    /**
     * The route for the url
     */
    cxRoute: string;
    /**
     * The parameters for the route
     */
    params?: {
        [param: string]: any;
    };
}
/**
 * Types of dialog openings supported
 */
export declare enum DIALOG_TYPE {
    POPOVER = "POPOVER",
    DIALOG = "DIALOG",
    SIDEBAR_START = "SIDEBAR_START",
    SIDEBAR_END = "SIDEBAR_END"
}
/**
 * List of available callers
 */
export declare enum LAUNCH_CALLER {
    ASM = "ASM",
    SKIP_LINKS = "SKIP_LINKS"
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJsYXVuY2gtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBMYXVuY2hDb25maWcge1xuICAgIGxhdW5jaD86IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogTGF1bmNoT3B0aW9ucztcbiAgICB9O1xufVxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMYXVuY2hPcHRpb25zID0gTGF1bmNoT3V0bGV0RGlhbG9nIHwgTGF1bmNoSW5saW5lRGlhbG9nIHwgTGF1bmNoUm91dGU7XG4vKipcbiAqIFBhcmVudCB0eXBlIGZvciBjb25maWd1cmF0aW9ucyB0aGF0IHJlbmRlciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoRGlhbG9nIHtcbiAgICBjb21wb25lbnQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBDYW4gdGhlIGVsZW1lbnQgYmUgcmVuZGVyZWQgbXVsdGlwbGUgdGltZXNcbiAgICAgKi9cbiAgICBtdWx0aT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgZWxlbWVudHMgZm9yIG90aGVyIGNvbmZpZ3VyYXRpb25zXG4gICAgICovXG4gICAgb3B0aW9ucz86IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpYWxvZyB0eXBlIGlzIHVzZWQgdG8gYXBwbHkgQ1NTIGNsYXNzZXNcbiAgICAgICAgICovXG4gICAgICAgIGRpYWxvZ1R5cGU/OiBESUFMT0dfVFlQRTtcbiAgICB9O1xufVxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHR5cGUgdG8gcmVuZGVyIGEgY29tcG9uZW50IGluIGFuIG91dGxldFxuICovXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaE91dGxldERpYWxvZyBleHRlbmRzIExhdW5jaERpYWxvZyB7XG4gICAgLyoqXG4gICAgICogVGhlIG91dGxldCB0byByZW5kZXIgdGhlIGVsZW1lbnQgaW5cbiAgICAgKi9cbiAgICBvdXRsZXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0OiBPdXRsZXRQb3NpdGlvbi5CRUZPUkVcbiAgICAgKi9cbiAgICBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uO1xufVxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHR5cGUgdG8gcmVuZGVyIGEgY29tcG9uZW50IGlubGluZSAobmV4dCB0byB0aGUgdHJpZ2dlcilcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hJbmxpbmVEaWFsb2cgZXh0ZW5kcyBMYXVuY2hEaWFsb2cge1xuICAgIGlubGluZTogYm9vbGVhbjtcbn1cbi8qKlxuICogQ29uZmlndXJhdGlvbiB0eXBlIHRvIHJlbmRlciBhcyBsaW5rXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoUm91dGUge1xuICAgIC8qKlxuICAgICAqIFRoZSByb3V0ZSBmb3IgdGhlIHVybFxuICAgICAqL1xuICAgIGN4Um91dGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgcGFyYW1ldGVycyBmb3IgdGhlIHJvdXRlXG4gICAgICovXG4gICAgcGFyYW1zPzoge1xuICAgICAgICBbcGFyYW06IHN0cmluZ106IGFueTtcbiAgICB9O1xufVxuLyoqXG4gKiBUeXBlcyBvZiBkaWFsb2cgb3BlbmluZ3Mgc3VwcG9ydGVkXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGVudW0gRElBTE9HX1RZUEUge1xuICAgIFBPUE9WRVIgPSBcIlBPUE9WRVJcIixcbiAgICBESUFMT0cgPSBcIkRJQUxPR1wiLFxuICAgIFNJREVCQVJfU1RBUlQgPSBcIlNJREVCQVJfU1RBUlRcIixcbiAgICBTSURFQkFSX0VORCA9IFwiU0lERUJBUl9FTkRcIlxufVxuLyoqXG4gKiBMaXN0IG9mIGF2YWlsYWJsZSBjYWxsZXJzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGVudW0gTEFVTkNIX0NBTExFUiB7XG4gICAgQVNNID0gXCJBU01cIixcbiAgICBTS0lQX0xJTktTID0gXCJTS0lQX0xJTktTXCJcbn1cbiJdfQ==