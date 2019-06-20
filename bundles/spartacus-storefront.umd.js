(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@spartacus/core'), require('rxjs/operators'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('@ng-select/ng-select'), require('@angular/common/http'), require('@angular/service-worker'), require('@angular/platform-browser'), require('@ngrx/effects'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('@spartacus/storefront', ['exports', '@angular/core', '@spartacus/core', 'rxjs/operators', '@ng-bootstrap/ng-bootstrap', '@angular/forms', '@angular/common', '@angular/router', 'rxjs', '@ng-select/ng-select', '@angular/common/http', '@angular/service-worker', '@angular/platform-browser', '@ngrx/effects', '@ngrx/store'], factory) :
    (global = global || self, factory((global.spartacus = global.spartacus || {}, global.spartacus.storefront = {}), global.ng.core, global.core, global.rxjs.operators, global.ngBootstrap, global.ng.forms, global.ng.common, global.ng.router, global.rxjs, global.ngSelect, global.ng.common.http, global.ng['service-worker'], global.ng.platformBrowser, global.effects, global.store));
}(this, function (exports, core, core$1, operators, ngBootstrap, forms, common, router, rxjs, ngSelect, http, serviceWorker, platformBrowser, effects, store) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A reference to a newly opened modal
     *
     * \@todo remove ngb dependency and create our own implementation of ModalRef
     */
    var   /**
     * A reference to a newly opened modal
     *
     * \@todo remove ngb dependency and create our own implementation of ModalRef
     */
    ModalRef = /** @class */ (function (_super) {
        __extends(ModalRef, _super);
        function ModalRef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ModalRef;
    }(ngBootstrap.NgbModalRef));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A service to handle modal
     */
    var ModalService = /** @class */ (function () {
        function ModalService(ngbModalService) {
            this.ngbModalService = ngbModalService;
            this.modals = [];
        }
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        ModalService.prototype.open = /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (content, options) {
            /** @type {?} */
            var activeModal;
            activeModal = this.ngbModalService.open(content, options);
            this.modals.push(activeModal);
            return activeModal;
        };
        /**
         * @return {?}
         */
        ModalService.prototype.getActiveModal = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var modal = this.modals[this.modals.length - 1];
            return modal ? modal : null;
        };
        /**
         * @param {?=} reason
         * @return {?}
         */
        ModalService.prototype.dismissActiveModal = /**
         * @param {?=} reason
         * @return {?}
         */
        function (reason) {
            /** @type {?} */
            var modal = this.getActiveModal();
            if (modal) {
                modal.dismiss(reason);
                this.modals.pop();
            }
        };
        /**
         * @param {?=} reason
         * @return {?}
         */
        ModalService.prototype.closeActiveModal = /**
         * @param {?=} reason
         * @return {?}
         */
        function (reason) {
            /** @type {?} */
            var modal = this.getActiveModal();
            if (modal) {
                modal.close(reason);
                this.modals.pop();
            }
        };
        ModalService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () { return [
            { type: ngBootstrap.NgbModal }
        ]; };
        /** @nocollapse */ ModalService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(core.ɵɵinject(ngBootstrap.NgbModal)); }, token: ModalService, providedIn: "root" });
        return ModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return this.routingService.getRouterState().pipe(operators.map((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.state.params['productCode']; })), operators.filter(Boolean), operators.switchMap((/**
             * @param {?} productCode
             * @return {?}
             */
            function (productCode) { return _this.productService.get(productCode); })));
        };
        CurrentProductService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CurrentProductService.ctorParameters = function () { return [
            { type: core$1.RoutingService },
            { type: core$1.ProductService }
        ]; };
        /** @nocollapse */ CurrentProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(core.ɵɵinject(core$1.RoutingService), core.ɵɵinject(core$1.ProductService)); }, token: CurrentProductService, providedIn: "root" });
        return CurrentProductService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ICON_TYPE = {
        STAR: 'STAR',
        SEARCH: 'SEARCH',
        CART: 'CART',
        INFO: 'INFO',
        GRID: 'GRID',
        LIST: 'LIST',
        CARET_DOWN: 'CARET_DOWN',
        CARET_LEFT: 'CARET_LEFT',
        CARET_RIGHT: 'CARET_RIGHT',
        CLOSE: 'CLOSE',
        ERROR: 'ERROR',
        WARNING: 'WARNING',
        SUCCESS: 'SUCCESS',
        VISA: 'VISA',
        MASTER_CARD: 'MASTER_CARD',
        AMEX: 'AMEX',
        DINERS_CLUB: 'DINERS_CLUB',
        CREDIT_CARD: 'CREDIT_CARD',
        EXPAND: 'EXPAND',
        COLLAPSE: 'COLLAPSE',
        RESET: 'RESET',
        CIRCLE: 'CIRCLE',
    };
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    IconConfig = /** @class */ (function () {
        function IconConfig() {
        }
        return IconConfig;
    }());
    /** @enum {string} */
    var IconResourceType = {
        SVG: 'svg',
        LINK: 'link',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fontawesomeIconConfig = {
        icon: {
            symbols: {
                SEARCH: 'fas fa-search',
                CART: 'fas fa-shopping-cart',
                INFO: 'fas fa-info-circle',
                STAR: 'fas fa-star',
                GRID: 'fas fa-th-large',
                LIST: 'fas fa-bars',
                CARET_DOWN: 'fas fa-angle-down',
                CARET_RIGHT: 'fas fa-angle-right',
                CARET_LEFT: 'fas fa-angle-left',
                ERROR: 'fas fa-exclamation-circle',
                WARNING: 'fas fa-exclamation-triangle',
                SUCCESS: 'fas fa-check-circle',
                CLOSE: 'fas fa-times',
                VISA: 'fab fa-cc-visa',
                MASTER_CARD: 'fab fa-cc-mastercard',
                AMEX: 'fab fa-cc-amex',
                DINERS_CLUB: 'fab fa-cc-diners-club',
                CREDIT_CARD: 'fas fa-credit-card',
                COLLAPSE: 'fas fa-minus',
                EXPAND: 'fas fa-plus',
                RESET: 'fas fa-times-circle',
                CIRCLE: 'fas fa-circle',
            },
            resources: [
                {
                    type: IconResourceType.LINK,
                    url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
                },
            ],
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconLoaderService = /** @class */ (function () {
        function IconLoaderService(winRef, config) {
            this.winRef = winRef;
            this.config = config;
            this.loadedResources = [];
        }
        /**
         * Indicates whether the given icon type is configured to use SVG.
         */
        /**
         * Indicates whether the given icon type is configured to use SVG.
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.useSvg = /**
         * Indicates whether the given icon type is configured to use SVG.
         * @param {?} iconType
         * @return {?}
         */
        function (iconType) {
            return (this.config.icon.resources &&
                !!this.config.icon.resources.find((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    return res.types &&
                        res.type === IconResourceType.SVG &&
                        res.types.includes(iconType);
                })));
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
            /** @type {?} */
            var svgResource = this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return res.type === IconResourceType.SVG &&
                    res.types &&
                    res.types.includes(iconType);
            }));
            if (svgResource) {
                return svgResource.url
                    ? svgResource.url + "#" + this.getSymbol(iconType)
                    : "#" + this.getSymbol(iconType);
            }
        };
        /**
         *
         * Returns the symbol class(es) for the icon type.
         */
        /**
         *
         * Returns the symbol class(es) for the icon type.
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.getStyleClasses = /**
         *
         * Returns the symbol class(es) for the icon type.
         * @param {?} iconType
         * @return {?}
         */
        function (iconType) {
            return this.getSymbol(iconType) || '';
        };
        /**
         * Loads the resource url (if any) for the given icon.
         * The icon will only be loaded once.
         *
         * NOTE: this is not working when the shadow is used as there's
         * no head element available and the link must be loaded for every
         * web component.
         */
        /**
         * Loads the resource url (if any) for the given icon.
         * The icon will only be loaded once.
         *
         * NOTE: this is not working when the shadow is used as there's
         * no head element available and the link must be loaded for every
         * web component.
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.addLinkResource = /**
         * Loads the resource url (if any) for the given icon.
         * The icon will only be loaded once.
         *
         * NOTE: this is not working when the shadow is used as there's
         * no head element available and the link must be loaded for every
         * web component.
         * @param {?} iconType
         * @return {?}
         */
        function (iconType) {
            /** @type {?} */
            var resource = this.findResource(iconType, IconResourceType.LINK);
            if (resource && resource.url) {
                if (!this.loadedResources.includes(resource.url)) {
                    this.loadedResources.push(resource.url);
                    /** @type {?} */
                    var head = this.winRef.document.getElementsByTagName('head')[0];
                    /** @type {?} */
                    var link = this.winRef.document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = resource.url;
                    head.appendChild(link);
                }
            }
        };
        /**
         * @private
         * @param {?} iconType
         * @param {?} resourceType
         * @return {?}
         */
        IconLoaderService.prototype.findResource = /**
         * @private
         * @param {?} iconType
         * @param {?} resourceType
         * @return {?}
         */
        function (iconType, resourceType) {
            if (!this.config.icon.resources) {
                return;
            }
            /** @type {?} */
            var resource = this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return res.type === resourceType && res.types && res.types.includes(iconType);
            }));
            // no specific resource found, let's try to find a one-size-fits-all resource
            if (!resource) {
                resource = this.config.icon.resources.find((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return (res.type === resourceType && !res.types) || res.types === []; }));
            }
            return resource;
        };
        /**
         * @private
         * @param {?} iconType
         * @return {?}
         */
        IconLoaderService.prototype.getSymbol = /**
         * @private
         * @param {?} iconType
         * @return {?}
         */
        function (iconType) {
            if (this.config.icon &&
                this.config.icon.symbols &&
                this.config.icon.symbols[iconType]) {
                return this.config.icon.symbols[iconType];
            }
        };
        IconLoaderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        IconLoaderService.ctorParameters = function () { return [
            { type: core$1.WindowRef },
            { type: IconConfig }
        ]; };
        /** @nocollapse */ IconLoaderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(core.ɵɵinject(core$1.WindowRef), core.ɵɵinject(IconConfig)); }, token: IconLoaderService, providedIn: "root" });
        return IconLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconComponent = /** @class */ (function () {
        function IconComponent(iconLoader, elementRef) {
            this.iconLoader = iconLoader;
            this.elementRef = elementRef;
            /**
             * Keeps the given style classes so that we can
             * clean them up when the icon changes
             */
            this.styleClasses = '';
        }
        Object.defineProperty(IconComponent.prototype, "type", {
            set: /**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                this._type = type;
                this.addStyleClasses(type);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "useSvg", {
            /**
             * Indicates whether the icon is configured to use SVG or not.
             */
            get: /**
             * Indicates whether the icon is configured to use SVG or not.
             * @return {?}
             */
            function () {
                return this.iconLoader.useSvg(this._type);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "svgPath", {
            /**
             * Returns the path to the svg symbol. The path could include an
             * external URL to an svg (sprite) file, but can also reference
             * an existing SVG symbol in the DOM.
             */
            get: /**
             * Returns the path to the svg symbol. The path could include an
             * external URL to an svg (sprite) file, but can also reference
             * an existing SVG symbol in the DOM.
             * @return {?}
             */
            function () {
                return this.iconLoader.getSvgPath(this._type);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Adds the style classes and the link resource (if availabe).
         */
        /**
         * Adds the style classes and the link resource (if availabe).
         * @private
         * @param {?} type
         * @return {?}
         */
        IconComponent.prototype.addStyleClasses = /**
         * Adds the style classes and the link resource (if availabe).
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
            if (this.useSvg) {
                return;
            }
            if (this.staticStyleClasses === undefined) {
                this.staticStyleClasses = this.elementRef.nativeElement.classList.value
                    ? this.elementRef.nativeElement.classList.value + ' '
                    : '';
            }
            this.styleClasses =
                this.staticStyleClasses + this.iconLoader.getStyleClasses(type);
            this.iconLoader.addLinkResource(type);
        };
        IconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-icon',
                        template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () { return [
            { type: IconLoaderService },
            { type: core.ElementRef }
        ]; };
        IconComponent.propDecorators = {
            type: [{ type: core.Input, args: ['type',] }],
            styleClasses: [{ type: core.HostBinding, args: ['class',] }]
        };
        return IconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconModule = /** @class */ (function () {
        function IconModule() {
        }
        IconModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [IconComponent],
                        imports: [common.CommonModule, core$1.ConfigModule.withConfig(fontawesomeIconConfig)],
                        providers: [{ provide: IconConfig, useExisting: core$1.Config }],
                        exports: [IconComponent],
                    },] }
        ];
        return IconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddedToCartDialogComponent = /** @class */ (function () {
        function AddedToCartDialogComponent(modalService, cartService, fb) {
            this.modalService = modalService;
            this.cartService = cartService;
            this.fb = fb;
            this.iconTypes = ICON_TYPE;
            this.quantity = 0;
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
            this.entry$ = this.entry$.pipe(operators.tap((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                if (entry) {
                    var code = entry.product.code;
                    if (!_this.form.controls[code]) {
                        _this.form.setControl(code, _this.createEntryFormGroup(entry));
                    }
                    else {
                        /** @type {?} */
                        var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                        entryForm.controls.quantity.setValue(entry.quantity);
                    }
                    _this.form.markAsPristine();
                    // Announce in header if Add To Cart button has incremented product
                    _this.showItemIncrLabel = _this.firstUpdate && entry.quantity > 1;
                    // Any updates after the first will be flagged as false
                    _this.firstUpdate = false;
                }
            })));
        };
        /**
         * @param {?=} reason
         * @return {?}
         */
        AddedToCartDialogComponent.prototype.dismissModal = /**
         * @param {?=} reason
         * @return {?}
         */
        function (reason) {
            this.modalService.dismissActiveModal(reason);
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
            this.dismissModal('Removed');
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
            { type: core.Component, args: [{
                        selector: 'cx-added-to-cart-dialog',
                        template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (showItemIncrLabel\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AddedToCartDialogComponent.ctorParameters = function () { return [
            { type: ModalService },
            { type: core$1.CartService },
            { type: forms.FormBuilder }
        ]; };
        AddedToCartDialogComponent.propDecorators = {
            dialog: [{ type: core.ViewChild, args: ['dialog', { static: false, read: core.ElementRef },] }]
        };
        return AddedToCartDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToCartComponent = /** @class */ (function () {
        function AddToCartComponent(cartService, modalService, currentProductService, cd) {
            this.cartService = cartService;
            this.modalService = modalService;
            this.currentProductService = currentProductService;
            this.cd = cd;
            this.showQuantity = true;
            this.hasStock = false;
            this.quantity = 1;
        }
        /**
         * @return {?}
         */
        AddToCartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.productCode) {
                this.cartEntry$ = this.cartService.getEntry(this.productCode);
                this.hasStock = true;
            }
            else {
                this.currentProductService
                    .getProduct()
                    .pipe(operators.filter(Boolean))
                    .subscribe((/**
                 * @param {?} product
                 * @return {?}
                 */
                function (product) {
                    _this.productCode = product.code;
                    if (product.stock &&
                        product.stock.stockLevelStatus !== 'outOfStock' &&
                        product.stock.stockLevel > 0) {
                        _this.maxQuantity = product.stock.stockLevel;
                        _this.hasStock = true;
                    }
                    else {
                        _this.hasStock = false;
                    }
                    _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                    _this.cd.markForCheck();
                }));
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AddToCartComponent.prototype.updateCount = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.quantity = value;
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
            /** @type {?} */
            var modalInstance;
            this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
                centered: true,
                size: 'lg',
            });
            modalInstance = this.modalRef.componentInstance;
            modalInstance.entry$ = this.cartEntry$;
            modalInstance.cart$ = this.cartService.getActive();
            modalInstance.loaded$ = this.cartService.getLoaded();
            modalInstance.quantity = this.quantity;
        };
        AddToCartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-add-to-cart',
                        template: "<div class=\"quantity\" *ngIf=\"showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        AddToCartComponent.ctorParameters = function () { return [
            { type: core$1.CartService },
            { type: ModalService },
            { type: CurrentProductService },
            { type: core.ChangeDetectorRef }
        ]; };
        AddToCartComponent.propDecorators = {
            productCode: [{ type: core.Input }],
            showQuantity: [{ type: core.Input }]
        };
        return AddToCartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutoFocusDirective = /** @class */ (function () {
        function AutoFocusDirective(hostElement) {
            this.hostElement = hostElement;
        }
        /**
         * @return {?}
         */
        AutoFocusDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.hostElement.nativeElement.focus();
        };
        AutoFocusDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cxAutoFocus]',
                    },] }
        ];
        /** @nocollapse */
        AutoFocusDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return AutoFocusDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutoFocusDirectiveModule = /** @class */ (function () {
        function AutoFocusDirectiveModule() {
        }
        AutoFocusDirectiveModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AutoFocusDirective],
                        exports: [AutoFocusDirective],
                    },] }
        ];
        return AutoFocusDirectiveModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.iconTypes = ICON_TYPE;
            this.deleteCard = new core.EventEmitter();
            this.setDefaultCard = new core.EventEmitter();
            this.sendCard = new core.EventEmitter();
            this.editCard = new core.EventEmitter();
            this.cancelCard = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'cx-card',
                        template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () { return []; };
        CardComponent.propDecorators = {
            deleteCard: [{ type: core.Output }],
            setDefaultCard: [{ type: core.Output }],
            sendCard: [{ type: core.Output }],
            editCard: [{ type: core.Output }],
            cancelCard: [{ type: core.Output }],
            border: [{ type: core.Input }],
            editMode: [{ type: core.Input }],
            isDefault: [{ type: core.Input }],
            content: [{ type: core.Input }],
            fitToContainer: [{ type: core.Input }]
        };
        return CardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.I18nModule, IconModule],
                        declarations: [CardComponent],
                        exports: [CardComponent],
                    },] }
        ];
        return CardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselService = /** @class */ (function () {
        function CarouselService(winRef) {
            this.winRef = winRef;
        }
        /**
         * The number of items shown in the carousel is calculated dividing
         * the host element width with the minimum item width.
         */
        /**
         * The number of items shown in the carousel is calculated dividing
         * the host element width with the minimum item width.
         * @param {?} nativeElement
         * @param {?} itemWidth
         * @return {?}
         */
        CarouselService.prototype.getSize = /**
         * The number of items shown in the carousel is calculated dividing
         * the host element width with the minimum item width.
         * @param {?} nativeElement
         * @param {?} itemWidth
         * @return {?}
         */
        function (nativeElement, itemWidth) {
            return rxjs.fromEvent(this.winRef.nativeWindow, 'resize').pipe(operators.map((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return ((/** @type {?} */ (nativeElement))).clientWidth; })), operators.startWith(((/** @type {?} */ (nativeElement))).clientWidth), operators.debounceTime(100), operators.map((/**
             * @param {?} totalWidth
             * @return {?}
             */
            function (totalWidth) {
                return Math.round(totalWidth / itemWidth);
            })), operators.distinctUntilChanged());
        };
        CarouselService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CarouselService.ctorParameters = function () { return [
            { type: core$1.WindowRef }
        ]; };
        /** @nocollapse */ CarouselService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(core.ɵɵinject(core$1.WindowRef)); }, token: CarouselService, providedIn: "root" });
        return CarouselService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselComponent = /** @class */ (function () {
        function CarouselComponent(el, service) {
            this.el = el;
            this.service = service;
            /**
             * Specifies the min pixel used per product. This value is used
             * to calculate the amount of items we can fit into the available with
             * of the host element. The number of items is not related the breakpoints,
             * which means that a carousel can be placed in different layouts,
             * regardless of the overall size.
             */
            this.minItemPixelSize = 300;
            this.hideIndicators = false;
            this.indicatorIcon = ICON_TYPE.CIRCLE;
            this.previousIcon = ICON_TYPE.CARET_LEFT;
            this.nextIcon = ICON_TYPE.CARET_RIGHT;
            this.open = new core.EventEmitter();
            /**
             * The group with items which is currently active.
             */
            this.activeSlide = 0;
        }
        Object.defineProperty(CarouselComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._items = value;
                this.select();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CarouselComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.size$ = this.service
                .getSize(this.el.nativeElement, this.minItemPixelSize)
                .pipe(operators.tap((/**
             * @return {?}
             */
            function () { return _this.select(); })));
        };
        /**
         * @param {?=} slide
         * @return {?}
         */
        CarouselComponent.prototype.select = /**
         * @param {?=} slide
         * @return {?}
         */
        function (slide) {
            if (slide === void 0) { slide = 0; }
            this.activeSlide = slide;
        };
        /**
         * @param {?} groupIndex
         * @param {?} itemIndex
         * @return {?}
         */
        CarouselComponent.prototype.onOpen = /**
         * @param {?} groupIndex
         * @param {?} itemIndex
         * @return {?}
         */
        function (groupIndex, itemIndex) {
            this.select(groupIndex);
            this.open.emit(this.items[groupIndex + itemIndex]);
        };
        CarouselComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-carousel',
                        template: "<ng-container *ngIf=\"items && items.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">\n    {{ title }}\n  </h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"select(activeSlide - size)\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"group\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of (items | slice: i:i + size); let j = index\"\n          >\n            <a\n              *ngIf=\"item && item.route; else noLink\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n              [class.activeItem]=\"j === activeItem - i\"\n              (focus)=\"onOpen(i, j)\"\n              tabindex=\"0\"\n              [routerLink]=\"item.route\"\n            >\n              <cx-media\n                [container]=\"item.media?.container\"\n                [format]=\"item.media?.format\"\n              >\n              </cx-media>\n\n              <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n              <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n            </a>\n            <ng-template #noLink>\n              <a\n                *ngIf=\"item\"\n                class=\"item\"\n                [class.active]=\"i === activeSlide\"\n                [class.activeItem]=\"j === activeItem - i\"\n                (focus)=\"onOpen(i, j)\"\n                tabindex=\"0\"\n              >\n                <cx-media\n                  [container]=\"item.media?.container\"\n                  [format]=\"item.media?.format\"\n                >\n                </cx-media>\n\n                <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n                <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n              </a>\n            </ng-template>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"select(activeSlide + size)\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (click)=\"select(i)\"\n        [disabled]=\"i === activeSlide\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        CarouselComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: CarouselService }
        ]; };
        CarouselComponent.propDecorators = {
            title: [{ type: core.Input }],
            items: [{ type: core.Input, args: ['items',] }],
            activeItem: [{ type: core.Input }],
            minItemPixelSize: [{ type: core.Input }],
            hideIndicators: [{ type: core.Input }],
            indicatorIcon: [{ type: core.Input }],
            previousIcon: [{ type: core.Input }],
            nextIcon: [{ type: core.Input }],
            open: [{ type: core.Output }]
        };
        return CarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    var   /**
     * The LayoutConfig supports the configuration of page slots by page templates
     * or page sections, such as headers and footers. The configuration also supports
     * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
     * por a given breakpoint.
     * @abstract
     */
    LayoutConfig = /** @class */ (function (_super) {
        __extends(LayoutConfig, _super);
        function LayoutConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LayoutConfig;
    }(core$1.ServerConfig));

    var _a;
    /** @type {?} */
    var DEFAULT_BREAKPOINTS = (_a = {},
        _a[BREAKPOINT.xs] = 576,
        _a[BREAKPOINT.sm] = 768,
        _a[BREAKPOINT.md] = 992,
        _a[BREAKPOINT.lg] = 1200,
        _a);
    var BreakpointService = /** @class */ (function () {
        function BreakpointService(winRef, config) {
            this.winRef = winRef;
            this.config = config;
        }
        /**
         * @param {?} breakpoint
         * @return {?}
         */
        BreakpointService.prototype.getSize = /**
         * @param {?} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            return this.config.breakpoints
                ? this.config.breakpoints[breakpoint]
                : DEFAULT_BREAKPOINTS[breakpoint];
        };
        Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (!this.window) {
                    return rxjs.of(BREAKPOINT.xs);
                }
                return rxjs.fromEvent(this.window, 'resize').pipe(operators.debounceTime(300), operators.startWith({ target: this.window }), operators.map((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth); })), operators.distinctUntilChanged());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreakpointService.prototype, "breakpoints", {
            get: /**
             * @return {?}
             */
            function () {
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
                : this.breakpoints.reverse().find((/**
                 * @param {?} br
                 * @return {?}
                 */
                function (br) { return windowWidth >= _this.getSize(br); }));
        };
        Object.defineProperty(BreakpointService.prototype, "window", {
            get: /**
             * @return {?}
             */
            function () {
                return this.winRef.nativeWindow;
            },
            enumerable: true,
            configurable: true
        });
        BreakpointService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        BreakpointService.ctorParameters = function () { return [
            { type: core$1.WindowRef },
            { type: LayoutConfig }
        ]; };
        /** @nocollapse */ BreakpointService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(core.ɵɵinject(core$1.WindowRef), core.ɵɵinject(LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
        return BreakpointService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * the default format is used for browsers that do not support
     * @type {?}
     */
    var DEFAULT_MEDIA_FORMAT = 'tablet';
    var MediaService = /** @class */ (function () {
        function MediaService(config, breakpointService) {
            this.config = config;
            this.breakpointService = breakpointService;
        }
        Object.defineProperty(MediaService.prototype, "mediaFormats", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return [
                    {
                        code: 'mobile',
                        threshold: this.breakpointService.getSize(BREAKPOINT.xs),
                    },
                    {
                        code: 'tablet',
                        threshold: this.breakpointService.getSize(BREAKPOINT.sm),
                    },
                    {
                        code: 'desktop',
                        threshold: this.breakpointService.getSize(BREAKPOINT.md),
                    },
                    {
                        code: 'widescreen',
                        threshold: this.breakpointService.getSize(BREAKPOINT.lg),
                    },
                ];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} container
         * @param {?=} format
         * @param {?=} alt
         * @return {?}
         */
        MediaService.prototype.getMedia = /**
         * @param {?} container
         * @param {?=} format
         * @param {?=} alt
         * @return {?}
         */
        function (container, format, alt) {
            return {
                src: this.getMainImage(container, format),
                srcset: this.getSrcSet(container),
                alt: alt || this.getAlt(container, format),
            };
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
            if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
                return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
            }
            else if (media && media.url) {
                return this.getImageUrl(media.url);
            }
            else {
                return null;
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
            var srcset = this.mediaFormats.reduce((/**
             * @param {?} set
             * @param {?} format
             * @return {?}
             */
            function (set, format) {
                if (!!media[format.code]) {
                    if (set) {
                        set += ', ';
                    }
                    set += _this.getImageUrl(media[format.code].url) + " " + format.threshold + "w";
                }
                return set;
            }), '');
            return srcset === '' ? undefined : srcset;
        };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        MediaService.prototype.getImageUrl = /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            if (!url) {
                return null;
            }
            return url.startsWith('http') ? url : this.getBaseUrl() + url;
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MediaService.ctorParameters = function () { return [
            { type: core$1.OccConfig },
            { type: BreakpointService }
        ]; };
        /** @nocollapse */ MediaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(core.ɵɵinject(core$1.OccConfig), core.ɵɵinject(BreakpointService)); }, token: MediaService, providedIn: "root" });
        return MediaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MediaComponent = /** @class */ (function () {
        function MediaComponent(mediaService) {
            this.mediaService = mediaService;
            /**
             * Once the media is loaded, we emit an event.
             */
            this.loaded = new core.EventEmitter();
            /**
             * The `cx-media` component has an `is-initialized` class as long as the
             * media is being initialized.
             */
            this.isInitialized = false;
            /**
             * The `cx-media` component has a `is-loading` class as long as the
             * media is loaded. Wehn the media is loaded, the `is-initialized` class
             * is added.
             */
            this.isLoading = true;
            /**
             * When there's no media provided for the content, or in case an error
             * happened during loading, we add the `is-missing` class. Visual effects
             * can be controlled by CSS.
             */
            this.isMissing = false;
        }
        /**
         * @return {?}
         */
        MediaComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.create();
        };
        /**
         * Creates the `Media` object
         */
        /**
         * Creates the `Media` object
         * @private
         * @return {?}
         */
        MediaComponent.prototype.create = /**
         * Creates the `Media` object
         * @private
         * @return {?}
         */
        function () {
            this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
            if (!this.media.src) {
                this.handleMissing();
            }
        };
        /**
         * This handler is called from the UI when the image is loaded.
         */
        /**
         * This handler is called from the UI when the image is loaded.
         * @return {?}
         */
        MediaComponent.prototype.loadHandler = /**
         * This handler is called from the UI when the image is loaded.
         * @return {?}
         */
        function () {
            this.isLoading = false;
            this.isInitialized = true;
            this.isMissing = false;
            this.loaded.emit(true);
        };
        /**
         * Whenever an error happens during load, we mark the component
         * with css classes to have a missing media.
         */
        /**
         * Whenever an error happens during load, we mark the component
         * with css classes to have a missing media.
         * @return {?}
         */
        MediaComponent.prototype.errorHandler = /**
         * Whenever an error happens during load, we mark the component
         * with css classes to have a missing media.
         * @return {?}
         */
        function () {
            this.handleMissing();
        };
        /**
         * @private
         * @return {?}
         */
        MediaComponent.prototype.handleMissing = /**
         * @private
         * @return {?}
         */
        function () {
            this.isLoading = false;
            this.isInitialized = true;
            this.isMissing = true;
            this.loaded.emit(false);
        };
        MediaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-media',
                        template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MediaComponent.ctorParameters = function () { return [
            { type: MediaService }
        ]; };
        MediaComponent.propDecorators = {
            container: [{ type: core.Input }],
            format: [{ type: core.Input }],
            alt: [{ type: core.Input }],
            loaded: [{ type: core.Output }],
            isInitialized: [{ type: core.HostBinding, args: ['class.is-initialized',] }],
            isLoading: [{ type: core.HostBinding, args: ['class.is-loading',] }],
            isMissing: [{ type: core.HostBinding, args: ['class.is-missing',] }]
        };
        return MediaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MediaModule = /** @class */ (function () {
        function MediaModule() {
        }
        MediaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [MediaComponent],
                        exports: [MediaComponent],
                    },] }
        ];
        return MediaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselModule = /** @class */ (function () {
        function CarouselModule() {
        }
        CarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, IconModule, MediaModule, core$1.UrlModule],
                        declarations: [CarouselComponent],
                        exports: [CarouselComponent],
                    },] }
        ];
        return CarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COUNTER_CONTROL_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return ItemCounterComponent; })),
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
            this.update = new core.EventEmitter();
            this.isValueOutOfRange = false;
            this.inputValue = new forms.FormControl({
                disabled: this.isValueChangeable,
            });
            this.onTouch = (/**
             * @return {?}
             */
            function () { });
            this.onModelChange = (/**
             * @param {?} _rating
             * @return {?}
             */
            function (_rating) { });
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
            this.inputValue.valueChanges.pipe(operators.debounceTime(300)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    _this.manualChange(Number(value));
                }
            }));
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
         * Update model value and refresh input
         */
        /**
         * Update model value and refresh input
         * @param {?} newValue
         * @return {?}
         */
        ItemCounterComponent.prototype.manualChange = /**
         * Update model value and refresh input
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
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
                ArrowDown: (/**
                 * @return {?}
                 */
                function () { return _this.decrement(); }),
                ArrowUp: (/**
                 * @return {?}
                 */
                function () { return _this.increment(); }),
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
            this.setFocus(true);
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
            this.setFocus(false);
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
        /**
         * Determines which HTML element should have focus at a given time
         */
        /**
         * Determines which HTML element should have focus at a given time
         * @param {?} isIncremented
         * @return {?}
         */
        ItemCounterComponent.prototype.setFocus = /**
         * Determines which HTML element should have focus at a given time
         * @param {?} isIncremented
         * @return {?}
         */
        function (isIncremented) {
            if (this.isMaxOrMinValueOrBeyond()) {
                this.input.nativeElement.focus();
            }
            else if (isIncremented) {
                this.incrementBtn.nativeElement.focus();
            }
            else {
                this.decrementBtn.nativeElement.focus();
            }
        };
        /**
         * @return {?}
         */
        ItemCounterComponent.prototype.isMaxOrMinValueOrBeyond = /**
         * @return {?}
         */
        function () {
            return this.value >= this.max || this.value <= this.min;
        };
        ItemCounterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-item-counter',
                        template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n    >\n      -\n    </button>\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                        providers: [COUNTER_CONTROL_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        ItemCounterComponent.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        ItemCounterComponent.propDecorators = {
            input: [{ type: core.ViewChild, args: ['itemCounterInput', { static: false },] }],
            incrementBtn: [{ type: core.ViewChild, args: ['incrementBtn', { static: false },] }],
            decrementBtn: [{ type: core.ViewChild, args: ['decrementBtn', { static: false },] }],
            step: [{ type: core.Input }],
            min: [{ type: core.Input }],
            max: [{ type: core.Input }],
            async: [{ type: core.Input }],
            cartIsLoading: [{ type: core.Input }],
            isValueChangeable: [{ type: core.Input }],
            update: [{ type: core.Output }]
        };
        return ItemCounterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Directive, args: [{
                        selector: '[cxOnlyNumber]',
                    },] }
        ];
        /** @nocollapse */
        OnlyNumberDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        OnlyNumberDirective.propDecorators = {
            onChange: [{ type: core.HostListener, args: ['change',] }],
            onInput: [{ type: core.HostListener, args: ['input',] }],
            onPaste: [{ type: core.HostListener, args: ['paste', ['$event'],] }],
            onKeyUp: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
            onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return OnlyNumberDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnlyNumberDirectiveModule = /** @class */ (function () {
        function OnlyNumberDirectiveModule() {
        }
        OnlyNumberDirectiveModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [OnlyNumberDirective],
                        exports: [OnlyNumberDirective],
                    },] }
        ];
        return OnlyNumberDirectiveModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ItemCounterModule = /** @class */ (function () {
        function ItemCounterModule() {
        }
        ItemCounterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            OnlyNumberDirectiveModule,
                        ],
                        declarations: [ItemCounterComponent],
                        exports: [ItemCounterComponent],
                    },] }
        ];
        return ItemCounterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
     */
    var GenericLinkComponent = /** @class */ (function () {
        function GenericLinkComponent() {
            this.protocolRegex = /^https?:\/\//i;
        }
        Object.defineProperty(GenericLinkComponent.prototype, "rel", {
            get: /**
             * @return {?}
             */
            function () {
                return this.target === '_blank' ? 'noopener' : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
            get: /**
             * @return {?}
             */
            function () {
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
            { type: core.Component, args: [{
                        selector: 'cx-generic-link',
                        template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
                    }] }
        ];
        GenericLinkComponent.propDecorators = {
            url: [{ type: core.Input }],
            target: [{ type: core.Input }],
            class: [{ type: core.Input }],
            id: [{ type: core.Input }],
            style: [{ type: core.Input }],
            title: [{ type: core.Input }]
        };
        return GenericLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GenericLinkModule = /** @class */ (function () {
        function GenericLinkModule() {
        }
        GenericLinkModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule],
                        declarations: [GenericLinkComponent],
                        exports: [GenericLinkComponent],
                    },] }
        ];
        return GenericLinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PAGE_FIRST = 1;
    /** @type {?} */
    var PAGE_WINDOW_SIZE = 3;
    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent() {
            this.viewPageEvent = new core.EventEmitter();
        }
        // Because pagination model uses indexes starting from 0,
        // add 1 to get current page number
        // Because pagination model uses indexes starting from 0,
        // add 1 to get current page number
        /**
         * @private
         * @return {?}
         */
        PaginationComponent.prototype.getCurrentPageNumber = 
        // Because pagination model uses indexes starting from 0,
        // add 1 to get current page number
        /**
         * @private
         * @return {?}
         */
        function () {
            return this.pagination.currentPage + 1;
        };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.getPagePrevious = /**
         * @return {?}
         */
        function () {
            return this.getCurrentPageNumber() - 1;
        };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.getPageNext = /**
         * @return {?}
         */
        function () {
            return this.getCurrentPageNumber() + 1;
        };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.getPageIndicies = /**
         * @return {?}
         */
        function () {
            return Array(this.pagination.totalPages);
        };
        // Gets the minimum index of page numbers that can be shown by being within the page window range
        // Gets the minimum index of page numbers that can be shown by being within the page window range
        /**
         * @return {?}
         */
        PaginationComponent.prototype.getPageWindowMinIndex = 
        // Gets the minimum index of page numbers that can be shown by being within the page window range
        /**
         * @return {?}
         */
        function () {
            return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
                PAGE_WINDOW_SIZE);
        };
        // Gets the maximum index of page numbers that can be shown by being within the page window range
        // Gets the maximum index of page numbers that can be shown by being within the page window range
        /**
         * @return {?}
         */
        PaginationComponent.prototype.getPageWindowMaxIndex = 
        // Gets the maximum index of page numbers that can be shown by being within the page window range
        /**
         * @return {?}
         */
        function () {
            return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
                PAGE_WINDOW_SIZE +
                2);
        };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.hasPages = /**
         * @return {?}
         */
        function () {
            return this.pagination.totalPages > 0;
        };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.onFirstPage = /**
         * @return {?}
         */
        function () {
            return this.pagination.currentPage === 0;
        };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.onLastPage = /**
         * @return {?}
         */
        function () {
            return this.pagination.currentPage === this.pagination.totalPages - 1;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        PaginationComponent.prototype.onPageIndex = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            return this.pagination.currentPage === index;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        PaginationComponent.prototype.hidePageIndex = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            return ((this.getPageWindowMinIndex() > index ||
                this.getPageWindowMaxIndex() < index) &&
                (index > 0 && index < this.pagination.totalPages - 1));
        };
        /**
         * @param {?} index
         * @return {?}
         */
        PaginationComponent.prototype.showDots = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            return (this.hidePageIndex(index) &&
                (index === this.getPageWindowMaxIndex() + 1 ||
                    index === this.getPageWindowMinIndex() - 1));
        };
        /**
         * @param {?} page
         * @return {?}
         */
        PaginationComponent.prototype.clickPageNo = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            // Change page on valid index
            if (page >= PAGE_FIRST &&
                page <= this.pagination.totalPages &&
                page !== this.getCurrentPageNumber()) {
                this.pageChange(page);
                return page;
            }
            // Page stays the same on invalid index
            return this.pagination.currentPage;
        };
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
            { type: core.Component, args: [{
                        selector: 'cx-pagination',
                        template: "<ul class=\"pagination\">\n  <!-- Previous -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onFirstPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPagePrevious())\">\u00AB</a>\n  </li>\n\n  <!-- Page Index -->\n  <li\n    class=\"page-item\"\n    *ngFor=\"let page of getPageIndicies(); let i = index\"\n    [ngClass]=\"{ active: onPageIndex(i), disabled: showDots(i) }\"\n  >\n    <a class=\"page-link\" *ngIf=\"showDots(i)\">...</a>\n    <a\n      class=\"page-link\"\n      *ngIf=\"!hidePageIndex(i)\"\n      (click)=\"clickPageNo(i + 1)\"\n      >{{ i + 1 }}</a\n    >\n  </li>\n\n  <!-- Next -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onLastPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPageNext())\">\u00BB</a>\n  </li>\n</ul>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        PaginationComponent.propDecorators = {
            pagination: [{ type: core.Input }],
            viewPageEvent: [{ type: core.Output }]
        };
        return PaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SortingComponent = /** @class */ (function () {
        function SortingComponent() {
            this.sortListEvent = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'cx-sorting',
                        template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SortingComponent.ctorParameters = function () { return []; };
        SortingComponent.propDecorators = {
            sortOptions: [{ type: core.Input }],
            selectedOption: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            sortLabels: [{ type: core.Input }],
            sortListEvent: [{ type: core.Output }]
        };
        return SortingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListNavigationModule = /** @class */ (function () {
        function ListNavigationModule() {
        }
        ListNavigationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngSelect.NgSelectModule, forms.FormsModule],
                        declarations: [PaginationComponent, SortingComponent],
                        exports: [PaginationComponent, SortingComponent],
                    },] }
        ];
        return ListNavigationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: Improve a11y with better text appropriate to usage (example: loading cart spinner)
    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
        }
        SpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-spinner',
                        template: "<div class=\"loader-container\">\n  <div class=\"loader\">{{ 'spinner.loading' | cxTranslate }}</div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        SpinnerComponent.ctorParameters = function () { return []; };
        return SpinnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        SpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.I18nModule],
                        declarations: [SpinnerComponent],
                        exports: [SpinnerComponent],
                    },] }
        ];
        return SpinnerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageComponent = /** @class */ (function () {
        function GlobalMessageComponent(globalMessageService) {
            this.globalMessageService = globalMessageService;
            this.iconTypes = ICON_TYPE;
            this.messageType = core$1.GlobalMessageType;
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
            { type: core.Component, args: [{
                        selector: 'cx-global-message',
                        template: "<div *ngIf=\"(messages$ | async) as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        GlobalMessageComponent.ctorParameters = function () { return [
            { type: core$1.GlobalMessageService }
        ]; };
        return GlobalMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalMessageComponentModule = /** @class */ (function () {
        function GlobalMessageComponentModule() {
        }
        GlobalMessageComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            IconModule,
                            core$1.I18nModule,
                            core$1.GlobalMessageModule.forRoot(),
                        ],
                        declarations: [GlobalMessageComponent],
                        exports: [GlobalMessageComponent],
                    },] }
        ];
        return GlobalMessageComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageCurrencyComponent = /** @class */ (function () {
        function LanguageCurrencyComponent() {
        }
        LanguageCurrencyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-language-currency-selector',
                        template: "\n    <cx-site-context-selector context=\"LANGUAGE\"></cx-site-context-selector>\n    <cx-site-context-selector context=\"CURRENCY\"></cx-site-context-selector>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        return LanguageCurrencyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var   /**
     * @abstract
     * @template T
     */
    CmsComponentData = /** @class */ (function () {
        function CmsComponentData() {
        }
        return CmsComponentData;
    }());

    var _a$1;
    /** @type {?} */
    var LABELS = (_a$1 = {},
        _a$1[core$1.LANGUAGE_CONTEXT_ID] = 'Language',
        _a$1[core$1.CURRENCY_CONTEXT_ID] = 'Currency',
        _a$1);
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
            return this.getService(context).pipe(operators.switchMap((/**
             * @param {?} service
             * @return {?}
             */
            function (service) { return service.getAll(); })), operators.switchMap((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                return _this.getContext(context).pipe(operators.switchMap((/**
                 * @param {?} ctx
                 * @return {?}
                 */
                function (ctx) {
                    var e_1, _a;
                    /** @type {?} */
                    var itemsCopy = [];
                    try {
                        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                            var item = items_1_1.value;
                            itemsCopy.push(__assign({}, item, { label: _this.getOptionLabel(item, ctx) }));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return rxjs.of(itemsCopy);
                })));
            })));
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
            return this.getService(context).pipe(operators.switchMap((/**
             * @param {?} service
             * @return {?}
             */
            function (service) { return service.getActive(); })));
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
            return this.getContext(context).pipe(operators.map((/**
             * @param {?} ctx
             * @return {?}
             */
            function (ctx) {
                return LABELS[ctx];
            })));
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
                .subscribe((/**
             * @param {?} service
             * @return {?}
             */
            function (service) {
                service.setActive(value);
            }));
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
            return this.getContext(context).pipe(operators.map((/**
             * @param {?} ctx
             * @return {?}
             */
            function (ctx) { return _this.getInjectedService(ctx); })), operators.filter(Boolean));
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
                return this.componentData.data$.pipe(operators.map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return data.context; })));
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
                case core$1.LANGUAGE_CONTEXT_ID:
                    return item.nativeName;
                case core$1.CURRENCY_CONTEXT_ID:
                    return item.symbol + ' ' + item.isocode;
                default:
                    return item.isocode;
            }
        };
        SiteContextComponentService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SiteContextComponentService.ctorParameters = function () { return [
            { type: CmsComponentData, decorators: [{ type: core.Optional }] },
            { type: core$1.ContextServiceMap },
            { type: core.Injector }
        ]; };
        return SiteContextComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SiteContextType = {
        LANGUAGE: 'LANGUAGE',
        CURRENCY: 'CURRENCY',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextSelectorComponent = /** @class */ (function () {
        function SiteContextSelectorComponent(componentService) {
            this.componentService = componentService;
            this.iconTypes = ICON_TYPE;
        }
        Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.componentService.getItems(this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.componentService.getActiveItem(this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SiteContextSelectorComponent.prototype, "active", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.componentService.setActive(value, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.componentService.getLabel(this.context);
            },
            enumerable: true,
            configurable: true
        });
        SiteContextSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-site-context-selector',
                        template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SiteContextSelectorComponent.ctorParameters = function () { return [
            { type: SiteContextComponentService }
        ]; };
        SiteContextSelectorComponent.propDecorators = {
            context: [{ type: core.Input }]
        };
        return SiteContextSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SiteContextSelectorModule = /** @class */ (function () {
        function SiteContextSelectorModule() {
        }
        SiteContextSelectorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CMSSiteContextComponent: {
                                        component: SiteContextSelectorComponent,
                                        providers: [
                                            {
                                                provide: SiteContextComponentService,
                                                useClass: SiteContextComponentService,
                                                deps: [CmsComponentData, core$1.ContextServiceMap, core.Injector],
                                            },
                                        ],
                                    },
                                    LanguageCurrencyComponent: {
                                        component: LanguageCurrencyComponent,
                                    },
                                },
                            }))),
                            core$1.SiteContextModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.change = new core.EventEmitter();
            this.initialRate = 0;
            this.iconTypes = ICON_TYPE;
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
            { type: core.Component, args: [{
                        selector: 'cx-star-rating',
                        template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        StarRatingComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        StarRatingComponent.propDecorators = {
            disabled: [{ type: core.Input }, { type: core.HostBinding, args: ['attr.disabled',] }],
            rating: [{ type: core.Input }],
            change: [{ type: core.Output }]
        };
        return StarRatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StarRatingModule = /** @class */ (function () {
        function StarRatingModule() {
        }
        StarRatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, IconModule],
                        declarations: [StarRatingComponent],
                        exports: [StarRatingComponent],
                    },] }
        ];
        return StarRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Utility class when working with forms.
     */
    var   /**
     * Utility class when working with forms.
     */
    FormUtils = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PromotionsComponent = /** @class */ (function () {
        function PromotionsComponent() {
        }
        PromotionsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-promotions',
                        template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <strong *ngFor=\"let promotion of promotions\">\n    {{ promotion.description }}\n  </strong>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PromotionsComponent.ctorParameters = function () { return []; };
        PromotionsComponent.propDecorators = {
            promotions: [{ type: core.Input }]
        };
        return PromotionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PromotionsModule = /** @class */ (function () {
        function PromotionsModule() {
        }
        PromotionsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PromotionsComponent],
                        exports: [PromotionsComponent],
                    },] }
        ];
        return PromotionsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var code = item.product.code;
                if (!_this.form.controls[code]) {
                    _this.form.setControl(code, _this.createEntryFormGroup(item));
                }
                else {
                    /** @type {?} */
                    var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                    entryForm.controls.quantity.setValue(item.quantity);
                }
            }));
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
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
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
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return false;
            }
            else {
                return consumendEntryNumber === entry.entryNumber;
            }
        };
        CartItemListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-cart-item-list',
                        template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CartItemListComponent.ctorParameters = function () { return [
            { type: core$1.CartService },
            { type: forms.FormBuilder }
        ]; };
        CartItemListComponent.propDecorators = {
            isReadOnly: [{ type: core.Input }],
            hasHeader: [{ type: core.Input }],
            items: [{ type: core.Input }],
            potentialProductPromotions: [{ type: core.Input }],
            cartIsLoading: [{ type: core.Input }]
        };
        return CartItemListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartItemComponent = /** @class */ (function () {
        function CartItemComponent() {
            this.compact = false;
            this.isReadOnly = false;
            this.cartIsLoading = false;
            this.remove = new core.EventEmitter();
            this.update = new core.EventEmitter();
            this.view = new core.EventEmitter();
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
        /**
         * @return {?}
         */
        CartItemComponent.prototype.viewItem = /**
         * @return {?}
         */
        function () {
            this.view.emit();
        };
        CartItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-cart-item',
                        template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        CartItemComponent.propDecorators = {
            compact: [{ type: core.Input }],
            item: [{ type: core.Input }],
            potentialProductPromotions: [{ type: core.Input }],
            isReadOnly: [{ type: core.Input }],
            cartIsLoading: [{ type: core.Input }],
            remove: [{ type: core.Output }],
            update: [{ type: core.Output }],
            view: [{ type: core.Output }],
            parent: [{ type: core.Input }]
        };
        return CartItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderSummaryComponent = /** @class */ (function () {
        function OrderSummaryComponent() {
        }
        OrderSummaryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-summary',
                        template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-savings\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.discount' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalDiscounts?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n</div>\n\n<cx-promotions [promotions]=\"cart.appliedOrderPromotions\"></cx-promotions>\n"
                    }] }
        ];
        OrderSummaryComponent.propDecorators = {
            cart: [{ type: core.Input }]
        };
        return OrderSummaryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartSharedModule = /** @class */ (function () {
        function CartSharedModule() {
        }
        CartSharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            forms.ReactiveFormsModule,
                            core$1.UrlModule,
                            ngBootstrap.NgbModule,
                            PromotionsModule,
                            core$1.I18nModule,
                            MediaModule,
                            ItemCounterModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToCartModule = /** @class */ (function () {
        function AddToCartModule() {
        }
        AddToCartModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            CartSharedModule,
                            common.CommonModule,
                            router.RouterModule,
                            SpinnerModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductAddToCartComponent: {
                                        component: AddToCartComponent,
                                    },
                                },
                            }))),
                            core$1.UrlModule,
                            IconModule,
                            core$1.I18nModule,
                            ItemCounterModule,
                            AutoFocusDirectiveModule,
                        ],
                        declarations: [AddToCartComponent, AddedToCartDialogComponent],
                        entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                        exports: [AddToCartComponent, AddedToCartDialogComponent],
                    },] }
        ];
        return AddToCartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                .pipe(operators.filter((/**
             * @param {?} entries
             * @return {?}
             */
            function (entries) { return entries.length > 0; })));
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
            { type: core.Component, args: [{
                        selector: 'cx-cart-details',
                        template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CartDetailsComponent.ctorParameters = function () { return [
            { type: core$1.CartService }
        ]; };
        return CartDetailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartDetailsModule = /** @class */ (function () {
        function CartDetailsModule() {
        }
        CartDetailsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            CartSharedModule,
                            common.CommonModule,
                            router.RouterModule,
                            core$1.UrlModule,
                            PromotionsModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CartComponent: {
                                        component: CartDetailsComponent,
                                    },
                                },
                            }))),
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return this.cartService.getLoaded().pipe(operators.skipWhile((/**
             * @param {?} loaded
             * @return {?}
             */
            function (loaded) { return !loaded; })), operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.cartService.getActive(); })), operators.map((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) {
                if (_this.cartService.isEmpty(cart)) {
                    _this.routingService.go({ cxRoute: 'home' });
                    return false;
                }
                return true;
            })));
        };
        CartNotEmptyGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CartNotEmptyGuard.ctorParameters = function () { return [
            { type: core$1.CartService },
            { type: core$1.RoutingService }
        ]; };
        /** @nocollapse */ CartNotEmptyGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(core.ɵɵinject(core$1.CartService), core.ɵɵinject(core$1.RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
        return CartNotEmptyGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartPageLayoutHandler = /** @class */ (function () {
        function CartPageLayoutHandler(cartService) {
            this.cartService = cartService;
        }
        /**
         * @param {?} slots$
         * @param {?=} pageTemplate
         * @param {?=} section
         * @return {?}
         */
        CartPageLayoutHandler.prototype.handle = /**
         * @param {?} slots$
         * @param {?=} pageTemplate
         * @param {?=} section
         * @return {?}
         */
        function (slots$, pageTemplate, section) {
            if (pageTemplate === 'CartPageTemplate' && !section) {
                return rxjs.combineLatest(slots$, this.cartService.getActive()).pipe(operators.map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 2), slots = _b[0], cart = _b[1];
                    if (cart.totalItems) {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        function (slot) { return slot !== 'EmptyCartMiddleContent'; }));
                    }
                    else {
                        return slots.filter((/**
                         * @param {?} slot
                         * @return {?}
                         */
                        function (slot) { return slot !== 'TopContent' && slot !== 'CenterRightContentSlot'; }));
                    }
                })));
            }
            return slots$;
        };
        CartPageLayoutHandler.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CartPageLayoutHandler.ctorParameters = function () { return [
            { type: core$1.CartService }
        ]; };
        return CartPageLayoutHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                .pipe(operators.filter((/**
             * @param {?} entries
             * @return {?}
             */
            function (entries) { return entries.length > 0; })));
        };
        CartTotalsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-cart-totals',
                        template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n    <button\n      [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n      *ngIf=\"entries.length\"\n      class=\"btn btn-primary btn-block\"\n      type=\"button\"\n    >\n      {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CartTotalsComponent.ctorParameters = function () { return [
            { type: core$1.CartService }
        ]; };
        return CartTotalsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartTotalsModule = /** @class */ (function () {
        function CartTotalsModule() {
        }
        CartTotalsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            core$1.UrlModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CartTotalsComponent: {
                                        component: CartTotalsComponent,
                                    },
                                },
                            }))),
                            CartSharedModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MiniCartComponent = /** @class */ (function () {
        function MiniCartComponent(cartService) {
            this.cartService = cartService;
            this.iconTypes = ICON_TYPE;
            this.quantity$ = this.cartService
                .getActive()
                .pipe(operators.map((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) { return cart.deliveryItemsQuantity || 0; })));
            this.total$ = this.cartService.getActive().pipe(operators.filter((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) { return !!cart.totalPrice; })), operators.map((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) { return cart.totalPrice.formattedValue; })));
        }
        MiniCartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-mini-cart',
                        template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MiniCartComponent.ctorParameters = function () { return [
            { type: core$1.CartService }
        ]; };
        return MiniCartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MiniCartModule = /** @class */ (function () {
        function MiniCartModule() {
        }
        MiniCartModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            core$1.CartModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    MiniCartComponent: {
                                        component: MiniCartComponent,
                                    },
                                },
                            }))),
                            core$1.UrlModule,
                            IconModule,
                            core$1.I18nModule,
                        ],
                        declarations: [MiniCartComponent],
                        entryComponents: [MiniCartComponent],
                    },] }
        ];
        return MiniCartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PAGE_LAYOUT_HANDLER = new core.InjectionToken('PageLayoutHandler');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CartComponentModule = /** @class */ (function () {
        function CartComponentModule() {
        }
        CartComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            core$1.CartModule,
                            ngBootstrap.NgbModule,
                            CartDetailsModule,
                            CartTotalsModule,
                            CartSharedModule,
                        ],
                        exports: [
                            CartDetailsModule,
                            CartTotalsModule,
                            CartSharedModule,
                            AddToCartModule,
                            MiniCartModule,
                        ],
                        providers: [
                            {
                                provide: PAGE_LAYOUT_HANDLER,
                                useClass: CartPageLayoutHandler,
                                multi: true,
                            },
                        ],
                    },] }
        ];
        return CartComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    CheckoutConfig = /** @class */ (function () {
        function CheckoutConfig() {
        }
        return CheckoutConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutConfigService = /** @class */ (function () {
        function CheckoutConfigService(checkoutConfig, routingConfigService) {
            this.checkoutConfig = checkoutConfig;
            this.routingConfigService = routingConfigService;
            this.steps = this.checkoutConfig.checkout.steps;
        }
        /**
         * @param {?} currentStepType
         * @return {?}
         */
        CheckoutConfigService.prototype.getCheckoutStep = /**
         * @param {?} currentStepType
         * @return {?}
         */
        function (currentStepType) {
            return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
        };
        /**
         * @param {?} activatedRoute
         * @return {?}
         */
        CheckoutConfigService.prototype.getNextCheckoutStepUrl = /**
         * @param {?} activatedRoute
         * @return {?}
         */
        function (activatedRoute) {
            /** @type {?} */
            var stepIndex = this.getCurrentStepIndex(activatedRoute);
            return stepIndex >= 0 && this.steps[stepIndex + 1]
                ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
                : null;
        };
        /**
         * @param {?} activatedRoute
         * @return {?}
         */
        CheckoutConfigService.prototype.getPreviousCheckoutStepUrl = /**
         * @param {?} activatedRoute
         * @return {?}
         */
        function (activatedRoute) {
            /** @type {?} */
            var stepIndex = this.getCurrentStepIndex(activatedRoute);
            return stepIndex >= 0 && this.steps[stepIndex - 1]
                ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
                : null;
        };
        /**
         * @param {?} activatedRoute
         * @return {?}
         */
        CheckoutConfigService.prototype.getCurrentStepIndex = /**
         * @param {?} activatedRoute
         * @return {?}
         */
        function (activatedRoute) {
            var e_1, _a;
            /** @type {?} */
            var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
            /** @type {?} */
            var stepIndex;
            /** @type {?} */
            var index = 0;
            try {
                for (var _b = __values(this.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var step = _c.value;
                    if (currentStepUrl === "/" + this.getStepUrlFromStepRoute(step.routeName)) {
                        stepIndex = index;
                    }
                    else {
                        index++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return stepIndex >= 0 ? stepIndex : null;
        };
        /**
         * @private
         * @param {?} activatedRoute
         * @return {?}
         */
        CheckoutConfigService.prototype.getStepUrlFromActivatedRoute = /**
         * @private
         * @param {?} activatedRoute
         * @return {?}
         */
        function (activatedRoute) {
            return activatedRoute &&
                activatedRoute.snapshot &&
                activatedRoute.snapshot.url
                ? "/" + activatedRoute.snapshot.url.join('/')
                : null;
        };
        /**
         * @private
         * @param {?} stepRoute
         * @return {?}
         */
        CheckoutConfigService.prototype.getStepUrlFromStepRoute = /**
         * @private
         * @param {?} stepRoute
         * @return {?}
         */
        function (stepRoute) {
            return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
        };
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        CheckoutConfigService.prototype.getCheckoutStepIndex = /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            return key && value
                ? this.steps.findIndex((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step[key].includes(value); }))
                : null;
        };
        CheckoutConfigService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CheckoutConfigService.ctorParameters = function () { return [
            { type: CheckoutConfig },
            { type: core$1.RoutingConfigService }
        ]; };
        return CheckoutConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var CheckoutStepType = {
        SHIPPING_ADDRESS: 'shippingAddress',
        DELIVERY_MODE: 'deliveryMode',
        PAYMENT_DETAILS: 'paymentDetails',
        REVIEW_ORDER: 'reviewOrder',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultCheckoutConfig = {
        checkout: {
            steps: [
                {
                    id: 'shippingAddress',
                    name: 'checkoutProgress.shippingAddress',
                    routeName: 'checkoutShippingAddress',
                    type: [CheckoutStepType.SHIPPING_ADDRESS],
                },
                {
                    id: 'deliveryMode',
                    name: 'checkoutProgress.deliveryMode',
                    routeName: 'checkoutDeliveryMode',
                    type: [CheckoutStepType.DELIVERY_MODE],
                },
                {
                    id: 'paymentDetails',
                    name: 'checkoutProgress.paymentDetails',
                    routeName: 'checkoutPaymentDetails',
                    type: [CheckoutStepType.PAYMENT_DETAILS],
                },
                {
                    id: 'reviewOrder',
                    name: 'checkoutProgress.reviewOrder',
                    routeName: 'checkoutReviewOrder',
                    type: [CheckoutStepType.REVIEW_ORDER],
                },
            ],
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutGuard = /** @class */ (function () {
        function CheckoutGuard(router, config, routingConfigService) {
            this.router = router;
            this.config = config;
            this.routingConfigService = routingConfigService;
        }
        /**
         * @return {?}
         */
        CheckoutGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            return rxjs.of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
        };
        CheckoutGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CheckoutGuard.ctorParameters = function () { return [
            { type: router.Router },
            { type: CheckoutConfig },
            { type: core$1.RoutingConfigService }
        ]; };
        /** @nocollapse */ CheckoutGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(core.ɵɵinject(router.Router), core.ɵɵinject(CheckoutConfig), core.ɵɵinject(core$1.RoutingConfigService)); }, token: CheckoutGuard, providedIn: "root" });
        return CheckoutGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutOrchestratorComponent = /** @class */ (function () {
        function CheckoutOrchestratorComponent() {
        }
        CheckoutOrchestratorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-checkout-orchestrator',
                        template: "",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CheckoutOrchestratorComponent.ctorParameters = function () { return []; };
        return CheckoutOrchestratorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutOrchestratorModule = /** @class */ (function () {
        function CheckoutOrchestratorModule() {
        }
        CheckoutOrchestratorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig(defaultCheckoutConfig),
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutOrchestrator: {
                                        component: CheckoutOrchestratorComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard, CheckoutGuard],
                                    },
                                },
                            }))),
                        ],
                        providers: [{ provide: CheckoutConfig, useExisting: core$1.Config }],
                        declarations: [CheckoutOrchestratorComponent],
                        entryComponents: [CheckoutOrchestratorComponent],
                        exports: [CheckoutOrchestratorComponent],
                    },] }
        ];
        return CheckoutOrchestratorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutOrderSummaryComponent = /** @class */ (function () {
        function CheckoutOrderSummaryComponent(cartService) {
            this.cartService = cartService;
            this.cart$ = this.cartService.getActive();
        }
        CheckoutOrderSummaryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-checkout-order-summary',
                        template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CheckoutOrderSummaryComponent.ctorParameters = function () { return [
            { type: core$1.CartService }
        ]; };
        return CheckoutOrderSummaryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutOrderSummaryModule = /** @class */ (function () {
        function CheckoutOrderSummaryModule() {
        }
        CheckoutOrderSummaryModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CartSharedModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutOrderSummary: {
                                        component: CheckoutOrderSummaryComponent,
                                    },
                                },
                            }))),
                        ],
                        declarations: [CheckoutOrderSummaryComponent],
                        entryComponents: [CheckoutOrderSummaryComponent],
                        exports: [CheckoutOrderSummaryComponent],
                    },] }
        ];
        return CheckoutOrderSummaryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutProgressMobileBottomComponent = /** @class */ (function () {
        function CheckoutProgressMobileBottomComponent(config, routingService, routingConfigService) {
            this.config = config;
            this.routingService = routingService;
            this.routingConfigService = routingConfigService;
        }
        /**
         * @return {?}
         */
        CheckoutProgressMobileBottomComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.steps = this.config.checkout.steps;
            this.routerState$ = this.routingService.getRouterState().pipe(operators.tap((/**
             * @param {?} router
             * @return {?}
             */
            function (router) {
                _this.activeStepUrl = router.state.context.id;
                _this.steps.forEach((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) {
                    /** @type {?} */
                    var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                    if (routeUrl === _this.activeStepUrl) {
                        _this.activeStepIndex = index;
                    }
                }));
            })));
        };
        CheckoutProgressMobileBottomComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-checkout-progress-mobile-bottom',
                        template: "<div *ngIf=\"(routerState$ | async) as routerState\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CheckoutProgressMobileBottomComponent.ctorParameters = function () { return [
            { type: CheckoutConfig },
            { type: core$1.RoutingService },
            { type: core$1.RoutingConfigService }
        ]; };
        return CheckoutProgressMobileBottomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutProgressMobileBottomModule = /** @class */ (function () {
        function CheckoutProgressMobileBottomModule() {
        }
        CheckoutProgressMobileBottomModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                            router.RouterModule,
                            core$1.ConfigModule.withConfig(defaultCheckoutConfig),
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutProgressMobileBottom: {
                                        component: CheckoutProgressMobileBottomComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard],
                                    },
                                },
                            }))),
                        ],
                        declarations: [CheckoutProgressMobileBottomComponent],
                        entryComponents: [CheckoutProgressMobileBottomComponent],
                        exports: [CheckoutProgressMobileBottomComponent],
                    },] }
        ];
        return CheckoutProgressMobileBottomModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutProgressMobileTopComponent = /** @class */ (function () {
        function CheckoutProgressMobileTopComponent(config, routingService, cartService, routingConfigService) {
            this.config = config;
            this.routingService = routingService;
            this.cartService = cartService;
            this.routingConfigService = routingConfigService;
        }
        /**
         * @return {?}
         */
        CheckoutProgressMobileTopComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.steps = this.config.checkout.steps;
            this.cart$ = this.cartService.getActive();
            this.routerState$ = this.routingService.getRouterState().pipe(operators.tap((/**
             * @param {?} router
             * @return {?}
             */
            function (router) {
                _this.activeStepUrl = router.state.context.id;
                _this.steps.forEach((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) {
                    /** @type {?} */
                    var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                    if (routeUrl === _this.activeStepUrl) {
                        _this.activeStepIndex = index;
                    }
                }));
            })));
        };
        CheckoutProgressMobileTopComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-checkout-progress-mobile-top',
                        template: "<div *ngIf=\"(routerState$ | async) as routerState\">\n  <div *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CheckoutProgressMobileTopComponent.ctorParameters = function () { return [
            { type: CheckoutConfig },
            { type: core$1.RoutingService },
            { type: core$1.CartService },
            { type: core$1.RoutingConfigService }
        ]; };
        return CheckoutProgressMobileTopComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutProgressMobileTopModule = /** @class */ (function () {
        function CheckoutProgressMobileTopModule() {
        }
        CheckoutProgressMobileTopModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                            router.RouterModule,
                            core$1.ConfigModule.withConfig(defaultCheckoutConfig),
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutProgressMobileTop: {
                                        component: CheckoutProgressMobileTopComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard],
                                    },
                                },
                            }))),
                        ],
                        declarations: [CheckoutProgressMobileTopComponent],
                        entryComponents: [CheckoutProgressMobileTopComponent],
                        exports: [CheckoutProgressMobileTopComponent],
                    },] }
        ];
        return CheckoutProgressMobileTopModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutProgressComponent = /** @class */ (function () {
        function CheckoutProgressComponent(config, routingService, routingConfigService) {
            this.config = config;
            this.routingService = routingService;
            this.routingConfigService = routingConfigService;
        }
        /**
         * @return {?}
         */
        CheckoutProgressComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.steps = this.config.checkout.steps;
            this.routerState$ = this.routingService.getRouterState().pipe(operators.tap((/**
             * @param {?} router
             * @return {?}
             */
            function (router) {
                _this.activeStepUrl = router.state.context.id;
                _this.steps.forEach((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) {
                    /** @type {?} */
                    var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                    if (routeUrl === _this.activeStepUrl) {
                        _this.activeStepIndex = index;
                    }
                }));
            })));
        };
        CheckoutProgressComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-checkout-progress',
                        template: "<section *ngIf=\"(routerState$ | async) as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [ngClass]=\"{\n            ' is-active': i === activeStepIndex,\n            ' is-disabled': i > activeStepIndex\n          }\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CheckoutProgressComponent.ctorParameters = function () { return [
            { type: CheckoutConfig },
            { type: core$1.RoutingService },
            { type: core$1.RoutingConfigService }
        ]; };
        return CheckoutProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutProgressModule = /** @class */ (function () {
        function CheckoutProgressModule() {
        }
        CheckoutProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                            router.RouterModule,
                            core$1.ConfigModule.withConfig(defaultCheckoutConfig),
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutProgress: {
                                        component: CheckoutProgressComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard],
                                    },
                                },
                            }))),
                        ],
                        declarations: [CheckoutProgressComponent],
                        entryComponents: [CheckoutProgressComponent],
                        exports: [CheckoutProgressComponent],
                        providers: [{ provide: CheckoutConfig, useExisting: core$1.Config }],
                    },] }
        ];
        return CheckoutProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutDetailsService = /** @class */ (function () {
        function CheckoutDetailsService(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
            var _this = this;
            this.checkoutService = checkoutService;
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.checkoutPaymentService = checkoutPaymentService;
            this.cartService = cartService;
            this.cartId$ = this.cartService.getActive().pipe(operators.map((/**
             * @param {?} cartData
             * @return {?}
             */
            function (cartData) { return cartData.code; })), operators.filter((/**
             * @param {?} cartId
             * @return {?}
             */
            function (cartId) { return !!cartId; })));
            this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(operators.tap((/**
             * @param {?} cartId
             * @return {?}
             */
            function (cartId) { return _this.checkoutService.loadCheckoutDetails(cartId); })), operators.shareReplay(1), operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.checkoutService.getCheckoutDetailsLoaded(); })), operators.skipWhile((/**
             * @param {?} loaded
             * @return {?}
             */
            function (loaded) { return !loaded; })));
        }
        /**
         * @return {?}
         */
        CheckoutDetailsService.prototype.getDeliveryAddress = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.getCheckoutDetailsLoaded$.pipe(operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.checkoutDeliveryService.getDeliveryAddress(); })));
        };
        /**
         * @return {?}
         */
        CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.getCheckoutDetailsLoaded$.pipe(operators.switchMap((/**
             * @return {?}
             */
            function () {
                return _this.checkoutDeliveryService.getSelectedDeliveryModeCode();
            })));
        };
        /**
         * @return {?}
         */
        CheckoutDetailsService.prototype.getPaymentDetails = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.getCheckoutDetailsLoaded$.pipe(operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.checkoutPaymentService.getPaymentDetails(); })));
        };
        CheckoutDetailsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CheckoutDetailsService.ctorParameters = function () { return [
            { type: core$1.CheckoutService },
            { type: core$1.CheckoutDeliveryService },
            { type: core$1.CheckoutPaymentService },
            { type: core$1.CartService }
        ]; };
        /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(core.ɵɵinject(core$1.CheckoutService), core.ɵɵinject(core$1.CheckoutDeliveryService), core.ɵɵinject(core$1.CheckoutPaymentService), core.ɵɵinject(core$1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
        return CheckoutDetailsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShippingAddressSetGuard = /** @class */ (function () {
        function ShippingAddressSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router, serverConfig) {
            this.checkoutDetailsService = checkoutDetailsService;
            this.checkoutConfigService = checkoutConfigService;
            this.routingConfigService = routingConfigService;
            this.router = router;
            this.serverConfig = serverConfig;
        }
        /**
         * @return {?}
         */
        ShippingAddressSetGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
            if (!checkoutStep && !this.serverConfig.production) {
                console.warn("Missing step with type " + CheckoutStepType.SHIPPING_ADDRESS + " in checkout configuration.");
            }
            return this.checkoutDetailsService
                .getDeliveryAddress()
                .pipe(operators.map((/**
             * @param {?} deliveryAddress
             * @return {?}
             */
            function (deliveryAddress) {
                return deliveryAddress && Object.keys(deliveryAddress).length
                    ? true
                    : _this.router.parseUrl(checkoutStep &&
                        _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
            })));
        };
        ShippingAddressSetGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ShippingAddressSetGuard.ctorParameters = function () { return [
            { type: CheckoutDetailsService },
            { type: CheckoutConfigService },
            { type: core$1.RoutingConfigService },
            { type: router.Router },
            { type: core$1.ServerConfig }
        ]; };
        /** @nocollapse */ ShippingAddressSetGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(core.ɵɵinject(CheckoutDetailsService), core.ɵɵinject(CheckoutConfigService), core.ɵɵinject(core$1.RoutingConfigService), core.ɵɵinject(router.Router), core.ɵɵinject(core$1.ServerConfig)); }, token: ShippingAddressSetGuard, providedIn: "root" });
        return ShippingAddressSetGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeliveryModeComponent = /** @class */ (function () {
        function DeliveryModeComponent(fb, checkoutDeliveryService, routingService, checkoutConfigService, activatedRoute) {
            this.fb = fb;
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.routingService = routingService;
            this.checkoutConfigService = checkoutConfigService;
            this.activatedRoute = activatedRoute;
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
            this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
            this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
            this.changedOption = false;
            this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
            this.selectedDeliveryMode$ = this.checkoutDeliveryService.getSelectedDeliveryMode();
            this.checkoutDeliveryService.loadSupportedDeliveryModes();
            this.selectedDeliveryMode$
                .pipe(operators.map((/**
             * @param {?} deliveryMode
             * @return {?}
             */
            function (deliveryMode) {
                return deliveryMode && deliveryMode.code ? deliveryMode.code : null;
            })))
                .subscribe((/**
             * @param {?} code
             * @return {?}
             */
            function (code) {
                if (code) {
                    _this.mode.controls['deliveryModeId'].setValue(code);
                    _this.currentDeliveryModeId = code;
                }
            }));
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
                this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
            }
            this.deliveryModeSub = this.checkoutDeliveryService
                .getSelectedDeliveryMode()
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data && data.code === _this.currentDeliveryModeId) {
                    _this.routingService.go(_this.checkoutStepUrlNext);
                }
            }));
        };
        /**
         * @return {?}
         */
        DeliveryModeComponent.prototype.back = /**
         * @return {?}
         */
        function () {
            this.routingService.go(this.checkoutStepUrlPrevious);
        };
        Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
            get: /**
             * @return {?}
             */
            function () {
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
            { type: core.Component, args: [{
                        selector: 'cx-delivery-mode',
                        template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of (supportedDeliveryModes$ | async)\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        DeliveryModeComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: core$1.CheckoutDeliveryService },
            { type: core$1.RoutingService },
            { type: CheckoutConfigService },
            { type: router.ActivatedRoute }
        ]; };
        return DeliveryModeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeliveryModeModule = /** @class */ (function () {
        function DeliveryModeModule() {
        }
        DeliveryModeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            core$1.I18nModule,
                            SpinnerModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutDeliveryMode: {
                                        component: DeliveryModeComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard, ShippingAddressSetGuard],
                                    },
                                },
                            }))),
                        ],
                        declarations: [DeliveryModeComponent],
                        entryComponents: [DeliveryModeComponent],
                        exports: [DeliveryModeComponent],
                    },] }
        ];
        return DeliveryModeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeliveryModeSetGuard = /** @class */ (function () {
        function DeliveryModeSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router, serverConfig) {
            this.checkoutDetailsService = checkoutDetailsService;
            this.checkoutConfigService = checkoutConfigService;
            this.routingConfigService = routingConfigService;
            this.router = router;
            this.serverConfig = serverConfig;
        }
        /**
         * @return {?}
         */
        DeliveryModeSetGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
            if (!checkoutStep && !this.serverConfig.production) {
                console.warn("Missing step with type " + CheckoutStepType.DELIVERY_MODE + " in checkout configuration.");
            }
            return this.checkoutDetailsService
                .getSelectedDeliveryModeCode()
                .pipe(operators.map((/**
             * @param {?} mode
             * @return {?}
             */
            function (mode) {
                return mode && mode.length
                    ? true
                    : _this.router.parseUrl(checkoutStep &&
                        _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
            })));
        };
        DeliveryModeSetGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        DeliveryModeSetGuard.ctorParameters = function () { return [
            { type: CheckoutDetailsService },
            { type: CheckoutConfigService },
            { type: core$1.RoutingConfigService },
            { type: router.Router },
            { type: core$1.ServerConfig }
        ]; };
        /** @nocollapse */ DeliveryModeSetGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(core.ɵɵinject(CheckoutDetailsService), core.ɵɵinject(CheckoutConfigService), core.ɵɵinject(core$1.RoutingConfigService), core.ɵɵinject(router.Router), core.ɵɵinject(core$1.ServerConfig)); }, token: DeliveryModeSetGuard, providedIn: "root" });
        return DeliveryModeSetGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'cx-billing-address-form',
                        template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"(countries$ | async) as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        BillingAddressFormComponent.propDecorators = {
            billingAddress: [{ type: core.Input }],
            countries$: [{ type: core.Input }]
        };
        return BillingAddressFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BillingAddressFormModule = /** @class */ (function () {
        function BillingAddressFormModule() {
        }
        BillingAddressFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            router.RouterModule,
                            ngSelect.NgSelectModule,
                            core$1.I18nModule,
                        ],
                        declarations: [BillingAddressFormComponent],
                        exports: [BillingAddressFormComponent],
                    },] }
        ];
        return BillingAddressFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuggestedAddressDialogComponent = /** @class */ (function () {
        function SuggestedAddressDialogComponent(modalService) {
            this.modalService = modalService;
            this.iconTypes = ICON_TYPE;
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
        /**
         * @param {?=} reason
         * @return {?}
         */
        SuggestedAddressDialogComponent.prototype.closeModal = /**
         * @param {?=} reason
         * @return {?}
         */
        function (reason) {
            this.modalService.closeActiveModal(reason);
        };
        SuggestedAddressDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-suggested-addresses-dialog',
                        template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SuggestedAddressDialogComponent.ctorParameters = function () { return [
            { type: ModalService }
        ]; };
        SuggestedAddressDialogComponent.propDecorators = {
            suggestedAddresses: [{ type: core.Input }],
            enteredAddress: [{ type: core.Input }]
        };
        return SuggestedAddressDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentFormComponent = /** @class */ (function () {
        function PaymentFormComponent(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService) {
            this.checkoutPaymentService = checkoutPaymentService;
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.userPaymentService = userPaymentService;
            this.globalMessageService = globalMessageService;
            this.fb = fb;
            this.modalService = modalService;
            this.iconTypes = ICON_TYPE;
            this.months = [];
            this.years = [];
            this.sameAsShippingAddress = true;
            this.goBack = new core.EventEmitter();
            this.closeForm = new core.EventEmitter();
            this.addPaymentInfo = new core.EventEmitter();
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
            this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(operators.tap((/**
             * @param {?} countries
             * @return {?}
             */
            function (countries) {
                // If the store is empty fetch countries. This is also used when changing language.
                if (Object.keys(countries).length === 0) {
                    _this.userPaymentService.loadBillingCountries();
                }
            })));
            this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(operators.tap((/**
             * @param {?} cardTypes
             * @return {?}
             */
            function (cardTypes) {
                if (Object.keys(cardTypes).length === 0) {
                    _this.checkoutPaymentService.loadSupportedCardTypes();
                }
            })));
            this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
            this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((/**
             * @param {?} shouldShowCheckbox
             * @return {?}
             */
            function (shouldShowCheckbox) {
                // this operation makes sure the checkbox is not checked if not shown and vice versa
                _this.sameAsShippingAddress = shouldShowCheckbox;
            }));
            // verify the new added address
            this.addressVerifySub = this.checkoutDeliveryService
                .getAddressVerificationResults()
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                if (results === 'FAIL') {
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                }
                else if (results.decision === 'ACCEPT') {
                    _this.next();
                }
                else if (results.decision === 'REJECT') {
                    _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, core$1.GlobalMessageType.MSG_TYPE_ERROR);
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                }
                else if (results.decision === 'REVIEW') {
                    _this.openSuggestedAddress(results);
                }
            }));
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
            return rxjs.combineLatest([this.countries$, this.shippingAddress$]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), countries = _b[0], address = _b[1];
                return !!countries.filter((/**
                 * @param {?} country
                 * @return {?}
                 */
                function (country) {
                    return country.isocode === address.country.isocode;
                })).length;
            })));
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
                    .then((/**
                 * @return {?}
                 */
                function () {
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                    _this.suggestedAddressModalRef = null;
                }))
                    .catch((/**
                 * @return {?}
                 */
                function () {
                    // this  callback is called when modal is closed with Esc key or clicking backdrop
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                    _this.suggestedAddressModalRef = null;
                }));
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
                this.checkoutDeliveryService.verifyAddress(this.billingAddress.value);
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
            { type: core.Component, args: [{
                        selector: 'cx-payment-form',
                        template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PaymentFormComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutPaymentService },
            { type: core$1.CheckoutDeliveryService },
            { type: core$1.UserPaymentService },
            { type: core$1.GlobalMessageService },
            { type: forms.FormBuilder },
            { type: ModalService }
        ]; };
        PaymentFormComponent.propDecorators = {
            paymentMethodsCount: [{ type: core.Input }],
            goBack: [{ type: core.Output }],
            closeForm: [{ type: core.Output }],
            addPaymentInfo: [{ type: core.Output }]
        };
        return PaymentFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentFormModule = /** @class */ (function () {
        function PaymentFormModule() {
        }
        PaymentFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            ngSelect.NgSelectModule,
                            CardModule,
                            BillingAddressFormModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodComponent = /** @class */ (function () {
        function PaymentMethodComponent(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation) {
            this.userPaymentService = userPaymentService;
            this.checkoutService = checkoutService;
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.checkoutPaymentService = checkoutPaymentService;
            this.globalMessageService = globalMessageService;
            this.routingService = routingService;
            this.checkoutConfigService = checkoutConfigService;
            this.activatedRoute = activatedRoute;
            this.translation = translation;
            this.iconTypes = ICON_TYPE;
            this.newPaymentFormManuallyOpened = false;
        }
        /**
         * @return {?}
         */
        PaymentMethodComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
            this.userPaymentService.loadPaymentMethods();
            this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
            this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
            this.getDeliveryAddressSub = this.checkoutDeliveryService
                .getDeliveryAddress()
                .subscribe((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                _this.deliveryAddress = address;
            }));
            this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
            this.getPaymentDetailsSub = this.checkoutPaymentService
                .getPaymentDetails()
                .pipe(operators.filter((/**
             * @param {?} paymentInfo
             * @return {?}
             */
            function (paymentInfo) { return paymentInfo && Object.keys(paymentInfo).length !== 0; })))
                .subscribe((/**
             * @param {?} paymentInfo
             * @return {?}
             */
            function (paymentInfo) {
                if (!paymentInfo['hasError']) {
                    _this.selectedPayment = paymentInfo;
                }
                else {
                    Object.keys(paymentInfo).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        if (key.startsWith('InvalidField')) {
                            _this.globalMessageService.add({
                                key: 'paymentMethods.invalidField',
                                params: { field: paymentInfo[key] },
                            }, core$1.GlobalMessageType.MSG_TYPE_ERROR);
                        }
                    }));
                    _this.checkoutService.clearCheckoutStep(3);
                }
            }));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
                /** @type {?} */
                var card = {
                    title: payment.defaultPayment ? textDefaultPaymentMethod : '',
                    textBold: payment.accountHolderName,
                    text: [payment.cardNumber, textExpires],
                    img: _this.getCardIcon(payment.cardType.code),
                    actions: [{ name: textUseThisPayment, event: 'send' }],
                };
                if (_this.selectedPayment && _this.selectedPayment.id === payment.id) {
                    card.header = textSelected;
                }
                return card;
            })));
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
            this.routingService.go(this.checkoutStepUrlPrevious);
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
                this.checkoutPaymentService.createPaymentDetails(payment);
                this.checkoutService.clearCheckoutStep(3);
            }
            // if the selected payment is the same as the cart's one
            if (this.selectedPayment && this.selectedPayment.id === payment.id) {
                this.checkoutPaymentService.setPaymentDetails(payment);
                this.checkoutService.clearCheckoutStep(3);
            }
            this.getPaymentDetailsSub = this.checkoutPaymentService
                .getPaymentDetails()
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.accountHolderName && data.cardNumber) {
                    _this.routingService.go(_this.checkoutStepUrlNext);
                    return;
                }
            }));
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
        /**
         * @protected
         * @param {?} code
         * @return {?}
         */
        PaymentMethodComponent.prototype.getCardIcon = /**
         * @protected
         * @param {?} code
         * @return {?}
         */
        function (code) {
            /** @type {?} */
            var ccIcon;
            if (code === 'visa') {
                ccIcon = this.iconTypes.VISA;
            }
            else if (code === 'master' || code === 'mastercard_eurocard') {
                ccIcon = this.iconTypes.MASTER_CARD;
            }
            else if (code === 'diners') {
                ccIcon = this.iconTypes.DINERS_CLUB;
            }
            else if (code === 'amex') {
                ccIcon = this.iconTypes.AMEX;
            }
            else {
                ccIcon = this.iconTypes.CREDIT_CARD;
            }
            return ccIcon;
        };
        PaymentMethodComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-payment-method',
                        template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PaymentMethodComponent.ctorParameters = function () { return [
            { type: core$1.UserPaymentService },
            { type: core$1.CheckoutService },
            { type: core$1.CheckoutDeliveryService },
            { type: core$1.CheckoutPaymentService },
            { type: core$1.GlobalMessageService },
            { type: core$1.RoutingService },
            { type: CheckoutConfigService },
            { type: router.ActivatedRoute },
            { type: core$1.TranslationService }
        ]; };
        return PaymentMethodComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodModule = /** @class */ (function () {
        function PaymentMethodModule() {
        }
        PaymentMethodModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            PaymentFormModule,
                            CardModule,
                            SpinnerModule,
                            core$1.I18nModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutPaymentDetails: {
                                        component: PaymentMethodComponent,
                                        guards: [
                                            core$1.AuthGuard,
                                            CartNotEmptyGuard,
                                            ShippingAddressSetGuard,
                                            DeliveryModeSetGuard,
                                        ],
                                    },
                                },
                            }))),
                        ],
                        providers: [core$1.UserService],
                        declarations: [PaymentMethodComponent],
                        entryComponents: [PaymentMethodComponent],
                        exports: [PaymentMethodComponent],
                    },] }
        ];
        return PaymentMethodModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                .pipe(operators.filter((/**
             * @param {?} order
             * @return {?}
             */
            function (order) { return Object.keys(order).length !== 0; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.routingService.go({ cxRoute: 'orderConfirmation' });
            }));
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
            { type: core.Component, args: [{
                        selector: 'cx-place-order',
                        template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PlaceOrderComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutService },
            { type: core$1.RoutingService }
        ]; };
        return PlaceOrderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlaceOrderModule = /** @class */ (function () {
        function PlaceOrderModule() {
        }
        PlaceOrderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.CheckoutModule,
                            router.RouterModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutPlaceOrder: {
                                        component: PlaceOrderComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard],
                                    },
                                },
                            }))),
                        ],
                        declarations: [PlaceOrderComponent],
                        entryComponents: [PlaceOrderComponent],
                        exports: [PlaceOrderComponent],
                    },] }
        ];
        return PlaceOrderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentDetailsSetGuard = /** @class */ (function () {
        function PaymentDetailsSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router, serverConfig) {
            this.checkoutDetailsService = checkoutDetailsService;
            this.checkoutConfigService = checkoutConfigService;
            this.routingConfigService = routingConfigService;
            this.router = router;
            this.serverConfig = serverConfig;
        }
        /**
         * @return {?}
         */
        PaymentDetailsSetGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
            if (!checkoutStep && !this.serverConfig.production) {
                console.warn("Missing step with type " + CheckoutStepType.PAYMENT_DETAILS + " in checkout configuration.");
            }
            return this.checkoutDetailsService
                .getPaymentDetails()
                .pipe(operators.map((/**
             * @param {?} paymentDetails
             * @return {?}
             */
            function (paymentDetails) {
                return paymentDetails && Object.keys(paymentDetails).length !== 0
                    ? true
                    : _this.router.parseUrl(checkoutStep &&
                        _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
            })));
        };
        PaymentDetailsSetGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        PaymentDetailsSetGuard.ctorParameters = function () { return [
            { type: CheckoutDetailsService },
            { type: CheckoutConfigService },
            { type: core$1.RoutingConfigService },
            { type: router.Router },
            { type: core$1.ServerConfig }
        ]; };
        /** @nocollapse */ PaymentDetailsSetGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(core.ɵɵinject(CheckoutDetailsService), core.ɵɵinject(CheckoutConfigService), core.ɵɵinject(core$1.RoutingConfigService), core.ɵɵinject(router.Router), core.ɵɵinject(core$1.ServerConfig)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
        return PaymentDetailsSetGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReviewSubmitComponent = /** @class */ (function () {
        function ReviewSubmitComponent(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation) {
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.checkoutPaymentService = checkoutPaymentService;
            this.userAddressService = userAddressService;
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
            this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
            this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
            this.deliveryMode$ = this.checkoutDeliveryService
                .getSelectedDeliveryMode()
                .pipe(operators.tap((/**
             * @param {?} selected
             * @return {?}
             */
            function (selected) {
                if (selected === null) {
                    _this.checkoutDeliveryService.loadSupportedDeliveryModes();
                }
            })));
            this.countryName$ = this.deliveryAddress$.pipe(operators.switchMap((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                return _this.userAddressService.getCountry(address.country.isocode);
            })), operators.tap((/**
             * @param {?} country
             * @return {?}
             */
            function (country) {
                if (country === null) {
                    _this.userAddressService.loadDeliveryCountries();
                }
            })), operators.map((/**
             * @param {?} country
             * @return {?}
             */
            function (country) { return country && country.name; })));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
            })));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 1), textTitle = _b[0];
                return {
                    title: textTitle,
                    textBold: deliveryMode.name,
                    text: [deliveryMode.description],
                };
            })));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
                return {
                    title: textTitle,
                    textBold: paymentDetails.accountHolderName,
                    text: [paymentDetails.cardNumber, textExpires],
                };
            })));
        };
        ReviewSubmitComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-review-submit',
                        template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"\n            getShippingAddressCard(\n              deliveryAddress$ | async,\n              countryName$ | async\n            ) | async\n          \"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          *ngIf=\"(deliveryMode$ | async) as deliveryMode\"\n          [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card\n          [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ReviewSubmitComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutDeliveryService },
            { type: core$1.CheckoutPaymentService },
            { type: core$1.UserAddressService },
            { type: core$1.CartService },
            { type: core$1.TranslationService }
        ]; };
        return ReviewSubmitComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReviewSubmitModule = /** @class */ (function () {
        function ReviewSubmitModule() {
        }
        ReviewSubmitModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CardModule,
                            CartSharedModule,
                            core$1.I18nModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutReviewOrder: {
                                        component: ReviewSubmitComponent,
                                        guards: [
                                            core$1.AuthGuard,
                                            CartNotEmptyGuard,
                                            ShippingAddressSetGuard,
                                            DeliveryModeSetGuard,
                                            PaymentDetailsSetGuard,
                                        ],
                                    },
                                },
                            }))),
                        ],
                        declarations: [ReviewSubmitComponent],
                        entryComponents: [ReviewSubmitComponent],
                        exports: [ReviewSubmitComponent],
                    },] }
        ];
        return ReviewSubmitModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressFormComponent = /** @class */ (function () {
        function AddressFormComponent(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
            this.fb = fb;
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.userService = userService;
            this.userAddressService = userAddressService;
            this.globalMessageService = globalMessageService;
            this.modalService = modalService;
            this.selectedCountry$ = new rxjs.BehaviorSubject('');
            this.showCancelBtn = true;
            this.submitAddress = new core.EventEmitter();
            this.backToAddress = new core.EventEmitter();
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
            this.countries$ = this.userAddressService.getDeliveryCountries().pipe(operators.tap((/**
             * @param {?} countries
             * @return {?}
             */
            function (countries) {
                if (Object.keys(countries).length === 0) {
                    _this.userAddressService.loadDeliveryCountries();
                }
            })));
            // Fetching titles
            this.titles$ = this.userService.getTitles().pipe(operators.tap((/**
             * @param {?} titles
             * @return {?}
             */
            function (titles) {
                if (Object.keys(titles).length === 0) {
                    _this.userService.loadTitles();
                }
            })), operators.map((/**
             * @param {?} titles
             * @return {?}
             */
            function (titles) {
                /** @type {?} */
                var noneTitle = { code: '', name: 'Title' };
                return __spread([noneTitle], titles);
            })));
            // Fetching regions
            this.regions$ = this.selectedCountry$.pipe(operators.switchMap((/**
             * @param {?} country
             * @return {?}
             */
            function (country) { return _this.userAddressService.getRegions(country); })), operators.tap((/**
             * @param {?} regions
             * @return {?}
             */
            function (regions) {
                /** @type {?} */
                var regionControl = _this.address.get('region.isocode');
                if (regions.length > 0) {
                    regionControl.enable();
                }
                else {
                    regionControl.disable();
                }
            })));
            // verify the new added address
            this.addressVerifySub = this.checkoutDeliveryService
                .getAddressVerificationResults()
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                if (results === 'FAIL') {
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                }
                else if (results.decision === 'ACCEPT') {
                    _this.submitAddress.emit(_this.address.value);
                }
                else if (results.decision === 'REJECT') {
                    // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                    if (results.errors.errors.some((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return error.subject === 'titleCode'; }))) {
                        _this.globalMessageService.add({ key: 'addressForm.titleRequired' }, core$1.GlobalMessageType.MSG_TYPE_ERROR);
                    }
                    else {
                        _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, core$1.GlobalMessageType.MSG_TYPE_ERROR);
                    }
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                }
                else if (results.decision === 'REVIEW') {
                    _this.openSuggestedAddress(results);
                }
            }));
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
            this.selectedCountry$.next(country.isocode);
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
            this.checkoutDeliveryService.verifyAddress(this.address.value);
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
                    .then((/**
                 * @param {?} address
                 * @return {?}
                 */
                function (address) {
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                    if (address) {
                        address = Object.assign({
                            titleCode: _this.address.value.titleCode,
                            phone: _this.address.value.phone,
                            selected: true,
                        }, address);
                        _this.submitAddress.emit(address);
                    }
                    _this.suggestedAddressModalRef = null;
                }))
                    .catch((/**
                 * @return {?}
                 */
                function () {
                    // this  callback is called when modal is closed with Esc key or clicking backdrop
                    _this.checkoutDeliveryService.clearAddressVerificationResults();
                    /** @type {?} */
                    var address = Object.assign({
                        selected: true,
                    }, _this.address.value);
                    _this.submitAddress.emit(address);
                    _this.suggestedAddressModalRef = null;
                }));
            }
        };
        /**
         * @return {?}
         */
        AddressFormComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.checkoutDeliveryService.clearAddressVerificationResults();
            if (this.addressVerifySub) {
                this.addressVerifySub.unsubscribe();
            }
        };
        AddressFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-address-form',
                        template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        AddressFormComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: core$1.CheckoutDeliveryService },
            { type: core$1.UserService },
            { type: core$1.UserAddressService },
            { type: core$1.GlobalMessageService },
            { type: ModalService }
        ]; };
        AddressFormComponent.propDecorators = {
            addressData: [{ type: core.Input }],
            actionBtnLabel: [{ type: core.Input }],
            cancelBtnLabel: [{ type: core.Input }],
            setAsDefaultField: [{ type: core.Input }],
            showTitleCode: [{ type: core.Input }],
            showCancelBtn: [{ type: core.Input }],
            submitAddress: [{ type: core.Output }],
            backToAddress: [{ type: core.Output }]
        };
        return AddressFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressFormModule = /** @class */ (function () {
        function AddressFormModule() {
        }
        AddressFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            router.RouterModule,
                            ngSelect.NgSelectModule,
                            IconModule,
                            core$1.I18nModule,
                            AutoFocusDirectiveModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShippingAddressComponent = /** @class */ (function () {
        function ShippingAddressComponent(userAddressService, cartService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation) {
            this.userAddressService = userAddressService;
            this.cartService = cartService;
            this.routingService = routingService;
            this.checkoutDeliveryService = checkoutDeliveryService;
            this.checkoutConfigService = checkoutConfigService;
            this.activatedRoute = activatedRoute;
            this.translation = translation;
            this.newAddressFormManuallyOpened = false;
            this.cards = [];
            this.selectedAddress$ = new rxjs.BehaviorSubject(null);
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
            this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
            this.checkoutStepUrlPrevious = 'cart';
            this.isLoading$ = this.userAddressService.getAddressesLoading();
            this.existingAddresses$ = this.userAddressService.getAddresses();
            this.cards$ = rxjs.combineLatest(this.existingAddresses$, this.selectedAddress$.asObservable(), this.translation.translate('checkoutAddress.defaultShippingAddress'), this.translation.translate('checkoutAddress.shipToThisAddress'), this.translation.translate('addressCard.selected')).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
                return addresses.map((/**
                 * @param {?} address
                 * @return {?}
                 */
                function (address) {
                    /** @type {?} */
                    var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                    return {
                        address: address,
                        card: card,
                    };
                }));
            })));
            this.cartService.loadDetails();
            this.userAddressService.loadAddresses();
            this.setAddressSub = this.checkoutDeliveryService
                .getDeliveryAddress()
                .subscribe((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                _this.setAddress = address;
                _this.selectedAddress$.next(address);
                if (_this.goTo) {
                    _this.goNext();
                    _this.goTo = null;
                }
            }));
            this.selectedAddressSub = this.selectedAddress$.subscribe((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                _this.selectedAddress = address;
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
                this.checkoutDeliveryService.createAndSetAddress(address);
                this.goTo = CheckoutStepType.DELIVERY_MODE;
                return;
            }
            if (this.setAddress &&
                this.selectedAddress &&
                this.setAddress.id === this.selectedAddress.id) {
                this.goNext();
            }
            else {
                this.goTo = CheckoutStepType.DELIVERY_MODE;
                this.checkoutDeliveryService.setDeliveryAddress(address);
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
            if (goBack === void 0) { goBack = false; }
            this.newAddressFormManuallyOpened = false;
            if (goBack) {
                this.back();
            }
        };
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.goNext = /**
         * @return {?}
         */
        function () {
            this.routingService.go(this.checkoutStepUrlNext);
        };
        /**
         * @return {?}
         */
        ShippingAddressComponent.prototype.back = /**
         * @return {?}
         */
        function () {
            this.routingService.go(this.checkoutStepUrlPrevious);
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
            { type: core.Component, args: [{
                        selector: 'cx-shipping-address',
                        template: "<ng-container *ngIf=\"(cards$ | async) as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress || !selectedAddress.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          showTitleCode=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          showTitleCode=\"true\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ShippingAddressComponent.ctorParameters = function () { return [
            { type: core$1.UserAddressService },
            { type: core$1.CartService },
            { type: core$1.RoutingService },
            { type: core$1.CheckoutDeliveryService },
            { type: CheckoutConfigService },
            { type: router.ActivatedRoute },
            { type: core$1.TranslationService }
        ]; };
        return ShippingAddressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShippingAddressModule = /** @class */ (function () {
        function ShippingAddressModule() {
        }
        ShippingAddressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            AddressFormModule,
                            CardModule,
                            SpinnerModule,
                            core$1.I18nModule,
                            CheckoutProgressMobileTopModule,
                            CheckoutProgressMobileBottomModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CheckoutShippingAddress: {
                                        component: ShippingAddressComponent,
                                        guards: [core$1.AuthGuard, CartNotEmptyGuard],
                                    },
                                },
                            }))),
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckoutComponentModule = /** @class */ (function () {
        function CheckoutComponentModule() {
        }
        CheckoutComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CartComponentModule,
                            core$1.CheckoutModule,
                            CheckoutOrchestratorModule,
                            CheckoutOrderSummaryModule,
                            CheckoutProgressModule,
                            CheckoutProgressMobileTopModule,
                            CheckoutProgressMobileBottomModule,
                            DeliveryModeModule,
                            PaymentMethodModule,
                            PlaceOrderModule,
                            PromotionsModule,
                            ReviewSubmitModule,
                            ShippingAddressModule,
                        ],
                        // @todo: should we keep below provider here?
                        providers: [CheckoutConfigService],
                    },] }
        ];
        return CheckoutComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HamburgerMenuService = /** @class */ (function () {
        function HamburgerMenuService(router$1) {
            var _this = this;
            this.isExpanded = new rxjs.BehaviorSubject(false);
            router$1.events
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationStart; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.toggle(true);
            }));
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        HamburgerMenuService.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        /** @nocollapse */ HamburgerMenuService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(core.ɵɵinject(router.Router)); }, token: HamburgerMenuService, providedIn: "root" });
        return HamburgerMenuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
             */
            function () {
                return this.hamburgerMenuService.isExpanded;
            },
            enumerable: true,
            configurable: true
        });
        HamburgerMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-hamburger-menu',
                        template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        HamburgerMenuComponent.ctorParameters = function () { return [
            { type: HamburgerMenuService }
        ]; };
        return HamburgerMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HamburgerMenuModule = /** @class */ (function () {
        function HamburgerMenuModule() {
        }
        HamburgerMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    HamburgerMenuComponent: {
                                        component: HamburgerMenuComponent,
                                    },
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var OutletPosition = {
        REPLACE: 'replace',
        BEFORE: 'before',
        AFTER: 'after',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (position === void 0) { position = OutletPosition.REPLACE; }
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
            if (position === void 0) { position = OutletPosition.REPLACE; }
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ OutletService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
        return OutletService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Directive, args: [{
                        selector: '[cxOutletRef]',
                    },] }
        ];
        /** @nocollapse */
        OutletRefDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: OutletService }
        ]; };
        OutletRefDirective.propDecorators = {
            cxOutletRef: [{ type: core.Input }],
            cxOutletPos: [{ type: core.Input }]
        };
        return OutletRefDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletRefModule = /** @class */ (function () {
        function OutletRefModule() {
        }
        OutletRefModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [OutletRefDirective],
                        exports: [OutletRefDirective],
                    },] }
        ];
        return OutletRefModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletDirective = /** @class */ (function () {
        function OutletDirective(vcr, templateRef, outletService) {
            this.vcr = vcr;
            this.templateRef = templateRef;
            this.outletService = outletService;
        }
        Object.defineProperty(OutletDirective.prototype, "cxOutletContext", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
            if (replace === void 0) { replace = false; }
            /** @type {?} */
            var nodes = [];
            /** @type {?} */
            var template = this.outletService.get(this.cxOutlet, position);
            if (template || replace) {
                /** @type {?} */
                var ref = this.vcr.createEmbeddedView(template || this.templateRef, {
                    $implicit: this._context,
                });
                nodes.push.apply(nodes, __spread(ref.rootNodes));
            }
            return nodes;
        };
        OutletDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cxOutlet]',
                    },] }
        ];
        /** @nocollapse */
        OutletDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.TemplateRef },
            { type: OutletService }
        ]; };
        OutletDirective.propDecorators = {
            cxOutlet: [{ type: core.Input }],
            cxOutletContext: [{ type: core.Input }]
        };
        return OutletDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutletModule = /** @class */ (function () {
        function OutletModule() {
        }
        OutletModule.decorators = [
            { type: core.NgModule, args: [{
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var email = (/** @type {?} */ (control.value));
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
            var email = (/** @type {?} */ (control.value));
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
            var password = (/** @type {?} */ (control.value));
            return password.match(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^*()_\-+{};:.,]).{6,}$/)
                ? null
                : { InvalidPassword: true };
        };
        return CustomFormValidators;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginFormComponent = /** @class */ (function () {
        function LoginFormComponent(auth, globalMessageService, fb, authRedirectService) {
            this.auth = auth;
            this.globalMessageService = globalMessageService;
            this.fb = fb;
            this.authRedirectService = authRedirectService;
        }
        /**
         * @return {?}
         */
        LoginFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
            var _this = this;
            /** @type {?} */
            var userId = this.emailToLowerCase();
            this.auth.authorize(userId, this.form.controls.password.value);
            if (!this.sub) {
                this.sub = this.auth.getUserToken().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (data && data.access_token) {
                        _this.globalMessageService.remove(core$1.GlobalMessageType.MSG_TYPE_ERROR);
                        _this.authRedirectService.redirect();
                    }
                }));
            }
        };
        /*
         * Change the inputed email to lowercase because
         * the backend only accepts lowercase emails
         */
        /*
           * Change the inputed email to lowercase because
           * the backend only accepts lowercase emails
           */
        /**
         * @return {?}
         */
        LoginFormComponent.prototype.emailToLowerCase = /*
           * Change the inputed email to lowercase because
           * the backend only accepts lowercase emails
           */
        /**
         * @return {?}
         */
        function () {
            return this.form.controls.userId.value.toLowerCase();
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
            { type: core.Component, args: [{
                        selector: 'cx-login-form',
                        template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n  <a\n    [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n    class=\"btn btn-block btn-secondary\"\n    >{{ 'loginForm.register' | cxTranslate }}</a\n  >\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        LoginFormComponent.ctorParameters = function () { return [
            { type: core$1.AuthService },
            { type: core$1.GlobalMessageService },
            { type: forms.FormBuilder },
            { type: core$1.AuthRedirectService }
        ]; };
        return LoginFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginFormModule = /** @class */ (function () {
        function LoginFormModule() {
        }
        LoginFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            core$1.UserModule,
                            core$1.UrlModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ReturningCustomerLoginComponent: {
                                        component: LoginFormComponent,
                                        guards: [core$1.NotAuthGuard],
                                    },
                                },
                            }))),
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(auth, userService) {
            this.auth = auth;
            this.userService = userService;
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.user$ = this.auth.getUserToken().pipe(operators.switchMap((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                if (token && !!token.access_token) {
                    return _this.userService.get();
                }
                else {
                    return rxjs.of(undefined);
                }
            })));
        };
        LoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-login',
                        template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'login.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n    'login.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () { return [
            { type: core$1.AuthService },
            { type: core$1.UserService }
        ]; };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentMapperService = /** @class */ (function () {
        function ComponentMapperService(componentFactoryResolver, config, document, platform) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.config = config;
            this.document = document;
            this.platform = platform;
            this.missingComponents = [];
            this.loadedWebComponents = {};
        }
        /**
         * @desc
         * returns a web component for the CMS typecode.
         *
         * The mapping of CMS components to web componetns requires a mapping.
         * This is configurable when the module is loaded.
         *
         * For example:
         *
         *  {
         *      'CMSLinkComponent': 'LinkComponent',
         *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
         *      [etc.]
         *  }
         *
         * The type codes are dynamic since they depend on the implementation.
         * Customer will add, extend or ingore standard components.
         *
         * @param typeCode the component type
         */
        /**
         * @desc
         * returns a web component for the CMS typecode.
         *
         * The mapping of CMS components to web componetns requires a mapping.
         * This is configurable when the module is loaded.
         *
         * For example:
         *
         *  {
         *      'CMSLinkComponent': 'LinkComponent',
         *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
         *      [etc.]
         *  }
         *
         * The type codes are dynamic since they depend on the implementation.
         * Customer will add, extend or ingore standard components.
         *
         * @protected
         * @param {?} typeCode the component type
         * @return {?}
         */
        ComponentMapperService.prototype.getComponent = /**
         * @desc
         * returns a web component for the CMS typecode.
         *
         * The mapping of CMS components to web componetns requires a mapping.
         * This is configurable when the module is loaded.
         *
         * For example:
         *
         *  {
         *      'CMSLinkComponent': 'LinkComponent',
         *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
         *      [etc.]
         *  }
         *
         * The type codes are dynamic since they depend on the implementation.
         * Customer will add, extend or ingore standard components.
         *
         * @protected
         * @param {?} typeCode the component type
         * @return {?}
         */
        function (typeCode) {
            /** @type {?} */
            var componentConfig = this.config.cmsComponents[typeCode];
            if (!componentConfig) {
                if (!this.missingComponents.includes(typeCode)) {
                    this.missingComponents.push(typeCode);
                    console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
                }
            }
            return componentConfig ? componentConfig.component : null;
        };
        /**
         * @param {?} typeCode
         * @return {?}
         */
        ComponentMapperService.prototype.getComponentFactoryByCode = /**
         * @param {?} typeCode
         * @return {?}
         */
        function (typeCode) {
            /** @type {?} */
            var component = this.getComponent(typeCode);
            if (!component) {
                return null;
            }
            /** @type {?} */
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            if (!factory) {
                console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
                return null;
            }
            return factory;
        };
        /**
         * @param {?} typeCode
         * @return {?}
         */
        ComponentMapperService.prototype.isWebComponent = /**
         * @param {?} typeCode
         * @return {?}
         */
        function (typeCode) {
            /** @type {?} */
            var component = this.getComponent(typeCode);
            return typeof component === 'string' && (component || '').includes('#');
        };
        /**
         * @param {?} componentType
         * @param {?} renderer
         * @return {?}
         */
        ComponentMapperService.prototype.initWebComponent = /**
         * @param {?} componentType
         * @param {?} renderer
         * @return {?}
         */
        function (componentType, renderer) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                var _a = __read(_this.getComponent(componentType).split('#'), 2), path = _a[0], selector = _a[1];
                /** @type {?} */
                var script = _this.loadedWebComponents[path];
                if (!script) {
                    script = renderer.createElement('script');
                    _this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(_this.document.body, script);
                    if (common.isPlatformBrowser(_this.platform)) {
                        script.onload = (/**
                         * @return {?}
                         */
                        function () {
                            script.onload = null;
                        });
                    }
                }
                if (script.onload) {
                    // If script is still loading (has onload callback defined)
                    // add new callback and chain it with the existing one.
                    // Needed to support loading multiple components from one script
                    /** @type {?} */
                    var chainedOnload_1 = script.onload;
                    script.onload = (/**
                     * @return {?}
                     */
                    function () {
                        chainedOnload_1();
                        resolve(selector);
                    });
                }
                else {
                    resolve(selector);
                }
            }));
        };
        ComponentMapperService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ComponentMapperService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core$1.CmsConfig },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        /** @nocollapse */ ComponentMapperService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core$1.CmsConfig), core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(core.PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
        return ComponentMapperService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                                this.webElement.cxApi = __assign({}, this.injector.get(core$1.CxApiService), { CmsComponentData: this.getCmsDataForComponent() });
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
            return core.Injector.create({
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
            { type: core.Directive, args: [{
                        selector: '[cxComponentWrapper]',
                    },] }
        ];
        /** @nocollapse */
        ComponentWrapperDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: ComponentMapperService },
            { type: core.Injector },
            { type: core$1.CmsService },
            { type: core$1.DynamicAttributeService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core$1.CmsConfig },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        ComponentWrapperDirective.propDecorators = {
            cxComponentWrapper: [{ type: core.Input }]
        };
        return ComponentWrapperDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageComponentModule = /** @class */ (function () {
        function PageComponentModule() {
        }
        PageComponentModule.decorators = [
            { type: core.NgModule, args: [{
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.slot$ = this.position$.pipe(operators.switchMap((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.cmsService.getContentSlot(position); })), operators.tap((/**
             * @param {?} slot
             * @return {?}
             */
            function (slot) { return _this.addSmartEditSlotClass(slot); })));
            /**
             * observable with components (`ContentSlotComponentData[]`)
             * for the current slot
             */
            this.components$ = this.slot$.pipe(operators.map((/**
             * @param {?} slot
             * @return {?}
             */
            function (slot) { return (slot && slot.components ? slot.components : []); })), operators.distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return a.length === b.length && !a.find((/**
                 * @param {?} el
                 * @param {?} index
                 * @return {?}
                 */
                function (el, index) { return el.uid !== b[index].uid; }));
            })), operators.tap((/**
             * @param {?} components
             * @return {?}
             */
            function (components) { return _this.addComponentClass(components); })));
        }
        Object.defineProperty(PageSlotComponent.prototype, "position", {
            set: /**
             * @param {?} position
             * @return {?}
             */
            function (position) {
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
            if (slot && this.cmsService.isLaunchInSmartEdit()) {
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
            { type: core.Component, args: [{
                        selector: 'cx-page-slot',
                        template: "<ng-template\n  [cxOutlet]=\"position$ | async\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-container *ngFor=\"let component of (components$ | async)\">\n    <ng-template\n      [cxOutlet]=\"component.flexType\"\n      [cxOutletContext]=\"{ component: component }\"\n    >\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </ng-container>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PageSlotComponent.ctorParameters = function () { return [
            { type: core$1.CmsService },
            { type: core$1.DynamicAttributeService },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        PageSlotComponent.propDecorators = {
            position: [{ type: core.Input }]
        };
        return PageSlotComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageSlotModule = /** @class */ (function () {
        function PageSlotModule() {
        }
        PageSlotModule.decorators = [
            { type: core.NgModule, args: [{
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            core$1.UserModule,
                            core$1.UrlModule,
                            PageSlotModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    LoginComponent: {
                                        component: LoginComponent,
                                    },
                                },
                            }))),
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogoutGuard = /** @class */ (function () {
        function LogoutGuard(auth, cms, routing, semanticPathService) {
            this.auth = auth;
            this.cms = cms;
            this.routing = routing;
            this.semanticPathService = semanticPathService;
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
                id: this.semanticPathService.get('logout'),
                type: core$1.PageType.CONTENT_PAGE,
            })
                .pipe(operators.tap((/**
             * @param {?} hasPage
             * @return {?}
             */
            function (hasPage) {
                if (!hasPage) {
                    _this.routing.go({ cxRoute: 'home' });
                }
            })));
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
        LogoutGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        LogoutGuard.ctorParameters = function () { return [
            { type: core$1.AuthService },
            { type: core$1.CmsService },
            { type: core$1.RoutingService },
            { type: core$1.SemanticPathService }
        ]; };
        /** @nocollapse */ LogoutGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(core.ɵɵinject(core$1.AuthService), core.ɵɵinject(core$1.CmsService), core.ɵɵinject(core$1.RoutingService), core.ɵɵinject(core$1.SemanticPathService)); }, token: LogoutGuard, providedIn: "root" });
        return LogoutGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageLayoutService = /** @class */ (function () {
        function PageLayoutService(cms, config, breakpointService, handlers) {
            this.cms = cms;
            this.config = config;
            this.breakpointService = breakpointService;
            this.handlers = handlers;
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
            return rxjs.combineLatest(this.page$, this.breakpointService.breakpoint$).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), page = _b[0], breakpoint = _b[1];
                /** @type {?} */
                var pageTemplate = page.template;
                /** @type {?} */
                var slots = _this.resolveSlots(page, section, breakpoint);
                return { slots: slots, pageTemplate: pageTemplate, breakpoint: breakpoint };
            })), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var e_1, _b;
                var slots = _a.slots, pageTemplate = _a.pageTemplate, breakpoint = _a.breakpoint;
                /** @type {?} */
                var result = rxjs.of(slots);
                try {
                    for (var _c = __values(_this.handlers || []), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var handler = _d.value;
                        result = handler.handle(result, pageTemplate, section, breakpoint);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return result;
            })), operators.distinctUntilChanged());
        };
        /**
         * @private
         * @param {?} page
         * @param {?} section
         * @param {?} breakpoint
         * @return {?}
         */
        PageLayoutService.prototype.resolveSlots = /**
         * @private
         * @param {?} page
         * @param {?} section
         * @param {?} breakpoint
         * @return {?}
         */
        function (page, section, breakpoint) {
            /** @type {?} */
            var config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
            if (config && config.slots) {
                return config.slots;
            }
            else if (!section) {
                this.logMissingLayoutConfig(page);
                return Object.keys(page.slots);
            }
            else {
                this.logMissingLayoutConfig(page, section);
                return [];
            }
        };
        Object.defineProperty(PageLayoutService.prototype, "page$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.cms.getCurrentPage().pipe(operators.filter(Boolean));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageLayoutService.prototype, "templateName$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.page$.pipe(operators.filter((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) { return !!page.template; })), operators.map((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) { return page.template; })));
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
            if (!this.config.layoutSlots) {
                return null;
            }
            /** @type {?} */
            var pageTemplateConfig = this.config.layoutSlots[templateUid];
            if (section) {
                return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
            }
            if (pageTemplateConfig) {
                return this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), configAttribute, breakpoint);
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
            var responsiveConfig = this.getResponsiveSlotConfig((/** @type {?} */ (sectionConfig)), configAttribute, breakpoint);
            if (responsiveConfig.hasOwnProperty(configAttribute)) {
                return responsiveConfig;
            }
            else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
                return pageTemplateConfig[section];
            }
            else if (this.config.layoutSlots[section]) {
                return (/** @type {?} */ (this.config.layoutSlots[section]));
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
            var e_2, _a;
            /** @type {?} */
            var slotConfig = (/** @type {?} */ (layoutSlotConfig));
            // fallback to default slot config
            if (!breakpoint) {
                return slotConfig;
            }
            // we have a config for the specific breakpoint
            if (layoutSlotConfig[breakpoint] &&
                layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
                return (/** @type {?} */ (layoutSlotConfig[breakpoint]));
            }
            // find closest config
            /** @type {?} */
            var all = this.breakpointService.breakpoints;
            try {
                for (var _b = __values(all.splice(0, all.indexOf(breakpoint))), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var br = _c.value;
                    if (layoutSlotConfig[br] &&
                        layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                        slotConfig = (/** @type {?} */ (layoutSlotConfig[br]));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageLayoutService.ctorParameters = function () { return [
            { type: core$1.CmsService },
            { type: LayoutConfig },
            { type: BreakpointService },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
        ]; };
        return PageLayoutService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageLayoutComponent = /** @class */ (function () {
        function PageLayoutComponent(el, renderer, pageLayoutService) {
            var _this = this;
            this.el = el;
            this.renderer = renderer;
            this.pageLayoutService = pageLayoutService;
            this.section$ = new rxjs.BehaviorSubject(undefined);
            this.templateName$ = this.pageLayoutService
                .templateName$;
            this.layoutName$ = this.section$.pipe(operators.switchMap((/**
             * @param {?} section
             * @return {?}
             */
            function (section) { return (section ? rxjs.of(section) : _this.templateName$); })), operators.tap((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.styleClass = name;
            })));
            this.slots$ = this.section$.pipe(operators.switchMap((/**
             * @param {?} section
             * @return {?}
             */
            function (section) { return _this.pageLayoutService.getSlots(section); })));
        }
        Object.defineProperty(PageLayoutComponent.prototype, "section", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.section$.next(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
            set: /**
             * @param {?} cls
             * @return {?}
             */
            function (cls) {
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
            { type: core.Component, args: [{
                        selector: 'cx-page-layout',
                        template: "<!-- ???? {{ layoutName$ | async }} -->\n<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <!-- {{ slots$ | async }} -->\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        PageLayoutComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: PageLayoutService }
        ]; };
        PageLayoutComponent.propDecorators = {
            section: [{ type: core.Input }]
        };
        return PageLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageLayoutModule = /** @class */ (function () {
        function PageLayoutModule() {
        }
        PageLayoutModule.decorators = [
            { type: core.NgModule, args: [{
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = { cxRoute: 'logout' };
    var LogoutModule = /** @class */ (function () {
        function LogoutModule() {
        }
        LogoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            PageLayoutModule,
                            router.RouterModule.forChild([
                                {
                                    path: null,
                                    canActivate: [LogoutGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ0,
                                },
                            ]),
                        ],
                    },] }
        ];
        return LogoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterComponent = /** @class */ (function () {
        function RegisterComponent(auth, authRedirectService, userService, globalMessageService, fb) {
            this.auth = auth;
            this.authRedirectService = authRedirectService;
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
            this.titles$ = this.userService.getTitles().pipe(operators.tap((/**
             * @param {?} titles
             * @return {?}
             */
            function (titles) {
                if (Object.keys(titles).length === 0) {
                    _this.userService.loadTitles();
                }
            })));
        };
        /**
         * @return {?}
         */
        RegisterComponent.prototype.submit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.emailToLowerCase();
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
            if (!this.subscription) {
                this.subscription = this.auth.getUserToken().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (data && data.access_token) {
                        _this.globalMessageService.remove(core$1.GlobalMessageType.MSG_TYPE_ERROR);
                        _this.authRedirectService.redirect();
                    }
                }));
            }
            // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
            this.globalMessageService
                .get()
                .pipe(operators.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return Object.keys(data).length > 0; })))
                .subscribe((/**
             * @param {?} globalMessageEntities
             * @return {?}
             */
            function (globalMessageEntities) {
                if (globalMessageEntities[core$1.GlobalMessageType.MSG_TYPE_ERROR].some((/**
                 * @param {?} message
                 * @return {?}
                 */
                function (message) { return message === 'This field is required.'; }))) {
                    _this.globalMessageService.remove(core$1.GlobalMessageType.MSG_TYPE_ERROR);
                    _this.globalMessageService.add({ key: 'register.titleRequired' }, core$1.GlobalMessageType.MSG_TYPE_ERROR);
                }
            }));
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
        /*
         * Change the inputed email to lowercase because
         * the backend only accepts lowercase emails
         */
        /*
           * Change the inputed email to lowercase because
           * the backend only accepts lowercase emails
           */
        /**
         * @return {?}
         */
        RegisterComponent.prototype.emailToLowerCase = /*
           * Change the inputed email to lowercase because
           * the backend only accepts lowercase emails
           */
        /**
         * @return {?}
         */
        function () {
            this.userRegistrationForm.value.email = this.userRegistrationForm.value.email.toLowerCase();
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
        RegisterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-register',
                        template: "<section class=\"cx-page-section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of (titles$ | async)\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
                    }] }
        ];
        /** @nocollapse */
        RegisterComponent.ctorParameters = function () { return [
            { type: core$1.AuthService },
            { type: core$1.AuthRedirectService },
            { type: core$1.UserService },
            { type: core$1.GlobalMessageService },
            { type: forms.FormBuilder }
        ]; };
        return RegisterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterComponentModule = /** @class */ (function () {
        function RegisterComponentModule() {
        }
        RegisterComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            LoginModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            core$1.UserModule,
                            core$1.UrlModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    RegisterCustomerComponent: {
                                        component: RegisterComponent,
                                        guards: [core$1.NotAuthGuard],
                                    },
                                },
                            }))),
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserComponentModule = /** @class */ (function () {
        function UserComponentModule() {
        }
        UserComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            LoginModule,
                            LoginFormModule,
                            LogoutModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            core$1.UserModule,
                            core$1.UrlModule,
                            RegisterComponentModule,
                        ],
                    },] }
        ];
        return UserComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (componentTypes_1_1 && !componentTypes_1_1.done && (_a = componentTypes_1.return)) _a.call(componentTypes_1);
                }
                finally { if (e_1) throw e_1.error; }
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
                    this.getGuardsForComponent(componentType).forEach((/**
                     * @param {?} guard
                     * @return {?}
                     */
                    function (guard) {
                        return guards.add(guard);
                    }));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return)) _a.call(componentTypes_2);
                }
                finally { if (e_2) throw e_2.error; }
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
                        this.getI18nKeysForComponent(componentType).forEach((/**
                         * @param {?} key
                         * @return {?}
                         */
                        function (key) {
                            return i18nKeys.add(key);
                        }));
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return)) _a.call(componentTypes_3);
                }
                finally { if (e_3) throw e_3.error; }
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsMappingService.ctorParameters = function () { return [
            { type: core$1.CmsConfig },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        /** @nocollapse */ CmsMappingService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(core.ɵɵinject(core$1.CmsConfig), core.ɵɵinject(core.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
        return CmsMappingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                var canActivateObservables = guards.map((/**
                 * @param {?} guardClass
                 * @return {?}
                 */
                function (guardClass) {
                    /** @type {?} */
                    var guard = _this.injector.get(guardClass, null);
                    if (isCanActivate(guard)) {
                        return wrapIntoObservable(guard.canActivate(route, state)).pipe(operators.first());
                    }
                    else {
                        throw new Error('Invalid CanActivate guard in cmsMapping');
                    }
                }));
                return rxjs.concat.apply(void 0, __spread(canActivateObservables)).pipe(operators.skipWhile((/**
                 * @param {?} canActivate
                 * @return {?}
                 */
                function (canActivate) { return canActivate === true; })), operators.endWith(true), operators.first());
            }
            else {
                return rxjs.of(true);
            }
        };
        CmsGuardsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsGuardsService.ctorParameters = function () { return [
            { type: CmsMappingService },
            { type: core.Injector }
        ]; };
        /** @nocollapse */ CmsGuardsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(core.ɵɵinject(CmsMappingService), core.ɵɵinject(core.INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (i18nKeys_1_1 && !i18nKeys_1_1.done && (_a = i18nKeys_1.return)) _a.call(i18nKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.translation.loadChunks(Array.from(i18nChunks));
        };
        CmsI18nService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsI18nService.ctorParameters = function () { return [
            { type: CmsMappingService },
            { type: core$1.TranslationService },
            { type: core$1.TranslationChunkService }
        ]; };
        /** @nocollapse */ CmsI18nService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(core.ɵɵinject(CmsMappingService), core.ɵɵinject(core$1.TranslationService), core.ɵɵinject(core$1.TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
        return CmsI18nService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                !!this.router.config.find((/**
                 * @param {?} route
                 * @return {?}
                 */
                function (route) {
                    return route.data && route.data.cxCmsRouteContext && route.path === routePath;
                })));
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
            if (pageContext.type === core$1.PageType.CONTENT_PAGE &&
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsRoutesService.ctorParameters = function () { return [
            { type: router.Router },
            { type: CmsMappingService }
        ]; };
        /** @nocollapse */ CmsRoutesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(core.ɵɵinject(router.Router), core.ɵɵinject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
        return CmsRoutesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsPageGuard = /** @class */ (function () {
        function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService) {
            this.routingService = routingService;
            this.cmsService = cmsService;
            this.cmsRoutes = cmsRoutes;
            this.cmsI18n = cmsI18n;
            this.cmsGuards = cmsGuards;
            this.semanticPathService = semanticPathService;
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
            return this.routingService.getNextPageContext().pipe(operators.switchMap((/**
             * @param {?} pageContext
             * @return {?}
             */
            function (pageContext) {
                return _this.cmsService.hasPage(pageContext, true).pipe(operators.first(), operators.withLatestFrom(rxjs.of(pageContext)));
            })), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), hasPage = _b[0], pageContext = _b[1];
                return hasPage
                    ? _this.resolveCmsPageLogic(pageContext, route, state)
                    : _this.handleNotFoundPage(pageContext, route, state);
            })));
        };
        /**
         * @private
         * @param {?} pageContext
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        CmsPageGuard.prototype.resolveCmsPageLogic = /**
         * @private
         * @param {?} pageContext
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (pageContext, route, state) {
            var _this = this;
            return this.cmsService.getPageComponentTypes(pageContext).pipe(operators.switchMap((/**
             * @param {?} componentTypes
             * @return {?}
             */
            function (componentTypes) {
                return _this.cmsGuards
                    .cmsPageCanActivate(componentTypes, route, state)
                    .pipe(operators.withLatestFrom(rxjs.of(componentTypes)));
            })), operators.tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
                if (canActivate === true) {
                    _this.cmsI18n.loadChunksForComponents(componentTypes);
                }
            })), operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
                if (canActivate === true &&
                    !route.data.cxCmsRouteContext &&
                    !_this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                    return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
                }
                return canActivate;
            })));
        };
        /**
         * @private
         * @param {?} pageContext
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        CmsPageGuard.prototype.handleNotFoundPage = /**
         * @private
         * @param {?} pageContext
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (pageContext, route, state) {
            var _this = this;
            /** @type {?} */
            var notFoundCmsPageContext = {
                type: core$1.PageType.CONTENT_PAGE,
                id: this.semanticPathService.get('notFound'),
            };
            return this.cmsService.hasPage(notFoundCmsPageContext).pipe(operators.switchMap((/**
             * @param {?} hasNotFoundPage
             * @return {?}
             */
            function (hasNotFoundPage) {
                if (hasNotFoundPage) {
                    return _this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(operators.tap((/**
                     * @param {?} notFoundIndex
                     * @return {?}
                     */
                    function (notFoundIndex) {
                        _this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                    })), operators.switchMap((/**
                     * @param {?} notFoundIndex
                     * @return {?}
                     */
                    function (notFoundIndex) {
                        return _this.cmsService.getPageIndex(pageContext).pipe(
                        // we have to wait for page index update
                        operators.filter((/**
                         * @param {?} index
                         * @return {?}
                         */
                        function (index) { return index === notFoundIndex; })));
                    })), operators.switchMap((/**
                     * @return {?}
                     */
                    function () { return _this.resolveCmsPageLogic(pageContext, route, state); })));
                }
                return rxjs.of(false);
            })));
        };
        CmsPageGuard.guardName = 'CmsPageGuard';
        CmsPageGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        CmsPageGuard.ctorParameters = function () { return [
            { type: core$1.RoutingService },
            { type: core$1.CmsService },
            { type: CmsRoutesService },
            { type: CmsI18nService },
            { type: CmsGuardsService },
            { type: core$1.SemanticPathService }
        ]; };
        /** @nocollapse */ CmsPageGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(core.ɵɵinject(core$1.RoutingService), core.ɵɵinject(core$1.CmsService), core.ɵɵinject(CmsRoutesService), core.ɵɵinject(CmsI18nService), core.ɵɵinject(CmsGuardsService), core.ɵɵinject(core$1.SemanticPathService)); }, token: CmsPageGuard, providedIn: "root" });
        return CmsPageGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    PWAModuleConfig = /** @class */ (function (_super) {
        __extends(PWAModuleConfig, _super);
        function PWAModuleConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PWAModuleConfig;
    }(core$1.ServerConfig));
    /** @type {?} */
    var defaultPWAModuleConfig = {
        pwa: {
            enabled: false,
            addToHomeScreen: false,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.winRef.nativeWindow.addEventListener('beforeinstallprompt', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    event.preventDefault();
                    _this.deferredEvent = event;
                    _this.enableAddToHomeScreen();
                }));
                this.winRef.nativeWindow.addEventListener('appinstalled', (/**
                 * @return {?}
                 */
                function () {
                    _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    _this.disableAddToHomeScreen();
                    _this.deferredEvent = null;
                }));
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AddToHomeScreenService.ctorParameters = function () { return [
            { type: PWAModuleConfig },
            { type: core$1.GlobalMessageService },
            { type: core$1.WindowRef }
        ]; };
        return AddToHomeScreenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    AddToHomeScreenComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToHomeScreenBannerComponent = /** @class */ (function (_super) {
        __extends(AddToHomeScreenBannerComponent, _super);
        function AddToHomeScreenBannerComponent(addToHomeScreenService) {
            var _this = _super.call(this, addToHomeScreenService) || this;
            _this.addToHomeScreenService = addToHomeScreenService;
            return _this;
        }
        AddToHomeScreenBannerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-add-to-home-screen-banner',
                        template: "<div *ngIf=\"(canPrompt$ | async)\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AddToHomeScreenBannerComponent.ctorParameters = function () { return [
            { type: AddToHomeScreenService }
        ]; };
        return AddToHomeScreenBannerComponent;
    }(AddToHomeScreenComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddToHomeScreenBtnComponent = /** @class */ (function (_super) {
        __extends(AddToHomeScreenBtnComponent, _super);
        function AddToHomeScreenBtnComponent(addToHomeScreenService) {
            var _this = _super.call(this, addToHomeScreenService) || this;
            _this.addToHomeScreenService = addToHomeScreenService;
            return _this;
        }
        AddToHomeScreenBtnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-add-to-home-screen-btn',
                        template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"(canPrompt$ | async)\"></ng-content>\n</span>\n"
                    }] }
        ];
        /** @nocollapse */
        AddToHomeScreenBtnComponent.ctorParameters = function () { return [
            { type: AddToHomeScreenService }
        ]; };
        return AddToHomeScreenBtnComponent;
    }(AddToHomeScreenComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var result = (/**
         * @return {?}
         */
        function () { return addToHomeScreenService; });
        return result;
    }
    var PwaModule = /** @class */ (function () {
        function PwaModule() {
        }
        PwaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig(defaultPWAModuleConfig),
                            serviceWorker.ServiceWorkerModule.register('/ngsw-worker.js'),
                            core$1.I18nModule,
                        ],
                        providers: [
                            { provide: PWAModuleConfig, useExisting: core$1.Config },
                            {
                                provide: serviceWorker.SwRegistrationOptions,
                                useFactory: pwaConfigurationFactory,
                                deps: [core$1.Config],
                            },
                            {
                                provide: core.APP_INITIALIZER,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var result = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var router$1 = injector.get(router.Router);
            router$1.config.push(cmsRoute);
        });
        return result;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = addCmsRoute;
    var CmsRouteModule = /** @class */ (function () {
        function CmsRouteModule() {
        }
        CmsRouteModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            {
                                provide: core.APP_INITIALIZER,
                                multi: true,
                                deps: [core.Injector],
                                useFactory: ɵ0$1,
                            },
                        ],
                    },] }
        ];
        return CmsRouteModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                .subscribe((/**
             * @param {?} meta
             * @return {?}
             */
            function (meta) { return (_this.meta = meta); }));
        };
        Object.defineProperty(SeoMetaService.prototype, "meta", {
            set: /**
             * @protected
             * @param {?} meta
             * @return {?}
             */
            function (meta) {
                this.title = meta.title;
                this.description = meta.description;
                this.image = meta.image;
                this.robots = meta.robots || [core$1.PageRobotsMeta.INDEX, core$1.PageRobotsMeta.FOLLOW];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SeoMetaService.prototype, "title", {
            set: /**
             * @protected
             * @param {?} title
             * @return {?}
             */
            function (title) {
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
             */
            function (value) {
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
             */
            function (imageUrl) {
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
             */
            function (value) {
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SeoMetaService.ctorParameters = function () { return [
            { type: platformBrowser.Title },
            { type: platformBrowser.Meta },
            { type: core$1.PageMetaService }
        ]; };
        /** @nocollapse */ SeoMetaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(core.ɵɵinject(platformBrowser.Title), core.ɵɵinject(platformBrowser.Meta), core.ɵɵinject(core$1.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
        return SeoMetaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var htmlLangProvider = {
        provide: core.APP_INITIALIZER,
        multi: true,
        useFactory: setHtmlLangAttribute,
        deps: [core$1.WindowRef, core$1.LanguageService],
    };
    /**
     * Sets active language in <html lang="">
     * @param {?} winRef
     * @param {?} languageService
     * @return {?}
     */
    function setHtmlLangAttribute(winRef, languageService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () {
            languageService.getActive().subscribe((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) {
                winRef.document.documentElement.lang = lang;
            }));
        });
        return result;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function initSeoService(injector) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var service = injector.get(SeoMetaService);
            service.init();
        });
        return result;
    }
    var SeoModule = /** @class */ (function () {
        function SeoModule() {
        }
        SeoModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initSeoService,
                                deps: [core.Injector],
                                multi: true,
                            },
                            htmlLangProvider,
                        ],
                    },] }
        ];
        return SeoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                _this.startNavigating = val === true;
                _this.stopNavigating = val === false;
            }));
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
            { type: core.Component, args: [{
                        selector: 'cx-storefront',
                        template: "<header\n  [class.is-expanded]=\"isExpanded$ | async\"\n  (keydown.escape)=\"collapseMenu()\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n"
                    }] }
        ];
        /** @nocollapse */
        StorefrontComponent.ctorParameters = function () { return [
            { type: HamburgerMenuService },
            { type: core$1.RoutingService }
        ]; };
        StorefrontComponent.propDecorators = {
            startNavigating: [{ type: core.HostBinding, args: ['class.start-navigating',] }],
            stopNavigating: [{ type: core.HostBinding, args: ['class.stop-navigating',] }]
        };
        return StorefrontComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainModule = /** @class */ (function () {
        function MainModule() {
        }
        MainModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            GlobalMessageComponentModule,
                            UserComponentModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var layoutModules = [OutletRefModule];
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([MainModule], layoutModules),
                        providers: [{ provide: LayoutConfig, useExisting: core$1.Config }],
                        exports: __spread([MainModule], layoutModules),
                    },] }
        ];
        return LayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BannerComponent = /** @class */ (function () {
        function BannerComponent(component) {
            this.component = component;
        }
        BannerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-banner',
                        template: "<ng-container *ngIf=\"(component.data$ | async) as data\">\n  <p *ngIf=\"data.headLine\" [innerHTML]=\"data.headLine\"></p>\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <cx-media [container]=\"data.media\"></cx-media>\n  </cx-generic-link>\n\n  <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BannerComponent.ctorParameters = function () { return [
            { type: CmsComponentData }
        ]; };
        return BannerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BannerModule = /** @class */ (function () {
        function BannerModule() {
        }
        BannerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            GenericLinkModule,
                            MediaModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    SimpleResponsiveBannerComponent: {
                                        component: BannerComponent,
                                    },
                                    BannerComponent: {
                                        component: BannerComponent,
                                    },
                                    SimpleBannerComponent: {
                                        component: BannerComponent,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkComponent = /** @class */ (function () {
        function LinkComponent(component) {
            this.component = component;
        }
        LinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-link',
                        template: "<cx-generic-link\n  *ngIf=\"(component.data$ | async) as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        LinkComponent.ctorParameters = function () { return [
            { type: CmsComponentData }
        ]; };
        return LinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkModule = /** @class */ (function () {
        function LinkModule() {
        }
        LinkModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            GenericLinkModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CMSLinkComponent: { component: LinkComponent },
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParagraphComponent = /** @class */ (function () {
        function ParagraphComponent(component) {
            this.component = component;
        }
        ParagraphComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-paragraph',
                        template: "<p *ngIf=\"(component.data$ | async) as data\" [innerHTML]=\"data.content\"></p>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ParagraphComponent.ctorParameters = function () { return [
            { type: CmsComponentData }
        ]; };
        return ParagraphComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsParagraphModule = /** @class */ (function () {
        function CmsParagraphModule() {
        }
        CmsParagraphModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CMSParagraphComponent: {
                                        component: ParagraphComponent,
                                    },
                                    CMSTabParagraphComponent: {
                                        component: ParagraphComponent,
                                    },
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabParagraphContainerComponent = /** @class */ (function () {
        function TabParagraphContainerComponent(componentData, cmsService) {
            var _this = this;
            this.componentData = componentData;
            this.cmsService = cmsService;
            this.activeTabNum = 0;
            this.components$ = this.componentData.data$.pipe(operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return rxjs.combineLatest(data.components.split(' ').map((/**
                 * @param {?} component
                 * @return {?}
                 */
                function (component) {
                    return _this.cmsService.getComponentData(component).pipe(operators.map((/**
                     * @param {?} tab
                     * @return {?}
                     */
                    function (tab) {
                        if (!tab.flexType) {
                            tab = __assign({}, tab, { flexType: tab.typeCode });
                        }
                        return __assign({}, tab, { title: "CMSTabParagraphContainer.tabs." + tab.uid });
                    })));
                })));
            })));
        }
        /**
         * @param {?} tabNum
         * @return {?}
         */
        TabParagraphContainerComponent.prototype.select = /**
         * @param {?} tabNum
         * @return {?}
         */
        function (tabNum) {
            this.activeTabNum = tabNum;
        };
        TabParagraphContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-tab-paragraph-container',
                        template: "<ng-container *ngFor=\"let component of (components$ | async); let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template\n      [cxOutlet]=\"component.flexType\"\n      [cxOutletContext]=\"{}\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-template>\n  </div>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TabParagraphContainerComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: core$1.CmsService }
        ]; };
        return TabParagraphContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabParagraphContainerModule = /** @class */ (function () {
        function TabParagraphContainerModule() {
        }
        TabParagraphContainerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CMSTabParagraphContainer: {
                                        component: TabParagraphContainerComponent,
                                    },
                                },
                            }))),
                            PageComponentModule,
                            OutletModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressBookComponentService = /** @class */ (function () {
        function AddressBookComponentService(userAddressService) {
            this.userAddressService = userAddressService;
        }
        /**
         * @return {?}
         */
        AddressBookComponentService.prototype.getAddresses = /**
         * @return {?}
         */
        function () {
            return this.userAddressService.getAddresses();
        };
        /**
         * @return {?}
         */
        AddressBookComponentService.prototype.getAddressesStateLoading = /**
         * @return {?}
         */
        function () {
            return this.userAddressService.getAddressesLoading();
        };
        /**
         * @return {?}
         */
        AddressBookComponentService.prototype.loadAddresses = /**
         * @return {?}
         */
        function () {
            this.userAddressService.loadAddresses();
        };
        /**
         * @param {?} address
         * @return {?}
         */
        AddressBookComponentService.prototype.addUserAddress = /**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            this.userAddressService.addUserAddress(address);
        };
        /**
         * @param {?} addressId
         * @param {?} address
         * @return {?}
         */
        AddressBookComponentService.prototype.updateUserAddress = /**
         * @param {?} addressId
         * @param {?} address
         * @return {?}
         */
        function (addressId, address) {
            this.userAddressService.updateUserAddress(addressId, address);
        };
        AddressBookComponentService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AddressBookComponentService.ctorParameters = function () { return [
            { type: core$1.UserAddressService }
        ]; };
        return AddressBookComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.addresses$ = this.service.getAddresses();
            this.addressesStateLoading$ = this.service.getAddressesStateLoading();
            this.service.loadAddresses();
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
            this.service.addUserAddress(address);
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
            this.service.updateUserAddress(this.currentAddress['id'], address);
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
            { type: core.Component, args: [{
                        selector: 'cx-address-book',
                        template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        AddressBookComponent.ctorParameters = function () { return [
            { type: AddressBookComponentService }
        ]; };
        return AddressBookComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressCardComponent = /** @class */ (function () {
        function AddressCardComponent(userAddressService) {
            this.userAddressService = userAddressService;
            this.editEvent = new core.EventEmitter();
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
            this.userAddressService.setAddressAsDefault(addressId);
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
            this.userAddressService.deleteUserAddress(addressId);
        };
        AddressCardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-address-card',
                        template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AddressCardComponent.ctorParameters = function () { return [
            { type: core$1.UserAddressService }
        ]; };
        AddressCardComponent.propDecorators = {
            address: [{ type: core.Input }],
            editEvent: [{ type: core.Output }]
        };
        return AddressCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressBookModule = /** @class */ (function () {
        function AddressBookModule() {
        }
        AddressBookModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    AccountAddressBookComponent: {
                                        component: AddressBookComponent,
                                        providers: [
                                            {
                                                provide: AddressBookComponentService,
                                                useClass: AddressBookComponentService,
                                                deps: [core$1.UserAddressService],
                                            },
                                        ],
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            CardModule,
                            AddressFormModule,
                            SpinnerModule,
                            core$1.I18nModule,
                        ],
                        declarations: [AddressBookComponent, AddressCardComponent],
                        exports: [AddressBookComponent, AddressCardComponent],
                        providers: [core$1.UserAddressService, AddressBookComponentService],
                        entryComponents: [AddressBookComponent],
                    },] }
        ];
        return AddressBookModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseAccountModalComponent = /** @class */ (function () {
        function CloseAccountModalComponent(modalService, userService, authService, globalMessageService, routingService, translationService) {
            this.modalService = modalService;
            this.userService = userService;
            this.authService = authService;
            this.globalMessageService = globalMessageService;
            this.routingService = routingService;
            this.translationService = translationService;
            this.iconTypes = ICON_TYPE;
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
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) { return _this.onSuccess(success); })));
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
                this.dismissModal();
                this.translationService
                    .translate('closeAccount.accountClosedSuccessfully')
                    .pipe(operators.first())
                    .subscribe((/**
                 * @param {?} text
                 * @return {?}
                 */
                function (text) {
                    _this.globalMessageService.add(text, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                }));
                this.routingService.go({ cxRoute: 'home' });
            }
        };
        /**
         * @param {?=} reason
         * @return {?}
         */
        CloseAccountModalComponent.prototype.dismissModal = /**
         * @param {?=} reason
         * @return {?}
         */
        function (reason) {
            this.modalService.dismissActiveModal(reason);
        };
        /**
         * @return {?}
         */
        CloseAccountModalComponent.prototype.closeAccount = /**
         * @return {?}
         */
        function () {
            this.userService.remove();
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
            { type: core.Component, args: [{
                        selector: 'cx-close-account-modal',
                        template: "<ng-container *ngIf=\"(userToken$ | async) as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"dismissModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CloseAccountModalComponent.ctorParameters = function () { return [
            { type: ModalService },
            { type: core$1.UserService },
            { type: core$1.AuthService },
            { type: core$1.GlobalMessageService },
            { type: core$1.RoutingService },
            { type: core$1.TranslationService }
        ]; };
        return CloseAccountModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'cx-close-account',
                        template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CloseAccountComponent.ctorParameters = function () { return [
            { type: ModalService }
        ]; };
        return CloseAccountComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseAccountModule = /** @class */ (function () {
        function CloseAccountModule() {
        }
        CloseAccountModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                            IconModule,
                            SpinnerModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CloseAccountComponent: {
                                        component: CloseAccountComponent,
                                        guards: [core$1.AuthGuard],
                                    },
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsentManagementFormComponent = /** @class */ (function () {
        function ConsentManagementFormComponent() {
            this.consentChanged = new core.EventEmitter();
            this.consentGiven = false;
        }
        /**
         * @return {?}
         */
        ConsentManagementFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.consentTemplate && this.consentTemplate.currentConsent) {
                if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                    this.consentGiven = false;
                }
                else if (this.consentTemplate.currentConsent.consentGivenDate) {
                    this.consentGiven = true;
                }
            }
        };
        /**
         * @return {?}
         */
        ConsentManagementFormComponent.prototype.onConsentChange = /**
         * @return {?}
         */
        function () {
            this.consentChanged.emit({
                given: !this.consentGiven,
                template: this.consentTemplate,
            });
        };
        ConsentManagementFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-consent-management-form',
                        template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      [checked]=\"consentGiven\"\n      (change)=\"onConsentChange()\"\n    />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ConsentManagementFormComponent.ctorParameters = function () { return []; };
        ConsentManagementFormComponent.propDecorators = {
            consentTemplate: [{ type: core.Input }],
            consentChanged: [{ type: core.Output }]
        };
        return ConsentManagementFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsentManagementComponent = /** @class */ (function () {
        function ConsentManagementComponent(userConsentService, globalMessageService) {
            this.userConsentService = userConsentService;
            this.globalMessageService = globalMessageService;
            this.subscriptions = new rxjs.Subscription();
        }
        /**
         * @return {?}
         */
        ConsentManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.loading$ = rxjs.combineLatest(this.userConsentService.getConsentsResultLoading(), this.userConsentService.getGiveConsentResultLoading(), this.userConsentService.getWithdrawConsentResultLoading()).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 3), consentLoading = _b[0], giveConsentLoading = _b[1], withdrawConsentLoading = _b[2];
                return consentLoading || giveConsentLoading || withdrawConsentLoading;
            })));
            this.consentListInit();
            this.giveConsentInit();
            this.withdrawConsentInit();
        };
        /**
         * @private
         * @return {?}
         */
        ConsentManagementComponent.prototype.consentListInit = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.templateList$ = this.userConsentService.getConsents().pipe(operators.tap((/**
             * @param {?} templateList
             * @return {?}
             */
            function (templateList) {
                if (!_this.consentsExists(templateList)) {
                    _this.userConsentService.loadConsents();
                }
            })));
        };
        /**
         * @private
         * @return {?}
         */
        ConsentManagementComponent.prototype.giveConsentInit = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.userConsentService.resetGiveConsentProcessState();
            this.subscriptions.add(this.userConsentService
                .getGiveConsentResultSuccess()
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) { return _this.onConsentGivenSuccess(success); })));
        };
        /**
         * @private
         * @return {?}
         */
        ConsentManagementComponent.prototype.withdrawConsentInit = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.userConsentService.resetWithdrawConsentProcessState();
            this.subscriptions.add(this.userConsentService
                .getWithdrawConsentResultLoading()
                .pipe(operators.skipWhile(Boolean), operators.withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), withdrawalSuccess = _b[1];
                return withdrawalSuccess;
            })), operators.tap((/**
             * @param {?} withdrawalSuccess
             * @return {?}
             */
            function (withdrawalSuccess) {
                if (withdrawalSuccess) {
                    _this.userConsentService.loadConsents();
                }
            })))
                .subscribe((/**
             * @param {?} withdrawalSuccess
             * @return {?}
             */
            function (withdrawalSuccess) {
                return _this.onConsentWithdrawnSuccess(withdrawalSuccess);
            })));
        };
        /**
         * @private
         * @param {?} templateList
         * @return {?}
         */
        ConsentManagementComponent.prototype.consentsExists = /**
         * @private
         * @param {?} templateList
         * @return {?}
         */
        function (templateList) {
            return Boolean(templateList) && templateList.length > 0;
        };
        /**
         * @param {?} __0
         * @return {?}
         */
        ConsentManagementComponent.prototype.onConsentChange = /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var given = _a.given, template = _a.template;
            if (given) {
                this.userConsentService.giveConsent(template.id, template.version);
            }
            else {
                this.userConsentService.withdrawConsent(template.currentConsent.code);
            }
        };
        /**
         * @private
         * @param {?} success
         * @return {?}
         */
        ConsentManagementComponent.prototype.onConsentGivenSuccess = /**
         * @private
         * @param {?} success
         * @return {?}
         */
        function (success) {
            if (success) {
                this.userConsentService.resetGiveConsentProcessState();
                this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }
        };
        /**
         * @private
         * @param {?} success
         * @return {?}
         */
        ConsentManagementComponent.prototype.onConsentWithdrawnSuccess = /**
         * @private
         * @param {?} success
         * @return {?}
         */
        function (success) {
            if (success) {
                this.userConsentService.resetWithdrawConsentProcessState();
                this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }
        };
        /**
         * @return {?}
         */
        ConsentManagementComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.subscriptions.unsubscribe();
            this.userConsentService.resetGiveConsentProcessState();
            this.userConsentService.resetWithdrawConsentProcessState();
        };
        ConsentManagementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-consent-management',
                        template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of (templateList$ | async)\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        ConsentManagementComponent.ctorParameters = function () { return [
            { type: core$1.UserConsentService },
            { type: core$1.GlobalMessageService }
        ]; };
        return ConsentManagementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsentManagementModule = /** @class */ (function () {
        function ConsentManagementModule() {
        }
        ConsentManagementModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ConsentManagementComponent: {
                                        component: ConsentManagementComponent,
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            SpinnerModule,
                            core$1.I18nModule,
                        ],
                        declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
                        exports: [ConsentManagementComponent],
                        entryComponents: [ConsentManagementComponent],
                    },] }
        ];
        return ConsentManagementModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.routingService.go({ cxRoute: 'login' });
        };
        ForgotPasswordComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-forgot-password',
                        template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
                    }] }
        ];
        /** @nocollapse */
        ForgotPasswordComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: core$1.UserService },
            { type: core$1.RoutingService }
        ]; };
        return ForgotPasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ForgotPasswordModule = /** @class */ (function () {
        function ForgotPasswordModule() {
        }
        ForgotPasswordModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            core$1.UrlModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ForgotPasswordComponent: {
                                        component: ForgotPasswordComponent,
                                        guards: [core$1.NotAuthGuard],
                                    },
                                },
                            }))),
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderDetailsService = /** @class */ (function () {
        function OrderDetailsService(userOrderService, routingService) {
            var _this = this;
            this.userOrderService = userOrderService;
            this.routingService = routingService;
            this.orderCode$ = this.routingService
                .getRouterState()
                .pipe(operators.map((/**
             * @param {?} routingData
             * @return {?}
             */
            function (routingData) { return routingData.state.params.orderCode; })));
            this.orderLoad$ = this.orderCode$.pipe(operators.tap((/**
             * @param {?} orderCode
             * @return {?}
             */
            function (orderCode) {
                if (orderCode) {
                    _this.userOrderService.loadOrderDetails(orderCode);
                }
                else {
                    _this.userOrderService.clearOrderDetails();
                }
            })), operators.shareReplay({ bufferSize: 1, refCount: true }));
        }
        /**
         * @return {?}
         */
        OrderDetailsService.prototype.getOrderDetails = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.orderLoad$.pipe(operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.userOrderService.getOrderDetails(); })));
        };
        OrderDetailsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        OrderDetailsService.ctorParameters = function () { return [
            { type: core$1.UserOrderService },
            { type: core$1.RoutingService }
        ]; };
        return OrderDetailsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'cx-order-details-headline',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | cxDate }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\" *ngIf=\"order?.statusDisplay\">\n        {{\n          'orderDetails.statusDisplay'\n            | cxTranslate: { context: order?.statusDisplay }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailHeadlineComponent.ctorParameters = function () { return [
            { type: OrderDetailsService }
        ]; };
        return OrderDetailHeadlineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            consignment.entries.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                products.push(element.orderEntry);
            }));
            return products;
        };
        OrderDetailItemsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-details-items',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        <span *ngIf=\"consignment\">\n          {{\n            'orderDetails.deliveryStatus'\n              | cxTranslate: { context: consignment.status }\n          }}\n        </span>\n      </div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | cxDate }}</div>\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.inProcess' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailItemsComponent.ctorParameters = function () { return [
            { type: OrderDetailsService }
        ]; };
        return OrderDetailItemsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
            })));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
            })));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
                return {
                    title: textTitle,
                    textBold: payment.accountHolderName,
                    text: [payment.cardType.name, payment.cardNumber, textExpires],
                };
            })));
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 1), textTitle = _b[0];
                return {
                    title: textTitle,
                    textBold: shipping.name,
                    text: [shipping.description],
                };
            })));
        };
        OrderDetailShippingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-details-shipping',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailShippingComponent.ctorParameters = function () { return [
            { type: OrderDetailsService },
            { type: core$1.TranslationService }
        ]; };
        return OrderDetailShippingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'cx-order-details-totals',
                        template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderDetailTotalsComponent.ctorParameters = function () { return [
            { type: OrderDetailsService }
        ]; };
        return OrderDetailTotalsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moduleComponents = [
        OrderDetailHeadlineComponent,
        OrderDetailItemsComponent,
        OrderDetailTotalsComponent,
        OrderDetailShippingComponent,
    ];
    var ɵ0$2 = { cxRoute: 'orderDetails' };
    var OrderDetailsModule = /** @class */ (function () {
        function OrderDetailsModule() {
        }
        OrderDetailsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            CartSharedModule,
                            CardModule,
                            common.CommonModule,
                            core$1.I18nModule,
                            router.RouterModule.forChild([
                                {
                                    path: null,
                                    canActivate: [core$1.AuthGuard, CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ0$2,
                                },
                            ]),
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    AccountOrderDetailsHeadlineComponent: {
                                        component: OrderDetailHeadlineComponent,
                                    },
                                    AccountOrderDetailsItemsComponent: {
                                        component: OrderDetailItemsComponent,
                                    },
                                    AccountOrderDetailsTotalsComponent: {
                                        component: OrderDetailTotalsComponent,
                                    },
                                    AccountOrderDetailsShippingComponent: {
                                        component: OrderDetailShippingComponent,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderHistoryComponent = /** @class */ (function () {
        function OrderHistoryComponent(routing, userOrderService, translation) {
            this.routing = routing;
            this.userOrderService = userOrderService;
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
            this.orders$ = this.userOrderService
                .getOrderHistoryList(this.PAGE_SIZE)
                .pipe(operators.tap((/**
             * @param {?} orders
             * @return {?}
             */
            function (orders) {
                if (orders.pagination) {
                    _this.sortType = orders.pagination.sort;
                }
            })));
            this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
        };
        /**
         * @return {?}
         */
        OrderHistoryComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.userOrderService.clearOrderList();
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
                cxRoute: 'orderDetails',
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), textByDate = _b[0], textByOrderNumber = _b[1];
                return {
                    byDate: textByDate,
                    byOrderNumber: textByOrderNumber,
                };
            })));
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
            this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
        };
        OrderHistoryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-history',
                        template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        OrderHistoryComponent.ctorParameters = function () { return [
            { type: core$1.RoutingService },
            { type: core$1.UserOrderService },
            { type: core$1.TranslationService }
        ]; };
        return OrderHistoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderHistoryModule = /** @class */ (function () {
        function OrderHistoryModule() {
        }
        OrderHistoryModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    AccountOrderHistoryComponent: {
                                        component: OrderHistoryComponent,
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            router.RouterModule,
                            forms.FormsModule,
                            ngSelect.NgSelectModule,
                            ListNavigationModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                        ],
                        declarations: [OrderHistoryComponent],
                        exports: [OrderHistoryComponent],
                        providers: [core$1.UserService],
                        entryComponents: [OrderHistoryComponent],
                    },] }
        ];
        return OrderHistoryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderModule = /** @class */ (function () {
        function OrderModule() {
        }
        OrderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [OrderHistoryModule, OrderDetailsModule],
                    },] }
        ];
        return OrderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodsComponent = /** @class */ (function () {
        function PaymentMethodsComponent(userPaymentService, translation) {
            this.userPaymentService = userPaymentService;
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
            this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(operators.tap((/**
             * @param {?} paymentDetails
             * @return {?}
             */
            function (paymentDetails) {
                // Set first payment method to DEFAULT if none is set
                if (paymentDetails.length > 0 &&
                    !paymentDetails.find((/**
                     * @param {?} paymentDetail
                     * @return {?}
                     */
                    function (paymentDetail) { return paymentDetail.defaultPayment; }))) {
                    _this.setDefaultPaymentMethod(paymentDetails[0]);
                }
            })));
            this.editCard = null;
            this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
            this.userPaymentService.loadPaymentMethods();
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
            })));
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
            this.userPaymentService.deletePaymentMethod(paymentMethod.id);
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
            this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
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
            { type: core.Component, args: [{
                        selector: 'cx-payment-methods',
                        template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        PaymentMethodsComponent.ctorParameters = function () { return [
            { type: core$1.UserPaymentService },
            { type: core$1.TranslationService }
        ]; };
        return PaymentMethodsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaymentMethodsModule = /** @class */ (function () {
        function PaymentMethodsModule() {
        }
        PaymentMethodsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CardModule,
                            SpinnerModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    AccountPaymentDetailsComponent: {
                                        component: PaymentMethodsComponent,
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            core$1.I18nModule,
                        ],
                        providers: [core$1.UserService],
                        declarations: [PaymentMethodsComponent],
                        exports: [PaymentMethodsComponent],
                        entryComponents: [PaymentMethodsComponent],
                    },] }
        ];
        return PaymentMethodsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return (_this.token = state.state.queryParams['token']); })));
            this.subscription.add(this.userService.isPasswordReset().subscribe((/**
             * @param {?} reset
             * @return {?}
             */
            function (reset) {
                if (reset) {
                    _this.routingService.go({ cxRoute: 'login' });
                }
            })));
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
            { type: core.Component, args: [{
                        selector: 'cx-reset-password-form',
                        template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
                    }] }
        ];
        /** @nocollapse */
        ResetPasswordFormComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: core$1.RoutingService },
            { type: core$1.UserService }
        ]; };
        return ResetPasswordFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordModule = /** @class */ (function () {
        function ResetPasswordModule() {
        }
        ResetPasswordModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ResetPasswordComponent: {
                                        component: ResetPasswordFormComponent,
                                        guards: [core$1.NotAuthGuard],
                                    },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateEmailFormComponent = /** @class */ (function () {
        function UpdateEmailFormComponent(fb) {
            this.fb = fb;
            this.submited = false;
            this.saveEmail = new core.EventEmitter();
            this.cancelEmail = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'cx-update-email-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"off\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdateEmailFormComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        UpdateEmailFormComponent.propDecorators = {
            saveEmail: [{ type: core.Output }],
            cancelEmail: [{ type: core.Output }]
        };
        return UpdateEmailFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.subscription.add(this.userService
                .getUpdateEmailResultSuccess()
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) { return _this.onSuccess(success); })));
            this.isLoading$ = this.userService.getUpdateEmailResultLoading();
        };
        /**
         * @return {?}
         */
        UpdateEmailComponent.prototype.onCancel = /**
         * @return {?}
         */
        function () {
            this.routingService.go({ cxRoute: 'home' });
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
            this.userService.updateEmail(password, newUid);
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
                this.globalMessageService.add({
                    key: 'updateEmailForm.emailUpdateSuccess',
                    params: { newUid: this.newUid },
                }, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.authService.logout();
                this.routingService.go({ cxRoute: 'login' });
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
            { type: core.Component, args: [{
                        selector: 'cx-update-email',
                        template: "<ng-container>\n  <div *ngIf=\"(isLoading$ | async); else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdateEmailComponent.ctorParameters = function () { return [
            { type: core$1.RoutingService },
            { type: core$1.GlobalMessageService },
            { type: core$1.UserService },
            { type: core$1.AuthService }
        ]; };
        return UpdateEmailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateEmailModule = /** @class */ (function () {
        function UpdateEmailModule() {
        }
        UpdateEmailModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    UpdateEmailComponent: {
                                        component: UpdateEmailComponent,
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            SpinnerModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePasswordFormComponent = /** @class */ (function () {
        function UpdatePasswordFormComponent(fb) {
            this.fb = fb;
            this.submitClicked = false;
            this.submited = new core.EventEmitter();
            this.cancelled = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'cx-update-password-form',
                        template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdatePasswordFormComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        UpdatePasswordFormComponent.propDecorators = {
            submited: [{ type: core.Output }],
            cancelled: [{ type: core.Output }]
        };
        return UpdatePasswordFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.subscription.add(this.userService
                .getUpdatePasswordResultSuccess()
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) { return _this.onSuccess(success); })));
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
                this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.routingService.go({ cxRoute: 'home' });
            }
        };
        /**
         * @return {?}
         */
        UpdatePasswordComponent.prototype.onCancel = /**
         * @return {?}
         */
        function () {
            this.routingService.go({ cxRoute: 'home' });
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
            this.userService.updatePassword(oldPassword, newPassword);
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
            { type: core.Component, args: [{
                        selector: 'cx-update-password',
                        template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdatePasswordComponent.ctorParameters = function () { return [
            { type: core$1.RoutingService },
            { type: core$1.UserService },
            { type: core$1.GlobalMessageService }
        ]; };
        return UpdatePasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePasswordModule = /** @class */ (function () {
        function UpdatePasswordModule() {
        }
        UpdatePasswordModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    UpdatePasswordComponent: {
                                        component: UpdatePasswordComponent,
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            SpinnerModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateProfileFormComponent = /** @class */ (function () {
        function UpdateProfileFormComponent(fb) {
            this.fb = fb;
            this.submited = new core.EventEmitter();
            this.cancelled = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'cx-update-profile-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdateProfileFormComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        UpdateProfileFormComponent.propDecorators = {
            user: [{ type: core.Input }],
            titles: [{ type: core.Input }],
            submited: [{ type: core.Output }],
            cancelled: [{ type: core.Output }]
        };
        return UpdateProfileFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.titles$ = this.userService.getTitles().pipe(operators.tap((/**
             * @param {?} titles
             * @return {?}
             */
            function (titles) {
                if (Object.keys(titles).length === 0) {
                    _this.userService.loadTitles();
                }
            })));
            this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
            this.subscription.add(this.userService
                .getUpdatePersonalDetailsResultSuccess()
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) { return _this.onSuccess(success); })));
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
                this.globalMessageService.add({ key: 'updateProfileForm.profileUpdateSuccess' }, core$1.GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.routingService.go({ cxRoute: 'home' });
            }
        };
        /**
         * @return {?}
         */
        UpdateProfileComponent.prototype.onCancel = /**
         * @return {?}
         */
        function () {
            this.routingService.go({ cxRoute: 'home' });
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
            var userUpdates = _a.userUpdates;
            this.userService.updatePersonalDetails(userUpdates);
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
            { type: core.Component, args: [{
                        selector: 'cx-update-profile',
                        template: "<ng-container>\n  <div *ngIf=\"(loading$ | async); else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdateProfileComponent.ctorParameters = function () { return [
            { type: core$1.RoutingService },
            { type: core$1.UserService },
            { type: core$1.GlobalMessageService }
        ]; };
        return UpdateProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateProfileModule = /** @class */ (function () {
        function UpdateProfileModule() {
        }
        UpdateProfileModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    UpdateProfileComponent: {
                                        component: UpdateProfileComponent,
                                        guards: [core$1.AuthGuard],
                                    },
                                },
                            }))),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            SpinnerModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(component, pageMetaService, translation) {
            this.component = component;
            this.pageMetaService = pageMetaService;
            this.translation = translation;
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
            this.title$ = this.pageMetaService.getMeta().pipe(operators.filter(Boolean), operators.map((/**
             * @param {?} meta
             * @return {?}
             */
            function (meta) { return meta.heading || meta.title; })));
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
            this.crumbs$ = rxjs.combineLatest(this.pageMetaService.getMeta(), this.translation.translate('common.home')).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), meta = _b[0], textHome = _b[1];
                return meta.breadcrumbs ? meta.breadcrumbs : [{ label: textHome, link: '/' }];
            })));
        };
        BreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-breadcrumb',
                        template: "<nav>\n  <span *ngFor=\"let crumb of (crumbs$ | async)\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: core$1.PageMetaService },
            { type: core$1.TranslationService }
        ]; };
        return BreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    BreadcrumbComponent: {
                                        component: BreadcrumbComponent,
                                    },
                                },
                            }))),
                            core$1.CmsPageTitleModule,
                        ],
                        declarations: [BreadcrumbComponent],
                        entryComponents: [BreadcrumbComponent],
                    },] }
        ];
        return BreadcrumbModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationService = /** @class */ (function () {
        function NavigationService(cmsService, semanticPathService) {
            this.cmsService = cmsService;
            this.semanticPathService = semanticPathService;
        }
        /**
         * @param {?} data$
         * @return {?}
         */
        NavigationService.prototype.createNavigation = /**
         * @param {?} data$
         * @return {?}
         */
        function (data$) {
            return rxjs.combineLatest([data$, this.getNavigationNode(data$)]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), data = _b[0], nav = _b[1];
                return {
                    title: data.name,
                    children: [nav],
                };
            })));
        };
        /**
         * @param {?} data$
         * @return {?}
         */
        NavigationService.prototype.getNavigationNode = /**
         * @param {?} data$
         * @return {?}
         */
        function (data$) {
            var _this = this;
            if (!data$) {
                return rxjs.of();
            }
            return data$.pipe(operators.filter(Boolean), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var navigation = data.navigationNode ? data.navigationNode : data;
                return _this.cmsService.getNavigationEntryItems(navigation.uid).pipe(operators.tap((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) {
                    if (items === undefined) {
                        _this.getNavigationEntryItems(navigation, true);
                    }
                })), operators.filter(Boolean), operators.map((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) { return _this.createNode(navigation, items); })));
            })));
        };
        /**
         * Get all navigation entry items' type and id. Dispatch action to load all these items
         * @param nodeData
         * @param root
         * @param itemsList
         */
        /**
         * Get all navigation entry items' type and id. Dispatch action to load all these items
         * @private
         * @param {?} nodeData
         * @param {?} root
         * @param {?=} itemsList
         * @return {?}
         */
        NavigationService.prototype.getNavigationEntryItems = /**
         * Get all navigation entry items' type and id. Dispatch action to load all these items
         * @private
         * @param {?} nodeData
         * @param {?} root
         * @param {?=} itemsList
         * @return {?}
         */
        function (nodeData, root, itemsList) {
            if (itemsList === void 0) { itemsList = []; }
            if (nodeData.entries && nodeData.entries.length > 0) {
                nodeData.entries.forEach((/**
                 * @param {?} entry
                 * @return {?}
                 */
                function (entry) {
                    itemsList.push({
                        superType: entry.itemSuperType,
                        id: entry.itemId,
                    });
                }));
            }
            if (nodeData.children && nodeData.children.length > 0) {
                this.processChildren(nodeData, itemsList);
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
        NavigationService.prototype.processChildren = /**
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Create a new node tree for display
         * @param nodeData
         * @param items
         */
        /**
         * Create a new node tree for display
         * @private
         * @param {?} nodeData
         * @param {?} items
         * @return {?}
         */
        NavigationService.prototype.createNode = /**
         * Create a new node tree for display
         * @private
         * @param {?} nodeData
         * @param {?} items
         * @return {?}
         */
        function (nodeData, items) {
            /** @type {?} */
            var node = {};
            node.title = nodeData.title;
            if (nodeData.entries && nodeData.entries.length > 0) {
                this.addLinkToNode(node, nodeData.entries[0], items);
            }
            if (nodeData.children && nodeData.children.length > 0) {
                /** @type {?} */
                var children = this.createChildren(nodeData, items);
                node.children = children;
            }
            return node;
        };
        /**
         * @private
         * @param {?} node
         * @param {?} entry
         * @param {?} items
         * @return {?}
         */
        NavigationService.prototype.addLinkToNode = /**
         * @private
         * @param {?} node
         * @param {?} entry
         * @param {?} items
         * @return {?}
         */
        function (node, entry, items) {
            /** @type {?} */
            var item = items[entry.itemId + "_" + entry.itemSuperType];
            // now we only consider CMSLinkComponent
            if (entry.itemType === 'CMSLinkComponent' && item !== undefined) {
                if (!node.title) {
                    node.title = item.linkName;
                }
                node.url = this.getLink(item);
                // if "NEWWINDOW", target is true
                node.target = item.target;
            }
        };
        /**
         *
         * Gets the URL or link to a related item (category)
         */
        /**
         *
         * Gets the URL or link to a related item (category)
         * @private
         * @param {?} item
         * @return {?}
         */
        NavigationService.prototype.getLink = /**
         *
         * Gets the URL or link to a related item (category)
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.url) {
                return item.url;
            }
            else if (item.categoryCode) {
                return this.semanticPathService.transform({
                    cxRoute: 'category',
                    params: {
                        code: item.categoryCode,
                        name: item.name,
                    },
                });
            }
        };
        /**
         * @private
         * @param {?} node
         * @param {?} items
         * @return {?}
         */
        NavigationService.prototype.createChildren = /**
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return children;
        };
        NavigationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        NavigationService.ctorParameters = function () { return [
            { type: core$1.CmsService },
            { type: core$1.SemanticPathService }
        ]; };
        /** @nocollapse */ NavigationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(core.ɵɵinject(core$1.CmsService), core.ɵɵinject(core$1.SemanticPathService)); }, token: NavigationService, providedIn: "root" });
        return NavigationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryNavigationComponent = /** @class */ (function () {
        function CategoryNavigationComponent(componentData, service) {
            this.componentData = componentData;
            this.service = service;
            this.node$ = this.service.getNavigationNode(this.componentData.data$);
            this.data$ = this.componentData.data$;
        }
        CategoryNavigationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-category-navigation',
                        template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [ngClass]=\"(data$ | async).styleClass\"\n  [wrapAfter]=\"(data$ | async).wrapAfter\"\n></cx-navigation-ui>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CategoryNavigationComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: NavigationService }
        ]; };
        return CategoryNavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationUIComponent = /** @class */ (function () {
        function NavigationUIComponent(router$1, renderer) {
            var _this = this;
            this.router = router$1;
            this.renderer = renderer;
            /**
             * the icon type that will be used for navigation nodes
             * with children.
             */
            this.iconType = ICON_TYPE;
            /**
             * Indicates whether the navigation should support flyout.
             * If flyout is set to true, the
             * nested child navitation nodes will only appear on hover or focus.
             */
            this.flyout = true;
            this.isOpen = false;
            this.openNodes = [];
            this.router.events
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationEnd; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.clear(); }));
        }
        /**
         * @param {?} event
         * @return {?}
         */
        NavigationUIComponent.prototype.toggleOpen = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.openNodes.includes((/** @type {?} */ (event.currentTarget)))) {
                this.openNodes = this.openNodes.filter((/**
                 * @param {?} n
                 * @return {?}
                 */
                function (n) { return n !== event.currentTarget; }));
                this.renderer.removeClass((/** @type {?} */ (event.currentTarget)), 'is-open');
            }
            else {
                this.openNodes.push((/** @type {?} */ (event.currentTarget)));
            }
            this.updateClasses();
            event.stopImmediatePropagation();
            event.stopPropagation();
        };
        /**
         * @return {?}
         */
        NavigationUIComponent.prototype.back = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
            this.openNodes.pop();
            this.updateClasses();
        };
        /**
         * @return {?}
         */
        NavigationUIComponent.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.openNodes = [];
            this.updateClasses();
        };
        /**
         * @private
         * @return {?}
         */
        NavigationUIComponent.prototype.updateClasses = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.openNodes.forEach((/**
             * @param {?} node
             * @param {?} i
             * @return {?}
             */
            function (node, i) {
                if (i + 1 < _this.openNodes.length) {
                    _this.renderer.addClass(node, 'is-opened');
                    _this.renderer.removeClass(node, 'is-open');
                }
                else {
                    _this.renderer.removeClass(node, 'is-opened');
                    _this.renderer.addClass(node, 'is-open');
                }
            }));
            this.isOpen = this.openNodes.length > 0;
        };
        /**
         * @param {?} node
         * @param {?=} depth
         * @return {?}
         */
        NavigationUIComponent.prototype.getDepth = /**
         * @param {?} node
         * @param {?=} depth
         * @return {?}
         */
        function (node, depth) {
            var _this = this;
            if (depth === void 0) { depth = 0; }
            if (node.children && node.children.length > 0) {
                return Math.max.apply(Math, __spread(node.children.map((/**
                 * @param {?} n
                 * @return {?}
                 */
                function (n) { return _this.getDepth(n, depth + 1); }))));
            }
            else {
                return depth;
            }
        };
        NavigationUIComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-navigation-ui',
                        template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav tabindex=\"0\" (click)=\"toggleOpen($event)\">\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link *ngIf=\"node.url\" [url]=\"node.url\" class=\"all\">\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NavigationUIComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: core.Renderer2 }
        ]; };
        NavigationUIComponent.propDecorators = {
            node: [{ type: core.Input }],
            wrapAfter: [{ type: core.Input }],
            flyout: [{ type: core.Input }, { type: core.HostBinding, args: ['class.flyout',] }],
            isOpen: [{ type: core.Input }, { type: core.HostBinding, args: ['class.is-open',] }]
        };
        return NavigationUIComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationComponent = /** @class */ (function () {
        function NavigationComponent(componentData, service) {
            this.componentData = componentData;
            this.service = service;
            this.node$ = this.service.createNavigation(this.componentData.data$);
            this.styleClass$ = this.componentData.data$.pipe(operators.map((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.styleClass; })));
        }
        NavigationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-navigation',
                        template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NavigationComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: NavigationService }
        ]; };
        return NavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationModule = /** @class */ (function () {
        function NavigationModule() {
        }
        NavigationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            IconModule,
                            GenericLinkModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    NavigationComponent: {
                                        component: NavigationComponent,
                                    },
                                },
                            }))),
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CategoryNavigationModule = /** @class */ (function () {
        function CategoryNavigationModule() {
        }
        CategoryNavigationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            NavigationModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CategoryNavigationComponent: {
                                        component: CategoryNavigationComponent,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterNavigationComponent = /** @class */ (function () {
        function FooterNavigationComponent(componentData, service) {
            this.componentData = componentData;
            this.service = service;
            this.node$ = this.service.getNavigationNode(this.componentData.data$);
            this.styleClass$ = this.componentData.data$.pipe(operators.map((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.styleClass; })));
            this.data$ = this.componentData.data$;
        }
        FooterNavigationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-footer-navigation',
                        template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"(data$ | async) as data\">\n  {{ data.notice }}\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FooterNavigationComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: NavigationService }
        ]; };
        return FooterNavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterNavigationModule = /** @class */ (function () {
        function FooterNavigationModule() {
        }
        FooterNavigationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            NavigationModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    FooterNavigationComponent: {
                                        component: FooterNavigationComponent,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
    var SearchBoxComponentService = /** @class */ (function () {
        function SearchBoxComponentService(searchService, routingService, translationService, winRef) {
            this.searchService = searchService;
            this.routingService = routingService;
            this.translationService = translationService;
            this.winRef = winRef;
        }
        /**
         * Executes the search for products and suggestions,
         * unless the configuration is setup to not search for
         * products or suggestions.
         */
        /**
         * Executes the search for products and suggestions,
         * unless the configuration is setup to not search for
         * products or suggestions.
         * @param {?} query
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.search = /**
         * Executes the search for products and suggestions,
         * unless the configuration is setup to not search for
         * products or suggestions.
         * @param {?} query
         * @param {?} config
         * @return {?}
         */
        function (query, config) {
            if (!query || query === '') {
                this.clearResults();
                return;
            }
            if (config.minCharactersBeforeRequest &&
                query.length < config.minCharactersBeforeRequest) {
                return;
            }
            if (config.displayProducts) {
                this.searchService.search(query, {
                    pageSize: config.maxProducts,
                });
            }
            if (config.displaySuggestions) {
                this.searchService.searchSuggestions(query, {
                    pageSize: config.maxSuggestions,
                });
            }
        };
        /**
         * Returns an observable with the SearchResults. When there's any
         * result, the body tag will get a classname, so that specific style
         * rules can be applied.
         */
        /**
         * Returns an observable with the SearchResults. When there's any
         * result, the body tag will get a classname, so that specific style
         * rules can be applied.
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.getResults = /**
         * Returns an observable with the SearchResults. When there's any
         * result, the body tag will get a classname, so that specific style
         * rules can be applied.
         * @param {?} config
         * @return {?}
         */
        function (config) {
            var _this = this;
            return rxjs.combineLatest(this.getProductResults(config), this.getProductSuggestions(config), this.getSearchMessage(config)).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
                return {
                    products: productResults ? productResults.products : null,
                    suggestions: suggestions,
                    message: message,
                };
            })), operators.tap((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                return _this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, _this.hasResults(results));
            })));
        };
        /**
         * Clears the searchbox results, so that old values are
         * no longer emited upon next search.
         */
        /**
         * Clears the searchbox results, so that old values are
         * no longer emited upon next search.
         * @return {?}
         */
        SearchBoxComponentService.prototype.clearResults = /**
         * Clears the searchbox results, so that old values are
         * no longer emited upon next search.
         * @return {?}
         */
        function () {
            this.searchService.clearResults();
            this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
        };
        /**
         * @param {?} className
         * @return {?}
         */
        SearchBoxComponentService.prototype.hasBodyClass = /**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            return this.winRef.document.body.classList.contains(className);
        };
        /**
         * @param {?} className
         * @param {?=} add
         * @return {?}
         */
        SearchBoxComponentService.prototype.toggleBodyClass = /**
         * @param {?} className
         * @param {?=} add
         * @return {?}
         */
        function (className, add) {
            if (add === undefined) {
                this.winRef.document.body.classList.toggle(className);
            }
            else {
                add
                    ? this.winRef.document.body.classList.add(className)
                    : this.winRef.document.body.classList.remove(className);
            }
        };
        /**
         * @private
         * @param {?} results
         * @return {?}
         */
        SearchBoxComponentService.prototype.hasResults = /**
         * @private
         * @param {?} results
         * @return {?}
         */
        function (results) {
            return ((!!results.products && results.products.length > 0) ||
                (!!results.suggestions && results.suggestions.length > 0) ||
                !!results.message);
        };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.getProductResults = /**
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            if (config.displayProducts) {
                return this.searchService.getResults();
            }
            else {
                return rxjs.of({});
            }
        };
        /**
         * Loads suggestions from the backend. In case there's no suggestion
         * available, we try to get an exact match suggestion.
         */
        /**
         * Loads suggestions from the backend. In case there's no suggestion
         * available, we try to get an exact match suggestion.
         * @private
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.getProductSuggestions = /**
         * Loads suggestions from the backend. In case there's no suggestion
         * available, we try to get an exact match suggestion.
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            var _this = this;
            if (!config.displaySuggestions) {
                return rxjs.of([]);
            }
            else {
                return this.searchService.getSuggestionResults().pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return res.map((/**
                 * @param {?} suggestion
                 * @return {?}
                 */
                function (suggestion) { return suggestion.value; })); })), operators.switchMap((/**
                 * @param {?} suggestions
                 * @return {?}
                 */
                function (suggestions) {
                    if (suggestions.length === 0) {
                        return _this.getExactSuggestion(config).pipe(operators.map((/**
                         * @param {?} match
                         * @return {?}
                         */
                        function (match) { return (match ? [match] : []); })));
                    }
                    else {
                        return rxjs.of(suggestions);
                    }
                })));
            }
        };
        /**
         * whenever there is at least 1 product, we simulate
         * a suggestion to provide easy access to the search result page
         */
        /**
         * whenever there is at least 1 product, we simulate
         * a suggestion to provide easy access to the search result page
         * @private
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.getExactSuggestion = /**
         * whenever there is at least 1 product, we simulate
         * a suggestion to provide easy access to the search result page
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            var _this = this;
            return this.getProductResults(config).pipe(operators.switchMap((/**
             * @param {?} productResult
             * @return {?}
             */
            function (productResult) {
                return productResult.products && productResult.products.length > 0
                    ? _this.fetchTranslation('searchBox.help.exactMatch', {
                        term: productResult.freeTextSearch,
                    })
                    : rxjs.of(null);
            })));
        };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        SearchBoxComponentService.prototype.getSearchMessage = /**
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            var _this = this;
            return rxjs.combineLatest(this.getProductResults(config), this.getProductSuggestions(config)).pipe(operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), productResult = _b[0], suggestions = _b[1];
                if (productResult &&
                    productResult.products &&
                    productResult.products.length === 0 &&
                    (suggestions && suggestions.length === 0)) {
                    return _this.fetchTranslation('searchBox.help.noMatch');
                }
                else {
                    return rxjs.of(null);
                }
            })));
        };
        /**
         * Navigates to the search result page with a given query
         */
        /**
         * Navigates to the search result page with a given query
         * @param {?} query
         * @return {?}
         */
        SearchBoxComponentService.prototype.launchSearchPage = /**
         * Navigates to the search result page with a given query
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this.routingService.go({
                cxRoute: 'search',
                params: { query: query },
            });
        };
        /**
         * @private
         * @param {?} translationKey
         * @param {?=} options
         * @return {?}
         */
        SearchBoxComponentService.prototype.fetchTranslation = /**
         * @private
         * @param {?} translationKey
         * @param {?=} options
         * @return {?}
         */
        function (translationKey, options) {
            return this.translationService.translate(translationKey, options);
        };
        SearchBoxComponentService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SearchBoxComponentService.ctorParameters = function () { return [
            { type: core$1.SearchboxService },
            { type: core$1.RoutingService },
            { type: core$1.TranslationService },
            { type: core$1.WindowRef }
        ]; };
        /** @nocollapse */ SearchBoxComponentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(core.ɵɵinject(core$1.SearchboxService), core.ɵɵinject(core$1.RoutingService), core.ɵɵinject(core$1.TranslationService), core.ɵɵinject(core$1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
        return SearchBoxComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_SEARCHBOX_CONFIG = {
        minCharactersBeforeRequest: 1,
        displayProducts: true,
        displaySuggestions: true,
        maxProducts: 5,
        maxSuggestions: 5,
        displayProductImages: true,
    };
    var SearchBoxComponent = /** @class */ (function () {
        /**
         * The component data is optional, so that this component
         * can be reused without CMS integration.
         */
        function SearchBoxComponent(searchBoxComponentService, componentData) {
            var _this = this;
            this.searchBoxComponentService = searchBoxComponentService;
            this.componentData = componentData;
            this.iconTypes = ICON_TYPE;
            /**
             * In some occasions we need to ignore the close event,
             * for example when we click inside the search result section.
             */
            this.ignoreCloseEvent = false;
            this.results$ = this.config$.pipe(operators.tap((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return (_this.config = c); })), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.searchBoxComponentService.getResults(config); })));
        }
        Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
            /**
             * Sets the search box input field
             */
            set: /**
             * Sets the search box input field
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    this.search(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchBoxComponent.prototype, "config$", {
            /**
             * Returns the backend configuration or default configuration for the searchbox.
             */
            get: /**
             * Returns the backend configuration or default configuration for the searchbox.
             * @private
             * @return {?}
             */
            function () {
                if (this.componentData) {
                    return (/** @type {?} */ (this.componentData.data$.pipe(
                    // Since the backend returns string values (i.e. displayProducts: "true") for
                    // boolean values, we replace them with boolean values.
                    operators.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) {
                        return __assign({}, c, { displayProducts: (/** @type {?} */ (c.displayProducts)) === 'true' || c.displayProducts === true, displayProductImages: (/** @type {?} */ (c.displayProductImages)) === 'true' ||
                                c.displayProductImages === true, displaySuggestions: (/** @type {?} */ (c.displaySuggestions)) === 'true' ||
                                c.displaySuggestions === true });
                    })))));
                }
                else {
                    return rxjs.of(DEFAULT_SEARCHBOX_CONFIG);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Closes the searchbox and opens the search result page.
         */
        /**
         * Closes the searchbox and opens the search result page.
         * @param {?} query
         * @return {?}
         */
        SearchBoxComponent.prototype.search = /**
         * Closes the searchbox and opens the search result page.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this.searchBoxComponentService.search(query, this.config);
            // force the searchbox to open
            this.open();
        };
        /**
         * Opens the typeahead searchbox
         */
        /**
         * Opens the typeahead searchbox
         * @return {?}
         */
        SearchBoxComponent.prototype.open = /**
         * Opens the typeahead searchbox
         * @return {?}
         */
        function () {
            this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
        };
        /**
         * Closes the typehead searchbox.
         */
        /**
         * Closes the typehead searchbox.
         * @param {?} event
         * @return {?}
         */
        SearchBoxComponent.prototype.close = /**
         * Closes the typehead searchbox.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!this.ignoreCloseEvent) {
                this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
                if (event && event.target) {
                    ((/** @type {?} */ (event.target))).blur();
                }
            }
            this.ignoreCloseEvent = false;
        };
        /**
         * Especially in mobile we do not want the search icon
         * to focus the input again when it's already open.
         * */
        /**
         * Especially in mobile we do not want the search icon
         * to focus the input again when it's already open.
         *
         * @param {?} event
         * @return {?}
         */
        SearchBoxComponent.prototype.avoidReopen = /**
         * Especially in mobile we do not want the search icon
         * to focus the input again when it's already open.
         *
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
                this.close(event);
                event.preventDefault();
            }
        };
        /**
         * Opens the PLP with the given query.
         *
         * TODO: if there's a singe product match, we could open the PDP.
         */
        /**
         * Opens the PLP with the given query.
         *
         * TODO: if there's a singe product match, we could open the PDP.
         * @param {?} event
         * @param {?} query
         * @return {?}
         */
        SearchBoxComponent.prototype.launchSearchResult = /**
         * Opens the PLP with the given query.
         *
         * TODO: if there's a singe product match, we could open the PDP.
         * @param {?} event
         * @param {?} query
         * @return {?}
         */
        function (event, query) {
            this.close(event);
            this.searchBoxComponentService.launchSearchPage(query);
        };
        /**
         * Disables closing the search result list.
         */
        /**
         * Disables closing the search result list.
         * @return {?}
         */
        SearchBoxComponent.prototype.disableClose = /**
         * Disables closing the search result list.
         * @return {?}
         */
        function () {
            this.ignoreCloseEvent = true;
        };
        /**
         * Clears the search box input field
         */
        /**
         * Clears the search box input field
         * @param {?} el
         * @return {?}
         */
        SearchBoxComponent.prototype.clear = /**
         * Clears the search box input field
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.disableClose();
            el.value = '';
            this.searchBoxComponentService.clearResults();
        };
        SearchBoxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-searchbox',
                        template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"(results$ | async) as result\"\n  class=\"results\"\n  (click)=\"close($event)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SearchBoxComponent.ctorParameters = function () { return [
            { type: SearchBoxComponentService },
            { type: CmsComponentData, decorators: [{ type: core.Optional }] }
        ]; };
        SearchBoxComponent.propDecorators = {
            queryText: [{ type: core.Input, args: ['queryText',] }]
        };
        return SearchBoxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        /**
         * @param {?} text
         * @param {?=} match
         * @return {?}
         */
        HighlightPipe.prototype.transform = /**
         * @param {?} text
         * @param {?=} match
         * @return {?}
         */
        function (text, match) {
            if (!match) {
                return text;
            }
            return text.replace(match.trim(), "<span class=\"highlight\">" + match.trim() + "</span>");
        };
        HighlightPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'cxHighlight' },] }
        ];
        return HighlightPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchBoxModule = /** @class */ (function () {
        function SearchBoxModule() {
        }
        SearchBoxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            MediaModule,
                            core$1.ProductModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    SearchBoxComponent: {
                                        component: SearchBoxComponent,
                                    },
                                },
                            }))),
                            IconModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
                        ],
                        declarations: [SearchBoxComponent, HighlightPipe],
                        entryComponents: [SearchBoxComponent],
                        exports: [SearchBoxComponent],
                    },] }
        ];
        return SearchBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationItemsComponent = /** @class */ (function () {
        function OrderConfirmationItemsComponent(checkoutService) {
            this.checkoutService = checkoutService;
        }
        /**
         * @return {?}
         */
        OrderConfirmationItemsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.order$ = this.checkoutService.getOrderDetails();
        };
        /**
         * @return {?}
         */
        OrderConfirmationItemsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.checkoutService.clearCheckoutData();
        };
        OrderConfirmationItemsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-confirmation-items',
                        template: "<div class=\"cx-order-items container\" *ngIf=\"(order$ | async) as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [isReadOnly]=\"true\"\n  ></cx-cart-item-list>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        OrderConfirmationItemsComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutService }
        ]; };
        return OrderConfirmationItemsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationThankYouMessageComponent = /** @class */ (function () {
        function OrderConfirmationThankYouMessageComponent(checkoutService) {
            this.checkoutService = checkoutService;
        }
        /**
         * @return {?}
         */
        OrderConfirmationThankYouMessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.order$ = this.checkoutService.getOrderDetails();
        };
        /**
         * @return {?}
         */
        OrderConfirmationThankYouMessageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.checkoutService.clearCheckoutData();
        };
        OrderConfirmationThankYouMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-confirmation-thank-you-message',
                        template: "<header class=\"cx-page-header\" *ngIf=\"(order$ | async) as order\">\n  <h1 class=\"cx-page-title\">\n    {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n    {{ order.code }}\n  </h1>\n</header>\n\n<div class=\"cx-order-confirmation-message\">\n  <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n  <p>\n    {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n  </p>\n  <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n</div>\n\n<cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        OrderConfirmationThankYouMessageComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutService }
        ]; };
        return OrderConfirmationThankYouMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationOverviewComponent = /** @class */ (function () {
        function OrderConfirmationOverviewComponent(checkoutService, translation) {
            this.checkoutService = checkoutService;
            this.translation = translation;
        }
        /**
         * @return {?}
         */
        OrderConfirmationOverviewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.order$ = this.checkoutService.getOrderDetails();
        };
        /**
         * @return {?}
         */
        OrderConfirmationOverviewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.checkoutService.clearCheckoutData();
        };
        /**
         * @param {?} deliveryAddress
         * @return {?}
         */
        OrderConfirmationOverviewComponent.prototype.getAddressCardContent = /**
         * @param {?} deliveryAddress
         * @return {?}
         */
        function (deliveryAddress) {
            return this.translation.translate('addressCard.shipTo').pipe(operators.map((/**
             * @param {?} textTitle
             * @return {?}
             */
            function (textTitle) { return ({
                title: textTitle,
                textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
                text: [
                    deliveryAddress.line1,
                    deliveryAddress.line2,
                    deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                    deliveryAddress.phone,
                ],
            }); })));
        };
        /**
         * @param {?} deliveryMode
         * @return {?}
         */
        OrderConfirmationOverviewComponent.prototype.getDeliveryModeCardContent = /**
         * @param {?} deliveryMode
         * @return {?}
         */
        function (deliveryMode) {
            return this.translation.translate('checkoutShipping.shippingMethod').pipe(operators.map((/**
             * @param {?} textTitle
             * @return {?}
             */
            function (textTitle) { return ({
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            }); })));
        };
        /**
         * @param {?} billingAddress
         * @return {?}
         */
        OrderConfirmationOverviewComponent.prototype.getBillingAddressCardContent = /**
         * @param {?} billingAddress
         * @return {?}
         */
        function (billingAddress) {
            return this.translation.translate('addressCard.billTo').pipe(operators.map((/**
             * @param {?} textTitle
             * @return {?}
             */
            function (textTitle) { return ({
                title: textTitle,
                textBold: billingAddress.firstName + " " + billingAddress.lastName,
                text: [
                    billingAddress.line1,
                    billingAddress.line2,
                    billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                    billingAddress.phone,
                ],
            }); })));
        };
        /**
         * @param {?} payment
         * @return {?}
         */
        OrderConfirmationOverviewComponent.prototype.getPaymentInfoCardContent = /**
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
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
                return ({
                    title: textTitle,
                    textBold: payment.accountHolderName,
                    text: [payment.cardNumber, textExpires],
                });
            })));
        };
        OrderConfirmationOverviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-confirmation-overview',
                        template: "<div class=\"cx-order-review-summary\" *ngIf=\"(order$ | async) as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order.paymentInfo.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        OrderConfirmationOverviewComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutService },
            { type: core$1.TranslationService }
        ]; };
        return OrderConfirmationOverviewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationTotalsComponent = /** @class */ (function () {
        function OrderConfirmationTotalsComponent(checkoutService) {
            this.checkoutService = checkoutService;
        }
        /**
         * @return {?}
         */
        OrderConfirmationTotalsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.order$ = this.checkoutService.getOrderDetails();
        };
        /**
         * @return {?}
         */
        OrderConfirmationTotalsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.checkoutService.clearCheckoutData();
        };
        OrderConfirmationTotalsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-order-confirmation-totals',
                        template: "<div class=\"cx-order-summary container\" *ngIf=\"(order$ | async) as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        OrderConfirmationTotalsComponent.ctorParameters = function () { return [
            { type: core$1.CheckoutService }
        ]; };
        return OrderConfirmationTotalsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderConfirmationGuard = /** @class */ (function () {
        function OrderConfirmationGuard(checkoutService, router, semanticPathService) {
            this.checkoutService = checkoutService;
            this.router = router;
            this.semanticPathService = semanticPathService;
        }
        /**
         * @return {?}
         */
        OrderConfirmationGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.checkoutService.getOrderDetails().pipe(operators.map((/**
             * @param {?} orderDetails
             * @return {?}
             */
            function (orderDetails) {
                if (orderDetails && Object.keys(orderDetails).length !== 0) {
                    return true;
                }
                else {
                    return _this.router.parseUrl(_this.semanticPathService.get('orders'));
                }
            })));
        };
        OrderConfirmationGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        OrderConfirmationGuard.ctorParameters = function () { return [
            { type: core$1.CheckoutService },
            { type: router.Router },
            { type: core$1.SemanticPathService }
        ]; };
        /** @nocollapse */ OrderConfirmationGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(core.ɵɵinject(core$1.CheckoutService), core.ɵɵinject(router.Router), core.ɵɵinject(core$1.SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
        return OrderConfirmationGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var orderConfirmationComponents = [
        OrderConfirmationItemsComponent,
        OrderConfirmationOverviewComponent,
        OrderConfirmationThankYouMessageComponent,
        OrderConfirmationTotalsComponent,
    ];
    var OrderConfirmationModule = /** @class */ (function () {
        function OrderConfirmationModule() {
        }
        OrderConfirmationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CartSharedModule,
                            CardModule,
                            PwaModule,
                            core$1.CheckoutModule,
                            core$1.I18nModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    OrderConfirmationThankMessageComponent: {
                                        component: OrderConfirmationThankYouMessageComponent,
                                        guards: [core$1.AuthGuard, OrderConfirmationGuard],
                                    },
                                    OrderConfirmationItemsComponent: {
                                        component: OrderConfirmationItemsComponent,
                                        guards: [core$1.AuthGuard, OrderConfirmationGuard],
                                    },
                                    OrderConfirmationTotalsComponent: {
                                        component: OrderConfirmationTotalsComponent,
                                        guards: [core$1.AuthGuard, OrderConfirmationGuard],
                                    },
                                    OrderConfirmationOverviewComponent: {
                                        component: OrderConfirmationOverviewComponent,
                                        guards: [core$1.AuthGuard, OrderConfirmationGuard],
                                    },
                                },
                            }))),
                        ],
                        declarations: __spread(orderConfirmationComponents),
                        exports: __spread(orderConfirmationComponents),
                        entryComponents: __spread(orderConfirmationComponents),
                    },] }
        ];
        return OrderConfirmationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductCarouselService = /** @class */ (function () {
        function ProductCarouselService(productService, referenceService, semanticPathService) {
            this.productService = productService;
            this.referenceService = referenceService;
            this.semanticPathService = semanticPathService;
        }
        /**
         * Loads the product data and converts it `CarouselItem`.
         */
        /**
         * Loads the product data and converts it `CarouselItem`.
         * @param {?} code
         * @return {?}
         */
        ProductCarouselService.prototype.loadProduct = /**
         * Loads the product data and converts it `CarouselItem`.
         * @param {?} code
         * @return {?}
         */
        function (code) {
            var _this = this;
            return this.productService.get(code).pipe(operators.filter(Boolean), operators.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return _this.convertProduct(product); })));
        };
        /**
         * @param {?} code
         * @param {?} referenceType
         * @param {?} displayTitle
         * @param {?} displayProductPrices
         * @return {?}
         */
        ProductCarouselService.prototype.getProductReferences = /**
         * @param {?} code
         * @param {?} referenceType
         * @param {?} displayTitle
         * @param {?} displayProductPrices
         * @return {?}
         */
        function (code, referenceType, displayTitle, displayProductPrices) {
            var _this = this;
            return this.referenceService.get(code, referenceType).pipe(operators.filter(Boolean), operators.map((/**
             * @param {?} refs
             * @return {?}
             */
            function (refs) {
                return refs.map((/**
                 * @param {?} ref
                 * @return {?}
                 */
                function (ref) {
                    return _this.convertProduct(ref.target, displayTitle, displayProductPrices);
                }));
            })));
        };
        /**
         * Converts the product to a generic CarouselItem
         */
        /**
         * Converts the product to a generic CarouselItem
         * @private
         * @param {?} source
         * @param {?=} displayTitle
         * @param {?=} displayProductPrices
         * @return {?}
         */
        ProductCarouselService.prototype.convertProduct = /**
         * Converts the product to a generic CarouselItem
         * @private
         * @param {?} source
         * @param {?=} displayTitle
         * @param {?=} displayProductPrices
         * @return {?}
         */
        function (source, displayTitle, displayProductPrices) {
            if (displayTitle === void 0) { displayTitle = true; }
            if (displayProductPrices === void 0) { displayProductPrices = true; }
            /** @type {?} */
            var item = {};
            if (displayTitle) {
                item.title = source.name;
            }
            if (displayProductPrices && source.price && source.price.formattedValue) {
                item.price = source.price.formattedValue;
            }
            if (source.images && source.images.PRIMARY) {
                item.media = {
                    container: source.images.PRIMARY,
                    format: 'product',
                };
            }
            item.route = this.semanticPathService.transform({
                cxRoute: 'product',
                params: source,
            });
            return item;
        };
        ProductCarouselService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ProductCarouselService.ctorParameters = function () { return [
            { type: core$1.ProductService },
            { type: core$1.ProductReferenceService },
            { type: core$1.SemanticPathService }
        ]; };
        /** @nocollapse */ ProductCarouselService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(core.ɵɵinject(core$1.ProductService), core.ɵɵinject(core$1.ProductReferenceService), core.ɵɵinject(core$1.SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
        return ProductCarouselService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductCarouselComponent = /** @class */ (function () {
        function ProductCarouselComponent(component, service) {
            var _this = this;
            this.component = component;
            this.service = service;
            this.title$ = this.component.data$.pipe(operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.title; })));
            this.items$ = this.component.data$.pipe(operators.filter(Boolean), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.productCodes.split(' '); })), operators.map((/**
             * @param {?} codes
             * @return {?}
             */
            function (codes) { return codes.map((/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return _this.service.loadProduct(code); })); })), operators.switchMap((/**
             * @param {?} products$
             * @return {?}
             */
            function (products$) {
                return rxjs.combineLatest(products$);
            })));
        }
        ProductCarouselComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-carousel',
                        template: "<cx-carousel [items]=\"items$ | async\" [title]=\"title$ | async\"> </cx-carousel>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductCarouselComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: ProductCarouselService }
        ]; };
        return ProductCarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductCarouselModule = /** @class */ (function () {
        function ProductCarouselModule() {
        }
        ProductCarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CarouselModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductCarouselComponent: {
                                        component: ProductCarouselComponent,
                                    },
                                },
                            }))),
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReferencesComponent = /** @class */ (function () {
        function ProductReferencesComponent(component, service, current) {
            var _this = this;
            this.component = component;
            this.service = service;
            this.current = current;
            this.title$ = this.component.data$.pipe(operators.map((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.title; })));
            this.items$ = rxjs.combineLatest([this.productCode$, this.component.data$]).pipe(operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), code = _b[0], data = _b[1];
                return _this.service.getProductReferences(code, data.productReferenceTypes, Boolean(JSON.parse(data.displayProductTitles)), Boolean(JSON.parse(data.displayProductPrices)));
            })));
        }
        Object.defineProperty(ProductReferencesComponent.prototype, "productCode$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.current.getProduct().pipe(operators.filter(Boolean), operators.map((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.code; })));
            },
            enumerable: true,
            configurable: true
        });
        ProductReferencesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-references',
                        template: "<cx-carousel [title]=\"title$ | async\" [items]=\"items$ | async\"> </cx-carousel>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductReferencesComponent.ctorParameters = function () { return [
            { type: CmsComponentData },
            { type: ProductCarouselService },
            { type: CurrentProductService }
        ]; };
        return ProductReferencesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReferencesModule = /** @class */ (function () {
        function ProductReferencesModule() {
        }
        ProductReferencesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            CarouselModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductReferencesComponent: {
                                        component: ProductReferencesComponent,
                                    },
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductIntroComponent = /** @class */ (function () {
        function ProductIntroComponent(currentProductService, translationService, winRef) {
            this.currentProductService = currentProductService;
            this.translationService = translationService;
            this.winRef = winRef;
            this.reviewsTabAvailable = new rxjs.BehaviorSubject(false);
            this.product$ = this.currentProductService.getProduct();
        }
        /**
         * @return {?}
         */
        ProductIntroComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
        function () {
            this.reviewsTabAvailable.next(!!this.getReviewsComponent());
        };
        // Scroll to views component on page and click "Reviews" tab
        // Scroll to views component on page and click "Reviews" tab
        /**
         * @return {?}
         */
        ProductIntroComponent.prototype.showReviews = 
        // Scroll to views component on page and click "Reviews" tab
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Use translated label for Reviews tab reference
            this.translationService
                .translate('CMSTabParagraphContainer.tabs.ProductReviewsTabComponent')
                .subscribe((/**
             * @param {?} reviewsTabLabel
             * @return {?}
             */
            function (reviewsTabLabel) {
                /** @type {?} */
                var tabsComponent = _this.getTabsComponent();
                /** @type {?} */
                var reviewsTab = _this.getTabByLabel(reviewsTabLabel, tabsComponent);
                /** @type {?} */
                var reviewsComponent = _this.getReviewsComponent();
                if (reviewsTab && reviewsComponent) {
                    _this.clickTabIfInactive(reviewsTab);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return reviewsComponent.scrollIntoView({ behavior: 'smooth' }); }), 0);
                }
            }))
                .unsubscribe();
        };
        // NOTE: Does not currently exists as its own component
        // but part of tabs component. This is likely to change in refactor.
        // NOTE: Does not currently exists as its own component
        // but part of tabs component. This is likely to change in refactor.
        /**
         * @private
         * @return {?}
         */
        ProductIntroComponent.prototype.getReviewsComponent = 
        // NOTE: Does not currently exists as its own component
        // but part of tabs component. This is likely to change in refactor.
        /**
         * @private
         * @return {?}
         */
        function () {
            return this.winRef.document.querySelector('cx-product-reviews');
        };
        // Get Tabs Component if exists on page
        // Get Tabs Component if exists on page
        /**
         * @private
         * @return {?}
         */
        ProductIntroComponent.prototype.getTabsComponent = 
        // Get Tabs Component if exists on page
        /**
         * @private
         * @return {?}
         */
        function () {
            return this.winRef.document.querySelector('cx-tab-paragraph-container');
        };
        // Click to activate tab if not already active
        // Click to activate tab if not already active
        /**
         * @private
         * @param {?} tab
         * @return {?}
         */
        ProductIntroComponent.prototype.clickTabIfInactive = 
        // Click to activate tab if not already active
        /**
         * @private
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            if (!tab.classList.contains('active') ||
                tab.classList.contains('toggled')) {
                tab.click();
            }
        };
        // Get Tab by label if exists on page
        // Get Tab by label if exists on page
        /**
         * @private
         * @param {?} label
         * @param {?} tabsComponent
         * @return {?}
         */
        ProductIntroComponent.prototype.getTabByLabel = 
        // Get Tab by label if exists on page
        /**
         * @private
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
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        ProductIntroComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-intro',
                        template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"(reviewsTabAvailable | async)\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductIntroComponent.ctorParameters = function () { return [
            { type: CurrentProductService },
            { type: core$1.TranslationService },
            { type: core$1.WindowRef }
        ]; };
        return ProductIntroComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductIntroModule = /** @class */ (function () {
        function ProductIntroModule() {
        }
        ProductIntroModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.I18nModule,
                            StarRatingModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductIntroComponent: {
                                        component: ProductIntroComponent,
                                    },
                                },
                            }))),
                        ],
                        declarations: [ProductIntroComponent],
                        entryComponents: [ProductIntroComponent],
                    },] }
        ];
        return ProductIntroModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ViewModes = {
        Grid: 'grid',
        List: 'list',
    };
    var ProductViewComponent = /** @class */ (function () {
        function ProductViewComponent() {
            this.iconTypes = ICON_TYPE;
            this.modeChange = new core.EventEmitter();
        }
        Object.defineProperty(ProductViewComponent.prototype, "buttonClass", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var viewName = this.viewMode.toLowerCase();
                return "cx-product-" + viewName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewComponent.prototype, "viewMode", {
            /**
             *   Display icons inversely to allow users
             *   to see the view they will navigate to
             */
            get: /**
             *   Display icons inversely to allow users
             *   to see the view they will navigate to
             * @return {?}
             */
            function () {
                if (this.mode === 'list') {
                    return this.iconTypes.GRID;
                }
                else if (this.mode === 'grid') {
                    return this.iconTypes.LIST;
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
            { type: core.Component, args: [{
                        selector: 'cx-product-view',
                        template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\">\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.GRID\"\n      [type]=\"iconTypes.GRID\"\n    ></cx-icon>\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.LIST\"\n      [type]=\"iconTypes.LIST\"\n    ></cx-icon>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductViewComponent.propDecorators = {
            mode: [{ type: core.Input }],
            modeChange: [{ type: core.Output }]
        };
        return ProductViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.updateParams$ = this.activatedRoute.params.pipe(operators.tap((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.categoryCode = params.categoryCode;
                _this.brandCode = params.brandCode;
                _this.query = params.query;
                _this.update();
            })));
            this.pageLayoutService.templateName$.pipe(operators.take(1)).subscribe((/**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                _this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
            }));
            // clean previous search result
            this.productSearchService.clearResults();
            this.model$ = this.productSearchService.getResults().pipe(operators.tap((/**
             * @param {?} searchResult
             * @return {?}
             */
            function (searchResult) {
                if (Object.keys(searchResult).length === 0) {
                    _this.search(_this.query, _this.options);
                }
            })), operators.filter((/**
             * @param {?} searchResult
             * @return {?}
             */
            function (searchResult) { return Object.keys(searchResult).length > 0; })));
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
            var queryParams = this.activatedRoute.snapshot.queryParams;
            this.search(queryParams.query, { currentPage: pageNumber });
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
            var queryParams = this.activatedRoute.snapshot.queryParams;
            this.search(queryParams.query, { sortCode: sortCode });
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
            { type: core.Component, args: [{
                        selector: 'cx-product-list',
                        template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        ProductListComponent.ctorParameters = function () { return [
            { type: core$1.ProductSearchService },
            { type: router.ActivatedRoute },
            { type: PageLayoutService }
        ]; };
        return ProductListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductFacetNavigationComponent = /** @class */ (function () {
        function ProductFacetNavigationComponent(modalService, activatedRoute, productSearchService) {
            this.modalService = modalService;
            this.activatedRoute = activatedRoute;
            this.productSearchService = productSearchService;
            this.iconTypes = ICON_TYPE;
            this.minPerFacet = 6;
            this.collapsedFacets = new Set();
            this.showAllPerFacetMap = new Map();
            this.queryCodec = new http.HttpUrlEncodingCodec();
        }
        Object.defineProperty(ProductFacetNavigationComponent.prototype, "visibleFacets", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.searchResult.facets) {
                    return [];
                }
                return this.searchResult.facets.filter((/**
                 * @param {?} facet
                 * @return {?}
                 */
                function (facet) { return facet.visible; }));
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
            this.updateParams$ = this.activatedRoute.params.pipe(operators.tap((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.activeFacetValueCode = params.categoryCode || params.brandCode;
            })));
            this.searchResult$ = this.productSearchService.getResults().pipe(operators.tap((/**
             * @param {?} searchResult
             * @return {?}
             */
            function (searchResult) {
                _this.searchResult = searchResult;
                if (_this.searchResult.facets) {
                    _this.searchResult.facets.forEach((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) {
                        _this.showAllPerFacetMap.set(el.name, false);
                    }));
                }
            })), operators.filter((/**
             * @param {?} searchResult
             * @return {?}
             */
            function (searchResult) { return Object.keys(searchResult).length > 0; })));
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
            { type: core.Component, args: [{
                        selector: 'cx-product-facet-navigation',
                        template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span class=\"cx-facet-pill-value\">{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n    <div class=\"cx-facet-group\">\n      <div class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n          <cx-icon\n            [type]=\"\n              isFacetCollapsed(facet.name)\n                ? iconTypes.EXPAND\n                : iconTypes.COLLAPSE\n            \"\n          ></cx-icon>\n        </a>\n      </div>\n      <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <div class=\"container\">\n    <button\n      class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n      (click)=\"openFilterModal(content)\"\n    >\n      {{ 'productList.filterBy.action' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<ng-container *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          {{ breadcrumb.facetValueName }}\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductFacetNavigationComponent.ctorParameters = function () { return [
            { type: ModalService },
            { type: router.ActivatedRoute },
            { type: core$1.ProductSearchService }
        ]; };
        return ProductFacetNavigationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductGridItemComponent = /** @class */ (function () {
        function ProductGridItemComponent() {
        }
        ProductGridItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-grid-item',
                        template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price.formattedValue }}\n  </div>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [productCode]=\"product.code\"\n></cx-add-to-cart>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductGridItemComponent.propDecorators = {
            product: [{ type: core.Input }]
        };
        return ProductGridItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductListItemComponent = /** @class */ (function () {
        function ProductListItemComponent() {
        }
        ProductListItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-list-item',
                        template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-image-container\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.nameHtml\"\n    ></a>\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [productCode]=\"product.code\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        ProductListItemComponent.propDecorators = {
            product: [{ type: core.Input }]
        };
        return ProductListItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductListModule = /** @class */ (function () {
        function ProductListModule() {
        }
        ProductListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    CMSProductListComponent: {
                                        component: ProductListComponent,
                                    },
                                    SearchResultsListComponent: {
                                        component: ProductListComponent,
                                    },
                                    ProductRefinementComponent: {
                                        component: ProductFacetNavigationComponent,
                                    },
                                },
                            }))),
                            router.RouterModule,
                            MediaModule,
                            AddToCartModule,
                            ItemCounterModule,
                            ListNavigationModule,
                            core$1.UrlModule,
                            core$1.I18nModule,
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ProductDetailOutlets = {
        INTRO: 'PDP.INTRO',
        PRICE: 'PDP.PRICE',
        SHARE: 'PDP.SHARE',
        SUMMARY: 'PDP.SUMMARY',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductSummaryComponent = /** @class */ (function () {
        function ProductSummaryComponent(currentProductService) {
            this.currentProductService = currentProductService;
            this.outlets = ProductDetailOutlets;
            this.product$ = this.currentProductService.getProduct();
        }
        ProductSummaryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-summary',
                        template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-template\n    [cxOutlet]=\"outlets.PRICE\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <div class=\"price\" aria-label=\"new item price\">\n      {{ product?.price?.formattedValue }}\n    </div>\n  </ng-template>\n\n  <ng-template\n    [cxOutlet]=\"outlets.SUMMARY\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <p [innerHTML]=\"product?.summary\" class=\"summary\"></p>\n  </ng-template>\n\n  <!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n  <!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n        <div>\n          <a href=\"#\" class=\"share btn-link\">\n            {{ 'productSummary.share' | cxTranslate }}\n          </a>\n        </div>\n      </ng-container> -->\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductSummaryComponent.ctorParameters = function () { return [
            { type: CurrentProductService }
        ]; };
        return ProductSummaryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductSummaryModule = /** @class */ (function () {
        function ProductSummaryModule() {
        }
        ProductSummaryModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.CmsModule,
                            OutletModule,
                            core$1.I18nModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductSummaryComponent: {
                                        component: ProductSummaryComponent,
                                    },
                                },
                            }))),
                        ],
                        declarations: [ProductSummaryComponent],
                        entryComponents: [ProductSummaryComponent],
                        exports: [ProductSummaryComponent],
                    },] }
        ];
        return ProductSummaryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductAttributesComponent = /** @class */ (function () {
        function ProductAttributesComponent(currentProductService) {
            this.currentProductService = currentProductService;
        }
        /**
         * @return {?}
         */
        ProductAttributesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.product$ = this.currentProductService.getProduct();
        };
        ProductAttributesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-attributes',
                        template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductAttributesComponent.ctorParameters = function () { return [
            { type: CurrentProductService }
        ]; };
        return ProductAttributesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewsComponent = /** @class */ (function () {
        function ProductReviewsComponent(reviewService, currentProductService, fb) {
            var _this = this;
            this.reviewService = reviewService;
            this.currentProductService = currentProductService;
            this.fb = fb;
            this.isWritingReview = false;
            // TODO: configurable
            this.initialMaxListItems = 5;
            this.product$ = this.currentProductService.getProduct();
            this.reviews$ = this.product$.pipe(operators.filter(Boolean), operators.switchMap((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return _this.reviewService.getByProductCode(product.code); })), operators.tap((/**
             * @return {?}
             */
            function () {
                _this.resetReviewForm();
                _this.maxListItems = _this.initialMaxListItems;
            })));
        }
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
         * @param {?} product
         * @return {?}
         */
        ProductReviewsComponent.prototype.submitReview = /**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            /** @type {?} */
            var reviewFormControls = this.reviewForm.controls;
            /** @type {?} */
            var review = {
                headline: reviewFormControls.title.value,
                comment: reviewFormControls.comment.value,
                rating: reviewFormControls.rating.value,
                alias: reviewFormControls.reviewerName.value,
            };
            this.reviewService.add(product.code, review);
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
            { type: core.Component, args: [{
                        selector: 'cx-product-reviews',
                        template: "<div class=\"container\" *ngIf=\"(product$ | async) as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductReviewsComponent.ctorParameters = function () { return [
            { type: core$1.ProductReviewService },
            { type: CurrentProductService },
            { type: forms.FormBuilder }
        ]; };
        return ProductReviewsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductReviewsModule = /** @class */ (function () {
        function ProductReviewsModule() {
        }
        ProductReviewsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            core$1.I18nModule,
                            StarRatingModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductReviewsTabComponent: {
                                        component: ProductReviewsComponent,
                                    },
                                },
                            }))),
                        ],
                        declarations: [ProductReviewsComponent],
                        entryComponents: [ProductReviewsComponent],
                        exports: [ProductReviewsComponent],
                    },] }
        ];
        return ProductReviewsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductAttributesModule = /** @class */ (function () {
        function ProductAttributesModule() {
        }
        ProductAttributesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.I18nModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductSpecsTabComponent: {
                                        component: ProductAttributesComponent,
                                    },
                                },
                            }))),
                        ],
                        declarations: [ProductAttributesComponent],
                        entryComponents: [ProductAttributesComponent],
                        exports: [ProductAttributesComponent],
                    },] }
        ];
        return ProductAttributesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductDetailsTabComponent = /** @class */ (function () {
        function ProductDetailsTabComponent(currentProductService) {
            this.currentProductService = currentProductService;
        }
        /**
         * @return {?}
         */
        ProductDetailsTabComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.product$ = this.currentProductService.getProduct();
        };
        ProductDetailsTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-details-tab',
                        template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductDetailsTabComponent.ctorParameters = function () { return [
            { type: CurrentProductService }
        ]; };
        return ProductDetailsTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductDetailsTabModule = /** @class */ (function () {
        function ProductDetailsTabModule() {
        }
        ProductDetailsTabModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductDetailsTabComponent: {
                                        component: ProductDetailsTabComponent,
                                    },
                                },
                            }))),
                        ],
                        declarations: [ProductDetailsTabComponent],
                        entryComponents: [ProductDetailsTabComponent],
                        exports: [ProductDetailsTabComponent],
                    },] }
        ];
        return ProductDetailsTabModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductTabsModule = /** @class */ (function () {
        function ProductTabsModule() {
        }
        ProductTabsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ProductAttributesModule,
                            ProductDetailsTabModule,
                            ProductReviewsModule,
                        ],
                    },] }
        ];
        return ProductTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductImagesComponent = /** @class */ (function () {
        function ProductImagesComponent(currentProductService) {
            var _this = this;
            this.currentProductService = currentProductService;
            this.mainMediaContainer = new rxjs.BehaviorSubject(null);
            this.product$ = this.currentProductService.getProduct().pipe(operators.filter(Boolean), operators.distinctUntilChanged(), operators.tap((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                return _this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {});
            })));
            this.thumbs$ = this.product$.pipe(operators.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return _this.createCarouselItems(product); })));
            this.mainImage$ = rxjs.combineLatest([
                this.product$,
                this.mainMediaContainer,
            ]).pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), _ = _b[0], container = _b[1];
                return container;
            })));
        }
        /**
         * @return {?}
         */
        ProductImagesComponent.prototype.getThumbs = /**
         * @return {?}
         */
        function () {
            return this.thumbs$;
        };
        /**
         * @return {?}
         */
        ProductImagesComponent.prototype.getMain = /**
         * @return {?}
         */
        function () {
            return this.mainImage$;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ProductImagesComponent.prototype.openImage = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.mainMediaContainer.next(item.media.container);
        };
        /** find the index of the main media in the list of media */
        /**
         * find the index of the main media in the list of media
         * @param {?} thumbs
         * @return {?}
         */
        ProductImagesComponent.prototype.getActive = /**
         * find the index of the main media in the list of media
         * @param {?} thumbs
         * @return {?}
         */
        function (thumbs) {
            return this.mainMediaContainer.pipe(operators.filter(Boolean), operators.map((/**
             * @param {?} container
             * @return {?}
             */
            function (container) {
                /** @type {?} */
                var current = thumbs.find((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    return t.media &&
                        container.zoom &&
                        t.media.container &&
                        t.media.container.zoom &&
                        t.media.container.zoom.url === container.zoom.url;
                }));
                return thumbs.indexOf(current);
            })));
        };
        /**
         * Return an array of CarouselItems for the product thumbnails.
         * In case there are less then 2 thumbs, we return null.
         */
        /**
         * Return an array of CarouselItems for the product thumbnails.
         * In case there are less then 2 thumbs, we return null.
         * @private
         * @param {?} product
         * @return {?}
         */
        ProductImagesComponent.prototype.createCarouselItems = /**
         * Return an array of CarouselItems for the product thumbnails.
         * In case there are less then 2 thumbs, we return null.
         * @private
         * @param {?} product
         * @return {?}
         */
        function (product) {
            if (!product.images ||
                !product.images.GALLERY ||
                product.images.GALLERY.length < 2) {
                return null;
            }
            return ((/** @type {?} */ (product.images.GALLERY))).map((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                return {
                    media: {
                        container: c,
                        format: 'thumbnail',
                    },
                };
            }));
        };
        ProductImagesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cx-product-images',
                        template: "<ng-container *ngIf=\"(getMain() | async) as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n<ng-container *ngIf=\"(getThumbs() | async) as thumbs\">\n  <cx-carousel\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    [minItemPixelSize]=\"120\"\n    [hideIndicators]=\"true\"\n    (open)=\"openImage($event)\"\n    [activeItem]=\"getActive(thumbs) | async\"\n  ></cx-carousel>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        ProductImagesComponent.ctorParameters = function () { return [
            { type: CurrentProductService }
        ]; };
        return ProductImagesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProductImagesModule = /** @class */ (function () {
        function ProductImagesModule() {
        }
        ProductImagesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            MediaModule,
                            OutletModule,
                            core$1.ConfigModule.withConfig((/** @type {?} */ ({
                                cmsComponents: {
                                    ProductImagesComponent: {
                                        component: ProductImagesComponent,
                                    },
                                },
                            }))),
                            CarouselModule,
                        ],
                        declarations: [ProductImagesComponent],
                        entryComponents: [ProductImagesComponent],
                    },] }
        ];
        return ProductImagesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsLibModule = /** @class */ (function () {
        function CmsLibModule() {
        }
        CmsLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
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
                            ProductReferencesModule,
                            OrderDetailsModule,
                            PaymentMethodsModule,
                            UpdateEmailModule,
                            UpdatePasswordModule,
                            UpdateProfileModule,
                            ConsentManagementModule,
                            CloseAccountModule,
                            CartComponentModule,
                            TabParagraphContainerModule,
                            OrderConfirmationModule,
                            // TODO:#2811 - uncomment to enable
                            // StoreFinderModule,
                            ProductImagesModule,
                            ProductSummaryModule,
                            ProductIntroModule,
                            CheckoutComponentModule,
                            ForgotPasswordModule,
                            ResetPasswordModule,
                        ],
                    },] }
        ];
        return CmsLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var markerIndex = findLastIndex(segments, (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var path = _a.path;
            return path === marker;
        }));
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$3 = { cxRoute: 'product' }, ɵ1 = {
        cxSuffixUrlMatcher: {
            marker: 'p',
            paramName: 'productCode',
        },
    };
    var ProductDetailsPageModule = /** @class */ (function () {
        function ProductDetailsPageModule() {
        }
        ProductDetailsPageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ0$3,
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
        return ProductDetailsPageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$4 = { cxRoute: 'category' }, ɵ1$1 = { pageLabel: 'search', cxRoute: 'search' }, ɵ2 = { cxRoute: 'brand' }, ɵ3 = {
        cxSuffixUrlMatcher: {
            marker: 'c',
            paramName: 'categoryCode',
        },
    };
    var ProductListingPageModule = /** @class */ (function () {
        function ProductListingPageModule() {
        }
        ProductListingPageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ0$4,
                                },
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ1$1,
                                },
                                {
                                    path: null,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ2,
                                },
                                {
                                    matcher: suffixUrlMatcher,
                                    canActivate: [CmsPageGuard],
                                    component: PageLayoutComponent,
                                    data: ɵ3,
                                },
                            ]),
                        ],
                    },] }
        ];
        return ProductListingPageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var b2cLayoutConfig = {
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
                    'Summary',
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
                slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var headerComponents = {
        HamburgerMenuComponent: {
            typeCode: 'HamburgerMenuComponent',
            flexType: 'HamburgerMenuComponent',
        },
        LoginComponent: {
            typeCode: 'LoginComponent',
            flexType: 'LoginComponent',
            uid: 'LoginComponent',
        },
    };
    /** @type {?} */
    var defaultPageHeaderConfig = {
        PreHeader: {
            componentIds: ['HamburgerMenuComponent'],
        },
        SiteLogin: {
            componentIds: ['LoginComponent'],
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function defaultCmsContentConfig() {
        return {
            cmsStructure: {
                components: __assign({}, headerComponents),
                slots: __assign({}, defaultPageHeaderConfig),
                pages: [],
            },
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultStorefrontRoutesConfig = {
        home: { paths: [''] },
        notFound: { paths: ['not-found'] },
        cart: { paths: ['cart'] },
        // semantic links for login related pages
        login: { paths: ['login'] },
        logout: { paths: ['logout'] },
        register: { paths: ['login/register'] },
        forgotPassword: { paths: ['login/forgot-password'] },
        checkout: { paths: ['checkout'] },
        checkoutShippingAddress: { paths: ['checkout/shipping-address'] },
        checkoutDeliveryMode: { paths: ['checkout/delivery-mode'] },
        checkoutPaymentDetails: { paths: ['checkout/payment-details'] },
        checkoutReviewOrder: { paths: ['checkout/review-order'] },
        orderConfirmation: { paths: ['order-confirmation'] },
        // plp routes
        search: { paths: ['search/:query'] },
        category: {
            paths: ['category/:categoryCode'],
            paramsMapping: { categoryCode: 'code' },
        },
        brand: { paths: ['Brands/:brandName/c/:brandCode'] },
        // pdp routes
        product: {
            paths: ['product/:productCode/:name'],
            paramsMapping: { productCode: 'code' },
        },
        termsAndConditions: { paths: ['terms-and-conditions'] },
        orderDetails: {
            paths: ['my-account/order/:orderCode'],
            paramsMapping: { orderCode: 'code' },
        },
        orders: {
            paths: ['my-account/orders'],
        },
    };
    /** @type {?} */
    var defaultRoutingConfig = {
        routing: {
            routes: defaultStorefrontRoutesConfig,
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RoutingModule = /** @class */ (function () {
        function RoutingModule() {
        }
        RoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            core$1.RoutingModule,
                            core$1.ConfigModule.withConfig(defaultRoutingConfig),
                            CmsRouteModule,
                        ],
                    },] }
        ];
        return RoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StorefrontFoundationModule = /** @class */ (function () {
        function StorefrontFoundationModule() {
        }
        StorefrontFoundationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            core$1.StateModule,
                            core$1.AuthModule.forRoot(),
                            core$1.ConfigModule.forRoot(),
                            RoutingModule,
                            core$1.I18nModule.forRoot(),
                            LayoutModule,
                        ],
                        providers: __spread(core$1.provideConfigFromMetaTags()),
                    },] }
        ];
        return StorefrontFoundationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                providers: [core$1.provideConfig(config)],
            };
        };
        StorefrontModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule.forRoot([], {
                                scrollPositionRestoration: 'enabled',
                                anchorScrolling: 'enabled',
                            }),
                            store.StoreModule.forRoot({}, {
                                runtimeChecks: {
                                    strictStateImmutability: true,
                                    strictStateSerializability: true,
                                    strictActionImmutability: true,
                                },
                            }),
                            effects.EffectsModule.forRoot([]),
                            StorefrontFoundationModule,
                            core$1.SiteContextModule.forRoot(),
                            core$1.SmartEditModule.forRoot(),
                            core$1.PersonalizationModule.forRoot(),
                            // opt-in explicitely
                            core$1.OccModule,
                            ProductDetailsPageModule,
                            ProductListingPageModule,
                        ],
                    },] }
        ];
        return StorefrontModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var B2cStorefrontModule = /** @class */ (function () {
        function B2cStorefrontModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        B2cStorefrontModule.withConfig = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: B2cStorefrontModule,
                providers: [core$1.provideConfig(config)],
            };
        };
        B2cStorefrontModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            StorefrontModule.withConfig((/** @type {?} */ ({
                                pwa: {
                                    enabled: true,
                                    addToHomeScreen: true,
                                },
                            }))),
                            core$1.ConfigModule.withConfig(b2cLayoutConfig),
                            core$1.ConfigModule.withConfigFactory(defaultCmsContentConfig),
                            // the cms lib module contains all components that added in the bundle
                            CmsLibModule,
                        ],
                        exports: [LayoutModule],
                    },] }
        ];
        return B2cStorefrontModule;
    }());

    exports.AddToCartComponent = AddToCartComponent;
    exports.AddToCartModule = AddToCartModule;
    exports.AddToHomeScreenBannerComponent = AddToHomeScreenBannerComponent;
    exports.AddToHomeScreenBtnComponent = AddToHomeScreenBtnComponent;
    exports.AddToHomeScreenComponent = AddToHomeScreenComponent;
    exports.AddedToCartDialogComponent = AddedToCartDialogComponent;
    exports.AddressBookComponent = AddressBookComponent;
    exports.AddressBookComponentService = AddressBookComponentService;
    exports.AddressBookModule = AddressBookModule;
    exports.AddressCardComponent = AddressCardComponent;
    exports.AddressFormComponent = AddressFormComponent;
    exports.AddressFormModule = AddressFormModule;
    exports.AutoFocusDirective = AutoFocusDirective;
    exports.B2cStorefrontModule = B2cStorefrontModule;
    exports.BREAKPOINT = BREAKPOINT;
    exports.BannerComponent = BannerComponent;
    exports.BannerModule = BannerModule;
    exports.BillingAddressFormComponent = BillingAddressFormComponent;
    exports.BillingAddressFormModule = BillingAddressFormModule;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.BreakpointService = BreakpointService;
    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;
    exports.CarouselComponent = CarouselComponent;
    exports.CarouselModule = CarouselModule;
    exports.CarouselService = CarouselService;
    exports.CartComponentModule = CartComponentModule;
    exports.CartDetailsComponent = CartDetailsComponent;
    exports.CartDetailsModule = CartDetailsModule;
    exports.CartItemComponent = CartItemComponent;
    exports.CartItemListComponent = CartItemListComponent;
    exports.CartNotEmptyGuard = CartNotEmptyGuard;
    exports.CartPageLayoutHandler = CartPageLayoutHandler;
    exports.CartSharedModule = CartSharedModule;
    exports.CartTotalsComponent = CartTotalsComponent;
    exports.CartTotalsModule = CartTotalsModule;
    exports.CategoryNavigationComponent = CategoryNavigationComponent;
    exports.CategoryNavigationModule = CategoryNavigationModule;
    exports.CheckoutComponentModule = CheckoutComponentModule;
    exports.CheckoutConfig = CheckoutConfig;
    exports.CheckoutDetailsService = CheckoutDetailsService;
    exports.CheckoutGuard = CheckoutGuard;
    exports.CheckoutOrchestratorComponent = CheckoutOrchestratorComponent;
    exports.CheckoutOrchestratorModule = CheckoutOrchestratorModule;
    exports.CheckoutOrderSummaryComponent = CheckoutOrderSummaryComponent;
    exports.CheckoutOrderSummaryModule = CheckoutOrderSummaryModule;
    exports.CheckoutProgressComponent = CheckoutProgressComponent;
    exports.CheckoutProgressMobileBottomComponent = CheckoutProgressMobileBottomComponent;
    exports.CheckoutProgressMobileBottomModule = CheckoutProgressMobileBottomModule;
    exports.CheckoutProgressMobileTopComponent = CheckoutProgressMobileTopComponent;
    exports.CheckoutProgressMobileTopModule = CheckoutProgressMobileTopModule;
    exports.CheckoutProgressModule = CheckoutProgressModule;
    exports.CheckoutStepType = CheckoutStepType;
    exports.CloseAccountComponent = CloseAccountComponent;
    exports.CloseAccountModalComponent = CloseAccountModalComponent;
    exports.CloseAccountModule = CloseAccountModule;
    exports.CmsComponentData = CmsComponentData;
    exports.CmsLibModule = CmsLibModule;
    exports.CmsPageGuard = CmsPageGuard;
    exports.CmsParagraphModule = CmsParagraphModule;
    exports.CmsRouteModule = CmsRouteModule;
    exports.ComponentWrapperDirective = ComponentWrapperDirective;
    exports.ConsentManagementComponent = ConsentManagementComponent;
    exports.ConsentManagementFormComponent = ConsentManagementFormComponent;
    exports.ConsentManagementModule = ConsentManagementModule;
    exports.CurrentProductService = CurrentProductService;
    exports.DeliveryModeComponent = DeliveryModeComponent;
    exports.DeliveryModeModule = DeliveryModeModule;
    exports.DeliveryModeSetGuard = DeliveryModeSetGuard;
    exports.FooterNavigationComponent = FooterNavigationComponent;
    exports.FooterNavigationModule = FooterNavigationModule;
    exports.ForgotPasswordComponent = ForgotPasswordComponent;
    exports.ForgotPasswordModule = ForgotPasswordModule;
    exports.FormUtils = FormUtils;
    exports.GenericLinkComponent = GenericLinkComponent;
    exports.GenericLinkModule = GenericLinkModule;
    exports.GlobalMessageComponent = GlobalMessageComponent;
    exports.GlobalMessageComponentModule = GlobalMessageComponentModule;
    exports.HamburgerMenuComponent = HamburgerMenuComponent;
    exports.HamburgerMenuModule = HamburgerMenuModule;
    exports.HamburgerMenuService = HamburgerMenuService;
    exports.ICON_TYPE = ICON_TYPE;
    exports.IconComponent = IconComponent;
    exports.IconConfig = IconConfig;
    exports.IconLoaderService = IconLoaderService;
    exports.IconModule = IconModule;
    exports.IconResourceType = IconResourceType;
    exports.ItemCounterComponent = ItemCounterComponent;
    exports.ItemCounterModule = ItemCounterModule;
    exports.LanguageCurrencyComponent = LanguageCurrencyComponent;
    exports.LayoutConfig = LayoutConfig;
    exports.LayoutModule = LayoutModule;
    exports.LinkComponent = LinkComponent;
    exports.LinkModule = LinkModule;
    exports.ListNavigationModule = ListNavigationModule;
    exports.LoginComponent = LoginComponent;
    exports.LoginFormComponent = LoginFormComponent;
    exports.LoginFormModule = LoginFormModule;
    exports.LoginModule = LoginModule;
    exports.LogoutGuard = LogoutGuard;
    exports.LogoutModule = LogoutModule;
    exports.MainModule = MainModule;
    exports.MediaComponent = MediaComponent;
    exports.MediaModule = MediaModule;
    exports.MediaService = MediaService;
    exports.MiniCartComponent = MiniCartComponent;
    exports.MiniCartModule = MiniCartModule;
    exports.ModalRef = ModalRef;
    exports.ModalService = ModalService;
    exports.NavigationComponent = NavigationComponent;
    exports.NavigationModule = NavigationModule;
    exports.NavigationService = NavigationService;
    exports.NavigationUIComponent = NavigationUIComponent;
    exports.OnlyNumberDirective = OnlyNumberDirective;
    exports.OrderConfirmationGuard = OrderConfirmationGuard;
    exports.OrderConfirmationItemsComponent = OrderConfirmationItemsComponent;
    exports.OrderConfirmationModule = OrderConfirmationModule;
    exports.OrderConfirmationOverviewComponent = OrderConfirmationOverviewComponent;
    exports.OrderConfirmationThankYouMessageComponent = OrderConfirmationThankYouMessageComponent;
    exports.OrderConfirmationTotalsComponent = OrderConfirmationTotalsComponent;
    exports.OrderDetailHeadlineComponent = OrderDetailHeadlineComponent;
    exports.OrderDetailItemsComponent = OrderDetailItemsComponent;
    exports.OrderDetailShippingComponent = OrderDetailShippingComponent;
    exports.OrderDetailTotalsComponent = OrderDetailTotalsComponent;
    exports.OrderDetailsModule = OrderDetailsModule;
    exports.OrderDetailsService = OrderDetailsService;
    exports.OrderHistoryComponent = OrderHistoryComponent;
    exports.OrderHistoryModule = OrderHistoryModule;
    exports.OrderModule = OrderModule;
    exports.OrderSummaryComponent = OrderSummaryComponent;
    exports.OutletDirective = OutletDirective;
    exports.OutletModule = OutletModule;
    exports.OutletPosition = OutletPosition;
    exports.OutletRefDirective = OutletRefDirective;
    exports.OutletRefModule = OutletRefModule;
    exports.OutletService = OutletService;
    exports.PAGE_LAYOUT_HANDLER = PAGE_LAYOUT_HANDLER;
    exports.PWAModuleConfig = PWAModuleConfig;
    exports.PageComponentModule = PageComponentModule;
    exports.PageLayoutComponent = PageLayoutComponent;
    exports.PageLayoutModule = PageLayoutModule;
    exports.PageLayoutService = PageLayoutService;
    exports.PageSlotComponent = PageSlotComponent;
    exports.PageSlotModule = PageSlotModule;
    exports.PaginationComponent = PaginationComponent;
    exports.ParagraphComponent = ParagraphComponent;
    exports.PaymentDetailsSetGuard = PaymentDetailsSetGuard;
    exports.PaymentFormComponent = PaymentFormComponent;
    exports.PaymentFormModule = PaymentFormModule;
    exports.PaymentMethodComponent = PaymentMethodComponent;
    exports.PaymentMethodModule = PaymentMethodModule;
    exports.PaymentMethodsComponent = PaymentMethodsComponent;
    exports.PaymentMethodsModule = PaymentMethodsModule;
    exports.PlaceOrderComponent = PlaceOrderComponent;
    exports.PlaceOrderModule = PlaceOrderModule;
    exports.ProductAttributesComponent = ProductAttributesComponent;
    exports.ProductCarouselComponent = ProductCarouselComponent;
    exports.ProductCarouselModule = ProductCarouselModule;
    exports.ProductCarouselService = ProductCarouselService;
    exports.ProductDetailOutlets = ProductDetailOutlets;
    exports.ProductDetailsPageModule = ProductDetailsPageModule;
    exports.ProductFacetNavigationComponent = ProductFacetNavigationComponent;
    exports.ProductGridItemComponent = ProductGridItemComponent;
    exports.ProductIntroComponent = ProductIntroComponent;
    exports.ProductIntroModule = ProductIntroModule;
    exports.ProductListComponent = ProductListComponent;
    exports.ProductListItemComponent = ProductListItemComponent;
    exports.ProductListModule = ProductListModule;
    exports.ProductListingPageModule = ProductListingPageModule;
    exports.ProductReferencesComponent = ProductReferencesComponent;
    exports.ProductReferencesModule = ProductReferencesModule;
    exports.ProductReviewsComponent = ProductReviewsComponent;
    exports.ProductReviewsModule = ProductReviewsModule;
    exports.ProductSummaryComponent = ProductSummaryComponent;
    exports.ProductSummaryModule = ProductSummaryModule;
    exports.ProductTabsModule = ProductTabsModule;
    exports.ProductViewComponent = ProductViewComponent;
    exports.PromotionsComponent = PromotionsComponent;
    exports.PromotionsModule = PromotionsModule;
    exports.PwaModule = PwaModule;
    exports.RegisterComponent = RegisterComponent;
    exports.RegisterComponentModule = RegisterComponentModule;
    exports.ResetPasswordFormComponent = ResetPasswordFormComponent;
    exports.ResetPasswordModule = ResetPasswordModule;
    exports.ReviewSubmitComponent = ReviewSubmitComponent;
    exports.ReviewSubmitModule = ReviewSubmitModule;
    exports.SearchBoxComponent = SearchBoxComponent;
    exports.SearchBoxComponentService = SearchBoxComponentService;
    exports.SearchBoxModule = SearchBoxModule;
    exports.SeoMetaService = SeoMetaService;
    exports.SeoModule = SeoModule;
    exports.ShippingAddressComponent = ShippingAddressComponent;
    exports.ShippingAddressModule = ShippingAddressModule;
    exports.ShippingAddressSetGuard = ShippingAddressSetGuard;
    exports.SiteContextComponentService = SiteContextComponentService;
    exports.SiteContextSelectorComponent = SiteContextSelectorComponent;
    exports.SiteContextSelectorModule = SiteContextSelectorModule;
    exports.SiteContextType = SiteContextType;
    exports.SortingComponent = SortingComponent;
    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.StarRatingComponent = StarRatingComponent;
    exports.StarRatingModule = StarRatingModule;
    exports.StorefrontComponent = StorefrontComponent;
    exports.StorefrontFoundationModule = StorefrontFoundationModule;
    exports.StorefrontModule = StorefrontModule;
    exports.SuggestedAddressDialogComponent = SuggestedAddressDialogComponent;
    exports.TabParagraphContainerComponent = TabParagraphContainerComponent;
    exports.TabParagraphContainerModule = TabParagraphContainerModule;
    exports.UpdateEmailComponent = UpdateEmailComponent;
    exports.UpdateEmailFormComponent = UpdateEmailFormComponent;
    exports.UpdateEmailModule = UpdateEmailModule;
    exports.UpdatePasswordComponent = UpdatePasswordComponent;
    exports.UpdatePasswordFormComponent = UpdatePasswordFormComponent;
    exports.UpdatePasswordModule = UpdatePasswordModule;
    exports.UpdateProfileComponent = UpdateProfileComponent;
    exports.UpdateProfileFormComponent = UpdateProfileFormComponent;
    exports.UpdateProfileModule = UpdateProfileModule;
    exports.UserComponentModule = UserComponentModule;
    exports.ViewModes = ViewModes;
    exports.b2cLayoutConfig = b2cLayoutConfig;
    exports.defaultCmsContentConfig = defaultCmsContentConfig;
    exports.defaultPWAModuleConfig = defaultPWAModuleConfig;
    exports.defaultPageHeaderConfig = defaultPageHeaderConfig;
    exports.fontawesomeIconConfig = fontawesomeIconConfig;
    exports.headerComponents = headerComponents;
    exports.initSeoService = initSeoService;
    exports.pwaConfigurationFactory = pwaConfigurationFactory;
    exports.pwaFactory = pwaFactory;
    exports.ɵa = OnlyNumberDirectiveModule;
    exports.ɵb = AutoFocusDirectiveModule;
    exports.ɵc = defaultCheckoutConfig;
    exports.ɵd = CheckoutConfigService;
    exports.ɵe = HighlightPipe;
    exports.ɵf = ProductAttributesModule;
    exports.ɵg = ProductDetailsTabModule;
    exports.ɵh = ProductDetailsTabComponent;
    exports.ɵi = CmsRoutesService;
    exports.ɵj = CmsMappingService;
    exports.ɵk = CmsI18nService;
    exports.ɵl = CmsGuardsService;
    exports.ɵm = ComponentMapperService;
    exports.ɵn = AddToHomeScreenService;
    exports.ɵo = ProductImagesModule;
    exports.ɵp = ProductImagesComponent;
    exports.ɵq = suffixUrlMatcher;
    exports.ɵr = addCmsRoute;
    exports.ɵs = htmlLangProvider;
    exports.ɵt = setHtmlLangAttribute;
    exports.ɵu = RoutingModule;
    exports.ɵv = defaultStorefrontRoutesConfig;
    exports.ɵw = defaultRoutingConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=spartacus-storefront.umd.js.map
