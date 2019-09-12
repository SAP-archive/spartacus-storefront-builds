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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2RpcmVjdGl2ZXMvb25seS1udW1iZXIvb25seS1udW1iZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBTUU7OztPQUdHO0lBQ0gsNkJBQW9CLFdBQXVCLEVBQVUsUUFBbUI7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTnhFLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsVUFBVSxDQUFDO0lBSzhDLENBQUM7SUFFNUU7O09BRUc7Ozs7O0lBRUgsc0NBQVE7Ozs7SUFEUjtRQUVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUVILHFDQUFPOzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUVILHFDQUFPOzs7OztJQURQLFVBQ1EsQ0FBaUI7O1lBQ2pCLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBRUgscUNBQU87Ozs7O0lBRFAsVUFDUSxDQUFnQjs7WUFDaEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBRUgsdUNBQVM7Ozs7O0lBRFQsVUFDVSxDQUFnQjs7WUFDbEIsYUFBYSxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOztZQUN6QyxHQUFHLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBQzdCLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTs7O1lBRzNELFdBQVcsR0FBRztZQUNsQixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixRQUFRO1lBQ1IsS0FBSztTQUNOO1FBQ0Qsb0NBQW9DO1FBQ3BDLElBQ0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDekIsOEJBQThCO1lBQzlCLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztZQUNqQyw4QkFBOEI7WUFDOUIsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLGdCQUFnQixDQUFDO1lBQ2pDLDhCQUE4QjtZQUM5QixDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUM7WUFDakMsOEJBQThCO1lBQzlCLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUNqQztZQUNBLG1DQUFtQztZQUNuQyxPQUFPO1NBQ1I7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7OztZQUc3QixRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0QsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPO1NBQ1I7YUFBTTtZQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDJDQUFhOzs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHFDQUFPOzs7OztJQUFQLFVBQVEsQ0FBZ0I7UUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBOUdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFKbUIsVUFBVTtnQkFBZ0IsU0FBUzs7OzJCQWlCcEQsWUFBWSxTQUFDLFFBQVE7MEJBUXJCLFlBQVksU0FBQyxPQUFPOzBCQVNwQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVdoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVVoQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTBEckMsMEJBQUM7Q0FBQSxBQS9HRCxJQStHQztTQTVHWSxtQkFBbUI7OztJQUM5Qiw0Q0FBbUI7O0lBQ25CLDhDQUE2Qjs7Ozs7SUFLakIsMENBQStCOzs7OztJQUFFLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T25seU51bWJlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBPbmx5TnVtYmVyRGlyZWN0aXZlIHtcbiAgcHJldmlvdXNWYWx1ZSA9ICcnO1xuICBpbnRlZ2VyVW5zaWduZWQgPSAnXlswLTldKiQnO1xuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIGhvc3RFbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpXG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JylcbiAgb25JbnB1dCgpIHtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3MgcGFzdGUgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcbiAgb25QYXN0ZShlOiBDbGlwYm9hcmRFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodmFsdWUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBob3N0J3Mga2V5dXAgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldFsndmFsdWUnXTtcbiAgICB0aGlzLnZhbGlkYXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhvc3QncyBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlOiBzdHJpbmcgPSBlLnRhcmdldFsndmFsdWUnXTtcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuZ2V0TmFtZShlKTtcbiAgICBjb25zdCBjb250cm9sT3JDb21tYW5kID0gZS5jdHJsS2V5ID09PSB0cnVlIHx8IGUubWV0YUtleSA9PT0gdHJ1ZTtcblxuICAgIC8vIGFsbG93ZWQga2V5cyBhcGFydCBmcm9tIG51bWVyaWMgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGFsbG93ZWRLZXlzID0gW1xuICAgICAgJ0JhY2tzcGFjZScsXG4gICAgICAnQXJyb3dMZWZ0JyxcbiAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICAgICdFc2NhcGUnLFxuICAgICAgJ1RhYicsXG4gICAgXTtcbiAgICAvLyBhbGxvdyBzb21lIG5vbi1udW1lcmljIGNoYXJhY3RlcnNcbiAgICBpZiAoXG4gICAgICBhbGxvd2VkS2V5cy5pbmNsdWRlcyhrZXkpIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtBIGFuZCBDb21tYW5kK0FcbiAgICAgIChrZXkgPT09ICdhJyAmJiBjb250cm9sT3JDb21tYW5kKSB8fFxuICAgICAgLy8gQWxsb3c6IEN0cmwrQyBhbmQgQ29tbWFuZCtDXG4gICAgICAoa2V5ID09PSAnYycgJiYgY29udHJvbE9yQ29tbWFuZCkgfHxcbiAgICAgIC8vIEFsbG93OiBDdHJsK1YgYW5kIENvbW1hbmQrVlxuICAgICAgKGtleSA9PT0gJ3YnICYmIGNvbnRyb2xPckNvbW1hbmQpIHx8XG4gICAgICAvLyBBbGxvdzogQ3RybCtYIGFuZCBDb21tYW5kK1hcbiAgICAgIChrZXkgPT09ICd4JyAmJiBjb250cm9sT3JDb21tYW5kKVxuICAgICkge1xuICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzYXZlIHZhbHVlIGJlZm9yZSBrZXlkb3duIGV2ZW50XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcblxuICAgIC8vIGFsbG93IG51bWJlciBjaGFyYWN0ZXJzIG9ubHlcbiAgICBjb25zdCBpc051bWJlciA9IG5ldyBSZWdFeHAodGhpcy5pbnRlZ2VyVW5zaWduZWQpLnRlc3Qoa2V5KTtcbiAgICBpZiAoaXNOdW1iZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IHdoZXRoZXIgdmFsdWUgaXMgYSB2YWxpZCBudW1iZXIgb3Igbm90XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgdmFsaWRhdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0rL2csICcnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBrZXkncyBuYW1lXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBnZXROYW1lKGU6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlLmtleTtcbiAgfVxufVxuIl19