import { Observable } from 'rxjs';
import { CmsBannerComponent, CmsConfig } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export declare class BannerComponentService {
    component: CmsComponentData<CmsBannerComponent>;
    protected config: CmsConfig;
    constructor(component: CmsComponentData<CmsBannerComponent>, config: CmsConfig);
    private convertToAbsoluteUrl;
    private formats;
    static hasMedia(data: any): boolean;
    static hasHeadline(data: any): boolean;
    static hasContent(data: any): boolean;
    getComponentData(): Observable<CmsBannerComponent>;
    hasImage(): Observable<boolean>;
    hasHeadline(): Observable<boolean>;
    hasContent(): Observable<boolean>;
    getImageUrl(): Observable<string>;
    getResponsiveImageUrl(): Observable<string>;
    getTarget(): Observable<string>;
    getAltText(): Observable<string>;
    getHeadline(): Observable<string>;
    getContent(): Observable<string>;
    getBaseUrl(): string;
    getImageAbsoluteUrl(): Observable<string>;
    getResponsiveImageAbsoluteUrl(): Observable<string>;
    getResponsiveSrcSet(): Observable<string>;
    getComponentUID(): string;
}
