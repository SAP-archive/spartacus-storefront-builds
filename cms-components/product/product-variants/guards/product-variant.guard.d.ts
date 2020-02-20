import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VariantOption, ProductService, RoutingService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ProductVariantGuard implements CanActivate {
    private productService;
    private routingService;
    constructor(productService: ProductService, routingService: RoutingService);
    canActivate(): Observable<boolean | UrlTree>;
    findVariant(variants: VariantOption[]): VariantOption;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductVariantGuard>;
}

//# sourceMappingURL=product-variant.guard.d.ts.map