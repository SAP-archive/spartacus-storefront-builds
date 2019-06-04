/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
var OnlyNumberDirective = /** @class */ (function () {
    /**
     * Class constructor
     * @param hostElement
     */
    function OnlyNumberDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.previousValue = '';
        this.integerUnsigned = '^[0-9]*$';
    }
    /**
     * Event handler for host's change event
     */
    /**
     * Event handler for host's change event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onChange = /**
     * Event handler for host's change event
     * @return {?}
     */
    function () {
        this.validateValue(this.hostElement.nativeElement.value);
    };
    /**
     * Event handler for host's change event
     */
    /**
     * Event handler for host's change event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onInput = /**
     * Event handler for host's change event
     * @return {?}
     */
    function () {
        this.validateValue(this.hostElement.nativeElement.value);
    };
    /**
     * Event handler for host's paste event
     * @param e
     */
    /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.onPaste = /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var value = e.clipboardData.getData('text/plain');
        this.validateValue(value);
        e.preventDefault();
    };
    /**
     * Event handler for host's keyup event
     * @param e
     */
    /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyUp = /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var value = e.target['value'];
        this.validateValue(value);
    };
    /**
     * Event handler for host's keydown event
     * @param e
     */
    /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyDown = /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var originalValue = e.target['value'];
        /** @type {?} */
        var key = this.getName(e);
        /** @type {?} */
        var controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        // allowed keys apart from numeric characters
        /** @type {?} */
        var allowedKeys = [
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
        var isNumber = new RegExp(this.integerUnsigned).test(key);
        if (isNumber) {
            return;
        }
        else {
            e.preventDefault();
        }
    };
    /**
     * Test whether value is a valid number or not
     * @param value
     */
    /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    OnlyNumberDirective.prototype.validateValue = /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = value.replace(/[^0-9]+/g, '');
        this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
    };
    /**
     * Get key's name
     * @param e
     */
    /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.getName = /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    OnlyNumberDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOnlyNumber]',
                },] }
    ];
    /** @nocollapse */
    OnlyNumberDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    OnlyNumberDirective.propDecorators = {
        onChange: [{ type: HostListener, args: ['change',] }],
        onInput: [{ type: HostListener, args: ['input',] }],
        onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return OnlyNumberDirective;
}());
export { OnlyNumberDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvb25seS1udW1iZXIvb25seS1udW1iZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBTUU7OztPQUdHO0lBQ0gsNkJBQW9CLFdBQXVCLEVBQVUsUUFBbUI7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTnhFLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsVUFBVSxDQUFDO0lBSzhDLENBQUM7SUFFNUU7O09BRUc7Ozs7O0lBRUgsc0NBQVE7Ozs7SUFEUjtRQUVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUVILHFDQUFPOzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUVILHFDQUFPOzs7OztJQURQLFVBQ1EsQ0FBaUI7O1lBQ2pCLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBRUgscUNBQU87Ozs7O0lBRFAsVUFDUSxDQUFnQjs7WUFDaEIsS0FBSyxH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QUFRLENBQUM7NEJBVWhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBOEVyQywwQkFBQztDQUFBLEFBbklELElBbUlDO1NBaElZLG1CQUFtQjs7O0lBQzlCLDRDQUFtQjs7SUFDbkIsOENBQTZCOzs7OztJQUtqQiwwQ0FBK0I7Ozs7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPbmx5TnVtYmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE9ubHlOdW1iZXJEaXJlY3RpdmUge1xuICBwcmV2aW91c1ZhbHVlID0gJyc7XG4gIGludGVnZXJVbnNpZ25lZCA9ICdeWzAtOV0qJCc7XG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gaG9zdEVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGNoYW5nZSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJylcbiAgb25DaGFuZ2UoKSB7XG4gICAgdGhpcy52YWxpZGF0ZVZhbHVlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGNoYW5nZSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBvbklucHV0KCkge1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBwYXN0ZSBldmVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKVxuICBvblBhc3RlKGU6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBrZXl1cCBldmVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleVVwKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWU6IHN0cmluZyA9IGUudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5nZXROYW1lKGUpO1xuICAgIGNvbnN0IGNvbnRyb2xPckNvbW1hbmQgPSBlLmN0cmxLZXkgPT09IHRydWUgfHwgZS5tZXRhS2V5ID09PSB0cnVlO1xuXG4gICAgLy8gYWxsb3dlZCBrZXlzIGFwYXJ0IGZyb20gbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgY29uc3QgYWxsb3dlZEtleXMgPSBbXG4gICAgICAnQmFja3NwYWNlJyxcbiAgICAgICdBcnJvd0xlZnQnLFxuICAgICAgJ0Fycm93UmlnaHQnLFxuICAgICAgJ0VzY2FwZScsXG4gICAgICAnVGFiJyxcbiAgICBdO1xuICAgIC8vIGFsbG93IHNvbWUgbm9uLW51bWVyaWMgY2hhcmFjdGVyc1xuICAgIGlmIChcbiAgICAgIGFsbG93ZWRLZXlzLmluY2x1ZGVzKGtleSkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK0EgYW5kIENvbW1hbmQrQVxuICAgICAgKGtleSA9PT0gJ2EnICYmIGNvbnRyb2xPckNvbW1hbmQpIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtDIGFuZCBDb21tYW5kK0NcbiAgICAgIChrZXkgPT09ICdjJyAmJiBjb250cm9sT3JDb21tYW5kKSB8fFxuICAgICAgLy8gQWxsb3c6IEN0cmwrViBhbmQgQ29tbWFuZCtWXG4gICAgICAoa2V5ID09PSAndicgJiYgY29udHJvbE9yQ29tbWFuZCkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK1ggYW5kIENvbW1hbmQrWFxuICAgICAgKGtleSA9PT0gJ3gnICYmIGNvbnRyb2xPckNvbW1hbmQpXG4gICAgKSB7XG4gICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNhdmUgdmFsdWUgYmVmb3JlIGtleWRvd24gZXZlbnRcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xuXG4gICAgLy8gYWxsb3cgbnVtYmVyIGNoYXJhY3RlcnMgb25seVxuICAgIGNvbnN0IGlzTnVtYmVyID0gbmV3IFJlZ0V4cCh0aGlzLmludGVnZXJVbnNpZ25lZCkudGVzdChrZXkpO1xuICAgIGlmIChpc051bWJlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlc3Qgd2hldGhlciB2YWx1ZSBpcyBhIHZhbGlkIG51bWJlciBvciBub3RcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICB2YWxpZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05XSsvZywgJycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGtleSdzIG5hbWVcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGdldE5hbWUoZTogS2V5Ym9hcmRFdmVudCk6IHN0cmluZyB7XG4gICAgaWYgKGUua2V5KSB7XG4gICAgICByZXR1cm4gZS5rZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgIGlmIChlLmtleUNvZGUgJiYgU3RyaW5nLmZyb21DaGFyQ29kZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHJldHVybiAnQmFja3NwYWNlJztcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICByZXR1cm4gJ1RhYic7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHJldHVybiAnRXNjYXBlJztcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgcmV0dXJuICdBcnJvd0xlZnQnO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICByZXR1cm4gJ0Fycm93UmlnaHQnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=