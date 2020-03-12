import { OnDestroy } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../shared/components/modal/modal.service';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentManagementBannerComponent implements OnDestroy {
    private modalService;
    private anonymousConsentsService;
    private subscriptions;
    bannerVisible$: Observable<boolean>;
    constructor(modalService: ModalService, anonymousConsentsService: AnonymousConsentsService);
    viewDetails(): void;
    allowAll(): void;
    hideBanner(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentManagementBannerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnonymousConsentManagementBannerComponent, "cx-anonymous-consent-management-banner", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlO1xuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucztcbiAgICBiYW5uZXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UpO1xuICAgIHZpZXdEZXRhaWxzKCk6IHZvaWQ7XG4gICAgYWxsb3dBbGwoKTogdm9pZDtcbiAgICBoaWRlQmFubmVyKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==