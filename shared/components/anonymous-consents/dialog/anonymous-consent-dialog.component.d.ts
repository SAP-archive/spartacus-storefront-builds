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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnonymousConsentDialogComponent, "cx-anonymous-consent-dialog", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTtcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM7XG4gICAgc2hvd0xlZ2FsRGVzY3JpcHRpb246IGJvb2xlYW47XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdO1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHRlbXBsYXRlcyQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIGNvbnNlbnRzJDogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjbG9zZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG4gICAgcmVqZWN0QWxsKCk6IHZvaWQ7XG4gICAgYWxsb3dBbGwoKTogdm9pZDtcbiAgICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50O1xuICAgIG9uQ29uc2VudENoYW5nZSh7IGdpdmVuLCB0ZW1wbGF0ZSwgfToge1xuICAgICAgICBnaXZlbjogYm9vbGVhbjtcbiAgICAgICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgICB9KTogdm9pZDtcbiAgICBnZXRDb3JyZXNwb25kaW5nQ29uc2VudCh0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlLCBjb25zZW50cz86IEFub255bW91c0NvbnNlbnRbXSk6IEFub255bW91c0NvbnNlbnQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==