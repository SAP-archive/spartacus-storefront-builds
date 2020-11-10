import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout/services/index';
import * as ɵngcc0 from '@angular/core';
export declare class LoginRegisterComponent implements OnInit {
    protected checkoutConfigService: CheckoutConfigService;
    protected activatedRoute: ActivatedRoute;
    loginAsGuest: boolean;
    constructor(checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginRegisterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginRegisterComponent, "cx-login-register", never, {}, {}, never, never>;
}

//# sourceMappingURL=login-register.component.d.ts.map