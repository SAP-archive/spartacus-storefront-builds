import { OccConfig } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { Media } from './media.model';
export declare class MediaService {
    protected config: OccConfig;
    protected breakpointService: BreakpointService;
    constructor(config: OccConfig, breakpointService: BreakpointService);
    private readonly mediaFormats;
    getMedia(container: any, format?: string, alt?: string): Media;
    private getMainImage;
    private getAlt;
    /**
     * builds a set of images aligned with the breakpoints
     */
    private getSrcSet;
    private getImageUrl;
    private getBaseUrl;
}
