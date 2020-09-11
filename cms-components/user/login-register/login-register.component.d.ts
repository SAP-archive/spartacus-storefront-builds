import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout/services/index';
export declare class LoginRegisterComponent implements OnInit {
    protected checkoutConfigService: CheckoutConfigService;
    protected activatedRoute: ActivatedRoute;
    loginAsGuest: boolean;
    constructor(checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
}
