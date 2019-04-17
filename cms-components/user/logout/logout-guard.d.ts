import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, CmsService } from '@spartacus/core';
export declare class LogoutGuard implements CanActivate {
    protected auth: AuthService;
    protected cms: CmsService;
    static GUARD_NAME: string;
    constructor(auth: AuthService, cms: CmsService);
    canActivate(): Observable<boolean>;
    protected logout(): void;
}
