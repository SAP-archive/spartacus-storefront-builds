import { AuthService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AsmComponentService {
    private authService;
    private routingService;
    constructor(authService: AuthService, routingService: RoutingService);
    logoutCustomerSupportAgentAndCustomer(): void;
    logoutCustomer(): void;
    isCustomerEmulationSessionInProgress(): Observable<boolean>;
}
