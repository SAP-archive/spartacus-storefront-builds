import { ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { CmsConfig } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentMapperService {
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected config: CmsConfig;
    protected document: any;
    protected platform: any;
    missingComponents: string[];
    private loadedWebComponents;
    constructor(componentFactoryResolver: ComponentFactoryResolver, config: CmsConfig, document: any, platform: any);
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @param typeCode the component type
     */
    protected getComponent(typeCode: string): any;
    getComponentFactoryByCode(typeCode: string): any;
    isWebComponent(typeCode: string): boolean;
    initWebComponent(componentType: string, renderer: Renderer2): Promise<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentMapperService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbXBvbmVudC1tYXBwZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29tcG9uZW50TWFwcGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueTtcbiAgICBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueTtcbiAgICBtaXNzaW5nQ29tcG9uZW50czogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBsb2FkZWRXZWJDb21wb25lbnRzO1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBjb25maWc6IENtc0NvbmZpZywgZG9jdW1lbnQ6IGFueSwgcGxhdGZvcm06IGFueSk7XG4gICAgLyoqXG4gICAgICogQGRlc2NcbiAgICAgKiByZXR1cm5zIGEgd2ViIGNvbXBvbmVudCBmb3IgdGhlIENNUyB0eXBlY29kZS5cbiAgICAgKlxuICAgICAqIFRoZSBtYXBwaW5nIG9mIENNUyBjb21wb25lbnRzIHRvIHdlYiBjb21wb25ldG5zIHJlcXVpcmVzIGEgbWFwcGluZy5cbiAgICAgKiBUaGlzIGlzIGNvbmZpZ3VyYWJsZSB3aGVuIHRoZSBtb2R1bGUgaXMgbG9hZGVkLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAge1xuICAgICAqICAgICAgJ0NNU0xpbmtDb21wb25lbnQnOiAnTGlua0NvbXBvbmVudCcsXG4gICAgICogICAgICAnU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCc6ICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JyxcbiAgICAgKiAgICAgIFtldGMuXVxuICAgICAqICB9XG4gICAgICpcbiAgICAgKiBUaGUgdHlwZSBjb2RlcyBhcmUgZHluYW1pYyBzaW5jZSB0aGV5IGRlcGVuZCBvbiB0aGUgaW1wbGVtZW50YXRpb24uXG4gICAgICogQ3VzdG9tZXIgd2lsbCBhZGQsIGV4dGVuZCBvciBpbmdvcmUgc3RhbmRhcmQgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlQ29kZSB0aGUgY29tcG9uZW50IHR5cGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBhbnk7XG4gICAgZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZSh0eXBlQ29kZTogc3RyaW5nKTogYW55O1xuICAgIGlzV2ViQ29tcG9uZW50KHR5cGVDb2RlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGluaXRXZWJDb21wb25lbnQoY29tcG9uZW50VHlwZTogc3RyaW5nLCByZW5kZXJlcjogUmVuZGVyZXIyKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuIl19