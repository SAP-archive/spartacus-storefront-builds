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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentMapperService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbXBvbmVudC1tYXBwZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnO1xuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55O1xuICAgIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55O1xuICAgIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGxvYWRlZFdlYkNvbXBvbmVudHM7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNvbmZpZzogQ21zQ29uZmlnLCBkb2N1bWVudDogYW55LCBwbGF0Zm9ybTogYW55KTtcbiAgICAvKipcbiAgICAgKiBAZGVzY1xuICAgICAqIHJldHVybnMgYSB3ZWIgY29tcG9uZW50IGZvciB0aGUgQ01TIHR5cGVjb2RlLlxuICAgICAqXG4gICAgICogVGhlIG1hcHBpbmcgb2YgQ01TIGNvbXBvbmVudHMgdG8gd2ViIGNvbXBvbmV0bnMgcmVxdWlyZXMgYSBtYXBwaW5nLlxuICAgICAqIFRoaXMgaXMgY29uZmlndXJhYmxlIHdoZW4gdGhlIG1vZHVsZSBpcyBsb2FkZWQuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICB7XG4gICAgICogICAgICAnQ01TTGlua0NvbXBvbmVudCc6ICdMaW5rQ29tcG9uZW50JyxcbiAgICAgKiAgICAgICdTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50JzogJ1NpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQnLFxuICAgICAqICAgICAgW2V0Yy5dXG4gICAgICogIH1cbiAgICAgKlxuICAgICAqIFRoZSB0eXBlIGNvZGVzIGFyZSBkeW5hbWljIHNpbmNlIHRoZXkgZGVwZW5kIG9uIHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBDdXN0b21lciB3aWxsIGFkZCwgZXh0ZW5kIG9yIGluZ29yZSBzdGFuZGFyZCBjb21wb25lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGVDb2RlIHRoZSBjb21wb25lbnQgdHlwZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRDb21wb25lbnQodHlwZUNvZGU6IHN0cmluZyk6IGFueTtcbiAgICBnZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKHR5cGVDb2RlOiBzdHJpbmcpOiBhbnk7XG4gICAgaXNXZWJDb21wb25lbnQodHlwZUNvZGU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgaW5pdFdlYkNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiBQcm9taXNlPHN0cmluZz47XG59XG4iXX0=