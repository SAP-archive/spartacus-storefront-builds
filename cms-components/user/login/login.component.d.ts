import { OnInit } from '@angular/core';
import { AuthService, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LoginComponent implements OnInit {
    private auth;
    private userService;
    user$: Observable<User>;
    constructor(auth: AuthService, userService: UserService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginComponent, "cx-login", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBhdXRoO1xuICAgIHByaXZhdGUgdXNlclNlcnZpY2U7XG4gICAgdXNlciQ6IE9ic2VydmFibGU8VXNlcj47XG4gICAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==