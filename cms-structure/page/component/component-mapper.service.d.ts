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

//# sourceMappingURL=component-mapper.service.d.ts.map