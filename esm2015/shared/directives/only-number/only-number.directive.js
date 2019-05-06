/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
export class OnlyNumberDirective {
    /**
     * Class constructor
     * @param {?} hostElement
     * @param {?} renderer
     */
    constructor(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.previousValue = '';
        this.integerUnsigned = '^[0-9]*$';
    }
    /**
     * Event handler for host's change event
     * @return {?}
     */
    onChange() {
        this.validateValue(this.hostElement.nativeElement.value);
    }
    /**
     * Event handler for host's change event
     * @return {?}
     */
    onInput() {
        this.validateValue(this.hostElement.nativeElement.value);
    }
    /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    onPaste(e) {
        /** @type {?} */
        const value = e.clipboardData.getData('text/plain');
        this.validateValue(value);
        e.preventDefault();
    }
    /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    onKeyUp(e) {
        /** @type {?} */
        const value = e.target['value'];
        this.validateValue(value);
    }
    /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const originalValue = e.target['value'];
        /** @type {?} */
        const key = this.getName(e);
        /** @type {?} */
        const controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        // allowed keys apart from numeric characters
        /** @type {?} */
        const allowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Escape',
            'Tab',
        ];
        // allow some non-numeric characters
        if (allowedKeys.indexOf(key) !== -1 ||
            // Allow: Ctrl+A and Command+A
            (key === 'a' && controlOrCommand) ||
            // Allow: Ctrl+C and Command+C
            (key === 'c' && controlOrCommand) ||
            // Allow: Ctrl+V and Command+V
            (key === 'v' && controlOrCommand) ||
            // Allow: Ctrl+X and Command+X
            (key === 'x' && controlOrCommand)) {
            // let it happen, don't do anything
            return;
        }
        // save value before keydown event
        this.previousValue = originalValue;
        // allow number characters only
        /** @type {?} */
        const isNumber = new RegExp(this.integerUnsigned).test(key);
        if (isNumber) {
            return;
        }
        else {
            e.preventDefault();
        }
    }
    /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    validateValue(value) {
        value = value.replace(/[^0-9]+/g, '');
        this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
    }
    /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    getName(e) {
        if (e.key) {
            return e.key;
        }
        else {
            // for old browsers
            if (e.keyCode && String.fromCharCode) {
                switch (e.keyCode) {
                    case 8:
                        return 'Backspace';
                    case 9:
                        return 'Tab';
                    case 27:
                        return 'Escape';
                    case 37:
                        return 'ArrowLeft';
                    case 39:
                        return 'ArrowRight';
                    default:
                        return String.fromCharCode(e.keyCode);
                }
            }
        }
    }
}
OnlyNumberDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOnlyNumber]',
            },] }
];
/** @nocollapse */
OnlyNumberDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
OnlyNumberDirective.propDecorators = {
    onChange: [{ type: HostListener, args: ['change',] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    OnlyNumberDirective.prototype.previousValue;
    /** @type {?} */
    OnlyNumberDirective.prototype.integerUnsigned;
    /**
     * @type {?}
     * @private
     */
    OnlyNumberDirective.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    OnlyNumberDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvb25seS1udW1iZXIvb25seS1udW1iZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSy9FLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU85QixZQUFvQixXQUF1QixFQUFVLFFBQW1CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQU54RSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFHLFVBQVUsQ0FBQztJQUs4QyxDQUFDOzs7OztJQU01RSxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQU1ELE9BQU87UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQU9ELE9BQU8sQ0FBQyxDQUFpQjs7Y0FDakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFPRCxPQUFPLENBQUMsQ0FBZ0I7O2NBQ2hCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFD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ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T25seU51bWJlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBPbmx5TnVtYmVyRGlyZWN0aXZlIHtcbiAgcHJldmlvdXNWYWx1ZSA9ICcnO1xuICBpbnRlZ2VyVW5zaWduZWQgPSAnXlswLTldKiQnO1xuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIGhvc3RFbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpXG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JylcbiAgb25JbnB1dCgpIHtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3MgcGFzdGUgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcbiAgb25QYXN0ZShlOiBDbGlwYm9hcmRFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodmFsdWUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3Mga2V5dXAgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldFsndmFsdWUnXTtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlOiBzdHJpbmcgPSBlLnRhcmdldFsndmFsdWUnXTtcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuZ2V0TmFtZShlKTtcbiAgICBjb25zdCBjb250cm9sT3JDb21tYW5kID0gZS5jdHJsS2V5ID09PSB0cnVlIHx8IGUubWV0YUtleSA9PT0gdHJ1ZTtcblxuICAgIC8vIGFsbG93ZWQga2V5cyBhcGFydCBmcm9tIG51bWVyaWMgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGFsbG93ZWRLZXlzID0gW1xuICAgICAgJ0JhY2tzcGFjZScsXG4gICAgICAnQXJyb3dMZWZ0JyxcbiAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICAgICdFc2NhcGUnLFxuICAgICAgJ1RhYicsXG4gICAgXTtcbiAgICAvLyBhbGxvdyBzb21lIG5vbi1udW1lcmljIGNoYXJhY3RlcnNcbiAgICBpZiAoXG4gICAgICBhbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgIT09IC0xIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtBIGFuZCBDb21tYW5kK0FcbiAgICAgIChrZXkgPT09ICdhJyAmJiBjb250cm9sT3JDb21tYW5kKSB8fFxuICAgICAgLy8gQWxsb3c6IEN0cmwrQyBhbmQgQ29tbWFuZCtDXG4gICAgICAoa2V5ID09PSAnYycgJiYgY29udHJvbE9yQ29tbWFuZCkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK1YgYW5kIENvbW1hbmQrVlxuICAgICAgKGtleSA9PT0gJ3YnICYmIGNvbnRyb2xPckNvbW1hbmQpIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtYIGFuZCBDb21tYW5kK1hcbiAgICAgIChrZXkgPT09ICd4JyAmJiBjb250cm9sT3JDb21tYW5kKVxuICAgICkge1xuICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzYXZlIHZhbHVlIGJlZm9yZSBrZXlkb3duIGV2ZW50XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcblxuICAgIC8vIGFsbG93IG51bWJlciBjaGFyYWN0ZXJzIG9ubHlcbiAgICBjb25zdCBpc051bWJlciA9IG5ldyBSZWdFeHAodGhpcy5pbnRlZ2VyVW5zaWduZWQpLnRlc3Qoa2V5KTtcbiAgICBpZiAoaXNOdW1iZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IHdoZXRoZXIgdmFsdWUgaXMgYSB2YWxpZCBudW1iZXIgb3Igbm90XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgdmFsaWRhdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0rL2csICcnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBrZXkncyBuYW1lXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBnZXROYW1lKGU6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcge1xuICAgIGlmIChlLmtleSkge1xuICAgICAgcmV0dXJuIGUua2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICBpZiAoZS5rZXlDb2RlICYmIFN0cmluZy5mcm9tQ2hhckNvZGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gJ0JhY2tzcGFjZSc7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuICdUYWInO1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICByZXR1cm4gJ0VzY2FwZSc7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHJldHVybiAnQXJyb3dMZWZ0JztcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuICdBcnJvd1JpZ2h0JztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19