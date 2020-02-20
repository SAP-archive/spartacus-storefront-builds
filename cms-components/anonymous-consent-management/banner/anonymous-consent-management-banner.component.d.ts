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

//# sourceMappingURL=anonymous-consent-management-banner.component.d.ts.map