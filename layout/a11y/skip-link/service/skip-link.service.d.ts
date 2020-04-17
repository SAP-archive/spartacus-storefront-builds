import { Observable } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus/services/keyboard-focus.service';
import { SkipLink, SkipLinkConfig } from '../config/skip-link.config';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkService {
    protected config: SkipLinkConfig;
    protected keyboardFocusService: KeyboardFocusService;
    private skipLinks$;
    constructor(config: SkipLinkConfig, keyboardFocusService: KeyboardFocusService);
    getSkipLinks(): Observable<SkipLink[]>;
    add(key: string, target: HTMLElement): void;
    remove(key: string): void;
    scrollToTarget(skipLink: SkipLink): void;
    protected getSkipLinkIndexInArray(key: string): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic2tpcC1saW5rLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9rZXlib2FyZC1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNraXBMaW5rLCBTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNraXBMaW5rU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2tpcExpbmtDb25maWc7XG4gICAgcHJvdGVjdGVkIGtleWJvYXJkRm9jdXNTZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZTtcbiAgICBwcml2YXRlIHNraXBMaW5rcyQ7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBTa2lwTGlua0NvbmZpZywga2V5Ym9hcmRGb2N1c1NlcnZpY2U6IEtleWJvYXJkRm9jdXNTZXJ2aWNlKTtcbiAgICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPjtcbiAgICBhZGQoa2V5OiBzdHJpbmcsIHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICAgIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQ7XG4gICAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5OiBzdHJpbmcpOiBudW1iZXI7XG59XG4iXX0=