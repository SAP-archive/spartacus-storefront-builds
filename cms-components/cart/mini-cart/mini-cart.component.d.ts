import { CartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export declare class MiniCartComponent {
    protected cartService: CartService;
    iconTypes: typeof ICON_TYPE;
    quantity$: Observable<number>;
    total$: Observable<string>;
    constructor(cartService: CartService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MiniCartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MiniCartComponent, "cx-mini-cart", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtaW5pLWNhcnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNaW5pQ2FydENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgcXVhbnRpdHkkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgdG90YWwkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcbn1cbiJdfQ==