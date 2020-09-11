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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextSelectorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SiteContextSelectorComponent, "cx-site-context-selector", never, { "context": "context"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRUeXBlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRTZXJ2aWNlO1xuICAgIHNpdGVDb250ZXh0U2VydmljZTogU2l0ZUNvbnRleHQ8YW55PjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgLyoqXG4gICAgICogdGhlIGNvbnRleHQgdHlwZSBjYW4gYmUgc2V0IGFzIGFuIGlucHV0LiBJZiB0aGUgY29udGV4dCBpc1xuICAgICAqIG5vdCBnaXZlbiwgdGhlIGNvbnRleHQgd2lsbCBiZSBsb2FkZWQgZnJvbSB0aGUgYmFja2VuZC5cbiAgICAgKi9cbiAgICBjb250ZXh0OiBTaXRlQ29udGV4dFR5cGU7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50U2VydmljZTogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlKTtcbiAgICBnZXQgaXRlbXMkKCk6IE9ic2VydmFibGU8YW55PjtcbiAgICBnZXQgYWN0aXZlSXRlbSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHNldCBhY3RpdmUodmFsdWU6IHN0cmluZyk7XG4gICAgZ2V0IGxhYmVsJCgpOiBPYnNlcnZhYmxlPGFueT47XG59XG4iXX0=