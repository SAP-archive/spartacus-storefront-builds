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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaService>;
}

//# sourceMappingURL=media.service.d.ts.map