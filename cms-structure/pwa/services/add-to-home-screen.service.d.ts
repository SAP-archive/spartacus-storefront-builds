import { GlobalMessageService, WindowRef } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
import * as ɵngcc0 from '@angular/core';
export declare class AddToHomeScreenService {
    protected config: PWAModuleConfig;
    protected globalMessageService: GlobalMessageService;
    protected winRef: WindowRef;
    protected deferredEvent: any;
    protected canPrompt: BehaviorSubject<boolean>;
    canPrompt$: Observable<boolean>;
    constructor(config: PWAModuleConfig, globalMessageService: GlobalMessageService, winRef: WindowRef);
    init(): void;
    enableAddToHomeScreen(): void;
    disableAddToHomeScreen(): void;
    firePrompt(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToHomeScreenService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUFdBTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi4vcHdhLm1vZHVsZS1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUFdBTW9kdWxlQ29uZmlnO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBkZWZlcnJlZEV2ZW50OiBhbnk7XG4gICAgcHJvdGVjdGVkIGNhblByb21wdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuICAgIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBQV0FNb2R1bGVDb25maWcsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIGluaXQoKTogdm9pZDtcbiAgICBlbmFibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZDtcbiAgICBkaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQ7XG4gICAgZmlyZVByb21wdCgpOiB2b2lkO1xufVxuIl19