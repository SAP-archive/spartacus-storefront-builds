import { OnInit } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewModes } from '../product-view/product-view.component';
import { ProductListComponentService } from './product-list-component.service';
export declare class ProductListComponent implements OnInit {
    private pageLayoutService;
    private productListComponentService;
    model$: Observable<ProductSearchPage>;
    viewMode$: BehaviorSubject<ViewModes>;
    ViewModes: typeof ViewModes;
    constructor(pageLayoutService: PageLayoutService, productListComponentService: ProductListComponentService);
    ngOnInit(): void;
    viewPage(pageNumber: number): void;
    sortList(sortCode: string): void;
    setViewMode(mode: ViewModes): void;
}
