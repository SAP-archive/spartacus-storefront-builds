import { ActiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export declare class MiniCartComponent {
    protected activeCartService: ActiveCartService;
    iconTypes: typeof ICON_TYPE;
    quantity$: Observable<number>;
    total$: Observable<string>;
    constructor(activeCartService: ActiveCartService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MiniCartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MiniCartComponent, "cx-mini-cart", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtaW5pLWNhcnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1pbmlDYXJ0Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBxdWFudGl0eSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICB0b3RhbCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xufVxuIl19