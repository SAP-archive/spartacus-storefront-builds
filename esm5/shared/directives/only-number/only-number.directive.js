/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (value) {
            value = value.replace(/[^0-9]+/g, '');
            this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
        }
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
        return e.key;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvb25seS1udW1iZXIvb25seS1udW1iZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBTUU7OztPQUdHO0lBQ0gsNkJBQW9CLFdBQXVCLEVBQVUsUUFBbUI7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTnhFLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsVUFBVSxDQUFDO0lBSzhDLENBQUM7SUFFNUU7O09BRUc7Ozs7O0lBRUgsc0NBQVE7Ozs7SUFEUjtRQUVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUVILHFDQUFPOzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUVILHFDQUFPOzs7OztJQURQLFVBQ1EsQ0FBaUI7O1lBQ2pCLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBRUgscUNBQU87Ozs7O0lBRFAsVUFDUSxDQUFnQjs7WUFDaEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBRUgsdUNBQVM7Ozs7O0lBRFQsVUFDVSxDQUFnQjs7WUFDbEIsYUFBYSxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOztZQUN6QyxHQUFHLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBQzdCLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTs7O1lBRzNELFdBQVcsR0FBRztZQUNsQixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixRQUFRO1lBQ1IsS0FBSztTQUNOO1FBQ0Qsb0NBQW9DO1FBQ3BDLElBQ0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDekIsOEJBQThCO1lBQzlCLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztZQUNqQyw4QkFBOEI7WUFDOUIsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLGdCQUFnQixDQUFDO1lBQ2pDLDhCQUE4QjtZQUM5QixDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUM7WUFDakMsOEJBQThCO1lBQzlCLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUNqQztZQUNBLG1DQUFtQztZQUNuQyxPQUFPO1NBQ1I7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7OztZQUc3QixRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0QsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPO1NBQ1I7YUFBTTtZQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDJDQUFhOzs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBTzs7Ozs7SUFBUCxVQUFRLENBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7O2dCQWhIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBSm1CLFVBQVU7Z0JBQWdCLFNBQVM7OzsyQkFpQnBELFlBQVksU0FBQyxRQUFROzBCQVFyQixZQUFZLFNBQUMsT0FBTzswQkFTcEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFXaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFVaEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE0RHJDLDBCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0E5R1ksbUJBQW1COzs7SUFDOUIsNENBQW1COztJQUNuQiw4Q0FBNkI7Ozs7O0lBS2pCLDBDQUErQjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE9ubHlOdW1iZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgT25seU51bWJlckRpcmVjdGl2ZSB7XG4gIHByZXZpb3VzVmFsdWUgPSAnJztcbiAgaW50ZWdlclVuc2lnbmVkID0gJ15bMC05XSokJztcbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBob3N0RWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3MgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnKVxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3MgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIG9uSW5wdXQoKSB7XG4gICAgdGhpcy52YWxpZGF0ZVZhbHVlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIHBhc3RlIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gIG9uUGFzdGUoZTogQ2xpcGJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgdGhpcy52YWxpZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgaG9zdCdzIGtleXVwIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIG9uS2V5VXAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXRbJ3ZhbHVlJ107XG4gICAgdGhpcy52YWxpZGF0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3Mga2V5ZG93biBldmVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZTogc3RyaW5nID0gZS50YXJnZXRbJ3ZhbHVlJ107XG4gICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLmdldE5hbWUoZSk7XG4gICAgY29uc3QgY29udHJvbE9yQ29tbWFuZCA9IGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWU7XG5cbiAgICAvLyBhbGxvd2VkIGtleXMgYXBhcnQgZnJvbSBudW1lcmljIGNoYXJhY3RlcnNcbiAgICBjb25zdCBhbGxvd2VkS2V5cyA9IFtcbiAgICAgICdCYWNrc3BhY2UnLFxuICAgICAgJ0Fycm93TGVmdCcsXG4gICAgICAnQXJyb3dSaWdodCcsXG4gICAgICAnRXNjYXBlJyxcbiAgICAgICdUYWInLFxuICAgIF07XG4gICAgLy8gYWxsb3cgc29tZSBub24tbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgaWYgKFxuICAgICAgYWxsb3dlZEtleXMuaW5jbHVkZXMoa2V5KSB8fFxuICAgICAgLy8gQWxsb3c6IEN0cmwrQSBhbmQgQ29tbWFuZCtBXG4gICAgICAoa2V5ID09PSAnYScgJiYgY29udHJvbE9yQ29tbWFuZCkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK0MgYW5kIENvbW1hbmQrQ1xuICAgICAgKGtleSA9PT0gJ2MnICYmIGNvbnRyb2xPckNvbW1hbmQpIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtWIGFuZCBDb21tYW5kK1ZcbiAgICAgIChrZXkgPT09ICd2JyAmJiBjb250cm9sT3JDb21tYW5kKSB8fFxuICAgICAgLy8gQWxsb3c6IEN0cmwrWCBhbmQgQ29tbWFuZCtYXG4gICAgICAoa2V5ID09PSAneCcgJiYgY29udHJvbE9yQ29tbWFuZClcbiAgICApIHtcbiAgICAgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2F2ZSB2YWx1ZSBiZWZvcmUga2V5ZG93biBldmVudFxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XG5cbiAgICAvLyBhbGxvdyBudW1iZXIgY2hhcmFjdGVycyBvbmx5XG4gICAgY29uc3QgaXNOdW1iZXIgPSBuZXcgUmVnRXhwKHRoaXMuaW50ZWdlclVuc2lnbmVkKS50ZXN0KGtleSk7XG4gICAgaWYgKGlzTnVtYmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB3aGV0aGVyIHZhbHVlIGlzIGEgdmFsaWQgbnVtYmVyIG9yIG5vdFxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHZhbGlkYXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0rL2csICcnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBrZXkncyBuYW1lXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBnZXROYW1lKGU6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlLmtleTtcbiAgfVxufVxuIl19