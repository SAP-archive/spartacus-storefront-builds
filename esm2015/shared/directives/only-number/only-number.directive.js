/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (allowedKeys.includes(key) ||
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
        if (value) {
            value = value.replace(/[^0-9]+/g, '');
            this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
        }
    }
    /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    getName(e) {
        return e.key;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvb25seS1udW1iZXIvb25seS1udW1iZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSy9FLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU85QixZQUFvQixXQUF1QixFQUFVLFFBQW1CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQU54RSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFHLFVBQVUsQ0FBQztJQUs4QyxDQUFDOzs7OztJQU01RSxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQU1ELE9BQU87UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQU9ELE9BQU8sQ0FBQyxDQUFpQjs7Y0FDakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFPRCxPQUFPLENBQUMsQ0FBZ0I7O2NBQ2hCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQU9ELFNBQVMsQ0FBQyxDQUFnQjs7Y0FDbEIsYUFBYSxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOztjQUN6QyxHQUFHLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O2NBQzdCLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTs7O2NBRzNELFdBQVcsR0FBRztZQUNsQixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixRQUFRO1lBQ1IsS0FBSztTQUNOO1FBQ0Qsb0NBQW9DO1FBQ3BDLElBQ0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDekIsOEJBQThCO1lBQzlCLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztZQUNqQyw4QkFBOEI7WUFDOUIsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLGdCQUFnQixDQUFDO1lBQ2pDLDhCQUE4QjtZQUM5QixDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUM7WUFDakMsOEJBQThCO1lBQzlCLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUNqQztZQUNBLG1DQUFtQztZQUNuQyxPQUFPO1NBQ1I7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7OztjQUc3QixRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0QsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPO1NBQ1I7YUFBTTtZQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7OztJQU1ELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7OztJQU1ELE9BQU8sQ0FBQyxDQUFnQjtRQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDOzs7WUFoSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFKbUIsVUFBVTtZQUFnQixTQUFTOzs7dUJBaUJwRCxZQUFZLFNBQUMsUUFBUTtzQkFRckIsWUFBWSxTQUFDLE9BQU87c0JBU3BCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBV2hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBVWhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFqRG5DLDRDQUFtQjs7SUFDbkIsOENBQTZCOzs7OztJQUtqQiwwQ0FBK0I7Ozs7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPbmx5TnVtYmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE9ubHlOdW1iZXJEaXJlY3RpdmUge1xuICBwcmV2aW91c1ZhbHVlID0gJyc7XG4gIGludGVnZXJVbnNpZ25lZCA9ICdeWzAtOV0qJCc7XG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gaG9zdEVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGNoYW5nZSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJylcbiAgb25DaGFuZ2UoKSB7XG4gICAgdGhpcy52YWxpZGF0ZVZhbHVlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGNoYW5nZSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBvbklucHV0KCkge1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBwYXN0ZSBldmVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKVxuICBvblBhc3RlKGU6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBrZXl1cCBldmVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleVVwKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWU6IHN0cmluZyA9IGUudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5nZXROYW1lKGUpO1xuICAgIGNvbnN0IGNvbnRyb2xPckNvbW1hbmQgPSBlLmN0cmxLZXkgPT09IHRydWUgfHwgZS5tZXRhS2V5ID09PSB0cnVlO1xuXG4gICAgLy8gYWxsb3dlZCBrZXlzIGFwYXJ0IGZyb20gbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgY29uc3QgYWxsb3dlZEtleXMgPSBbXG4gICAgICAnQmFja3NwYWNlJyxcbiAgICAgICdBcnJvd0xlZnQnLFxuICAgICAgJ0Fycm93UmlnaHQnLFxuICAgICAgJ0VzY2FwZScsXG4gICAgICAnVGFiJyxcbiAgICBdO1xuICAgIC8vIGFsbG93IHNvbWUgbm9uLW51bWVyaWMgY2hhcmFjdGVyc1xuICAgIGlmIChcbiAgICAgIGFsbG93ZWRLZXlzLmluY2x1ZGVzKGtleSkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK0EgYW5kIENvbW1hbmQrQVxuICAgICAgKGtleSA9PT0gJ2EnICYmIGNvbnRyb2xPckNvbW1hbmQpIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtDIGFuZCBDb21tYW5kK0NcbiAgICAgIChrZXkgPT09ICdjJyAmJiBjb250cm9sT3JDb21tYW5kKSB8fFxuICAgICAgLy8gQWxsb3c6IEN0cmwrViBhbmQgQ29tbWFuZCtWXG4gICAgICAoa2V5ID09PSAndicgJiYgY29udHJvbE9yQ29tbWFuZCkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK1ggYW5kIENvbW1hbmQrWFxuICAgICAgKGtleSA9PT0gJ3gnICYmIGNvbnRyb2xPckNvbW1hbmQpXG4gICAgKSB7XG4gICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNhdmUgdmFsdWUgYmVmb3JlIGtleWRvd24gZXZlbnRcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xuXG4gICAgLy8gYWxsb3cgbnVtYmVyIGNoYXJhY3RlcnMgb25seVxuICAgIGNvbnN0IGlzTnVtYmVyID0gbmV3IFJlZ0V4cCh0aGlzLmludGVnZXJVbnNpZ25lZCkudGVzdChrZXkpO1xuICAgIGlmIChpc051bWJlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlc3Qgd2hldGhlciB2YWx1ZSBpcyBhIHZhbGlkIG51bWJlciBvciBub3RcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICB2YWxpZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW14wLTldKy9nLCAnJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQga2V5J3MgbmFtZVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgZ2V0TmFtZShlOiBLZXlib2FyZEV2ZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZS5rZXk7XG4gIH1cbn1cbiJdfQ==