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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToHomeScreenService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3B3YS5tb2R1bGUtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFkZFRvSG9tZVNjcmVlblNlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSB3aW5SZWY7XG4gICAgcHJpdmF0ZSBkZWZlcnJlZEV2ZW50O1xuICAgIHByaXZhdGUgY2FuUHJvbXB0O1xuICAgIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBQV0FNb2R1bGVDb25maWcsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIGluaXQoKTogdm9pZDtcbiAgICBlbmFibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZDtcbiAgICBkaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk6IHZvaWQ7XG4gICAgZmlyZVByb21wdCgpOiB2b2lkO1xufVxuIl19