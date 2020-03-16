import { Observable } from 'rxjs';
import { SkipLink, SkipLinkConfig } from '../config/skip-link.config';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkService {
    protected config: SkipLinkConfig;
    private skipLinks$;
    constructor(config: SkipLinkConfig);
    getSkipLinks(): Observable<SkipLink[]>;
    add(key: string, target: HTMLElement): void;
    remove(key: string): void;
    scrollToTarget(skipLink: SkipLink): void;
    protected getSkipLinkIndexInArray(key: string): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic2tpcC1saW5rLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNraXBMaW5rLCBTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNraXBMaW5rU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2tpcExpbmtDb25maWc7XG4gICAgcHJpdmF0ZSBza2lwTGlua3MkO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU2tpcExpbmtDb25maWcpO1xuICAgIGdldFNraXBMaW5rcygpOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+O1xuICAgIGFkZChrZXk6IHN0cmluZywgdGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQ7XG4gICAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZDtcbiAgICBzY3JvbGxUb1RhcmdldChza2lwTGluazogU2tpcExpbmspOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXk6IHN0cmluZyk6IG51bWJlcjtcbn1cbiJdfQ==