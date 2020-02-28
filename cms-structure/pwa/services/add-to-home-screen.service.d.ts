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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUFdBTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi4vcHdhLm1vZHVsZS1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIHdpblJlZjtcbiAgICBwcml2YXRlIGRlZmVycmVkRXZlbnQ7XG4gICAgcHJpdmF0ZSBjYW5Qcm9tcHQ7XG4gICAgY2FuUHJvbXB0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFBXQU1vZHVsZUNvbmZpZywgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCB3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgaW5pdCgpOiB2b2lkO1xuICAgIGVuYWJsZUFkZFRvSG9tZVNjcmVlbigpOiB2b2lkO1xuICAgIGRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZDtcbiAgICBmaXJlUHJvbXB0KCk6IHZvaWQ7XG59XG4iXX0=