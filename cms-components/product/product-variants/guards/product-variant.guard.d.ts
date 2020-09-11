import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VariantOption, ProductService, RoutingService } from '@spartacus/core';
export declare class ProductVariantGuard implements CanActivate {
    private productService;
    private routingService;
    constructor(productService: ProductService, routingService: RoutingService);
    canActivate(): Observable<boolean | UrlTree>;
    findVariant(variants: VariantOption[]): VariantOption;
}
