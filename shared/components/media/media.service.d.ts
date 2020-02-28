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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1lZGlhU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnO1xuICAgIHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcsIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSk7XG4gICAgcHJpdmF0ZSBnZXQgbWVkaWFGb3JtYXRzKCk7XG4gICAgZ2V0TWVkaWEoY29udGFpbmVyOiBhbnksIGZvcm1hdD86IHN0cmluZywgYWx0Pzogc3RyaW5nKTogTWVkaWE7XG4gICAgcHJpdmF0ZSBnZXRNYWluSW1hZ2U7XG4gICAgLyoqXG4gICAgICogcmV0dXJucyBoaWdoZXN0IHJlc29sdXRpb24gZm9ybWF0IG5hbWUgZnJvbSBtZWRpYSBmb3JtYXRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRIaWdoZXN0QXZhaWxhYmxlRm9ybWF0O1xuICAgIHByaXZhdGUgZ2V0QWx0O1xuICAgIC8qKlxuICAgICAqIGJ1aWxkcyBhIHNldCBvZiBpbWFnZXMgYWxpZ25lZCB3aXRoIHRoZSBicmVha3BvaW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U3JjU2V0O1xuICAgIHByaXZhdGUgZ2V0SW1hZ2VVcmw7XG4gICAgcHJpdmF0ZSBnZXRCYXNlVXJsO1xufVxuIl19