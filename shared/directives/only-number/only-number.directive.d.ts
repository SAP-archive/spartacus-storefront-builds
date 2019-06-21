import { ElementRef, Renderer2 } from '@angular/core';
export declare class OnlyNumberDirective {
    private hostElement;
    private renderer;
    previousValue: string;
    integerUnsigned: string;
    /**
     * Class constructor
     * @param hostElement
     */
    constructor(hostElement: ElementRef, renderer: Renderer2);
    /**
     * Event handler for host's change event
     */
    onChange(): void;
    /**
     * Event handler for host's change event
     */
    onInput(): void;
    /**
     * Event handler for host's paste event
     * @param e
     */
    onPaste(e: ClipboardEvent): void;
    /**
     * Event handler for host's keyup event
     * @param e
     */
    onKeyUp(e: KeyboardEvent): void;
    /**
     * Event handler for host's keydown event
     * @param e
     */
    onKeyDown(e: KeyboardEvent): void;
    /**
     * Test whether value is a valid number or not
     * @param value
     */
    validateValue(value: string): void;
    /**
     * Get key's name
     * @param e
     */
    getName(e: KeyboardEvent): string;
}
