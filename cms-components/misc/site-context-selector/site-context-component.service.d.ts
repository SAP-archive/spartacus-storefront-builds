import { Injector } from '@angular/core';
import { CmsSiteContextSelectorComponent, ContextServiceMap, SiteContext } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SiteContextType } from './site-context.model';
import * as ɵngcc0 from '@angular/core';
export declare class SiteContextComponentService {
    protected componentData: CmsComponentData<CmsSiteContextSelectorComponent>;
    private contextServiceMap;
    protected injector: Injector;
    constructor(componentData: CmsComponentData<CmsSiteContextSelectorComponent>, contextServiceMap: ContextServiceMap, injector: Injector);
    getItems(context?: SiteContextType): Observable<any>;
    getActiveItem(context?: SiteContextType): Observable<string>;
    getLabel(context?: SiteContextType): Observable<any>;
    setActive(value: string, context?: SiteContextType): void;
    protected getService(context?: SiteContextType): Observable<SiteContext<any>>;
    protected getContext(context?: SiteContextType): Observable<string>;
    protected getInjectedService(context: string): SiteContext<any>;
    protected getOptionLabel(item: any, context?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextComponentService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SiteContextComponentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgQ29udGV4dFNlcnZpY2VNYXAsIFNpdGVDb250ZXh0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VHlwZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD47XG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZU1hcDtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD4sIGNvbnRleHRTZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcCwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBnZXRJdGVtcyhjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGdldEFjdGl2ZUl0ZW0oY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBnZXRMYWJlbChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHNldEFjdGl2ZSh2YWx1ZTogc3RyaW5nLCBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZShjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dDxhbnk+PjtcbiAgICBwcm90ZWN0ZWQgZ2V0Q29udGV4dChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByb3RlY3RlZCBnZXRJbmplY3RlZFNlcnZpY2UoY29udGV4dDogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PjtcbiAgICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19