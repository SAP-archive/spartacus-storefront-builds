import { OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../modal/index';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentDialogComponent implements OnInit, OnDestroy {
    private config;
    private modalService;
    private anonymousConsentsService;
    private subscriptions;
    showLegalDescription: boolean;
    iconTypes: typeof ICON_TYPE;
    requiredConsents: string[];
    loading$: Observable<boolean>;
    templates$: Observable<ConsentTemplate[]>;
    consents$: Observable<AnonymousConsent[]>;
    isLevel13: boolean;
    constructor(config: AnonymousConsentsConfig, modalService: ModalService, anonymousConsentsService: AnonymousConsentsService);
    ngOnInit(): void;
    closeModal(reason?: any): void;
    rejectAll(): void;
    allowAll(): void;
    private isRequiredConsent;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    getCorrespondingConsent(template: ConsentTemplate, consents?: AnonymousConsent[]): AnonymousConsent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnonymousConsentDialogComponent, "cx-anonymous-consent-dialog", never, {}, {}, never>;
}

//# sourceMappingURL=anonymous-consent-dialog.component.d.ts.map