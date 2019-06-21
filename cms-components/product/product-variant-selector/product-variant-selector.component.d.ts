import { OccConfig, Product, RoutingService, VariantOption } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export declare class ProductVariantSelectorComponent {
    private routingService;
    private currentProductService;
    private config;
    constructor(routingService: RoutingService, currentProductService: CurrentProductService, config: OccConfig);
    product$: Observable<Product>;
    sizeGuideLabel: string;
    baseUrl: string;
    getVariantName(variant: any): "Style" | "Size";
    getSelectedVariantValue(selected: VariantOption): string;
    routeToVariant(url: string): void;
}
