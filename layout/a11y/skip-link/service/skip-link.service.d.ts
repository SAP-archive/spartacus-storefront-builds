import { Observable } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic2tpcC1saW5rLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9rZXlib2FyZC1mb2N1cyc7XG5pbXBvcnQgeyBTa2lwTGluaywgU2tpcExpbmtDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IFNraXBMaW5rQ29uZmlnO1xuICAgIHByb3RlY3RlZCBrZXlib2FyZEZvY3VzU2VydmljZTogS2V5Ym9hcmRGb2N1c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBza2lwTGlua3MkO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU2tpcExpbmtDb25maWcsIGtleWJvYXJkRm9jdXNTZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZSk7XG4gICAgZ2V0U2tpcExpbmtzKCk6IE9ic2VydmFibGU8U2tpcExpbmtbXT47XG4gICAgYWRkKGtleTogc3RyaW5nLCB0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZDtcbiAgICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkO1xuICAgIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluayk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleTogc3RyaW5nKTogbnVtYmVyO1xufVxuIl19