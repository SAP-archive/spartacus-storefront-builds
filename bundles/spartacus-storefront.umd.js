(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/service-worker'), require('@ng-select/ng-select'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('rxjs'), require('@angular/platform-browser'), require('@angular/common/http'), require('rxjs/operators'), require('@spartacus/core'), require('@angular/router'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@spartacus/storefront', ['exports', '@angular/service-worker', '@ng-select/ng-select', '@angular/forms', '@ng-bootstrap/ng-bootstrap', 'rxjs', '@angular/platform-browser', '@angular/common/http', 'rxjs/operators', '@spartacus/core', '@angular/router', '@angular/common', '@angular/core'], factory) :
    (factory((global.spartacus = global.spartacus || {}, global.spartacus.storefront = {}),global.ng['service-worker'],global.ngSelect,global.ng.forms,global.ngBootstrap,global.rxjs,global.ng.platformBrowser,global.ng.common.http,global.rxjs.operators,global.core,global.ng.router,global.ng.common,global.ng.core));
}(this, (function (exports,serviceWorker,ngSelect,forms,ngBootstrap,rxjs,i1,http,operators,i1$1,i1$2,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddedToCartDialogComponent = /** @class */ (function () {
        function AddedToCartDialogComponent(activeModal, cartService, fb) {
            this.activeModal = activeModal;
            this.cartService = cartService;
            this.fb = fb;
            this.quantity = 0;
            this.headerLabel = "addToCart.itemsAddedToYourCart";
            this.firstUpdate = true;
            this.form = this.fb.group({});
        }
        /**
         * @return {?}
         */
        AddedToCartDialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.loaded$ = this.loaded$.pipe(operators.tap(function (res) {
                    if (_this.previousLoaded !== res) {
                        _this.finishedLoading = _this.previousLoaded === false;
                        _this.previousLoaded = res;
                    }
                }));
                this.entry$ = this.entry$.pipe(operators.tap(function (entry) {
                    if (entry) {
                        var code = entry.product.code;
                        if (!_this.form.controls[code]) {
                            _this.form.setControl(code, _this.createEntryFormGroup(entry));
                        }
                        else {
                            /** @type {?} */
                            var entryForm = ( /** @type {?} */(_this.form.controls[code]));
                            entryForm.controls.quantity.setValue(entry.quantity);
                        }
                        _this.form.markAsPristine();
                        // Announce in header if Add To Cart button has incremented product
                        if (_this.firstUpdate && entry.quantity > 1) {
                            _this.headerLabel = "addToCart.itemsIncrementedInYourCart";
                        }
                        else {
                            _this.headerLabel = "addToCart.itemsAddedToYourCart";
                        }
                        // Any updates after the first will be flagged as false
                        _this.firstUpdate = false;
                    }
                }));
            };
        /**
         * @return {?}
         */
        AddedToCartDialogComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.finishedLoading) {
                    this.finishedLoading = false;
                    /** @type {?} */
                    var elementToFocus = ( /** @type {?} */(this.dialog.nativeElement.querySelector("[ngbAutofocus]")));
                    if (elementToFocus) {
                        elementToFocus.focus();
                    }
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        AddedToCartDialogComponent.prototype.removeEntry = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.cartService.removeEntry(item);
                delete this.form.controls[item.product.code];
                this.activeModal.dismiss('Removed');
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        AddedToCartDialogComponent.prototype.updateEntry = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var item = _a.item, updatedQuantity = _a.updatedQuantity;
                this.cartService.updateEntry(item.entryNumber, updatedQuantity);
            };
        /**
         * @private
         * @param {?} entry
         * @return {?}
         */
        AddedToCartDialogComponent.prototype.createEntryFormGroup = /**
         * @private
         * @param {?} entry
         * @return {?}
         */
            function (entry) {
                return this.fb.group({
                    entryNumber: entry.entryNumber,
                    quantity: entry.quantity,
                });
            };
        AddedToCartDialogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-added-to-cart-dialog',
                        template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ headerLabel | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AddedToCartDialogComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbActiveModal },
                { type: i1$1.CartService },
                { type: forms.FormBuilder }
            ];
        };
        AddedToCartDialogComponent.propDecorators = {
            dialog: [{ type: i0.ViewChild, args: ['dialog', { read: i0.ElementRef },] }]
        };
        return AddedToCartDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToCartComponent = /** @class */ (function () {
        function AddToCartComponent(cartService, modalService) {
            this.cartService = cartService;
            this.modalService = modalService;
        }
        /**
         * @return {?}
         */
        AddToCartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.productCode) {
                    this.loaded$ = this.cartService.getLoaded();
                    this.cartEntry$ = this.cartService.getEntry(this.productCode);
                }
            };
        /**
         * @return {?}
         */
        AddToCartComponent.prototype.addToCart = /**
         * @return {?}
         */
            function () {
                if (!this.productCode || this.quantity <= 0) {
                    return;
                }
                this.openModal();
                this.cartService.addEntry(this.productCode, this.quantity);
            };
        /**
         * @private
         * @return {?}
         */
        AddToCartComponent.prototype.openModal = /**
         * @private
         * @return {?}
         */
            function () {
                this.modalInstance = this.modalService.open(AddedToCartDialogComponent, {
                    centered: true,
                    size: 'lg',
                }).componentInstance;
                this.modalInstance.entry$ = this.cartEntry$;
                this.modalInstance.cart$ = this.cartService.getActive();
                this.modalInstance.loaded$ = this.loaded$;
                this.modalInstance.quantity = this.quantity;
            };
        AddToCartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-add-to-cart',
                        template: "<button\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AddToCartComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartService },
                { type: ngBootstrap.NgbModal }
            ];
        };
        AddToCartComponent.propDecorators = {
            iconOnly: [{ type: i0.Input }],
            productCode: [{ type: i0.Input }],
            quantity: [{ type: i0.Input }],
            maxQuantity: [{ type: i0.Input }]
        };
        return AddToCartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BootstrapModule = /** @class */ (function () {
        function BootstrapModule() {
        }
        BootstrapModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ngBootstrap.NgbDropdownModule,
                            ngBootstrap.NgbTypeaheadModule,
                            ngBootstrap.NgbPaginationModule,
                            ngBootstrap.NgbModalModule,
                            ngBootstrap.NgbTabsetModule,
                            ngBootstrap.NgbAccordionModule,
                            ngBootstrap.NgbRatingModule,
                            ngBootstrap.NgbCollapseModule,
                        ],
                        exports: [
                            ngBootstrap.NgbDropdownModule,
                            ngBootstrap.NgbTabsetModule,
                            ngBootstrap.NgbAccordionModule,
                            ngBootstrap.NgbRatingModule,
                            ngBootstrap.NgbTypeaheadModule,
                            ngBootstrap.NgbCollapseModule,
                            ngBootstrap.NgbModalModule,
                            ngBootstrap.NgbPaginationModule,
                        ],
                        providers: [
                            ngBootstrap.NgbTabsetConfig,
                            ngBootstrap.NgbAccordionConfig,
                            ngBootstrap.NgbRatingConfig,
                            ngBootstrap.NgbPaginationConfig,
                        ],
                    },] }
        ];
        return BootstrapModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Directive, args: [{
                        selector: '[cxOnlyNumber]',
                    },] }
        ];
        /** @nocollapse */
        OnlyNumberDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        OnlyNumberDirective.propDecorators = {
            onChange: [{ type: i0.HostListener, args: ['change',] }],
            onInput: [{ type: i0.HostListener, args: ['input',] }],
            onPaste: [{ type: i0.HostListener, args: ['paste', ['$event'],] }],
            onKeyUp: [{ type: i0.HostListener, args: ['keyup', ['$event'],] }],
            onKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
        };
        return OnlyNumberDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COUNTER_CONTROL_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line */
        useExisting: i0.forwardRef(function () { return ItemCounterComponent; }),
        multi: true,
    };
    var ItemCounterComponent = /** @class */ (function () {
        function ItemCounterComponent(renderer) {
            this.renderer = renderer;
            this.value = 0;
            this.step = 1;
            this.async = false;
            this.cartIsLoading = false;
            this.isValueChangeable = false;
            this.update = new i0.EventEmitter();
            this.isValueOutOfRange = false;
            this.inputValue = new forms.FormControl({
                disabled: this.isValueChangeable,
            });
            this.onTouch = function () { };
            this.onModelChange = function (_rating) { };
        }
        /**
         * @return {?}
         */
        ItemCounterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.writeValue(this.min || 0);
                this.inputValue.valueChanges.pipe(operators.debounceTime(300)).subscribe(function (value) {
                    if (value) {
                        _this.manualChange(Number(value));
                    }
                });
            };
        /**
         * @return {?}
         */
        ItemCounterComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.cartIsLoading) {
                    this.inputValue.disable({
                        onlySelf: true,
                        emitEvent: false,
                    });
                }
                else {
                    this.inputValue.enable({
                        onlySelf: true,
                        emitEvent: false,
                    });
                }
            };
        /**
         * If value is too small it will be set to min, if is too big it will be set to max.
         */
        /**
         * If value is too small it will be set to min, if is too big it will be set to max.
         * @param {?} incomingValue
         * @return {?}
         */
        ItemCounterComponent.prototype.adjustValueInRange = /**
         * If value is too small it will be set to min, if is too big it will be set to max.
         * @param {?} incomingValue
         * @return {?}
         */
            function (incomingValue) {
                return incomingValue < this.min || !this.min
                    ? this.min
                    : incomingValue > this.max || !this.max
                        ? this.max
                        : incomingValue;
            };
        /**
         * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
         */
        /**
         * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
         * @param {?} newValue
         * @return {?}
         */
        ItemCounterComponent.prototype.manualChange = /**
         * Function set 'isValueOutOfRange' flag and adjust value in range. Then update model value and refresh input
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                this.isValueOutOfRange = this.isOutOfRange(newValue);
                newValue = this.adjustValueInRange(newValue);
                this.updateValue(newValue);
                /* We use the value from the input, however, this value
                  is not the correct value that should be displayed. The correct value to display
                  is this.value, which the parent updates if the async call succeed. If the call
                  fails, then the input will need to display this.value, and not what the user
                  recently typed in */
                this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
            };
        /**
         * Verify value for decision about displaying error about range
         */
        /**
         * Verify value for decision about displaying error about range
         * @param {?} value
         * @return {?}
         */
        ItemCounterComponent.prototype.isOutOfRange = /**
         * Verify value for decision about displaying error about range
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value < this.min || value > this.max;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ItemCounterComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                /** @type {?} */
                var handlers = {
                    ArrowDown: function () { return _this.decrement(); },
                    ArrowUp: function () { return _this.increment(); },
                };
                if (handlers[event.code]) {
                    handlers[event.code]();
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ItemCounterComponent.prototype.onBlur = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.focus = false;
                event.preventDefault();
                event.stopPropagation();
                this.onTouch();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ItemCounterComponent.prototype.onFocus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.focus = true;
                event.preventDefault();
                event.stopPropagation();
                this.onTouch();
            };
        /**
         * Verify value that it can be incremented, if yes it does that.
         */
        /**
         * Verify value that it can be incremented, if yes it does that.
         * @return {?}
         */
        ItemCounterComponent.prototype.increment = /**
         * Verify value that it can be incremented, if yes it does that.
         * @return {?}
         */
            function () {
                this.manualChange(this.value + this.step);
            };
        /**
         * Verify value that it can be decremented, if yes it does that.
         */
        /**
         * Verify value that it can be decremented, if yes it does that.
         * @return {?}
         */
        ItemCounterComponent.prototype.decrement = /**
         * Verify value that it can be decremented, if yes it does that.
         * @return {?}
         */
            function () {
                this.manualChange(this.value - this.step);
            };
        // ControlValueAccessor interface
        // ControlValueAccessor interface
        /**
         * @param {?} fn
         * @return {?}
         */
        ItemCounterComponent.prototype.registerOnTouched =
            // ControlValueAccessor interface
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onTouch = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ItemCounterComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onModelChange = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ItemCounterComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value || this.min || 0;
                this.onModelChange(this.value);
            };
        /**
         * Set up new value for input and emit event outside
         */
        /**
         * Set up new value for input and emit event outside
         * @param {?} updatedQuantity
         * @return {?}
         */
        ItemCounterComponent.prototype.updateValue = /**
         * Set up new value for input and emit event outside
         * @param {?} updatedQuantity
         * @return {?}
         */
            function (updatedQuantity) {
                if (!this.async) {
                    // If the async flag is true, then the parent component is responsible for updating the form
                    this.writeValue(updatedQuantity);
                }
                // Additionally, we emit a change event, so that users may optionally do something on change
                this.update.emit(updatedQuantity);
                this.onTouch();
            };
        ItemCounterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-item-counter',
                        template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                        providers: [COUNTER_CONTROL_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        ItemCounterComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 }
            ];
        };
        ItemCounterComponent.propDecorators = {
            input: [{ type: i0.ViewChild, args: ['itemCounterInput',] }],
            step: [{ type: i0.Input }],
            min: [{ type: i0.Input }],
            max: [{ type: i0.Input }],
            async: [{ type: i0.Input }],
            cartIsLoading: [{ type: i0.Input }],
            isValueChangeable: [{ type: i0.Input }],
            update: [{ type: i0.Output }]
        };
        return ItemCounterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormComponentsModule = /** @class */ (function () {
        function FormComponentsModule() {
        }
        FormComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule, BootstrapModule],
                        declarations: [ItemCounterComponent, OnlyNumberDirective],
                        exports: [ItemCounterComponent],
                    },] }
        ];
        return FormComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
     */
    var GenericLinkComponent = /** @class */ (function () {
        function GenericLinkComponent() {
            this.protocolRegex = /^https?:\/\//i;
        }
        Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
            get: /**
             * @return {?}
             */ function () {
                if (typeof this.url === 'string') {
                    return [this.getAbsoluteUrl(this.url)];
                }
                return this.url;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GenericLinkComponent.prototype.isExternalUrl = /**
         * @return {?}
         */
            function () {
                return typeof this.url === 'string' && this.protocolRegex.test(this.url);
            };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        GenericLinkComponent.prototype.getAbsoluteUrl = /**
         * @private
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return url.startsWith('/') ? this.url : '/' + this.url;
            };
        GenericLinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-generic-link',
                        template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-content></ng-content>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-content></ng-content>\n  </a>\n</ng-template>\n",
                        styles: [""]
                    }] }
        ];
        GenericLinkComponent.propDecorators = {
            url: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            class: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            style: [{ type: i0.Input }],
            title: [{ type: i0.Input }]
        };
        return GenericLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent() {
            this.viewPageEvent = new i0.EventEmitter();
        }
        /**
         * @param {?} page
         * @return {?}
         */
        PaginationComponent.prototype.pageChange = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                this.viewPageEvent.emit(page - 1);
            };
        PaginationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-pagination',
                        template: "<ngb-pagination\n  [collectionSize]=\"pagination.totalResults\"\n  [page]=\"pagination.currentPage + 1\"\n  (pageChange)=\"pageChange($event)\"\n  [maxSize]=\"3\"\n  [pageSize]=\"pagination.pageSize\"\n>\n</ngb-pagination>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        PaginationComponent.propDecorators = {
            pagination: [{ type: i0.Input }],
            viewPageEvent: [{ type: i0.Output }]
        };
        return PaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SortingComponent = /** @class */ (function () {
        function SortingComponent() {
            this.sortListEvent = new i0.EventEmitter();
        }
        /**
         * @param {?} sortCode
         * @return {?}
         */
        SortingComponent.prototype.sortList = /**
         * @param {?} sortCode
         * @return {?}
         */
            function (sortCode) {
                this.sortListEvent.emit(sortCode);
            };
        SortingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-sorting',
                        template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SortingComponent.ctorParameters = function () { return []; };
        SortingComponent.propDecorators = {
            sortOptions: [{ type: i0.Input }],
            selectedOption: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            sortLabels: [{ type: i0.Input }],
            sortListEvent: [{ type: i0.Output }]
        };
        return SortingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListNavigationModule = /** @class */ (function () {
        function ListNavigationModule() {
        }
        ListNavigationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ngSelect.NgSelectModule, forms.FormsModule, BootstrapModule],
                        declarations: [PaginationComponent, SortingComponent],
                        exports: [PaginationComponent, SortingComponent],
                    },] }
        ];
        return ListNavigationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var BREAKPOINT = {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
    };
    /**
     * The LayoutConfig supports the configuration of page slots by page templates
     * or page sections, such as headers and footers. The configuration also supports
     * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
     * por a given breakpoint.
     * @abstract
     */
    var /**
     * The LayoutConfig supports the configuration of page slots by page templates
     * or page sections, such as headers and footers. The configuration also supports
     * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
     * por a given breakpoint.
     * @abstract
     */ LayoutConfig = /** @class */ (function (_super) {
        __extends(LayoutConfig, _super);
        function LayoutConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LayoutConfig;
    }(i1$1.ServerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreakpointService = /** @class */ (function () {
        function BreakpointService(winRef, config) {
            this.winRef = winRef;
            this.config = config;
        }
        Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                if (!this.window) {
                    return rxjs.of(BREAKPOINT.xs);
                }
                return rxjs.fromEvent(this.window, 'resize').pipe(operators.debounceTime(300), operators.startWith({ target: this.window }), operators.map(function (event) { return _this.getBreakpoint((( /** @type {?} */(event.target))).innerWidth); }), operators.distinctUntilChanged());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreakpointService.prototype, "breakpoints", {
            get: /**
             * @return {?}
             */ function () {
                return [
                    BREAKPOINT.xs,
                    BREAKPOINT.sm,
                    BREAKPOINT.md,
                    BREAKPOINT.lg,
                    BREAKPOINT.xl,
                ];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @protected
         * @param {?} windowWidth
         * @return {?}
         */
        BreakpointService.prototype.getBreakpoint = /**
         * @protected
         * @param {?} windowWidth
         * @return {?}
         */
            function (windowWidth) {
                /** @type {?} */
                var breakpoint = this.getClosest(windowWidth);
                return BREAKPOINT[breakpoint || BREAKPOINT.lg];
            };
        /**
         * @protected
         * @param {?=} windowWidth
         * @return {?}
         */
        BreakpointService.prototype.getClosest = /**
         * @protected
         * @param {?=} windowWidth
         * @return {?}
         */
            function (windowWidth) {
                var _this = this;
                if (!windowWidth) {
                    windowWidth = this.window.innerWidth;
                }
                return windowWidth < this.getSize(BREAKPOINT.xs)
                    ? BREAKPOINT.xs
                    : this.breakpoints.reverse().find(function (br) { return windowWidth >= _this.getSize(br); });
            };
        /**
         * @protected
         * @param {?} breakpoint
         * @return {?}
         */
        BreakpointService.prototype.getSize = /**
         * @protected
         * @param {?} breakpoint
         * @return {?}
         */
            function (breakpoint) {
                return this.config.breakpoints ? this.config.breakpoints[breakpoint] : 576;
            };
        Object.defineProperty(BreakpointService.prototype, "window", {
            get: /**
             * @return {?}
             */ function () {
                return this.winRef.nativeWindow;
            },
            enumerable: true,
            configurable: true
        });
        BreakpointService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        BreakpointService.ctorParameters = function () {
            return [
                { type: i1$1.WindowRef },
                { type: LayoutConfig }
            ];
        };
        /** @nocollapse */ BreakpointService.ngInjectableDef = i0.defineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.inject(i1$1.WindowRef), i0.inject(LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
        return BreakpointService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultLayoutConfig = {
        breakpoints: {
            xs: 576,
            sm: 768,
            md: 992,
            lg: 1200,
        },
        layoutSlots: {
            header: {
                md: {
                    slots: [
                        'PreHeader',
                        'SiteContext',
                        'SiteLinks',
                        'SiteLogo',
                        'SearchBox',
                        'SiteLogin',
                        'MiniCart',
                        'NavigationBar',
                    ],
                },
                xs: {
                    slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
                },
            },
            navigation: {
                md: { slots: [] },
                xs: {
                    slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
                },
            },
            footer: {
                slots: ['Footer'],
            },
            LandingPage2Template: {
                slots: [
                    'Section1',
                    'Section2A',
                    'Section2B',
                    'Section2C',
                    'Section3',
                    'Section4',
                    'Section5',
                ],
            },
            ContentPage1Template: {
                slots: ['Section2A', 'Section2B'],
            },
            CategoryPageTemplate: {
                slots: ['Section1', 'Section2', 'Section3'],
            },
            ProductListPageTemplate: {
                slots: ['ProductListSlot', 'ProductLeftRefinements'],
            },
            SearchResultsListPageTemplate: {
                slots: [
                    'Section2',
                    'SearchResultsListSlot',
                    'ProductLeftRefinements',
                    'Section4',
                ],
            },
            ProductDetailsPageTemplate: {
                slots: [
                    'TopHeaderSlot',
                    'VariantSelectorSlot',
                    // 'AddToCart', the add to cart is currently hard coded in the PDP component
                    'UpSelling',
                    'CrossSelling',
                    'Tabs',
                    'PlaceholderContentSlot',
                ],
            },
            CartPageTemplate: {
                slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
            },
            AccountPageTemplate: {
                slots: ['BodyContent', 'SideContent'],
            },
            LoginPageTemplate: {
                slots: ['LeftContentSlot', 'RightContentSlot'],
            },
            ErrorPageTemplate: {
                slots: ['TopContent', 'MiddleContent', 'BottomContent'],
            },
            OrderConfirmationPageTemplate: {
                slots: ['BodyContent', 'SideContent'],
            },
            MultiStepCheckoutSummaryPageTemplate: {
                slots: ['BodyContent', 'SideContent'],
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HamburgerMenuService = /** @class */ (function () {
        function HamburgerMenuService(router) {
            var _this = this;
            this.isExpanded = new rxjs.BehaviorSubject(false);
            router.events
                .pipe(operators.filter(function (event) { return event instanceof i1$2.NavigationStart; }))
                .subscribe(function () {
                _this.toggle(true);
            });
        }
        /**
         * toggles the expand state of the hamburger menu
         */
        /**
         * toggles the expand state of the hamburger menu
         * @param {?=} forceCollapse
         * @return {?}
         */
        HamburgerMenuService.prototype.toggle = /**
         * toggles the expand state of the hamburger menu
         * @param {?=} forceCollapse
         * @return {?}
         */
            function (forceCollapse) {
                if (forceCollapse) {
                    this.isExpanded.next(false);
                }
                else {
                    this.isExpanded.next(!this.isExpanded.value);
                }
            };
        HamburgerMenuService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        HamburgerMenuService.ctorParameters = function () {
            return [
                { type: i1$2.Router }
            ];
        };
        /** @nocollapse */ HamburgerMenuService.ngInjectableDef = i0.defineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(i0.inject(i1$2.Router)); }, token: HamburgerMenuService, providedIn: "root" });
        return HamburgerMenuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HamburgerMenuComponent = /** @class */ (function () {
        function HamburgerMenuComponent(hamburgerMenuService) {
            this.hamburgerMenuService = hamburgerMenuService;
        }
        /**
         * @return {?}
         */
        HamburgerMenuComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.hamburgerMenuService.toggle();
            };
        Object.defineProperty(HamburgerMenuComponent.prototype, "isExpanded", {
            get: /**
             * @return {?}
             */ function () {
                return this.hamburgerMenuService.isExpanded;
            },
            enumerable: true,
            configurable: true
        });
        HamburgerMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-hamburger-menu',
                        template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        HamburgerMenuComponent.ctorParameters = function () {
            return [
                { type: HamburgerMenuService }
            ];
        };
        return HamburgerMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HamburgerMenuModule = /** @class */ (function () {
        function HamburgerMenuModule() {
        }
        HamburgerMenuModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    HamburgerMenuComponent: { selector: 'cx-hamburger-menu' },
                                },
                            }))),
                        ],
                        declarations: [HamburgerMenuComponent],
                        entryComponents: [HamburgerMenuComponent],
                    },] }
        ];
        return HamburgerMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SkipLinkComponent = /** @class */ (function () {
        function SkipLinkComponent() {
        }
        SkipLinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-skip-link',
                        template: "<a class=\"sr-only sr-only-focusable\" href=\"#header-categories-container\">\n  {{ 'header.skipToNavigation' | cxTranslate }}\n</a>\n<a class=\"sr-only sr-only-focusable\" href=\"#mini-cart\">{{\n  'header.skipToShoppingCart' | cxTranslate\n}}</a>\n<a class=\"sr-only sr-only-focusable\" href=\"#main-content\">{{\n  'header.skipToMainContent' | cxTranslate\n}}</a>\n<a class=\"sr-only sr-only-focusable\" href=\"#footer\">{{\n  'header.skipToFooter' | cxTranslate\n}}</a>\n",
                        styles: [":host{position:absolute;top:0;left:0}"]
                    }] }
        ];
        return SkipLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SkipLinkModule = /** @class */ (function () {
        function SkipLinkModule() {
        }
        SkipLinkModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    SkipLinkComponent: { selector: 'cx-skip-link' },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [SkipLinkComponent],
                        entryComponents: [SkipLinkComponent],
                    },] }
        ];
        return SkipLinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var OutletPosition = {
        REPLACE: 'replace',
        BEFORE: 'before',
        AFTER: 'after',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletService = /** @class */ (function () {
        function OutletService() {
            this.templatesRefs = {};
            this.templatesRefsBefore = {};
            this.templatesRefsAfter = {};
        }
        /**
         * @param {?} outlet
         * @param {?} template
         * @param {?=} position
         * @return {?}
         */
        OutletService.prototype.add = /**
         * @param {?} outlet
         * @param {?} template
         * @param {?=} position
         * @return {?}
         */
            function (outlet, template, position) {
                if (position === void 0) {
                    position = OutletPosition.REPLACE;
                }
                if (position === OutletPosition.BEFORE) {
                    this.templatesRefsBefore[outlet] = template;
                }
                if (position === OutletPosition.REPLACE) {
                    this.templatesRefs[outlet] = template;
                }
                if (position === OutletPosition.AFTER) {
                    this.templatesRefsAfter[outlet] = template;
                }
            };
        /**
         * @param {?} outlet
         * @param {?=} position
         * @return {?}
         */
        OutletService.prototype.get = /**
         * @param {?} outlet
         * @param {?=} position
         * @return {?}
         */
            function (outlet, position) {
                if (position === void 0) {
                    position = OutletPosition.REPLACE;
                }
                /** @type {?} */
                var templateRef;
                switch (position) {
                    case OutletPosition.BEFORE:
                        templateRef = this.templatesRefsBefore[outlet];
                        break;
                    case OutletPosition.AFTER:
                        templateRef = this.templatesRefsAfter[outlet];
                        break;
                    default:
                        templateRef = this.templatesRefs[outlet];
                }
                return templateRef;
                // return this.templatesRefs[outlet] ? this.templatesRefs[outlet] : null;
            };
        OutletService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ OutletService.ngInjectableDef = i0.defineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
        return OutletService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletRefDirective = /** @class */ (function () {
        function OutletRefDirective(tpl, outletService) {
            this.tpl = tpl;
            this.outletService = outletService;
        }
        /**
         * @return {?}
         */
        OutletRefDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
            };
        OutletRefDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[cxOutletRef]',
                    },] }
        ];
        /** @nocollapse */
        OutletRefDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef },
                { type: OutletService }
            ];
        };
        OutletRefDirective.propDecorators = {
            cxOutletRef: [{ type: i0.Input }],
            cxOutletPos: [{ type: i0.Input }]
        };
        return OutletRefDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletRefModule = /** @class */ (function () {
        function OutletRefModule() {
        }
        OutletRefModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [OutletRefDirective],
                        exports: [OutletRefDirective],
                    },] }
        ];
        return OutletRefModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletStyleService = /** @class */ (function () {
        function OutletStyleService() {
            this.templateRefs = {};
        }
        /**
         * @param {?} outlet
         * @param {?} elem
         * @return {?}
         */
        OutletStyleService.prototype.add = /**
         * @param {?} outlet
         * @param {?} elem
         * @return {?}
         */
            function (outlet, elem) {
                this.templateRefs[outlet] = elem;
            };
        /**
         * @param {?} outlet
         * @return {?}
         */
        OutletStyleService.prototype.get = /**
         * @param {?} outlet
         * @return {?}
         */
            function (outlet) {
                return this.templateRefs[outlet];
            };
        OutletStyleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ OutletStyleService.ngInjectableDef = i0.defineInjectable({ factory: function OutletStyleService_Factory() { return new OutletStyleService(); }, token: OutletStyleService, providedIn: "root" });
        return OutletStyleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletDirective = /** @class */ (function () {
        function OutletDirective(vcr, templateRef, outletService, outletStyleService, renderer) {
            this.vcr = vcr;
            this.templateRef = templateRef;
            this.outletService = outletService;
            this.outletStyleService = outletStyleService;
            this.renderer = renderer;
        }
        Object.defineProperty(OutletDirective.prototype, "cxOutletContext", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._context = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        OutletDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var nodes = [];
                nodes.push.apply(nodes, __spread(this.renderTemplate(OutletPosition.BEFORE)));
                nodes.push.apply(nodes, __spread(this.renderTemplate(OutletPosition.REPLACE, true)));
                nodes.push.apply(nodes, __spread(this.renderTemplate(OutletPosition.AFTER)));
                this.renderStyleLink(nodes);
            };
        /**
         * @private
         * @param {?} position
         * @param {?=} replace
         * @return {?}
         */
        OutletDirective.prototype.renderTemplate = /**
         * @private
         * @param {?} position
         * @param {?=} replace
         * @return {?}
         */
            function (position, replace) {
                if (replace === void 0) {
                    replace = false;
                }
                /** @type {?} */
                var nodes = [];
                /** @type {?} */
                var template = this.outletService.get(this.cxOutlet, position);
                if (template || replace) {
                    /** @type {?} */
                    var ref = this.vcr.createEmbeddedView(template || this.templateRef, {
                        $implicit: this.context,
                    });
                    nodes.push.apply(nodes, __spread(ref.rootNodes));
                }
                return nodes;
            };
        /**
         * @private
         * @param {?} nodes
         * @return {?}
         */
        OutletDirective.prototype.renderStyleLink = /**
         * @private
         * @param {?} nodes
         * @return {?}
         */
            function (nodes) {
                /** @type {?} */
                var styleElement = this.outletStyleService.get(this.cxOutlet);
                if (styleElement) {
                    /** @type {?} */
                    var parentElement = nodes.find(function (node) { return node instanceof HTMLElement; });
                    if (parentElement.shadowRoot) {
                        parentElement = parentElement.shadowRoot;
                    }
                    styleElement.nativeElement.rel = 'stylesheet';
                    this.renderer.appendChild(parentElement, styleElement.nativeElement);
                }
            };
        Object.defineProperty(OutletDirective.prototype, "context", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                // return specific context if provided
                if (this._context) {
                    return this._context;
                }
                /** @type {?} */
                var ctx = (( /** @type {?} */(this.vcr.injector))).view.context;
                // the context might already be given $implicit
                // by a parent *ngIf or *ngFor
                return ctx.$implicit || ctx;
            },
            enumerable: true,
            configurable: true
        });
        OutletDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[cxOutlet]',
                    },] }
        ];
        /** @nocollapse */
        OutletDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef },
                { type: i0.TemplateRef },
                { type: OutletService },
                { type: OutletStyleService },
                { type: i0.Renderer2 }
            ];
        };
        OutletDirective.propDecorators = {
            cxOutlet: [{ type: i0.Input }],
            cxOutletContext: [{ type: i0.Input }]
        };
        return OutletDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletModule = /** @class */ (function () {
        function OutletModule() {
        }
        OutletModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [OutletDirective],
                        providers: [OutletService],
                        exports: [OutletDirective],
                    },] }
        ];
        return OutletModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleRefDirective = /** @class */ (function () {
        function StyleRefDirective(element, cssOutletService) {
            this.element = element;
            this.cssOutletService = cssOutletService;
        }
        /**
         * @return {?}
         */
        StyleRefDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.cssOutletService.add(this.cxCssRef, this.element);
            };
        StyleRefDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[cxCssRef]',
                    },] }
        ];
        /** @nocollapse */
        StyleRefDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: OutletStyleService }
            ];
        };
        StyleRefDirective.propDecorators = {
            cxCssRef: [{ type: i0.Input }]
        };
        return StyleRefDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleRefModule = /** @class */ (function () {
        function StyleRefModule() {
        }
        StyleRefModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [StyleRefDirective],
                        exports: [StyleRefDirective],
                    },] }
        ];
        return StyleRefModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageComponent = /** @class */ (function () {
        function GlobalMessageComponent(globalMessageService) {
            this.globalMessageService = globalMessageService;
            this.messageType = i1$1.GlobalMessageType;
        }
        /**
         * @return {?}
         */
        GlobalMessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.messages$ = this.globalMessageService.get();
            };
        /**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        GlobalMessageComponent.prototype.clear = /**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
            function (type, index) {
                this.globalMessageService.remove(type, index);
            };
        GlobalMessageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-global-message',
                        template: "<div *ngIf=\"(messages$ | async) as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\"></span> <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      \u00D7\n    </button>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GlobalMessageComponent.ctorParameters = function () {
            return [
                { type: i1$1.GlobalMessageService }
            ];
        };
        return GlobalMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageComponentModule = /** @class */ (function () {
        function GlobalMessageComponentModule() {
        }
        GlobalMessageComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            i1$1.I18nModule,
                            i1$1.GlobalMessageModule.forRoot(),
                        ],
                        declarations: [GlobalMessageComponent],
                        exports: [GlobalMessageComponent],
                    },] }
        ];
        return GlobalMessageComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomFormValidators = /** @class */ (function () {
        function CustomFormValidators() {
        }
        /**
         * @param {?} control
         * @return {?}
         */
        CustomFormValidators.emailDomainValidator = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
                /** @type {?} */
                var email = ( /** @type {?} */(control.value));
                return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
            };
        /**
         * @param {?} control
         * @return {?}
         */
        CustomFormValidators.emailValidator = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
                /** @type {?} */
                var email = ( /** @type {?} */(control.value));
                return email.match(
                // Email Standard RFC 5322:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // tslint:disable-line
                )
                    ? null
                    : { InvalidEmail: true };
            };
        /**
         * @param {?} control
         * @return {?}
         */
        CustomFormValidators.passwordValidator = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
                /** @type {?} */
                var password = ( /** @type {?} */(control.value));
                return password.match('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^*()_+{};:.,]).{6,}$')
                    ? null
                    : { InvalidPassword: true };
            };
        return CustomFormValidators;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginFormComponent = /** @class */ (function () {
        function LoginFormComponent(auth, routing, globalMessageService, fb) {
            this.auth = auth;
            this.routing = routing;
            this.globalMessageService = globalMessageService;
            this.fb = fb;
        }
        /**
         * @return {?}
         */
        LoginFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.sub = this.auth
                    .getUserToken()
                    .pipe(operators.switchMap(function (data) {
                    if (data && data.access_token) {
                        _this.globalMessageService.remove(i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                        return _this.routing.getRedirectUrl().pipe(operators.take(1));
                    }
                    return rxjs.of();
                }))
                    .subscribe(function (url) {
                    if (url) {
                        // If forced to login due to AuthGuard, then redirect to intended destination
                        _this.routing.goByUrl(url);
                        _this.routing.clearRedirectUrl();
                    }
                    else {
                        // User manual login
                        _this.routing.back();
                    }
                });
                this.form = this.fb.group({
                    userId: ['', [forms.Validators.required, CustomFormValidators.emailValidator]],
                    password: ['', forms.Validators.required],
                });
            };
        /**
         * @return {?}
         */
        LoginFormComponent.prototype.login = /**
         * @return {?}
         */
            function () {
                this.auth.authorize(this.form.controls.userId.value, this.form.controls.password.value);
            };
        /**
         * @return {?}
         */
        LoginFormComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.sub) {
                    this.sub.unsubscribe();
                }
            };
        LoginFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-login-form',
                        template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ route: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section__title cx-section__title--alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n  <a\n    [routerLink]=\"{ route: 'register' } | cxUrl\"\n    class=\"btn btn-block btn-secondary\"\n    >{{ 'loginForm.register' | cxTranslate }}</a\n  >\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        LoginFormComponent.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.RoutingService },
                { type: i1$1.GlobalMessageService },
                { type: forms.FormBuilder }
            ];
        };
        return LoginFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsMappingService = /** @class */ (function () {
        function CmsMappingService(config, platformId) {
            this.config = config;
            this.platformId = platformId;
        }
        /**
         * @param {?} flexType
         * @return {?}
         */
        CmsMappingService.prototype.isComponentEnabled = /**
         * @param {?} flexType
         * @return {?}
         */
            function (flexType) {
                /** @type {?} */
                var isSSR = common.isPlatformServer(this.platformId);
                /** @type {?} */
                var isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
                    .disableSSR;
                return !(isSSR && isComponentDisabledInSSR);
            };
        /**
         * @param {?} componentTypes
         * @return {?}
         */
        CmsMappingService.prototype.getRoutesForComponents = /**
         * @param {?} componentTypes
         * @return {?}
         */
            function (componentTypes) {
                var e_1, _a;
                /** @type {?} */
                var routes = [];
                try {
                    for (var componentTypes_1 = __values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                        var componentType = componentTypes_1_1.value;
                        if (this.isComponentEnabled(componentType)) {
                            routes.push.apply(routes, __spread(this.getRoutesForComponent(componentType)));
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (componentTypes_1_1 && !componentTypes_1_1.done && (_a = componentTypes_1.return))
                            _a.call(componentTypes_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return routes;
            };
        /**
         * @param {?} componentTypes
         * @return {?}
         */
        CmsMappingService.prototype.getGuardsForComponents = /**
         * @param {?} componentTypes
         * @return {?}
         */
            function (componentTypes) {
                var e_2, _a;
                /** @type {?} */
                var guards = new Set();
                try {
                    for (var componentTypes_2 = __values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                        var componentType = componentTypes_2_1.value;
                        this.getGuardsForComponent(componentType).forEach(function (guard) {
                            return guards.add(guard);
                        });
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return))
                            _a.call(componentTypes_2);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                return Array.from(guards);
            };
        /**
         * @param {?} componentTypes
         * @return {?}
         */
        CmsMappingService.prototype.getI18nKeysForComponents = /**
         * @param {?} componentTypes
         * @return {?}
         */
            function (componentTypes) {
                var e_3, _a;
                /** @type {?} */
                var i18nKeys = new Set();
                try {
                    for (var componentTypes_3 = __values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                        var componentType = componentTypes_3_1.value;
                        if (this.isComponentEnabled(componentType)) {
                            this.getI18nKeysForComponent(componentType).forEach(function (key) {
                                return i18nKeys.add(key);
                            });
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return))
                            _a.call(componentTypes_3);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                return Array.from(i18nKeys);
            };
        /**
         * @private
         * @param {?} componentType
         * @return {?}
         */
        CmsMappingService.prototype.getRoutesForComponent = /**
         * @private
         * @param {?} componentType
         * @return {?}
         */
            function (componentType) {
                /** @type {?} */
                var mappingConfig = this.config.cmsComponents[componentType];
                return (mappingConfig && mappingConfig.childRoutes) || [];
            };
        /**
         * @private
         * @param {?} componentType
         * @return {?}
         */
        CmsMappingService.prototype.getGuardsForComponent = /**
         * @private
         * @param {?} componentType
         * @return {?}
         */
            function (componentType) {
                /** @type {?} */
                var mappingConfig = this.config.cmsComponents[componentType];
                return (mappingConfig && mappingConfig.guards) || [];
            };
        /**
         * @private
         * @param {?} componentType
         * @return {?}
         */
        CmsMappingService.prototype.getI18nKeysForComponent = /**
         * @private
         * @param {?} componentType
         * @return {?}
         */
            function (componentType) {
                /** @type {?} */
                var mappingConfig = this.config.cmsComponents[componentType];
                return (mappingConfig && mappingConfig.i18nKeys) || [];
            };
        CmsMappingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsMappingService.ctorParameters = function () {
            return [
                { type: i1$1.CmsConfig },
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        /** @nocollapse */ CmsMappingService.ngInjectableDef = i0.defineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.inject(i1$1.CmsConfig), i0.inject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
        return CmsMappingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsGuardsService = /** @class */ (function () {
        function CmsGuardsService(cmsMapping, injector) {
            this.cmsMapping = cmsMapping;
            this.injector = injector;
        }
        /**
         * @param {?} componentTypes
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        CmsGuardsService.prototype.cmsPageCanActivate = /**
         * @param {?} componentTypes
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (componentTypes, route, state) {
                var _this = this;
                /** @type {?} */
                var guards = this.cmsMapping.getGuardsForComponents(componentTypes);
                if (guards.length) {
                    /** @type {?} */
                    var canActivateObservables = guards.map(function (guardClass) {
                        /** @type {?} */
                        var guard = _this.injector.get(guardClass, null);
                        if (isCanActivate(guard)) {
                            return wrapIntoObservable(guard.canActivate(route, state)).pipe(operators.first());
                        }
                        else {
                            throw new Error('Invalid CanActivate guard in cmsMapping');
                        }
                    });
                    return rxjs.concat.apply(void 0, __spread(canActivateObservables)).pipe(operators.skipWhile(function (canActivate) { return canActivate === true; }), operators.endWith(true), operators.first());
                }
                else {
                    return rxjs.of(true);
                }
            };
        CmsGuardsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsGuardsService.ctorParameters = function () {
            return [
                { type: CmsMappingService },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ CmsGuardsService.ngInjectableDef = i0.defineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(i0.inject(CmsMappingService), i0.inject(i0.INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
        return CmsGuardsService;
    }());
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    function wrapIntoObservable(value) {
        if (rxjs.isObservable(value)) {
            return value;
        }
        if (isPromise(value)) {
            return rxjs.from(Promise.resolve(value));
        }
        return rxjs.of(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isPromise(obj) {
        return !!obj && typeof obj.then === 'function';
    }
    /**
     * @param {?} guard
     * @return {?}
     */
    function isCanActivate(guard) {
        return guard && isFunction(guard.canActivate);
    }
    /**
     * @template T
     * @param {?} v
     * @return {?}
     */
    function isFunction(v) {
        return typeof v === 'function';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsI18nService = /** @class */ (function () {
        function CmsI18nService(cmsMapping, translation, translationChunk) {
            this.cmsMapping = cmsMapping;
            this.translation = translation;
            this.translationChunk = translationChunk;
        }
        /**
         * @param {?} componentTypes
         * @return {?}
         */
        CmsI18nService.prototype.loadChunksForComponents = /**
         * @param {?} componentTypes
         * @return {?}
         */
            function (componentTypes) {
                var e_1, _a;
                /** @type {?} */
                var i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
                /** @type {?} */
                var i18nChunks = new Set();
                try {
                    for (var i18nKeys_1 = __values(i18nKeys), i18nKeys_1_1 = i18nKeys_1.next(); !i18nKeys_1_1.done; i18nKeys_1_1 = i18nKeys_1.next()) {
                        var key = i18nKeys_1_1.value;
                        i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (i18nKeys_1_1 && !i18nKeys_1_1.done && (_a = i18nKeys_1.return))
                            _a.call(i18nKeys_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.translation.loadChunks(Array.from(i18nChunks));
            };
        CmsI18nService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsI18nService.ctorParameters = function () {
            return [
                { type: CmsMappingService },
                { type: i1$1.TranslationService },
                { type: i1$1.TranslationChunkService }
            ];
        };
        /** @nocollapse */ CmsI18nService.ngInjectableDef = i0.defineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(i0.inject(CmsMappingService), i0.inject(i1$1.TranslationService), i0.inject(i1$1.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
        return CmsI18nService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageLayoutService = /** @class */ (function () {
        function PageLayoutService(cms, config, breakpointService) {
            this.cms = cms;
            this.config = config;
            this.breakpointService = breakpointService;
            // we print warn messages on missing layout configs
            // only once to not polute the console log
            this.warnLogMessages = {};
            this.logSlots = {};
        }
        /**
         * @param {?=} section
         * @return {?}
         */
        PageLayoutService.prototype.getSlots = /**
         * @param {?=} section
         * @return {?}
         */
            function (section) {
                var _this = this;
                return this.breakpointService.breakpoint$.pipe(operators.switchMap(function (breakpoint) {
                    return _this.page$.pipe(operators.map(function (page) {
                        /** @type {?} */
                        var config = _this.getSlotConfig(page.template, 'slots', section, breakpoint);
                        if (config && config.slots) {
                            return config.slots;
                        }
                        else if (!section) {
                            _this.logMissingLayoutConfig(page);
                            return Object.keys(page.slots);
                        }
                        else {
                            _this.logMissingLayoutConfig(page, section);
                            return [];
                        }
                    }));
                }), operators.distinctUntilChanged());
            };
        Object.defineProperty(PageLayoutService.prototype, "page$", {
            get: /**
             * @return {?}
             */ function () {
                return this.cms.getCurrentPage().pipe(operators.filter(Boolean));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageLayoutService.prototype, "templateName$", {
            get: /**
             * @return {?}
             */ function () {
                return this.page$.pipe(operators.filter(function (page) { return !!page.template; }), operators.map(function (page) { return page.template; }));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * load slots from the layout configuration. The breakpoint is used
         * to load a specific configuration for the given breakpoint. If there's
         * no configuration available for the given breakpoint the default slot
         * configuration is returned.
         */
        /**
         * load slots from the layout configuration. The breakpoint is used
         * to load a specific configuration for the given breakpoint. If there's
         * no configuration available for the given breakpoint the default slot
         * configuration is returned.
         * @protected
         * @param {?} templateUid
         * @param {?} configAttribute
         * @param {?=} section
         * @param {?=} breakpoint
         * @return {?}
         */
        PageLayoutService.prototype.getSlotConfig = /**
         * load slots from the layout configuration. The breakpoint is used
         * to load a specific configuration for the given breakpoint. If there's
         * no configuration available for the given breakpoint the default slot
         * configuration is returned.
         * @protected
         * @param {?} templateUid
         * @param {?} configAttribute
         * @param {?=} section
         * @param {?=} breakpoint
         * @return {?}
         */
            function (templateUid, configAttribute, section, breakpoint) {
                /** @type {?} */
                var pageTemplateConfig = this.config.layoutSlots[templateUid];
                if (section) {
                    return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
                }
                if (pageTemplateConfig) {
                    return this.getResponsiveSlotConfig(( /** @type {?} */(pageTemplateConfig)), configAttribute, breakpoint);
                }
            };
        /**
         * @protected
         * @param {?} templateUid
         * @param {?} configAttribute
         * @param {?=} section
         * @param {?=} breakpoint
         * @return {?}
         */
        PageLayoutService.prototype.getSlotConfigForSection = /**
         * @protected
         * @param {?} templateUid
         * @param {?} configAttribute
         * @param {?=} section
         * @param {?=} breakpoint
         * @return {?}
         */
            function (templateUid, configAttribute, section, breakpoint) {
                /** @type {?} */
                var pageTemplateConfig = this.config.layoutSlots[templateUid];
                if (!pageTemplateConfig) {
                    return null;
                }
                // if there's no section config on the page layout
                // we fall back to the global section config
                /** @type {?} */
                var sectionConfig = pageTemplateConfig[section]
                    ? pageTemplateConfig[section]
                    : this.config.layoutSlots[section];
                if (!sectionConfig) {
                    return null;
                }
                /** @type {?} */
                var responsiveConfig = this.getResponsiveSlotConfig(( /** @type {?} */(sectionConfig)), configAttribute, breakpoint);
                if (responsiveConfig.hasOwnProperty(configAttribute)) {
                    return responsiveConfig;
                }
                else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
                    return pageTemplateConfig[section];
                }
                else if (this.config.layoutSlots[section]) {
                    return ( /** @type {?} */(this.config.layoutSlots[section]));
                }
            };
        /**
         * Returns a list of slots for a breakpoint specific configuratoin
         * If there's no specific configuration for the breakpoint,
         * the closest available configuration will be returned.
         */
        /**
         * Returns a list of slots for a breakpoint specific configuratoin
         * If there's no specific configuration for the breakpoint,
         * the closest available configuration will be returned.
         * @protected
         * @param {?} layoutSlotConfig
         * @param {?} configAttribute
         * @param {?=} breakpoint
         * @return {?}
         */
        PageLayoutService.prototype.getResponsiveSlotConfig = /**
         * Returns a list of slots for a breakpoint specific configuratoin
         * If there's no specific configuration for the breakpoint,
         * the closest available configuration will be returned.
         * @protected
         * @param {?} layoutSlotConfig
         * @param {?} configAttribute
         * @param {?=} breakpoint
         * @return {?}
         */
            function (layoutSlotConfig, configAttribute, breakpoint) {
                var e_1, _a;
                /** @type {?} */
                var slotConfig = ( /** @type {?} */(layoutSlotConfig));
                // fallback to default slot config
                if (!breakpoint) {
                    return slotConfig;
                }
                // we have a config for the specific breakpoint
                if (layoutSlotConfig[breakpoint] &&
                    layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
                    return ( /** @type {?} */(layoutSlotConfig[breakpoint]));
                }
                // find closest config
                /** @type {?} */
                var all = this.breakpointService.breakpoints;
                try {
                    for (var _b = __values(all.splice(0, all.indexOf(breakpoint))), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var br = _c.value;
                        if (layoutSlotConfig[br] &&
                            layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                            slotConfig = ( /** @type {?} */(layoutSlotConfig[br]));
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return slotConfig;
            };
        /**
         * In order to help developers, we print some detailed log information in
         * case there's no layout configuration available for the given page template
         * or section. Additionally, the slot positions are printed in the console
         * in a format that can be copied / paste to the configuration.
         */
        /**
         * In order to help developers, we print some detailed log information in
         * case there's no layout configuration available for the given page template
         * or section. Additionally, the slot positions are printed in the console
         * in a format that can be copied / paste to the configuration.
         * @private
         * @param {?} page
         * @param {?=} section
         * @return {?}
         */
        PageLayoutService.prototype.logMissingLayoutConfig = /**
         * In order to help developers, we print some detailed log information in
         * case there's no layout configuration available for the given page template
         * or section. Additionally, the slot positions are printed in the console
         * in a format that can be copied / paste to the configuration.
         * @private
         * @param {?} page
         * @param {?=} section
         * @return {?}
         */
            function (page, section) {
                if (this.config.production) {
                    return;
                }
                if (!this.logSlots[page.template]) {
                    // the info log is not printed in production
                    // tslint:disable-next-line: no-console
                    console.info("Available CMS page slots: '" + Object.keys(page.slots).join("','") + "'");
                    this.logSlots[page.template] = true;
                }
                /** @type {?} */
                var cacheKey = section || page.template;
                if (!this.warnLogMessages[cacheKey]) {
                    console.warn("No layout config found for " + cacheKey + ", you can configure a 'LayoutConfig' to control the rendering of page slots.");
                    this.warnLogMessages[cacheKey] = true;
                }
            };
        PageLayoutService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        PageLayoutService.ctorParameters = function () {
            return [
                { type: i1$1.CmsService },
                { type: LayoutConfig },
                { type: BreakpointService }
            ];
        };
        return PageLayoutService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageLayoutComponent = /** @class */ (function () {
        function PageLayoutComponent(el, renderer, pageLayoutService) {
            var _this = this;
            this.el = el;
            this.renderer = renderer;
            this.pageLayoutService = pageLayoutService;
            this.section$ = new rxjs.BehaviorSubject(undefined);
            this.layoutName$ = this.section$.pipe(operators.switchMap(function (section) {
                return section ? rxjs.of(section) : _this.pageLayoutService.templateName$;
            }), operators.tap(function (name) {
                _this.styleClass = name;
            }));
            this.slots$ = this.section$.pipe(operators.switchMap(function (section) { return _this.pageLayoutService.getSlots(section); }));
        }
        Object.defineProperty(PageLayoutComponent.prototype, "section", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.section$.next(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
            set: /**
             * @param {?} cls
             * @return {?}
             */ function (cls) {
                if (this.currentClass) {
                    this.renderer.removeClass(this.el.nativeElement, this.currentClass);
                }
                this.renderer.addClass(this.el.nativeElement, cls);
                this.currentClass = cls;
            },
            enumerable: true,
            configurable: true
        });
        PageLayoutComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-page-layout',
                        template: "<ng-container *cxOutlet=\"(layoutName$ | async)\">\n  <ng-content></ng-content>\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PageLayoutComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: PageLayoutService }
            ];
        };
        PageLayoutComponent.propDecorators = {
            section: [{ type: i0.Input }]
        };
        return PageLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsRoutesService = /** @class */ (function () {
        function CmsRoutesService(router, cmsMapping) {
            this.router = router;
            this.cmsMapping = cmsMapping;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        CmsRoutesService.prototype.cmsRouteExist = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var isCmsDrivenRoute = url.startsWith('/');
                if (!isCmsDrivenRoute) {
                    return false;
                }
                /** @type {?} */
                var routePath = url.substr(1);
                return (isCmsDrivenRoute &&
                    !!this.router.config.find(function (route) {
                        return route.data && route.data.cxCmsRouteContext && route.path === routePath;
                    }));
            };
        /**
         * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
         *
         * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
         * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
         *
         * @param pageContext
         * @param currentUrl
         */
        /**
         * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
         *
         * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
         * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
         *
         * @param {?} pageContext
         * @param {?} componentTypes
         * @param {?} currentUrl
         * @return {?}
         */
        CmsRoutesService.prototype.handleCmsRoutesInGuard = /**
         * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
         *
         * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
         * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
         *
         * @param {?} pageContext
         * @param {?} componentTypes
         * @param {?} currentUrl
         * @return {?}
         */
            function (pageContext, componentTypes, currentUrl) {
                /** @type {?} */
                var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
                if (componentRoutes.length) {
                    if (this.updateRouting(pageContext, componentRoutes)) {
                        this.router.navigateByUrl(currentUrl);
                        return false;
                    }
                }
                return true;
            };
        /**
         * @private
         * @param {?} pageContext
         * @param {?} routes
         * @return {?}
         */
        CmsRoutesService.prototype.updateRouting = /**
         * @private
         * @param {?} pageContext
         * @param {?} routes
         * @return {?}
         */
            function (pageContext, routes) {
                if (pageContext.type === i1$1.PageType.CONTENT_PAGE &&
                    pageContext.id.startsWith('/') &&
                    pageContext.id.length > 1) {
                    /** @type {?} */
                    var newRoute = {
                        path: pageContext.id.substr(1),
                        component: PageLayoutComponent,
                        children: routes,
                        data: {
                            cxCmsRouteContext: pageContext,
                        },
                    };
                    this.router.resetConfig(__spread([newRoute], this.router.config));
                    return true;
                }
                return false;
            };
        CmsRoutesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsRoutesService.ctorParameters = function () {
            return [
                { type: i1$2.Router },
                { type: CmsMappingService }
            ];
        };
        /** @nocollapse */ CmsRoutesService.ngInjectableDef = i0.defineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.inject(i1$2.Router), i0.inject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
        return CmsRoutesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsPageGuard = /** @class */ (function () {
        function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards) {
            this.routingService = routingService;
            this.cmsService = cmsService;
            this.cmsRoutes = cmsRoutes;
            this.cmsI18n = cmsI18n;
            this.cmsGuards = cmsGuards;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        CmsPageGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                var _this = this;
                return this.routingService.getNextPageContext().pipe(operators.switchMap(function (pageContext) {
                    return _this.cmsService.hasPage(pageContext, true).pipe(operators.first(), operators.withLatestFrom(rxjs.of(pageContext)));
                }), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), hasPage = _b[0], pageContext = _b[1];
                    if (hasPage) {
                        return _this.cmsService.getPageComponentTypes(pageContext).pipe(operators.switchMap(function (componentTypes) {
                            return _this.cmsGuards
                                .cmsPageCanActivate(componentTypes, route, state)
                                .pipe(operators.withLatestFrom(rxjs.of(componentTypes)));
                        }), operators.tap(function (_a) {
                            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
                            if (canActivate === true) {
                                _this.cmsI18n.loadChunksForComponents(componentTypes);
                            }
                        }), operators.map(function (_a) {
                            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
                            if (canActivate === true &&
                                !route.data.cxCmsRouteContext &&
                                !_this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
                            }
                            return canActivate;
                        }));
                    }
                    else {
                        if (pageContext.id !== '/not-found') {
                            _this.routingService.go(['/not-found']);
                        }
                        return rxjs.of(false);
                    }
                }));
            };
        CmsPageGuard.guardName = 'CmsPageGuard';
        CmsPageGuard.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CmsPageGuard.ctorParameters = function () {
            return [
                { type: i1$1.RoutingService },
                { type: i1$1.CmsService },
                { type: CmsRoutesService },
                { type: CmsI18nService },
                { type: CmsGuardsService }
            ];
        };
        return CmsPageGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var guards = [CmsPageGuard];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsModule = /** @class */ (function () {
        function CmsModule() {
        }
        CmsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            i1$1.ConfigModule.withConfig(i1$1.defaultCmsModuleConfig),
                            OutletModule,
                            i1$1.CmsModule,
                        ],
                        providers: __spread(guards, [{ provide: i1$1.CmsConfig, useExisting: i1$1.Config }]),
                        declarations: [],
                        exports: [OutletDirective],
                    },] }
        ];
        return CmsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginFormModule = /** @class */ (function () {
        function LoginFormModule() {
        }
        LoginFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1$2.RouterModule,
                            CmsModule,
                            BootstrapModule,
                            i1$1.UserModule,
                            i1$1.UrlModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    ReturningCustomerLoginComponent: {
                                        selector: 'cx-login-form',
                                    },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [LoginFormComponent],
                        exports: [LoginFormComponent],
                        entryComponents: [LoginFormComponent],
                    },] }
        ];
        return LoginFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponentService = /** @class */ (function () {
        function LoginComponentService() {
            this._isLogin = false;
        }
        Object.defineProperty(LoginComponentService.prototype, "isLogin", {
            get: /**
             * @return {?}
             */ function () {
                return this._isLogin;
            },
            set: /**
             * @param {?} login
             * @return {?}
             */ function (login) {
                this._isLogin = login;
            },
            enumerable: true,
            configurable: true
        });
        LoginComponentService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ LoginComponentService.ngInjectableDef = i0.defineInjectable({ factory: function LoginComponentService_Factory() { return new LoginComponentService(); }, token: LoginComponentService, providedIn: "root" });
        return LoginComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(auth, userService, loginService) {
            this.auth = auth;
            this.userService = userService;
            this.loginService = loginService;
        }
        Object.defineProperty(LoginComponent.prototype, "user$", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                return this.auth.getUserToken().pipe(operators.map(function (token) {
                    if (token && !!token.access_token && !_this.loginService.isLogin) {
                        _this.loginService.isLogin = true;
                        _this.userService.load(token.userId);
                    }
                    else if (token && !token.access_token && _this.loginService.isLogin) {
                        _this.loginService.isLogin = false;
                    }
                    return token;
                }), operators.filter(function (token) { return token && !!token.access_token; }), operators.switchMap(function () { return _this.userService.get(); }));
            },
            enumerable: true,
            configurable: true
        });
        LoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-login',
                        template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'login.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: 'login' } | cxUrl\">{{\n    'login.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.UserService },
                { type: LoginComponentService }
            ];
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var /**
     * @abstract
     * @template T
     */ CmsComponentData = /** @class */ (function () {
        function CmsComponentData() {
        }
        return CmsComponentData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentWrapperDirective = /** @class */ (function () {
        function ComponentWrapperDirective(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, cd, config, platformId) {
            this.vcr = vcr;
            this.componentMapper = componentMapper;
            this.injector = injector;
            this.cmsService = cmsService;
            this.dynamicAttributeService = dynamicAttributeService;
            this.renderer = renderer;
            this.cd = cd;
            this.config = config;
            this.platformId = platformId;
        }
        /**
         * @return {?}
         */
        ComponentWrapperDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.shouldRenderComponent()) {
                    return;
                }
                if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
                    this.launchWebComponent();
                }
                else {
                    this.launchComponent();
                }
            };
        /**
         * @private
         * @return {?}
         */
        ComponentWrapperDirective.prototype.shouldRenderComponent = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isSSR = common.isPlatformServer(this.platformId);
                /** @type {?} */
                var isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
                return !(isSSR && isComponentDisabledInSSR);
            };
        /**
         * @private
         * @return {?}
         */
        ComponentWrapperDirective.prototype.launchComponent = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
                if (factory) {
                    this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
                    this.cd.detectChanges();
                    if (this.cmsService.isLaunchInSmartEdit()) {
                        this.addSmartEditContract(this.cmpRef.location.nativeElement);
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        ComponentWrapperDirective.prototype.launchWebComponent = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var elementName;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer)];
                            case 1:
                                elementName = _a.sent();
                                if (elementName) {
                                    this.webElement = this.renderer.createElement(elementName);
                                    this.webElement.cxApi = __assign({}, this.injector.get(i1$1.CxApiService), { CmsComponentData: this.getCmsDataForComponent() });
                                    this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @template T
         * @return {?}
         */
        ComponentWrapperDirective.prototype.getCmsDataForComponent = /**
         * @private
         * @template T
         * @return {?}
         */
            function () {
                return {
                    uid: this.cxComponentWrapper.uid,
                    data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
                };
            };
        /**
         * @private
         * @return {?}
         */
        ComponentWrapperDirective.prototype.getInjectorForComponent = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
                    .providers || [];
                return i0.Injector.create({
                    providers: __spread([
                        {
                            provide: CmsComponentData,
                            useValue: this.getCmsDataForComponent(),
                        }
                    ], configProviders),
                    parent: this.injector,
                });
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        ComponentWrapperDirective.prototype.addSmartEditContract = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
            };
        /**
         * @return {?}
         */
        ComponentWrapperDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.cmpRef) {
                    this.cmpRef.destroy();
                }
                if (this.webElement) {
                    this.renderer.removeChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                }
            };
        ComponentWrapperDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[cxComponentWrapper]',
                    },] }
        ];
        /** @nocollapse */
        ComponentWrapperDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef },
                { type: i1$1.ComponentMapperService },
                { type: i0.Injector },
                { type: i1$1.CmsService },
                { type: i1$1.DynamicAttributeService },
                { type: i0.Renderer2 },
                { type: i0.ChangeDetectorRef },
                { type: i1$1.CmsConfig },
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        ComponentWrapperDirective.propDecorators = {
            cxComponentWrapper: [{ type: i0.Input }]
        };
        return ComponentWrapperDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageComponentModule = /** @class */ (function () {
        function PageComponentModule() {
        }
        PageComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [],
                        declarations: [ComponentWrapperDirective],
                        exports: [ComponentWrapperDirective],
                    },] }
        ];
        return PageComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageSlotComponent = /** @class */ (function () {
        function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement) {
            var _this = this;
            this.cmsService = cmsService;
            this.dynamicAttributeService = dynamicAttributeService;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.position$ = new rxjs.BehaviorSubject(undefined);
            /**
             * observable with `ContentSlotData` for the current position
             */
            this.slot$ = this.position$.pipe(operators.switchMap(function (position) { return _this.cmsService.getContentSlot(position); }), operators.tap(function (slot) { return _this.addSmartEditSlotClass(slot); }));
            /**
             * observable with components (`ContentSlotComponentData[]`)
             * for the current slot
             */
            this.components$ = this.slot$.pipe(operators.map(function (slot) { return (slot && slot.components ? slot.components : []); }), operators.distinctUntilChanged(function (a, b) {
                return a.length === b.length && !a.find(function (el, index) { return el.uid !== b[index].uid; });
            }), operators.tap(function (components) { return _this.addComponentClass(components); }));
        }
        Object.defineProperty(PageSlotComponent.prototype, "position", {
            set: /**
             * @param {?} position
             * @return {?}
             */ function (position) {
                this.position$.next(position);
                // add the position name as a css class so that
                // layout can be applied to it, using the position based class.
                this.renderer.addClass(this.hostElement.nativeElement, position);
            },
            enumerable: true,
            configurable: true
        });
        // add a class to indicate whether the class is empty or not
        // add a class to indicate whether the class is empty or not
        /**
         * @private
         * @param {?} components
         * @return {?}
         */
        PageSlotComponent.prototype.addComponentClass =
            // add a class to indicate whether the class is empty or not
            /**
             * @private
             * @param {?} components
             * @return {?}
             */
            function (components) {
                if (components && components.length > 0) {
                    this.renderer.addClass(this.hostElement.nativeElement, 'has-components');
                }
            };
        /**
         * @private
         * @param {?} slot
         * @return {?}
         */
        PageSlotComponent.prototype.addSmartEditSlotClass = /**
         * @private
         * @param {?} slot
         * @return {?}
         */
            function (slot) {
                if (this.cmsService.isLaunchInSmartEdit()) {
                    this.addSmartEditContract(slot);
                }
            };
        /**
         * @private
         * @param {?} slot
         * @return {?}
         */
        PageSlotComponent.prototype.addSmartEditContract = /**
         * @private
         * @param {?} slot
         * @return {?}
         */
            function (slot) {
                this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
            };
        PageSlotComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-page-slot',
                        template: "<ng-container *cxOutlet=\"(position$ | async)\">\n  <ng-container *ngFor=\"let component of (components$ | async)\">\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PageSlotComponent.ctorParameters = function () {
            return [
                { type: i1$1.CmsService },
                { type: i1$1.DynamicAttributeService },
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        PageSlotComponent.propDecorators = {
            position: [{ type: i0.Input }]
        };
        return PageSlotComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageSlotModule = /** @class */ (function () {
        function PageSlotModule() {
        }
        PageSlotModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, OutletModule, PageComponentModule],
                        providers: [],
                        declarations: [PageSlotComponent],
                        exports: [PageSlotComponent],
                    },] }
        ];
        return PageSlotModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.UserModule,
                            i1$1.UrlModule,
                            PageSlotModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    LoginComponent: {
                                        selector: 'cx-login',
                                    },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [LoginComponent],
                        entryComponents: [LoginComponent],
                        exports: [LoginComponent],
                    },] }
        ];
        return LoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogoutGuard = /** @class */ (function () {
        function LogoutGuard(auth, cms, routing) {
            this.auth = auth;
            this.cms = cms;
            this.routing = routing;
        }
        /**
         * @return {?}
         */
        LogoutGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.logout();
                return this.cms
                    .hasPage({
                    id: '/logout',
                    type: i1$1.PageType.CONTENT_PAGE,
                })
                    .pipe(operators.tap(function (hasPage) {
                    if (!hasPage) {
                        _this.routing.go(['/']);
                    }
                }));
            };
        /**
         * @protected
         * @return {?}
         */
        LogoutGuard.prototype.logout = /**
         * @protected
         * @return {?}
         */
            function () {
                this.auth.logout();
            };
        LogoutGuard.GUARD_NAME = 'LogoutGuard';
        LogoutGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        LogoutGuard.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.CmsService },
                { type: i1$1.RoutingService }
            ];
        };
        /** @nocollapse */ LogoutGuard.ngInjectableDef = i0.defineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.inject(i1$1.AuthService), i0.inject(i1$1.CmsService), i0.inject(i1$1.RoutingService)); }, token: LogoutGuard, providedIn: "root" });
        return LogoutGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var cartComponents = {
        emptyCartText: {
            flexType: 'CMSParagraphComponent',
            typeCode: 'CMSParagraphComponent',
            content: "\n      <h2>Your shopping cart is empty</h2>\n      <p>Suggestions</p>\n      <ul>\n          <li>\n          Browse our products by selecting a category above\n          </li>\n      </ul>",
        },
    };
    /** @type {?} */
    var defaultCartPageConfig = {
        ignoreBackend: false,
        pageId: 'cartPage',
        type: 'ContentPage',
        template: 'CartPageTemplate',
        title: 'Cart',
        slots: {
            EmptyCartMiddleContent: {
                componentIds: ['emptyCartText'],
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var headerComponents = {
        SkipLinkComponent: {
            typeCode: 'SkipLinkComponent',
            flexType: 'SkipLinkComponent',
            uid: 'SkipLinkComponent',
        },
        HamburgerMenuComponent: {
            typeCode: 'HamburgerMenuComponent',
            flexType: 'HamburgerMenuComponent',
        },
        LanguageComponent: {
            typeCode: 'CMSSiteContextComponent',
            flexType: 'CMSSiteContextComponent',
            context: 'LANGUAGE',
        },
        CurrencyComponent: {
            typeCode: 'CMSSiteContextComponent',
            flexType: 'CMSSiteContextComponent',
            context: 'CURRENCY',
        },
        LanguageCurrencyComponent: {
            typeCode: 'LanguageCurrencyComponent',
            flexType: 'LanguageCurrencyComponent',
        },
        StoreFinder: {
            typeCode: 'CMSLinkComponent',
            flexType: 'CMSLinkComponent',
            linkName: 'Find a Store',
            url: '/store-finder',
        },
        BreadcrumbComponent: {
            typeCode: 'BreadcrumbComponent',
            flexType: 'BreadcrumbComponent',
        },
        Logo: {
            typeCode: 'SimpleBannerComponent',
            flexType: 'SimpleBannerComponent',
            uid: 'logo',
            media: {
                mime: 'svg/image/svg+xml',
                url: 'https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg',
            },
            urlLink: '/',
        },
        SearchBox: {
            typeCode: 'SearchBoxComponent',
            flexType: 'SearchBoxComponent',
            uid: 'SearchBoxComponent',
        },
        MiniCart: {
            typeCode: 'MiniCartComponent',
            flexType: 'MiniCartComponent',
            uid: 'MiniCartComponent',
        },
        LoginComponent: {
            typeCode: 'LoginComponent',
            flexType: 'LoginComponent',
            uid: 'LoginComponent',
        },
        CategoryNavigationComponent: {
            typeCode: 'CategoryNavigationComponent',
            flexType: 'CategoryNavigationComponent',
            uid: 'ElectronicsCategoryNavComponent',
            navigationNode: {
                uid: 'ElectronicsCategoryNavNode',
                children: [
                    {
                        uid: 'CameraLensesNavNode',
                        title: 'Electronic catalog',
                        entries: [
                            {
                                itemId: 'CameraLensesCategoryLink',
                                itemSuperType: 'AbstractCMSComponent',
                                itemType: 'CMSLinkComponent',
                            },
                        ],
                    },
                ],
            },
        },
    };
    /** @type {?} */
    var defaultPageHeaderConfig = {
        PreHeader: {
            componentIds: ['SkipLinkComponent', 'HamburgerMenuComponent'],
        },
        SiteContext: {
            componentIds: ['LanguageComponent', 'CurrencyComponent'],
        },
        SiteLinks: {
            componentIds: ['StoreFinder'],
        },
        SiteLogo: {
            componentIds: ['Logo'],
        },
        SearchBox: {
            componentIds: ['SearchBox'],
        },
        MiniCart: {
            componentIds: ['MiniCart'],
        },
        SiteLogin: {
            componentIds: ['LoginComponent'],
        },
        NavigationBar: {
            componentIds: ['CategoryNavigationComponent'],
        },
        BottomHeaderSlot: {
            componentIds: ['BreadcrumbComponent'],
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function defaultCmsContentConfig() {
        return {
            cmsStructure: {
                components: __assign({}, headerComponents, cartComponents),
                slots: __assign({}, defaultPageHeaderConfig),
                pages: [defaultCartPageConfig],
            },
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageLayoutModule = /** @class */ (function () {
        function PageLayoutModule() {
        }
        PageLayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, OutletModule, PageSlotModule],
                        declarations: [PageLayoutComponent],
                        providers: [PageLayoutService],
                        exports: [PageLayoutComponent],
                    },] }
        ];
        return PageLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogoutModule = /** @class */ (function () {
        function LogoutModule() {
        }
        LogoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1$2.RouterModule.forChild([
                                {
                                    path: 'logout',
                                    canActivate: [LogoutGuard],
                                    component: PageLayoutComponent,
                                },
                            ]),
                        ],
                    },] }
        ];
        return LogoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterComponent = /** @class */ (function () {
        function RegisterComponent(auth, routing, userService, globalMessageService, fb) {
            this.auth = auth;
            this.routing = routing;
            this.userService = userService;
            this.globalMessageService = globalMessageService;
            this.fb = fb;
            this.userRegistrationForm = this.fb.group({
                titleCode: [''],
                firstName: ['', forms.Validators.required],
                lastName: ['', forms.Validators.required],
                email: ['', [forms.Validators.required, CustomFormValidators.emailValidator]],
                password: [
                    '',
                    [forms.Validators.required, CustomFormValidators.passwordValidator],
                ],
                passwordconf: ['', forms.Validators.required],
                newsletter: [false],
                termsandconditions: [false, forms.Validators.requiredTrue],
            }, { validator: this.matchPassword });
        }
        /**
         * @return {?}
         */
        RegisterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.titles$ = this.userService.getTitles().pipe(operators.tap(function (titles) {
                    if (Object.keys(titles).length === 0) {
                        _this.userService.loadTitles();
                    }
                }));
                this.subscription = this.auth
                    .getUserToken()
                    .pipe(operators.switchMap(function (data) {
                    if (data && data.access_token) {
                        _this.globalMessageService.remove(i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                        return _this.routing.getRedirectUrl().pipe(operators.take(1));
                    }
                    return rxjs.of();
                }))
                    .subscribe(function (url) {
                    if (url) {
                        // If forced to login due to AuthGuard, then redirect to intended destination
                        _this.routing.goByUrl(url);
                        _this.routing.clearRedirectUrl();
                    }
                    else {
                        // User manual login
                        _this.routing.back();
                    }
                });
            };
        /**
         * @return {?}
         */
        RegisterComponent.prototype.submit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _a = this.userRegistrationForm.value, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, titleCode = _a.titleCode;
                /** @type {?} */
                var userRegisterFormData = {
                    firstName: firstName,
                    lastName: lastName,
                    uid: email,
                    password: password,
                    titleCode: titleCode,
                };
                this.userService.register(userRegisterFormData);
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                this.globalMessageService
                    .get()
                    .pipe(operators.filter(function (data) { return Object.keys(data).length > 0; }))
                    .subscribe(function (globalMessageEntities) {
                    if (globalMessageEntities[i1$1.GlobalMessageType.MSG_TYPE_ERROR].some(function (message) { return message === 'This field is required.'; })) {
                        _this.globalMessageService.remove(i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                        _this.globalMessageService.add('Title is required.', i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                    }
                });
            };
        /**
         * @return {?}
         */
        RegisterComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
            };
        /**
         * @private
         * @param {?} ac
         * @return {?}
         */
        RegisterComponent.prototype.matchPassword = /**
         * @private
         * @param {?} ac
         * @return {?}
         */
            function (ac) {
                if (ac.get('password').value !== ac.get('passwordconf').value) {
                    return { NotEqual: true };
                }
            };
        RegisterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-register',
                        template: "<section class=\"cx-page__section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <h1 class=\"cx-section__title\">\n          {{ 'register.createAccount' | cxTranslate }}\n        </h1>\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of (titles$ | async)\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ route: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ route: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
                    }] }
        ];
        /** @nocollapse */
        RegisterComponent.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.RoutingService },
                { type: i1$1.UserService },
                { type: i1$1.GlobalMessageService },
                { type: forms.FormBuilder }
            ];
        };
        return RegisterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterComponentModule = /** @class */ (function () {
        function RegisterComponentModule() {
        }
        RegisterComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            LoginModule,
                            forms.ReactiveFormsModule,
                            i1$2.RouterModule,
                            i1$1.UserModule,
                            i1$1.UrlModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    RegisterCustomerComponent: {
                                        selector: 'cx-register',
                                    },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [RegisterComponent],
                        exports: [RegisterComponent],
                        entryComponents: [RegisterComponent],
                    },] }
        ];
        return RegisterComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserComponentModule = /** @class */ (function () {
        function UserComponentModule() {
        }
        UserComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            LoginModule,
                            LoginFormModule,
                            forms.ReactiveFormsModule,
                            i1$2.RouterModule,
                            i1$1.UserModule,
                            i1$1.UrlModule,
                            RegisterComponentModule,
                        ],
                    },] }
        ];
        return UserComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ PWAModuleConfig = /** @class */ (function (_super) {
        __extends(PWAModuleConfig, _super);
        function PWAModuleConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PWAModuleConfig;
    }(i1$1.ServerConfig));
    /** @type {?} */
    var defaultPWAModuleConfig = {
        pwa: {
            enabled: false,
            addToHomeScreen: false,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToHomeScreenService = /** @class */ (function () {
        function AddToHomeScreenService(config, globalMessageService, winRef) {
            this.config = config;
            this.globalMessageService = globalMessageService;
            this.winRef = winRef;
            this.canPrompt = new rxjs.BehaviorSubject(false);
            this.canPrompt$ = this.canPrompt.asObservable();
            if (this.config.pwa.addToHomeScreen) {
                this.init();
            }
        }
        /**
         * @return {?}
         */
        AddToHomeScreenService.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.winRef.nativeWindow) {
                    this.winRef.nativeWindow.addEventListener('beforeinstallprompt', function (event) {
                        event.preventDefault();
                        _this.deferredEvent = event;
                        _this.enableAddToHomeScreen();
                    });
                    this.winRef.nativeWindow.addEventListener('appinstalled', function () {
                        _this.globalMessageService.add('SAP Storefront was added to your home screen', i1$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                        _this.disableAddToHomeScreen();
                        _this.deferredEvent = null;
                    });
                }
            };
        /**
         * @return {?}
         */
        AddToHomeScreenService.prototype.enableAddToHomeScreen = /**
         * @return {?}
         */
            function () {
                this.canPrompt.next(true);
            };
        /**
         * @return {?}
         */
        AddToHomeScreenService.prototype.disableAddToHomeScreen = /**
         * @return {?}
         */
            function () {
                this.canPrompt.next(false);
            };
        /**
         * @return {?}
         */
        AddToHomeScreenService.prototype.firePrompt = /**
         * @return {?}
         */
            function () {
                if (this.deferredEvent) {
                    this.deferredEvent.prompt();
                }
            };
        AddToHomeScreenService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AddToHomeScreenService.ctorParameters = function () {
            return [
                { type: PWAModuleConfig },
                { type: i1$1.GlobalMessageService },
                { type: i1$1.WindowRef }
            ];
        };
        return AddToHomeScreenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ AddToHomeScreenComponent = /** @class */ (function () {
        function AddToHomeScreenComponent(addToHomeScreenService) {
            this.addToHomeScreenService = addToHomeScreenService;
        }
        /**
         * @return {?}
         */
        AddToHomeScreenComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
            };
        /**
         * @return {?}
         */
        AddToHomeScreenComponent.prototype.prompt = /**
         * @return {?}
         */
            function () {
                this.addToHomeScreenService.firePrompt();
            };
        return AddToHomeScreenComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToHomeScreenBannerComponent = /** @class */ (function (_super) {
        __extends(AddToHomeScreenBannerComponent, _super);
        function AddToHomeScreenBannerComponent(addToHomeScreenService) {
            var _this = _super.call(this, addToHomeScreenService) || this;
            _this.addToHomeScreenService = addToHomeScreenService;
            return _this;
        }
        AddToHomeScreenBannerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-add-to-home-screen-banner',
                        template: "<div *ngIf=\"(canPrompt$ | async)\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addSapStorefront' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AddToHomeScreenBannerComponent.ctorParameters = function () {
            return [
                { type: AddToHomeScreenService }
            ];
        };
        return AddToHomeScreenBannerComponent;
    }(AddToHomeScreenComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToHomeScreenBtnComponent = /** @class */ (function (_super) {
        __extends(AddToHomeScreenBtnComponent, _super);
        function AddToHomeScreenBtnComponent(addToHomeScreenService) {
            var _this = _super.call(this, addToHomeScreenService) || this;
            _this.addToHomeScreenService = addToHomeScreenService;
            return _this;
        }
        AddToHomeScreenBtnComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-add-to-home-screen-btn',
                        template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"(canPrompt$ | async)\"></ng-content>\n</span>\n"
                    }] }
        ];
        /** @nocollapse */
        AddToHomeScreenBtnComponent.ctorParameters = function () {
            return [
                { type: AddToHomeScreenService }
            ];
        };
        return AddToHomeScreenBtnComponent;
    }(AddToHomeScreenComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} pwaConfig
     * @return {?}
     */
    function pwaConfigurationFactory(pwaConfig) {
        return { enabled: (pwaConfig.production && pwaConfig.pwa.enabled) || false };
    }
    /**
     * @param {?} addToHomeScreenService
     * @return {?}
     */
    function pwaFactory(addToHomeScreenService) {
        /** @type {?} */
        var result = function () { return addToHomeScreenService; };
        return result;
    }
    var PwaModule = /** @class */ (function () {
        function PwaModule() {
        }
        PwaModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(defaultPWAModuleConfig),
                            serviceWorker.ServiceWorkerModule.register('/ngsw-worker.js'),
                            i1$1.I18nModule,
                        ],
                        providers: [
                            { provide: PWAModuleConfig, useExisting: i1$1.Config },
                            {
                                provide: serviceWorker.ɵangular_packages_service_worker_service_worker_b,
                                useFactory: pwaConfigurationFactory,
                                deps: [i1$1.Config],
                            },
                            {
                                provide: i0.APP_INITIALIZER,
                                useFactory: pwaFactory,
                                deps: [AddToHomeScreenService],
                                multi: true,
                            },
                            AddToHomeScreenService,
                        ],
                        declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
                        exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
                    },] }
        ];
        return PwaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SeoMetaService = /** @class */ (function () {
        function SeoMetaService(ngTitle, ngMeta, pageMetaService) {
            this.ngTitle = ngTitle;
            this.ngMeta = ngMeta;
            this.pageMetaService = pageMetaService;
        }
        /**
         * @return {?}
         */
        SeoMetaService.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.pageMetaService
                    .getMeta()
                    .pipe(operators.filter(Boolean))
                    .subscribe(function (meta) { return (_this.meta = meta); });
            };
        Object.defineProperty(SeoMetaService.prototype, "meta", {
            set: /**
             * @protected
             * @param {?} meta
             * @return {?}
             */ function (meta) {
                this.title = meta.title;
                this.description = meta.description;
                this.image = meta.image;
                this.robots = meta.robots || [i1$1.PageRobotsMeta.INDEX, i1$1.PageRobotsMeta.FOLLOW];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SeoMetaService.prototype, "title", {
            set: /**
             * @protected
             * @param {?} title
             * @return {?}
             */ function (title) {
                this.ngTitle.setTitle(title || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SeoMetaService.prototype, "description", {
            set: /**
             * @protected
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.addTag({ name: 'description', content: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SeoMetaService.prototype, "image", {
            set: /**
             * @protected
             * @param {?} imageUrl
             * @return {?}
             */ function (imageUrl) {
                if (imageUrl) {
                    this.addTag({ name: 'og:image', content: imageUrl });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SeoMetaService.prototype, "robots", {
            set: /**
             * @protected
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.addTag({ name: 'robots', content: value.join(', ') });
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @protected
         * @param {?} meta
         * @return {?}
         */
        SeoMetaService.prototype.addTag = /**
         * @protected
         * @param {?} meta
         * @return {?}
         */
            function (meta) {
                if (meta.content) {
                    this.ngMeta.updateTag(meta);
                }
            };
        SeoMetaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SeoMetaService.ctorParameters = function () {
            return [
                { type: i1.Title },
                { type: i1.Meta },
                { type: i1$1.PageMetaService }
            ];
        };
        /** @nocollapse */ SeoMetaService.ngInjectableDef = i0.defineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(i0.inject(i1.Title), i0.inject(i1.Meta), i0.inject(i1$1.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
        return SeoMetaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function initSeoService(injector) {
        /** @type {?} */
        var result = function () {
            /** @type {?} */
            var service = injector.get(SeoMetaService);
            service.init();
        };
        return result;
    }
    var SeoModule = /** @class */ (function () {
        function SeoModule() {
        }
        SeoModule.decorators = [
            { type: i0.NgModule, args: [{
                        providers: [
                            {
                                provide: i0.APP_INITIALIZER,
                                useFactory: initSeoService,
                                deps: [i0.Injector],
                                multi: true,
                            },
                        ],
                    },] }
        ];
        return SeoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StorefrontComponent = /** @class */ (function () {
        function StorefrontComponent(hamburgerMenuService, routingService) {
            this.hamburgerMenuService = hamburgerMenuService;
            this.routingService = routingService;
            this.isExpanded$ = this.hamburgerMenuService.isExpanded;
        }
        /**
         * @return {?}
         */
        StorefrontComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.navigateSubscription = this.routingService
                    .isNavigating()
                    .subscribe(function (val) {
                    _this.startNavigating = val === true;
                    _this.stopNavigating = val === false;
                });
            };
        /**
         * @return {?}
         */
        StorefrontComponent.prototype.collapseMenu = /**
         * @return {?}
         */
            function () {
                this.hamburgerMenuService.toggle(true);
            };
        /**
         * @return {?}
         */
        StorefrontComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.navigateSubscription) {
                    this.navigateSubscription.unsubscribe();
                }
            };
        StorefrontComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-storefront',
                        template: "<header\n  [class.is-expanded]=\"isExpanded$ | async\"\n  (keydown.escape)=\"collapseMenu()\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n"
                    }] }
        ];
        /** @nocollapse */
        StorefrontComponent.ctorParameters = function () {
            return [
                { type: HamburgerMenuService },
                { type: i1$1.RoutingService }
            ];
        };
        StorefrontComponent.propDecorators = {
            startNavigating: [{ type: i0.HostBinding, args: ['class.start-navigating',] }],
            stopNavigating: [{ type: i0.HostBinding, args: ['class.stop-navigating',] }]
        };
        return StorefrontComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainModule = /** @class */ (function () {
        function MainModule() {
        }
        MainModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            GlobalMessageComponentModule,
                            UserComponentModule,
                            CmsModule,
                            OutletRefModule,
                            PwaModule,
                            PageLayoutModule,
                            SeoModule,
                            PageSlotModule,
                        ],
                        declarations: [StorefrontComponent],
                        exports: [StorefrontComponent],
                    },] }
        ];
        return MainModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var layoutModules = [OutletRefModule, StyleRefModule];
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: __spread([
                            MainModule
                        ], layoutModules, [
                            i1$1.ConfigModule.withConfig(defaultLayoutConfig),
                        ]),
                        providers: [{ provide: LayoutConfig, useExisting: i1$1.Config }],
                        exports: __spread([MainModule], layoutModules),
                    },] }
        ];
        return LayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var missingProductImgSrc = 
    // tslint:disable-next-line:max-line-length
    'data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABVAAD/4QOIaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjEwOTUyZjYtMmRmOS00ZmIxLWJmZDItODBlZDVjZDY3YjhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2RkNERDA2RDQyQjExRTVBRUE3REEyNEFBNDQxNDBDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RkNERDA1RDQyQjExRTVBRUE3REEyNEFBNDQxNDBDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZjI5Zjc3Zi1hZWM5LWY0NDgtOTM0MC1iZGJkYjk2MDk3OTIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MDcyNjk0NS0zNjQ0LTExNzgtODI2OC1mMDQzMTA0ZTU5MWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAQEBAQECAQECAwIBAgMDAgICAgMDAwMDAwMDBQMEBAQEAwUFBQYGBgUFBwcICAcHCgoKCgoMDAwMDAwMDAwMAQICAgQDBAcFBQcKCAcICgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEsASwDAREAAhEBAxEB/8QArQABAAIDAQEBAQAAAAAAAAAAAAcIBAUGAwIBCQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEFEAABAwMCAwQCCgwKBwgDAAABAAIDBAUGEQchEggxQVETYRRxgeEiMlKTFVYXkUKS0iNzs3S0FjY3obHRYnJTVJRVGPCCojNjJHXBo9M0ZCW1OLKkSBEBAAICAQQCAgMBAQAAAAAAAAECEQMxIVESEzIEQSLwYRRDcf/aAAwDAQACEQMRAD8A/v4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPx72saXvIDANSTwAA7yg1D9wsBjeY5L5b2vadC01lMCD6RzrvjKPlHd+fWJt/8A47b/AO+033674z2PKO59Ym3/APjtv/vtN9+njPY8o7n1ibf/AOO2/wDvtN9+njPY8o7n1i7ff47b/wC+0336eM9jyju2Ntu1rvNP65aKmKqpCdBLTSMlZr/SYSFyYw7E5ZC46ICAgICAgICAgICAgICAgICAgICAgICAgICAgICDUZ1mlm29xWsy2/O0oKRnNyN055Hk8rI2A/bOcQAu1rmcI2tiMqebob455upcJJLxVPp7ESfItdM9zaeNmvAOA053eLne1oOC201xVivsmzjlNAQEBAQbHGstybDri27YvXTUNwaQfMp3lvNpx0cOxw9BBC5MRPLsWmOFsOnTfmPd6zy2y9NbDmtA1rqlkY0ZPETyiZg7uPBw7j2cDoMmzX4tmrZ5f+pKVS0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQV765cuLWWXBqd50d5l0qmA8OH4GHUfdrToj8s32LcQrwtDMmrGeivKr/AI7RXyqvFPST1kMdSaV0Mj3RiRoe1rnAjjoePDtVM74iV8aJmGd/kUyL6QU392l++XP9Ednf8/8AZ/kUyL6QU392l++T/RHY/wA/9n+RTIvpBTf3aX75P9Edj/P/AG/R0KZFrxyCm0/Npfv0/wBEdj/P/aHs9wy6be5dXYfeC11dRPDDJHryPa5oex7eYA6OaQVdW2YyptXxnDd9P+XHC93LNdXvLKKWYUNV4GKp/Anm9AJDvaUdlcw7rtiy7Cwt4gICAgICAgICAgICAgICAgICAgICAgICAgICAgpb1HZZ+uG8V4rY389FSyC3U+nYGUo8o6egvDj7a3aoxVh2zmzR7Y4s7NdwbPi2msVZVRMmH/BaeeU+0wFdvOIyjSMzhe1rWsaGMGjANAB2ABYHoP1AQEBBWXrfxL1DLrXmUDdIbhTupJnD+tpnagn0ljwPaWrRPTDL9ivXKD2PfG8SRkte0gtI4EEdhCvZ17ds8pbmu39oynXWWspYpJj/AMYN5JR7TwQsFoxOHoVnMZb1RSEBAQEBAQEBAQEBAQEBAQEBAQEBAQYOS5HacRsFXkt9k8q00Ubp536anlb3ADtJPADvK7EZcmcQrZlHW1n1bc3uxOipaKzNJETaljp5nN14F7g5rQT4AcPErTGiPyyzvn8Nb/nN3k/9D/dnffqXoq577H+c3eT/AND/AHZ336eip77NjjPWzuDR3NjsqoqStsxIErKZj4JmjXiWO5nN19BHHxC5OiPw7G+fynu77mWNu1NVuhZZfNtIopK2mcRoS8NIYxwPY7zPekeKzRXrhom/TKj080tTM+oncXzyOL3ud2lzjqSfbW9gTP0S4mbnnlflszNae103kxOI4CaqJaND+La77Ko3z0wv0R1ytCsrWICAgIIz6tMS/WbZ2rrYW81baZI7lH48jT5cv+w8n2lbpnFlW6uaqgLYxLQ9EuWfOeBV+JzO1qLXU+bE3XiIaoF44f02v+ysu+OuWvRPTCalQvEBAQEBAQEBAQEBAQEBAQEBAQEBB51NVS0cRnq5GxQjtfI4NaPbdwQRT1c3y21WzFTT2+rile+qpQ9kMrHEtEnNxDT4gFXaY/ZTun9VTlrYxAQEEo1OaG2dKNJiTJdau5XadhjDuLaaDlndwHHQylqq8f3yt8v0wi5Wqlruki22bEtp4664VMENzu08lc9sksbXiMHyYwQT2aMLvbWTdOZbNMYhKH6x49/b6b5eL+VVYlbmD9Y8e/t9N8vF/KmJMwfrHj39vpvl4v5UxJmD9Y8e/t9N8vF/KmJMwfrHj39vpvl4v5UxJmGNea/FL7aKqyVtdTuo6yGSllHnRcWSsLHd/gV2ImCZiVE7za5rJeKqzVJBqKSaSme5vEF0bywkEdx0W+Jy8+YwkrpBy5uN7uRWuofy0V3gkoTr2ea38NGfZ1aWj2VVurmFumcWWz9do/61n3TVjbD12j/rWfdN/lQPXaP+tZ903+VA9do/61n3Tf5UD12j/rWfdN/lQfTKmnldyxyNc7wa4E/wIPtAQEBAQEBAQEBAQEBAQc1u5uNRbWYNV5bUsEtVGBFSU5OnmzyHlY06dw7T6AVKlfKcI3t4xlTLNM+y7cG7PvGWVslVUuJcxjnERRA/axxj3rQPQFurWI4YbWmeWmXURAQEBAQEBB901NU1k7aakjdLUvOjI42lznHwAbxKDrbLsDvJf2Nlt+PVYid2OqWtpgR4/wDMFihOysflONdp/Ddt6SN8nN5jbImnwNZS6/wPUfdVL02YN06Y98LSC+WxSTRjjrSzU83+zG8u/gXY217uTqtH4cfesbyHG6j1XIaGooansDKuGSEnTwEgGqsiYlCYmGEjggIP3U+KBqfFA1PiganxQNT4oPSjrq231LK2gmfBWRnmjlhe5j2kd4c0ggoLQdKm+113Bp58JzGbz8looxPS1btA+opwQ1wf4vYSOPeDx4gk5d2vHWGvTsz0lMyoXiAgICAgICAgICAgIII66nuGM2BgPvDVVBI7iRE3T+NaPr8yz/Y4hWtaWUQEBAQEBBkWu1XK93CK02eCSquc7hHDTwNL5HuPcGt4lJnDsRlPW1vRZLPHFd91Kkxa6PFponDnHommGoHpDPulnvv7NFNHdOOKbf4Vg1MKXErZT0LNNC+GMeY7+nI7V7vbJVE2meV8ViOG4UUhAQeFxtdtvFI6gu1PFVUL+D4aiNsjHey14IKROCYyifcjo8wDKI5K7DXGx3s6uDI9ZKR7vAxk6t/1CAPAq6u6Y5U20RPCum4e1+abX3X5qy6kMPNr5FTH7+nnA745BwPpB0I7wFpreLcMtqTXlzykiICAgICAgk3pDc5u+FAGnQOgqwfSPV3H+MKrd8Vun5LfLG2iAgICAgICAgICAgIIH66v2cx/85qPyTVo+vzLP9jiFbFpZRAQEBAQbTDcNyDPcip8XxmAz3SoOgHYxjR8J73dzWjiT/2rlrREZdrWZnELgbM7GYttBaQKRrarKZmgVlzkaOd2vEsj1+AzXuHb3692O+ybNtNcVdnVVVNQ0z6ytkbDSRNMkssrgxjGtGpc5ztAAB3lVrEPbjdZeE43LJbcJp3Xu4t1aajmMNI09nB5Bc/T0AA9xV9dEzyotviOESZH1ab0X57vVa6K20xOoit8DBoPDnm53/wq2NNYUzutLSU+72+N3le6hv11nkaOZ4pp5yGjs1LY+ACl4V7I+du7NtnUhvnjtQA69TyFvwoa+OObX2fNaXfYK5OqsuxttCRcG64ahsjKTcS1NdCeDq21khw9JhlJB9Ojx7Crto7La/Y7pzw7OsTz+1C9YhXR1tDwD/LOj43Ea8sjHaOafQ4BUWrMctFbRPD2ynFcfzSyTY9k9KyrtE40fFIOw9zmkcWuHcQdQuRMxwTETyqPv1sJd9n7sKykL6vCap5bR1jh76Nx4+TNpwDgBwPY4cR3gbNezyY9mvx/8R4rFQgICAgIJN6Rf34278TWfozlXu+K3T8lvlibRAQEBAQEBAQEBAQEED9dX7OY/wDnNR+SatH1+ZZ/scQrYtLKICAgIPqGGWolbT07S+d5DGMYC5znOOgAA4kkoLj9PGzFLtNiTZLgxrszr2tluE4GpjB4tgafBnfp2nj2aLFsv5S3aqeMOwy3LLDg+P1GTZJOKe00zeaR54kk8GtaO0uceAAUIjM4TtOIyqJvTv8A5Vu7XvpS51Fhsbtaa2xu4O0PB85Hw39/gO7vJ2U1xVi2bJs4FWKxBO3Qt+1V+/NIfyxVH2OIaPr8ysReccx/Iqc0l/oaetpnDQx1cMcrfsPBWaJmGmYiUWbjdHWA5LDJW4U51kvXFzY2l0tI8+Do3Eubr4tOg8Cra7pjlTbRE8IFrKDdTp1zZj3mS23tmpimjPPT1UQPHQ/BkYe8EajvAK0Zi8M/WkrPbG752TeOyuAa2ky2laDXUGuo07PNi14lhPttPA9xOXZr8WvXs8nW5RjNlzKwVWM5BCJ7RVsMUsZ7ePEOae5zTxB7ioROE5jMYUn3X24um1ma1WJ3HV8LD5tHUEaCeneTyP8AZ4aEdxBW6lvKMsF6+M4c2pIiAgICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP/nNR+SatH1+ZZ/scQrYtLKICAgIJg6O9t48rzyTMLlHzWmxhskQcODquTXyvuAC72dFTutiML9FczlatZGtUPqe3kn3JzB9htMuuGWmR0VMGH3s8w94+c+Pe1vo495WzVTxhi238pRgrVQgIJN6Zt3MV2kvlzuGVNndT1kEcMXqkbZCHNk5jzBzm8NFVtpNuFuq8V5WIw3qI2iziobQ2m7MhuTzyspq9rqZ7iewNMoDHE+DXErNbXaGmu2su2UFjRbibd4zudjcuNZNCHwP1dBO0DzaeXTRskbj2EfYI4HgpVtNZ6I2rFoxKoV2tub9Ou6TWMk8u9W57Zqedmoiqqd/YdO9j26hw7jqO0LZExeGKYmkrg7f5tadxMQosvsx0pKtnM6MkF0UjTyvjdp3tcCPT2rHauJw21t5RlwPVzttFmG3Tsooo9b9Y+apa4D3z6U6ecw+wAHj2D4qzTbE4V7q5jKpa1sYgICAgk3pF/fjbvxNZ+jOVe74rdPyW+WJtEBAQEBAQEBAQEBAQQP11fs5j/5zUfkmrR9fmWf7HEK2LSyiAgICC43SxiUeK7N26UtArbnz3Sd2mhPnHSP/ALprVi22zZt0xirJ6ks7lwLaa4V1G/ku1bpbKRwOhD5wQ5w9LYw4j0pqrmXdtsVUwW1hEBAQEBBNfTf1K3PGblT4NntS6oxSctgpKydxdJRvJ0aHOPExE8OPwe7hwVG3VnrC/Vtx0laBZWtEvV7txDlm3TsspIx8+WPWo5gPfPpXECZp9DeD/RofFXabYnCndXMZcT0Q53LT3e5bd1b/APlahnzlRtJPvZY9GSgf0mkH/VU99fyr0W/CxlXS09dSS0NWwPpZmOilY7scx45XA+yCszUoZm2OS4hl9zxibXmoKmalBP2zY3lrXe23Qr0KzmMvOtGJw1a64ICAgk3pF/fjbvxNZ+jOVe74rdPyW+WJtEBAQEBAQEBAQEBAQQP11fs5j/5zUfkmrR9fmWf7HEK2LSyiAgIP1rS5wa3i48AEF/catrLPjlBaIxpHS00FM0DuEcQZ/wBi8+ZzL0YjEIG6671Jrj2OsP4I+s1sg8SOSJh//JaPrxyz/YnhXpaGYQEBAQEBBc7ppzOozfaG21tc4vuVHzW2oe46lzqfQMJPiYy0n0rFtrizdqtmrtbrbqe8WuptFYNaSqikppR26skYWO/gKhE4WTGVNNkauow/fezQudyyx15tspHDUSl1K7X7pbdnWrDr6WXTWFuU86sbVHbN77m+IaMqo6aq09LoGsd/C0rbpn9WLdH7I3VioQEBBJvSL+/G3fiaz9Gcq93xW6fkt8sTaICAgICAgICAgICAggfrq/ZzH/zmo/JNWj6/Ms/2OIVsWllEBAQetC5rK6F7/gB7CfYDgg/oLGQ6Nrm/BIBC856Ss/XOx4zKySn/AHZopGj2ROSf4wtX1+JZfscw2uy3TFtfuFtna8uu8lZ86VbZfPEE7GsDo53xaAGM6cG+K5fbMTh3Xqi0ZdBeejXamls9XVUDq91fHDLJA11RGQZGsJaD+D8VGN0pTohVhamQQEBAQdztl1BZ5tPY5sfxdtK6gnnNW81cT5HB7mNjOha9o00aO5Qvri3Kym2aujHWlvADr5VuPo9Wl/8AFUPRVL32cRg1bWZBu9aLlK0ev1l3pql7Yxo3nkrGyO5R3DUqy3SquvWy8ywPQVL6ynsdvM8N7W0VKHez74/xFbNHxY9/yRQrVIgICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP8A5zUfkmrR9fmWf7HEK2LSyiAgICC+m395jyLBrPfYjzNq6OmnJ/nOhaXD2jqFgtGJehWcwh7rmxySpx+yZVE0ltLPNRTOHcKhgkZr6NYz9lXaJ64U/YjpEtl0T5TFc9uqzF3uHrlrqnPDNePk1I52nT+mHrm+OuXdE9MJmVC9Sjfzbmp213JrrUIy2y1L3Vttfp70wSuLg0HxYdWn2Fu128oYdlfGXFqasQEBAQEHf9MeOy5FvVZmNGsFE99xmPxW07C5p+75Qq9s4qs1Rmy5ixNymXU7ehe97r3KwgxUz4qJund5ELY3D7sFbdUYrDDtnNpcCrFYgICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP/nNR+SatH1+ZZ/scQrYtLKICAgILYdHGaMyHa843M/W42WZ0BaSNfImJmiPsalzfaWTdXEtmi2Ydxu1gsW4+3tzxI6CrqIi+ke7sbURnzIjr3DmAB9BKrpbxnKy9fKMKrbCbi1Gz257H3sOhtM7nWy7RO4GIc+nOR4xvGp9GoWvZXyhj128ZXKiljmjbNC4PheA5j2kEOBGoII7QVibnMbs7TY3u7jZsV8BirIiZKGujaDJTyEaajXTVp+2brx9BAInS81lC9ItCp24+xW422VVJ89UL57M0ny7lRtdLTub3EuA1YfQ8Ba67Isx21zVxymgICAgILMdFO3Utpx+t3FuLC2ouX/KUPMND6tE7V7x6HyDT/VWXfbrhq0VxGUyZRkFDieOV2S3I6UNDBJVSekRtLtB6SeAVMRmV8ziMqGXe51V7u1Vea481bVyyVMzvF8ry938JXoRGHnzOWMjggICCTekX9+Nu/E1n6M5V7vit0/Jb5Ym0QEBAQEBAQEBAQEBBA/XV+zmP/nNR+SatH1+ZZ/scQrYtLKICAgIO96ctz2bYbjQVtwk5Mbrx6jcST71jHuBZKf6DtCfRqq9tPKFmq/jK5rXNe0PYQWEagjiCCsTcrr1dbGzQ1Mu7GKwl9NJob1BGNeRwGgqQB3Hsf4Hj3nTTp2fiWbdr/MMfpn6lqXHqaDbvcOfkszNI7ZcpD72AE8IZiexnxXfa9h4dndurPWHNW3HSVkY5I5o2zQuD4ngOa5pBBBGoII7llan0QCND2IIB63LLZrdjdlq7fSQQVctXMJJYYo2PePK10c5oBK0aJ6s2+OkK5LSzCAg7TZHZ68bvZWy3QB0WOUxbLc6zThHFr8Bp+O/TRo9vsChsv4ws108pXQtdsoLLbYLRaomwW2ljZBBCwaNZGxvK1o9gBYpnLdEYQZ1o7px0drg2stMmtbVclZdC0/AhaeaKM6d7nDmI8APFX6Kfln33/Cty0sogICAgk3pF/fjbvxNZ+jOVe74rdPyW+WJtEBAQEBAQEBAQEBAQQP11fs5j/wCc1H5Jq0fX5ln+xxCti0sogICAgILL9J2/MN5t8O12Wz6XymbyWmolI/DwtHCEk/bsHwfFvpHHNu146w1admekpyliinidDM0PheC17HAFrmkaEEHtBWdoV13z6RaqGabK9p4vMpXay1FlB9+w9pNMT2j+YeI7teAGnXu/Es2zT+YcBtzv/ufs9ObE1xqLPA4sltFza/SIg++awnR8Z9A4a9oVltcWVV2TVNGLdau2l1ia3JqaqtVZw5veesw6+h8Wj/ssVE6JXxvhxnVlutt/uNi9nhw25MraiCplkmjayVj2NdFoCRK1verNNJieqG68WjogpXs4gkTZ3pwzTdSeK4zsdbcN1BfcJ2kGVvhTsOheT8b4I8deCrvtiq2mqbLY4Tg+Nbe4/DjWLU4p7bFxJ7ZJXke+kkd2uce8+0NBoFjtaZnq2VrERiGo3i3asm0WKSXu4Fst3lDordRa6Onm04a6cQxva493skKVKeUo3v4wpdkWQXbKr5VZHfJTNdqyR088h73O7gO4AcAO4cFuiMMMzlhI4ICAgIJN6Rf34278TWfozlXu+K3T8lvlibRAQEBAQEBAQEBAQEED9dX7OY/+c1H5Jq0fX5ln+xxCti0sogICAgIPuCeelnZU0z3R1MbhJHJGS1zXNOoII4ggoLKbDdWNvvUMGI7ozNpr2NIqe7P0bDUdwEx7GP8A53wT6D25tmnHWGrXuz0lObXNe0PYQWEagjiCCs7Q5zO9o9vNyI9MttkU9WBysq2axVDQOzSWPRxA8CSPQpVvNeEbUi3KKMj6GLLO90uJ3yanaTq2GvhZONPDniMZ/wBkq6Psd4Uz9ftLnpOhrOw8iK80Do+4uFQ0/YDD/Gpe+Ef88tjZ+hSvdKHZBkEbIftmUdM57j7DpHtA+wuT9j+nY+v/AGkfBul7aTCJGVfqRul1ZoW1F0Im0I46tiAbEOPYeUkeKqttmVtdVYSG1rWtDWjRo4ADsAVaxw+8O/WHbRULoqx4rMre3mprXC4eYdRwdKRryM9J4nuBVlNc2V32RVUjP9wMm3KyOXJspn82tf72ONuoihjB1bHG3jo0fZPadStlaxWMQx2tNpzLSLqIgICAgIJN6Rf34278TWfozlXu+K3T8lvlibRAQEBAQEBAQEBAQEEI9cNnuFZhNpu9NGXUNHVPbUvH2nnRhrCfQSNFfonqo+xHRWJamQQEBAQEBAQd9tf1G7jbXsZbqOcV+Ns0At1cXPYxvhE8HmZ7APL6FXfVFllNs1TphXWLtbkbGQ5F51kuJ4OFS0zQa/zZYQTp6XNaqLaZhorviUh2XO8KyOMS2G7UdY13YKeoiefbAdqFVNZhbFoltgQ4atOo8QuOsW4XuzWmMy3Wrhpoh2uqJWRge28hdw5M4cVlfU3s1ikbue7Nr6tuulPa2moc4jwe3SMe24KcarShO2sIb3I6zMyyJkltwSnFmtrtWmqcRLWOaeHA6cjNR4AkdxV9dERyotvmeEN1dXVV9TJW10r5qyVxfLLK4ve9x4kuc7Ukn0q5Q80BAQEBAQEEp9HdvqqvemnqoGF0FLS1U0zgODWuj8ka/wCs8KrdP6rtEfstwsbYICAgICAgICAgICAgwMoxqz5jj9XjF/i860VkZhmZ2HQ8QWnuIIBB7iF2JxOXJjMYVY3G6SdyMSr3yYvF892F7tIZKbQVDWniBLEdOI8W6j2Oxa67onlktpmOHMfULvJ9HK35L3VL2V7oeu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127H1C7yfRyt+S91PZXueu3Y+oXeT6OVvyXup7K9z127PZuyu+bG8jLHcQzwDXAfxp51PCzzfsTvPK7nkx6uc/xdGSf4Snsr3PXbs+fqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9dux9Qu8n0crfkvdT2V7nrt2PqF3k+jlb8l7qeyvc9duzNsXTZvNfbiy3tsstI13wqiu0hiYPEuOp+wCVydtYdjVaVltjNkLTs1YpIGyiryas5XV9by8oPLryxxg8QxuvfxJ4nuAzbNnk1a9fi7pVrBAQEBAQEBAQEBAQEHnU1DKaIyv7Ag0FdfauaQiE8rApRCOWN851/xyuuZPnOv+OUwZPnOv8AjlMGT5zr/jlMGT5zr/jlMGT5zr/jlMGT5zr/AI5TBk+c6/45TBk+c7h8cpgy+hX3N3Y4oPoVV3I11K46/DW3VvaSuj5NyuA7XlMOZfnznX/HKYMnznX/ABymDJ851/xymDJ851/xymDJ851/xymDJ851/wAcpgyfOdf8cpgyfOdf8cpgy+4bxXxP5i7UeCYMt7arm2uj0dwkHaozCUSzFx0QEBAQEBAQEBAQEBBrcgc7yQwdhXYclpfICllHB5ATJg8gJkweQEyYPICZMHkBMmGnrM4w6gyeLDaytazJp+XyqQskLnc4JboQ3l4geK7icZczGcPjKtwMIwioipcqr2Uc87TJE2RkjuZrToSORpHakVmeC1ojlvMcZRZPbIL3Z5Wz2mpaJYZm66Pae8a8VyejsdWHkW4u1GBXX5jy67RUl3DGymB7ZXEMfroT5bXDjp4rsVmeHJvWvLrqKK31FLHVUgDqaVrZY3aaatcOYHjx7FBY5247x7UWfJHYhcbvBFkTZWUzqZzZSRLJpytLg0t+2HfwUopMxlCb1icOndS07u1oUE3P5pk23+E0zKnL7jBb2S6+U2Z+j36dvKxurnad+gUqxM8I2mI5clbt6tmL/WtobNfoXVUjgxjKiKopuZzjoAHVEbBxPpU/C0fhCL1n8tjl2WYvgkEVTltW2igncY4nSNkcHOA1I94D3LkRM8O2mI5aL6+Nnf8AHIvk6j7xS8LdkfZXu7HyAoZTweQEyYPICZMHkBMmDyAmTB5ATJhnWJpZVADsXJdhvlFIQEBAQEBAQEBAQEBBgXlnO0BdhyWt8hScPIQPIQPIQPIQPIQQdm8RPV1ZIx2ltN+Ter6/CWe3zh99VWOsu+5WH2Cof5UdwIpHyfEE1WyIu9rXVc1T0l3dHWHY9HeTS1G3tbhl1Pl3TH6uWF8byNY4ZiZBzexIJB7ShujrnunonpjsgjdStnz6433dqRxNvqLqy20B7nQsgkIHHvbGyP7K0U6Yhnv1zK1seXUmNbfRX2t4UdFb2VMp101bFThxA9J00Cx4zLX5YhVr9TLrmW2uRb0V3MbyLnHOHt14se4moLe/4czDr3cpWvyxMQyeOYmVmdsdzI8t22t+X1TtZHU2tYdRwmgBZN29nvmkjXuWW9MThrpfMZQbs7izOpTdC75nuRK+e0UnJI6jbI5oPnOeIIAWkObG1rHfBIP2StF58IxDPSPOcylKnxTpIZdaG526qskN0opo56V1Pc4GkyRuDmhzBLo/iB8IFU5v/a3FP6c91zQsZiVkkaNHGskB+RKno5R+xxDQYtL0k1ltttvrmxPyKWKnhmaYbpqalzGtcOYN5fhntB0Up80Y8E5+QqGg8hA8hA8hA8hA8hBlWuLlqAVySG3UUhAQEBAQEBAQEBAQEGJcm8wXYGFyFMOHIUwHIUwHIUwHIUwP0Rk8EEHZnFydZVhY74tKf+6kWivwlnt84ZvVJoN6MDPd58P6dGuavjLu35Q5fde/V2ye7OXwWtpbQZTb3vgDOHJJVu0dLr4teJdNPFTpHlEf0hefC0/28d18LfhXTZitFOzkramsFfU6jQ+ZU00kmh9LWcrfaSls2kvXFIdn1PZRHjeyloxqneRcr0ynY4A6H1eniZLIeHi4sHpBKhqjNsp7ZxXDnLPsb1K0mDsxiguNHBidXC4voHvbry1I53tfrAXc3vuPvuHcVKdlc5RjXfGGb0mXiVrMg2kvhLaqB0k7IieI4+rVLRr4O5fslc3RxLumeYlotgsvoNj9wL5hO4LvUmVBjgdVPa7kbLTPfyE6Anke2QkO7OzuOqlsr5xEwjqt4TiWj3bx7afHskscW1lY2rhkeXVpjqPWA1wlZycewcNVKkzMdUbxWJjCUOuORsmG2Mj+2SfkCqdHK37HEPXEpekynxy1VVbJao8ijpqaSd7i4SNqGxNLif5welvPJXwwlqSF0buUqle+eQpgOQpgOQpgOQpgOQpge9CzSXVBsVx0QEBAQEBAQEBAQEBB41beYaIMfyV1w8lA8lA8lA8lB9w04LuKDU1+1eBXPNKfcKuoOfMKUMEFZ59Q3lDAWt/BteIzoCe1q75zjDk0jOXnl+2uE5reqDIMjofWbvbHB1DN51RH5ZbIJAeWJ7Wn3wB98ClbTBasS8cu2d293FrKe4ZpbhW1VK0xwvM1RFytLuYgiF7ARr46rsXmvDlqRPLPzbbfC9xbbDZ8yovXLdTyefDGJZ4eV4aWa6072HsJGhOi5W0xw7asW5YeVbM7aZrU0VXlNt9blt0TaajD6iqayONh5g3kjka13p5gSe9di8xw5NInl0NVpINAoJuWtm0WAWfMJs9tlB5OV1DpZJqpk9To903+8JjL/L466/B7ePapzeZjCEUjOTNdo9v9wy2TLbbHU1bG8jKhpfFM1vaB5kRa4gHuJ0St5jgtSLctPZumfZqx1Ta6ms4lqmHmY6qmqJmgjiPePeWfZClO20oxqrDocz22w3cWkgt+a0XrtHTPM0LPOnh5XlvKTrA9hPDxUa2mvCU1i3LRt6Vdg3DUWH/924/+Ou+63dz017O8qoA73wVax4eSuuHkoHkoHkoHkoPSmj5X8UGUuOiAgICAgICAgICAgIMK93iz2Kk9fvlXDRUTe2arlZCwey6QgLsRlyZwxbJlWLZLzfq5c6S4cvF3qVTDPp7PlOKTWYItEsyrqaagpn1ldKyGkjHM+WVzWMaOzUucQAuYday259gl5rRbbRe7fVXEnlEFNWU0smuumnKx5KlNZhGLRP5bfkcopNdbssxW71QobTc6SqrXAlsNPUwyPIA1JDWOJ4BdmsuRaJbMvhpYH1NQ4MhYC973kBrWtGpJJ4AALjrEt2VYxe5nUlluVLWVTWmR0VLURSvDAQC4tjcTpqQNV2YmHItEvlt9sLrv8wGup/nz+xedH5/wPM/3evN8H33Z2cUwZh93PKcYsU7aO83Glo6pzRI2KqqIonlhJaHBsjgdNQRqkRMk2iGa2WOSNssRDo3AOa5p1BB4gghcdYFBf7Leppae01sFVPBwmjppo5HR8SPfBhJHEHtXZjDkTl7VU9PRU7qqskbDSsHM+SVzWMaPEl2gC5h1qqTcTb64VfqFBfrdPXAlvkw11M+TUHQjla8lS8JR8o7tzyOUUnxUzwUcD6qskbFTMHM+SRwa1o8SXcAg1lqznCL9V+oWO80NbXDgYaSsp5pPuY3EqU1mHItEt1DqBoVF1p6jcjbqCr+bam/22Ov15fIfXUrZNezTlL9VLxnsj5R3bOMtmjbLC4PhcA5r2kEEEagghRSeVdW0VspnVtymjp6Nnw5p3tjY32XPIAXcGWvtGdYRkFV6jYbzQVtb/U0lZTzP+5jcT3Ls1mHItEtrI5sMbppiGRMBc5ziAAANSST3KLrCteS43fJ3UtluNLWVLW+Y6OlqIpXBoIHMRG4nTUjiuzEw5ExL3uF2tNjibV3uqho6VzhG2WqlZEwvILg0OeQNdAeCRGSZwzIZoaiFtRTuD4HgPY9hDmua4aggjgQQuOvpAQEBAQEBAQEBAQfMsscETppTpEwFzj4ADUoKxYLYLh1abpXTIMyqpo8PtgDoaSFwBjjme4QQM1Ba3VrCXu01JHp1Gq0+uOjJWPZPVK2JdLe3WD5xR5tj76ls1GJOSknkbLFzvjMYeCWh2oBPaSFVbbMxhdXVETlGe50t/wB/OocbTRVclNiFukfC9rNS1vq8ZfPM5p0BeXe8aT2cPTrbT9K5VXze2HQbldH2D23Cay64RLVRZHQQvqo/PlErajyW87muAaNHOA4FunHuUa7pz1SvpjHRvukjcW7Z3gE9sv8AK6ou1nlbTCokJc+SCRnNFzuPa4aObr4AaqO6uJS03zCvG19bVYPfLNui13/tlHc20VXpqC1j4gXcR8eJ0gHsLRfr0ZqdMSsp1VZm3FtnaympXj168OZa4OU66slBdKRp3GJrh7YWbTXNmrdbFUYdI9gqcY31vWO13/naO2VEM3DTSRtXTcw0PgdQrd05qq0xi0tmBp17af6fs6uf8/53d/6fzswOrLGa7Md+bNjNsLRcau1RR0/OdGukFTVOa0nu5iNPbXdM4rlzdGbYdt0l7nTZPi8u32QOc3KLCPKYyXUPfSNdyN1BHbG73h9Gir3UxOVmm+Yx2aLpGaDuLnI/47P0qdS3cQjp5locvnybqW34qNuIat9LhFplna5jOLWxUr/JlnLeAc97yGtJ7AR6dZVxSufyjbN7Y/Dvqrou2imo2U9NJXw1LNNZ/WGOc/Tt5muZy8f5oCr99lnoqlemo6ekp46SmbyU0TWxxsb2Na0aAD2AqVyBOty43eKbHrNNJLDh1QZpKp0TdQ6Vj2DiNQCWsOrQSO37GjRHLPvnhtsY6Ytg8tpaDJcIuNRU0VPJDNI6OojmbMGODnRzMLA5jnAaEDlI8Fydto5djVWesMXrHz/ILdHa9tcZkkinuodNWGElr5Yy/wAmOEEacHO15hrx0A7NU01jmXN9p4hnWnop24ixtlFeaqrlyRzPwtdDI1jGykceSMtI5Qe52pPik75y7GiMOe6YshyTBN1brsZfp3VFtiNQKUO15Y5qY8xdGDryskj1dp46enWW2ImPJHVMxPi1d+hvHUv1C1eEVdZLT4TaH1DfLi+0hpH+Q+RrXat55JCBzOHAH0aLsfpXLk/vbH4b3eLpQw/GMFq8uwGWpp71aYzXObNL5jZYoffyHUAOa5rRzAg6cOzvEabpmcSlfTERmHT7D7h3LcXYuvnvsjpr3bY6q3Tzv4umaynEkb3HvPK4AntJGveobK+NktdvKqvm29wyTbN9s3mtjfMs8VwltNVE06cwEEcr43/jI5HcvgW69y02iLdGaszXqmvrCvFsyLZCy3+zyCa11lxpaiCQfbMkoahw4dx8R3KjTGLNG+c1hK+3v7A2P/p9H+jMVVuZW04huFFIQEBAQEBAQEBAQeNxo23C3z0D/gTxvhPb2PaW93soSrh0e5Ja8DzPIsHyyZlDd6kwxR+svEbTNRSSxvi1doOY+ZqB36Fat0ZiJhl0ziZiViG5Ljr7lHZ2V9O67zcxipWzRmZ4a3ncQwHmIA4ngs2JacwrlQ3Oi2g6vq+tykilstwnqZPWpeDGx3AGZkmp4cvmHlJ7Bx8FpmPKnRmifG/VNe6+5mIYlt7cbtVV8D5JqaWKihjlY99RLJGWsawNOpGp4kdg4qilJmV97xEI76G8dq6HE71k08ZZT3Cohp4HO4c7aRj9SPRzSka+IPgrd89VX146ZR1tTiH647B5zTxNLq6hkorpTgDU81MyV79B4mPnHtqy9sWhVSM1lucUyabfzNdvcPn5n0VgpfWbsH6hrpKV+hLvHnZFGNf557OKjMeETKdZ85iOzo9k/wD7c5r+JuH/AMhTqOz4Q7r+csb/APvf/T6Orv8Az/nc/wCn87Mnez/7c4V+Jt//AMhULmv4SbPnDE34sty2N3ft29+Kx/8AstfLyXGBnBpmcPwzD+Oj1cPBwJ8F3XPnXEmyPC3lDI6OqyluGd5rX0Li+hnkimhe5paXMfUTuaSDxGoPYubuId0cy0W1t2t2z/VJfLbmD20dFWOraKKpnIZGxtRUMrIHvc7gGva0DU9mvFSvHlSMI0nxvOWF1QbS4viLn5/Z7qay43y4zzy02sJZG2o8ypJbycSAeAJXdV5no5tpEdVkdvf2Bsf/AE+j/RmLNbmWmnEMHPztdkQG3+4U1I6Sqj9Zho62VsT3AEsD4nEtIcOPFp19pK5jrBbE9JV33QxuPpr3Atd62qvT5vW+eV9AZGyPY2N7fwU3l8HxycxDdW68D3jVaaT5x1Zbx4T0dD1k2+utGc4zuKIHGlbEyndr2CWlqDVCNxGoBIkP2D4KOjrEwnv6TEpxtW5WCXjG2ZbSXWmFidGJnTSTRsEY01IkDj71w7CDxBVE1mJwvi0TGUDbIyt3J6qbnuDaY3GxUzqyrZKQWjkljNHFrr2F7Xa6ez4LRf8AWmGfX+18vDa67UGz3VJe7dl720dDWuraKOpqDyRtZUVDKuB7nO4APaxo1PAa8UvHlSMFJ8bzlLnUBuPimO7U3inmrYJLjcqOegoqaORj5JXVUZh5mtadeVodzE9nD2FTrrMyu2WiIcd0p49W2rYq+XmsYWMuTquWn5tRzwxU3lcw9HOHD2lPdP7IaY/VqemDB7XuNsXkuIXUAQ1da4RS6amKZtNG6OQelrgD6Rw71LbbFolHVXyrMIzyTJ71ZtuavY3LWujudlurayjGmoaBHNFNFr8UukEjT36n0K2IzPlCqZxHjK3e3v7A2P8A6fR/ozFjtzLZTiG4UUhAQEBAQEBAQEBAQR/uZ02bbboXJ19ucc1FkDwBLWW97WOl5Ryt8xsjXsJA4a6A+lWV2zVXfVFnhth0x4JtbkLMptVTWVV6ia+ON1VJF5bWyNLHaMiY3joe8ldvtm0Ycpqis5b/AHL2dwXdijjp8spiayEEU9bTO8uoiB7Q12hBHocCPQo1vNeErUi3LhLX0TbWUVc2qr6y4VlK06+rSSwxscPBzoo2v0/okKc75VxohLdptFssNths9mgZTWunaIoIIWhrGNHcAFVM5XRGHLbW7I4jtLb7hbLBLU1VJciw1Lbi+GTgxrmaDyo4xoQ4666qV9k2RprirH2q6fsH2gu1Xesalq566riFM51dJC/kj5xIQzyo4yNSBrqT2BdvsmzlNcV4ZeLbL4viW4t03NttRVPv12bNHUwzvhNO0TzMndyNbG1w98waauPBcm8zGHa64icvP6j8T+tz65/WKv8AWj+z+ZD6r/5L1H4Hl8/wOPw+30cE9k+OD1x5ZemU7L4vlu4tr3NuVRVMv1pbDHTQwPhFO4QTPnbztdG5x98866OHBIvMRgtriZy2+dYTYtxMXqsRyJrnWyqADnRENkjc1wc17HOBAc0jUag+ngo1ticu2rmMNDtNsRiOzlRW1OMVNZPJXtiZMK+SF4AiLi3l8qKP4x111Ur7JtyjTXFeHrufsbt/u15c+TwPjusLfLjr6J4inDNdeUlzXNcNezmadO5KbJrw7fXFuXFW7oj2wpqgTV9fcamJp18oyQRtd6HFkXN9ghTnfKuNEJetlvpbRbae00LS2ipY46eFpJJDI2hjRqeJ4BUzOV0Rhx+7GweE7wVEFwyJ9TT3SmjMENRRSNaeTmLw1zZGvaRzEnsB9KspsmqF9cWabBOkrbDCL1DkD3VNzuNO4S07a98Rhje3i13lxsbqQeI5iR6F226ZcrpiHf5XiWO5vZJcdymlZWWib4cUmo0I7HNc3RzXDuIIKriZjhZMRPKKp+iHbCSsM0VwuUdITr5IkpjoPAOdCTp7Oqu98qfRCSsC25xDbSzfMmIUgp6Zx55pCS+WZ+mnNI93Enw7h3AKq1ptytrWK8NZudsdt/uy1kuT072XWJvlxV9G8RVDWa68pLg5rhqexzTp3LtNk1cvri3LjrF0V7V2uvZW3OprrhCwhwpp5Yo4nadz/JY15HsOCnO+UI0QlU2S2ssZx2kjFPafJNIyKnDWCOIs8sBg00Gg7OCqytw0O1W0mObQWapsmNT1M9JVTetyOrnxPeH8jY9AYo4xpo0dyle82RpSK8NLuZ00bebp5H+tN7lrKW7OjZDM63yQsbL5fBrniWKT3wboNRpwAXa7ZrGHL6otOXdWa109jtFJZaQudS0cMVLE6QgvLImCNpcQANdBx0ChM5TiMMlcdEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEH/2Q==';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * the default format is used for browsers that do not support
     * @type {?}
     */
    var DEFAULT_MEDIA_FORMAT = 'tablet';
    var MediaService = /** @class */ (function () {
        function MediaService(config, layoutConfig) {
            var _this = this;
            this.config = config;
            this.layoutConfig = layoutConfig;
            this.mediaFormats = [
                { code: 'mobile', threshold: this.layoutConfig.breakpoints[BREAKPOINT.xs] },
                { code: 'tablet', threshold: this.layoutConfig.breakpoints[BREAKPOINT.sm] },
                {
                    code: 'desktop',
                    threshold: this.layoutConfig.breakpoints[BREAKPOINT.md],
                },
                {
                    code: 'widescreen',
                    threshold: this.layoutConfig.breakpoints[BREAKPOINT.lg],
                },
            ];
            this.getImageUrl = function (url) {
                return url.startsWith('http') ? url : _this.getBaseUrl() + url;
            };
        }
        /**
         * @param {?} media
         * @param {?=} format
         * @param {?=} alt
         * @return {?}
         */
        MediaService.prototype.getImage = /**
         * @param {?} media
         * @param {?=} format
         * @param {?=} alt
         * @return {?}
         */
            function (media, format, alt) {
                return {
                    src: this.getMainImage(media, format),
                    srcset: this.getSrcSet(media),
                    alt: alt || this.getAlt(media, format),
                };
            };
        /**
         * @return {?}
         */
        MediaService.prototype.getMissingImage = /**
         * @return {?}
         */
            function () {
                return missingProductImgSrc;
            };
        /**
         * @private
         * @param {?} media
         * @param {?=} format
         * @return {?}
         */
        MediaService.prototype.getMainImage = /**
         * @private
         * @param {?} media
         * @param {?=} format
         * @return {?}
         */
            function (media, format) {
                if (!media) {
                    return this.getMissingImage();
                }
                else if (media[format || DEFAULT_MEDIA_FORMAT]) {
                    return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
                }
                else if (media.url) {
                    return this.getImageUrl(media.url);
                }
                else {
                    return this.getMissingImage();
                }
            };
        /**
         * @private
         * @param {?} media
         * @param {?=} format
         * @return {?}
         */
        MediaService.prototype.getAlt = /**
         * @private
         * @param {?} media
         * @param {?=} format
         * @return {?}
         */
            function (media, format) {
                if (!media) {
                    return undefined;
                }
                else if (media[format || DEFAULT_MEDIA_FORMAT]) {
                    return media[format || DEFAULT_MEDIA_FORMAT].altText;
                }
                else if (media.altText) {
                    return media.altText;
                }
            };
        /**
         * builds a set of images aligned with the breakpoints
         */
        /**
         * builds a set of images aligned with the breakpoints
         * @private
         * @param {?} media
         * @return {?}
         */
        MediaService.prototype.getSrcSet = /**
         * builds a set of images aligned with the breakpoints
         * @private
         * @param {?} media
         * @return {?}
         */
            function (media) {
                var _this = this;
                if (!media) {
                    return undefined;
                }
                /** @type {?} */
                var srcset = this.mediaFormats.reduce(function (set, format) {
                    if (!!media[format.code]) {
                        if (set) {
                            set += ', ';
                        }
                        set += _this.getImageUrl(media[format.code].url) + " " + format.threshold + "w";
                    }
                    return set;
                }, '');
                return srcset === '' ? undefined : srcset;
            };
        /**
         * @private
         * @return {?}
         */
        MediaService.prototype.getBaseUrl = /**
         * @private
         * @return {?}
         */
            function () {
                return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
            };
        MediaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MediaService.ctorParameters = function () {
            return [
                { type: i1$1.OccConfig },
                { type: LayoutConfig }
            ];
        };
        /** @nocollapse */ MediaService.ngInjectableDef = i0.defineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.inject(i1$1.OccConfig), i0.inject(LayoutConfig)); }, token: MediaService, providedIn: "root" });
        return MediaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var INITIALIZED_CLS = 'initialized';
    /** @type {?} */
    var LOADING_CLS = 'loading';
    var MediaComponent = /** @class */ (function () {
        function MediaComponent(elRef, renderer, mediaService) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.mediaService = mediaService;
            /**
             * Once the media is loaded, we emit an event.
             */
            this.loaded = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        MediaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(( /** @type {?} */(this.elRef.nativeElement)), LOADING_CLS);
            };
        /**
         * @return {?}
         */
        MediaComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.loadImage();
            };
        /**
         * @private
         * @return {?}
         */
        MediaComponent.prototype.loadImage = /**
         * @private
         * @return {?}
         */
            function () {
                this.media = this.mediaService.getImage(this.container, this.format, this.alt);
            };
        /**
         * @return {?}
         */
        MediaComponent.prototype.loadHandler = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(( /** @type {?} */(this.elRef.nativeElement)), INITIALIZED_CLS);
                this.renderer.removeClass(( /** @type {?} */(this.elRef.nativeElement)), LOADING_CLS);
                this.loaded.emit(this.elRef.nativeElement);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MediaComponent.prototype.loadErrorHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.target.src = this.mediaService.getMissingImage();
            };
        MediaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-media',
                        template: "<img\n  *ngIf=\"media\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"loadErrorHandler($event)\"\n/>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MediaComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: MediaService }
            ];
        };
        MediaComponent.propDecorators = {
            container: [{ type: i0.Input }],
            format: [{ type: i0.Input }],
            alt: [{ type: i0.Input }],
            loaded: [{ type: i0.Output }]
        };
        return MediaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MediaModule = /** @class */ (function () {
        function MediaModule() {
        }
        MediaModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [MediaComponent],
                        exports: [MediaComponent],
                    },] }
        ];
        return MediaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: Improve a11y with better text appropriate to usage (example: loading cart spinner)
    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
        }
        SpinnerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-spinner',
                        template: "<div class=\"loader\">{{ 'spinner.loading' | cxTranslate }}</div>\n"
                    }] }
        ];
        /** @nocollapse */
        SpinnerComponent.ctorParameters = function () { return []; };
        return SpinnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        SpinnerModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, i1$1.I18nModule],
                        declarations: [SpinnerComponent],
                        exports: [SpinnerComponent],
                    },] }
        ];
        return SpinnerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ICON_TYPES = {
        CART: 'shopping-cart',
        SEARCH: 'search',
        GRID_MODE: 'th-large',
        LIST_MODE: 'bars',
        CARET_DOWN: 'angle-down',
        INFO: 'info-circle',
        STAR: 'star',
    };
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ IconConfig = /** @class */ (function () {
        function IconConfig() {
        }
        return IconConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconLoaderService = /** @class */ (function () {
        function IconLoaderService(config) {
            this.config = config;
        }
        /**
         * @return {?}
         */
        IconLoaderService.prototype.useSvg = /**
         * @return {?}
         */
            function () {
                return this.config.icon && this.config.icon.useSvg;
            };
        /**
         * Returns the path to the svg link. The link supports path names
         * as well, if the config has been setup to support a svg file path.
         * Additionally, the icon prefix will be taken into account to prefix the
         * icon IDs in the SVG.
         */
        /**
         * Returns the path to the svg link. The link supports path names
         * as well, if the config has been setup to support a svg file path.
         * Additionally, the icon prefix will be taken into account to prefix the
         * icon IDs in the SVG.
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.getSvgPath = /**
         * Returns the path to the svg link. The link supports path names
         * as well, if the config has been setup to support a svg file path.
         * Additionally, the icon prefix will be taken into account to prefix the
         * icon IDs in the SVG.
         * @param {?} iconType
         * @return {?}
         */
            function (iconType) {
                if (!this.useSvg()) {
                    return null;
                }
                /** @type {?} */
                var path = '';
                if (this.config.icon && this.config.icon.svgPath) {
                    path = this.config.icon.svgPath;
                }
                // if there's no mapping configured, we use the default value
                path += '#';
                if (this.config.icon && this.config.icon.prefix) {
                    path += this.config.icon.prefix;
                }
                path += this.getMappedType(iconType);
                return path;
            };
        /**
         *
         * returns an array of css classes that can be used to
         * render the icon by CSS / font. This is driven by the `iconType`
         * and the icon configuration, so that multiple icon fonts are
         * supported, such as font awesome, glypicons, Octicons, etc.
         */
        /**
         *
         * returns an array of css classes that can be used to
         * render the icon by CSS / font. This is driven by the `iconType`
         * and the icon configuration, so that multiple icon fonts are
         * supported, such as font awesome, glypicons, Octicons, etc.
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.getStyleClasses = /**
         *
         * returns an array of css classes that can be used to
         * render the icon by CSS / font. This is driven by the `iconType`
         * and the icon configuration, so that multiple icon fonts are
         * supported, such as font awesome, glypicons, Octicons, etc.
         * @param {?} iconType
         * @return {?}
         */
            function (iconType) {
                /** @type {?} */
                var styleClasses = [];
                if (this.config.icon && this.config.icon.iconClass) {
                    styleClasses.push(this.config.icon.iconClass);
                }
                /** @type {?} */
                var type = this.getMappedType(iconType);
                if (this.config.icon && this.config.icon.prefix) {
                    type = this.config.icon.prefix + type;
                }
                styleClasses.push(type);
                return styleClasses;
            };
        /**
         * @private
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.getMappedType = /**
         * @private
         * @param {?} iconType
         * @return {?}
         */
            function (iconType) {
                return this.config.icon &&
                    this.config.icon.icons &&
                    this.config.icon.icons[iconType]
                    ? this.config.icon.icons[iconType]
                    : iconType;
            };
        IconLoaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        IconLoaderService.ctorParameters = function () {
            return [
                { type: IconConfig }
            ];
        };
        /** @nocollapse */ IconLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.inject(IconConfig)); }, token: IconLoaderService, providedIn: "root" });
        return IconLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconComponent = /** @class */ (function () {
        function IconComponent(iconLoader, renderer, hostElement) {
            this.iconLoader = iconLoader;
            this.renderer = renderer;
            this.hostElement = hostElement;
            /**
             * Keeps the given style classes so that we can
             * clean them up when the icon changes
             */
            this.iconStyleClasses = [];
        }
        /**
         * @return {?}
         */
        IconComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.addStyleClasses();
            };
        Object.defineProperty(IconComponent.prototype, "useSvg", {
            get: /**
             * @return {?}
             */ function () {
                return this.iconLoader.useSvg();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "path", {
            get: /**
             * @return {?}
             */ function () {
                return this.iconLoader.getSvgPath(this.type);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        IconComponent.prototype.addStyleClasses = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.useSvg) {
                    return;
                }
                this.clearStyleClasses();
                this.iconStyleClasses = this.iconLoader.getStyleClasses(this.type);
                this.iconStyleClasses.forEach(function (cls) {
                    _this.renderer.addClass(_this.hostElement.nativeElement, cls);
                });
            };
        /**
         * @private
         * @return {?}
         */
        IconComponent.prototype.clearStyleClasses = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.iconStyleClasses.forEach(function (cls) {
                    _this.renderer.removeClass(_this.hostElement.nativeElement, cls);
                });
            };
        IconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-icon',
                        template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"path\"></use>\n  </svg>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () {
            return [
                { type: IconLoaderService },
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        IconComponent.propDecorators = {
            type: [{ type: i0.Input }]
        };
        return IconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultIconConfig = {
        icon: {
            prefix: 'fa-',
            iconClass: 'fas',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconModule = /** @class */ (function () {
        function IconModule() {
        }
        IconModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [IconComponent],
                        imports: [common.CommonModule, i1$1.ConfigModule.withConfig(defaultIconConfig)],
                        providers: [{ provide: IconConfig, useExisting: i1$1.Config }],
                        exports: [IconComponent],
                    },] }
        ];
        return IconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageCurrencyComponent = /** @class */ (function () {
        function LanguageCurrencyComponent() {
        }
        LanguageCurrencyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-language-currency-selector',
                        template: "\n    <cx-site-context-selector context=\"LANGUAGE\"></cx-site-context-selector>\n    <cx-site-context-selector context=\"CURRENCY\"></cx-site-context-selector>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        return LanguageCurrencyComponent;
    }());

    var _a;
    /** @type {?} */
    var LABELS = (_a = {},
        _a[i1$1.LANGUAGE_CONTEXT_ID] = 'Language',
        _a[i1$1.CURRENCY_CONTEXT_ID] = 'Currency',
        _a);
    var SiteContextComponentService = /** @class */ (function () {
        function SiteContextComponentService(componentData, contextServiceMap, injector) {
            this.componentData = componentData;
            this.contextServiceMap = contextServiceMap;
            this.injector = injector;
        }
        /**
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getItems = /**
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                var _this = this;
                return this.getService(context).pipe(operators.switchMap(function (service) { return service.getAll(); }), operators.switchMap(function (items) {
                    return _this.getContext(context).pipe(operators.switchMap(function (ctx) {
                        items.forEach(function (item) {
                            return (item.label = _this.getOptionLabel(item, ctx));
                        });
                        return rxjs.of(items);
                    }));
                }));
            };
        /**
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getActiveItem = /**
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                return this.getService(context).pipe(operators.switchMap(function (service) { return service.getActive(); }));
            };
        /**
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getLabel = /**
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                return this.getContext(context).pipe(operators.map(function (ctx) {
                    return LABELS[ctx];
                }));
            };
        /**
         * @param {?} value
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.setActive = /**
         * @param {?} value
         * @param {?=} context
         * @return {?}
         */
            function (value, context) {
                this.getService(context)
                    .pipe(operators.take(1))
                    .subscribe(function (service) {
                    service.setActive(value);
                });
            };
        /**
         * @protected
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getService = /**
         * @protected
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                var _this = this;
                return this.getContext(context).pipe(operators.map(function (ctx) { return _this.getInjectedService(ctx); }), operators.filter(Boolean));
            };
        /**
         * @protected
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getContext = /**
         * @protected
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                if (context) {
                    return rxjs.of(context);
                }
                else if (this.componentData) {
                    return this.componentData.data$.pipe(operators.map(function (data) { return data.context; }));
                }
            };
        /**
         * @protected
         * @param {?} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getInjectedService = /**
         * @protected
         * @param {?} context
         * @return {?}
         */
            function (context) {
                return this.injector.get(this.contextServiceMap[context], null);
            };
        /**
         * @protected
         * @param {?} item
         * @param {?=} context
         * @return {?}
         */
        SiteContextComponentService.prototype.getOptionLabel = /**
         * @protected
         * @param {?} item
         * @param {?=} context
         * @return {?}
         */
            function (item, context) {
                switch (context) {
                    case i1$1.LANGUAGE_CONTEXT_ID:
                        return item.nativeName;
                    case i1$1.CURRENCY_CONTEXT_ID:
                        return item.symbol + ' ' + item.isocode;
                    default:
                        return item.isocode;
                }
            };
        SiteContextComponentService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SiteContextComponentService.ctorParameters = function () {
            return [
                { type: CmsComponentData, decorators: [{ type: i0.Optional }] },
                { type: i1$1.ContextServiceMap },
                { type: i0.Injector }
            ];
        };
        return SiteContextComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextSelectorComponent = /** @class */ (function () {
        function SiteContextSelectorComponent(componentService) {
            this.componentService = componentService;
            this.iconTypes = ICON_TYPES;
        }
        Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
            get: /**
             * @return {?}
             */ function () {
                return this.componentService.getItems(this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
            get: /**
             * @return {?}
             */ function () {
                return this.componentService.getActiveItem(this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SiteContextSelectorComponent.prototype, "active", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.componentService.setActive(value, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
            get: /**
             * @return {?}
             */ function () {
                return this.componentService.getLabel(this.context);
            },
            enumerable: true,
            configurable: true
        });
        SiteContextSelectorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-site-context-selector',
                        template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n</label>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SiteContextSelectorComponent.ctorParameters = function () {
            return [
                { type: SiteContextComponentService }
            ];
        };
        SiteContextSelectorComponent.propDecorators = {
            context: [{ type: i0.Input }]
        };
        return SiteContextSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextSelectorModule = /** @class */ (function () {
        function SiteContextSelectorModule() {
        }
        SiteContextSelectorModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CMSSiteContextComponent: {
                                        selector: 'cx-site-context-selector',
                                        providers: [
                                            {
                                                provide: SiteContextComponentService,
                                                useClass: SiteContextComponentService,
                                                deps: [CmsComponentData, i1$1.ContextServiceMap, i0.Injector],
                                            },
                                        ],
                                    },
                                    LanguageCurrencyComponent: {
                                        selector: 'cx-language-currency-selector',
                                    },
                                },
                            }))),
                            i1$1.SiteContextModule.forRoot(),
                            IconModule,
                        ],
                        providers: [SiteContextComponentService],
                        declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                        entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                    },] }
        ];
        return SiteContextSelectorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SiteContextType = {
        LANGUAGE: 'LANGUAGE',
        CURRENCY: 'CURRENCY',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StarRatingComponent = /** @class */ (function () {
        function StarRatingComponent(el) {
            this.el = el;
            /**
             * The rating component can be used in disabled mode,
             * so that the interation is not provided.
             */
            this.disabled = false;
            /**
             * Emits the given rating when the user clicks on a star.
             */
            this.change = new i0.EventEmitter();
            this.initialRate = 0;
            this.iconTypes = ICON_TYPES;
        }
        /**
         * @return {?}
         */
        StarRatingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setRate(this.rating, true);
            };
        /**
         * @param {?} value
         * @param {?=} force
         * @return {?}
         */
        StarRatingComponent.prototype.setRate = /**
         * @param {?} value
         * @param {?=} force
         * @return {?}
         */
            function (value, force) {
                if (!this.disabled || force) {
                    this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
                }
            };
        /**
         * @param {?} rating
         * @return {?}
         */
        StarRatingComponent.prototype.saveRate = /**
         * @param {?} rating
         * @return {?}
         */
            function (rating) {
                if (this.disabled) {
                    return;
                }
                this.initialRate = rating;
                this.setRate(rating);
                this.change.emit(rating);
            };
        StarRatingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-star-rating',
                        template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        StarRatingComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        StarRatingComponent.propDecorators = {
            disabled: [{ type: i0.Input }, { type: i0.HostBinding, args: ['attr.disabled',] }],
            rating: [{ type: i0.Input }],
            change: [{ type: i0.Output }]
        };
        return StarRatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StarRatingModule = /** @class */ (function () {
        function StarRatingModule() {
        }
        StarRatingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, IconModule],
                        declarations: [StarRatingComponent],
                        exports: [StarRatingComponent],
                    },] }
        ];
        return StarRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PromotionsComponent = /** @class */ (function () {
        function PromotionsComponent() {
        }
        PromotionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-promotions',
                        template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <strong *ngFor=\"let promotion of promotions\">\n    {{ promotion.description }}\n  </strong>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PromotionsComponent.ctorParameters = function () { return []; };
        PromotionsComponent.propDecorators = {
            promotions: [{ type: i0.Input }]
        };
        return PromotionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PromotionsModule = /** @class */ (function () {
        function PromotionsModule() {
        }
        PromotionsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PromotionsComponent],
                        exports: [PromotionsComponent],
                    },] }
        ];
        return PromotionsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartItemListComponent = /** @class */ (function () {
        function CartItemListComponent(cartService, fb) {
            this.cartService = cartService;
            this.fb = fb;
            this.isReadOnly = false;
            this.hasHeader = true;
            this.items = [];
            this.potentialProductPromotions = [];
            this.cartIsLoading = false;
            this.form = this.fb.group({});
        }
        /**
         * @return {?}
         */
        CartItemListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.items.forEach(function (item) {
                    var code = item.product.code;
                    if (!_this.form.controls[code]) {
                        _this.form.setControl(code, _this.createEntryFormGroup(item));
                    }
                    else {
                        /** @type {?} */
                        var entryForm = ( /** @type {?} */(_this.form.controls[code]));
                        entryForm.controls.quantity.setValue(item.quantity);
                    }
                });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        CartItemListComponent.prototype.removeEntry = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.cartService.removeEntry(item);
                delete this.form.controls[item.product.code];
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        CartItemListComponent.prototype.updateEntry = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var item = _a.item, updatedQuantity = _a.updatedQuantity;
                this.cartService.updateEntry(item.entryNumber, updatedQuantity);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        CartItemListComponent.prototype.getPotentialProductPromotionsForItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var e_1, _a, e_2, _b;
                /** @type {?} */
                var entryPromotions = [];
                if (this.potentialProductPromotions &&
                    this.potentialProductPromotions.length > 0) {
                    try {
                        for (var _c = __values(this.potentialProductPromotions), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var promotion = _d.value;
                            if (promotion.description &&
                                promotion.consumedEntries &&
                                promotion.consumedEntries.length > 0) {
                                try {
                                    for (var _e = __values(promotion.consumedEntries), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var consumedEntry = _f.value;
                                        if (this.isConsumedByEntry(consumedEntry, item)) {
                                            entryPromotions.push(promotion);
                                        }
                                    }
                                }
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return))
                                            _b.call(_e);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
                                }
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return entryPromotions;
            };
        /**
         * @private
         * @param {?} entry
         * @return {?}
         */
        CartItemListComponent.prototype.createEntryFormGroup = /**
         * @private
         * @param {?} entry
         * @return {?}
         */
            function (entry) {
                return this.fb.group({
                    entryNumber: entry.entryNumber,
                    quantity: entry.quantity,
                });
            };
        /**
         * @private
         * @param {?} consumedEntry
         * @param {?} entry
         * @return {?}
         */
        CartItemListComponent.prototype.isConsumedByEntry = /**
         * @private
         * @param {?} consumedEntry
         * @param {?} entry
         * @return {?}
         */
            function (consumedEntry, entry) {
                var e_3, _a;
                /** @type {?} */
                var consumendEntryNumber = consumedEntry.orderEntryNumber;
                if (entry.entries && entry.entries.length > 0) {
                    try {
                        for (var _b = __values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var subEntry = _c.value;
                            if (subEntry.entryNumber === consumendEntryNumber) {
                                return true;
                            }
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                    return false;
                }
                else {
                    return consumendEntryNumber === entry.entryNumber;
                }
            };
        CartItemListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-cart-item-list',
                        template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CartItemListComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartService },
                { type: forms.FormBuilder }
            ];
        };
        CartItemListComponent.propDecorators = {
            isReadOnly: [{ type: i0.Input }],
            hasHeader: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            potentialProductPromotions: [{ type: i0.Input }],
            cartIsLoading: [{ type: i0.Input }]
        };
        return CartItemListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartItemComponent = /** @class */ (function () {
        function CartItemComponent() {
            this.compact = false;
            this.isReadOnly = false;
            this.cartIsLoading = false;
            this.remove = new i0.EventEmitter();
            this.update = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        CartItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} product
         * @return {?}
         */
        CartItemComponent.prototype.isProductOutOfStock = /**
         * @param {?} product
         * @return {?}
         */
            function (product) {
                // TODO Move stocklevelstatuses across the app to an enum
                return (product &&
                    product.stock &&
                    product.stock.stockLevelStatus === 'outOfStock');
            };
        /**
         * @param {?} updatedQuantity
         * @return {?}
         */
        CartItemComponent.prototype.updateItem = /**
         * @param {?} updatedQuantity
         * @return {?}
         */
            function (updatedQuantity) {
                this.update.emit({ item: this.item, updatedQuantity: updatedQuantity });
            };
        /**
         * @return {?}
         */
        CartItemComponent.prototype.removeItem = /**
         * @return {?}
         */
            function () {
                this.remove.emit(this.item);
            };
        CartItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-cart-item',
                        template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a [routerLink]=\"{ route: 'product', params: item.product } | cxUrl\">\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ route: 'product', params: item.product } | cxUrl\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          ngbTooltip=\"The quantity represents the total number of this item in your cart.\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        CartItemComponent.propDecorators = {
            compact: [{ type: i0.Input }],
            item: [{ type: i0.Input }],
            potentialProductPromotions: [{ type: i0.Input }],
            isReadOnly: [{ type: i0.Input }],
            cartIsLoading: [{ type: i0.Input }],
            remove: [{ type: i0.Output }],
            update: [{ type: i0.Output }],
            parent: [{ type: i0.Input }]
        };
        return CartItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderSummaryComponent = /** @class */ (function () {
        function OrderSummaryComponent() {
        }
        OrderSummaryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-summary',
                        template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-savings\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.discount' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalDiscounts?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n</div>\n\n<cx-promotions [promotions]=\"cart.appliedOrderPromotions\"></cx-promotions>\n"
                    }] }
        ];
        OrderSummaryComponent.propDecorators = {
            cart: [{ type: i0.Input }]
        };
        return OrderSummaryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartSharedModule = /** @class */ (function () {
        function CartSharedModule() {
        }
        CartSharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            forms.ReactiveFormsModule,
                            i1$1.UrlModule,
                            ngBootstrap.NgbModule,
                            PromotionsModule,
                            i1$1.I18nModule,
                            MediaModule,
                            FormComponentsModule,
                        ],
                        declarations: [
                            CartItemComponent,
                            OrderSummaryComponent,
                            CartItemListComponent,
                        ],
                        exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
                    },] }
        ];
        return CartSharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToCartModule = /** @class */ (function () {
        function AddToCartModule() {
        }
        AddToCartModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            CartSharedModule,
                            common.CommonModule,
                            i1$2.RouterModule,
                            SpinnerModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    ProductAddToCartComponent: { selector: 'cx-add-to-cart' },
                                },
                            }))),
                            i1$1.UrlModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [AddToCartComponent, AddedToCartDialogComponent],
                        entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                        exports: [AddToCartComponent],
                    },] }
        ];
        return AddToCartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartDetailsComponent = /** @class */ (function () {
        function CartDetailsComponent(cartService) {
            this.cartService = cartService;
        }
        /**
         * @return {?}
         */
        CartDetailsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.cart$ = this.cartService.getActive();
                this.entries$ = this.cartService
                    .getEntries()
                    .pipe(operators.filter(function (entries) { return entries.length > 0; }));
                this.cartLoaded$ = this.cartService.getLoaded();
            };
        /**
         * @param {?} cart
         * @return {?}
         */
        CartDetailsComponent.prototype.getAllPromotionsForCart = /**
         * @param {?} cart
         * @return {?}
         */
            function (cart) {
                /** @type {?} */
                var potentialPromotions = cart.potentialOrderPromotions || [];
                /** @type {?} */
                var appliedPromotions = cart.appliedOrderPromotions || [];
                return __spread(potentialPromotions, appliedPromotions);
            };
        CartDetailsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-cart-details',
                        template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'cartItems.cartTotal'\n            | cxTranslate: { count: cart.deliveryItemsQuantity }\n        }}:\n        {{ cart.totalPrice?.formattedValue }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CartDetailsComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartService }
            ];
        };
        return CartDetailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartDetailsModule = /** @class */ (function () {
        function CartDetailsModule() {
        }
        CartDetailsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            CartSharedModule,
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.UrlModule,
                            PromotionsModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CartComponent: {
                                        selector: 'cx-cart-details',
                                    },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [CartDetailsComponent],
                        exports: [CartDetailsComponent],
                        entryComponents: [CartDetailsComponent],
                    },] }
        ];
        return CartDetailsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartTotalsComponent = /** @class */ (function () {
        function CartTotalsComponent(cartService) {
            this.cartService = cartService;
        }
        /**
         * @return {?}
         */
        CartTotalsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.cart$ = this.cartService.getActive();
                this.entries$ = this.cartService
                    .getEntries()
                    .pipe(operators.filter(function (entries) { return entries.length > 0; }));
            };
        CartTotalsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-cart-totals',
                        template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n    <button\n      [routerLink]=\"{ route: 'checkout' } | cxUrl\"\n      *ngIf=\"entries.length\"\n      class=\"btn btn-primary btn-block\"\n      type=\"button\"\n    >\n      {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CartTotalsComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartService }
            ];
        };
        return CartTotalsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartTotalsModule = /** @class */ (function () {
        function CartTotalsModule() {
        }
        CartTotalsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.UrlModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CartTotalsComponent: {
                                        selector: 'cx-cart-totals',
                                    },
                                },
                            }))),
                            CartSharedModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [CartTotalsComponent],
                        exports: [CartTotalsComponent],
                        entryComponents: [CartTotalsComponent],
                    },] }
        ];
        return CartTotalsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MiniCartComponent = /** @class */ (function () {
        function MiniCartComponent(cartService) {
            this.cartService = cartService;
            this.iconTypes = ICON_TYPES;
            this.quantity$ = this.cartService
                .getActive()
                .pipe(operators.map(function (cart) { return cart.deliveryItemsQuantity || 0; }));
            this.total$ = this.cartService.getActive().pipe(operators.filter(function (cart) { return !!cart.totalPrice; }), operators.map(function (cart) { return cart.totalPrice.formattedValue; }));
        }
        MiniCartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-mini-cart',
                        template: "<a\n  [attr.aria-label]=\"(quantity$ | async) + ' items currently in your cart'\"\n  [routerLink]=\"{ route: ['cart'] } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MiniCartComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartService }
            ];
        };
        return MiniCartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MiniCartModule = /** @class */ (function () {
        function MiniCartModule() {
        }
        MiniCartModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.CartModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    MiniCartComponent: { selector: 'cx-mini-cart' },
                                },
                            }))),
                            i1$1.UrlModule,
                            IconModule,
                        ],
                        declarations: [MiniCartComponent],
                        entryComponents: [MiniCartComponent],
                    },] }
        ];
        return MiniCartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartComponentModule = /** @class */ (function () {
        function CartComponentModule() {
        }
        CartComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            CartDetailsModule,
                            CartTotalsModule,
                            CartSharedModule,
                            ngBootstrap.NgbModule,
                            i1$1.CartModule,
                        ],
                        exports: [
                            CartDetailsModule,
                            CartTotalsModule,
                            CartSharedModule,
                            AddToCartModule,
                            MiniCartModule,
                        ],
                    },] }
        ];
        return CartComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BannerComponent = /** @class */ (function () {
        function BannerComponent(component) {
            this.component = component;
        }
        BannerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-banner',
                        template: "<ng-container *ngIf=\"(component.data$ | async) as data\">\n  <p *ngIf=\"data.headLine\" [innerHTML]=\"data.headLine\"></p>\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <cx-media [container]=\"data.media\"></cx-media>\n  </cx-generic-link>\n\n  <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BannerComponent.ctorParameters = function () {
            return [
                { type: CmsComponentData }
            ];
        };
        return BannerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GenericLinkModule = /** @class */ (function () {
        function GenericLinkModule() {
        }
        GenericLinkModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, i1$2.RouterModule],
                        declarations: [GenericLinkComponent],
                        exports: [GenericLinkComponent],
                    },] }
        ];
        return GenericLinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BannerModule = /** @class */ (function () {
        function BannerModule() {
        }
        BannerModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            GenericLinkModule,
                            MediaModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    SimpleResponsiveBannerComponent: {
                                        selector: 'cx-banner',
                                    },
                                    BannerComponent: {
                                        selector: 'cx-banner',
                                    },
                                    SimpleBannerComponent: {
                                        selector: 'cx-banner',
                                    },
                                },
                            }))),
                        ],
                        declarations: [BannerComponent],
                        entryComponents: [BannerComponent],
                    },] }
        ];
        return BannerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkComponent = /** @class */ (function () {
        function LinkComponent(component) {
            this.component = component;
        }
        LinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-link',
                        template: "<a\n  *ngIf=\"(component.data$ | async) as data\"\n  role=\"link\"\n  [routerLink]=\"data.url\"\n  >{{ data.linkName }}</a\n>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        LinkComponent.ctorParameters = function () {
            return [
                { type: CmsComponentData }
            ];
        };
        return LinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkModule = /** @class */ (function () {
        function LinkModule() {
        }
        LinkModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CMSLinkComponent: { selector: 'cx-link' },
                                },
                            }))),
                        ],
                        declarations: [LinkComponent],
                        exports: [LinkComponent],
                        entryComponents: [LinkComponent],
                    },] }
        ];
        return LinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParagraphComponent = /** @class */ (function () {
        function ParagraphComponent(component) {
            this.component = component;
        }
        ParagraphComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-paragraph',
                        template: "<p *ngIf=\"(component.data$ | async) as data\" [innerHTML]=\"data.content\"></p>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ParagraphComponent.ctorParameters = function () {
            return [
                { type: CmsComponentData }
            ];
        };
        return ParagraphComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsParagraphModule = /** @class */ (function () {
        function CmsParagraphModule() {
        }
        CmsParagraphModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CMSParagraphComponent: { selector: 'cx-paragraph' },
                                },
                            }))),
                        ],
                        declarations: [ParagraphComponent],
                        exports: [ParagraphComponent],
                        entryComponents: [ParagraphComponent],
                    },] }
        ];
        return CmsParagraphModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { AbstractProductComponent } from '../abstract-product-component';
    var TabParagraphContainerComponent = /** @class */ (function () {
        function TabParagraphContainerComponent() {
        }
        TabParagraphContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-tab-paragraph-container',
                        template: "<!--\n  <p #tabContent [innerHTML]=\"model?.content\">\n  </p>\n-->\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        return TabParagraphContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabParagraphContainerModule = /** @class */ (function () {
        function TabParagraphContainerModule() {
        }
        TabParagraphContainerModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CMSTabParagraphComponent: { selector: 'cx-tab-paragraph-container' },
                                },
                            }))),
                        ],
                        declarations: [TabParagraphContainerComponent],
                        entryComponents: [TabParagraphContainerComponent],
                        exports: [TabParagraphContainerComponent],
                    },] }
        ];
        return TabParagraphContainerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressBookComponentService = /** @class */ (function () {
        function AddressBookComponentService(userService) {
            this.userService = userService;
        }
        /**
         * @return {?}
         */
        AddressBookComponentService.prototype.getAddresses = /**
         * @return {?}
         */
            function () {
                return this.userService.getAddresses();
            };
        /**
         * @return {?}
         */
        AddressBookComponentService.prototype.getAddressesStateLoading = /**
         * @return {?}
         */
            function () {
                return this.userService.getAddressesLoading();
            };
        /**
         * @return {?}
         */
        AddressBookComponentService.prototype.getUserId = /**
         * @return {?}
         */
            function () {
                return this.userService.get().pipe(operators.map(function (_a) {
                    var uid = _a.uid;
                    return uid;
                }));
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        AddressBookComponentService.prototype.loadAddresses = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                this.userService.loadAddresses(userId);
            };
        /**
         * @param {?} userId
         * @param {?} address
         * @return {?}
         */
        AddressBookComponentService.prototype.addUserAddress = /**
         * @param {?} userId
         * @param {?} address
         * @return {?}
         */
            function (userId, address) {
                this.userService.addUserAddress(userId, address);
            };
        /**
         * @param {?} userId
         * @param {?} addressId
         * @param {?} address
         * @return {?}
         */
        AddressBookComponentService.prototype.updateUserAddress = /**
         * @param {?} userId
         * @param {?} addressId
         * @param {?} address
         * @return {?}
         */
            function (userId, addressId, address) {
                this.userService.updateUserAddress(userId, addressId, address);
            };
        AddressBookComponentService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AddressBookComponentService.ctorParameters = function () {
            return [
                { type: i1$1.UserService }
            ];
        };
        return AddressBookComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressBookComponent = /** @class */ (function () {
        function AddressBookComponent(service) {
            this.service = service;
            this.showAddAddressForm = false;
            this.showEditAddressForm = false;
        }
        /**
         * @return {?}
         */
        AddressBookComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.addresses$ = this.service.getAddresses();
                this.addressesStateLoading$ = this.service.getAddressesStateLoading();
                this.service
                    .getUserId()
                    .pipe(operators.take(1))
                    .subscribe(function (id) {
                    _this.userId = id;
                    _this.service.loadAddresses(id);
                });
            };
        /**
         * @return {?}
         */
        AddressBookComponent.prototype.addAddressButtonHandle = /**
         * @return {?}
         */
            function () {
                this.showEditAddressForm = false;
                this.showAddAddressForm = true;
            };
        /**
         * @param {?} address
         * @return {?}
         */
        AddressBookComponent.prototype.editAddressButtonHandle = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.showAddAddressForm = false;
                this.showEditAddressForm = true;
                this.currentAddress = address;
            };
        /**
         * @param {?} address
         * @return {?}
         */
        AddressBookComponent.prototype.addAddressSubmit = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.showAddAddressForm = false;
                this.service.addUserAddress(this.userId, address);
            };
        /**
         * @return {?}
         */
        AddressBookComponent.prototype.addAddressCancel = /**
         * @return {?}
         */
            function () {
                this.showAddAddressForm = false;
            };
        /**
         * @param {?} address
         * @return {?}
         */
        AddressBookComponent.prototype.editAddressSubmit = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.showEditAddressForm = false;
                this.service.updateUserAddress(this.userId, this.currentAddress['id'], address);
            };
        /**
         * @return {?}
         */
        AddressBookComponent.prototype.editAddressCancel = /**
         * @return {?}
         */
            function () {
                this.showEditAddressForm = false;
            };
        AddressBookComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-address-book',
                        template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [userId]=\"userId\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        AddressBookComponent.ctorParameters = function () {
            return [
                { type: AddressBookComponentService }
            ];
        };
        return AddressBookComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuggestedAddressDialogComponent = /** @class */ (function () {
        function SuggestedAddressDialogComponent(activeModal) {
            this.activeModal = activeModal;
        }
        /**
         * @return {?}
         */
        SuggestedAddressDialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.selectedAddress = this.suggestedAddresses.length
                    ? this.suggestedAddresses[0]
                    : this.enteredAddress;
            };
        SuggestedAddressDialogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-suggested-addresses-dialog',
                        template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    (click)=\"activeModal.close()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"activeModal.close()\"\n        >\n          {{ 'common.editAddress' | cxTranslate }}\n        </button>\n        <button\n          ngbAutofocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"activeModal.close(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SuggestedAddressDialogComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbActiveModal }
            ];
        };
        SuggestedAddressDialogComponent.propDecorators = {
            suggestedAddresses: [{ type: i0.Input }],
            enteredAddress: [{ type: i0.Input }]
        };
        return SuggestedAddressDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressFormComponent = /** @class */ (function () {
        function AddressFormComponent(fb, checkoutService, userService, globalMessageService, modalService) {
            this.fb = fb;
            this.checkoutService = checkoutService;
            this.userService = userService;
            this.globalMessageService = globalMessageService;
            this.modalService = modalService;
            this.showCancelBtn = true;
            this.submitAddress = new i0.EventEmitter();
            this.backToAddress = new i0.EventEmitter();
            this.address = this.fb.group({
                defaultAddress: [false],
                titleCode: [''],
                firstName: ['', forms.Validators.required],
                lastName: ['', forms.Validators.required],
                line1: ['', forms.Validators.required],
                line2: [''],
                town: ['', forms.Validators.required],
                region: this.fb.group({
                    isocode: [null, forms.Validators.required],
                }),
                country: this.fb.group({
                    isocode: [null, forms.Validators.required],
                }),
                postalCode: ['', forms.Validators.required],
                phone: '',
            });
        }
        /**
         * @return {?}
         */
        AddressFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // Fetching countries
                this.countries$ = this.userService.getDeliveryCountries().pipe(operators.tap(function (countries) {
                    if (Object.keys(countries).length === 0) {
                        _this.userService.loadDeliveryCountries();
                    }
                }));
                // Fetching titles
                this.titles$ = this.userService.getTitles().pipe(operators.tap(function (titles) {
                    if (Object.keys(titles).length === 0) {
                        _this.userService.loadTitles();
                    }
                }), operators.map(function (titles) {
                    /** @type {?} */
                    var noneTitle = { code: '', name: 'Title' };
                    return __spread([noneTitle], titles);
                }));
                // Fetching regions
                this.regions$ = this.userService.getRegions().pipe(operators.tap(function (regions) {
                    /** @type {?} */
                    var regionControl = _this.address.get('region.isocode');
                    if (Object.keys(regions).length === 0) {
                        regionControl.disable();
                        /** @type {?} */
                        var countryIsoCode = _this.address.get('country.isocode').value;
                        if (countryIsoCode) {
                            _this.userService.loadRegions(countryIsoCode);
                        }
                    }
                    else {
                        regionControl.enable();
                    }
                }));
                // verify the new added address
                this.addressVerifySub = this.checkoutService
                    .getAddressVerificationResults()
                    .subscribe(function (results) {
                    if (results === 'FAIL') {
                        _this.checkoutService.clearAddressVerificationResults();
                    }
                    else if (results.decision === 'ACCEPT') {
                        _this.submitAddress.emit(_this.address.value);
                    }
                    else if (results.decision === 'REJECT') {
                        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                        if (results.errors.errors.some(function (error) { return error.subject === 'titleCode'; })) {
                            _this.globalMessageService.add('Title is required', i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                        }
                        else {
                            _this.globalMessageService.add('Invalid Address', i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                        }
                        _this.checkoutService.clearAddressVerificationResults();
                    }
                    else if (results.decision === 'REVIEW') {
                        _this.openSuggestedAddress(results);
                    }
                });
                if (this.addressData) {
                    this.address.patchValue(this.addressData);
                    this.countrySelected(this.addressData.country);
                    if (this.addressData.region) {
                        this.regionSelected(this.addressData.region);
                    }
                }
            };
        /**
         * @param {?} title
         * @return {?}
         */
        AddressFormComponent.prototype.titleSelected = /**
         * @param {?} title
         * @return {?}
         */
            function (title) {
                this.address['controls'].titleCode.setValue(title.code);
            };
        /**
         * @param {?} country
         * @return {?}
         */
        AddressFormComponent.prototype.countrySelected = /**
         * @param {?} country
         * @return {?}
         */
            function (country) {
                this.address['controls'].country['controls'].isocode.setValue(country.isocode);
                this.userService.loadRegions(country.isocode);
            };
        /**
         * @param {?} region
         * @return {?}
         */
        AddressFormComponent.prototype.regionSelected = /**
         * @param {?} region
         * @return {?}
         */
            function (region) {
                this.address['controls'].region['controls'].isocode.setValue(region.isocode);
            };
        /**
         * @return {?}
         */
        AddressFormComponent.prototype.toggleDefaultAddress = /**
         * @return {?}
         */
            function () {
                this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
            };
        /**
         * @return {?}
         */
        AddressFormComponent.prototype.back = /**
         * @return {?}
         */
            function () {
                this.backToAddress.emit();
            };
        /**
         * @return {?}
         */
        AddressFormComponent.prototype.verifyAddress = /**
         * @return {?}
         */
            function () {
                this.checkoutService.verifyAddress(this.address.value);
            };
        /**
         * @param {?} results
         * @return {?}
         */
        AddressFormComponent.prototype.openSuggestedAddress = /**
         * @param {?} results
         * @return {?}
         */
            function (results) {
                var _this = this;
                if (!this.suggestedAddressModalRef) {
                    this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
                    this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
                    this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                        results.suggestedAddresses;
                    this.suggestedAddressModalRef.result
                        .then(function (address) {
                        _this.checkoutService.clearAddressVerificationResults();
                        if (address) {
                            address = Object.assign({
                                titleCode: _this.address.value.titleCode,
                                phone: _this.address.value.phone,
                                selected: true,
                            }, address);
                            _this.submitAddress.emit(address);
                        }
                        _this.suggestedAddressModalRef = null;
                    })
                        .catch(function () {
                        // this  callback is called when modal is closed with Esc key or clicking backdrop
                        _this.checkoutService.clearAddressVerificationResults();
                        /** @type {?} */
                        var address = Object.assign({
                            selected: true,
                        }, _this.address.value);
                        _this.submitAddress.emit(address);
                        _this.suggestedAddressModalRef = null;
                    });
                }
            };
        /**
         * @return {?}
         */
        AddressFormComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.checkoutService.clearAddressVerificationResults();
                if (this.addressVerifySub) {
                    this.addressVerifySub.unsubscribe();
                }
            };
        AddressFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-address-form',
                        template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        AddressFormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.CheckoutService },
                { type: i1$1.UserService },
                { type: i1$1.GlobalMessageService },
                { type: ngBootstrap.NgbModal }
            ];
        };
        AddressFormComponent.propDecorators = {
            addressData: [{ type: i0.Input }],
            actionBtnLabel: [{ type: i0.Input }],
            cancelBtnLabel: [{ type: i0.Input }],
            setAsDefaultField: [{ type: i0.Input }],
            showTitleCode: [{ type: i0.Input }],
            showCancelBtn: [{ type: i0.Input }],
            submitAddress: [{ type: i0.Output }],
            backToAddress: [{ type: i0.Output }]
        };
        return AddressFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressFormModule = /** @class */ (function () {
        function AddressFormModule() {
        }
        AddressFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            i1$2.RouterModule,
                            ngSelect.NgSelectModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
                        entryComponents: [SuggestedAddressDialogComponent],
                        exports: [AddressFormComponent],
                    },] }
        ];
        return AddressFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.deleteCard = new i0.EventEmitter();
            this.setDefaultCard = new i0.EventEmitter();
            this.sendCard = new i0.EventEmitter();
            this.editCard = new i0.EventEmitter();
            this.cancelCard = new i0.EventEmitter();
            this.border = false;
            this.editMode = false;
            this.isDefault = false;
            this.fitToContainer = false;
        }
        // ACTIONS
        // ACTIONS
        /**
         * @return {?}
         */
        CardComponent.prototype.setEditMode =
            // ACTIONS
            /**
             * @return {?}
             */
            function () {
                this.editMode = true;
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.cancelEdit = /**
         * @return {?}
         */
            function () {
                this.editMode = false;
                this.cancelCard.emit(5);
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.delete = /**
         * @return {?}
         */
            function () {
                this.deleteCard.emit(1);
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.setDefault = /**
         * @return {?}
         */
            function () {
                this.isDefault = true;
                this.setDefaultCard.emit(2);
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.send = /**
         * @return {?}
         */
            function () {
                this.sendCard.emit(3);
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.edit = /**
         * @return {?}
         */
            function () {
                this.editCard.emit(4);
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-card',
                        template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <img src=\"{{ content.img }}\" alt=\"\" />\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-card-border{border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-card-container{display:var(--cx-display,flex)}.cx-card-label-container{flex-grow:var(--cx-flex-grow,2)}.cx-card-fit-to-container{width:var(--cx-width,100%);height:var(--cx-height,100%);display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-card-body{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);justify-content:var(--cx-justify-content,space-between)}.cx-card-delete{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-card-body-delete{padding:var(--cx-padding,1rem 0 0 0)}.cx-card-delete-msg{color:var(--cx-color,var(--cx-g-color-danger));padding:var(--cx-padding,0 0 1.25rem 0)}.cx-card-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);padding:var(--cx-padding,1.25rem 0 0 0)}.cx-card-link{padding:var(--cx-padding,0 0 0 1rem)}"]
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () { return []; };
        CardComponent.propDecorators = {
            deleteCard: [{ type: i0.Output }],
            setDefaultCard: [{ type: i0.Output }],
            sendCard: [{ type: i0.Output }],
            editCard: [{ type: i0.Output }],
            cancelCard: [{ type: i0.Output }],
            border: [{ type: i0.Input }],
            editMode: [{ type: i0.Input }],
            isDefault: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            fitToContainer: [{ type: i0.Input }]
        };
        return CardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, i1$1.I18nModule],
                        declarations: [CardComponent],
                        exports: [CardComponent],
                    },] }
        ];
        return CardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressCardComponent = /** @class */ (function () {
        function AddressCardComponent(userService) {
            this.userService = userService;
            this.editEvent = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        AddressCardComponent.prototype.openEditFormEvent = /**
         * @return {?}
         */
            function () {
                this.editEvent.emit();
            };
        /**
         * @return {?}
         */
        AddressCardComponent.prototype.cancelEdit = /**
         * @return {?}
         */
            function () {
                this.editMode = false;
            };
        /**
         * @return {?}
         */
        AddressCardComponent.prototype.setEditMode = /**
         * @return {?}
         */
            function () {
                this.editMode = true;
            };
        /**
         * @param {?} addressId
         * @return {?}
         */
        AddressCardComponent.prototype.setAddressAsDefault = /**
         * @param {?} addressId
         * @return {?}
         */
            function (addressId) {
                if (this.userId) {
                    this.userService.setAddressAsDefault(this.userId, addressId);
                }
            };
        /**
         * @param {?} addressId
         * @return {?}
         */
        AddressCardComponent.prototype.deleteAddress = /**
         * @param {?} addressId
         * @return {?}
         */
            function (addressId) {
                if (this.userId) {
                    this.userService.deleteUserAddress(this.userId, addressId);
                }
            };
        AddressCardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-address-card',
                        template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AddressCardComponent.ctorParameters = function () {
            return [
                { type: i1$1.UserService }
            ];
        };
        AddressCardComponent.propDecorators = {
            userId: [{ type: i0.Input }],
            address: [{ type: i0.Input }],
            editEvent: [{ type: i0.Output }]
        };
        return AddressCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressBookModule = /** @class */ (function () {
        function AddressBookModule() {
        }
        AddressBookModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    AccountAddressBookComponent: {
                                        selector: 'cx-address-book',
                                        providers: [
                                            {
                                                provide: AddressBookComponentService,
                                                useClass: AddressBookComponentService,
                                                deps: [i1$1.UserService],
                                            },
                                        ],
                                    },
                                },
                            }))),
                            CardModule,
                            AddressFormModule,
                            SpinnerModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [AddressBookComponent, AddressCardComponent],
                        exports: [AddressBookComponent, AddressCardComponent],
                        providers: [i1$1.UserService, AddressBookComponentService],
                        entryComponents: [AddressBookComponent],
                    },] }
        ];
        return AddressBookModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseAccountModalComponent = /** @class */ (function () {
        function CloseAccountModalComponent(activeModal, userService, authService, globalMessageService, routingService, translationService) {
            this.activeModal = activeModal;
            this.userService = userService;
            this.authService = authService;
            this.globalMessageService = globalMessageService;
            this.routingService = routingService;
            this.translationService = translationService;
            this.subscription = new rxjs.Subscription();
        }
        /**
         * @return {?}
         */
        CloseAccountModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.userToken$ = this.authService.getUserToken();
                this.userService.resetRemoveUserProcessState();
                this.subscription.add(this.userService
                    .getRemoveUserResultSuccess()
                    .subscribe(function (success) { return _this.onSuccess(success); }));
                this.isLoading$ = this.userService.getRemoveUserResultLoading();
            };
        /**
         * @param {?} success
         * @return {?}
         */
        CloseAccountModalComponent.prototype.onSuccess = /**
         * @param {?} success
         * @return {?}
         */
            function (success) {
                var _this = this;
                if (success) {
                    this.closeModal();
                    this.translationService
                        .translate('closeAccount.message.success')
                        .pipe(operators.first())
                        .subscribe(function (text) {
                        _this.globalMessageService.add(text, i1$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    });
                    this.routingService.go({ route: 'home' });
                }
            };
        /**
         * @return {?}
         */
        CloseAccountModalComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                this.activeModal.dismiss();
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        CloseAccountModalComponent.prototype.closeAccount = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                this.userService.remove(userId);
            };
        /**
         * @return {?}
         */
        CloseAccountModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
            };
        CloseAccountModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-close-account-modal',
                        template: "<ng-container *ngIf=\"(userToken$ | async) as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.modal.title' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeModal()\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.modal.confirmation' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"closeAccount(userToken.userId)\"\n          >\n            {{ 'closeAccount.action.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"closeModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'closeAccount.action.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:flex;flex-direction:column;height:100%}.cx-dialog-header{padding:var(--cx-padding,2rem 1.75rem .85rem);border-width:var(--cx-border-width,0)}h3{font-weight:var(--cx-g-font-weight-semi)}.cx-row{display:flex}.cx-confirmation{margin:var(--cx-margin,0 0 3em 0)}.cx-btn-group{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);width:var(--cx-width,100%)}.cx-btn-group button:first-child{margin:var(--cx-margin,0 0 1em 0)}@media (max-width:767.98px){.modal-body{top:-85px;flex:none;margin:auto 0}}"]
                    }] }
        ];
        /** @nocollapse */
        CloseAccountModalComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbActiveModal },
                { type: i1$1.UserService },
                { type: i1$1.AuthService },
                { type: i1$1.GlobalMessageService },
                { type: i1$1.RoutingService },
                { type: i1$1.TranslationService }
            ];
        };
        return CloseAccountModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseAccountComponent = /** @class */ (function () {
        function CloseAccountComponent(modalService) {
            this.modalService = modalService;
        }
        /**
         * @return {?}
         */
        CloseAccountComponent.prototype.openModal = /**
         * @return {?}
         */
            function () {
                this.modal = this.modalService.open(CloseAccountModalComponent, {
                    centered: true,
                }).componentInstance;
            };
        CloseAccountComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-close-account',
                        template: "<div class=\"col-lg-8 col-md-9\">\n  <p\n    class=\"cx-info\"\n    [innerHTML]=\"'closeAccount.info.retention' | cxTranslate\"\n  ></p>\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ route: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'closeAccount.action.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.action.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CloseAccountComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbModal }
            ];
        };
        return CloseAccountComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseAccountModule = /** @class */ (function () {
        function CloseAccountModule() {
        }
        CloseAccountModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.UrlModule,
                            i1$1.I18nModule,
                            SpinnerModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CloseAccountComponent: { selector: 'cx-close-account' },
                                },
                            }))),
                        ],
                        declarations: [CloseAccountComponent, CloseAccountModalComponent],
                        exports: [CloseAccountComponent],
                        entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
                    },] }
        ];
        return CloseAccountModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ForgotPasswordComponent = /** @class */ (function () {
        function ForgotPasswordComponent(fb, userService, routingService) {
            this.fb = fb;
            this.userService = userService;
            this.routingService = routingService;
            this.submited = false;
        }
        /**
         * @return {?}
         */
        ForgotPasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.form = this.fb.group({
                    userEmail: [
                        '',
                        [forms.Validators.required, CustomFormValidators.emailValidator],
                    ],
                });
            };
        /**
         * @return {?}
         */
        ForgotPasswordComponent.prototype.requestForgotPasswordEmail = /**
         * @return {?}
         */
            function () {
                this.submited = true;
                if (this.form.invalid) {
                    return;
                }
                this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
                this.routingService.go({ route: 'login' });
            };
        ForgotPasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-forgot-password',
                        template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ route: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n",
                        styles: [".reset-password h1{margin:var(--cx-margin,0)}.reset-password button{margin:var(--cx-margin,30px 0 0)}.reset-password a{margin:var(--cx-margin,20px 0 0)}"]
                    }] }
        ];
        /** @nocollapse */
        ForgotPasswordComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.UserService },
                { type: i1$1.RoutingService }
            ];
        };
        return ForgotPasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ForgotPasswordModule = /** @class */ (function () {
        function ForgotPasswordModule() {
        }
        ForgotPasswordModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            i1$2.RouterModule,
                            i1$1.UrlModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    ForgotPasswordComponent: { selector: 'cx-forgot-password' },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [ForgotPasswordComponent],
                        exports: [ForgotPasswordComponent],
                        entryComponents: [ForgotPasswordComponent],
                    },] }
        ];
        return ForgotPasswordModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailsService = /** @class */ (function () {
        function OrderDetailsService(authService, userService, routingService) {
            var _this = this;
            this.authService = authService;
            this.userService = userService;
            this.routingService = routingService;
            this.userId$ = this.authService
                .getUserToken()
                .pipe(operators.map(function (userData) { return userData.userId; }));
            this.orderCode$ = this.routingService
                .getRouterState()
                .pipe(operators.map(function (routingData) { return routingData.state.params.orderCode; }));
            this.orderLoad$ = rxjs.combineLatest(this.userId$, this.orderCode$).pipe(operators.tap(function (_a) {
                var _b = __read(_a, 2), userId = _b[0], orderCode = _b[1];
                if (userId && orderCode) {
                    _this.userService.loadOrderDetails(userId, orderCode);
                }
                else {
                    _this.userService.clearOrderDetails();
                }
            }), operators.shareReplay({ bufferSize: 1, refCount: true }));
        }
        /**
         * @return {?}
         */
        OrderDetailsService.prototype.getOrderDetails = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.orderLoad$.pipe(operators.switchMap(function () { return _this.userService.getOrderDetails(); }));
            };
        OrderDetailsService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OrderDetailsService.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.UserService },
                { type: i1$1.RoutingService }
            ];
        };
        return OrderDetailsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailHeadlineComponent = /** @class */ (function () {
        function OrderDetailHeadlineComponent(orderDetailsService) {
            this.orderDetailsService = orderDetailsService;
        }
        /**
         * @return {?}
         */
        OrderDetailHeadlineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.order$ = this.orderDetailsService.getOrderDetails();
            };
        OrderDetailHeadlineComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-details-headline',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | date }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">\n        {{\n          'orderDetails.statusDisplay'\n            | cxTranslate: { context: order?.statusDisplay }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailHeadlineComponent.ctorParameters = function () {
            return [
                { type: OrderDetailsService }
            ];
        };
        return OrderDetailHeadlineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailItemsComponent = /** @class */ (function () {
        function OrderDetailItemsComponent(orderDetailsService) {
            this.orderDetailsService = orderDetailsService;
        }
        /**
         * @return {?}
         */
        OrderDetailItemsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.order$ = this.orderDetailsService.getOrderDetails();
            };
        /**
         * @param {?} consignment
         * @return {?}
         */
        OrderDetailItemsComponent.prototype.getConsignmentProducts = /**
         * @param {?} consignment
         * @return {?}
         */
            function (consignment) {
                /** @type {?} */
                var products = [];
                consignment.entries.forEach(function (element) {
                    products.push(element.orderEntry);
                });
                return products;
            };
        OrderDetailItemsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-details-items',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">{{ consignment?.status }}</div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | date }}</div>\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.inProcess' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailItemsComponent.ctorParameters = function () {
            return [
                { type: OrderDetailsService }
            ];
        };
        return OrderDetailItemsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailShippingComponent = /** @class */ (function () {
        function OrderDetailShippingComponent(orderDetailsService, translation) {
            this.orderDetailsService = orderDetailsService;
            this.translation = translation;
        }
        /**
         * @return {?}
         */
        OrderDetailShippingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.order$ = this.orderDetailsService.getOrderDetails();
            };
        /**
         * @param {?} address
         * @return {?}
         */
        OrderDetailShippingComponent.prototype.getAddressCardContent = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                return rxjs.combineLatest([
                    this.translation.translate('addressCard.shipTo'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: address.firstName + " " + address.lastName,
                        text: [
                            address.line1,
                            address.line2,
                            address.town + ", " + address.country.isocode + ", " + address.postalCode,
                            address.phone,
                        ],
                    };
                }));
            };
        /**
         * @param {?} billingAddress
         * @return {?}
         */
        OrderDetailShippingComponent.prototype.getBillingAddressCardContent = /**
         * @param {?} billingAddress
         * @return {?}
         */
            function (billingAddress) {
                return rxjs.combineLatest([
                    this.translation.translate('addressCard.billTo'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: billingAddress.firstName + " " + billingAddress.lastName,
                        text: [
                            billingAddress.line1,
                            billingAddress.line2,
                            billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                            billingAddress.phone,
                        ],
                    };
                }));
            };
        /**
         * @param {?} payment
         * @return {?}
         */
        OrderDetailShippingComponent.prototype.getPaymentCardContent = /**
         * @param {?} payment
         * @return {?}
         */
            function (payment) {
                return rxjs.combineLatest([
                    this.translation.translate('paymentForm.payment'),
                    this.translation.translate('paymentCard.expires', {
                        month: payment.expiryMonth,
                        year: payment.expiryYear,
                    }),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
                    return {
                        title: textTitle,
                        textBold: payment.accountHolderName,
                        text: [payment.cardType.name, payment.cardNumber, textExpires],
                    };
                }));
            };
        /**
         * @param {?} shipping
         * @return {?}
         */
        OrderDetailShippingComponent.prototype.getShippingMethodCardContent = /**
         * @param {?} shipping
         * @return {?}
         */
            function (shipping) {
                return rxjs.combineLatest([
                    this.translation.translate('checkoutShipping.shippingMethod'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: shipping.name,
                        text: [shipping.description],
                    };
                }));
            };
        OrderDetailShippingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-details-shipping',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailShippingComponent.ctorParameters = function () {
            return [
                { type: OrderDetailsService },
                { type: i1$1.TranslationService }
            ];
        };
        return OrderDetailShippingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailTotalsComponent = /** @class */ (function () {
        function OrderDetailTotalsComponent(orderDetailsService) {
            this.orderDetailsService = orderDetailsService;
        }
        /**
         * @return {?}
         */
        OrderDetailTotalsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.order$ = this.orderDetailsService.getOrderDetails();
            };
        OrderDetailTotalsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-details-totals',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailTotalsComponent.ctorParameters = function () {
            return [
                { type: OrderDetailsService }
            ];
        };
        return OrderDetailTotalsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moduleComponents = [
        OrderDetailHeadlineComponent,
        OrderDetailItemsComponent,
        OrderDetailTotalsComponent,
        OrderDetailShippingComponent,
    ];
    var OrderDetailsModule = /** @class */ (function () {
        function OrderDetailsModule() {
        }
        OrderDetailsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            CartSharedModule,
                            CardModule,
                            common.CommonModule,
                            i1$1.I18nModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    AccountOrderDetailsHeadlineComponent: {
                                        selector: 'cx-order-details-headline',
                                    },
                                    AccountOrderDetailsItemsComponent: {
                                        selector: 'cx-order-details-items',
                                    },
                                    AccountOrderDetailsTotalsComponent: {
                                        selector: 'cx-order-details-totals',
                                    },
                                    AccountOrderDetailsShippingComponent: {
                                        selector: 'cx-order-details-shipping',
                                    },
                                },
                            }))),
                        ],
                        providers: [OrderDetailsService],
                        declarations: __spread(moduleComponents),
                        exports: __spread(moduleComponents),
                        entryComponents: __spread(moduleComponents),
                    },] }
        ];
        return OrderDetailsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderHistoryComponent = /** @class */ (function () {
        function OrderHistoryComponent(auth, routing, userService, translation) {
            this.auth = auth;
            this.routing = routing;
            this.userService = userService;
            this.translation = translation;
            this.PAGE_SIZE = 5;
        }
        /**
         * @return {?}
         */
        OrderHistoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.subscription = this.auth.getUserToken().subscribe(function (userData) {
                    if (userData && userData.userId) {
                        _this.user_id = userData.userId;
                    }
                });
                this.orders$ = this.userService
                    .getOrderHistoryList(this.user_id, this.PAGE_SIZE)
                    .pipe(operators.tap(function (orders) {
                    if (orders.pagination) {
                        _this.sortType = orders.pagination.sort;
                    }
                }));
                this.isLoaded$ = this.userService.getOrderHistoryListLoaded();
            };
        /**
         * @return {?}
         */
        OrderHistoryComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                this.userService.clearOrderList();
            };
        /**
         * @param {?} sortCode
         * @return {?}
         */
        OrderHistoryComponent.prototype.changeSortCode = /**
         * @param {?} sortCode
         * @return {?}
         */
            function (sortCode) {
                /** @type {?} */
                var event = {
                    sortCode: sortCode,
                    currentPage: 0,
                };
                this.sortType = sortCode;
                this.fetchOrders(event);
            };
        /**
         * @param {?} page
         * @return {?}
         */
        OrderHistoryComponent.prototype.pageChange = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                /** @type {?} */
                var event = {
                    sortCode: this.sortType,
                    currentPage: page,
                };
                this.fetchOrders(event);
            };
        /**
         * @param {?} order
         * @return {?}
         */
        OrderHistoryComponent.prototype.goToOrderDetail = /**
         * @param {?} order
         * @return {?}
         */
            function (order) {
                this.routing.go({
                    route: 'orderDetails',
                    params: order,
                });
            };
        /**
         * @return {?}
         */
        OrderHistoryComponent.prototype.getSortLabels = /**
         * @return {?}
         */
            function () {
                return rxjs.combineLatest([
                    this.translation.translate('sorting.date'),
                    this.translation.translate('sorting.orderNumber'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), textByDate = _b[0], textByOrderNumber = _b[1];
                    return {
                        byDate: textByDate,
                        byOrderNumber: textByOrderNumber,
                    };
                }));
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        OrderHistoryComponent.prototype.fetchOrders = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.userService.loadOrderList(this.user_id, this.PAGE_SIZE, event.currentPage, event.sortCode);
            };
        OrderHistoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-history',
                        template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderHistoryComponent.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.RoutingService },
                { type: i1$1.UserService },
                { type: i1$1.TranslationService }
            ];
        };
        return OrderHistoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderHistoryModule = /** @class */ (function () {
        function OrderHistoryModule() {
        }
        OrderHistoryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    AccountOrderHistoryComponent: { selector: 'cx-order-history' },
                                },
                            }))),
                            i1$2.RouterModule,
                            forms.FormsModule,
                            ngSelect.NgSelectModule,
                            BootstrapModule,
                            ListNavigationModule,
                            i1$1.UrlModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [OrderHistoryComponent],
                        exports: [OrderHistoryComponent],
                        providers: [i1$1.UserService],
                        entryComponents: [OrderHistoryComponent],
                    },] }
        ];
        return OrderHistoryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderModule = /** @class */ (function () {
        function OrderModule() {
        }
        OrderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [OrderHistoryModule, OrderDetailsModule],
                    },] }
        ];
        return OrderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodsComponent = /** @class */ (function () {
        function PaymentMethodsComponent(userService, translation) {
            this.userService = userService;
            this.translation = translation;
        }
        /**
         * @return {?}
         */
        PaymentMethodsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.paymentMethods$ = this.userService.getPaymentMethods();
                this.editCard = null;
                this.loading$ = this.userService.getPaymentMethodsLoading();
                this.userServiceSub = this.userService.get().subscribe(function (data) {
                    _this.userId = data.uid;
                    _this.userService.loadPaymentMethods(_this.userId);
                });
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        PaymentMethodsComponent.prototype.getCardContent = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var defaultPayment = _a.defaultPayment, accountHolderName = _a.accountHolderName, expiryMonth = _a.expiryMonth, expiryYear = _a.expiryYear, cardNumber = _a.cardNumber;
                return rxjs.combineLatest([
                    this.translation.translate('paymentCard.setAsDefault'),
                    this.translation.translate('common.delete'),
                    this.translation.translate('paymentCard.deleteConfirmation'),
                    this.translation.translate('paymentCard.expires', {
                        month: expiryMonth,
                        year: expiryYear,
                    }),
                    this.translation.translate('paymentCard.defaultPaymentMethod'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 5), textSetAsDefault = _b[0], textDelete = _b[1], textDeleteConfirmation = _b[2], textExpires = _b[3], textDefaultPaymentMethod = _b[4];
                    /** @type {?} */
                    var actions = [];
                    if (!defaultPayment) {
                        actions.push({ name: textSetAsDefault, event: 'default' });
                    }
                    actions.push({ name: textDelete, event: 'edit' });
                    /** @type {?} */
                    var card = {
                        header: defaultPayment ? textDefaultPaymentMethod : null,
                        textBold: accountHolderName,
                        text: [cardNumber, textExpires],
                        actions: actions,
                        deleteMsg: textDeleteConfirmation,
                    };
                    return card;
                }));
            };
        /**
         * @param {?} paymentMethod
         * @return {?}
         */
        PaymentMethodsComponent.prototype.deletePaymentMethod = /**
         * @param {?} paymentMethod
         * @return {?}
         */
            function (paymentMethod) {
                if (this.userId) {
                    this.userService.deletePaymentMethod(this.userId, paymentMethod.id);
                }
                this.editCard = null;
            };
        /**
         * @param {?} paymentMethod
         * @return {?}
         */
        PaymentMethodsComponent.prototype.setEdit = /**
         * @param {?} paymentMethod
         * @return {?}
         */
            function (paymentMethod) {
                this.editCard = paymentMethod.id;
            };
        /**
         * @return {?}
         */
        PaymentMethodsComponent.prototype.cancelCard = /**
         * @return {?}
         */
            function () {
                this.editCard = null;
            };
        /**
         * @param {?} paymentMethod
         * @return {?}
         */
        PaymentMethodsComponent.prototype.setDefaultPaymentMethod = /**
         * @param {?} paymentMethod
         * @return {?}
         */
            function (paymentMethod) {
                if (this.userId) {
                    this.userService.setPaymentMethodAsDefault(this.userId, paymentMethod.id);
                }
            };
        /**
         * @return {?}
         */
        PaymentMethodsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.userServiceSub) {
                    this.userServiceSub.unsubscribe();
                }
            };
        PaymentMethodsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-payment-methods',
                        template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        PaymentMethodsComponent.ctorParameters = function () {
            return [
                { type: i1$1.UserService },
                { type: i1$1.TranslationService }
            ];
        };
        return PaymentMethodsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodsModule = /** @class */ (function () {
        function PaymentMethodsModule() {
        }
        PaymentMethodsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CardModule,
                            SpinnerModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    AccountPaymentDetailsComponent: { selector: 'cx-payment-methods' },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        providers: [i1$1.UserService],
                        declarations: [PaymentMethodsComponent],
                        exports: [PaymentMethodsComponent],
                        entryComponents: [PaymentMethodsComponent],
                    },] }
        ];
        return PaymentMethodsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordFormComponent = /** @class */ (function () {
        function ResetPasswordFormComponent(fb, routingService, userService) {
            this.fb = fb;
            this.routingService = routingService;
            this.userService = userService;
            this.subscription = new rxjs.Subscription();
            this.submited = false;
            this.form = this.fb.group({
                password: [
                    '',
                    [forms.Validators.required, CustomFormValidators.passwordValidator],
                ],
                repassword: ['', [forms.Validators.required]],
            }, { validator: this.matchPassword });
        }
        /**
         * @return {?}
         */
        ResetPasswordFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.subscription.add(this.routingService
                    .getRouterState()
                    .subscribe(function (state) { return (_this.token = state.state.queryParams['token']); }));
                this.subscription.add(this.userService.isPasswordReset().subscribe(function (reset) {
                    if (reset) {
                        _this.routingService.go({ route: 'login' });
                    }
                }));
            };
        /**
         * @return {?}
         */
        ResetPasswordFormComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        ResetPasswordFormComponent.prototype.resetPassword = /**
         * @return {?}
         */
            function () {
                this.submited = true;
                if (this.form.invalid) {
                    return;
                }
                /** @type {?} */
                var password = this.form.value['password'];
                this.userService.resetPassword(this.token, password);
            };
        /**
         * @private
         * @param {?} ac
         * @return {?}
         */
        ResetPasswordFormComponent.prototype.matchPassword = /**
         * @private
         * @param {?} ac
         * @return {?}
         */
            function (ac) {
                if (ac.get('password').value !== ac.get('repassword').value) {
                    return { NotEqual: true };
                }
            };
        ResetPasswordFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-reset-password-form',
                        template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
                    }] }
        ];
        /** @nocollapse */
        ResetPasswordFormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.RoutingService },
                { type: i1$1.UserService }
            ];
        };
        return ResetPasswordFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordModule = /** @class */ (function () {
        function ResetPasswordModule() {
        }
        ResetPasswordModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    ResetPasswordComponent: { selector: 'cx-reset-password-form' },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1$2.RouterModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [ResetPasswordFormComponent],
                        exports: [ResetPasswordFormComponent],
                        entryComponents: [ResetPasswordFormComponent],
                    },] }
        ];
        return ResetPasswordModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Utility class when working with forms.
     */
    var /**
     * Utility class when working with forms.
     */ FormUtils = /** @class */ (function () {
        function FormUtils() {
        }
        /**
         *
         * Checks is the `formControlName` field valid in the provided `form`.
         *
         * If it's NOT valid, the method returns `true`.
         *
         * @param form a form whose field to check
         * @param formControlName a field name
         * @param submitted is the form submitted
         */
        /**
         *
         * Checks is the `formControlName` field valid in the provided `form`.
         *
         * If it's NOT valid, the method returns `true`.
         *
         * @param {?} form a form whose field to check
         * @param {?} formControlName a field name
         * @param {?} submitted is the form submitted
         * @return {?}
         */
        FormUtils.isNotValidField = /**
         *
         * Checks is the `formControlName` field valid in the provided `form`.
         *
         * If it's NOT valid, the method returns `true`.
         *
         * @param {?} form a form whose field to check
         * @param {?} formControlName a field name
         * @param {?} submitted is the form submitted
         * @return {?}
         */
            function (form, formControlName, submitted) {
                return (form.get(formControlName).invalid &&
                    (submitted ||
                        (form.get(formControlName).touched && form.get(formControlName).dirty)));
            };
        return FormUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateEmailFormComponent = /** @class */ (function () {
        function UpdateEmailFormComponent(fb) {
            this.fb = fb;
            this.submited = false;
            this.saveEmail = new i0.EventEmitter();
            this.cancelEmail = new i0.EventEmitter();
            this.form = this.fb.group({
                email: ['', [forms.Validators.required, CustomFormValidators.emailValidator]],
                confirmEmail: ['', [forms.Validators.required]],
                password: ['', [forms.Validators.required]],
            }, { validator: this.matchEmail });
        }
        /**
         * @param {?} formControlName
         * @return {?}
         */
        UpdateEmailFormComponent.prototype.isEmailConfirmNotValid = /**
         * @param {?} formControlName
         * @return {?}
         */
            function (formControlName) {
                return (this.form.hasError('NotEqual') &&
                    (this.submited ||
                        (this.form.get(formControlName).touched &&
                            this.form.get(formControlName).dirty)));
            };
        /**
         * @param {?} formControlName
         * @return {?}
         */
        UpdateEmailFormComponent.prototype.isNotValid = /**
         * @param {?} formControlName
         * @return {?}
         */
            function (formControlName) {
                return FormUtils.isNotValidField(this.form, formControlName, this.submited);
            };
        /**
         * @return {?}
         */
        UpdateEmailFormComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                this.submited = true;
                if (this.form.invalid) {
                    return;
                }
                /** @type {?} */
                var newUid = this.form.value.confirmEmail;
                /** @type {?} */
                var password = this.form.value.password;
                this.saveEmail.emit({ newUid: newUid, password: password });
            };
        /**
         * @return {?}
         */
        UpdateEmailFormComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.cancelEmail.emit();
            };
        /**
         * @private
         * @param {?} ac
         * @return {?}
         */
        UpdateEmailFormComponent.prototype.matchEmail = /**
         * @private
         * @param {?} ac
         * @return {?}
         */
            function (ac) {
                if (ac.get('email').value !== ac.get('confirmEmail').value) {
                    return { NotEqual: true };
                }
            };
        UpdateEmailFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-update-email-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{\n            'updateEmailForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"off\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                        styles: [".form-group button:first-child{margin-bottom:1rem}"]
                    }] }
        ];
        /** @nocollapse */
        UpdateEmailFormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        UpdateEmailFormComponent.propDecorators = {
            saveEmail: [{ type: i0.Output }],
            cancelEmail: [{ type: i0.Output }]
        };
        return UpdateEmailFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateEmailComponent = /** @class */ (function () {
        function UpdateEmailComponent(routingService, globalMessageService, userService, authService) {
            this.routingService = routingService;
            this.globalMessageService = globalMessageService;
            this.userService = userService;
            this.authService = authService;
            this.subscription = new rxjs.Subscription();
        }
        /**
         * @return {?}
         */
        UpdateEmailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.userService.resetUpdateEmailResultState();
                this.subscription.add(this.userService.get().subscribe(function (result) { return (_this.uid = result.uid); }));
                this.subscription.add(this.userService
                    .getUpdateEmailResultSuccess()
                    .subscribe(function (success) { return _this.onSuccess(success); }));
                this.isLoading$ = this.userService.getUpdateEmailResultLoading();
            };
        /**
         * @return {?}
         */
        UpdateEmailComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.routingService.go({ route: 'home' });
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        UpdateEmailComponent.prototype.onSubmit = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var newUid = _a.newUid, password = _a.password;
                this.newUid = newUid;
                this.userService.updateEmail(this.uid, password, newUid);
            };
        /**
         * @param {?} success
         * @return {?}
         */
        UpdateEmailComponent.prototype.onSuccess = /**
         * @param {?} success
         * @return {?}
         */
            function (success) {
                if (success) {
                    this.globalMessageService.add("Success. Please sign in with " + this.newUid, i1$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    this.authService.logout();
                    this.routingService.go({ route: 'login' });
                }
            };
        /**
         * @return {?}
         */
        UpdateEmailComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                this.userService.resetUpdateEmailResultState();
            };
        UpdateEmailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-update-email',
                        template: "<ng-container>\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        UpdateEmailComponent.ctorParameters = function () {
            return [
                { type: i1$1.RoutingService },
                { type: i1$1.GlobalMessageService },
                { type: i1$1.UserService },
                { type: i1$1.AuthService }
            ];
        };
        return UpdateEmailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateEmailModule = /** @class */ (function () {
        function UpdateEmailModule() {
        }
        UpdateEmailModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    UpdateEmailComponent: {
                                        selector: 'cx-update-email',
                                    },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            SpinnerModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
                        exports: [UpdateEmailComponent],
                        entryComponents: [UpdateEmailComponent],
                    },] }
        ];
        return UpdateEmailModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePasswordFormComponent = /** @class */ (function () {
        function UpdatePasswordFormComponent(fb) {
            this.fb = fb;
            this.submitClicked = false;
            this.submited = new i0.EventEmitter();
            this.cancelled = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        UpdatePasswordFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.form = this.fb.group({
                    oldPassword: ['', [forms.Validators.required]],
                    newPassword: [
                        '',
                        [forms.Validators.required, CustomFormValidators.passwordValidator],
                    ],
                    newPasswordConfirm: ['', [forms.Validators.required]],
                }, { validator: this.matchPassword });
            };
        /**
         * @param {?} formControlName
         * @return {?}
         */
        UpdatePasswordFormComponent.prototype.isNotValid = /**
         * @param {?} formControlName
         * @return {?}
         */
            function (formControlName) {
                return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
            };
        /**
         * @return {?}
         */
        UpdatePasswordFormComponent.prototype.isPasswordConfirmNotValid = /**
         * @return {?}
         */
            function () {
                return (this.form.hasError('NotEqual') &&
                    (this.submitClicked ||
                        (this.form.get('newPasswordConfirm').touched &&
                            this.form.get('newPasswordConfirm').dirty)));
            };
        /**
         * @return {?}
         */
        UpdatePasswordFormComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                this.submitClicked = true;
                if (this.form.invalid) {
                    return;
                }
                this.submited.emit({
                    oldPassword: this.form.value.oldPassword,
                    newPassword: this.form.value.newPassword,
                });
            };
        /**
         * @return {?}
         */
        UpdatePasswordFormComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.cancelled.emit();
            };
        /**
         * @private
         * @param {?} abstractControl
         * @return {?}
         */
        UpdatePasswordFormComponent.prototype.matchPassword = /**
         * @private
         * @param {?} abstractControl
         * @return {?}
         */
            function (abstractControl) {
                if (abstractControl.get('newPassword').value !==
                    abstractControl.get('newPasswordConfirm').value) {
                    return { NotEqual: true };
                }
                return null;
            };
        UpdatePasswordFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-update-password-form',
                        template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                        styles: [".form-group button:first-child{margin-bottom:1rem}"]
                    }] }
        ];
        /** @nocollapse */
        UpdatePasswordFormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        UpdatePasswordFormComponent.propDecorators = {
            submited: [{ type: i0.Output }],
            cancelled: [{ type: i0.Output }]
        };
        return UpdatePasswordFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePasswordComponent = /** @class */ (function () {
        function UpdatePasswordComponent(routingService, userService, globalMessageService) {
            this.routingService = routingService;
            this.userService = userService;
            this.globalMessageService = globalMessageService;
            this.subscription = new rxjs.Subscription();
        }
        /**
         * @return {?}
         */
        UpdatePasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.userService.resetUpdatePasswordProcessState();
                this.loading$ = this.userService.getUpdatePasswordResultLoading();
                this.userService
                    .get()
                    .pipe(operators.take(1))
                    .subscribe(function (user) {
                    _this.userId = user.uid;
                });
                this.subscription.add(this.userService
                    .getUpdatePasswordResultSuccess()
                    .subscribe(function (success) { return _this.onSuccess(success); }));
            };
        /**
         * @param {?} success
         * @return {?}
         */
        UpdatePasswordComponent.prototype.onSuccess = /**
         * @param {?} success
         * @return {?}
         */
            function (success) {
                if (success) {
                    this.globalMessageService.add('Password updated with success', i1$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    this.routingService.go({ route: 'home' });
                }
            };
        /**
         * @return {?}
         */
        UpdatePasswordComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.routingService.go({ route: 'home' });
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        UpdatePasswordComponent.prototype.onSubmit = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                this.userService.updatePassword(this.userId, oldPassword, newPassword);
            };
        /**
         * @return {?}
         */
        UpdatePasswordComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                this.userService.resetUpdatePasswordProcessState();
            };
        UpdatePasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-update-password',
                        template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdatePasswordComponent.ctorParameters = function () {
            return [
                { type: i1$1.RoutingService },
                { type: i1$1.UserService },
                { type: i1$1.GlobalMessageService }
            ];
        };
        return UpdatePasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePasswordModule = /** @class */ (function () {
        function UpdatePasswordModule() {
        }
        UpdatePasswordModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    UpdatePasswordComponent: { selector: 'cx-update-password' },
                                },
                            }))),
                            SpinnerModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
                        exports: [UpdatePasswordComponent],
                        entryComponents: [UpdatePasswordComponent],
                    },] }
        ];
        return UpdatePasswordModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateProfileFormComponent = /** @class */ (function () {
        function UpdateProfileFormComponent(fb) {
            this.fb = fb;
            this.submited = new i0.EventEmitter();
            this.cancelled = new i0.EventEmitter();
            this.form = this.fb.group({
                titleCode: [''],
                firstName: ['', forms.Validators.required],
                lastName: ['', forms.Validators.required],
            });
            this.submitClicked = false;
        }
        /**
         * @return {?}
         */
        UpdateProfileFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.user) {
                    this.form.patchValue(this.user);
                }
            };
        /**
         * @param {?} formControlName
         * @return {?}
         */
        UpdateProfileFormComponent.prototype.isNotValid = /**
         * @param {?} formControlName
         * @return {?}
         */
            function (formControlName) {
                return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
            };
        /**
         * @return {?}
         */
        UpdateProfileFormComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                this.submitClicked = true;
                if (this.form.invalid) {
                    return;
                }
                this.submited.emit({
                    uid: this.user.uid,
                    userUpdates: __assign({}, this.form.value),
                });
            };
        /**
         * @return {?}
         */
        UpdateProfileFormComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.cancelled.emit();
            };
        UpdateProfileFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-update-profile-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.LastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                        styles: [".form-group button:first-child{margin-bottom:1rem}"]
                    }] }
        ];
        /** @nocollapse */
        UpdateProfileFormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        UpdateProfileFormComponent.propDecorators = {
            user: [{ type: i0.Input }],
            titles: [{ type: i0.Input }],
            submited: [{ type: i0.Output }],
            cancelled: [{ type: i0.Output }]
        };
        return UpdateProfileFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateProfileComponent = /** @class */ (function () {
        function UpdateProfileComponent(routingService, userService, globalMessageService) {
            this.routingService = routingService;
            this.userService = userService;
            this.globalMessageService = globalMessageService;
            this.subscription = new rxjs.Subscription();
        }
        /**
         * @return {?}
         */
        UpdateProfileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // reset the previous form processing state
                this.userService.resetUpdatePersonalDetailsProcessingState();
                this.user$ = this.userService.get();
                this.titles$ = this.userService.getTitles().pipe(operators.tap(function (titles) {
                    if (Object.keys(titles).length === 0) {
                        _this.userService.loadTitles();
                    }
                }));
                this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
                this.subscription.add(this.userService
                    .getUpdatePersonalDetailsResultSuccess()
                    .subscribe(function (success) { return _this.onSuccess(success); }));
            };
        /**
         * @param {?} success
         * @return {?}
         */
        UpdateProfileComponent.prototype.onSuccess = /**
         * @param {?} success
         * @return {?}
         */
            function (success) {
                if (success) {
                    this.globalMessageService.add('Personal details successfully updated', i1$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    this.routingService.go({ route: 'home' });
                }
            };
        /**
         * @return {?}
         */
        UpdateProfileComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.routingService.go({ route: 'home' });
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        UpdateProfileComponent.prototype.onSubmit = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var uid = _a.uid, userUpdates = _a.userUpdates;
                this.userService.updatePersonalDetails(uid, userUpdates);
            };
        /**
         * @return {?}
         */
        UpdateProfileComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                // clean up the state
                this.userService.resetUpdatePersonalDetailsProcessingState();
            };
        UpdateProfileComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-update-profile',
                        template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdateProfileComponent.ctorParameters = function () {
            return [
                { type: i1$1.RoutingService },
                { type: i1$1.UserService },
                { type: i1$1.GlobalMessageService }
            ];
        };
        return UpdateProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateProfileModule = /** @class */ (function () {
        function UpdateProfileModule() {
        }
        UpdateProfileModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    UpdateProfileComponent: { selector: 'cx-update-profile' },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            SpinnerModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
                        exports: [UpdateProfileComponent],
                        entryComponents: [UpdateProfileComponent],
                    },] }
        ];
        return UpdateProfileModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(component, pageMetaService) {
            this.component = component;
            this.pageMetaService = pageMetaService;
        }
        /**
         * @return {?}
         */
        BreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setTitle();
                this.setCrumbs();
            };
        /**
         * @private
         * @return {?}
         */
        BreadcrumbComponent.prototype.setTitle = /**
         * @private
         * @return {?}
         */
            function () {
                this.title$ = this.pageMetaService.getMeta().pipe(operators.filter(Boolean), operators.map(function (meta) { return meta.heading || meta.title; }));
            };
        /**
         * @private
         * @return {?}
         */
        BreadcrumbComponent.prototype.setCrumbs = /**
         * @private
         * @return {?}
         */
            function () {
                this.crumbs$ = this.pageMetaService
                    .getMeta()
                    .pipe(operators.map(function (meta) {
                    return meta.breadcrumbs ? meta.breadcrumbs : [{ label: 'Home', link: '/' }];
                }));
            };
        BreadcrumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-breadcrumb',
                        template: "<nav>\n  <span *ngFor=\"let crumb of (crumbs$ | async)\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () {
            return [
                { type: CmsComponentData },
                { type: i1$1.PageMetaService }
            ];
        };
        return BreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    BreadcrumbComponent: { selector: 'cx-breadcrumb' },
                                },
                            }))),
                            i1$1.CmsPageTitleModule,
                        ],
                        declarations: [BreadcrumbComponent],
                        entryComponents: [BreadcrumbComponent],
                    },] }
        ];
        return BreadcrumbModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationComponentService = /** @class */ (function () {
        function NavigationComponentService(cmsService, componentData) {
            this.cmsService = cmsService;
            this.componentData = componentData;
        }
        /**
         * Get all navigation entry items' type and id. Dispatch action to load all these items
         * @param nodeData
         * @param root
         * @param itemsList
         */
        /**
         * Get all navigation entry items' type and id. Dispatch action to load all these items
         * @param {?} nodeData
         * @param {?} root
         * @param {?=} itemsList
         * @return {?}
         */
        NavigationComponentService.prototype.getNavigationEntryItems = /**
         * Get all navigation entry items' type and id. Dispatch action to load all these items
         * @param {?} nodeData
         * @param {?} root
         * @param {?=} itemsList
         * @return {?}
         */
            function (nodeData, root, itemsList) {
                if (itemsList === void 0) {
                    itemsList = [];
                }
                if (nodeData.children && nodeData.children.length > 0) {
                    this.processChildren(nodeData, itemsList);
                }
                else if (nodeData.entries && nodeData.entries.length > 0) {
                    nodeData.entries.forEach(function (entry) {
                        itemsList.push({
                            superType: entry.itemSuperType,
                            id: entry.itemId,
                        });
                    });
                }
                if (root) {
                    /** @type {?} */
                    var rootUid = nodeData.uid;
                    this.cmsService.loadNavigationItems(rootUid, itemsList);
                }
            };
        /**
         * @private
         * @param {?} node
         * @param {?} itemsList
         * @return {?}
         */
        NavigationComponentService.prototype.processChildren = /**
         * @private
         * @param {?} node
         * @param {?} itemsList
         * @return {?}
         */
            function (node, itemsList) {
                var e_1, _a;
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        this.getNavigationEntryItems(child, false, itemsList);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * Create a new node tree for display
         * @param nodeData
         * @param items
         */
        /**
         * Create a new node tree for display
         * @param {?} nodeData
         * @param {?} items
         * @return {?}
         */
        NavigationComponentService.prototype.createNode = /**
         * Create a new node tree for display
         * @param {?} nodeData
         * @param {?} items
         * @return {?}
         */
            function (nodeData, items) {
                /** @type {?} */
                var node = {};
                node['title'] = nodeData.title;
                node['url'] = '';
                if (nodeData.children && nodeData.children.length > 0) {
                    /** @type {?} */
                    var children = this.createChildren(nodeData, items);
                    node['children'] = children;
                }
                else if (nodeData.entries && nodeData.entries.length > 0) {
                    /** @type {?} */
                    var entry = nodeData.entries[0];
                    /** @type {?} */
                    var item = items[entry.itemId + "_" + entry.itemSuperType];
                    // now we only consider CMSLinkComponent
                    if (entry.itemType === 'CMSLinkComponent' && item !== undefined) {
                        if (!node['title']) {
                            node['title'] = item.linkName;
                        }
                        node['url'] = item.url;
                        // if "NEWWINDOW", target is true
                        node['target'] = item.target;
                    }
                }
                return node;
            };
        /**
         * @private
         * @param {?} node
         * @param {?} items
         * @return {?}
         */
        NavigationComponentService.prototype.createChildren = /**
         * @private
         * @param {?} node
         * @param {?} items
         * @return {?}
         */
            function (node, items) {
                var e_2, _a;
                /** @type {?} */
                var children = [];
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        /** @type {?} */
                        var childNode = this.createNode(child, items);
                        children.push(childNode);
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                return children;
            };
        /**
         * @return {?}
         */
        NavigationComponentService.prototype.getComponentData = /**
         * @return {?}
         */
            function () {
                return this.componentData.data$;
            };
        /**
         * @return {?}
         */
        NavigationComponentService.prototype.getNodes = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.getComponentData().pipe(operators.switchMap(function (data) {
                    if (data) {
                        /** @type {?} */
                        var navigation_1 = data.navigationNode ? data.navigationNode : data;
                        return _this.cmsService.getNavigationEntryItems(navigation_1.uid).pipe(operators.tap(function (items) {
                            if (items === undefined) {
                                _this.getNavigationEntryItems(navigation_1, true, []);
                            }
                        }), operators.filter(function (items) { return items !== undefined; }), operators.map(function (items) { return _this.createNode(navigation_1, items); }));
                    }
                }));
            };
        NavigationComponentService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NavigationComponentService.ctorParameters = function () {
            return [
                { type: i1$1.CmsService },
                { type: CmsComponentData, decorators: [{ type: i0.Optional }] }
            ];
        };
        return NavigationComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationComponent = /** @class */ (function () {
        function NavigationComponent(service) {
            this.service = service;
            this.dropdownMode = 'list';
            this.node$ = this.service.getNodes();
        }
        NavigationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-navigation',
                        template: "<cx-navigation-ui [node]=\"node$ | async\" [dropdownMode]=\"dropdownMode\">\n</cx-navigation-ui>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NavigationComponent.ctorParameters = function () {
            return [
                { type: NavigationComponentService }
            ];
        };
        NavigationComponent.propDecorators = {
            dropdownMode: [{ type: i0.Input }],
            node: [{ type: i0.Input }]
        };
        return NavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryNavigationComponent = /** @class */ (function (_super) {
        __extends(CategoryNavigationComponent, _super);
        function CategoryNavigationComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CategoryNavigationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-category-navigation',
                        template: "<nav *ngIf=\"(node$ | async) as node\">\n  <cx-navigation-ui\n    *ngFor=\"let child of node?.children\"\n    ngbDropdown\n    [node]=\"child\"\n    dropdownMode=\"column\"\n  ></cx-navigation-ui>\n</nav>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        return CategoryNavigationComponent;
    }(NavigationComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationUIComponent = /** @class */ (function () {
        function NavigationUIComponent() {
            this.dropdownMode = 'list';
        }
        NavigationUIComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-navigation-ui',
                        template: "<div *ngIf=\"node\" class=\"cx-nav-item nav-item\" ngbDropdown>\n  <a\n    *ngIf=\"node.children && !node.title; else nodeWithChildren\"\n    ngbDropdownToggle\n    >&nbsp;\n  </a>\n  <ng-template #nodeWithChildren>\n    <span\n      *ngIf=\"node.children; else noChildren\"\n      ngbDropdownToggle\n      class=\"cx-nav-link nav-link\"\n      role=\"link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}</span\n    >\n  </ng-template>\n  <ng-template #noChildren>\n    <a\n      [routerLink]=\"node.url\"\n      class=\"cx-nav-link nav-link\"\n      id=\"{{ node.title }}\"\n      >{{ node.title }}\n    </a>\n  </ng-template>\n  <ng-container [ngSwitch]=\"dropdownMode\">\n    <ng-container *ngSwitchCase=\"'list'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list\"\n        [attr.aria-label]=\"node.title\"\n        role=\"list\"\n      >\n        <div\n          role=\"listitem\"\n          *ngFor=\"let subCategory of node.children\"\n          class=\"dropdown-item cx-nav-child-item\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a [routerLink]=\"subCategory.url\" class=\"cx-nav-child-link\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link\">{{ subCategory.title }} </a>\n          </ng-container>\n          <a\n            [routerLink]=\"subCategoryChild.url\"\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            >{{ subCategoryChild.title }}\n          </a>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'column'\">\n      <div\n        ngbDropdownMenu\n        class=\"cx-nav-child-list-columns\"\n        [attr.aria-label]=\"node.title\"\n      >\n        <div\n          class=\"cx-nav-child-column\"\n          *ngFor=\"let subCategory of node.children\"\n        >\n          <ng-container *ngIf=\"subCategory.url\">\n            <a\n              role=\"link\"\n              [routerLink]=\"subCategory.url\"\n              class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"!subCategory.url\">\n            <a class=\"cx-nav-child-link cx-nav-column-title\"\n              >{{ subCategory.title }}\n            </a>\n          </ng-container>\n\n          <div\n            *ngFor=\"let subCategoryChild of subCategory.children\"\n            class=\"dropdown-item cx-nav-child-column-item\"\n          >\n            <a\n              role=\"link\"\n              [routerLink]=\"subCategoryChild.url\"\n              class=\"cx-nav-child-link\"\n              >{{ subCategoryChild.title }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        NavigationUIComponent.propDecorators = {
            dropdownMode: [{ type: i0.Input }],
            node: [{ type: i0.Input }]
        };
        return NavigationUIComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationModule = /** @class */ (function () {
        function NavigationModule() {
        }
        NavigationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            BootstrapModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    NavigationComponent: {
                                        selector: 'cx-navigation',
                                        providers: [
                                            {
                                                provide: NavigationComponentService,
                                                useClass: NavigationComponentService,
                                                deps: [i1$1.CmsService, CmsComponentData],
                                            },
                                        ],
                                    },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [NavigationComponent, NavigationUIComponent],
                        entryComponents: [NavigationComponent],
                        exports: [NavigationComponent, NavigationUIComponent],
                    },] }
        ];
        return NavigationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryNavigationModule = /** @class */ (function () {
        function CategoryNavigationModule() {
        }
        CategoryNavigationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            NavigationModule,
                            BootstrapModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CategoryNavigationComponent: {
                                        selector: 'cx-category-navigation',
                                        providers: [
                                            {
                                                provide: NavigationComponentService,
                                                useClass: NavigationComponentService,
                                                deps: [i1$1.CmsService, CmsComponentData],
                                            },
                                        ],
                                    },
                                },
                            }))),
                        ],
                        declarations: [CategoryNavigationComponent],
                        entryComponents: [CategoryNavigationComponent],
                        exports: [CategoryNavigationComponent],
                    },] }
        ];
        return CategoryNavigationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterNavigationComponent = /** @class */ (function (_super) {
        __extends(FooterNavigationComponent, _super);
        function FooterNavigationComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterNavigationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-footer-navigation',
                        template: "<nav *ngIf=\"(node$ | async) as node\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-xs-12 col-sm-4 col-md-3 navigation-elements\"\n        *ngFor=\"let child of node?.children\"\n      >\n        <h5>{{ child.title }}</h5>\n        <ul>\n          <li *ngFor=\"let link of child.children\">\n            <cx-generic-link\n              [url]=\"link.url\"\n              [target]=\"link.target === true ? 'blank' : 'self'\"\n              >{{ link.title }}</cx-generic-link\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"notice\" *ngIf=\"(service.getComponentData() | async) as data\">\n  {{ data.notice }}\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        return FooterNavigationComponent;
    }(NavigationComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterNavigationModule = /** @class */ (function () {
        function FooterNavigationModule() {
        }
        FooterNavigationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    FooterNavigationComponent: {
                                        selector: 'cx-footer-navigation',
                                        providers: [
                                            {
                                                provide: NavigationComponentService,
                                                useClass: NavigationComponentService,
                                                deps: [i1$1.CmsService, CmsComponentData],
                                            },
                                        ],
                                    },
                                },
                            }))),
                            GenericLinkModule,
                        ],
                        declarations: [FooterNavigationComponent],
                        entryComponents: [FooterNavigationComponent],
                        exports: [FooterNavigationComponent],
                    },] }
        ];
        return FooterNavigationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchBoxComponentService = /** @class */ (function () {
        function SearchBoxComponentService(componentData, searchService, routingService) {
            var _this = this;
            this.componentData = componentData;
            this.searchService = searchService;
            this.routingService = routingService;
            this.defaultConfig = {
                maxProducts: 2,
                displaySuggestions: true,
                maxSuggestions: 5,
                minCharactersBeforeRequest: 3,
                displayProducts: true,
            };
            this.config$ = rxjs.of(this.defaultConfig);
            this.queryParam$ = this.routingService
                .getRouterState()
                .pipe(operators.map(function (routingData) { return routingData.state.params.query; }));
            this.typeahead = function (text$) {
                return rxjs.combineLatest(text$.pipe(operators.debounceTime(300), operators.distinctUntilChanged()), _this.config$).pipe(operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), term = _b[0], config = _b[1];
                    if (term.length >= config.minCharactersBeforeRequest) {
                        return _this.fetch(term, config);
                    }
                    else {
                        return rxjs.of([]);
                    }
                }));
            };
            if (componentData) {
                this.config$ = rxjs.merge(this.config$, this.componentData.data$.pipe(operators.map(function (config) { return (__assign({}, _this.defaultConfig, config)); })));
            }
        }
        /**
         * @param {?} query
         * @return {?}
         */
        SearchBoxComponentService.prototype.launchSearchPage = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                this.routingService.go({
                    route: 'search',
                    params: { query: query },
                });
            };
        /**
         * @private
         * @param {?} text
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.fetch = /**
         * @private
         * @param {?} text
         * @param {?} config
         * @return {?}
         */
            function (text, config) {
                this.executeSearch(text, config);
                /** @type {?} */
                var suggestions = this.searchService
                    .getSearchSuggestions()
                    .pipe(operators.map(function (res) { return res.map(function (suggestion) { return suggestion.value; }); }));
                /** @type {?} */
                var products = this.searchService
                    .getAuxSearchResults()
                    .pipe(operators.map(function (res) { return res.products || []; }));
                return rxjs.combineLatest(suggestions, products).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), a = _b[0], b = _b[1];
                    return __spread(a, b);
                }));
            };
        /**
         * @private
         * @param {?} search
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.executeSearch = /**
         * @private
         * @param {?} search
         * @param {?} config
         * @return {?}
         */
            function (search, config) {
                if (config.displayProducts) {
                    this.searchService.searchAuxiliary(search, {
                        pageSize: config.maxProducts,
                    });
                }
                if (config.displaySuggestions) {
                    this.searchService.getSuggestions(search, {
                        pageSize: config.maxSuggestions,
                    });
                }
            };
        SearchBoxComponentService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SearchBoxComponentService.ctorParameters = function () {
            return [
                { type: CmsComponentData, decorators: [{ type: i0.Optional }] },
                { type: i1$1.ProductSearchService },
                { type: i1$1.RoutingService }
            ];
        };
        return SearchBoxComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchBoxComponent = /** @class */ (function () {
        function SearchBoxComponent(service) {
            var _this = this;
            this.service = service;
            this.iconTypes = ICON_TYPES;
            this.searchBoxControl = new forms.FormControl();
            this.queryText$ = new rxjs.Subject();
            this.typeahead = function (text$) {
                return _this.service.typeahead(rxjs.merge(text$, _this.queryText$));
            };
        }
        Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.queryText$.next(value);
                this.searchBoxControl.setValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SearchBoxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.service.queryParam$.pipe(operators.take(1)).subscribe(function (query) {
                    if (query) {
                        _this.searchBoxControl.setValue(query);
                    }
                });
            };
        /**
         * @return {?}
         */
        SearchBoxComponent.prototype.submitSearch = /**
         * @return {?}
         */
            function () {
                this.service.launchSearchPage(this.searchBoxControl.value);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        SearchBoxComponent.prototype.selectSuggestion = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (typeof item.item === 'string') {
                    this.searchBoxControl.setValue(item.item);
                    this.submitSearch();
                }
                else {
                    item.preventDefault();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SearchBoxComponent.prototype.onKey = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.key === 'Enter') {
                    this.service.launchSearchPage(this.searchBoxControl.value);
                }
            };
        /**
         * @return {?}
         */
        SearchBoxComponent.prototype.toggleMobileSearchInput = /**
         * @return {?}
         */
            function () {
                this.isMobileSearchVisible = !this.isMobileSearchVisible;
            };
        SearchBoxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-searchbox',
                        template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'searchBox.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit\"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search\"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              route: 'product',\n              params: suggestion | stripHtml\n            } | cxUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-media\n            [container]=\"suggestion.images?.PRIMARY\"\n            format=\"product\"\n            [alt]=\"suggestion.summary\"\n          ></cx-media>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SearchBoxComponent.ctorParameters = function () {
            return [
                { type: SearchBoxComponentService }
            ];
        };
        SearchBoxComponent.propDecorators = {
            queryText: [{ type: i0.Input, args: ['queryText',] }]
        };
        return SearchBoxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchBoxModule = /** @class */ (function () {
        function SearchBoxModule() {
        }
        SearchBoxModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BootstrapModule,
                            forms.FormsModule,
                            i1$2.RouterModule,
                            forms.ReactiveFormsModule,
                            MediaModule,
                            i1$1.ProductModule,
                            i1$1.StripHtmlModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    SearchBoxComponent: {
                                        selector: 'cx-searchbox',
                                        providers: [
                                            {
                                                provide: SearchBoxComponentService,
                                                useClass: SearchBoxComponentService,
                                                deps: [CmsComponentData, i1$1.ProductSearchService, i1$1.RoutingService],
                                            },
                                        ],
                                    },
                                },
                            }))),
                            IconModule,
                            i1$1.UrlModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [SearchBoxComponent],
                        entryComponents: [SearchBoxComponent],
                        exports: [SearchBoxComponent],
                    },] }
        ];
        return SearchBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrentProductService = /** @class */ (function () {
        function CurrentProductService(routingService, productService) {
            this.routingService = routingService;
            this.productService = productService;
        }
        /**
         * @return {?}
         */
        CurrentProductService.prototype.getProduct = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.routingService.getRouterState().pipe(operators.map(function (state) { return state.state.params['productCode']; }), operators.filter(function (productCode) { return !!productCode; }), operators.switchMap(function (productCode) { return _this.productService.get(productCode); }));
            };
        CurrentProductService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CurrentProductService.ctorParameters = function () {
            return [
                { type: i1$1.RoutingService },
                { type: i1$1.ProductService }
            ];
        };
        /** @nocollapse */ CurrentProductService.ngInjectableDef = i0.defineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.inject(i1$1.RoutingService), i0.inject(i1$1.ProductService)); }, token: CurrentProductService, providedIn: "root" });
        return CurrentProductService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductCarouselService = /** @class */ (function () {
        function ProductCarouselService(component, productService) {
            this.component = component;
            this.productService = productService;
            this.MAX_WIDTH = 360;
            this.MAX_ITEM_SIZE = 4;
            this.SPEED = 250;
            this.itemSize$ = rxjs.of(this.MAX_ITEM_SIZE);
            this.activeItem$ = rxjs.of(0);
            this.activeItemWithDelay$ = rxjs.of(0);
        }
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.getActiveItem = /**
         * @return {?}
         */
            function () {
                return this.activeItem$;
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.getActiveItemWithDelay = /**
         * @return {?}
         */
            function () {
                return this.activeItemWithDelay$;
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.getTitle = /**
         * @return {?}
         */
            function () {
                return this.title$;
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.setTitle = /**
         * @return {?}
         */
            function () {
                this.title$ = this.component.data$.pipe(operators.map(function (data) {
                    return data.title;
                }));
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.getItems = /**
         * @return {?}
         */
            function () {
                return this.items$;
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.getItemSize = /**
         * @return {?}
         */
            function () {
                return this.itemSize$;
            };
        /**
         * Maps the item codes from CMS component to an array of `Product` observables.
         */
        /**
         * Maps the item codes from CMS component to an array of `Product` observables.
         * @return {?}
         */
        ProductCarouselService.prototype.setItems = /**
         * Maps the item codes from CMS component to an array of `Product` observables.
         * @return {?}
         */
            function () {
                var _this = this;
                this.items$ = this.component.data$.pipe(operators.filter(function (data) { return data && !!data.productCodes; }), operators.map(function (data) {
                    /** @type {?} */
                    var productCodes = data.productCodes.split(' ');
                    return productCodes.map(function (code) { return _this.productService.get(code); });
                }));
            };
        /**
         * The number of items shown in the carousel can be calculated
         * the standard implemenattions uses the element size to calculate
         * the items that fit in the carousel.
         * This method is called in `ngOnInit`.
         */
        /**
         * The number of items shown in the carousel can be calculated
         * the standard implemenattions uses the element size to calculate
         * the items that fit in the carousel.
         * This method is called in `ngOnInit`.
         * @param {?} window
         * @param {?} nativeElement
         * @return {?}
         */
        ProductCarouselService.prototype.setItemSize = /**
         * The number of items shown in the carousel can be calculated
         * the standard implemenattions uses the element size to calculate
         * the items that fit in the carousel.
         * This method is called in `ngOnInit`.
         * @param {?} window
         * @param {?} nativeElement
         * @return {?}
         */
            function (window, nativeElement) {
                var _this = this;
                this.itemSize$ = !window
                    ? rxjs.of(this.MAX_ITEM_SIZE)
                    : rxjs.fromEvent(window, 'resize').pipe(operators.map(function () { return (( /** @type {?} */(nativeElement))).clientWidth; }), operators.startWith((( /** @type {?} */(nativeElement))).clientWidth), 
                    // avoid to much calls
                    operators.debounceTime(100), operators.map(function (innerWidth) {
                        /** @type {?} */
                        var itemsPerPage = Math.round(innerWidth / _this.MAX_WIDTH);
                        return itemsPerPage > 2 ? _this.MAX_ITEM_SIZE : itemsPerPage;
                    }), 
                    // only emit new size when the size changed
                    operators.distinctUntilChanged());
            };
        /**
         * @param {?} newActiveItem
         * @return {?}
         */
        ProductCarouselService.prototype.setItemAsActive = /**
         * @param {?} newActiveItem
         * @return {?}
         */
            function (newActiveItem) {
                var _this = this;
                this.activeItem$ = this.itemSize$.pipe(operators.map(function (itemSize) { return _this.setItem(newActiveItem, itemSize); }));
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.setPreviousItemAsActive = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.activeItem$ = this.activeItem$.pipe(operators.withLatestFrom(this.itemSize$), operators.map(function (_a) {
                    var _b = __read(_a, 2), activeItem = _b[0], itemSize = _b[1];
                    return _this.setItem(activeItem - itemSize, itemSize);
                }));
            };
        /**
         * @return {?}
         */
        ProductCarouselService.prototype.setNextItemAsActive = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.activeItem$ = this.activeItem$.pipe(operators.withLatestFrom(this.itemSize$), operators.map(function (_a) {
                    var _b = __read(_a, 2), activeItem = _b[0], itemSize = _b[1];
                    return _this.setItem(activeItem + itemSize, itemSize);
                }));
            };
        /**
         * @private
         * @param {?} newActiveItem
         * @param {?} itemSize
         * @return {?}
         */
        ProductCarouselService.prototype.setItem = /**
         * @private
         * @param {?} newActiveItem
         * @param {?} itemSize
         * @return {?}
         */
            function (newActiveItem, itemSize) {
                this.activeItemWithDelay$ = rxjs.of(newActiveItem).pipe(operators.delay(this.getDelayValue(itemSize)));
                return newActiveItem;
            };
        /**
         * @private
         * @param {?} itemSize
         * @return {?}
         */
        ProductCarouselService.prototype.getDelayValue = /**
         * @private
         * @param {?} itemSize
         * @return {?}
         */
            function (itemSize) {
                return (itemSize - 1) * this.SPEED;
            };
        ProductCarouselService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ProductCarouselService.ctorParameters = function () {
            return [
                { type: CmsComponentData },
                { type: i1$1.ProductService }
            ];
        };
        return ProductCarouselService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductCarouselComponent = /** @class */ (function () {
        function ProductCarouselComponent(winRef, el, service) {
            this.el = el;
            this.service = service;
            this.window = winRef.nativeWindow;
        }
        /**
         * @return {?}
         */
        ProductCarouselComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.service.setTitle();
                this.service.setItemSize(this.window, this.el.nativeElement);
                this.service.setItems();
                this.service.setItemAsActive(0);
            };
        ProductCarouselComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-carousel',
                        template: "<h3 *ngIf=\"(service.getTitle() | async) as title\">{{ title }}</h3>\n\n<ng-container\n  *ngIf=\"{\n    maxItemSize: service.getItemSize() | async,\n    products: service.getItems() | async,\n    activeItem: service.getActiveItemWithDelay() | async,\n    active: service.getActiveItem() | async\n  } as carousel\"\n>\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n    <button\n      class=\"previous\"\n      (click)=\"service.setPreviousItemAsActive()\"\n      [disabled]=\"carousel.activeItem === 0\"\n    ></button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n        <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n          <ng-container\n            *ngFor=\"\n              let product$ of (carousel.products\n                | slice: i:i + carousel.maxItemSize)\n            \"\n          >\n            <a\n              *ngIf=\"(product$ | async) as product\"\n              class=\"product\"\n              [class.active]=\"i === carousel.activeItem\"\n              [routerLink]=\"{ route: 'product', params: product } | cxUrl\"\n            >\n              <cx-media [container]=\"product.images?.PRIMARY\" format=\"product\">\n              </cx-media>\n\n              <h4>{{ product.name }}</h4>\n              <div class=\"price\">{{ product.price?.formattedValue }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      class=\"next\"\n      (click)=\"service.setNextItemAsActive()\"\n      [disabled]=\"\n        carousel.activeItem > carousel.products.length - carousel.maxItemSize\n      \"\n    ></button>\n  </div>\n\n  <div class=\"indicators\">\n    <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n      <button\n        *ngIf=\"i % carousel.maxItemSize === 0\"\n        (click)=\"service.setItemAsActive(i)\"\n        [disabled]=\"i === carousel.activeItem\"\n      ></button>\n    </ng-container></div\n></ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductCarouselComponent.ctorParameters = function () {
            return [
                { type: i1$1.WindowRef },
                { type: i0.ElementRef },
                { type: ProductCarouselService }
            ];
        };
        return ProductCarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductCarouselModule = /** @class */ (function () {
        function ProductCarouselModule() {
        }
        ProductCarouselModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            MediaModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    ProductCarouselComponent: {
                                        selector: 'cx-product-carousel',
                                        providers: [
                                            {
                                                provide: ProductCarouselService,
                                                useClass: ProductCarouselService,
                                                deps: [CmsComponentData, i1$1.ProductService],
                                            },
                                        ],
                                    },
                                },
                            }))),
                            i1$1.UrlModule,
                        ],
                        declarations: [ProductCarouselComponent],
                        entryComponents: [ProductCarouselComponent],
                        exports: [ProductCarouselComponent],
                    },] }
        ];
        return ProductCarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ProductDetailOutlets = {
        PAGE: 'PDP.PAGE',
        SUMMARY: 'PDP.SUMMARY',
        IMAGES: 'PDP.IMAGES',
        TITLE: 'PDP.TITLE',
        RATING: 'PDP.RATING',
        ADDTOCART: 'PDP.ADDTOCART',
        PRICE: 'PDP.PRICE',
        SHARE: 'PDP.SHARE',
    };
    /** @enum {string} */
    var ProductTabsOutlets = {
        DESCRIPTION: 'PDP.DESCRIPTION',
        SPECIFICATIONS: 'PDP.SPECIFICATIONS',
        REVIEWS: 'PDP.REVIEWS',
        SHIPPING: 'PDP.SHIPPING',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductDetailsComponent = /** @class */ (function () {
        function ProductDetailsComponent(currentPageService) {
            this.currentPageService = currentPageService;
        }
        Object.defineProperty(ProductDetailsComponent.prototype, "outlets", {
            get: /**
             * @return {?}
             */ function () {
                return ProductDetailsComponent.outlets;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProductDetailsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.product$ = this.currentPageService.getProduct();
            };
        ProductDetailsComponent.outlets = ProductDetailOutlets;
        ProductDetailsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-details',
                        template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.PAGE\">\n    <ng-container *cxOutlet=\"outlets.SUMMARY\">\n      <cx-product-summary class=\"container\" [product]=\"product\">\n        <cx-product-images [product]=\"product\"></cx-product-images>\n      </cx-product-summary>\n    </ng-container> </ng-container\n></ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        ProductDetailsComponent.ctorParameters = function () {
            return [
                { type: CurrentProductService }
            ];
        };
        return ProductDetailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WAITING_CLASS = 'waiting';
    var ProductImagesComponent = /** @class */ (function () {
        function ProductImagesComponent() {
            this.outlets = ProductDetailOutlets;
        }
        /**
         * @return {?}
         */
        ProductImagesComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.product && this.product.images) {
                    this.mainImageContainer = this.product.images.PRIMARY;
                }
            };
        /**
         * @param {?} event
         * @param {?} imageContainer
         * @return {?}
         */
        ProductImagesComponent.prototype.showImage = /**
         * @param {?} event
         * @param {?} imageContainer
         * @return {?}
         */
            function (event, imageContainer) {
                if (this.mainImageContainer === imageContainer) {
                    return;
                }
                this.startWaiting(( /** @type {?} */(event.target)));
                this.mainImageContainer = imageContainer;
            };
        /**
         * @param {?} imageContainer
         * @return {?}
         */
        ProductImagesComponent.prototype.isMainImageContainer = /**
         * @param {?} imageContainer
         * @return {?}
         */
            function (imageContainer) {
                return (this.mainImageContainer.zoom &&
                    imageContainer.zoom &&
                    imageContainer.zoom.url === this.mainImageContainer.zoom.url);
            };
        /**
         * @return {?}
         */
        ProductImagesComponent.prototype.loadHandler = /**
         * @return {?}
         */
            function () {
                this.clearWaitList();
            };
        /**
         * @private
         * @param {?} el
         * @return {?}
         */
        ProductImagesComponent.prototype.startWaiting = /**
         * @private
         * @param {?} el
         * @return {?}
         */
            function (el) {
                this.clearWaitList();
                el.classList.add(WAITING_CLASS);
                this.waiting = el;
            };
        /**
         * @private
         * @return {?}
         */
        ProductImagesComponent.prototype.clearWaitList = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.waiting) {
                    this.waiting.classList.remove(WAITING_CLASS);
                    delete this.waiting;
                }
            };
        ProductImagesComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-images',
                        template: "<ng-container *ngIf=\"product\">\n  <ng-container *cxOutlet=\"outlets.IMAGES\">\n    <cx-media\n      [container]=\"mainImageContainer\"\n      format=\"zoom\"\n      (loaded)=\"loadHandler()\"\n    >\n    </cx-media>\n\n    <ng-container *ngIf=\"product.images?.GALLERY.length > 1\">\n      <div class=\"thumbs\">\n        <cx-media\n          *ngFor=\"let image of product.images.GALLERY\"\n          [container]=\"image\"\n          format=\"thumbnail\"\n          (focus)=\"showImage($event, image)\"\n          tabindex=\"0\"\n          [class.active]=\"isMainImageContainer(image)\"\n        >\n        </cx-media>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n"
                    }] }
        ];
        ProductImagesComponent.propDecorators = {
            product: [{ type: i0.Input }]
        };
        return ProductImagesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductSummaryComponent = /** @class */ (function () {
        function ProductSummaryComponent(translatePipe, translationService) {
            this.translatePipe = translatePipe;
            this.translationService = translationService;
            this.itemCount = 1;
        }
        Object.defineProperty(ProductSummaryComponent.prototype, "outlets", {
            get: /**
             * @return {?}
             */ function () {
                return ProductSummaryComponent.outlets;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        ProductSummaryComponent.prototype.updateCount = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.itemCount = value;
            };
        Object.defineProperty(ProductSummaryComponent.prototype, "hasStock", {
            get: /**
             * @return {?}
             */ function () {
                return (this.product &&
                    this.product.stock &&
                    (this.product.stock.stockLevel > 0 ||
                        this.product.stock.stockLevelStatus === 'inStock'));
            },
            enumerable: true,
            configurable: true
        });
        // NOTE: Does not currently exists as its own component
        // but part of tabs component. This is likely to change in refactor.
        // NOTE: Does not currently exists as its own component
        // but part of tabs component. This is likely to change in refactor.
        /**
         * @private
         * @return {?}
         */
        ProductSummaryComponent.prototype.getReviewsComponent =
            // NOTE: Does not currently exists as its own component
            // but part of tabs component. This is likely to change in refactor.
            /**
             * @private
             * @return {?}
             */
            function () {
                return document.querySelector('cx-product-reviews');
            };
        // Get Tabs Component if exists on page
        // Get Tabs Component if exists on page
        /**
         * @private
         * @return {?}
         */
        ProductSummaryComponent.prototype.getTabsComponent =
            // Get Tabs Component if exists on page
            /**
             * @private
             * @return {?}
             */
            function () {
                return document.querySelector('cx-product-tabs');
            };
        // Get Tab by label if exists on page
        // Get Tab by label if exists on page
        /**
         * @param {?} label
         * @param {?} tabsComponent
         * @return {?}
         */
        ProductSummaryComponent.prototype.getTabByLabel =
            // Get Tab by label if exists on page
            /**
             * @param {?} label
             * @param {?} tabsComponent
             * @return {?}
             */
            function (label, tabsComponent) {
                var e_1, _a;
                if (tabsComponent) {
                    // NOTE: Reads through h3 tags to click on correct tab
                    // There may be a better way of doing this now/after refactor
                    /** @type {?} */
                    var h3Elements = tabsComponent.getElementsByTagName('h3');
                    try {
                        // Look through h3 tab elements until finding tab with label
                        for (var _b = __values(Array.from(h3Elements)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var h3Element = _c.value;
                            if (h3Element.innerHTML.includes(label)) {
                                return h3Element;
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
            };
        // Click to activate tab if not already active
        // Click to activate tab if not already active
        /**
         * @param {?} tab
         * @return {?}
         */
        ProductSummaryComponent.prototype.clickTabIfInactive =
            // Click to activate tab if not already active
            /**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                if (!tab.classList.contains('active') ||
                    tab.classList.contains('toggled')) {
                    tab.click();
                }
            };
        // Scroll to views component on page and click "Reviews" tab
        // Scroll to views component on page and click "Reviews" tab
        /**
         * @return {?}
         */
        ProductSummaryComponent.prototype.showReviews =
            // Scroll to views component on page and click "Reviews" tab
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Use translated label for Reviews tab reference
                this.translationService
                    .translate('productDetails.reviews')
                    .subscribe(function (reviewsTabLabel) {
                    /** @type {?} */
                    var tabsComponent = _this.getTabsComponent();
                    /** @type {?} */
                    var reviewsTab = _this.getTabByLabel(reviewsTabLabel, tabsComponent);
                    /** @type {?} */
                    var reviewsComponent = _this.getReviewsComponent();
                    if (reviewsTab && reviewsComponent) {
                        reviewsComponent.scrollIntoView();
                        _this.clickTabIfInactive(reviewsTab);
                    }
                });
            };
        /**
         * @return {?}
         */
        ProductSummaryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.reviewsTabAvailable = !!this.getReviewsComponent();
            };
        ProductSummaryComponent.outlets = ProductDetailOutlets;
        ProductSummaryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-summary',
                        template: "<ng-container *cxOutlet=\"outlets.TITLE\">\n  <div class=\"name\">{{ product?.name }}</div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<div class=\"images\"><ng-content></ng-content></div>\n\n<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" *ngIf=\"reviewsTabAvailable\" (click)=\"showReviews()\">{{\n      'productSummary.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n\n<ng-container *cxOutlet=\"outlets.ADDTOCART\">\n  <div class=\"quantity\">\n    <label>{{ 'productSummary.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      isValueChangeable=\"true\"\n      [min]=\"1\"\n      [max]=\"product.stock?.stockLevel || 1000\"\n      *ngIf=\"\n        product?.stock?.stockLevel > 0 ||\n        product?.stock?.stockLevelStatus === 'inStock'\n      \"\n      (update)=\"updateCount($event)\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('productSummary.inStock' | cxTranslate)\n        : ('productSummary.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n  <cx-add-to-cart\n    *ngIf=\"product?.stock?.stockLevelStatus !== 'outOfStock'\"\n    [quantity]=\"itemCount\"\n    [productCode]=\"product?.code\"\n    [maxQuantity]=\"product.stock.stockLevel\"\n  ></cx-add-to-cart>\n</ng-container>\n\n<!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n<!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productSummary.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container> -->\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [i1$1.TranslatePipe]
                    }] }
        ];
        /** @nocollapse */
        ProductSummaryComponent.ctorParameters = function () {
            return [
                { type: i1$1.TranslatePipe },
                { type: i1$1.TranslationService }
            ];
        };
        ProductSummaryComponent.propDecorators = {
            product: [{ type: i0.Input }]
        };
        return ProductSummaryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductDetailsModule = /** @class */ (function () {
        function ProductDetailsModule() {
        }
        ProductDetailsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            CartSharedModule,
                            i1$1.CmsModule,
                            AddToCartModule,
                            OutletModule,
                            i1$1.I18nModule,
                            FormComponentsModule,
                            MediaModule,
                            StarRatingModule,
                        ],
                        declarations: [
                            ProductDetailsComponent,
                            ProductSummaryComponent,
                            ProductImagesComponent,
                        ],
                        exports: [
                            ProductDetailsComponent,
                            ProductSummaryComponent,
                            ProductImagesComponent,
                        ],
                    },] }
        ];
        return ProductDetailsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ViewModes = {
        Grid: 'grid',
        List: 'list',
    };
    var ProductViewComponent = /** @class */ (function () {
        function ProductViewComponent() {
            this.iconTypes = ICON_TYPES;
            this.modeChange = new i0.EventEmitter();
        }
        Object.defineProperty(ProductViewComponent.prototype, "buttonClass", {
            get: /**
             * @return {?}
             */ function () {
                return "cx-product-" + this.mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewComponent.prototype, "viewMode", {
            get: /**
             * @return {?}
             */ function () {
                if (this.mode === 'list') {
                    return this.iconTypes.LIST_MODE;
                }
                else if (this.mode === 'grid') {
                    return this.iconTypes.GRID_MODE;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProductViewComponent.prototype.changeMode = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
                this.modeChange.emit(newMode);
            };
        ProductViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-view',
                        template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\">\n    <cx-icon [type]=\"viewMode\"></cx-icon>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductViewComponent.propDecorators = {
            mode: [{ type: i0.Input }],
            modeChange: [{ type: i0.Output }]
        };
        return ProductViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductListComponent = /** @class */ (function () {
        function ProductListComponent(productSearchService, activatedRoute, pageLayoutService) {
            this.productSearchService = productSearchService;
            this.activatedRoute = activatedRoute;
            this.pageLayoutService = pageLayoutService;
            this.searchConfig = {};
            this.gridMode$ = new rxjs.BehaviorSubject(ViewModes.Grid);
        }
        /**
         * @return {?}
         */
        ProductListComponent.prototype.update = /**
         * @return {?}
         */
            function () {
                var queryParams = this.activatedRoute.snapshot.queryParams;
                this.options = this.createOptionsByUrlParams();
                if (this.categoryCode && this.categoryCode !== queryParams.categoryCode) {
                    this.query = ':relevance:category:' + this.categoryCode;
                }
                if (this.brandCode && this.brandCode !== queryParams.brandCode) {
                    this.query = ':relevance:brand:' + this.brandCode;
                }
                if (!this.query && queryParams.query) {
                    this.query = queryParams.query;
                }
                this.search(this.query, this.options);
            };
        /**
         * @return {?}
         */
        ProductListComponent.prototype.createOptionsByUrlParams = /**
         * @return {?}
         */
            function () {
                var queryParams = this.activatedRoute.snapshot.queryParams;
                /** @type {?} */
                var newConfig = __assign({}, queryParams);
                delete newConfig.query;
                /** @type {?} */
                var options = __assign({}, this.searchConfig, newConfig, { pageSize: this.itemPerPage || 10 });
                if (this.categoryCode) {
                    options.categoryCode = this.categoryCode;
                }
                if (this.brandCode) {
                    options.brandCode = this.brandCode;
                }
                return options;
            };
        /**
         * @return {?}
         */
        ProductListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.updateParams$ = this.activatedRoute.params.pipe(operators.tap(function (params) {
                    _this.categoryCode = params.categoryCode;
                    _this.brandCode = params.brandCode;
                    _this.query = params.query;
                    _this.update();
                }));
                this.pageLayoutService.templateName$.pipe(operators.take(1)).subscribe(function (template) {
                    _this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
                });
                // clean previous search result
                this.productSearchService.clearSearchResults();
                this.model$ = this.productSearchService.getSearchResults().pipe(operators.tap(function (searchResult) {
                    if (Object.keys(searchResult).length === 0) {
                        _this.search(_this.query, _this.options);
                    }
                    else {
                        _this.getCategoryTitle(searchResult);
                    }
                }), operators.filter(function (searchResult) { return Object.keys(searchResult).length > 0; }));
            };
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        ProductListComponent.prototype.getCategoryTitle = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (data.breadcrumbs && data.breadcrumbs.length > 0) {
                    this.categoryTitle = data.breadcrumbs[0].facetValueName;
                }
                else if (!this.query.includes(':relevance:')) {
                    this.categoryTitle = this.query;
                }
                if (this.categoryTitle) {
                    this.categoryTitle =
                        data.pagination.totalResults + ' results for ' + this.categoryTitle;
                }
                return this.categoryTitle;
            };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        ProductListComponent.prototype.viewPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
            function (pageNumber) {
                this.search(this.query, { currentPage: pageNumber });
            };
        /**
         * @param {?} sortCode
         * @return {?}
         */
        ProductListComponent.prototype.sortList = /**
         * @param {?} sortCode
         * @return {?}
         */
            function (sortCode) {
                this.search(this.query, { sortCode: sortCode });
            };
        /**
         * @param {?} mode
         * @return {?}
         */
        ProductListComponent.prototype.setGridMode = /**
         * @param {?} mode
         * @return {?}
         */
            function (mode) {
                this.gridMode$.next(mode);
            };
        /**
         * @protected
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        ProductListComponent.prototype.search = /**
         * @protected
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
            function (query, options) {
                if (this.query) {
                    if (options) {
                        // Overide default options
                        this.searchConfig = __assign({}, this.searchConfig, options);
                    }
                    this.productSearchService.search(query, this.searchConfig);
                }
            };
        ProductListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-list',
                        template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page__section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        ProductListComponent.ctorParameters = function () {
            return [
                { type: i1$1.ProductSearchService },
                { type: i1$2.ActivatedRoute },
                { type: PageLayoutService }
            ];
        };
        return ProductListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductFacetNavigationComponent = /** @class */ (function () {
        function ProductFacetNavigationComponent(modalService, activatedRoute, productSearchService) {
            this.modalService = modalService;
            this.activatedRoute = activatedRoute;
            this.productSearchService = productSearchService;
            this.minPerFacet = 6;
            this.collapsedFacets = new Set();
            this.showAllPerFacetMap = new Map();
            this.queryCodec = new http.HttpUrlEncodingCodec();
        }
        Object.defineProperty(ProductFacetNavigationComponent.prototype, "visibleFacets", {
            get: /**
             * @return {?}
             */ function () {
                if (!this.searchResult.facets) {
                    return [];
                }
                return this.searchResult.facets.filter(function (facet) { return facet.visible; });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.updateParams$ = this.activatedRoute.params.pipe(operators.tap(function (params) {
                    _this.activeFacetValueCode = params.categoryCode || params.brandCode;
                }));
                this.searchResult$ = this.productSearchService.getSearchResults().pipe(operators.tap(function (searchResult) {
                    _this.searchResult = searchResult;
                    if (_this.searchResult.facets) {
                        _this.searchResult.facets.forEach(function (el) {
                            _this.showAllPerFacetMap.set(el.name, false);
                        });
                    }
                }), operators.filter(function (searchResult) { return Object.keys(searchResult).length > 0; }));
            };
        /**
         * @param {?} content
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.openFilterModal = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
            };
        /**
         * @param {?} query
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.toggleValue = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                this.productSearchService.search(this.queryCodec.decodeValue(query));
            };
        /**
         * @param {?} facetName
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.showLess = /**
         * @param {?} facetName
         * @return {?}
         */
            function (facetName) {
                this.updateShowAllPerFacetMap(facetName, false);
            };
        /**
         * @param {?} facetName
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.showMore = /**
         * @param {?} facetName
         * @return {?}
         */
            function (facetName) {
                this.updateShowAllPerFacetMap(facetName, true);
            };
        /**
         * @private
         * @param {?} facetName
         * @param {?} showAll
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.updateShowAllPerFacetMap = /**
         * @private
         * @param {?} facetName
         * @param {?} showAll
         * @return {?}
         */
            function (facetName, showAll) {
                this.showAllPerFacetMap.set(facetName, showAll);
            };
        /**
         * @param {?} facetName
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.isFacetCollapsed = /**
         * @param {?} facetName
         * @return {?}
         */
            function (facetName) {
                return this.collapsedFacets.has(facetName);
            };
        /**
         * @param {?} facetName
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.toggleFacet = /**
         * @param {?} facetName
         * @return {?}
         */
            function (facetName) {
                if (this.collapsedFacets.has(facetName)) {
                    this.collapsedFacets.delete(facetName);
                }
                else {
                    this.collapsedFacets.add(facetName);
                }
            };
        /**
         * @param {?} facet
         * @return {?}
         */
        ProductFacetNavigationComponent.prototype.getVisibleFacetValues = /**
         * @param {?} facet
         * @return {?}
         */
            function (facet) {
                return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
                    ? facet.values.length
                    : this.minPerFacet);
            };
        ProductFacetNavigationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-facet-navigation',
                        template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-template [ngIf]=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span>{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngFor let-facet [ngForOf]=\"visibleFacets\" let-facetId=\"index\">\n    <div class=\"cx-facet-group\">\n      <span class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n        </a>\n      </span>\n      <div [ngbCollapse]=\"isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <button\n    class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n    (click)=\"openFilterModal(content)\"\n  >\n    {{ 'productList.filterBy.action' | cxTranslate }}\n  </button>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<div *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n    <div class=\"cx-facet-filter-container\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.appliedFilter' | cxTranslate }}\n      </h4>\n      <div\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n      >\n        {{ breadcrumb.facetValueName }}\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductFacetNavigationComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbModal },
                { type: i1$2.ActivatedRoute },
                { type: i1$1.ProductSearchService }
            ];
        };
        return ProductFacetNavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductGridItemComponent = /** @class */ (function () {
        function ProductGridItemComponent() {
        }
        ProductGridItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-grid-item',
                        template: "<a\n  [routerLink]=\"{ route: 'product', params: product | stripHtml } | cxUrl\"\n  class=\"cx-product-image-container\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ route: 'product', params: product | stripHtml } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.name\"\n  >{{ product.name }}</a\n>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price.formattedValue }}\n  </div>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n  [productCode]=\"product.code\"\n></cx-add-to-cart>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductGridItemComponent.propDecorators = {
            product: [{ type: i0.Input }]
        };
        return ProductGridItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductListItemComponent = /** @class */ (function () {
        function ProductListItemComponent() {
        }
        ProductListItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-list-item',
                        template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ route: 'product', params: product | stripHtml } | cxUrl\"\n      class=\"cx-product-image-container\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ route: 'product', params: product | stripHtml } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.name\"\n      >{{ product.name }}</a\n    >\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n          [productCode]=\"product.code\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductListItemComponent.propDecorators = {
            product: [{ type: i0.Input }]
        };
        return ProductListItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductListModule = /** @class */ (function () {
        function ProductListModule() {
        }
        ProductListModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CMSProductListComponent: { selector: 'cx-product-list' },
                                    SearchResultsListComponent: { selector: 'cx-product-list' },
                                    ProductRefinementComponent: { selector: 'cx-product-facet-navigation' },
                                },
                            }))),
                            i1$2.RouterModule,
                            MediaModule,
                            BootstrapModule,
                            AddToCartModule,
                            FormComponentsModule,
                            ListNavigationModule,
                            i1$1.StripHtmlModule,
                            i1$1.UrlModule,
                            i1$1.I18nModule,
                            StarRatingModule,
                            IconModule,
                        ],
                        declarations: [
                            ProductListComponent,
                            ProductFacetNavigationComponent,
                            ProductListItemComponent,
                            ProductGridItemComponent,
                            ProductViewComponent,
                        ],
                        exports: [
                            ProductListComponent,
                            ProductListItemComponent,
                            ProductGridItemComponent,
                        ],
                        entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
                    },] }
        ];
        return ProductListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { AbstractProductComponent } from '../abstract-product-component';
    var ProductReferencesComponent = /** @class */ (function () {
        function ProductReferencesComponent() {
        }
        ProductReferencesComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-references',
                        template: "",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        return ProductReferencesComponent;
    }()); /*extends AbstractProductComponent {

        @Input() productCode;

        productCodes: Array<String> = [];

        protected fetchData() {
            // load the product data by context parameters
            if (this.contextParameters.productCode) {
                this.productLoader.loadReferences(this.contextParameters.productCode);
                this.productLoader.getSubscription(this.contextParameters.productCode + 'references').subscribe((refData) => {
                    if (refData) {
                        this.createCodeList(refData);
                        this.cd.detectChanges();
                    }
                });
            }
            super.fetchData();
        }

        createCodeList(references) {
            if (!this.component || !this.component.productReferenceTypes || !references[this.component.productReferenceTypes]) {
                return;
            }
            references[this.component.productReferenceTypes].forEach((item, index) => {
                if (!this.component.maximumNumberProducts || index < this.component.maximumNumberProducts) {
                    this.productCodes.push(item.target.code);
                }
            });
        }
    }*/

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReferencesModule = /** @class */ (function () {
        function ProductReferencesModule() {
        }
        ProductReferencesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            // MediaModule,
                            ProductCarouselModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    ProductReferencesComponent: { selector: 'cx-product-references' },
                                },
                            }))),
                        ],
                        declarations: [ProductReferencesComponent],
                        entryComponents: [ProductReferencesComponent],
                        exports: [ProductReferencesComponent],
                    },] }
        ];
        return ProductReferencesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductAttributesComponent = /** @class */ (function () {
        function ProductAttributesComponent() {
        }
        ProductAttributesComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-attributes',
                        template: "<table *ngFor=\"let class of product?.classifications\">\n  <th>\n    <h3>{{ class.name }}</h3>\n  </th>\n  <tr *ngFor=\"let feature of class.features\">\n    <td>{{ feature.name }}</td>\n    <td>\n      <ul>\n        <li *ngFor=\"let featureValue of feature?.featureValues\">\n          {{ featureValue?.value }}\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductAttributesComponent.propDecorators = {
            product: [{ type: i0.Input }]
        };
        return ProductAttributesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewsComponent = /** @class */ (function () {
        function ProductReviewsComponent(reviewService, fb) {
            this.reviewService = reviewService;
            this.fb = fb;
            this.isWritingReviewChange = new i0.EventEmitter();
            this._isWritingReview = false;
            // TODO: configurable
            this.initialMaxListItems = 5;
        }
        Object.defineProperty(ProductReviewsComponent.prototype, "isWritingReview", {
            get: /**
             * @return {?}
             */ function () {
                return this._isWritingReview;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._isWritingReview = val;
                this.isWritingReviewChange.emit(this.isWritingReview);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProductReviewsComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.maxListItems = this.initialMaxListItems;
                if (this.product) {
                    this.reviews$ = this.reviewService.getByProductCode(this.product.code);
                }
            };
        /**
         * @return {?}
         */
        ProductReviewsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.resetReviewForm();
            };
        /**
         * @return {?}
         */
        ProductReviewsComponent.prototype.initiateWriteReview = /**
         * @return {?}
         */
            function () {
                this.isWritingReview = true;
            };
        /**
         * @return {?}
         */
        ProductReviewsComponent.prototype.cancelWriteReview = /**
         * @return {?}
         */
            function () {
                this.isWritingReview = false;
                this.resetReviewForm();
            };
        /**
         * @param {?} rating
         * @return {?}
         */
        ProductReviewsComponent.prototype.setRating = /**
         * @param {?} rating
         * @return {?}
         */
            function (rating) {
                this.reviewForm.controls.rating.setValue(rating);
            };
        /**
         * @return {?}
         */
        ProductReviewsComponent.prototype.submitReview = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var reviewFormControls = this.reviewForm.controls;
                /** @type {?} */
                var review = {
                    headline: reviewFormControls.title.value,
                    comment: reviewFormControls.comment.value,
                    rating: reviewFormControls.rating.value,
                    alias: reviewFormControls.reviewerName.value,
                };
                this.reviewService.add(this.product.code, review);
                this.isWritingReview = false;
                this.resetReviewForm();
            };
        /**
         * @private
         * @return {?}
         */
        ProductReviewsComponent.prototype.resetReviewForm = /**
         * @private
         * @return {?}
         */
            function () {
                this.reviewForm = this.fb.group({
                    title: ['', forms.Validators.required],
                    comment: ['', forms.Validators.required],
                    rating: [0, [forms.Validators.min(1), forms.Validators.max(5)]],
                    reviewerName: '',
                });
            };
        ProductReviewsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-reviews',
                        template: "<ng-container *ngIf=\"!isWritingReview; else writeReview\">\n  <div class=\"header\">\n    <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n    <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n      {{ 'productReview.writeReview' | cxTranslate }}\n    </button>\n    <cx-star-rating\n      class=\"rating\"\n      [rating]=\"product.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n  </div>\n\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n      <div\n        class=\"review\"\n        tabindex=\"0\"\n        *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n      >\n        <div class=\"title\">{{ review.headline }}</div>\n        <cx-star-rating\n          [rating]=\"review.rating\"\n          [disabled]=\"true\"\n        ></cx-star-rating>\n        <div class=\"name\">\n          {{ review.alias ? review.alias : review.principal?.name }}\n        </div>\n        <div class=\"date\">{{ review.date | cxDate }}</div>\n        <div class=\"text\">{{ review.comment }}</div>\n      </div>\n      <div *ngIf=\"reviews.length > initialMaxListItems\">\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = reviews.length\"\n          *ngIf=\"maxListItems === initialMaxListItems\"\n        >\n          {{ 'productReview.more' | cxTranslate }}\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = initialMaxListItems\"\n          *ngIf=\"maxListItems !== initialMaxListItems\"\n        >\n          {{ 'productReview.less' | cxTranslate }}\n        </button>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #writeReview>\n  <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.reviewTitle' | cxTranslate\n        }}</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.writeYourComments' | cxTranslate\n        }}</span>\n        <textarea\n          class=\"form-control\"\n          rows=\"3\"\n          formControlName=\"comment\"\n        ></textarea>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.rating' | cxTranslate\n        }}</span>\n        <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.reviewerName' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"reviewerName\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-secondary\"\n          (click)=\"cancelWriteReview()\"\n        >\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-primary\"\n          [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          [disabled]=\"!reviewForm.valid\"\n        >\n          {{ 'common.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-template>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductReviewsComponent.ctorParameters = function () {
            return [
                { type: i1$1.ProductReviewService },
                { type: forms.FormBuilder }
            ];
        };
        ProductReviewsComponent.propDecorators = {
            product: [{ type: i0.Input }],
            isWritingReview: [{ type: i0.Input }],
            isWritingReviewChange: [{ type: i0.Output }]
        };
        return ProductReviewsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewsModule = /** @class */ (function () {
        function ProductReviewsModule() {
        }
        ProductReviewsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            FormComponentsModule,
                            i1$1.I18nModule,
                            StarRatingModule,
                        ],
                        declarations: [ProductReviewsComponent],
                        exports: [ProductReviewsComponent],
                    },] }
        ];
        return ProductReviewsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductTabsComponent = /** @class */ (function () {
        function ProductTabsComponent(winRef, currentPageService) {
            this.winRef = winRef;
            this.currentPageService = currentPageService;
            this.isWritingReview = false;
            this.activatedElements = [];
        }
        Object.defineProperty(ProductTabsComponent.prototype, "initial", {
            set: /**
             * @param {?} ref
             * @return {?}
             */ function (ref) {
                if (ref) {
                    ref.nativeElement.click();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductTabsComponent.prototype, "outlets", {
            get: /**
             * @return {?}
             */ function () {
                return ProductTabsComponent.outlets;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProductTabsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.product$ = this.currentPageService.getProduct();
            };
        /**
         * @param {?} event
         * @param {?} tab
         * @return {?}
         */
        ProductTabsComponent.prototype.select = /**
         * @param {?} event
         * @param {?} tab
         * @return {?}
         */
            function (event, tab) {
                if (!this.activatedElements.includes(tab)) {
                    // remove active class on both header and content panel
                    this.activatedElements.forEach(function (el) {
                        return el.classList.remove('active', 'toggled');
                    });
                    this.activatedElements = [( /** @type {?} */(event.target)), tab];
                    this.activatedElements.forEach(function (el) { return el.classList.add('active'); });
                    // only scroll if the element is not yet visible
                    if (this.isElementOutViewport(tab)) {
                        tab.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest',
                        });
                    }
                }
                else {
                    this.activatedElements.forEach(function (el) { return el.classList.toggle('toggled'); });
                }
            };
        /**
         * @return {?}
         */
        ProductTabsComponent.prototype.openReview = /**
         * @return {?}
         */
            function () {
                if (this.reviewHeader.nativeElement) {
                    this.reviewHeader.nativeElement.click();
                }
            };
        /**
         * @private
         * @param {?} el
         * @return {?}
         */
        ProductTabsComponent.prototype.isElementOutViewport = /**
         * @private
         * @param {?} el
         * @return {?}
         */
            function (el) {
                if (!this.winRef.nativeWindow) {
                    return false;
                }
                /** @type {?} */
                var rect = el.getBoundingClientRect();
                return (rect.bottom < 0 ||
                    rect.right < 0 ||
                    rect.left > this.winRef.nativeWindow.innerWidth ||
                    rect.top > this.winRef.nativeWindow.innerHeight);
            };
        ProductTabsComponent.outlets = ProductTabsOutlets;
        ProductTabsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-tabs',
                        template: "<div class=\"details\" *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n    <h3 #descriptionHeader (click)=\"select($event, description)\">\n      {{ 'productDetails.productDetails' | cxTranslate }}\n    </h3>\n    <div #description>\n      <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SPECIFICATIONS\">\n    <h3 (click)=\"select($event, specifications)\">\n      {{ 'productDetails.specification' | cxTranslate }}\n    </h3>\n    <div #specifications>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n        <cx-product-attributes [product]=\"product\"></cx-product-attributes>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.REVIEWS\">\n    <h3 #reviewHeader (click)=\"select($event, reviews)\">\n      {{ 'productDetails.reviews' | cxTranslate }} ({{\n        product?.numberOfReviews\n      }})\n    </h3>\n    <div #reviews>\n      <div class=\"container\">\n        <h2>\n          {{ 'productDetails.reviews' | cxTranslate }} ({{\n            product?.numberOfReviews\n          }})\n        </h2>\n        <cx-product-reviews\n          class=\"container\"\n          [(isWritingReview)]=\"isWritingReview\"\n          [product]=\"product\"\n        ></cx-product-reviews>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SHIPPING\">\n    <h3 (click)=\"select($event, shipping)\">\n      {{ 'productDetails.shipping' | cxTranslate }}\n    </h3>\n    <div #shipping>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.shipping' | cxTranslate }}</h2>\n        <ng-container\n          [cxComponentWrapper]=\"{\n            flexType: 'CMSTabParagraphComponent',\n            uid: 'deliveryTab'\n          }\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ProductTabsComponent.ctorParameters = function () {
            return [
                { type: i1$1.WindowRef },
                { type: CurrentProductService }
            ];
        };
        ProductTabsComponent.propDecorators = {
            initial: [{ type: i0.ViewChild, args: ['descriptionHeader',] }],
            reviewHeader: [{ type: i0.ViewChild, args: ['reviewHeader',] }]
        };
        return ProductTabsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductTabsModule = /** @class */ (function () {
        function ProductTabsModule() {
        }
        ProductTabsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            CartSharedModule,
                            i1$1.CmsModule,
                            OutletModule,
                            ProductReviewsModule,
                            PageComponentModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    CMSTabParagraphContainer: {
                                        selector: 'cx-product-tabs',
                                    },
                                },
                            }))),
                            i1$1.I18nModule,
                        ],
                        declarations: [ProductAttributesComponent, ProductTabsComponent],
                        exports: [
                            ProductAttributesComponent,
                            ProductReviewsComponent,
                            ProductTabsComponent,
                        ],
                        entryComponents: [ProductTabsComponent],
                        providers: [i1$1.ProductService, i1$1.WindowRef, i1$1.RoutingService],
                    },] }
        ];
        return ProductTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AbstractStoreItemComponent = /** @class */ (function () {
        function AbstractStoreItemComponent(storeDataService) {
            this.storeDataService = storeDataService;
            this.current_date = new Date();
        }
        /**
         * @param {?} location
         * @return {?}
         */
        AbstractStoreItemComponent.prototype.getDirections = /**
         * @param {?} location
         * @return {?}
         */
            function (location) {
                /** @type {?} */
                var google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
                /** @type {?} */
                var latitude = this.storeDataService.getStoreLatitude(location);
                /** @type {?} */
                var longitude = this.storeDataService.getStoreLongitude(location);
                return google_map_url + latitude + ',' + longitude;
            };
        /**
         * @param {?} location
         * @return {?}
         */
        AbstractStoreItemComponent.prototype.getClosingTime = /**
         * @param {?} location
         * @return {?}
         */
            function (location) {
                return this.storeDataService.getStoreClosingTime(location, this.current_date);
            };
        /**
         * @param {?} location
         * @return {?}
         */
        AbstractStoreItemComponent.prototype.getOpeningTime = /**
         * @param {?} location
         * @return {?}
         */
            function (location) {
                return this.storeDataService.getStoreOpeningTime(location, this.current_date);
            };
        /**
         * @param {?} location
         * @return {?}
         */
        AbstractStoreItemComponent.prototype.isOpen = /**
         * @param {?} location
         * @return {?}
         */
            function (location) {
                return this.storeDataService.isStoreOpen(location, this.current_date);
            };
        AbstractStoreItemComponent.propDecorators = {
            location: [{ type: i0.Input }]
        };
        return AbstractStoreItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WEEK_DAYS_NUMBER = 7;
    var ScheduleComponent = /** @class */ (function () {
        function ScheduleComponent(storeDataService) {
            this.storeDataService = storeDataService;
            this.displayDays = null;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ScheduleComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.location && this.location) {
                    /** @type {?} */
                    var initialDate = this.getInitialDate();
                    this.displayDays = [];
                    for (var i = 0; i < WEEK_DAYS_NUMBER; i++) {
                        /** @type {?} */
                        var date = new Date(initialDate.valueOf());
                        date.setDate(date.getDate() + i);
                        this.displayDays.push(date);
                    }
                }
            };
        /**
         * Returns the store's opening time for the given date
         * @param date date
         */
        /**
         * Returns the store's opening time for the given date
         * @param {?} date date
         * @return {?}
         */
        ScheduleComponent.prototype.getStoreOpeningTime = /**
         * Returns the store's opening time for the given date
         * @param {?} date date
         * @return {?}
         */
            function (date) {
                return this.storeDataService.getStoreOpeningTime(this.location, date);
            };
        /**
         * Returns the store's closing time for the given date
         * @param date date
         */
        /**
         * Returns the store's closing time for the given date
         * @param {?} date date
         * @return {?}
         */
        ScheduleComponent.prototype.getStoreClosingTime = /**
         * Returns the store's closing time for the given date
         * @param {?} date date
         * @return {?}
         */
            function (date) {
                return this.storeDataService.getStoreClosingTime(this.location, date);
            };
        /**
         * return initial (first) date to be displayed in the schedule
         */
        /**
         * return initial (first) date to be displayed in the schedule
         * @private
         * @return {?}
         */
        ScheduleComponent.prototype.getInitialDate = /**
         * return initial (first) date to be displayed in the schedule
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var currentDate = new Date();
                currentDate.setDate(currentDate.getDate() - currentDate.getDay());
                return currentDate;
            };
        ScheduleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-schedule',
                        template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-6\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== null\" class=\"cx-hours col-6\">\n      {{ getStoreOpeningTime(day) | cxDate: 'HH:mm' }} -\n      {{ getStoreClosingTime(day) | cxDate: 'HH:mm' }}\n    </div>\n    <div *ngIf=\"getStoreOpeningTime(day) === null\" class=\"cx-hours col-6\">\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ScheduleComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreDataService }
            ];
        };
        ScheduleComponent.propDecorators = {
            location: [{ type: i0.Input }]
        };
        return ScheduleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderGridComponent = /** @class */ (function () {
        function StoreFinderGridComponent(storeFinderService, route, routingService) {
            this.storeFinderService = storeFinderService;
            this.route = route;
            this.routingService = routingService;
        }
        /**
         * @return {?}
         */
        StoreFinderGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
                this.locations$ = this.storeFinderService.getViewAllStoresEntities();
                if (this.route.snapshot.params.country) {
                    this.storeFinderService.findStoresAction('', this.defaultLocation, {
                        pageSize: -1,
                    }, this.route.snapshot.params.country);
                }
            };
        /**
         * @param {?} location
         * @return {?}
         */
        StoreFinderGridComponent.prototype.viewStore = /**
         * @param {?} location
         * @return {?}
         */
            function (location) {
                if (this.route.snapshot.params.region) {
                    this.routingService.go(['region', this.route.snapshot.params.region, location.name], undefined, { relativeTo: this.route });
                    return;
                }
                this.routingService.go(['region', '', location.name], undefined, {
                    relativeTo: this.route,
                });
            };
        /**
         * @return {?}
         */
        StoreFinderGridComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { };
        StoreFinderGridComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-grid',
                        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-md-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderGridComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreFinderService },
                { type: i1$2.ActivatedRoute },
                { type: i1$1.RoutingService }
            ];
        };
        return StoreFinderGridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderHeaderComponent = /** @class */ (function () {
        function StoreFinderHeaderComponent() {
        }
        StoreFinderHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-header',
                        template: "<ng-container> <cx-store-finder-search></cx-store-finder-search> </ng-container>\n"
                    }] }
        ];
        return StoreFinderHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderListItemComponent = /** @class */ (function (_super) {
        __extends(StoreFinderListItemComponent, _super);
        function StoreFinderListItemComponent(storeDataService) {
            var _this = _super.call(this, storeDataService) || this;
            _this.storeDataService = storeDataService;
            _this.locationIndex = null;
            _this.storeItemClick = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        StoreFinderListItemComponent.prototype.handleStoreItemClick = /**
         * @return {?}
         */
            function () {
                if (this.locationIndex !== null) {
                    this.storeItemClick.emit(this.locationIndex);
                }
            };
        StoreFinderListItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-list-item',
                        template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-name\">\n      {{ location.displayName }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      {{ location.address.line1 }}<br />\n      {{ location.address.town }},\n      {{ location.address.region ? location.address.region.name + ',' : '' }}\n      {{ location.address.postalCode }}\n    </div>\n    <div *ngIf=\"location.openingHours\">\n      <div *ngIf=\"isOpen(location)\" class=\"cx-store-open\">\n        {{ getClosingTime(location) | cxDate: 'EEE' }}:\n        {{ 'storeFinder.openUntil' | cxTranslate }}\n        {{ getClosingTime(location) | cxDate: 'shortTime' }}\n      </div>\n      <div *ngIf=\"!isOpen(location)\" class=\"cx-store-closed\">\n        {{ getClosingTime(location) | cxDate: 'EEE' }}:\n        {{ 'storeFinder.closed' | cxTranslate }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderListItemComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreDataService }
            ];
        };
        StoreFinderListItemComponent.propDecorators = {
            locationIndex: [{ type: i0.Input }],
            storeItemClick: [{ type: i0.Output }]
        };
        return StoreFinderListItemComponent;
    }(AbstractStoreItemComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderMapComponent = /** @class */ (function () {
        function StoreFinderMapComponent(googleMapRendererService) {
            this.googleMapRendererService = googleMapRendererService;
            this.selectedStoreItem = new i0.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        StoreFinderMapComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                if (changes.locations && this.locations) {
                    this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, function (markerIndex) {
                        _this.selectStoreItemClickHandle(markerIndex);
                    });
                }
            };
        /**
         * Sets the center of the map to the given location
         * @param latitude latitude of the new center
         * @param longitude longitude of the new center
         */
        /**
         * Sets the center of the map to the given location
         * @param {?} latitude latitude of the new center
         * @param {?} longitude longitude of the new center
         * @return {?}
         */
        StoreFinderMapComponent.prototype.centerMap = /**
         * Sets the center of the map to the given location
         * @param {?} latitude latitude of the new center
         * @param {?} longitude longitude of the new center
         * @return {?}
         */
            function (latitude, longitude) {
                this.googleMapRendererService.centerMap(latitude, longitude);
            };
        /**
         * @private
         * @param {?} markerIndex
         * @return {?}
         */
        StoreFinderMapComponent.prototype.selectStoreItemClickHandle = /**
         * @private
         * @param {?} markerIndex
         * @return {?}
         */
            function (markerIndex) {
                this.selectedStoreItem.emit(markerIndex);
            };
        StoreFinderMapComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-map',
                        template: "<div #mapElement class=\"cx-store-map\"></div>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderMapComponent.ctorParameters = function () {
            return [
                { type: i1$1.GoogleMapRendererService }
            ];
        };
        StoreFinderMapComponent.propDecorators = {
            mapElement: [{ type: i0.ViewChild, args: ['mapElement',] }],
            locations: [{ type: i0.Input }],
            selectedStoreItem: [{ type: i0.Output }]
        };
        return StoreFinderMapComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderPaginationDetailsComponent = /** @class */ (function () {
        function StoreFinderPaginationDetailsComponent() {
        }
        /**
         * @return {?}
         */
        StoreFinderPaginationDetailsComponent.prototype.getResultsPerPage = /**
         * @return {?}
         */
            function () {
                if (this.pagination.totalResults > this.pagination.pageSize) {
                    /** @type {?} */
                    var firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
                    /** @type {?} */
                    var resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
                    if (resultsPerPage > this.pagination.totalResults) {
                        resultsPerPage = this.pagination.totalResults;
                    }
                    return firstItem + " - " + resultsPerPage;
                }
                else {
                    return "1 - " + this.pagination.totalResults;
                }
            };
        StoreFinderPaginationDetailsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-pagination-details',
                        template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n",
                        styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-pagination-details{display:var(--cx-display,block);margin:var(--cx-margin,1rem 0)}@media (min-width:768px){.cx-pagination-details{text-align:var(--cx-text-align,left)}}"]
                    }] }
        ];
        /** @nocollapse */
        StoreFinderPaginationDetailsComponent.ctorParameters = function () { return []; };
        StoreFinderPaginationDetailsComponent.propDecorators = {
            pagination: [{ type: i0.Input }]
        };
        return StoreFinderPaginationDetailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderListComponent = /** @class */ (function () {
        function StoreFinderListComponent(storeDataService, document) {
            this.storeDataService = storeDataService;
            this.document = document;
            this.selectedStore = 0;
        }
        /**
         * @param {?} index
         * @return {?}
         */
        StoreFinderListComponent.prototype.centerStoreOnMapByIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.selectedStore = index;
                this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
            };
        /**
         * @param {?} index
         * @return {?}
         */
        StoreFinderListComponent.prototype.selectStoreItemList = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.selectedStore = index;
                /** @type {?} */
                var storeListItem = this.document.getElementById('item-' + index);
                storeListItem.scrollIntoView();
            };
        StoreFinderListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-list',
                        template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <ol class=\"cx-list\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStore === i\n            }\"\n            class=\"cx-list-items cx-ordered\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <ol class=\"cx-list\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStore === i\n                  }\"\n                  class=\"cx-list-items cx-ordered\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event)\"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                        styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-columns{display:var(--cx-display,none)}@media (min-width:768px){.cx-columns{display:var(--cx-display,flex);height:var(--cx-height,70vh)}}.cx-columns-mobile{display:var(--cx-display,block)}.cx-address-col{height:var(--cx-height,100%)}@media (min-width:768px){.cx-columns-mobile{display:var(--cx-display,none)}.cx-address-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-map-col{height:var(--cx-height,100%);overflow-y:var(--cx-overflow-y,scroll)}}.cx-list{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);list-style:var(--cx-list-style,none);padding:var(--cx-padding,inherit inherit inherit 0)}.cx-list-items{border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));padding:var(--cx-padding,1rem 1.5rem)}.cx-list-items:hover{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-list-items.cx-selected-item,.cx-list-items.cx-selected-item:hover{background-color:var(--cx-background-color,var(--cx-g-color-light))}.cx-ordered{counter-increment:var(--cx-counter-increment,resultCount)}.cx-ordered:before{content:var(--cx-content,counter(resultCount,decimal));position:var(--cx-position,absolute);left:var(--cx-left,1rem)}.cx-not-found{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);text-align:var(--cx-text-align,center);padding:var(--cx-padding,3rem 0)}"]
                    }] }
        ];
        /** @nocollapse */
        StoreFinderListComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreDataService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        StoreFinderListComponent.propDecorators = {
            locations: [{ type: i0.Input }],
            storeMap: [{ type: i0.ViewChild, args: ['storeMap',] }]
        };
        return StoreFinderListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderSearchResultComponent = /** @class */ (function () {
        function StoreFinderSearchResultComponent(storeFinderService, route) {
            this.storeFinderService = storeFinderService;
            this.route = route;
            this.searchConfig = {
                currentPage: 0,
            };
        }
        /**
         * @return {?}
         */
        StoreFinderSearchResultComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.route.queryParams.subscribe(function (params) { return _this.initialize(params); });
            };
        /**
         * @return {?}
         */
        StoreFinderSearchResultComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
            };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        StoreFinderSearchResultComponent.prototype.viewPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
            function (pageNumber) {
                this.searchConfig = __assign({}, this.searchConfig, { currentPage: pageNumber });
                this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
            };
        /**
         * @private
         * @param {?} params
         * @return {?}
         */
        StoreFinderSearchResultComponent.prototype.initialize = /**
         * @private
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                this.searchQuery = this.parseParameters(params);
                this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
                this.isLoading$ = this.storeFinderService.getStoresLoading();
                this.locations$ = this.storeFinderService.getFindStoresEntities();
                this.subscription = this.locations$
                    .pipe(operators.filter(Boolean), operators.map(function (data) { return data.geolocation; }))
                    .subscribe(function (geoData) { return (_this.geolocation = geoData); });
            };
        /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        StoreFinderSearchResultComponent.prototype.parseParameters = /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
            function (queryParams) {
                /** @type {?} */
                var searchQuery;
                if (queryParams.query) {
                    searchQuery = { queryText: queryParams.query };
                }
                else {
                    searchQuery = { queryText: '' };
                }
                searchQuery.useMyLocation =
                    queryParams.useMyLocation != null &&
                        queryParams.useMyLocation.toUpperCase() === 'TRUE';
                return searchQuery;
            };
        StoreFinderSearchResultComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-search-result',
                        template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <cx-store-finder-list [locations]=\"locations\"></cx-store-finder-list>\n  <div *ngIf=\"locations?.stores\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderSearchResultComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreFinderService },
                { type: i1$2.ActivatedRoute }
            ];
        };
        return StoreFinderSearchResultComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderSearchComponent = /** @class */ (function () {
        function StoreFinderSearchComponent(routing, route) {
            this.routing = routing;
            this.route = route;
            this.searchBox = new forms.FormControl();
        }
        /**
         * @param {?} address
         * @return {?}
         */
        StoreFinderSearchComponent.prototype.findStores = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.routing.go(['find'], { query: address }, { relativeTo: this.route });
            };
        /**
         * @return {?}
         */
        StoreFinderSearchComponent.prototype.viewStoresWithMyLoc = /**
         * @return {?}
         */
            function () {
                this.routing.go(['find'], { useMyLocation: true }, { relativeTo: this.route });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        StoreFinderSearchComponent.prototype.onKey = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.key === 'Enter') {
                    this.findStores(this.searchBox.value);
                }
            };
        StoreFinderSearchComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-search',
                        template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"form-group\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-block cx-find-store\"\n        [routerLink]=\"['find']\"\n        [queryParams]=\"{ query: queryInput.value }\"\n      >\n        {{ 'storeFinder.findStore' | cxTranslate }}\n      </button>\n\n      <div class=\"cx-bottom-links\">\n        <button (click)=\"viewStoresWithMyLoc()\" class=\"cx-link btn-link\">\n          {{ 'storeFinder.useMyLocation' | cxTranslate }}\n        </button>\n        |\n        <a [routerLink]=\"['view-all']\" class=\"cx-link btn-link\">{{\n          'storeFinder.viewAllStores' | cxTranslate\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderSearchComponent.ctorParameters = function () {
            return [
                { type: i1$1.RoutingService },
                { type: i1$2.ActivatedRoute }
            ];
        };
        return StoreFinderSearchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderStoreDescriptionComponent = /** @class */ (function (_super) {
        __extends(StoreFinderStoreDescriptionComponent, _super);
        function StoreFinderStoreDescriptionComponent(storeDataService, storeFinderService, route) {
            var _this = _super.call(this, storeDataService) || this;
            _this.storeDataService = storeDataService;
            _this.storeFinderService = storeFinderService;
            _this.route = route;
            return _this;
        }
        /**
         * @return {?}
         */
        StoreFinderStoreDescriptionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.requestStoresData();
                this.location$ = this.storeFinderService.getFindStoresEntities();
                this.isLoading$ = this.storeFinderService.getStoresLoading();
            };
        /**
         * @return {?}
         */
        StoreFinderStoreDescriptionComponent.prototype.requestStoresData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var storeId = this.route.snapshot.params.store;
                this.storeFinderService.viewStoreById(storeId);
            };
        StoreFinderStoreDescriptionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-store-description',
                        template: "<div\n  class=\"container\"\n  *ngIf=\"!(isLoading$ | async) && (location$ | async) as location; else loading\"\n>\n  <div class=\"row\">\n    <article class=\"cx-store col-lg-4\">\n      <h2>{{ location.displayName }}</h2>\n\n      <p *ngIf=\"location.address\" class=\"storeAddress\">\n        {{ location.address.line1 }} <br />\n        {{ location.address.town + ',' }}\n        {{ location.address.region ? location.address.region.name + ',' : '' }}\n        {{ location.address.postalCode }}\n      </p>\n\n      <section class=\"cx-contact\">\n        <ul class=\"cx-list\">\n          <li class=\"cx-item\">\n            <a\n              class=\"cx-link\"\n              [href]=\"getDirections(location)\"\n              target=\"_blank\"\n              >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n            >\n          </li>\n          <li class=\"cx-item\">\n            {{ 'storeFinder.call' | cxTranslate }}\n            {{ location.address?.phone }}\n          </li>\n          <li class=\"cx-item\">\n            <a class=\"cx-link\" [routerLink]=\"['/contact']\">{{\n              'storeFinder.contactUs' | cxTranslate\n            }}</a>\n          </li>\n        </ul>\n      </section>\n      <div class=\"cx-schedule\">\n        <cx-schedule [location]=\"location\">\n          <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n        </cx-schedule>\n      </div>\n    </article>\n    <article class=\"cx-storeMap col-lg-8\">\n      <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n    </article>\n  </div>\n\n  <div class=\"row cx-feature\">\n    <div class=\"col-lg-12\">\n      <h3 class=\"cx-features-header\">\n        {{ 'storeFinder.storeFeatures' | cxTranslate }}\n      </h3>\n    </div>\n  </div>\n\n  <article class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let feature of location.features?.entry\">\n      <div class=\"cx-features\">{{ feature.value }}</div>\n    </div>\n  </article>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderStoreDescriptionComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreDataService },
                { type: i1$1.StoreFinderService },
                { type: i1$2.ActivatedRoute }
            ];
        };
        return StoreFinderStoreDescriptionComponent;
    }(AbstractStoreItemComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderStoresCountComponent = /** @class */ (function () {
        function StoreFinderStoresCountComponent(storeFinderService) {
            this.storeFinderService = storeFinderService;
        }
        /**
         * @return {?}
         */
        StoreFinderStoresCountComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.storeFinderService.viewAllStores();
                this.locations$ = this.storeFinderService.getViewAllStoresEntities();
                this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
            };
        StoreFinderStoresCountComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder-stores-count',
                        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div\n      *ngFor=\"let country of locations?.countriesAndRegionsStoreCount\"\n      class=\"cx-set\"\n    >\n      <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n        <div class=\"cx-title\">\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            class=\"cx-name\"\n            >{{ country.name }}</span\n          >\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            *ngIf=\"!country?.storeCountDataList\"\n            class=\"cx-country-count\"\n            >({{ country.count }})</span\n          >\n        </div>\n      </a>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        StoreFinderStoresCountComponent.ctorParameters = function () {
            return [
                { type: i1$1.StoreFinderService }
            ];
        };
        return StoreFinderStoresCountComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderComponent = /** @class */ (function () {
        function StoreFinderComponent() {
        }
        StoreFinderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-store-finder',
                        template: "<ng-container>\n  <div class=\"wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n",
                        styles: [".wrapper{text-align:center;padding-top:3%}"]
                    }] }
        ];
        return StoreFinderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreFinderModule = /** @class */ (function () {
        function StoreFinderModule() {
        }
        StoreFinderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CmsModule,
                            forms.ReactiveFormsModule,
                            i1$2.RouterModule,
                            ListNavigationModule,
                            BootstrapModule,
                            SpinnerModule,
                            i1$1.UrlModule,
                            i1$1.StoreFinderCoreModule,
                            i1$1.I18nModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    StoreFinderComponent: {
                                        selector: 'cx-store-finder',
                                        childRoutes: [
                                            {
                                                path: 'find',
                                                component: StoreFinderSearchResultComponent,
                                            },
                                            {
                                                path: 'view-all',
                                                component: StoreFinderStoresCountComponent,
                                            },
                                            {
                                                path: 'country/:country',
                                                component: StoreFinderGridComponent,
                                            },
                                            {
                                                path: 'country/:country/region/:region',
                                                component: StoreFinderGridComponent,
                                            },
                                            {
                                                path: 'country/:country/region/:region/:store',
                                                component: StoreFinderStoreDescriptionComponent,
                                            },
                                            {
                                                path: 'country/:country/:store',
                                                component: StoreFinderStoreDescriptionComponent,
                                            },
                                        ],
                                    },
                                },
                                layoutSlots: {
                                    StoreFinderPageTemplate: {
                                        slots: ['MiddleContent', 'SideContent'],
                                    },
                                },
                            }))),
                        ],
                        declarations: [
                            StoreFinderSearchComponent,
                            StoreFinderListComponent,
                            StoreFinderMapComponent,
                            StoreFinderListItemComponent,
                            StoreFinderStoresCountComponent,
                            StoreFinderGridComponent,
                            StoreFinderStoreDescriptionComponent,
                            ScheduleComponent,
                            StoreFinderHeaderComponent,
                            StoreFinderSearchResultComponent,
                            StoreFinderComponent,
                            StoreFinderPaginationDetailsComponent,
                        ],
                        entryComponents: [
                            StoreFinderComponent,
                            StoreFinderSearchResultComponent,
                            StoreFinderStoresCountComponent,
                            StoreFinderGridComponent,
                            StoreFinderStoreDescriptionComponent,
                        ],
                    },] }
        ];
        return StoreFinderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsLibModule = /** @class */ (function () {
        function CmsLibModule() {
        }
        CmsLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            SkipLinkModule,
                            HamburgerMenuModule,
                            CmsParagraphModule,
                            LinkModule,
                            BannerModule,
                            CategoryNavigationModule,
                            NavigationModule,
                            FooterNavigationModule,
                            BreadcrumbModule,
                            SearchBoxModule,
                            SiteContextSelectorModule,
                            AddressBookModule,
                            OrderHistoryModule,
                            ProductListModule,
                            ProductTabsModule,
                            ProductCarouselModule,
                            OrderDetailsModule,
                            PaymentMethodsModule,
                            UpdateEmailModule,
                            UpdatePasswordModule,
                            UpdateProfileModule,
                            CartComponentModule,
                            CloseAccountModule,
                            TabParagraphContainerModule,
                            StoreFinderModule,
                        ],
                    },] }
        ];
        return CmsLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutDetailsService = /** @class */ (function () {
        function CheckoutDetailsService(authService, checkoutService, cartService) {
            var _this = this;
            this.authService = authService;
            this.checkoutService = checkoutService;
            this.cartService = cartService;
            this.userId$ = this.authService
                .getUserToken()
                .pipe(operators.map(function (userData) { return userData.userId; }));
            this.cartId$ = this.cartService
                .getActive()
                .pipe(operators.map(function (cartData) { return cartData.code; }));
            this.getCheckoutDetailsLoaded$ = this.userId$.pipe(operators.withLatestFrom(this.cartId$), operators.tap(function (_a) {
                var _b = __read(_a, 2), userId = _b[0], cartId = _b[1];
                return _this.checkoutService.loadCheckoutDetails(userId, cartId);
            }), operators.shareReplay(1), operators.switchMap(function () { return _this.checkoutService.getCheckoutDetailsLoaded(); }), operators.skipWhile(function (loaded) { return !loaded; }));
        }
        /**
         * @return {?}
         */
        CheckoutDetailsService.prototype.getDeliveryAddress = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.getCheckoutDetailsLoaded$.pipe(operators.switchMap(function () { return _this.checkoutService.getDeliveryAddress(); }));
            };
        /**
         * @return {?}
         */
        CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.getCheckoutDetailsLoaded$.pipe(operators.switchMap(function () { return _this.checkoutService.getSelectedDeliveryModeCode(); }));
            };
        /**
         * @return {?}
         */
        CheckoutDetailsService.prototype.getPaymentDetails = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.getCheckoutDetailsLoaded$.pipe(operators.switchMap(function () { return _this.checkoutService.getPaymentDetails(); }));
            };
        CheckoutDetailsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CheckoutDetailsService.ctorParameters = function () {
            return [
                { type: i1$1.AuthService },
                { type: i1$1.CheckoutService },
                { type: i1$1.CartService }
            ];
        };
        /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.inject(i1$1.AuthService), i0.inject(i1$1.CheckoutService), i0.inject(i1$1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
        return CheckoutDetailsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MultiStepCheckoutComponent = /** @class */ (function () {
        function MultiStepCheckoutComponent(checkoutDetailsService, cartService, globalMessageService, cd) {
            this.checkoutDetailsService = checkoutDetailsService;
            this.cartService = cartService;
            this.globalMessageService = globalMessageService;
            this.cd = cd;
            this.step = 1;
            this.navs = this.initializeCheckoutNavBar();
        }
        /**
         * @return {?}
         */
        MultiStepCheckoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.cart$ = this.cartService.getActive();
            };
        /**
         * @param {?} step
         * @return {?}
         */
        MultiStepCheckoutComponent.prototype.nextStep = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                /** @type {?} */
                var previousStep = step - 1;
                this.navs.forEach(function (nav) {
                    if (nav.id === previousStep) {
                        nav.status.completed = true;
                    }
                    if (nav.id === step) {
                        nav.status.active = true;
                        nav.status.disabled = false;
                    }
                    else {
                        nav.status.active = false;
                    }
                    nav.progressBar = nav.status.active || nav.status.completed;
                });
                this.step = step;
            };
        /**
         * @return {?}
         */
        MultiStepCheckoutComponent.prototype.initializeCheckoutNavBar = /**
         * @return {?}
         */
            function () {
                return [
                    {
                        id: 1,
                        label: '1. Shipping Address',
                        status: {
                            disabled: false,
                            completed: false,
                            active: true,
                        },
                        progressBar: true,
                    },
                    {
                        id: 2,
                        label: '2. Shipping Method',
                        status: {
                            disabled: true,
                            completed: false,
                            active: false,
                        },
                        progressBar: false,
                    },
                    {
                        id: 3,
                        label: '3. Payment',
                        status: {
                            disabled: true,
                            completed: false,
                            active: false,
                        },
                        progressBar: false,
                    },
                    {
                        id: 4,
                        label: '4. Review',
                        status: {
                            disabled: true,
                            completed: false,
                            active: false,
                        },
                        progressBar: false,
                    },
                ];
            };
        /**
         * @return {?}
         */
        MultiStepCheckoutComponent.prototype.clearCheckoutNavBar = /**
         * @return {?}
         */
            function () {
                this.navs = [];
            };
        /**
         * @return {?}
         */
        MultiStepCheckoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.clearCheckoutNavBar();
            };
        MultiStepCheckoutComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-multi-step-checkout',
                        template: "<ng-container\n  *ngIf=\"(checkoutDetailsService.getCheckoutDetailsLoaded$ | async)\"\n>\n  <div *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-8\">\n        <!-- VISIBLE ONLY ON LG AND XL SCREENS -->\n        <!-- Navigation -->\n        <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n          <ul class=\"cx-list\">\n            <li\n              *ngFor=\"let nav of navs\"\n              class=\"cx-item\"\n              [ngClass]=\"{\n                ' is-disabled': nav.status.disabled,\n                ' is-active': nav.status.active\n              }\"\n            >\n              <a\n                class=\"cx-link \"\n                [ngClass]=\"{\n                  ' is-disabled': nav.status.disabled,\n                  ' is-active': nav.status.active\n                }\"\n                (click)=\"\n                  nav.status.disabled === false ? nextStep(nav.id) : false\n                \"\n                >{{ nav.label }}</a\n              >\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"cx-media\">\n          <div class=\"cx-list-media\">\n            {{\n              'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems }\n            }}:\n            {{ cart.subTotal?.formattedValue }}\n          </div>\n\n          <div *ngFor=\"let nav of navs\">\n            <!-- Navigation -->\n            <div\n              class=\"cx-list-media\"\n              [ngClass]=\"{ ' is-active': nav.status.active }\"\n            >\n              <div>{{ nav.label }}</div>\n              <button\n                *ngIf=\"nav.status.completed && !nav.status.active\"\n                class=\"btn btn-link\"\n                (click)=\"nextStep(nav.id)\"\n              >\n                {{ 'common.edit' | cxTranslate }}\n              </button>\n            </div>\n\n            <!-- Content -->\n            <div *ngIf=\"nav.status.active && step === 1\">\n              <cx-shipping-address\n                (goToStep)=\"nextStep($event)\"\n              ></cx-shipping-address>\n            </div>\n            <div *ngIf=\"nav.status.active && step === 2\">\n              <cx-delivery-mode\n                (goToStep)=\"nextStep($event)\"\n              ></cx-delivery-mode>\n            </div>\n            <div *ngIf=\"nav.status.active && step === 3\">\n              <cx-payment-method\n                (goToStep)=\"nextStep($event)\"\n              ></cx-payment-method>\n            </div>\n            <div *ngIf=\"nav.status.active && step === 4\">\n              <cx-review-submit></cx-review-submit>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- ORDER SUMMARY SECTION -->\n      <div class=\"col-md-7 offset-md-5 col-lg-4 offset-lg-0\">\n        <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n\n        <!-- CHECKBOX AND PLACE ORDER BUTTON -->\n        <div class=\"cx-place-order\" *ngIf=\"step === 4\">\n          <cx-place-order></cx-place-order>\n\n          <button class=\"btn btn-action btn-block\" (click)=\"nextStep(3)\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MultiStepCheckoutComponent.ctorParameters = function () {
            return [
                { type: CheckoutDetailsService },
                { type: i1$1.CartService },
                { type: i1$1.GlobalMessageService },
                { type: i0.ChangeDetectorRef }
            ];
        };
        return MultiStepCheckoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeliveryModeComponent = /** @class */ (function () {
        function DeliveryModeComponent(fb, checkoutService) {
            this.fb = fb;
            this.checkoutService = checkoutService;
            this.goToStep = new i0.EventEmitter();
            this.mode = this.fb.group({
                deliveryModeId: ['', forms.Validators.required],
            });
        }
        /**
         * @return {?}
         */
        DeliveryModeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.changedOption = false;
                this.checkoutService.loadSupportedDeliveryModes();
                this.supportedDeliveryModes$ = this.checkoutService.getSupportedDeliveryModes();
                this.selectedDeliveryMode$ = this.checkoutService.getSelectedDeliveryMode();
                this.selectedDeliveryMode$
                    .pipe(operators.map(function (deliveryMode) {
                    return deliveryMode && deliveryMode.code ? deliveryMode.code : null;
                }))
                    .subscribe(function (code) {
                    if (code) {
                        _this.mode.controls['deliveryModeId'].setValue(code);
                        _this.currentDeliveryModeId = code;
                    }
                });
            };
        /**
         * @param {?} code
         * @return {?}
         */
        DeliveryModeComponent.prototype.changeMode = /**
         * @param {?} code
         * @return {?}
         */
            function (code) {
                if (code !== this.currentDeliveryModeId) {
                    this.changedOption = true;
                    this.currentDeliveryModeId = code;
                }
            };
        /**
         * @return {?}
         */
        DeliveryModeComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.changedOption) {
                    this.checkoutService.setDeliveryMode(this.currentDeliveryModeId);
                }
                this.deliveryModeSub = this.checkoutService
                    .getSelectedDeliveryMode()
                    .subscribe(function (data) {
                    if (data && data.code === _this.currentDeliveryModeId) {
                        _this.goToStep.emit(3);
                    }
                });
            };
        /**
         * @return {?}
         */
        DeliveryModeComponent.prototype.back = /**
         * @return {?}
         */
            function () {
                this.goToStep.emit(1);
            };
        Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode.controls['deliveryModeId'].invalid;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DeliveryModeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.deliveryModeSub) {
                    this.deliveryModeSub.unsubscribe();
                }
            };
        DeliveryModeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-delivery-mode',
                        template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div *ngFor=\"let mode of (supportedDeliveryModes$ | async)\">\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n              form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DeliveryModeComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.CheckoutService }
            ];
        };
        DeliveryModeComponent.propDecorators = {
            goToStep: [{ type: i0.Output }]
        };
        return DeliveryModeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeliveryModeModule = /** @class */ (function () {
        function DeliveryModeModule() {
        }
        DeliveryModeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, forms.ReactiveFormsModule, i1$1.I18nModule, SpinnerModule],
                        declarations: [DeliveryModeComponent],
                        entryComponents: [DeliveryModeComponent],
                        exports: [DeliveryModeComponent],
                    },] }
        ];
        return DeliveryModeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BillingAddressFormComponent = /** @class */ (function () {
        function BillingAddressFormComponent() {
        }
        /**
         * @param {?} country
         * @return {?}
         */
        BillingAddressFormComponent.prototype.countrySelected = /**
         * @param {?} country
         * @return {?}
         */
            function (country) {
                this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
            };
        BillingAddressFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-billing-address-form',
                        template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"(countries$ | async) as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        BillingAddressFormComponent.propDecorators = {
            billingAddress: [{ type: i0.Input }],
            countries$: [{ type: i0.Input }]
        };
        return BillingAddressFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BillingAddressFormModule = /** @class */ (function () {
        function BillingAddressFormModule() {
        }
        BillingAddressFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            i1$2.RouterModule,
                            ngSelect.NgSelectModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [BillingAddressFormComponent],
                        exports: [BillingAddressFormComponent],
                    },] }
        ];
        return BillingAddressFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentFormComponent = /** @class */ (function () {
        function PaymentFormComponent(checkoutService, userService, globalMessageService, fb, modalService) {
            this.checkoutService = checkoutService;
            this.userService = userService;
            this.globalMessageService = globalMessageService;
            this.fb = fb;
            this.modalService = modalService;
            this.iconTypes = ICON_TYPES;
            this.months = [];
            this.years = [];
            this.sameAsShippingAddress = true;
            this.goBack = new i0.EventEmitter();
            this.closeForm = new i0.EventEmitter();
            this.addPaymentInfo = new i0.EventEmitter();
            this.payment = this.fb.group({
                defaultPayment: [false],
                accountHolderName: ['', forms.Validators.required],
                cardNumber: ['', forms.Validators.required],
                cardType: this.fb.group({
                    code: ['', forms.Validators.required],
                }),
                expiryMonth: ['', forms.Validators.required],
                expiryYear: ['', forms.Validators.required],
                cvn: ['', forms.Validators.required],
            });
            this.billingAddress = this.fb.group({
                firstName: ['', forms.Validators.required],
                lastName: ['', forms.Validators.required],
                line1: ['', forms.Validators.required],
                line2: [''],
                town: ['', forms.Validators.required],
                country: this.fb.group({
                    isocode: ['', forms.Validators.required],
                }),
                postalCode: ['', forms.Validators.required],
            });
        }
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.expMonthAndYear();
                this.countries$ = this.userService.getAllBillingCountries().pipe(operators.tap(function (countries) {
                    // If the store is empty fetch countries. This is also used when changing language.
                    if (Object.keys(countries).length === 0) {
                        _this.userService.loadBillingCountries();
                    }
                }));
                this.cardTypes$ = this.checkoutService.getCardTypes().pipe(operators.tap(function (cardTypes) {
                    if (Object.keys(cardTypes).length === 0) {
                        _this.checkoutService.loadSupportedCardTypes();
                    }
                }));
                this.shippingAddress$ = this.checkoutService.getDeliveryAddress();
                this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe(function (shouldShowCheckbox) {
                    // this operation makes sure the checkbox is not checked if not shown and vice versa
                    _this.sameAsShippingAddress = shouldShowCheckbox;
                });
                // verify the new added address
                this.addressVerifySub = this.checkoutService
                    .getAddressVerificationResults()
                    .subscribe(function (results) {
                    if (results === 'FAIL') {
                        _this.checkoutService.clearAddressVerificationResults();
                    }
                    else if (results.decision === 'ACCEPT') {
                        _this.next();
                    }
                    else if (results.decision === 'REJECT') {
                        _this.globalMessageService.add('Invalid Address', i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                        _this.checkoutService.clearAddressVerificationResults();
                    }
                    else if (results.decision === 'REVIEW') {
                        _this.openSuggestedAddress(results);
                    }
                });
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.expMonthAndYear = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var year = new Date().getFullYear();
                for (var i = 0; i < 10; i++) {
                    this.years.push({ id: i + 1, name: year + i });
                }
                for (var j = 1; j <= 12; j++) {
                    if (j < 10) {
                        this.months.push({ id: j, name: '0' + j.toString() });
                    }
                    else {
                        this.months.push({ id: j, name: j.toString() });
                    }
                }
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.toggleDefaultPaymentMethod = /**
         * @return {?}
         */
            function () {
                this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
            };
        /**
         * @param {?} card
         * @return {?}
         */
        PaymentFormComponent.prototype.paymentSelected = /**
         * @param {?} card
         * @return {?}
         */
            function (card) {
                this.payment['controls'].cardType['controls'].code.setValue(card.code);
            };
        /**
         * @param {?} month
         * @return {?}
         */
        PaymentFormComponent.prototype.monthSelected = /**
         * @param {?} month
         * @return {?}
         */
            function (month) {
                this.payment['controls'].expiryMonth.setValue(month.name);
            };
        /**
         * @param {?} year
         * @return {?}
         */
        PaymentFormComponent.prototype.yearSelected = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this.payment['controls'].expiryYear.setValue(year.name);
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.toggleSameAsShippingAddress = /**
         * @return {?}
         */
            function () {
                this.sameAsShippingAddress = !this.sameAsShippingAddress;
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.isContinueButtonDisabled = /**
         * @return {?}
         */
            function () {
                return (this.payment.invalid ||
                    (!this.sameAsShippingAddress && this.billingAddress.invalid));
            };
        /**
         * Check if the shipping address can also be a billing address
         *
         * @memberof PaymentFormComponent
         */
        /**
         * Check if the shipping address can also be a billing address
         *
         * \@memberof PaymentFormComponent
         * @return {?}
         */
        PaymentFormComponent.prototype.showSameAsShippingAddressCheckbox = /**
         * Check if the shipping address can also be a billing address
         *
         * \@memberof PaymentFormComponent
         * @return {?}
         */
            function () {
                return rxjs.combineLatest(this.countries$, this.shippingAddress$).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), countries = _b[0], address = _b[1];
                    return !!countries.filter(function (country) {
                        return country.isocode === address.country.isocode;
                    }).length;
                }));
            };
        /**
         * @param {?} address
         * @return {?}
         */
        PaymentFormComponent.prototype.getAddressCardContent = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                /** @type {?} */
                var region = '';
                if (address.region && address.region.isocode) {
                    region = address.region.isocode + ', ';
                }
                return {
                    textBold: address.firstName + ' ' + address.lastName,
                    text: [
                        address.line1,
                        address.line2,
                        address.town + ', ' + region + address.country.isocode,
                        address.postalCode,
                        address.phone,
                    ],
                };
            };
        /**
         * @param {?} results
         * @return {?}
         */
        PaymentFormComponent.prototype.openSuggestedAddress = /**
         * @param {?} results
         * @return {?}
         */
            function (results) {
                var _this = this;
                if (!this.suggestedAddressModalRef) {
                    this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
                    this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
                    this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                        results.suggestedAddresses;
                    this.suggestedAddressModalRef.result
                        .then(function () {
                        _this.checkoutService.clearAddressVerificationResults();
                        _this.suggestedAddressModalRef = null;
                    })
                        .catch(function () {
                        // this  callback is called when modal is closed with Esc key or clicking backdrop
                        _this.checkoutService.clearAddressVerificationResults();
                        _this.suggestedAddressModalRef = null;
                    });
                }
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this.closeForm.emit();
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.back = /**
         * @return {?}
         */
            function () {
                this.goBack.emit();
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.verifyAddress = /**
         * @return {?}
         */
            function () {
                if (this.sameAsShippingAddress) {
                    this.next();
                }
                else {
                    this.checkoutService.verifyAddress(this.billingAddress.value);
                }
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                this.addPaymentInfo.emit({
                    paymentDetails: this.payment.value,
                    billingAddress: this.sameAsShippingAddress
                        ? null
                        : this.billingAddress.value,
                });
            };
        /**
         * @return {?}
         */
        PaymentFormComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.checkboxSub) {
                    this.checkboxSub.unsubscribe();
                }
                if (this.addressVerifySub) {
                    this.addressVerifySub.unsubscribe();
                }
            };
        PaymentFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-payment-form',
                        template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                ngbTooltip=\"Card Verification Value\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.saveAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          ></cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PaymentFormComponent.ctorParameters = function () {
            return [
                { type: i1$1.CheckoutService },
                { type: i1$1.UserService },
                { type: i1$1.GlobalMessageService },
                { type: forms.FormBuilder },
                { type: ngBootstrap.NgbModal }
            ];
        };
        PaymentFormComponent.propDecorators = {
            paymentMethodsCount: [{ type: i0.Input }],
            goBack: [{ type: i0.Output }],
            closeForm: [{ type: i0.Output }],
            addPaymentInfo: [{ type: i0.Output }]
        };
        return PaymentFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentFormModule = /** @class */ (function () {
        function PaymentFormModule() {
        }
        PaymentFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            ngSelect.NgSelectModule,
                            BootstrapModule,
                            CardModule,
                            BillingAddressFormModule,
                            i1$1.I18nModule,
                            IconModule,
                        ],
                        declarations: [PaymentFormComponent],
                        entryComponents: [PaymentFormComponent],
                        exports: [PaymentFormComponent],
                    },] }
        ];
        return PaymentFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var masterCardImgSrc = 
    // tslint:disable-next-line:max-line-length
    'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwCAYAAABUtfevAAAAAXNSR0IArs4c6QAACWdJREFUaAXtWguMVNUZ/s69d2Z2dnbZXQR57C4sylMei1ihNBRIRESFPoLY1hRKYtAUtaIJJqJNpLU2BqlNLGIbU0CDktAuUFGooUrRPn3wXB77YGF5Y9llZ3dndh73nn7nLruzwszO4w4xaeckd+655/zn9Z3//8///2dEdXXDQEtE1kgp5giBfORSXASkxGUIbJZ9C58wLBHdAIjZBCyXekGA+BSzeoloagsYkHImWDJ6RAUMw+il2f93VbAjhPqGU4C0ZmgEzK3gyAHWO1NoMVH0aL2T5mrjIZADLR4qScpyoCUBKF51DrR4qCQpy4GWBKB41TnQ4qGSpOy6G2ayrR3RfYf4HIRZUw/z3AV7SsLthjFxHIxxY2CMHg5t2NAkU6WJdLkaaK2DbG1g/jDprc6+CoYBBRUQxbfwGQdorqR9OSG4bqDJlla0//wlhLa8C4QjcecY2fOP7nJjyiT4nl4G47bK7rKujDyzA+ax14B2Gpdxkrz0eazUXcINuB/ayCUsuz6CJA4erpVqxHFjhscGdpgLrl2P4Ku/Jze0pNcTDUj3vLtQ8MKzEEWFgL8G5sEXIZv2ptePos4vhX7L4xCDZqXfNk6LUCiM2uONZHd5JKugSX8r/D96FNFP98UZNvUiUVKMwhfm01nZSAmMz6Wp9qYNvQ/ahKdJ7sy57gla9viXvpl/4VLHgCkwNN9lBNa8DvNCmF9KEHo+iiL1ZJ38A8z9z6feIAXKrIHW+vgKRD8/kMKQyUlclQLGUA3R/RZkR3L6ZBSycQusunXJyFKuzwpoHeveQvi9XSkPmohQeAHPvSLGVyGByF5b5SZqknK5deQ3kM37U6bvjdAxaOqUDKx+tbcx0qozeS71fCL/4ndDWl0kIJawql9OUJdesWOTI/i7DVDAZSN5Fwlo8WLHmuI2Z4pczU82H4D84u8Q/b/haLqOQQtt2+FoAl2Ntb5A6IPEouj9oYDev4s687d1eif7+QpBM4/UwDp5mkwgIFydVrgM88TTGNtkFFgysI5IcpNBeQf6kAj00l7AaGFf/cltmocR0zz2yxNChnppcFWV8hKkCXl+NyuUJ5G5Zsq8JYdV7pFKnrmzUbTtDRRt2QDRpxD5P16Moq0b0OeNNRAFPhtU6LpN2/2jQusEWxt5M4re2QjXjEmdBwDLJEFXPGc/6pt58xI3ZuB06FNegTH9behT6SHQgL02XSvGwsiH/vU10IYu4KTbKKZ0xxwkR+IZPVpnD61cH50+pEr6oAHwLFwArXQwJI1cY9ZMuCZXQnDlVt0JBDdVIf+JpdRdXpgGwTlWS8t9JPSa2bDOu+CafocNZnjXO+ReD1x3zgPqj8Ls54N+20P0MmphXdwNuAcAvgpo5XPtcWVbI+SFPdDHPwVLgaK5IVqPAwOm06M4BHHD1yBP/NGmRfAsUDK+M5/BryPQlJukxFIvL4V56oz9ds2eCW3wIH6fhXX2PNyVYymmXENZKfIWfQ9i/Ch4F3wHwbe3AC1+imUZ5KVmWO0u5P90FSKf7LOB9z45FWH6pu477kG0fDTkqUZySRDWZ8tpu53jUsl5Nz1gL1n4hpBjH4ZZ/SuIsnnQ+95KcGsgxi4jVx3iBs6y6ayWo/ZbRlodHSuOxNOegTcPGhdu1TXYn+5vzUFkfzU0ncbp8ZNcaASusaOgDbiixcNRm06nbxne8Rf6hgNhHqmG8PJasagP9LJBjFQUQSv00cAtQ7R6Hzo2PMI+ygnAQaqxziiJLbzRDpuDQNBU0gpvphx3ILp3OeDtb9ObHy+GdWIzEDxPPZimL2z3eu2PI9BE32KIPA90e3Gdu2iMHgEVvRCDB7K8HHlLFiL4+kZE//kpQzptCK5eC/9TK2GQA33PLbdpovUnYV2iUg8EEfnsAMK7/opQ1XZyCDn2cC2fdsgAAfINpgLtRx2QB1F6D/TKZ2Cdfhfy3AfEMApJdSbbuFEBP4SiC160VywKKiBVhMRSB4A6tAqvRSKNEkfiaYwdjeihI9zVPESov7ymCVz2wzqjxIcLoD+qkmvSBHjmz4VZfwIFL62EefqMujOEoH2nTxoP6fcTqI+47ihct0+EDHbAamqGPmwI/cZN8MwMwPrifegjl8OYto71TQSH+opJFJGLB1EPMsYm1MEQoL4Kt3CDTvLgmAF92nqIkgmQjdsowo8SPILqK7fbZvqjL33kJ8+pxjf2p6GUZhJUVuFde9TmIbRpqy1eoe3vw2KgUUU8AqteITi6vcORjz9BVJkoTS10yL0I/+3faP/ZKi6OXMR4W3hnFSK7q4Dmi4jUHYbVcBQi2I6Ore9RzzVBhA8SFIaIBIXDXw/r2BoO2tSp5878mQb2YR42NCkYRpIt1fahAMPDfC0PBAY/L3xE0eWmdpyFdtMPOvtJY70m2zY12+L9H8ehoeapd1NEuLsOkzGS+I4g+gmSezrXWch6ZX/QDMk0iXIeFBNXpt08q6GhvEX3pz2BeA2iNWTIgIzZZyRS+NgYlVwBLF7DNMu0ofPTbHEtuaODQHWX98B9EDdS6WYhmbWUoKscdvWtO1NB3TMT/Sbb+q27IMOMo4NAjanC0r4Vy9C27NkMpxBrZp6mkf/wl512QYdCG9xDHHtkYy1TydF3HfUQWZd6TVDPOkiOOU2N7Zk/D+5773QwjVjTwG8lgpv5bJfo+JAmgtJjPZOS1wySNuYxHuPcgfbOUzeDLrqbOOa0rp4Kf/0LtNDU6PJHu8ozeWs30BSr4CXLVDr+zkwqe3gx5LvQhi/OZCpx22SF0+yeaeT22fgajNtvjTtQOoXRxmK45zxIz8DNZorTejxpnpzqYkWvdK46es4/e6CppTHCUVS1HvnPPEmFq/44mGZidMP97btRsudPcM19DMY334ToOzHNTq6Q55fRwX+RN1ErWHCViGfWY3crx3Zad09XZSQ9g/bnVyNE4xS8M0yWjMm8LOaBEv+yeCcvi9cmvCz+Ut/2ZfH3af0/yOLs8URPO+26gda1kJT+ljBmBLSKIV1NEr6/yr8l9AQtawdBopWqIKRr2hT7SUSTarkoHgvwya6wpTp6jC57/Bvr838+lwMtgy3OgZYDLQMEMmiS47QUQbOvI6/Q5kBLETRL3Q51gyalbXn2RLKrMveOIRCJdF4ISSFaaKeJD1l1V/XR+hhFLpcQAbq+O+ntGYsZZKoi9wUSUuYqiIC8RAF9WbPCv/wvB2R7gtIeYHoAAAAASUVORK5CYII=';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var visaImgSrc = 
    // tslint:disable-next-line:max-line-length
    'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwCAYAAABUtfevAAAAAXNSR0IArs4c6QAABslJREFUaAXtm2tMFFcUx/+zu4IrIAIiCz5YEQWUWtT6TAUVam1aY9MPmjQabROrJrWm7Rf7qaZtoolNa9KX7Qfb+khrjJrYNNqmxqrxgaj4YHmUxyKgqAjLCgILy07vmfXOzj7KsA8TrHMSd+4599yZuz/OPffMBQWLxWpyCX3fiKKwTBAwApoEJCCKaIeAQ2Ji3PsGl+D8GRCWMmCaDECA8RnFutcLbZ1dBojiIjBL9mQzDAbDAMOe7a7uHgdqrY2A6CrQMWBRhEMDNnBQ6DxLMVo3sKvWG4iABi0QFRWbBk0FUKBuDVogKio2DZoKoEDdGrRAVFRsGjQVQIG6NWiBqKjYNGgqgAJ1a9ACUVGxadBUAAXq1qAFoqJiC+tYo85aAXtrs98joo1xyMqeAb3e//aVdztx1+6Qx2SZYpEaH42/q1rpsEWSeOMw5I0fKftQwyUCpQ12nK1pRVdvP/LGxWNeRgISY4Z5+XGFfMi/r58NZJKTGouUkdG8O6yr/7cK4nbpphRYWmrgrDqEXH2518imkngkrzqGEcYYL/urXxWj7kGXZCNG9duLJGCLvzgv+21ZMhG7VuVKeq/Thd1nbmHHiWo0K2Bz59Vzx2Hf2zO4Kl0tdzowf8dZdDj6Zfu25Vn4+LUpsh5OI6zlqTcmYvqc5Zi5Zi9qsz+FpTtVnktqlB3/VFyWdWoUW20yMNKLcpIxIdGI+lY3RLKRmEe7D5ApWgo+P48tB8sCAiNfg87/9PS70/VewMivpN5Gl4hIWNCUM8iZ+QoOJ+3E1tqX4HS5b9t2+6bSBQeKb3vpmwrMku4LjZYeyY/nG3GRgeZCgJZPT5EiZuWsNIwcbvBbxgSaxvnKJWu7rylkPazl6ftUipzFxxfgSkcajj73C/TtlbJLP0tK+4ubZN3E8suKPJOkUz5TCs9nx8vuKc24uHUhZqW7gVIHLV2CpJQ95xpkG0F2UjJk0tLZi4a2bimylf6htCMWafTwFzMTEW3Q4YzdjFWWlRjjtMpz+rO8BbauPlnfkJ8OvrLauz32eKMBo0a4k3u7wp8GEhCe2EmPYs/ivqST7DpZ526wzy2FGXKbGiX1kYm2iEIz6AUUTEmSJvqXbRIutqegq/uRpB9QRBnB2phvluz0cb3podzmS5MM8zISZTs1vmW5atq2UzhaetfLzpWTlQ9Q2+LZZD4oysCkZM8v2IYkNJp8YfZo/h3wYc0yVNXVoKfPhcNXPaXJiudNMLEyg+RaowcY6XxpUnvrskyYk4zUlKX6/iO8sbsEG/ffAC15pXx9yhPZi7KSkDZqOGan0y+R3DJkoVFe42JzGnHuXiyOlDajh+UfLnwDIN13E+A7J/WNjo3CpY/y8daC8WBB7CXfn72F9fuuy7ZGlq+OXfdE4Lr5E6S+2WYPtCsNQ3B50ixnjI9HwuOcRPq1pk62a3o2ACoxlGCvNdrJTRbl8iRjclwU9qzNQ+UnS7B0qucHQn20S1JyJ6GlywMvJkqPlS+kSfY5ExOkK33Yu52oYsV1uBLRnEaToapeuUTPVLfiD8t9eZ6bF0+UK38yDrQ85UGskTkmBifem4c5isihfoLgYFH8AyuAuTxiO6rx3d8hbPgNC3ee42bpWnIr/GiLODSaWWG2JyIoBz1+k5F21ncWpnt9CeUOqdw5KT+1dPR6+fb2u9iO671OxyYMx8GSO2jz2Wm9BiqUSOS1iNZpfG5FOZ7NgNvoKhWkrKRQymkWiVz40qT6i94CNv9ahty0OORPTsL9DgeobHnY4+TuUpKfmhqHNXtKZZtaY8hCo6VEuYvnG/5FNi0y86Z09d8E3DtlBVtyPD+VsfdI+ucrlDfpnZMq/avsxZzLBhbJu1dP56p03XuhCWt/coO9zJYn3ZvXiF6Og1SeyPKkZxcpSg/Sp7GImM9OJZRS/8CdxLnNnOSuqahAJv//ktfZm0TNZ4WgExJlmUH+b84d6zeMTji4UHF8Q1EXcnswV+FmebVU7OTmZAYzTtW3ydaDGpbPuIxjuYciUCkUaUpwVKMpK3wrOw0pb+5ARXMnKLlnpcRIx0EcLt3rQp0NDlYHcqHi2iftSRvFhVrPO2zu2DipnOFjBnN1OHpRXdfA/gBGrHhi0AYzkafJRwntiS3PpwlIsHPVoAVLjPlr0DRoIRAIYYgWaRq0EAiEMESLNA1aCARCGKJFmgYtBAIhDNEibZDQRPb/fLho0DgJlavLC5ooSsejSpIq45/J7r4+9+GnKAh2dowqnGIUXrZU1j6TMIL90uzY6YROB8M6dkh0hEWf91+hBHu3/72/2Mqy2pc6V+/2fwHiF0LekPcNzgAAAABJRU5ErkJggg==';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodComponent = /** @class */ (function () {
        function PaymentMethodComponent(cartData, userService, checkoutService, globalMessageService, translation) {
            this.cartData = cartData;
            this.userService = userService;
            this.checkoutService = checkoutService;
            this.globalMessageService = globalMessageService;
            this.translation = translation;
            this.newPaymentFormManuallyOpened = false;
            this.goToStep = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.isLoading$ = this.userService.getPaymentMethodsLoading();
                this.userService.loadPaymentMethods(this.cartData.userId);
                this.existingPaymentMethods$ = this.userService.getPaymentMethods();
                this.getPaymentDetailsSub = this.checkoutService
                    .getPaymentDetails()
                    .pipe(operators.filter(function (paymentInfo) { return paymentInfo && Object.keys(paymentInfo).length !== 0; }))
                    .subscribe(function (paymentInfo) {
                    if (!paymentInfo['hasError']) {
                        _this.selectedPayment = paymentInfo;
                    }
                    else {
                        Object.keys(paymentInfo).forEach(function (key) {
                            if (key.startsWith('InvalidField')) {
                                _this.globalMessageService.add('InvalidField: ' + paymentInfo[key], i1$1.GlobalMessageType.MSG_TYPE_ERROR);
                            }
                        });
                        _this.checkoutService.clearCheckoutStep(3);
                    }
                });
            };
        /**
         * @param {?} payment
         * @return {?}
         */
        PaymentMethodComponent.prototype.getCardContent = /**
         * @param {?} payment
         * @return {?}
         */
            function (payment) {
                var _this = this;
                return rxjs.combineLatest([
                    this.translation.translate('paymentCard.expires', {
                        month: payment.expiryMonth,
                        year: payment.expiryYear,
                    }),
                    this.translation.translate('paymentForm.useThisPayment'),
                    this.translation.translate('paymentCard.defaultPaymentMethod'),
                    this.translation.translate('paymentCard.selected'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
                    /** @type {?} */
                    var ccImage;
                    if (payment.cardType.code === 'visa') {
                        ccImage = visaImgSrc;
                    }
                    else if (payment.cardType.code === 'master') {
                        ccImage = masterCardImgSrc;
                    }
                    /** @type {?} */
                    var card = {
                        title: payment.defaultPayment ? textDefaultPaymentMethod : '',
                        textBold: payment.accountHolderName,
                        text: [payment.cardNumber, textExpires],
                        img: ccImage,
                        actions: [{ name: textUseThisPayment, event: 'send' }],
                    };
                    if (_this.selectedPayment && _this.selectedPayment.id === payment.id) {
                        card.header = textSelected;
                    }
                    return card;
                }));
            };
        /**
         * @param {?} paymentDetails
         * @return {?}
         */
        PaymentMethodComponent.prototype.paymentMethodSelected = /**
         * @param {?} paymentDetails
         * @return {?}
         */
            function (paymentDetails) {
                this.selectedPayment = paymentDetails;
            };
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.showNewPaymentForm = /**
         * @return {?}
         */
            function () {
                this.newPaymentFormManuallyOpened = true;
            };
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.hideNewPaymentForm = /**
         * @return {?}
         */
            function () {
                this.newPaymentFormManuallyOpened = false;
            };
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                this.addPaymentInfo({
                    payment: this.selectedPayment,
                    newPayment: false,
                });
            };
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.back = /**
         * @return {?}
         */
            function () {
                this.goToStep.emit(2);
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        PaymentMethodComponent.prototype.addNewPaymentMethod = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress;
                this.getDeliveryAddressSub = this.checkoutService
                    .getDeliveryAddress()
                    .subscribe(function (address) {
                    billingAddress = address;
                });
                this.addPaymentInfo({
                    payment: paymentDetails,
                    billingAddress: billingAddress,
                    newPayment: true,
                });
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        PaymentMethodComponent.prototype.addPaymentInfo = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var _this = this;
                var newPayment = _a.newPayment, payment = _a.payment, billingAddress = _a.billingAddress;
                payment.billingAddress = billingAddress
                    ? billingAddress
                    : this.deliveryAddress;
                if (newPayment) {
                    this.checkoutService.createPaymentDetails(payment);
                    this.checkoutService.clearCheckoutStep(3);
                }
                // if the selected payment is the same as the cart's one
                if (this.selectedPayment && this.selectedPayment.id === payment.id) {
                    this.checkoutService.setPaymentDetails(payment);
                    this.checkoutService.clearCheckoutStep(3);
                }
                this.getPaymentDetailsSub = this.checkoutService
                    .getPaymentDetails()
                    .subscribe(function (data) {
                    if (data.accountHolderName && data.cardNumber) {
                        _this.goToStep.emit(4);
                        return;
                    }
                });
            };
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.getPaymentDetailsSub) {
                    this.getPaymentDetailsSub.unsubscribe();
                }
                if (this.getDeliveryAddressSub) {
                    this.getDeliveryAddressSub.unsubscribe();
                }
            };
        PaymentMethodComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-payment-method',
                        template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PaymentMethodComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartDataService },
                { type: i1$1.UserService },
                { type: i1$1.CheckoutService },
                { type: i1$1.GlobalMessageService },
                { type: i1$1.TranslationService }
            ];
        };
        PaymentMethodComponent.propDecorators = {
            goToStep: [{ type: i0.Output }]
        };
        return PaymentMethodComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodModule = /** @class */ (function () {
        function PaymentMethodModule() {
        }
        PaymentMethodModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            PaymentFormModule,
                            CardModule,
                            SpinnerModule,
                            i1$1.I18nModule,
                        ],
                        providers: [i1$1.UserService],
                        declarations: [PaymentMethodComponent],
                        entryComponents: [PaymentMethodComponent],
                        exports: [PaymentMethodComponent],
                    },] }
        ];
        return PaymentMethodModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReviewSubmitComponent = /** @class */ (function () {
        function ReviewSubmitComponent(checkoutService, userService, cartService, translation) {
            this.checkoutService = checkoutService;
            this.userService = userService;
            this.cartService = cartService;
            this.translation = translation;
        }
        /**
         * @return {?}
         */
        ReviewSubmitComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.cart$ = this.cartService.getActive();
                this.entries$ = this.cartService.getEntries();
                this.deliveryAddress$ = this.checkoutService.getDeliveryAddress();
                this.paymentDetails$ = this.checkoutService.getPaymentDetails();
                this.deliveryMode$ = this.checkoutService.getSelectedDeliveryMode().pipe(operators.tap(function (selected) {
                    if (selected === null) {
                        _this.checkoutService.loadSupportedDeliveryModes();
                    }
                }));
                this.countryName$ = this.deliveryAddress$.pipe(operators.switchMap(function (address) {
                    return _this.userService.getCountry(address.country.isocode);
                }), operators.tap(function (country) {
                    if (country === null) {
                        _this.userService.loadDeliveryCountries();
                    }
                }), operators.map(function (country) { return country && country.name; }));
            };
        /**
         * @param {?} deliveryAddress
         * @param {?} countryName
         * @return {?}
         */
        ReviewSubmitComponent.prototype.getShippingAddressCard = /**
         * @param {?} deliveryAddress
         * @param {?} countryName
         * @return {?}
         */
            function (deliveryAddress, countryName) {
                return rxjs.combineLatest([
                    this.translation.translate('addressCard.shipTo'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    if (!countryName) {
                        countryName = deliveryAddress.country.isocode;
                    }
                    /** @type {?} */
                    var region = '';
                    if (deliveryAddress.region && deliveryAddress.region.isocode) {
                        region = deliveryAddress.region.isocode + ', ';
                    }
                    return {
                        title: textTitle,
                        textBold: deliveryAddress.firstName + ' ' + deliveryAddress.lastName,
                        text: [
                            deliveryAddress.line1,
                            deliveryAddress.line2,
                            deliveryAddress.town + ', ' + region + countryName,
                            deliveryAddress.postalCode,
                            deliveryAddress.phone,
                        ],
                    };
                }));
            };
        /**
         * @param {?} deliveryMode
         * @return {?}
         */
        ReviewSubmitComponent.prototype.getDeliveryModeCard = /**
         * @param {?} deliveryMode
         * @return {?}
         */
            function (deliveryMode) {
                return rxjs.combineLatest([
                    this.translation.translate('checkoutShipping.shippingMethod'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: deliveryMode.name,
                        text: [deliveryMode.description],
                    };
                }));
            };
        /**
         * @param {?} paymentDetails
         * @return {?}
         */
        ReviewSubmitComponent.prototype.getPaymentMethodCard = /**
         * @param {?} paymentDetails
         * @return {?}
         */
            function (paymentDetails) {
                return rxjs.combineLatest([
                    this.translation.translate('paymentForm.payment'),
                    this.translation.translate('paymentCard.expires', {
                        month: paymentDetails.expiryMonth,
                        year: paymentDetails.expiryYear,
                    }),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
                    return {
                        title: textTitle,
                        textBold: paymentDetails.accountHolderName,
                        text: [paymentDetails.cardNumber, textExpires],
                    };
                }));
            };
        ReviewSubmitComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-review-submit',
                        template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"\n            getShippingAddressCard(\n              deliveryAddress$ | async,\n              countryName$ | async\n            ) | async\n          \"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          *ngIf=\"(deliveryMode$ | async) as deliveryMode\"\n          [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card\n          [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ReviewSubmitComponent.ctorParameters = function () {
            return [
                { type: i1$1.CheckoutService },
                { type: i1$1.UserService },
                { type: i1$1.CartService },
                { type: i1$1.TranslationService }
            ];
        };
        return ReviewSubmitComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReviewSubmitModule = /** @class */ (function () {
        function ReviewSubmitModule() {
        }
        ReviewSubmitModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, CardModule, CartSharedModule, i1$1.I18nModule],
                        declarations: [ReviewSubmitComponent],
                        entryComponents: [ReviewSubmitComponent],
                        exports: [ReviewSubmitComponent],
                    },] }
        ];
        return ReviewSubmitModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShippingAddressComponent = /** @class */ (function () {
        function ShippingAddressComponent(userService, cartData, cartService, routingService, checkoutService, translation) {
            this.userService = userService;
            this.cartData = cartData;
            this.cartService = cartService;
            this.routingService = routingService;
            this.checkoutService = checkoutService;
            this.translation = translation;
            this.newAddressFormManuallyOpened = false;
            this.cards = [];
            this.selectedAddress$ = new rxjs.BehaviorSubject(null);
            this.goToStep = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.goTo = null;
                this.cartService.loadDetails();
                this.isLoading$ = this.userService.getAddressesLoading();
                this.userService.loadAddresses(this.cartData.userId);
                this.setAddressSub = this.checkoutService
                    .getDeliveryAddress()
                    .subscribe(function (address) {
                    _this.setAddress = address;
                    _this.selectedAddress$.next(address);
                    if (_this.goTo) {
                        _this.goToStep.emit(_this.goTo);
                        _this.goTo = null;
                    }
                });
                this.selectedAddressSub = this.selectedAddress$.subscribe(function (address) {
                    _this.selectedAddress = address;
                });
                this.existingAddresses$ = this.userService.getAddresses();
                this.cards$ = rxjs.combineLatest(this.existingAddresses$, this.selectedAddress$.asObservable(), this.translation.translate('checkoutAddress.defaultShippingAddress'), this.translation.translate('checkoutAddress.shipToThisAddress'), this.translation.translate('addressCard.selected')).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
                    return addresses.map(function (address) {
                        /** @type {?} */
                        var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                        return {
                            address: address,
                            card: card,
                        };
                    });
                }));
            };
        /**
         * @param {?} address
         * @param {?} selected
         * @param {?} textDefaultShippingAddress
         * @param {?} textShipToThisAddress
         * @param {?} textSelected
         * @return {?}
         */
        ShippingAddressComponent.prototype.getCardContent = /**
         * @param {?} address
         * @param {?} selected
         * @param {?} textDefaultShippingAddress
         * @param {?} textShipToThisAddress
         * @param {?} textSelected
         * @return {?}
         */
            function (address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
                /** @type {?} */
                var region = '';
                if (address.region && address.region.isocode) {
                    region = address.region.isocode + ', ';
                }
                /** @type {?} */
                var card = {
                    title: address.defaultAddress ? textDefaultShippingAddress : '',
                    textBold: address.firstName + ' ' + address.lastName,
                    text: [
                        address.line1,
                        address.line2,
                        address.town + ', ' + region + address.country.isocode,
                        address.postalCode,
                        address.phone,
                    ],
                    actions: [{ name: textShipToThisAddress, event: 'send' }],
                    header: selected && selected.id === address.id ? textSelected : '',
                };
                this.cards.push(card);
                return card;
            };
        /**
         * @param {?} address
         * @return {?}
         */
        ShippingAddressComponent.prototype.addressSelected = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.selectedAddress$.next(address);
            };
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                this.addAddress({ address: this.selectedAddress, newAddress: false });
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        ShippingAddressComponent.prototype.addAddress = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var newAddress = _a.newAddress, address = _a.address;
                if (newAddress) {
                    this.checkoutService.createAndSetAddress(address);
                    this.goTo = 2;
                    return;
                }
                if (this.setAddress &&
                    this.selectedAddress &&
                    this.setAddress.id === this.selectedAddress.id) {
                    this.goToStep.emit(2);
                }
                else {
                    this.goTo = 2;
                    this.checkoutService.setDeliveryAddress(address);
                }
            };
        /**
         * @param {?} address
         * @return {?}
         */
        ShippingAddressComponent.prototype.addNewAddress = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.addAddress({ address: address, newAddress: true });
            };
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.showNewAddressForm = /**
         * @return {?}
         */
            function () {
                this.newAddressFormManuallyOpened = true;
            };
        /**
         * @param {?=} goBack
         * @return {?}
         */
        ShippingAddressComponent.prototype.hideNewAddressForm = /**
         * @param {?=} goBack
         * @return {?}
         */
            function (goBack) {
                if (goBack === void 0) {
                    goBack = false;
                }
                this.newAddressFormManuallyOpened = false;
                if (goBack) {
                    this.back();
                }
            };
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.back = /**
         * @return {?}
         */
            function () {
                this.routingService.go({ route: 'cart' });
            };
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.setAddressSub) {
                    this.setAddressSub.unsubscribe();
                }
                if (this.selectedAddressSub) {
                    this.selectedAddressSub.unsubscribe();
                }
            };
        ShippingAddressComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-shipping-address',
                        template: "<ng-container *ngIf=\"(cards$ | async) as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress || !selectedAddress.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ShippingAddressComponent.ctorParameters = function () {
            return [
                { type: i1$1.UserService },
                { type: i1$1.CartDataService },
                { type: i1$1.CartService },
                { type: i1$1.RoutingService },
                { type: i1$1.CheckoutService },
                { type: i1$1.TranslationService }
            ];
        };
        ShippingAddressComponent.propDecorators = {
            goToStep: [{ type: i0.Output }]
        };
        return ShippingAddressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShippingAddressModule = /** @class */ (function () {
        function ShippingAddressModule() {
        }
        ShippingAddressModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule,
                            AddressFormModule,
                            CardModule,
                            SpinnerModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [ShippingAddressComponent],
                        entryComponents: [ShippingAddressComponent],
                        exports: [ShippingAddressComponent],
                    },] }
        ];
        return ShippingAddressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlaceOrderComponent = /** @class */ (function () {
        function PlaceOrderComponent(checkoutService, routingService) {
            this.checkoutService = checkoutService;
            this.routingService = routingService;
            this.tAndCToggler = false;
        }
        /**
         * @return {?}
         */
        PlaceOrderComponent.prototype.toggleTAndC = /**
         * @return {?}
         */
            function () {
                this.tAndCToggler = !this.tAndCToggler;
            };
        /**
         * @return {?}
         */
        PlaceOrderComponent.prototype.placeOrder = /**
         * @return {?}
         */
            function () {
                this.checkoutService.placeOrder();
            };
        /**
         * @return {?}
         */
        PlaceOrderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.placeOrderSubscription = this.checkoutService
                    .getOrderDetails()
                    .pipe(operators.filter(function (order) { return Object.keys(order).length !== 0; }))
                    .subscribe(function () {
                    _this.routingService.go({ route: ['orderConfirmation'] });
                });
            };
        /**
         * @return {?}
         */
        PlaceOrderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.placeOrderSubscription) {
                    this.placeOrderSubscription.unsubscribe();
                }
            };
        PlaceOrderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-place-order',
                        template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ route: ['termsAndConditions'] } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PlaceOrderComponent.ctorParameters = function () {
            return [
                { type: i1$1.CheckoutService },
                { type: i1$1.RoutingService }
            ];
        };
        return PlaceOrderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlaceOrderModule = /** @class */ (function () {
        function PlaceOrderModule() {
        }
        PlaceOrderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, i1$1.CheckoutModule, i1$2.RouterModule, i1$1.UrlModule, i1$1.I18nModule],
                        declarations: [PlaceOrderComponent],
                        exports: [PlaceOrderComponent],
                    },] }
        ];
        return PlaceOrderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MultiStepCheckoutModule = /** @class */ (function () {
        function MultiStepCheckoutModule() {
        }
        MultiStepCheckoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CartSharedModule,
                            ShippingAddressModule,
                            DeliveryModeModule,
                            PaymentMethodModule,
                            ReviewSubmitModule,
                            PlaceOrderModule,
                            i1$2.RouterModule,
                            i1$1.UrlModule,
                            i1$1.ConfigModule.withConfig(( /** @type {?} */({
                                cmsComponents: {
                                    MultiStepCheckoutComponent: { selector: 'cx-multi-step-checkout' },
                                },
                            }))),
                            i1$1.CheckoutModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [MultiStepCheckoutComponent],
                        entryComponents: [MultiStepCheckoutComponent],
                    },] }
        ];
        return MultiStepCheckoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationPageGuard = /** @class */ (function () {
        function OrderConfirmationPageGuard(checkoutService, routingService) {
            this.checkoutService = checkoutService;
            this.routingService = routingService;
        }
        /**
         * @return {?}
         */
        OrderConfirmationPageGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.checkoutService.getOrderDetails().pipe(operators.map(function (orderDetails) {
                    if (orderDetails && Object.keys(orderDetails).length !== 0) {
                        return true;
                    }
                    else {
                        _this.routingService.go({ route: 'orders' });
                        return false;
                    }
                }));
            };
        OrderConfirmationPageGuard.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        OrderConfirmationPageGuard.ctorParameters = function () {
            return [
                { type: i1$1.CheckoutService },
                { type: i1$1.RoutingService }
            ];
        };
        return OrderConfirmationPageGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var guards$1 = [OrderConfirmationPageGuard];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutComponentModule = /** @class */ (function () {
        function CheckoutComponentModule() {
        }
        CheckoutComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            MultiStepCheckoutModule,
                            CartComponentModule,
                            i1$1.CheckoutModule,
                        ],
                        providers: __spread(guards$1),
                    },] }
        ];
        return CheckoutComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationComponent = /** @class */ (function () {
        function OrderConfirmationComponent(checkoutService, translation) {
            this.checkoutService = checkoutService;
            this.translation = translation;
        }
        /**
         * @return {?}
         */
        OrderConfirmationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.order$ = this.checkoutService.getOrderDetails();
            };
        /**
         * @return {?}
         */
        OrderConfirmationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.checkoutService.clearCheckoutData();
            };
        /**
         * @param {?} deliveryAddress
         * @return {?}
         */
        OrderConfirmationComponent.prototype.getAddressCardContent = /**
         * @param {?} deliveryAddress
         * @return {?}
         */
            function (deliveryAddress) {
                return rxjs.combineLatest([
                    this.translation.translate('addressCard.shipTo'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
                        text: [
                            deliveryAddress.line1,
                            deliveryAddress.line2,
                            deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                            deliveryAddress.phone,
                        ],
                    };
                }));
            };
        /**
         * @param {?} deliveryMode
         * @return {?}
         */
        OrderConfirmationComponent.prototype.getDeliveryModeCardContent = /**
         * @param {?} deliveryMode
         * @return {?}
         */
            function (deliveryMode) {
                return rxjs.combineLatest([
                    this.translation.translate('checkoutShipping.shippingMethod'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: deliveryMode.name,
                        text: [deliveryMode.description],
                    };
                }));
            };
        /**
         * @param {?} billingAddress
         * @return {?}
         */
        OrderConfirmationComponent.prototype.getBillingAddressCardContent = /**
         * @param {?} billingAddress
         * @return {?}
         */
            function (billingAddress) {
                return rxjs.combineLatest([
                    this.translation.translate('addressCard.billTo'),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 1), textTitle = _b[0];
                    return {
                        title: textTitle,
                        textBold: billingAddress.firstName + " " + billingAddress.lastName,
                        text: [
                            billingAddress.line1,
                            billingAddress.line2,
                            billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                            billingAddress.phone,
                        ],
                    };
                }));
            };
        /**
         * @param {?} payment
         * @return {?}
         */
        OrderConfirmationComponent.prototype.getPaymentInfoCardContent = /**
         * @param {?} payment
         * @return {?}
         */
            function (payment) {
                return rxjs.combineLatest([
                    this.translation.translate('paymentForm.payment'),
                    this.translation.translate('paymentCard.expires', {
                        month: payment.expiryMonth,
                        year: payment.expiryYear,
                    }),
                ]).pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
                    return {
                        title: textTitle,
                        textBold: payment.accountHolderName,
                        text: [payment.cardNumber, textExpires],
                    };
                }));
            };
        OrderConfirmationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-confirmation',
                        template: "<div class=\"cx-page\" *ngIf=\"(order$ | async) as order\">\n  <header class=\"cx-page__header\">\n    <h1 class=\"cx-page__title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation\">\n    <div class=\"cx-order-confirmation-message\">\n      <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n      <p>\n        {{\n          'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate\n        }}\n      </p>\n      <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n    </div>\n\n    <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n\n    <div class=\"cx-order-review-summary\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getBillingAddressCardContent(\n                    order.paymentInfo.billingAddress\n                  ) | async\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getDeliveryModeCardContent(order.deliveryMode) | async\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getPaymentInfoCardContent(order.paymentInfo) | async\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-order-items container\">\n      <h4 class=\"cx-order-items-header\">\n        {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n      </h4>\n      <cx-cart-item-list\n        [items]=\"order.entries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n\n    <div class=\"cx-order-summary container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n          <cx-order-summary [cart]=\"order\"></cx-order-summary>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        OrderConfirmationComponent.ctorParameters = function () {
            return [
                { type: i1$1.CheckoutService },
                { type: i1$1.TranslationService }
            ];
        };
        return OrderConfirmationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationModule = /** @class */ (function () {
        function OrderConfirmationModule() {
        }
        OrderConfirmationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CartSharedModule,
                            CardModule,
                            PwaModule,
                            i1$1.CheckoutModule,
                            i1$1.I18nModule,
                        ],
                        declarations: [OrderConfirmationComponent],
                        exports: [OrderConfirmationComponent],
                    },] }
        ];
        return OrderConfirmationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var cmsRoute = {
        path: '**',
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
    };
    /**
     * @param {?} injector
     * @return {?}
     */
    function addCmsRoute(injector) {
        /** @type {?} */
        var result = function () {
            /** @type {?} */
            var router = injector.get(i1$2.Router);
            router.config.push(cmsRoute);
        };
        return result;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = addCmsRoute;
    var CmsRouteModule = /** @class */ (function () {
        function CmsRouteModule() {
        }
        CmsRouteModule.decorators = [
            { type: i0.NgModule, args: [{
                        providers: [
                            {
                                provide: i0.APP_INITIALIZER,
                                multi: true,
                                deps: [i0.Injector],
                                useFactory: ɵ0,
                            },
                        ],
                    },] }
        ];
        return CmsRouteModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function provideConfigFromMetaTags() {
        return [
            i1$1.provideConfigFactory(i1$1.occServerConfigFromMetaTagFactory, [i1.Meta]),
            i1$1.provideConfigFactory(i1$1.mediaServerConfigFromMetaTagFactory, [i1.Meta]),
        ];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductPageComponent = /** @class */ (function () {
        function ProductPageComponent() {
        }
        ProductPageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-product-page',
                        template: "<cx-page-layout>\n  <cx-product-details></cx-product-details>\n</cx-page-layout>\n"
                    }] }
        ];
        /** @nocollapse */
        ProductPageComponent.ctorParameters = function () { return []; };
        return ProductPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Matches the pattern '[ ** / ] marker / :paramName [ / ** ]'
     *
     * @param {?} segments
     * @param {?} _segmentGroup
     * @param {?} route
     * @return {?}
     */
    function suffixUrlMatcher(segments, _segmentGroup, route) {
        var _a;
        /** @type {?} */
        var config = route.data.cxSuffixUrlMatcher;
        var marker = config.marker, paramName = config.paramName;
        /** @type {?} */
        var precedingParamName = config.precedingParamName || 'param';
        /** @type {?} */
        var markerIndex = findLastIndex(segments, function (_a) {
            var path = _a.path;
            return path === marker;
        });
        /** @type {?} */
        var isMarkerLastSegment = markerIndex === segments.length - 1;
        if (markerIndex === -1 || isMarkerLastSegment) {
            return null;
        }
        /** @type {?} */
        var paramIndex = markerIndex + 1;
        /** @type {?} */
        var posParams = (_a = {},
            _a[paramName] = segments[paramIndex],
            _a);
        for (var i = 0; i < markerIndex; i++) {
            posParams["" + precedingParamName + i] = segments[i];
        }
        return { consumed: segments.slice(0, paramIndex + 1), posParams: posParams };
    }
    /**
     * @template T
     * @param {?} elements
     * @param {?} predicate
     * @return {?}
     */
    function findLastIndex(elements, predicate) {
        for (var index = elements.length - 1; index >= 0; index--) {
            if (predicate(elements[index])) {
                return index;
            }
        }
        return -1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = {
        cxSuffixUrlMatcher: {
            marker: 'p',
            paramName: 'productCode',
        },
    }, ɵ1 = {
        cxSuffixUrlMatcher: {
            marker: 'c',
            paramName: 'categoryCode',
        },
    };
    var SuffixRoutesModule = /** @class */ (function () {
        function SuffixRoutesModule() {
        }
        SuffixRoutesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1$2.RouterModule.forChild([
                                {
                                    matcher: suffixUrlMatcher,
                                    canActivate: [CmsPageGuard],
                                    component: ProductPageComponent,
                                    data: ɵ0$1,
                                },
                                {
                                    matcher: suffixUrlMatcher,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ1,
                                },
                            ]),
                        ],
                    },] }
        ];
        return SuffixRoutesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartPageComponent = /** @class */ (function () {
        function CartPageComponent(cartService) {
            this.cartService = cartService;
        }
        /**
         * @return {?}
         */
        CartPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.cart$ = this.cartService.getActive();
            };
        CartPageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-cart-page',
                        template: "<cx-page-layout [class.empty]=\"!(cart$ | async).totalItems\"></cx-page-layout>\n"
                    }] }
        ];
        /** @nocollapse */
        CartPageComponent.ctorParameters = function () {
            return [
                { type: i1$1.CartService }
            ];
        };
        return CartPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$2 = { pageLabel: 'cartPage', cxRoute: 'cart' };
    /** @type {?} */
    var routes = [
        {
            path: null,
            canActivate: [CmsPageGuard],
            component: CartPageComponent,
            data: ɵ0$2,
        },
    ];
    var CartPageModule = /** @class */ (function () {
        function CartPageModule() {
        }
        CartPageModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule.forChild(routes),
                            PageLayoutModule,
                            CartDetailsModule,
                            OutletRefModule,
                            CmsModule,
                        ],
                        declarations: [CartPageComponent],
                    },] }
        ];
        return CartPageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HardcodedCheckoutComponent = /** @class */ (function () {
        function HardcodedCheckoutComponent() {
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        HardcodedCheckoutComponent.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                var _this = this;
                return next.handle(req).pipe(operators.map(function (event) {
                    if (event instanceof http.HttpResponse && _this.shouldBeIntercepted(event)) {
                        event = event.clone({ body: _this.addComponent(event.body) });
                    }
                    return event;
                }));
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        HardcodedCheckoutComponent.prototype.shouldBeIntercepted = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return event.url.includes('pageLabelOrId=multiStepCheckoutSummaryPage');
            };
        /**
         * @private
         * @param {?} body
         * @return {?}
         */
        HardcodedCheckoutComponent.prototype.addComponent = /**
         * @private
         * @param {?} body
         * @return {?}
         */
            function (body) {
                if (body.contentSlots && body.contentSlots.contentSlot) {
                    (( /** @type {?} */(body))).contentSlots.contentSlot.push({
                        position: 'BodyContent',
                        components: {
                            component: [
                                {
                                    uid: 'MultiStepCheckoutComponent',
                                    typeCode: 'JspIncludeComponent',
                                },
                            ],
                        },
                    });
                }
                return body;
            };
        HardcodedCheckoutComponent.decorators = [
            { type: i0.Injectable }
        ];
        return HardcodedCheckoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartNotEmptyGuard = /** @class */ (function () {
        function CartNotEmptyGuard(cartService, routingService) {
            this.cartService = cartService;
            this.routingService = routingService;
        }
        /**
         * @return {?}
         */
        CartNotEmptyGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.cartService.getLoaded().pipe(operators.skipWhile(function (loaded) { return !loaded; }), operators.switchMap(function () { return _this.cartService.getActive(); }), operators.map(function (cart) {
                    if (_this.cartService.isEmpty(cart)) {
                        _this.routingService.go({ route: 'home' });
                        return false;
                    }
                    return true;
                }));
            };
        CartNotEmptyGuard.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CartNotEmptyGuard.ctorParameters = function () {
            return [
                { type: i1$1.CartService },
                { type: i1$1.RoutingService }
            ];
        };
        return CartNotEmptyGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GuardsModule = /** @class */ (function () {
        function GuardsModule() {
        }
        GuardsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1$1.RoutingModule, i1$1.CartModule],
                        providers: [CartNotEmptyGuard],
                    },] }
        ];
        return GuardsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationPageComponent = /** @class */ (function () {
        function OrderConfirmationPageComponent() {
        }
        OrderConfirmationPageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cx-order-confirmation-page',
                        template: "<cx-page-layout>\n  <!-- \n    TODO: as long as order confirmation isn't a cms component we render\n    the hard-coded version to  OrderConfirmationOverviewComponent\n  -->\n  <ng-template cxOutletRef=\"OrderConfirmationOverviewComponent\">\n    <cx-order-confirmation></cx-order-confirmation>\n  </ng-template>\n</cx-page-layout>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        return OrderConfirmationPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$3 = { pageLabel: 'orderConfirmationPage', cxRoute: 'orderConfirmation' };
    /** @type {?} */
    var routes$1 = [
        // TODO: as soon as the components are moved to CMS driven components we can drop this specific OrderConfirmationPageComponent
        {
            path: null,
            canActivate: [i1$1.AuthGuard, CmsPageGuard, OrderConfirmationPageGuard],
            component: OrderConfirmationPageComponent,
            data: ɵ0$3,
        },
    ];
    var OrderConfirmationPageModule = /** @class */ (function () {
        function OrderConfirmationPageModule() {
        }
        OrderConfirmationPageModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            OrderConfirmationModule,
                            PageLayoutModule,
                            OutletRefModule,
                            i1$2.RouterModule.forChild(routes$1),
                        ],
                        providers: [OrderConfirmationPageGuard],
                        declarations: [OrderConfirmationPageComponent],
                        exports: [OrderConfirmationPageComponent],
                    },] }
        ];
        return OrderConfirmationPageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$4 = { cxRoute: 'product' };
    /** @type {?} */
    var routes$2 = [
        {
            path: null,
            canActivate: [CmsPageGuard],
            component: ProductPageComponent,
            data: ɵ0$4,
        },
    ];
    var ProductPageModule = /** @class */ (function () {
        function ProductPageModule() {
        }
        ProductPageModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1$2.RouterModule.forChild(routes$2),
                            ProductDetailsModule,
                            PageLayoutModule,
                        ],
                        declarations: [ProductPageComponent],
                        exports: [ProductPageComponent],
                    },] }
        ];
        return ProductPageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultStorefrontRoutesConfig = {
        home: { paths: [''] },
        cart: { paths: ['cart'] },
        search: { paths: ['search/:query'] },
        login: { paths: ['login'] },
        register: { paths: ['register'] },
        resetPassword: { paths: ['login/pw/change'] },
        forgotPassword: { paths: ['forgot-password'] },
        checkout: { paths: ['checkout'] },
        orderConfirmation: { paths: ['order-confirmation'] },
        product: {
            paths: ['product/:productCode'],
            paramsMapping: { productCode: 'code' },
        },
        category: {
            paths: ['category/:categoryCode'],
            paramsMapping: { categoryCode: 'code' },
        },
        brand: { paths: ['Brands/:brandName/c/:brandCode'] },
        termsAndConditions: { paths: ['termsAndConditions'] },
        orders: { paths: ['my-account/orders'] },
        orderDetails: {
            paths: ['my-account/orders/:orderCode'],
            paramsMapping: { orderCode: 'code' },
        },
        addressBook: { paths: ['my-account/address-book'] },
        updatePassword: { paths: ['my-account/update-password'] },
        paymentManagement: { paths: ['my-account/payment-details'] },
        updateEmail: { paths: ['my-account/update-email'] },
        updateProfile: { paths: ['my-account/update-profile'] },
        closeAccount: { paths: ['my-account/close-account'] },
    };
    /** @type {?} */
    var defaultRoutingConfig = {
        routing: {
            routes: defaultStorefrontRoutesConfig,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pageModules = [
        CartPageModule,
        OrderConfirmationPageModule,
        ProductPageModule,
        GuardsModule,
    ];
    var ɵ0$5 = { pageLabel: 'homepage', cxRoute: 'home' }, ɵ1$1 = { pageLabel: 'address-book', cxRoute: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxRoute: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxRoute: 'orders' }, ɵ4 = {
        pageLabel: 'multiStepCheckoutSummaryPage',
        cxRoute: 'checkout',
    }, ɵ5 = { pageLabel: 'login', cxRoute: 'login' }, ɵ6 = { pageLabel: 'search', cxRoute: 'search' }, ɵ7 = { cxRoute: 'category' }, ɵ8 = { cxRoute: 'brand' }, ɵ9 = { pageLabel: 'update-email', cxRoute: 'updateEmail' }, ɵ10 = { pageLabel: 'payment-details', cxRoute: 'paymentManagement' }, ɵ11 = { pageLabel: 'order', cxRoute: 'orderDetails' }, ɵ12 = { pageLabel: 'forgotPassword', cxRoute: 'forgotPassword' }, ɵ13 = { pageLabel: 'resetPassword', cxRoute: 'resetPassword' }, ɵ14 = {
        pageLabel: 'update-profile',
        cxRoute: 'updateProfile',
    }, ɵ15 = { pageLabel: 'close-account', cxRoute: 'closeAccount' };
    var PagesModule = /** @class */ (function () {
        function PagesModule() {
        }
        PagesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: __spread([
                            i1$1.ConfigModule.withConfig(defaultRoutingConfig),
                            common.CommonModule
                        ], pageModules, [
                            PageLayoutModule,
                            LogoutModule,
                            i1$2.RouterModule.forChild([
                                {
                                    // This route can be dropped only when we have a mapping path to page label for content pages
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ0$5,
                                },
                                {
                                    // This route can be dropped only when the link from CMS in MyAccount dropdown menu ("my-account/address-book")
                                    // is the same as the page label ("address-book"). Or when we have a mapping for content pages.
                                    path: null,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    data: ɵ1$1,
                                    component: PageLayoutComponent,
                                },
                                {
                                    path: null,
                                    component: PageLayoutComponent,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    data: ɵ2,
                                },
                                {
                                    path: null,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ3,
                                },
                                {
                                    path: null,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard, CartNotEmptyGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ4,
                                },
                                {
                                    path: null,
                                    canActivate: [i1$1.NotAuthGuard, CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ5,
                                },
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ6,
                                },
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ7,
                                },
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ8,
                                },
                                {
                                    path: null,
                                    component: PageLayoutComponent,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    data: ɵ9,
                                },
                                {
                                    path: null,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    data: ɵ10,
                                    component: PageLayoutComponent,
                                },
                                {
                                    path: null,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ11,
                                },
                                {
                                    path: null,
                                    canActivate: [i1$1.NotAuthGuard, CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ12,
                                },
                                {
                                    path: null,
                                    component: PageLayoutComponent,
                                    canActivate: [i1$1.NotAuthGuard, CmsPageGuard],
                                    data: ɵ13,
                                },
                                {
                                    path: null,
                                    component: PageLayoutComponent,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    data: ɵ14,
                                },
                                {
                                    path: null,
                                    component: PageLayoutComponent,
                                    canActivate: [i1$1.AuthGuard, CmsPageGuard],
                                    data: ɵ15,
                                },
                            ]),
                        ]),
                        providers: [
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: HardcodedCheckoutComponent,
                                multi: true,
                            },
                        ],
                    },] }
        ];
        return PagesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiModule = /** @class */ (function () {
        function UiModule() {
        }
        UiModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, LayoutModule, PagesModule],
                        exports: [LayoutModule, PagesModule],
                    },] }
        ];
        return UiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StorefrontModule = /** @class */ (function () {
        function StorefrontModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        StorefrontModule.withConfig = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: StorefrontModule,
                    providers: __spread([i1$1.provideConfig(config)], provideConfigFromMetaTags()),
                };
            };
        StorefrontModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1$1.StateModule,
                            i1$1.RoutingModule,
                            i1$1.AuthModule.forRoot(),
                            CmsLibModule,
                            CmsModule,
                            UiModule,
                            SuffixRoutesModule,
                            CmsRouteModule,
                            i1$1.ConfigModule.forRoot(),
                            i1$1.CxApiModule,
                            i1$1.SmartEditModule.forRoot(),
                            i1$1.PersonalizationModule.forRoot(),
                            MultiStepCheckoutModule,
                            i1$1.I18nModule.forRoot(),
                        ],
                        exports: [UiModule],
                        providers: __spread(provideConfigFromMetaTags()),
                        declarations: [],
                    },] }
        ];
        return StorefrontModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var cart = {
        cartDetails: {
            id: 'ID',
            proceedToCheckout: 'Proceed to Checkout',
        },
        cartItems: {
            id: 'ID',
            description: 'Description',
            item: 'Item',
            itemPrice: 'Item price',
            quantity: 'Qty',
            total: 'Total',
            cartTotal: 'Cart total ({{count}} item)',
            cartTotal_plural: 'Cart total ({{count}} items)',
        },
        orderCost: {
            orderSummary: 'Order Summary',
            subtotal: 'Subtotal:',
            estimatedShipping: 'Estimated shipping:',
            discount: 'Discount:',
            salesTax: 'Sales Tax:',
            total: 'Total:',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var checkout = {
        checkoutAddress: {
            shippingAddress: 'Shipping Address',
            selectYourShippingAddress: 'Select your Shipping Address',
            defaultShippingAddress: 'Default Shipping Address',
            verifyYourAddress: 'Verify your address',
            ensureAccuracySuggestChange: 'To ensure delivery accuracy, we suggest the change selected below.',
            chooseAddressToUse: 'Please choose which address you would like to use:',
            suggestedAddress: 'Suggested address',
            enteredAddress: 'Entered address',
            addNewAddress: 'Add New Address',
            shipToThisAddress: 'Ship to this address',
            editAddress: 'Edit address',
            saveAddress: 'Save address',
        },
        checkoutOrderConfirmation: {
            confirmationOfOrder: 'Confirmation of Order:',
            thankYou: 'Thank you for your order!',
            invoiceHasBeenSentByEmail: 'An invoice has been sent by email. You should receive it soon.',
            orderItems: 'Order Items',
        },
        checkoutReview: {
            review: 'Review',
            orderItems: 'Order Items',
            confirmThatRead: 'I am confirming that I have read and agreed with the',
            placeOrder: 'Place Order',
            termsAndConditions: 'Terms & Conditions',
        },
        checkoutShipping: {
            shippingMethod: 'Shipping Method',
            standardDelivery: 'Standard Delivery',
            premiumDelivery: 'Premium Delivery',
        },
        checkout: {
            backToCart: 'Back to cart',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var common$1 = {
        common: {
            cancel: 'Cancel',
            delete: 'Delete',
            remove: 'Remove',
            edit: 'Edit',
            back: 'Back',
            submit: 'Submit',
            continue: 'Continue',
            save: 'Save',
        },
        spinner: {
            loading: 'Loading...',
        },
        header: {
            skipToNavigation: 'Skip to navigation',
            skipToShoppingCart: 'Skip to shopping cart',
            skipToMainContent: 'Skip to main content',
            skipToFooter: 'Skip to Footer',
        },
        searchBox: {
            searchHere: 'Search here...',
        },
        sorting: {
            date: 'Date',
            orderNumber: 'Order Number',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var myAccount = {
        orderDetails: {
            orderId: 'Order #',
            placed: 'Placed',
            status: 'Status',
            shippedOn: 'Shipped on',
            inProcess: 'In process...',
            statusDisplay_cancelled: 'Cancelled',
            statusDisplay_cancelling: 'Cancel Pending',
            statusDisplay_completed: 'Completed',
            statusDisplay_created: 'Created',
            statusDisplay_error: 'Pending',
            statusDisplay_Error: 'Pending',
            statusDisplay_open: 'Open',
            statusDisplay_processing: 'In Process',
        },
        orderHistory: {
            orderHistory: 'Order history',
            orderId: 'Order #',
            date: 'Date',
            status: 'Status',
            total: 'Total',
            noOrders: 'We have no order records for this account.',
            startShopping: 'Start Shopping',
            sortByMostRecent: 'Sort by Most recent',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var product = {
        productDetails: {
            id: 'ID',
            quantity: 'Qty',
            productDetails: 'Product Details',
            specification: 'Specs',
            reviews: 'Reviews',
            shipping: 'Shipping',
            share: 'Share',
            showReviews: 'Show reviews',
        },
        productList: {
            filterBy: {
                label: 'Filter by',
                action: 'Filter by',
            },
            appliedFilter: 'Applied Filter:',
            showLess: 'Show less...',
            showMore: 'Show more...',
            sortByRelevance: 'Sort by Relevance',
        },
        productFacetNavigation: {
            filterBy: {
                label: 'Filter by',
                action: 'Filter by',
            },
            appliedFilter: 'Applied Filter:',
            showLess: 'Show less...',
            showMore: 'Show more...',
            sortByRelevance: 'Sort by Relevance',
        },
        productSummary: {
            id: 'ID',
            showReviews: 'Show reviews',
            quantity: 'Qty',
            share: 'Share',
            outOfStock: 'Out of stock',
            inStock: 'In stock',
        },
        productReview: {
            overallRating: 'Overall Rating',
            reviewTitle: 'Review Title',
            writeYourComments: 'Write your comments',
            rating: 'Rating',
            reviewerName: 'Reviewer name (optional)',
            writeReview: 'Write a Review',
            more: 'More',
            less: 'Less',
        },
        addToCart: {
            itemsAddedToYourCart: 'Item(s) added to your cart',
            itemsIncrementedInYourCart: 'This item was already in your cart. The quantity was updated.',
            items: 'items',
            updatingCart: 'Updating cart...',
            addToCart: 'Add to cart',
            viewCart: 'view cart',
            proceedToCheckout: 'proceed to checkout',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pwa = {
        pwa: {
            addToHomeScreenDescription: 'Add SAP storefront to your device homescreen for a faster return visit',
            noInstallationNeeded: 'No installation needed',
            fastAccessToApplication: 'Fast access to application',
            addToHomeScreen: 'Add to home screen',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var storeFinder = {
        storeFinder: {
            openUntil: 'Open until',
            closed: 'Closed',
            call: 'Call',
            getDirections: 'Get Directions',
            listView: 'List View',
            mapView: 'Map View',
            noStoresFound: 'No Stores Found.',
            storeHours: 'Store hours',
            storeFeatures: 'Store features',
            fromStoresFound: 'from {{ count }} store found',
            fromStoresFound_plural: 'from {{ count }} stores found',
            findStore: 'Find store',
            useMyLocation: 'Use my location',
            viewAllStores: 'View all stores',
            contactUs: 'Contact us',
            searchBox: 'Enter postal code, town or address',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var user = {
        forgottenPassword: {
            resetPassword: 'Reset password',
            enterEmailAddressAssociatedWithYourAccount: 'Enter the email address associated with your account',
            emailAddress: {
                label: 'Email address',
                placeholder: 'Enter email',
            },
            enterValidEmail: 'Please enter a valid email.',
        },
        loginForm: {
            forgotPassword: 'Forgot password?',
            signIn: 'Sign In',
            register: 'Register',
            dontHaveAccount: 'Don’t have an account',
            emailAddress: {
                label: 'Email address',
                placeholder: 'Enter email',
            },
            password: {
                label: 'Password',
                placeholder: 'Password',
            },
            wrongEmailFormat: 'This is not a valid email format.',
        },
        register: {
            confirmPassword: {
                action: 'Confirm password',
                label: 'Confirm password',
                placeholder: 'Confirm Password',
            },
            managmentInMyAccount: 'Management in My Account.',
            termsAndConditions: 'Terms & Conditions',
            signIn: 'I already have an account. Sign In',
            register: 'Register',
            confirmNewPassword: 'Confirm New Password',
            resetPassword: 'Reset Password',
            createAccount: 'Create an account',
            title: 'Title',
            firstName: {
                label: 'First name',
                placeholder: 'First name',
            },
            lastName: {
                label: 'Last name',
                placeholder: 'Last name',
            },
            emailAddress: {
                label: 'Email address',
                placeholder: 'Email address',
            },
            password: {
                label: 'Password',
                placeholder: 'Password',
            },
            newPassword: 'New Password',
            /* tslint:disable:max-line-length */
            emailMarketing: 'Use my personal data to receive e-mail newsletters for marketing campaigns. To change your settings, go to Consent Management in My Account.',
            confirmThatRead: 'I am confirming that I have read and agreed with the',
            selectTitle: 'Select Title',
            passwordMinRequirements: 'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
            bothPasswordMustMatch: 'Both password must match',
        },
        login: {
            userGreeting: 'Hi, {{name}}',
            signInRegister: 'Sign In / Register',
        },
        updateEmailForm: {
            newEmailAddress: {
                label: 'New email address',
                placeholder: 'Enter email',
            },
            confirmNewEmailAddress: {
                label: 'Confirm new email address',
                placeholder: 'Enter email',
            },
            enterValidEmail: 'Please enter a valid email.',
            bothPasswordMustMatch: 'Both password must match',
            password: {
                label: 'Password',
                placeholder: 'Enter password',
            },
            pleaseInputPassword: 'Please input password',
        },
        updatePasswordForm: {
            oldPassword: {
                label: 'Old Password',
                placeholder: 'Old Password',
            },
            oldPasswordIsRequired: 'Old password is required.',
            newPassword: {
                label: 'New Password',
                placeholder: 'New Password',
            },
            passwordMinRequirements: 'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
            confirmPassword: {
                label: 'Confirm New Password',
                placeholder: 'Confirm Password',
            },
            bothPasswordMustMatch: 'Both password must match',
        },
        updateProfileForm: {
            title: '',
            none: '',
            firstName: {
                label: 'First name',
                placeholder: 'First name',
            },
            firstNameIsRequired: 'First name is required.',
            lastName: {
                label: 'Last name',
                placeholder: 'Last name',
            },
            lastNameIsRequired: 'Last name is required.',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var payment = {
        paymentForm: {
            payment: 'Payment',
            choosePaymentMethod: 'Choose a payment method',
            paymentType: 'Payment Type',
            accountHolderName: {
                label: 'Account Holder Name',
                placeholder: 'Account Holder Name',
            },
            cardNumber: 'Card Number',
            expirationDate: 'Expiration Date',
            securityCode: 'Security code (CVV)',
            saveAsDefault: 'Save as default',
            billingAddress: 'Billing address',
            sameAsShippingAddress: 'Same as shipping address',
            selectOne: 'Select One...',
            monthMask: 'MM',
            yearMask: 'YYYY',
            useThisPayment: 'Use this payment',
            addNewPayment: 'Add New Payment',
            changePayment: 'Change Payment',
        },
        paymentMethods: {
            paymentMethods: 'Payment methods',
            newPaymentMethodsAreAddedDuringCheckout: 'New payment methods are added during checkout.',
        },
        paymentCard: {
            deleteConfirmation: 'Are you sure you want to delete this payment method?',
            setAsDefault: 'Set as default',
            expires: 'Expires: {{ month }}/{{ year }}',
            defaultPaymentMethod: 'Default Payment Method',
            selected: 'Selected',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var address = {
        addressForm: {
            title: 'Title',
            firstName: {
                label: 'First name',
                placeholder: 'First Name',
            },
            lastName: {
                label: 'Last name',
                placeholder: 'Last Name',
            },
            address1: 'Address 1',
            address2: 'Address 2 (optional)',
            country: 'Country',
            city: {
                label: 'City',
                placeholder: 'City',
            },
            state: 'State',
            zipCode: {
                label: 'Zip code',
                placeholder: 'Postal Code/Zip',
            },
            phoneNumber: {
                label: 'Phone number (optional)',
                placeholder: '(555) 555 - 0123',
            },
            saveAsDefault: 'Save as default',
            chooseAddress: 'Choose address',
            streetAddress: 'Street Address',
            aptSuite: 'Apt, Suite',
            selectOne: 'Select One...',
            setAsDefault: 'Set as default',
        },
        addressBook: {
            addNewShippingAddress: 'Add a new shipping address',
            editShippingAddress: 'Edit shipping address',
            areYouSureToDeleteAddress: 'Are you sure you want to delete this address?',
            addNewAddress: 'Add new address',
            addAddress: 'Add address',
            updateAddress: 'Update address',
            backToAddressList: 'Back to address list',
        },
        addressCard: {
            default: 'DEFAULT',
            selected: 'Selected',
            setAsDefault: 'Set as default',
            shipTo: 'Ship To',
            billTo: 'Bill To',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var closeAccount = {
        closeAccount: {
            info: {
                retention: 'When you close your account, your profile information will be kept for the retention period mandated by the laws and regulations of your country. Customer Support will be able to assist you with any order history or proof of purchase needs during this time.<br/><br/>At the end of the retention period, the following profile information will be deleted and will no longer be accessible to you or anyone else:<br/><br/><ul><li>email addresses</li><li>contact information</li><li>shipping details</li><li>delivery preferences</li><li>consent management settings</li><li>account history</li><li>payment details</li><li>order history</li></ul>',
            },
            message: {
                success: 'Account closed with success',
            },
            modal: {
                title: 'Confirm Account Closure',
                confirmation: 'Are you sure you want to close your account?',
            },
            action: {
                cancel: 'Cancel',
                closeMyAccount: 'CLOSE MY ACCOUNT',
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var translations = {
        en: {
            address: address,
            cart: cart,
            checkout: checkout,
            closeAccount: closeAccount,
            common: common$1,
            myAccount: myAccount,
            payment: payment,
            product: product,
            pwa: pwa,
            storeFinder: storeFinder,
            user: user,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AddToCartComponent = AddToCartComponent;
    exports.AddToCartModule = AddToCartModule;
    exports.AddedToCartDialogComponent = AddedToCartDialogComponent;
    exports.CartDetailsComponent = CartDetailsComponent;
    exports.CartDetailsModule = CartDetailsModule;
    exports.CartItemComponent = CartItemComponent;
    exports.CartItemListComponent = CartItemListComponent;
    exports.CartSharedModule = CartSharedModule;
    exports.OrderSummaryComponent = OrderSummaryComponent;
    exports.CartTotalsComponent = CartTotalsComponent;
    exports.CartComponentModule = CartComponentModule;
    exports.MiniCartComponent = MiniCartComponent;
    exports.MiniCartModule = MiniCartModule;
    exports.CmsLibModule = CmsLibModule;
    exports.BannerComponent = BannerComponent;
    exports.BannerModule = BannerModule;
    exports.LinkComponent = LinkComponent;
    exports.LinkModule = LinkModule;
    exports.ParagraphComponent = ParagraphComponent;
    exports.CmsParagraphModule = CmsParagraphModule;
    exports.TabParagraphContainerComponent = TabParagraphContainerComponent;
    exports.TabParagraphContainerModule = TabParagraphContainerModule;
    exports.GlobalMessageComponentModule = GlobalMessageComponentModule;
    exports.GlobalMessageComponent = GlobalMessageComponent;
    exports.IconLoaderService = IconLoaderService;
    exports.IconComponent = IconComponent;
    exports.ICON_TYPES = ICON_TYPES;
    exports.IconConfig = IconConfig;
    exports.IconModule = IconModule;
    exports.LanguageCurrencyComponent = LanguageCurrencyComponent;
    exports.SiteContextComponentService = SiteContextComponentService;
    exports.SiteContextSelectorComponent = SiteContextSelectorComponent;
    exports.SiteContextSelectorModule = SiteContextSelectorModule;
    exports.SiteContextType = SiteContextType;
    exports.AddressBookComponent = AddressBookComponent;
    exports.AddressBookComponentService = AddressBookComponentService;
    exports.AddressBookModule = AddressBookModule;
    exports.AddressCardComponent = AddressCardComponent;
    exports.CloseAccountModule = CloseAccountModule;
    exports.CloseAccountModalComponent = CloseAccountModalComponent;
    exports.CloseAccountComponent = CloseAccountComponent;
    exports.ForgotPasswordComponent = ForgotPasswordComponent;
    exports.ForgotPasswordModule = ForgotPasswordModule;
    exports.OrderDetailHeadlineComponent = OrderDetailHeadlineComponent;
    exports.OrderDetailItemsComponent = OrderDetailItemsComponent;
    exports.OrderDetailShippingComponent = OrderDetailShippingComponent;
    exports.OrderDetailTotalsComponent = OrderDetailTotalsComponent;
    exports.OrderDetailsModule = OrderDetailsModule;
    exports.OrderDetailsService = OrderDetailsService;
    exports.OrderHistoryComponent = OrderHistoryComponent;
    exports.OrderHistoryModule = OrderHistoryModule;
    exports.OrderModule = OrderModule;
    exports.PaymentMethodsComponent = PaymentMethodsComponent;
    exports.PaymentMethodsModule = PaymentMethodsModule;
    exports.ResetPasswordFormComponent = ResetPasswordFormComponent;
    exports.ResetPasswordModule = ResetPasswordModule;
    exports.UpdateEmailFormComponent = UpdateEmailFormComponent;
    exports.UpdateEmailComponent = UpdateEmailComponent;
    exports.UpdateEmailModule = UpdateEmailModule;
    exports.UpdatePasswordFormComponent = UpdatePasswordFormComponent;
    exports.UpdatePasswordComponent = UpdatePasswordComponent;
    exports.UpdatePasswordModule = UpdatePasswordModule;
    exports.UpdateProfileFormComponent = UpdateProfileFormComponent;
    exports.UpdateProfileComponent = UpdateProfileComponent;
    exports.UpdateProfileModule = UpdateProfileModule;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.CategoryNavigationComponent = CategoryNavigationComponent;
    exports.CategoryNavigationModule = CategoryNavigationModule;
    exports.FooterNavigationComponent = FooterNavigationComponent;
    exports.FooterNavigationModule = FooterNavigationModule;
    exports.NavigationComponent = NavigationComponent;
    exports.NavigationModule = NavigationModule;
    exports.SearchBoxComponentService = SearchBoxComponentService;
    exports.SearchBoxComponent = SearchBoxComponent;
    exports.SearchBoxModule = SearchBoxModule;
    exports.CurrentProductService = CurrentProductService;
    exports.ProductCarouselComponent = ProductCarouselComponent;
    exports.ProductCarouselModule = ProductCarouselModule;
    exports.ProductDetailsComponent = ProductDetailsComponent;
    exports.ProductDetailsModule = ProductDetailsModule;
    exports.ProductImagesComponent = ProductImagesComponent;
    exports.ProductSummaryComponent = ProductSummaryComponent;
    exports.ProductListComponent = ProductListComponent;
    exports.ProductFacetNavigationComponent = ProductFacetNavigationComponent;
    exports.ProductGridItemComponent = ProductGridItemComponent;
    exports.ProductListItemComponent = ProductListItemComponent;
    exports.ProductListModule = ProductListModule;
    exports.ViewModes = ViewModes;
    exports.ProductViewComponent = ProductViewComponent;
    exports.ProductDetailOutlets = ProductDetailOutlets;
    exports.ProductTabsOutlets = ProductTabsOutlets;
    exports.ProductReferencesComponent = ProductReferencesComponent;
    exports.ProductReferencesModule = ProductReferencesModule;
    exports.ProductAttributesComponent = ProductAttributesComponent;
    exports.ProductReviewsComponent = ProductReviewsComponent;
    exports.ProductReviewsModule = ProductReviewsModule;
    exports.ProductTabsModule = ProductTabsModule;
    exports.AbstractStoreItemComponent = AbstractStoreItemComponent;
    exports.ScheduleComponent = ScheduleComponent;
    exports.StoreFinderGridComponent = StoreFinderGridComponent;
    exports.StoreFinderHeaderComponent = StoreFinderHeaderComponent;
    exports.StoreFinderListItemComponent = StoreFinderListItemComponent;
    exports.StoreFinderMapComponent = StoreFinderMapComponent;
    exports.StoreFinderPaginationDetailsComponent = StoreFinderPaginationDetailsComponent;
    exports.StoreFinderListComponent = StoreFinderListComponent;
    exports.StoreFinderSearchResultComponent = StoreFinderSearchResultComponent;
    exports.StoreFinderSearchComponent = StoreFinderSearchComponent;
    exports.StoreFinderStoreDescriptionComponent = StoreFinderStoreDescriptionComponent;
    exports.StoreFinderStoresCountComponent = StoreFinderStoresCountComponent;
    exports.StoreFinderComponent = StoreFinderComponent;
    exports.StoreFinderModule = StoreFinderModule;
    exports.LoginFormComponent = LoginFormComponent;
    exports.LoginFormModule = LoginFormModule;
    exports.LoginComponent = LoginComponent;
    exports.LoginModule = LoginModule;
    exports.LogoutGuard = LogoutGuard;
    exports.LogoutModule = LogoutModule;
    exports.RegisterComponent = RegisterComponent;
    exports.RegisterComponentModule = RegisterComponentModule;
    exports.UserComponentModule = UserComponentModule;
    exports.OutletRefDirective = OutletRefDirective;
    exports.OutletRefModule = OutletRefModule;
    exports.OutletDirective = OutletDirective;
    exports.OutletPosition = OutletPosition;
    exports.OutletModule = OutletModule;
    exports.OutletService = OutletService;
    exports.StyleRefDirective = StyleRefDirective;
    exports.StyleRefModule = StyleRefModule;
    exports.ComponentWrapperDirective = ComponentWrapperDirective;
    exports.PageComponentModule = PageComponentModule;
    exports.defaultCmsContentConfig = defaultCmsContentConfig;
    exports.CmsComponentData = CmsComponentData;
    exports.PageLayoutComponent = PageLayoutComponent;
    exports.PageLayoutModule = PageLayoutModule;
    exports.PageLayoutService = PageLayoutService;
    exports.PageSlotComponent = PageSlotComponent;
    exports.PageSlotModule = PageSlotModule;
    exports.AddToHomeScreenBannerComponent = AddToHomeScreenBannerComponent;
    exports.AddToHomeScreenBtnComponent = AddToHomeScreenBtnComponent;
    exports.AddToHomeScreenComponent = AddToHomeScreenComponent;
    exports.pwaConfigurationFactory = pwaConfigurationFactory;
    exports.pwaFactory = pwaFactory;
    exports.PwaModule = PwaModule;
    exports.PWAModuleConfig = PWAModuleConfig;
    exports.defaultPWAModuleConfig = defaultPWAModuleConfig;
    exports.SeoMetaService = SeoMetaService;
    exports.initSeoService = initSeoService;
    exports.SeoModule = SeoModule;
    exports.BreakpointService = BreakpointService;
    exports.defaultLayoutConfig = defaultLayoutConfig;
    exports.BREAKPOINT = BREAKPOINT;
    exports.LayoutConfig = LayoutConfig;
    exports.HamburgerMenuComponent = HamburgerMenuComponent;
    exports.HamburgerMenuModule = HamburgerMenuModule;
    exports.HamburgerMenuService = HamburgerMenuService;
    exports.SkipLinkComponent = SkipLinkComponent;
    exports.SkipLinkModule = SkipLinkModule;
    exports.LayoutModule = LayoutModule;
    exports.MainModule = MainModule;
    exports.StorefrontComponent = StorefrontComponent;
    exports.CheckoutComponentModule = CheckoutComponentModule;
    exports.MultiStepCheckoutModule = MultiStepCheckoutModule;
    exports.ShippingAddressModule = ShippingAddressModule;
    exports.OrderConfirmationModule = OrderConfirmationModule;
    exports.SuggestedAddressDialogComponent = SuggestedAddressDialogComponent;
    exports.AddressFormComponent = AddressFormComponent;
    exports.PaymentFormComponent = PaymentFormComponent;
    exports.ReviewSubmitComponent = ReviewSubmitComponent;
    exports.DeliveryModeComponent = DeliveryModeComponent;
    exports.MultiStepCheckoutComponent = MultiStepCheckoutComponent;
    exports.OrderConfirmationComponent = OrderConfirmationComponent;
    exports.CmsRouteModule = CmsRouteModule;
    exports.CmsModule = CmsModule;
    exports.CmsPageGuard = CmsPageGuard;
    exports.CmsMappingService = CmsMappingService;
    exports.CmsRoutesService = CmsRoutesService;
    exports.StorefrontModule = StorefrontModule;
    exports.SuffixRoutesModule = SuffixRoutesModule;
    exports.PagesModule = PagesModule;
    exports.ProductPageComponent = ProductPageComponent;
    exports.CartPageComponent = CartPageComponent;
    exports.OrderConfirmationPageComponent = OrderConfirmationPageComponent;
    exports.CartPageModule = CartPageModule;
    exports.ProductPageModule = ProductPageModule;
    exports.UiModule = UiModule;
    exports.FormComponentsModule = FormComponentsModule;
    exports.ItemCounterComponent = ItemCounterComponent;
    exports.GenericLinkComponent = GenericLinkComponent;
    exports.ListNavigationModule = ListNavigationModule;
    exports.PaginationComponent = PaginationComponent;
    exports.SortingComponent = SortingComponent;
    exports.MediaComponent = MediaComponent;
    exports.MediaModule = MediaModule;
    exports.MediaService = MediaService;
    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.StarRatingComponent = StarRatingComponent;
    exports.StarRatingModule = StarRatingModule;
    exports.OnlyNumberDirective = OnlyNumberDirective;
    exports.translations = translations;
    exports.ɵd = CartTotalsModule;
    exports.ɵe = defaultIconConfig;
    exports.ɵh = NavigationUIComponent;
    exports.ɵg = NavigationComponentService;
    exports.ɵn = ProductCarouselService;
    exports.ɵm = ProductTabsComponent;
    exports.ɵr = LoginComponentService;
    exports.ɵl = OutletStyleService;
    exports.ɵs = defaultCartPageConfig;
    exports.ɵt = AddToHomeScreenService;
    exports.ɵc = BootstrapModule;
    exports.ɵbe = CheckoutDetailsService;
    exports.ɵv = DeliveryModeModule;
    exports.ɵz = BillingAddressFormComponent;
    exports.ɵy = BillingAddressFormModule;
    exports.ɵx = PaymentFormModule;
    exports.ɵba = PaymentMethodComponent;
    exports.ɵw = PaymentMethodModule;
    exports.ɵbd = PlaceOrderComponent;
    exports.ɵbc = PlaceOrderModule;
    exports.ɵbb = ReviewSubmitModule;
    exports.ɵk = AddressFormModule;
    exports.ɵu = ShippingAddressComponent;
    exports.ɵb = PromotionsComponent;
    exports.ɵa = PromotionsModule;
    exports.ɵbf = guards$1;
    exports.ɵbg = OrderConfirmationPageGuard;
    exports.ɵbh = addCmsRoute;
    exports.ɵo = guards;
    exports.ɵq = CmsGuardsService;
    exports.ɵp = CmsI18nService;
    exports.ɵbp = provideConfigFromMetaTags;
    exports.ɵbo = suffixUrlMatcher;
    exports.ɵbn = HardcodedCheckoutComponent;
    exports.ɵbj = defaultRoutingConfig;
    exports.ɵbi = defaultStorefrontRoutesConfig;
    exports.ɵbm = CartNotEmptyGuard;
    exports.ɵbl = GuardsModule;
    exports.ɵbk = OrderConfirmationPageModule;
    exports.ɵj = CardComponent;
    exports.ɵi = CardModule;
    exports.ɵf = GenericLinkModule;
    exports.ɵbq = address;
    exports.ɵbr = cart;
    exports.ɵbs = checkout;
    exports.ɵbt = closeAccount;
    exports.ɵbu = common$1;
    exports.ɵbv = myAccount;
    exports.ɵbw = payment;
    exports.ɵbx = product;
    exports.ɵby = pwa;
    exports.ɵbz = storeFinder;
    exports.ɵca = user;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=spartacus-storefront.umd.js.map