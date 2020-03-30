import { OccConfig } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { Media } from './media.model';
import * as ɵngcc0 from '@angular/core';
export declare class MediaService {
    protected config: OccConfig;
    protected breakpointService: BreakpointService;
    constructor(config: OccConfig, breakpointService: BreakpointService);
    private get mediaFormats();
    getMedia(container: any, format?: string, alt?: string): Media;
    private getMainImage;
    /**
     * returns highest resolution format name from media formats
     */
    private getHighestAvailableFormat;
    private getAlt;
    /**
     * builds a set of images aligned with the breakpoints
     */
    private getSrcSet;
    private getImageUrl;
    private getBaseUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWc7XG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE9jY0NvbmZpZywgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGdldCBtZWRpYUZvcm1hdHMoKTtcbiAgICBnZXRNZWRpYShjb250YWluZXI6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCBhbHQ/OiBzdHJpbmcpOiBNZWRpYTtcbiAgICBwcml2YXRlIGdldE1haW5JbWFnZTtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGhpZ2hlc3QgcmVzb2x1dGlvbiBmb3JtYXQgbmFtZSBmcm9tIG1lZGlhIGZvcm1hdHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEhpZ2hlc3RBdmFpbGFibGVGb3JtYXQ7XG4gICAgcHJpdmF0ZSBnZXRBbHQ7XG4gICAgLyoqXG4gICAgICogYnVpbGRzIGEgc2V0IG9mIGltYWdlcyBhbGlnbmVkIHdpdGggdGhlIGJyZWFrcG9pbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTcmNTZXQ7XG4gICAgcHJpdmF0ZSBnZXRJbWFnZVVybDtcbiAgICBwcml2YXRlIGdldEJhc2VVcmw7XG59XG4iXX0=