import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { ProductService, SemanticPathService, VariantOption } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ProductVariantGuard implements CanActivate {
    protected productService: ProductService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(productService: ProductService, semanticPathService: SemanticPathService, router: Router);
    canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree>;
    findVariant(variants: VariantOption[]): VariantOption;
}
