import { TemplateRef } from '@angular/core';
import { OutletPosition } from './outlet.model';
export declare class OutletService {
    private templatesRefs;
    private templatesRefsBefore;
    private templatesRefsAfter;
    add(outlet: string, template: TemplateRef<any>, position?: OutletPosition): void;
    get(outlet: string, position?: OutletPosition): TemplateRef<any>;
}
