import { OnDestroy } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../shared/components/modal/index';
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
}
