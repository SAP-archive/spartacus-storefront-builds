import { ElementRef, OnInit } from '@angular/core';
import { OutletStyleService } from '../outlet-style.service';
export declare class StyleRefDirective implements OnInit {
    private element;
    private cssOutletService;
    cxCssRef: string;
    constructor(element: ElementRef, cssOutletService: OutletStyleService);
    ngOnInit(): void;
}
