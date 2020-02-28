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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIENvbnRleHRTZXJ2aWNlTWFwLCBTaXRlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQ+O1xuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2VNYXA7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQ+LCBjb250ZXh0U2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXAsIGluamVjdG9yOiBJbmplY3Rvcik7XG4gICAgZ2V0SXRlbXMoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBnZXRBY3RpdmVJdGVtKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgZ2V0TGFiZWwoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBzZXRBY3RpdmUodmFsdWU6IHN0cmluZywgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8U2l0ZUNvbnRleHQ8YW55Pj47XG4gICAgcHJvdGVjdGVkIGdldENvbnRleHQoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWQgZ2V0SW5qZWN0ZWRTZXJ2aWNlKGNvbnRleHQ6IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT47XG4gICAgcHJvdGVjdGVkIGdldE9wdGlvbkxhYmVsKGl0ZW06IGFueSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZztcbn1cbiJdfQ==