import { OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalMessageService, RoutingService, UserService, UserToken, AuthService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CloseAccountModalComponent implements OnInit, OnDestroy {
    private activeModal;
    private userService;
    private authService;
    private globalMessageService;
    private routingService;
    private translationService;
    private subscription;
    userToken$: Observable<UserToken>;
    isLoading$: Observable<boolean>;
    constructor(activeModal: NgbActiveModal, userService: UserService, authService: AuthService, globalMessageService: GlobalMessageService, routingService: RoutingService, translationService: TranslationService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    closeModal(): void;
    closeAccount(userId: string): void;
    ngOnDestroy(): void;
}
