import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { ProductService, SemanticPathService, VariantOption } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ProductVariantGuard implements CanActivate {
    protected productService: ProductService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(productService: ProductService, semanticPathService: SemanticPathService, router: Router);
    canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree>;
    findVariant(variants: VariantOption[]): VariantOption;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductVariantGuard, never>;
}

//# sourceMappingURL=product-variant.guard.d.ts.map