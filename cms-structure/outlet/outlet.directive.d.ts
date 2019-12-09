import { ComponentFactory, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { OutletService } from './outlet.service';
export declare class OutletDirective implements OnInit {
    private vcr;
    private templateRef;
    private outletService;
    cxOutlet: string;
    private _context;
    cxOutletContext: any;
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService<TemplateRef<any> | ComponentFactory<any>>);
    ngOnInit(): void;
    private renderOutlet;
    private create;
}
