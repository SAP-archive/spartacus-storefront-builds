import { SiteContext } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../icon/icon.model';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextType } from './site-context.model';
import * as ɵngcc0 from '@angular/core';
export declare class SiteContextSelectorComponent {
    private componentService;
    siteContextService: SiteContext<any>;
    iconTypes: typeof ICON_TYPE;
    /**
     * the context type can be set as an input. If the context is
     * not given, the context will be loaded from the backend.
     */
    context: SiteContextType;
    constructor(componentService: SiteContextComponentService);
    get items$(): Observable<any>;
    get activeItem$(): Observable<string>;
    set active(value: string);
    get label$(): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextSelectorComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SiteContextSelectorComponent, "cx-site-context-selector", never, {
    "context": "context";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbXBvbmVudFNlcnZpY2U7XG4gICAgc2l0ZUNvbnRleHRTZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+O1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICAvKipcbiAgICAgKiB0aGUgY29udGV4dCB0eXBlIGNhbiBiZSBzZXQgYXMgYW4gaW5wdXQuIElmIHRoZSBjb250ZXh0IGlzXG4gICAgICogbm90IGdpdmVuLCB0aGUgY29udGV4dCB3aWxsIGJlIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLlxuICAgICAqL1xuICAgIGNvbnRleHQ6IFNpdGVDb250ZXh0VHlwZTtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRTZXJ2aWNlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UpO1xuICAgIGdldCBpdGVtcyQoKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGdldCBhY3RpdmVJdGVtJCgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgc2V0IGFjdGl2ZSh2YWx1ZTogc3RyaW5nKTtcbiAgICBnZXQgbGFiZWwkKCk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==