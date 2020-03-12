import { GlobalMessageService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
import * as ɵngcc0 from '@angular/core';
export declare class AddToHomeScreenService {
    private config;
    private globalMessageService;
    private winRef;
    private deferredEvent;
    private canPrompt;
    canPrompt$: Observable<boolean>;
    constructor(config: PWAModuleConfig, globalMessageService: GlobalMessageService, winRef: WindowRef);
    init(): void;
    enableAddToHomeScreen(): void;
    disableAddToHomeScreen(): void;
    firePrompt(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToHomeScreenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AddToHomeScreenService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQV0FNb2R1bGVDb25maWcgfSBmcm9tICcuLi9wd2EubW9kdWxlLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIHByaXZhdGUgZGVmZXJyZWRFdmVudDtcbiAgICBwcml2YXRlIGNhblByb21wdDtcbiAgICBjYW5Qcm9tcHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUFdBTW9kdWxlQ29uZmlnLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIHdpblJlZjogV2luZG93UmVmKTtcbiAgICBpbml0KCk6IHZvaWQ7XG4gICAgZW5hYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQ7XG4gICAgZGlzYWJsZUFkZFRvSG9tZVNjcmVlbigpOiB2b2lkO1xuICAgIGZpcmVQcm9tcHQoKTogdm9pZDtcbn1cbiJdfQ==