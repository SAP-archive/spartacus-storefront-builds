import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
export declare class ItemCounterComponent implements OnInit, ControlValueAccessor, OnChanges, OnDestroy {
    private renderer;
    input: ElementRef;
    incrementBtn: ElementRef;
    decrementBtn: ElementRef;
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
    subscription: Subscription;
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
     * Update model value and refresh input
     */
    manualChange(newValue: number): void;
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
    /**
     * Determines which HTML element should have focus at a given time
     */
    setFocus(isIncremented: boolean): void;
    isMaxOrMinValueOrBeyond(): boolean;
    ngOnDestroy(): void;
}
