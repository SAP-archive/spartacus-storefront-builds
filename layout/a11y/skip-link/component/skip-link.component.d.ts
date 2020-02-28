import { Observable } from 'rxjs';
import { SkipLink } from '../config/skip-link.config';
import { SkipLinkService } from '../service/skip-link.service';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkComponent {
    private skipLinkService;
    skipLinks$: Observable<SkipLink[]>;
    constructor(skipLinkService: SkipLinkService);
    scrollToTarget(skipLink: SkipLink, event: MouseEvent): void;
    /**
     * Hides the skip link by removing the focus.
     */
    blur(event: MouseEvent): void;
    tabNext(event: MouseEvent): void;
    tabPrev(event: MouseEvent): void;
    private isElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SkipLinkComponent, "cx-skip-link", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJza2lwLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFZQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTa2lwTGluayB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2tpcExpbmtDb21wb25lbnQge1xuICAgIHByaXZhdGUgc2tpcExpbmtTZXJ2aWNlO1xuICAgIHNraXBMaW5rcyQ6IE9ic2VydmFibGU8U2tpcExpbmtbXT47XG4gICAgY29uc3RydWN0b3Ioc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2UpO1xuICAgIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluaywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBza2lwIGxpbmsgYnkgcmVtb3ZpbmcgdGhlIGZvY3VzLlxuICAgICAqL1xuICAgIGJsdXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIHRhYk5leHQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIHRhYlByZXYoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIHByaXZhdGUgaXNFbGVtZW50O1xufVxuIl19