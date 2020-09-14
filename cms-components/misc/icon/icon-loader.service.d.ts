import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WindowRef } from '@spartacus/core';
import { DirectionMode } from '../../../layout/direction/config/direction.model';
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
     * Return the direction for which the icon should mirror (ltr vs rtl). The icon direction
     * is configurable, but optional, as only a few icons should be flipped for rtl direction.
     */
    getFlipDirection(type: ICON_TYPE | string): DirectionMode;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IconLoaderService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJpY29uLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2RpcmVjdGlvbi9jb25maWcvZGlyZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEljb25Db25maWcsIElDT05fVFlQRSB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJY29uTG9hZGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBpY29uQ29uZmlnOiBJY29uQ29uZmlnO1xuICAgIHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcjtcbiAgICBwcml2YXRlIGxvYWRlZFJlc291cmNlcztcbiAgICBjb25zdHJ1Y3Rvcih3aW5SZWY6IFdpbmRvd1JlZiwgaWNvbkNvbmZpZzogSWNvbkNvbmZpZywgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaHRtbCBmcmFnbWVudCB3aGljaCBjYW4gYmUgYWRkZWQgdG8gdGhlIERPTSBpbiBhIHNhZmUgd2F5LlxuICAgICAqL1xuICAgIGdldEh0bWwodHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogU2FmZUh0bWw7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBkaXJlY3Rpb24gZm9yIHdoaWNoIHRoZSBpY29uIHNob3VsZCBtaXJyb3IgKGx0ciB2cyBydGwpLiBUaGUgaWNvbiBkaXJlY3Rpb25cbiAgICAgKiBpcyBjb25maWd1cmFibGUsIGJ1dCBvcHRpb25hbCwgYXMgb25seSBhIGZldyBpY29ucyBzaG91bGQgYmUgZmxpcHBlZCBmb3IgcnRsIGRpcmVjdGlvbi5cbiAgICAgKi9cbiAgICBnZXRGbGlwRGlyZWN0aW9uKHR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IERpcmVjdGlvbk1vZGU7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIHRoZSBzeW1ib2wgY2xhc3MoZXMpIGZvciB0aGUgaWNvbiB0eXBlLlxuICAgICAqL1xuICAgIGdldFN0eWxlQ2xhc3NlcyhpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBgSUNPTl9UWVBFYCBpcyBjb25maWd1cmVkIGZvclxuICAgICAqIHRoZSBnaXZlbiBgSWNvblJlc291cmNlVHlwZWAuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1Jlc291cmNlVHlwZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgbGluay4gVGhlIGxpbmsgc3VwcG9ydHMgcGF0aCBuYW1lc1xuICAgICAqIGFzIHdlbGwsIGlmIHRoZSBjb25maWcgYVtbcyBiZWVuIHNldHVwIHRvIHN1cHBvcnQgYSBzdmcgZmlsZSBwYXRoLlxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIGljb24gcHJlZml4IHdpbGwgYmUgdGFrZW4gaW50byBhY2NvdW50IHRvIHByZWZpeCB0aGVcbiAgICAgKiBpY29uIElEcyBpbiB0aGUgU1ZHLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U3ZnUGF0aDtcbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgcmVzb3VyY2UgdXJsIChpZiBhbnkpIGZvciB0aGUgZ2l2ZW4gaWNvbi5cbiAgICAgKiBUaGUgaWNvbiB3aWxsIG9ubHkgYmUgbG9hZGVkIG9uY2UuXG4gICAgICpcbiAgICAgKiBOT1RFOiB0aGlzIGlzIG5vdCB3b3JraW5nIHdoZW4gdGhlIHNoYWRvdyBpcyB1c2VkIGFzIHRoZXJlJ3NcbiAgICAgKiBubyBoZWFkIGVsZW1lbnQgYXZhaWxhYmxlIGFuZCB0aGUgbGluayBtdXN0IGJlIGxvYWRlZCBmb3IgZXZlcnlcbiAgICAgKiB3ZWIgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGFkZExpbmtSZXNvdXJjZShpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIGZpbmRSZXNvdXJjZTtcbiAgICBnZXRTeW1ib2woaWNvblR5cGU6IElDT05fVFlQRSB8IHN0cmluZyk6IHN0cmluZztcbiAgICBwcml2YXRlIGdldCBjb25maWcoKTtcbn1cbiJdfQ==