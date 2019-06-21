import { OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '../../current-product.service';
import { Observable } from 'rxjs';
export declare class ProductAttributesComponent implements OnInit {
    protected currentProductService: CurrentProductService;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    ngOnInit(): void;
}
