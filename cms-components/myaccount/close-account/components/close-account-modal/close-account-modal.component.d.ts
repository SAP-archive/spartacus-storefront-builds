import { OnDestroy, OnInit } from '@angular/core';
import { AuthService, GlobalMessageService, RoutingService, TranslationService, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../../shared/components/modal/modal.service';
import * as ɵngcc0 from '@angular/core';
export declare class CloseAccountModalComponent implements OnInit, OnDestroy {
    protected modalService: ModalService;
    private userService;
    private authService;
    private globalMessageService;
    private routingService;
    private translationService;
    iconTypes: typeof ICON_TYPE;
    private subscription;
    userToken$: Observable<UserToken>;
    isLoading$: Observable<boolean>;
    constructor(modalService: ModalService, userService: UserService, authService: AuthService, globalMessageService: GlobalMessageService, routingService: RoutingService, translationService: TranslationService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    onError(error: boolean): void;
    dismissModal(reason?: any): void;
    closeAccount(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CloseAccountModalComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CloseAccountModalComponent, "cx-close-account-modal", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSwgVXNlclNlcnZpY2UsIFVzZXJUb2tlbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZTtcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICB1c2VyVG9rZW4kOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj47XG4gICAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQ7XG4gICAgb25FcnJvcihlcnJvcjogYm9vbGVhbik6IHZvaWQ7XG4gICAgZGlzbWlzc01vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG4gICAgY2xvc2VBY2NvdW50KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==