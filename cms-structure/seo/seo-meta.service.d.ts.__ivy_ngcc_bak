import { OnDestroy } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMeta, PageMetaService, PageRobotsMeta } from '@spartacus/core';
export declare class SeoMetaService implements OnDestroy {
    protected ngTitle: Title;
    protected ngMeta: Meta;
    protected pageMetaService: PageMetaService;
    constructor(ngTitle: Title, ngMeta: Meta, pageMetaService: PageMetaService);
    private subscription;
    init(): void;
    protected set meta(meta: PageMeta);
    protected set title(title: string);
    protected set description(value: string);
    protected set image(imageUrl: string);
    protected set robots(value: PageRobotsMeta[]);
    protected addTag(meta: MetaDefinition): void;
    ngOnDestroy(): void;
}
