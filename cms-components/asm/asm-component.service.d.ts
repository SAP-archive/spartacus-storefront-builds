import { AuthService, RoutingService } from '@spartacus/core';
export declare class AsmComponentService {
    private authService;
    private routingService;
    constructor(authService: AuthService, routingService: RoutingService);
    logoutCustomerSupportAgentAndCustomer(): void;
    logoutCustomer(): void;
}
