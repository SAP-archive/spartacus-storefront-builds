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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQW5vbnltb3VzQ29uc2VudHNDb25maWcsIEFub255bW91c0NvbnNlbnRzU2VydmljZSwgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlO1xuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucztcbiAgICBzaG93TGVnYWxEZXNjcmlwdGlvbjogYm9vbGVhbjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW107XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgdGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gICAgY29uc2VudHMkOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT47XG4gICAgaXNMZXZlbDEzOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjbG9zZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG4gICAgcmVqZWN0QWxsKCk6IHZvaWQ7XG4gICAgYWxsb3dBbGwoKTogdm9pZDtcbiAgICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50O1xuICAgIG9uQ29uc2VudENoYW5nZSh7IGdpdmVuLCB0ZW1wbGF0ZSwgfToge1xuICAgICAgICBnaXZlbjogYm9vbGVhbjtcbiAgICAgICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgICB9KTogdm9pZDtcbiAgICBnZXRDb3JyZXNwb25kaW5nQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlLCBjb25zZW50cz86IEFub255bW91c0NvbnNlbnRbXSk6IEFub255bW91c0NvbnNlbnQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==