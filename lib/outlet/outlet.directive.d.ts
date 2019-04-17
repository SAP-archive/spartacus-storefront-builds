import { TemplateRef, ViewContainerRef, OnInit, Renderer2 } from '@angular/core';
import { OutletStyleService } from './outlet-style.service';
import { OutletService } from './outlet.service';
export declare class OutletDirective implements OnInit {
    private vcr;
    private templateRef;
    private outletService;
    private outletStyleService;
    private renderer;
    cxOutlet: string;
    private _context;
    cxOutletContext: string;
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService, outletStyleService: OutletStyleService, renderer: Renderer2);
    ngOnInit(): void;
    private renderTemplate;
    private renderStyleLink;
    private readonly context;
}
