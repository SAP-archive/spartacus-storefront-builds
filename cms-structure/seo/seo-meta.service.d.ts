import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { PageMetaService, PageMeta, PageRobotsMeta } from '@spartacus/core';
export declare class SeoMetaService {
    protected ngTitle: Title;
    protected ngMeta: Meta;
    protected pageMetaService: PageMetaService;
    constructor(ngTitle: Title, ngMeta: Meta, pageMetaService: PageMetaService);
    init(): void;
    protected meta: PageMeta;
    protected title: string;
    protected description: string;
    protected image: string;
    protected robots: PageRobotsMeta[];
    protected addTag(meta: MetaDefinition): void;
}
