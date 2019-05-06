import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class ItemCounterComponent implements OnInit, ControlValueAccessor, OnChanges {
    private renderer;
    input: ElementRef;
    value: number;
    step: number;
    min: number;
    max: number;
    async: boolean;
    cartIsLoading: boolean;
    isValueChangeable: boolean;
    update: EventEmitter<number>;
    focus: boolean;
    isValueOutOfRange: boolean;
    inputValue: FormControl;
    ngOnInit(): void;
    ngOnChanges(): void;
    constructor(renderer: Renderer2);
    onTouch: Function;
    onModelChange: Function;
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     */
    adjustValueInRange(incomingValue: number): number;
    /**
     * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
     */
    manualChange(newValue: number): void;
    /**
     * Verify value for decision about displaying error about range
     */
    isOutOfRange(value: number): boolean;
    onKeyDown(event: KeyboardEvent): void;
    onBlur(event: FocusEvent): void;
    onFocus(event: FocusEvent): void;
    /**
     * Verify value that it can be incremented, if yes it does that.
     */
    increment(): void;
    /**
     * Verify value that it can be decremented, if yes it does that.
     */
    decrement(): void;
    registerOnTouched(fn: Function): void;
    registerOnChange(fn: Function): void;
    writeValue(value: number): void;
    /**
     * Set up new value for input and emit event outside
     */
    updateValue(updatedQuantity: number): void;
}
