import { Observable } from 'rxjs';
import { SkipLink, SkipLinkConfig, SkipLinkScrollPosition } from '../config/skip-link.config';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkService {
    protected config: SkipLinkConfig;
    private skipLinks$;
    constructor(config: SkipLinkConfig);
    getSkipLinks(): Observable<SkipLink[]>;
    add(key: string, target: HTMLElement): void;
    remove(key: string): void;
    scrollToTarget(target: HTMLElement, position: SkipLinkScrollPosition, event: MouseEvent): void;
    protected getSkipLinkIndexInArray(key: string): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic2tpcC1saW5rLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTa2lwTGluaywgU2tpcExpbmtDb25maWcsIFNraXBMaW5rU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IFNraXBMaW5rQ29uZmlnO1xuICAgIHByaXZhdGUgc2tpcExpbmtzJDtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFNraXBMaW5rQ29uZmlnKTtcbiAgICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPjtcbiAgICBhZGQoa2V5OiBzdHJpbmcsIHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICAgIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQ7XG4gICAgc2Nyb2xsVG9UYXJnZXQodGFyZ2V0OiBIVE1MRWxlbWVudCwgcG9zaXRpb246IFNraXBMaW5rU2Nyb2xsUG9zaXRpb24sIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5OiBzdHJpbmcpOiBudW1iZXI7XG59XG4iXX0=