import { AfterViewInit, ElementRef } from '@angular/core';
export declare class AutoFocusDirective implements AfterViewInit {
    private hostElement;
    constructor(hostElement: ElementRef);
    ngAfterViewInit(): void;
}
