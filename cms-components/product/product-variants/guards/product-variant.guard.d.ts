import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VariantOption, ProductService, RoutingService, CmsService } from '@spartacus/core';
export declare class ProductVariantGuard implements CanActivate {
    private productService;
    private routingService;
    private cmsService;
    constructor(productService: ProductService, routingService: RoutingService, cmsService: CmsService);
    canActivate(): Observable<boolean | UrlTree>;
    findVariant(variants: VariantOption[]): VariantOption;
}
